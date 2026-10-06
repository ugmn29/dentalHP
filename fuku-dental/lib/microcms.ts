import { readFile } from "node:fs/promises";
import path from "node:path";

type MicroCMSConfig = {
  serviceDomain: string;
  apiKey: string;
};

class MicroCMSRequestError extends Error {
  constructor(
    endpointPath: string,
    readonly status: number
  ) {
    super(`microCMS fetch failed: ${endpointPath} ${status}`);
  }
}

function getMicroCMSConfig(): MicroCMSConfig | null {
  const serviceDomain =
    process.env.MICROCMS_SERVICE_DOMAIN ||
    process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN ||
    "";
  const apiKey =
    process.env.MICROCMS_API_KEY ||
    process.env.NEXT_PUBLIC_MICROCMS_API_KEY ||
    "";

  if (!serviceDomain || !apiKey) return null;
  return { serviceDomain, apiKey };
}

function getMicroCMSCacheBust(): string {
  const buildMarker =
    process.env.CF_PAGES_COMMIT_SHA ||
    process.env.CF_PAGES_URL ||
    process.env.NEXT_PUBLIC_BUILD_ID ||
    "local";

  return `${buildMarker}-${Date.now()}`;
}

function withMicroCMSCacheBust(
  params: URLSearchParams = new URLSearchParams()
): URLSearchParams {
  params.set("cacheBust", getMicroCMSCacheBust());
  return params;
}

async function fetchMicroCMS<T>(
  endpointPath: string,
  params: URLSearchParams = new URLSearchParams()
): Promise<T | null> {
  const config = getMicroCMSConfig();
  if (!config) return null;

  const requestParams = withMicroCMSCacheBust(params);
  const search = requestParams.toString();
  const url = `https://${config.serviceDomain}.microcms.io/api/v1/${endpointPath}${
    search ? `?${search}` : ""
  }`;

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const res = await fetch(url, {
      headers: { "X-MICROCMS-API-KEY": config.apiKey },
      cache: "no-store",
    });

    if (res.ok) {
      return (await res.json()) as T;
    }

    const retryable = res.status === 429 || res.status >= 500;
    if (!retryable || attempt === 4) {
      throw new MicroCMSRequestError(endpointPath, res.status);
    }

    await new Promise((resolve) =>
      setTimeout(resolve, 250 * 2 ** attempt)
    );
  }

  return null;
}

// microCMS の記事型
export interface MicroCMSArticle {
  id: string;
  title: string;
  body: string;
  excerpt?: string;
  thumbnail?: {
    url: string;
    width?: number;
    height?: number;
  };
  category?: string[];
  slug?: string;
  publishedDate?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

export interface MicroCMSListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

const generatedArticlesPath = path.join(
  process.cwd(),
  "generated",
  "microcms-articles.json"
);
let generatedArticlesPromise: Promise<MicroCMSArticle[] | null> | null = null;

async function getGeneratedArticles(): Promise<MicroCMSArticle[] | null> {
  if (!generatedArticlesPromise) {
    generatedArticlesPromise = readFile(generatedArticlesPath, "utf8")
      .then((contents) => JSON.parse(contents) as MicroCMSArticle[])
      .catch((error: NodeJS.ErrnoException) => {
        if (error.code === "ENOENT") return null;
        throw error;
      });
  }

  return generatedArticlesPromise;
}

function articleTimestamp(article: MicroCMSArticle): number {
  return Date.parse(article.publishedDate || article.publishedAt || "") || 0;
}

// 記事一覧を取得
export async function getArticles(
  limit: number = 20,
  offset: number = 0,
  category?: string
): Promise<MicroCMSListResponse<MicroCMSArticle>> {
  const generatedArticles = await getGeneratedArticles();
  if (generatedArticles) {
    const filtered = generatedArticles
      .filter(
        (article) =>
          !category ||
          category === "全て" ||
          article.category?.includes(category)
      )
      .sort((a, b) => articleTimestamp(b) - articleTimestamp(a));

    return {
      contents: filtered.slice(offset, offset + limit),
      totalCount: filtered.length,
      offset,
      limit,
    };
  }

  if (!getMicroCMSConfig()) {
    return { contents: [], totalCount: 0, offset, limit };
  }

  const filters =
    category && category !== "全て"
      ? `category[contains]${category}`
      : undefined;

  try {
    const params = new URLSearchParams({
      limit: String(limit),
      offset: String(offset),
      orders: "-publishedDate,-publishedAt",
    });
    if (filters) params.set("filters", filters);

    const data = await fetchMicroCMS<
      MicroCMSListResponse<MicroCMSArticle>
    >("articles", params);
    return (
      data ?? { contents: [], totalCount: 0, offset, limit }
    );
  } catch (error) {
    console.error("microCMS fetch error:", error);
    return { contents: [], totalCount: 0, offset, limit };
  }
}

// 記事詳細を取得（slugまたはID）
export async function getArticleBySlug(
  slug: string
): Promise<MicroCMSArticle | null> {
  const generatedArticles = await getGeneratedArticles();
  if (generatedArticles) {
    return (
      generatedArticles.find(
        (article) => article.id === slug || article.slug === slug
      ) ?? null
    );
  }

  if (!getMicroCMSConfig()) return null;

  try {
    try {
      const article = await fetchMicroCMS<MicroCMSArticle>(
        `articles/${encodeURIComponent(slug)}`
      );
      if (article) return article;
    } catch (error) {
      if (!(error instanceof MicroCMSRequestError) || error.status !== 404) {
        throw error;
      }
    }

    const data = await fetchMicroCMS<
      MicroCMSListResponse<MicroCMSArticle>
    >(
      "articles",
      new URLSearchParams({
        filters: `slug[equals]${slug}`,
        limit: "1",
      })
    );
    if (data?.contents.length) {
      return data.contents[0];
    }
  } catch (error) {
    console.error("microCMS article fetch error:", error);
    return null;
  }

  return null;
}

// 全記事のslug一覧を取得（静的パス生成用）
export async function getAllArticleSlugs(): Promise<string[]> {
  const generatedArticles = await getGeneratedArticles();
  if (generatedArticles) {
    return generatedArticles.map((article) => article.slug || article.id);
  }

  if (!getMicroCMSConfig()) return [];

  try {
    const data = await fetchMicroCMS<
      MicroCMSListResponse<MicroCMSArticle>
    >(
      "articles",
      new URLSearchParams({
        limit: "100",
        fields: "id,slug",
      })
    );
    return data?.contents.map((article) => article.slug || article.id) ?? [];
  } catch {
    return [];
  }
}
