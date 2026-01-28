"use client";

import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ArrowLeft } from 'lucide-react';

export default function CasesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "前歯の隙間改善",
      before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      description: "マウスピース矯正で、目立たずに短期間で隙間を改善しました。",
      patient: "20代 女性"
    },
    {
      id: 2,
      title: "銀歯をセラミックに",
      before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
      description: "古い銀歯をセラミックに置き換え、自然な見た目を取り戻しました。",
      patient: "30代 男性"
    },
    {
      id: 3,
      title: "ホワイトニング",
      before: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1584036561566-b93a945c3cbc?auto=format&fit=crop&q=80&w=800",
      description: "オフィスホワイトニングで、1回の施術で透明感のある白さに。",
      patient: "20代 女性"
    },
    {
      id: 4,
      title: "インプラント治療",
      before: "https://images.unsplash.com/photo-1596464716127-f9a87595ca58?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1579684385180-1ea55f6196e6?auto=format&fit=crop&q=80&w=800",
      description: "失った歯をインプラントで復元し、しっかり噛めるようになりました。",
      patient: "50代 男性"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#5A4D41]">
      <Header />

      <main className="py-2">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <a href="/" className="inline-flex items-center gap-2 text-[#B2198B] font-bold mb-8 hover:underline">
            <ArrowLeft size={20} />
            トップページに戻る
          </a>

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#5A4D41] mb-4">症例集</h1>
            <div className="w-16 h-1 bg-[#B2198B] mx-auto rounded-full mb-4"></div>
            <p className="text-[#8D8070]">当院での治療事例をご紹介いたします</p>
          </div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
                {/* Title */}
                <div className="bg-gradient-to-r from-[#FCE4F5] to-[#F8D9F0] p-6">
                  <h2 className="text-2xl font-bold text-[#B2198B]">{caseStudy.title}</h2>
                  <p className="text-sm text-[#8D8070] mt-1">{caseStudy.patient}</p>
                </div>

                {/* Before/After Images */}
                <div className="p-6">
                  <div className="space-y-4">
                    {/* Before Image */}
                    <div className="relative">
                      <div className="absolute top-2 left-2 bg-[#5A4D41] text-white px-3 py-1 rounded-full font-bold text-xs z-10">
                        Before
                      </div>
                      <img
                        src={caseStudy.before}
                        alt={`${caseStudy.title} - Before`}
                        className="w-full aspect-[3/2] object-cover rounded-2xl shadow-lg"
                      />
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-90">
                        <path d="M5 12 L19 12 M15 8 L19 12 L15 16" stroke="#B2198B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {/* After Image */}
                    <div className="relative">
                      <div className="absolute top-2 left-2 bg-[#B2198B] text-white px-3 py-1 rounded-full font-bold text-xs z-10">
                        After
                      </div>
                      <img
                        src={caseStudy.after}
                        alt={`${caseStudy.title} - After`}
                        className="w-full aspect-[3/2] object-cover rounded-2xl shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#5A4D41] mt-6 leading-relaxed">{caseStudy.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
