"use client";

import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ArrowLeft } from 'lucide-react';

export default function FacilitiesPage() {
  const facilities = [
    {
      id: "01",
      title: "リラックスできる",
      highlight: "広々とした待合室",
      summary: "快適な空間でお待ちいただけます",
      details: [
        "明るく清潔感のある待合室で、ゆったりとお待ちいただけます。",
        "広々とした座席配置で、無料Wi-Fiや雑誌、ドリンクサービスもご用意しております。",
        "リラックスして診療をお待ちください。"
      ],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
      imageAlt: "リラックスできる待合室"
    },
    {
      id: "02",
      title: "プライバシーに配慮した",
      highlight: "診療室",
      summary: "安心して治療を受けられる環境",
      details: [
        "個室タイプの診療室で、他の患者様を気にすることなく治療を受けていただけます。",
        "プライバシーに配慮した空間で、リラックスして診療に集中していただけます。",
        "安心してお口のお悩みをご相談ください。"
      ],
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=2000",
      imageAlt: "プライバシーに配慮した診療室"
    },
    {
      id: "03",
      title: "正確な診断を可能にする",
      highlight: "歯科用CT",
      summary: "最新機器で精密な診断",
      details: [
        "最新の歯科用CTを導入し、3次元での詳細な診断が可能です。",
        "インプラントや親知らずの抜歯など、精密な治療計画を立てることができます。",
        "安全で正確な治療をご提供いたします。"
      ],
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000",
      imageAlt: "正確な診断を可能にする歯科用CT"
    },
    {
      id: "04",
      title: "お子様も退屈しない",
      highlight: "キッズスペース",
      summary: "楽しく過ごせる空間",
      details: [
        "お子様が楽しく遊べるキッズスペースを完備しております。",
        "絵本やおもちゃをご用意し、待ち時間も楽しく過ごせます。",
        "保護者の方も安心して治療を受けていただけます。"
      ],
      image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=2000",
      imageAlt: "お子様も退屈しないキッズスペース"
    },
    {
      id: "05",
      title: "衛生管理を徹底した",
      highlight: "滅菌室",
      summary: "安心・安全な治療環境",
      details: [
        "高圧蒸気滅菌器を使用し、すべての器具を徹底的に滅菌しています。",
        "使い捨て器具も積極的に使用し、感染対策を万全に行っております。",
        "安心・安全な治療環境をご提供します。"
      ],
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=2000",
      imageAlt: "衛生管理を徹底した滅菌室"
    },
    {
      id: "06",
      title: "どなたでも安心の",
      highlight: "バリアフリー設計",
      summary: "すべての方に優しい環境",
      details: [
        "車椅子やベビーカーでもスムーズにご来院いただけるよう、段差のないバリアフリー設計となっております。",
        "お年寄りの方や小さなお子様連れの方も安心してご来院ください。",
        "すべての患者様に快適にご利用いただける環境を整えております。"
      ],
      image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=2000",
      imageAlt: "どなたでも安心のバリアフリー設計"
    },
    {
      id: "07",
      title: "痛みを抑えた",
      highlight: "治療機器",
      summary: "できるだけ痛くない治療",
      details: [
        "電動麻酔器や表面麻酔を使用し、できるだけ痛みの少ない治療を心がけております。",
        "歯科治療が苦手な方も安心して治療を受けていただけるよう、細心の注意を払っています。",
        "痛みへの配慮を最優先に考えた治療をご提供します。"
      ],
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2000",
      imageAlt: "痛みを抑えた治療機器"
    },
    {
      id: "08",
      title: "じっくり相談できる",
      highlight: "カウンセリングルーム",
      summary: "納得いただける治療のために",
      details: [
        "治療前のカウンセリングをゆっくりと行える専用ルームをご用意しております。",
        "お悩みやご要望をじっくりお伺いし、最適な治療プランをご提案させていただきます。",
        "疑問や不安がなくなるまで、何度でもご相談いただけます。"
      ],
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000",
      imageAlt: "じっくり相談できるカウンセリングルーム"
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
                    <img
                      src={facility.image}
                      alt={facility.imageAlt}
                      className="w-full h-auto aspect-[4/3] object-cover"
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
