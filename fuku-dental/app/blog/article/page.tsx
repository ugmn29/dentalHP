'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { useSearchParams } from 'next/navigation';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Suspense } from 'react';

interface Article {
  id: string;
  title: string;
  body: string;
  excerpt?: string;
  thumbnail?: { url: string };
  category?: string[];
  slug?: string;
  publishedDate?: string;
  publishedAt?: string;
}

function ArticleContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || '';
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) {
      setError('記事IDが指定されていません');
      setLoading(false);
      return;
    }

    const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || '';
    const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '';

    if (!serviceDomain || !apiKey) {
      setError('microCMSが設定されていません');
      setLoading(false);
      return;
    }

    fetch(`https://${serviceDomain}.microcms.io/api/v1/articles/${id}`, {
      headers: { 'X-MICROCMS-API-KEY': apiKey },
    })
      .then((res) => {
        if (!res.ok) throw new Error('記事が見つかりません');
        return res.json();
      })
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <main className="py-20 text-center">
        <div className="inline-block w-8 h-8 border-4 border-[#395b45] border-t-transparent rounded-full animate-spin" />
        <p className="mt-4 text-[#8D8070]">記事を読み込み中...</p>
      </main>
    );
  }

  if (error || !article) {
    return (
      <main className="py-20 text-center">
        <h1 className="text-2xl font-bold mb-4 text-[#5A4D41]">
          {error || '記事が見つかりません'}
        </h1>
        <a href="/blog" className="text-[#395b45] font-bold hover:underline">
          ブログ一覧に戻る
        </a>
      </main>
    );
  }

  const date = article.publishedDate || article.publishedAt?.split('T')[0] || '';
  const category = Array.isArray(article.category)
    ? article.category[0] || 'お知らせ'
    : 'お知らせ';

  return (
    <main className="pt-0 pb-12">
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#FDFBF7] pt-2 pb-4">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-[#395b45] font-bold text-sm mb-6 hover:gap-3 transition-all"
            >
              <ArrowLeft size={16} />
              ブログ一覧に戻る
            </a>

            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block bg-[#395b45] text-white px-3 py-1 rounded-full text-xs font-bold">
                {category}
              </span>
              <div className="flex items-center gap-2 text-sm text-[#8D8070]">
                <Calendar size={16} />
                <time>{date}</time>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Thumbnail */}
      {article.thumbnail && (
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <img
                src={article.thumbnail.url}
                alt={article.title}
                className="w-full rounded-2xl shadow-lg aspect-[16/9] object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Body */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div
            className="article-body max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />
        </div>
      </section>

      {/* Back to blog */}
      <section className="pb-8">
        <div className="container mx-auto px-4 text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#395b45] hover:bg-[#2d4835] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowLeft size={20} />
            ブログ一覧に戻る
          </a>
        </div>
      </section>
    </main>
  );
}

export default function BlogArticlePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#5A4D41]">
      <Header />
      <Suspense
        fallback={
          <main className="py-20 text-center">
            <div className="inline-block w-8 h-8 border-4 border-[#395b45] border-t-transparent rounded-full animate-spin" />
          </main>
        }
      >
        <ArticleContent />
      </Suspense>
      <Footer />
    </div>
  );
}
