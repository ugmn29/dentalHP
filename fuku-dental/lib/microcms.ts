import { createClient } from "microcms-js-sdk";

// microCMS クライアント（環境変数がない場合はnull）
const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN || "";
const apiKey = process.env.MICROCMS_API_KEY || "";

// デバッグ: process.stderr.write は removeConsole で消されない
process.stderr.write(`[microcms-debug] serviceDomain set: ${!!serviceDomain} len: ${serviceDomain.length}\n`);
process.stderr.write(`[microcms-debug] apiKey set: ${!!apiKey} len: ${apiKey.length}\n`);

const client =
  serviceDomain && apiKey
    ? createClient({ serviceDomain, apiKey })
    : null;

if (!client) {
  process.stderr.write(`[microcms-debug] client is NULL - env vars missing\n`);
} else {
  process.stderr.write(`[microcms-debug] client initialized OK\n`);
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
  if (!client) {
    return { contents: [], totalCount: 0, offset: 0, limit };
  }

  const filters =
    category && category !== "全て"
      ? `category[contains]${category}`
      : undefined;

  try {
    const data = await client.getList<MicroCMSArticle>({
      endpoint: "articles",
      queries: {
        limit,
        offset,
        orders: "-publishedDate,-publishedAt",
        ...(filters ? { filters } : {}),
      },
    });
    return data;
  } catch (error) {
    console.error("microCMS fetch error:", error);
    return { contents: [], totalCount: 0, offset: 0, limit };
  }
}

// 記事詳細を取得（slugまたはID）
export async function getArticleBySlug(
  slug: string
): Promise<MicroCMSArticle | null> {
  if (!client) return null;

  try {
    // まずslugフィールドで検索
    const data = await client.getList<MicroCMSArticle>({
      endpoint: "articles",
      queries: {
        filters: `slug[equals]${slug}`,
        limit: 1,
      },
    });
    if (data.contents.length > 0) {
      return data.contents[0];
    }

    // 見つからなければIDで取得
    const article = await client.get<MicroCMSArticle>({
      endpoint: "articles",
      contentId: slug,
    });
    return article;
  } catch {
    return null;
  }
}

// 全記事のslug一覧を取得（静的パス生成用）
export async function getAllArticleSlugs(): Promise<string[]> {
  if (!client) return [];

  try {
    const data = await client.getList<MicroCMSArticle>({
      endpoint: "articles",
      queries: {
        limit: 100,
        fields: ["id", "slug"],
      },
    });
    return data.contents.map((article) => article.slug || article.id);
  } catch {
    return [];
  }
}
