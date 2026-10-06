'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

type LegacyArticleRedirectProps = {
  articles: Array<{ id: string; slug: string }>;
};

export function LegacyArticleRedirect({
  articles,
}: LegacyArticleRedirectProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || '';
  const article = articles.find((item) => item.id === id || item.slug === id);

  useEffect(() => {
    if (!article) return;
    router.replace(`/blog/${encodeURIComponent(article.slug)}`);
  }, [article, router]);

  return (
    <main className="py-20 text-center">
      <h1 className="text-2xl font-bold mb-4 text-[#5A4D41]">
        {article ? '記事ページへ移動しています' : '記事が見つかりません'}
      </h1>
      <Link href="/blog" className="text-[#395b45] font-bold hover:underline">
        ブログ一覧に戻る
      </Link>
    </main>
  );
}
