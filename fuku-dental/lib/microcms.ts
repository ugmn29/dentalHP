import { createClient } from "microcms-js-sdk";

// microCMS クライアント（環境変数がない場合はnull）
// フォールバック: MICROCMS_SERVICE_DOMAIN が無ければ NEXT_PUBLIC_ 版を使う
const serviceDomain =
  process.env.MICROCMS_SERVICE_DOMAIN ||
  process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN ||
  "";
const apiKey =
  process.env.MICROCMS_API_KEY ||
  process.env.NEXT_PUBLIC_MICROCMS_API_KEY ||
  "";

const client =
  serviceDomain && apiKey
    ? createClient({ serviceDomain, apiKey })
    : null;

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
  const activeServiceDomain =
    process.env.MICROCMS_SERVICE_DOMAIN ||
    process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN ||
    "";
  const activeApiKey =
    process.env.MICROCMS_API_KEY ||
    process.env.NEXT_PUBLIC_MICROCMS_API_KEY ||
    "";

  if (!activeServiceDomain || !activeApiKey) {
    return { contents: [], totalCount: 0, offset: 0, limit };
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
      cacheBust: String(Date.now()),
    });
    if (filters) params.set("filters", filters);

    const res = await fetch(
      `https://${activeServiceDomain}.microcms.io/api/v1/articles?${params.toString()}`,
      { headers: { "X-MICROCMS-API-KEY": activeApiKey } }
    );
    if (!res.ok) throw new Error(`microCMS fetch failed: ${res.status}`);
    const data = (await res.json()) as MicroCMSListResponse<MicroCMSArticle>;
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
