type MicroCMSConfig = {
  serviceDomain: string;
  apiKey: string;
};

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

  const res = await fetch(url, {
    headers: { "X-MICROCMS-API-KEY": config.apiKey },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`microCMS fetch failed: ${endpointPath} ${res.status}`);
  }

  return (await res.json()) as T;
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

// 記事一覧を取得
export async function getArticles(
  limit: number = 20,
  offset: number = 0,
  category?: string
): Promise<MicroCMSListResponse<MicroCMSArticle>> {
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
  if (!getMicroCMSConfig()) return null;

  try {
    // まずslugフィールドで検索
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

    // 見つからなければIDで取得
    return await fetchMicroCMS<MicroCMSArticle>(
      `articles/${encodeURIComponent(slug)}`
    );
  } catch {
    return null;
  }
}

// 全記事のslug一覧を取得（静的パス生成用）
export async function getAllArticleSlugs(): Promise<string[]> {
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
