import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { blogPosts as staticPosts, blogCategories } from '../../data/blog-posts';
import { getArticles } from '../../lib/microcms';
import BlogClient from './BlogClient';

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  thumbnail?: string;
  summary: string;
  slug?: string;
  source: 'static' | 'microcms';
}

export default async function BlogPage() {
  // microCMS から記事取得（ビルド時）
  let cmsPosts: BlogPost[] = [];
  try {
    const data = await getArticles(50);
    cmsPosts = data.contents.map((article) => ({
      id: article.id,
      title: article.title,
      category: Array.isArray(article.category)
        ? article.category[0] || 'お知らせ'
        : 'お知らせ',
      date: article.publishedDate || article.publishedAt?.split('T')[0] || '',
      thumbnail: article.thumbnail?.url,
      summary:
        article.excerpt ||
        article.body?.replace(/<[^>]+>/g, '').slice(0, 100) + '...',
      slug: article.slug || article.id,
      source: 'microcms' as const,
    }));
  } catch (e) {
    console.error('microCMS fetch error:', e);
  }

  // 静的データを変換
  const staticData: BlogPost[] = staticPosts.map((p) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    date: p.date,
    thumbnail: p.thumbnail,
    summary: p.summary,
    source: 'static' as const,
  }));

  // マージして日付順ソート
  const allPosts = [...cmsPosts, ...staticData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#5A4D41]">
      <Header />
      <BlogClient posts={allPosts} categories={blogCategories} />
      <Footer />
    </div>
  );
}
