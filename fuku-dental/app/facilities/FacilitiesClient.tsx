"use client";

import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageImage } from '@/components/PageImage';
import { ArrowLeft } from 'lucide-react';

export default function FacilitiesPage() {
  const facilities = [
    {
      id: "01",
      title: "立体的に確認できる",
      highlight: "歯科用CT",
      summary: "精密な診断と治療計画のために",
      details: [
        "歯や顎の骨、神経の位置などを3次元で確認できる歯科用CTを導入しています。",
        "インプラント、親知らず、根管治療など、精密な診断が必要な治療で活用します。",
        "事前に状態を把握することで、より安全性に配慮した治療計画につなげます。"
      ],
      imageId: "dental-ct",
      imageAlt: "精密診断に用いる歯科用CT"
    },
    {
      id: "02",
      title: "細部まで確認する",
      highlight: "マイクロスコープ・拡大鏡",
      summary: "できるだけ精密な処置のために",
      details: [
        "肉眼では見えにくい細かな部分を拡大して確認しながら診療を行います。",
        "むし歯治療、根管治療、セラミック治療など、精度が求められる治療で役立ちます。",
        "歯をできるだけ残す治療を行うため、必要な部分を丁寧に見極めます。"
      ],
      imageId: "microscope",
      imageAlt: "マイクロスコープと拡大鏡による精密治療"
    },
    {
      id: "03",
      title: "負担の少ない型取りに役立つ",
      highlight: "3Dスキャナー",
      summary: "お口の状態をデジタルで記録",
      details: [
        "お口の中をデジタルで読み取り、歯並びや噛み合わせの状態を確認します。",
        "従来の型取りが苦手な方にも配慮し、治療説明や経過確認に活用します。",
        "矯正相談や補綴治療などで、患者様にも状態を見ていただきながら説明できます。"
      ],
      imageId: "3d-scanner",
      imageAlt: "口腔内3Dスキャナー"
    },
    {
      id: "04",
      title: "状態を一緒に確認できる",
      highlight: "口腔内写真・ペン型カメラ",
      summary: "見える説明で不安を減らす",
      details: [
        "むし歯や歯ぐきの状態などを写真やカメラで記録し、画面で共有します。",
        "治療前後の変化や、今後注意したいポイントを視覚的に説明します。",
        "患者様が納得して治療を選べるよう、わかりやすい説明を大切にしています。"
      ],
      imageId: "intraoral-camera",
      imageAlt: "口腔内写真とペン型カメラによる説明"
    },
    {
      id: "05",
      title: "衛生管理を徹底した",
      highlight: "滅菌室・衛生管理設備",
      summary: "安心・安全な治療環境",
      details: [
        "治療に使用する器具は、滅菌処理や衛生管理を徹底しています。",
        "使い捨て器具も適切に取り入れ、感染対策に配慮した診療環境を整えています。",
        "患者様に安心して治療を受けていただけるよう、院内の清潔管理を大切にしています。"
      ],
      imageId: "sterilization",
      imageAlt: "滅菌室と衛生管理設備"
    },
    {
      id: "06",
      title: "治療中の負担を抑える",
      highlight: "痛みに配慮した治療機器",
      summary: "歯科治療が苦手な方にも配慮",
      details: [
        "表面麻酔や電動麻酔器などを用い、麻酔時の痛みに配慮します。",
        "治療が苦手な方にも、できるだけ不安や負担を抑えた診療を心がけています。",
        "処置内容に応じて、患者様の状態を確認しながら丁寧に進めます。"
      ],
      imageId: "pain-care",
      imageAlt: "痛みに配慮した治療機器"
    },
    {
      id: "07",
      title: "お子様にも配慮した",
      highlight: "天井テレビ付き診療室",
      summary: "親子で通いやすい診療環境",
      details: [
        "診療中もお子様がリラックスして過ごせるよう、天井テレビを備えた診療室をご用意しています。",
        "キッズスペースではなく、診療中の不安を和らげるための設備として活用します。",
        "保護者の方にも安心してご相談いただけるよう、親子で通いやすい環境づくりを心がけています。"
      ],
      imageId: "ceiling-tv",
      imageAlt: "お子様にも配慮した天井テレビ付き診療室"
    },
    {
      id: "08",
      title: "じっくり相談できる",
      highlight: "カウンセリング環境",
      summary: "納得いただける治療のために",
      details: [
        "治療前にお悩みやご希望を伺い、必要な検査内容や治療方針を説明します。",
        "写真やデジタル資料を使いながら、治療の選択肢をできるだけわかりやすくお伝えします。",
        "疑問や不安を残したまま進めないよう、相談しやすい雰囲気づくりを大切にしています。"
      ],
      imageId: "counseling",
      imageAlt: "じっくり相談できるカウンセリング環境"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#5A4D41] overflow-x-hidden" style={{ wordBreak: 'normal', overflowWrap: 'anywhere' }}>
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
            <h1 className="text-4xl md:text-5xl font-bold text-[#5A4D41] mb-4">院内設備</h1>
            <div className="w-16 h-1 bg-[#B2198B] mx-auto rounded-full mb-4"></div>
            <p className="text-[#8D8070]">患者様に安心して治療を受けていただける環境づくり</p>
          </div>

          {/* Facilities List - Same Style as Features Section */}
          <div className="space-y-12 max-w-7xl mx-auto">
            {facilities.map((facility, index) => (
              <div
                key={facility.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform group-hover:scale-[1.02] transition-transform duration-500">
                    <PageImage
                      path="/facilities"
                      imageId={facility.imageId}
                      alt={facility.imageAlt}
                      className="w-full h-auto aspect-[16/9] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6 relative -mt-4">
                  {/* Number - Large and in the background */}
                  <div className="absolute -top-12 md:-top-16 right-0 pointer-events-none z-0" style={{ transform: 'scaleX(0.7)' }}>
                    <div className="text-[140px] md:text-[170px] font-serif font-light italic text-transparent bg-clip-text bg-gradient-to-b from-[#F4C1E8]/60 to-[#B2198B]/15 leading-none select-none" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                      {facility.id}
                    </div>
                    <div className="absolute inset-0 text-[140px] md:text-[170px] font-serif font-light italic text-[#F4C1E8]/8 leading-none blur-[3px] -z-10" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                      {facility.id}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <p className="text-lg md:text-xl font-bold text-[#5A4D41] mb-1" style={{ fontFamily: 'Georgia, "Yu Mincho", "Hiragino Mincho ProN", serif' }}>
                      {facility.title}
                    </p>
                    <h3 className="relative inline-block">
                      <span className="block text-[#B2198B] text-4xl md:text-5xl lg:text-6xl font-extrabold pb-1 leading-tight" style={{ fontFamily: 'Georgia, "Yu Mincho", "Hiragino Mincho ProN", serif' }}>
                        {facility.highlight}
                      </span>
                      <svg className="absolute left-0 -bottom-6 md:-bottom-7 w-full h-16 md:h-20" viewBox="0 0 300 80" preserveAspectRatio="none">
                        <path d="M2,40 Q50,35 100,42 T200,38 T298,37" stroke="#B2198B" strokeWidth="48" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.25" style={{ filter: 'url(#brush)' }} />
                        <defs>
                          <filter id="brush">
                            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" result="noise" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
                          </filter>
                        </defs>
                      </svg>
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-[#8D8070] text-base md:text-lg italic relative z-10" style={{ fontFamily: 'Georgia, "Yu Mincho", "Hiragino Mincho ProN", serif' }}>
                    {facility.summary}
                  </p>

                  {/* Details */}
                  <div className="space-y-4 relative z-10">
                    {facility.details.map((detail, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="flex-shrink-0 mt-1.5">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#B2198B] to-[#9E1580]"></div>
                        </div>
                        <p className="text-[#5A4D41] leading-relaxed flex-1">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-[#FCE4F5] to-white rounded-3xl shadow-lg border border-[#F4C1E8] p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-6 text-center">
              感染対策の徹底
            </h2>
            <div className="space-y-4 text-[#5A4D41]">
              <p className="leading-relaxed">
                当院では、患者様に安心して治療を受けていただけるよう、感染対策を徹底しております。
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#B2198B] font-bold text-xl">✓</span>
                  <span>すべての器具を高圧蒸気滅菌器で滅菌処理</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B2198B] font-bold text-xl">✓</span>
                  <span>使い捨て器具の積極的な使用</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B2198B] font-bold text-xl">✓</span>
                  <span>診療室の換気と空気清浄機の設置</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B2198B] font-bold text-xl">✓</span>
                  <span>スタッフの手洗い・消毒の徹底</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B2198B] font-bold text-xl">✓</span>
                  <span>定期的な院内消毒の実施</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#F4C1E8]/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#E0D6EA]/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
