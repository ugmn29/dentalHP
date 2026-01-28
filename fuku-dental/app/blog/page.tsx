'use client';

import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { blogPosts, blogCategories } from '../../data/blog-posts';
import { Calendar, ChevronRight } from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('全て');

  const filteredPosts = selectedCategory === '全て'
    ? blogPosts
    : blogPosts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#5A4D41]">
      <Header />

      <main className="pt-0 pb-2">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-white to-[#FDFBF7] pt-2 pb-2 md:pt-2 md:pb-2">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[#395b45] font-bold tracking-[0.3em] text-xs md:text-sm block mb-2 uppercase opacity-70" style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}>
                Blog & News
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif">
                ブログ・お知らせ
              </h1>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#395b45] text-white shadow-lg scale-105'
                      : 'bg-white text-[#5A4D41] border-2 border-gray-200 hover:border-[#395b45] hover:text-[#395b45]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-2">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
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
                        <span className="inline-block bg-[#395b45] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative bg-gradient-to-br from-[#e8f2ed] to-[#d4e8dd] p-8 aspect-[16/9] flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📢</div>
                        <span className="inline-block bg-[#395b45] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {/* Date */}
                    <div className="flex items-center gap-2 mb-3 text-sm text-[#8D8070]">
                      <Calendar size={16} />
                      <time>{post.date}</time>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#5A4D41] mb-3 group-hover:text-[#395b45] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-[#8D8070] text-sm leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>

                    {/* Read More Link */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="inline-flex items-center gap-2 text-[#395b45] font-bold text-sm group-hover:gap-3 transition-all">
                        続きを読む
                        <ChevronRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-2">
                <p className="text-[#8D8070] text-lg">
                  該当する記事が見つかりませんでした。
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2 bg-gradient-to-b from-[#FDFBF7] to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-4">
                お気軽にご相談ください
              </h2>
              <p className="text-[#8D8070] mb-8">
                ご不明な点やご相談がございましたら、<br />
                お気軽にお問い合わせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-[#395b45] hover:bg-[#2d4835] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Calendar size={20} />
                  <span>WEB予約</span>
                </a>
                <a
                  href="tel:03-1234-5678"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#395b45] border-2 border-[#395b45] px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>📞 03-1234-5678</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
