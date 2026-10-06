import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { getArticles } from '@/lib/microcms';
import { LegacyArticleRedirect } from './LegacyArticleRedirect';

export const metadata: Metadata = {
  title: 'ブログ記事を移動しました｜Fデンタルオフィス豊洲',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://fshika.com/blog' },
};

export default async function LegacyBlogArticlePage() {
  const data = await getArticles(100);
  const articles = data.contents.map((article) => ({
    id: article.id,
    slug: article.slug || article.id,
  }));

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#5A4D41]">
      <Header />
      <Suspense fallback={<main className="py-20 text-center">移動しています...</main>}>
        <LegacyArticleRedirect articles={articles} />
      </Suspense>
      <Footer />
    </div>
  );
}
