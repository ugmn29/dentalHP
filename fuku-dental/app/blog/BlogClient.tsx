'use client';

import React, { useEffect, useState } from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import type { BlogPost } from './page';
import { ReservationCta } from '@/components/ReservationCta';

interface Props {
  posts: BlogPost[];
  categories: string[];
}

type MicroCMSArticle = {
  id: string;
  title?: string;
  body?: string;
  excerpt?: string;
  thumbnail?: { url?: string };
  category?: string[];
  slug?: string;
  publishedDate?: string;
  publishedAt?: string;
};

function articleToPost(article: MicroCMSArticle): BlogPost {
  const plainBody = (article.body || '').replace(/<[^>]+>/g, '');
  return {
    id: article.id,
    title: article.title || '無題',
    category: Array.isArray(article.category)
      ? article.category[0] || 'お知らせ'
      : 'お知らせ',
    date: article.publishedDate || article.publishedAt?.split('T')[0] || '',
    thumbnail: article.thumbnail?.url,
    summary: article.excerpt || (plainBody ? plainBody.slice(0, 100) + '...' : ''),
    slug: article.slug || article.id,
    source: 'microcms',
  };
}

export default function BlogClient({ posts, categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState('全て');
  const [runtimePosts, setRuntimePosts] = useState(posts);

  useEffect(() => {
    const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || '';
    const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '';
    if (!serviceDomain || !apiKey) return;

    const params = new URLSearchParams({
      limit: '50',
      orders: '-publishedDate,-publishedAt',
      cacheBust: String(Date.now()),
    });

    fetch(`https://${serviceDomain}.microcms.io/api/v1/articles?${params.toString()}`, {
      headers: { 'X-MICROCMS-API-KEY': apiKey },
    })
      .then((res) => {
        if (!res.ok) throw new Error('microCMS articles fetch failed');
        return res.json();
      })
      .then((data) => {
        const nextPosts = (data.contents || [])
          .map(articleToPost)
          .sort(
            (a: BlogPost, b: BlogPost) =>
              new Date(b.date).getTime() - new Date(a.date).getTime()
          );
        if (nextPosts.length > 0) setRuntimePosts(nextPosts);
      })
      .catch((error) => {
        console.error('microCMS runtime fetch error:', error);
      });
  }, []);

  const filteredPosts =
    selectedCategory === '全て'
      ? runtimePosts
      : runtimePosts.filter((p) => p.category === selectedCategory);

  return (
    <main className="pt-0 pb-2 overflow-x-hidden" style={{ wordBreak: 'normal', overflowWrap: 'anywhere' }}>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-white to-[#FDFBF7] pt-8 pb-6 md:pt-10 md:pb-8 border-b border-[#E8E0D4]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#C5A572] font-bold tracking-[0.22em] text-[11px] md:text-xs block mb-3 uppercase">
              BLOG / NEWS
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif tracking-normal">
              ブログ・お知らせ
            </h1>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-[#FDFBF7] border-b border-[#E8E0D4]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-bold text-sm transition-colors duration-200 border ${
                  selectedCategory === category
                    ? 'bg-[#395b45] text-white border-[#395b45] shadow-sm'
                    : 'bg-white/80 text-[#5A4D41] border-[#E0D7CA] hover:border-[#C5A572] hover:text-[#395b45]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 md:py-10 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
            {filteredPosts.map((post) => {
              const href =
                post.source === 'microcms'
                  ? `/blog/article?id=${post.id}`
                  : undefined;
              const Tag = href ? 'a' : 'div';
              return (
                <Tag
                  key={`${post.source}-${post.id}`}
                  {...(href ? { href } : {})}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group block border border-[#E8E0D4]"
                >
                  {/* Thumbnail */}
                  {post.thumbnail ? (
                    <div className="relative overflow-hidden">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block bg-[#395b45] text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative bg-[#F5F0E8] p-8 aspect-[16/9] flex items-center justify-center border-b border-[#E8E0D4]">
                      <div className="text-center">
                        <span className="inline-block bg-white/85 text-[#395b45] px-4 py-1.5 rounded-full text-xs font-bold border border-[#D8CDBD] shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-sm text-[#8D8070]">
                      <Calendar size={16} />
                      <time>{post.date}</time>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-[#5A4D41] mb-3 group-hover:text-[#395b45] transition-colors line-clamp-2 font-serif leading-relaxed">
                      {post.title}
                    </h3>

                    <p className="text-[#8D8070] text-sm leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>

                    {post.source === 'microcms' && (
                      <div className="mt-4 pt-4 border-t border-[#EEE7DD]">
                        <span className="inline-flex items-center gap-2 text-[#395b45] font-bold text-sm group-hover:gap-3 transition-all">
                          続きを読む
                          <ChevronRight size={16} />
                        </span>
                      </div>
                    )}
                  </div>
                </Tag>
              );
            })}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-2">
              <p className="text-[#8D8070] text-lg">
                該当する記事が見つかりませんでした。
              </p>
            </div>
          )}
        </div>
      </section>

      <ReservationCta />

    </main>
  );
}
