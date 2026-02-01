'use client';

import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { caseStudies, categories } from '../../data/case-studies';
import { Calendar, User, Clock } from 'lucide-react';

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('全て');

  const filteredCases = selectedCategory === '全て'
    ? caseStudies
    : caseStudies.filter(c => c.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#5A4D41]">
      <Header />

      <main className="pt-2 pb-2">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-white to-[#FDFBF7] py-2 md:py-2">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[#395b45] font-bold tracking-[0.3em] text-xs md:text-sm block mb-3 uppercase opacity-70">
                Case Studies
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif mb-4">
                症例紹介
              </h1>
              <p className="text-[#8D8070] text-base md:text-lg">
                当院での治療実績をご紹介します。患者さまの笑顔と健康のために、一つ一つの治療に真摯に向き合っています。
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
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

        {/* Case Studies Grid */}
        <section className="py-2">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredCases.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Before/After Images */}
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-0">
                      {/* Before */}
                      <div className="relative">
                        <img
                          src={caseStudy.beforeImage}
                          alt={`${caseStudy.title} - Before`}
                          className="w-full aspect-[16/9] object-cover"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="bg-gray-600 text-white px-3 py-1 rounded-md font-bold text-xs">
                            Before
                          </span>
                        </div>
                      </div>

                      {/* After */}
                      <div className="relative">
                        <img
                          src={caseStudy.afterImage}
                          alt={`${caseStudy.title} - After`}
                          className="w-full aspect-[16/9] object-cover border-l-2 border-white"
                        />
                        <div className="absolute top-2 right-2">
                          <span className="bg-[#395b45] text-white px-3 py-1 rounded-md font-bold text-xs">
                            After
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Tag */}
                    <div className="mb-3">
                      <span className="inline-block bg-[#e8f2ed] text-[#395b45] px-3 py-1 rounded-full text-xs font-bold">
                        {caseStudy.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#5A4D41] mb-3 group-hover:text-[#395b45] transition-colors">
                      {caseStudy.title}
                    </h3>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-[#8D8070]">
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>{caseStudy.patient}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{caseStudy.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#8D8070] text-sm leading-relaxed line-clamp-3">
                      {caseStudy.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredCases.length === 0 && (
              <div className="text-center py-2">
                <p className="text-[#8D8070] text-lg">
                  該当する症例が見つかりませんでした。
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
                あなたに最適な治療方法をご提案いたします。<br />
                まずは無料カウンセリングでお悩みをお聞かせください。
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
