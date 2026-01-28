"use client";

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowRight, CheckCircle, Shield, Calendar, ChevronRight, Plus, Minus, CheckCircle2, Sparkles, Clock, TrendingUp, Heart, Star } from 'lucide-react';

export default function WhiteningPage() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // Hero slider images - Whitening themed
  const heroImages = [
    { src: "https://images.unsplash.com/photo-1609840114035-3c981a782dfe?auto=format&fit=crop&q=80&w=2000", alt: "ホワイトニング1" },
    { src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000", alt: "ホワイトニング2" },
    { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2000", alt: "ホワイトニング3" },
  ];

  // Hero image slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-sans text-[#4A4A4A]">
        <style jsx global>{`
          .brush-underline {
            background-image: linear-gradient(transparent 60%, rgba(197, 165, 114, 0.4) 60%, rgba(197, 165, 114, 0.6) 80%, transparent 80%);
            padding: 0 0.2em;
          }
        `}</style>

        {/* Hero Section - Image Slider + Text */}
        <section className="relative w-full overflow-hidden bg-white">
          {/* Image Slider */}
          <div className="relative w-full" style={{ height: '50vh' }}>
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentHeroSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            ))}

            {/* CTA Button - Bottom Right */}
            <div className="absolute -bottom-8 right-4 md:-bottom-10 md:right-8 z-20 animate-bounce-slow">
              <a
                href="/contact"
                className="group relative flex items-center gap-3 bg-gradient-to-r from-[#9B89B3] to-[#8B7AA3] hover:from-[#AB99C3] hover:to-[#9B89B3] text-white px-6 py-4 md:px-8 md:py-5 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(155,137,179,0.6)] transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <Calendar size={24} className="group-hover:rotate-12 transition-transform" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-medium opacity-90">24時間受付</span>
                    <span className="text-base md:text-lg font-bold whitespace-nowrap">WEB予約</span>
                  </div>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ChevronRight size={20} />
                </div>

                {/* Pulsing ring effect */}
                <div className="absolute inset-0 rounded-full bg-[#9B89B3] opacity-0 group-hover:opacity-20 group-hover:scale-110 transition-all duration-300"></div>
              </a>
            </div>
          </div>

          {/* Text Area */}
          <div className="relative bg-white flex flex-col items-center justify-start px-4 pt-8 pb-6 md:pb-8">
            <div className="max-w-7xl w-full text-center flex items-center justify-center">
              <h1 className="font-bold leading-tight font-serif mb-0">
                <div className="relative inline-block mb-2 md:mb-4 px-4 md:px-8">
                  <div className="relative z-10 py-2 md:py-4 whitespace-nowrap overflow-x-auto">
                    <span className="inline-flex items-center justify-center gap-1 md:gap-3 text-[6vw] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif"
                          style={{
                            fontWeight: '900',
                            letterSpacing: '0.05em'
                          }}>
                      <span className="inline-block text-[#2d2d2d]">
                        自信あふれる、
                      </span>
                      <span className="inline-block bg-gradient-to-br from-[#D4AF37] via-[#F4E3B2] to-[#C5A028] bg-clip-text text-transparent drop-shadow-lg transform hover:scale-105 transition-all duration-300"
                            style={{
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent'
                            }}>
                        <span className="text-[120%]">輝く笑顔</span>
                      </span>
                    </span>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/10 via-[#F4E3B2]/20 to-[#D4AF37]/10 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent rounded-2xl -z-10"></div>
                </div>
                <span className="block text-[5.5vw] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#5A4D41] mt-1 md:mt-4 mb-0 pb-0 leading-none font-semibold font-serif">
                  プロフェッショナルホワイトニング
                </span>
              </h1>
            </div>
          </div>
        </section>

        {/* Concept Message Section */}
        <section className="pt-6 md:pt-2 pb-2 md:pb-2 bg-[#FDFBF7] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(#C5A572_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <p className="text-[#C5A572] tracking-[0.4em] font-medium mb-6 text-xs md:text-sm uppercase font-serif">
              PROFESSIONAL WHITENING
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-[#5A4D41] font-serif leading-loose tracking-widest">
              白く美しい歯で<br />
              自信あふれる笑顔を手に入れる
            </h2>
          </div>
        </section>

        {/* Case Studies Section - Before/After */}
        <section className="pt-8 pb-8 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-8">
              <p className="text-[#C5A572] tracking-[0.2em] font-bold mb-2">CASE STUDIES</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">症例紹介</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Case.01",
                  desc: "コーヒーによる着色を、オフィスホワイトニングで自然な白さに改善しました。",
                  image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                },
                {
                  title: "Case.02",
                  desc: "デュアルホワイトニングにより、結婚式前に理想の白さを実現しました。",
                  image: "https://images.unsplash.com/photo-1609840114035-3c981a782dfe?auto=format&fit=crop&q=80&w=800"
                },
                {
                  title: "Case.03",
                  desc: "ホームホワイトニングで、自然で長持ちする白さを手に入れました。",
                  image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                }
              ].map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full">
                      <span className="text-[#C5A572] font-serif font-bold">{item.title}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                    {item.desc.substring(0, 20)}...
                  </h3>
                  <p className="text-[#8D8070] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Web予約バナー */}
            <div className="mt-12">
              <a href="https://apo-toolboxes.stransa.co.jp/user/web/babordc4ba29b/reservations" target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src="/images/web-reservation-banner.png"
                  alt="Web予約"
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Features Section - 5つの特徴 */}
        <section className="pt-8 pb-8 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-[#C5A572] font-bold tracking-[0.2em] text-sm block mb-2">FEATURES</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif">
                当院<span className="text-[0.75em]">の</span><span className="text-[#C5A572]">特徴</span>
              </h2>
            </div>

            <div className="space-y-12 max-w-5xl mx-auto">
              {[
                {
                  id: "01",
                  title: "Pre-Treatment Cleaning",
                  highlight: "処置前の徹底した着色除去",
                  summary: "ホワイトニング前に歯のクリーニングを行い、<span class='font-bold bg-yellow-100'>表面の着色や歯石を除去</span>することで、<span class='text-[#395b45] font-bold'>最大限の効果</span>を引き出します。",
                  details: [
                    "<span class='font-bold bg-yellow-100'>専用機器による徹底的なクリーニング</span>で歯石や着色を除去し、<span class='text-[#395b45] font-bold'>薬剤の浸透効率を向上</span>させます。"
                  ],
                  image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                },
                {
                  id: "02",
                  title: "Various Options",
                  highlight: "豊富な種類から選択可能",
                  summary: "<span class='font-bold bg-yellow-100'>オフィス・ホーム・デュアルの3つの方法</span>から、あなたのライフスタイルや目標に合わせて<span class='text-[#395b45] font-bold'>最適なプラン</span>を選べます。",
                  details: [
                    "<span class='text-[#395b45] font-bold'>即効性のオフィスホワイトニング、自然な白さのホームホワイトニング、最高効果のデュアルホワイトニング</span>をご用意しています。"
                  ],
                  image: "https://images.unsplash.com/photo-1609840114035-3c981a782dfe?auto=format&fit=crop&q=80&w=800"
                },
                {
                  id: "03",
                  title: "No Traditional Impression",
                  highlight: "従来の歯型取り不要",
                  summary: "<span class='font-bold bg-yellow-100'>最新のデジタルスキャン技術</span>により、<span class='text-[#395b45] font-bold'>不快な歯型取りなしで快適に</span>マウスピースを作製できます。",
                  details: [
                    "<span class='text-[#395b45] font-bold'>嘔吐反射のある方も安心</span>して、<span class='font-bold bg-yellow-100'>短時間で正確なマウスピース</span>を作製できます。"
                  ],
                  image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                },
                {
                  id: "04",
                  title: "High Quality Agent",
                  highlight: "高品質な薬剤を使用",
                  summary: "<span class='font-bold bg-yellow-100'>厚生労働省認可の高品質なホワイトニング剤</span>のみを使用。<span class='text-[#395b45] font-bold'>効果と安全性が実証された薬剤で確実な結果</span>をお届けします。",
                  details: [
                    "<span class='font-bold bg-yellow-100'>安全性の高い医療用薬剤</span>で、<span class='text-[#395b45] font-bold'>効果的かつ歯にやさしい</span>治療を提供します。"
                  ],
                  image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                },
                {
                  id: "05",
                  title: "Original Materials",
                  highlight: "独自の資料配布でセルフケアをサポート",
                  summary: "<span class='font-bold bg-yellow-100'>当院オリジナルの資料</span>をお渡しし、着色しにくい食生活や日常ケアの方法を詳しくご説明。<span class='text-[#395b45] font-bold'>白さを長持ちさせるコツ</span>を習得できます。",
                  details: [
                    "<span class='font-bold bg-yellow-100'>着色を防ぐ食品リストと食事のタイミング、効果的な歯磨き方法</span>などを詳しくご紹介し、<span class='text-[#395b45] font-bold'>長期的な白さの維持</span>をサポートします。"
                  ],
                  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                }
              ].map((feature, index) => (
                <div key={feature.id} className="flex flex-col group">
                  {/* Title Area */}
                  <div className="relative h-24 flex items-center mb-0">
                    {/* Large Gradient Number */}
                    <span
                      className={`absolute top-[20%] -translate-y-1/2 block text-[8rem] md:text-[11rem] leading-[0.8] font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#C5A572] via-[#E5C592] to-transparent select-none opacity-60 scale-x-[0.85] tracking-tighter ${index % 2 === 0 ? 'left-[-1rem] origin-left' : 'right-0 origin-right'}`}
                    >
                      {feature.id}
                    </span>

                    {/* Title - Always Left */}
                    <div className="relative z-10 w-full text-left pl-4">
                      <h3 className="text-3xl md:text-4xl font-bold text-[#5A4D41] leading-tight tracking-wide font-serif inline-block relative">
                        <span dangerouslySetInnerHTML={{ __html: feature.highlight.replace(/(の|を|に|が|は|と|へ|から|より|で|や)/g, '<span class="text-[0.75em]">$1</span>') }} />
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5A572] via-[#C5A572] to-transparent"></div>
                      </h3>
                    </div>
                  </div>

                  {/* Image Area */}
                  <div className="w-full mb-8 relative">
                    <div className="relative rounded-[30px] overflow-hidden shadow-lg border-2 border-white">
                      <img
                        src={feature.image}
                        alt={feature.highlight}
                        className="w-full h-auto aspect-[2/1] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#C5A572]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                  </div>

                  {/* Text Area */}
                  <div>
                    <p className="text-base md:text-lg text-[#5A4D41] leading-loose font-sans">
                      <span dangerouslySetInnerHTML={{ __html: feature.summary }} />
                      {feature.details.map((detail, i) => (
                        <span key={i} dangerouslySetInnerHTML={{ __html: detail }} />
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ホワイトニングとは Section */}
        <section className="py-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif">
                白く美しい歯で、<br className="md:hidden" />笑顔に自信を取り戻しませんか？
              </h2>
              <p className="text-lg leading-loose text-[#8D8070] max-w-3xl mx-auto">
                歯の黄ばみや着色が気になる方でも、<br />
                適切なホワイトニングを行えば、<strong>自然で美しい白さを手に入れることができます</strong>。<br />
                当院では、<strong>「安全性」</strong>と<strong>「効果」</strong>を重視したホワイトニングを提供しています。
              </p>
            </div>

            {/* ホワイトニングとは */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">ホワイトニングとは</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <p>
                  ホワイトニングとは、歯を削ることなく、専用の薬剤を使用して歯を白くする治療法です。
                  <span className="font-bold bg-yellow-100">歯科医院で行うオフィスホワイトニング、ご自宅で行うホームホワイトニング、そして両方を併用するデュアルホワイトニング</span>の3つの方法があります。
                </p>
                <p>
                  ホワイトニング剤に含まれる<span className="text-[#2E8B57] font-bold">過酸化水素または過酸化尿素が、歯の内部に浸透し、着色物質を分解</span>します。
                  これにより、歯の表面だけでなく内部からも白くすることができます。
                </p>
                <p>
                  ホワイトニングは<span className="font-bold bg-yellow-100">「笑顔の自信」</span>を取り戻す重要な治療です。
                  適切な方法で行うことで、安全かつ効果的に白く美しい歯を手に入れることができます。
                </p>
              </div>
            </div>

            {/* こんなお悩みありませんか */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">こんなお悩みありませんか？</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "コーヒーやワインで歯が黄ばんでいる",
                      "歯の色が気になって笑顔に自信がない",
                      "写真を撮るときに歯を見せたくない",
                      "仕事やプライベートで好印象を与えたい",
                      "大切なイベント前に歯を白くしたい",
                      "加齢による歯の黄ばみが気になる"
                    ].map((symptom, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#C5A572] flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41] font-medium">{symptom}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-[#5A4D41] font-bold text-center">
                      このようなお悩みは、<span className="text-[#C5A572]">プロフェッショナルホワイトニング</span>で解決できます。<br />
                      まずはお気軽にご相談ください。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3つのホワイトニング方法 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">3つのホワイトニング方法</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                <p>
                  当院では、<span className="font-bold bg-yellow-100">オフィスホワイトニング、ホームホワイトニング、デュアルホワイトニング</span>の3つの方法をご用意しています。
                  それぞれの特徴や効果、おすすめの方など、詳しくは専用ページでご確認いただけます。
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/whitening/types"
                  className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                >
                  3つの方法を詳しく見る <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* 料金・費用について */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">料金・費用について</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                <p>
                  ホワイトニングの料金は、選択する方法によって異なります。
                  オフィスホワイトニングは即効性が高く、ホームホワイトニングは持続性に優れています。
                  それぞれの<span className="font-bold bg-yellow-100">料金の目安や費用対効果</span>について、詳しくは料金ページでご確認ください。
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/whitening/cost"
                  className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                >
                  料金について詳しく見る <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* 効果の持続期間 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">効果の持続期間</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                <p>
                  ホワイトニングの効果は、<span className="text-[#2E8B57] font-bold">施術方法や日々のケアによって持続期間が異なります</span>。
                  オフィスホワイトニングは3〜6ヶ月、ホームホワイトニングは6〜12ヶ月、デュアルホワイトニングは1〜2年程度持続します。
                  白さを長持ちさせるコツや<span className="font-bold bg-yellow-100">メンテナンス方法</span>について、詳しくはこちらをご覧ください。
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/whitening/duration"
                  className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                >
                  持続期間について詳しく見る <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* 安全性・副作用 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">安全性・副作用</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                <p>
                  当院では、<span className="font-bold bg-yellow-100">厚生労働省認可の高品質なホワイトニング剤</span>を使用しています。
                  安全性が実証された薬剤のみを使用しますが、一時的に知覚過敏を感じることがあります。
                  <span className="text-[#2E8B57] font-bold">リスクや対策、施術できない方</span>について、詳しくは安全性ページでご確認ください。
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/whitening/safety"
                  className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                >
                  安全性・副作用について詳しく見る <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* 他院との比較 */}
            <div className="mb-16 bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">当院のホワイトニングが選ばれる理由</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "処置前の徹底した着色除去で最大限の効果",
                  "豊富な種類から最適なプランを選択可能",
                  "従来の歯型取り不要で快適な治療体験",
                  "厚生労働省認可の高品質な薬剤を使用",
                  "独自の資料配布でセルフケアをサポート",
                  "経験豊富なスタッフによる丁寧なカウンセリング"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#C5A572] flex-shrink-0 mt-0.5" />
                    <span className="text-[#5A4D41] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <a
                  href="/whitening/comparison"
                  className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                >
                  他院との比較を詳しく見る <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pt-8 pb-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">よくある質問</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                {/* FAQ 1 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">ホワイトニングは痛いですか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 個人差がありますが、一時的に知覚過敏（歯がしみる）を感じることがあります。当院では、知覚過敏を軽減する薬剤や施術方法を採用しています。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      施術後24〜48時間で症状は治まることがほとんどです。
                    </p>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">どれくらい白くなりますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 個人差がありますが、一般的に歯の色のトーンを3〜8段階明るくすることができます。元の歯の色や着色の度合いによって効果は異なります。
                    </p>
                    <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                      カウンセリング時にシェードガイドで目標の白さを確認します。
                    </p>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">効果はどれくらい持続しますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> オフィスホワイトニングは3〜6ヶ月、ホームホワイトニングは6〜12ヶ月、デュアルホワイトニングは1〜2年程度持続します。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      食生活や口腔ケアによって持続期間は変わります。定期的なタッチアップで白さを維持できます。
                    </p>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">誰でもホワイトニングできますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 以下の方はホワイトニングができない、または注意が必要です：妊娠中・授乳中の方、18歳未満の方、重度の知覚過敏がある方、エナメル質形成不全の方、無カタラーゼ症の方。
                    </p>
                    <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                      カウンセリング時に詳しく確認いたします。
                    </p>
                  </div>
                </div>

                {/* FAQ 5 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">虫歯や歯周病があってもできますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 虫歯や歯周病がある場合は、先にそれらの治療を行ってからホワイトニングを行います。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      健康な歯と歯茎の状態でホワイトニングを受けることが、最も効果的で安全です。
                    </p>
                  </div>
                </div>

                {/* FAQ 6 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q6</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">ホワイトニング後の注意点はありますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> ホワイトニング後24〜48時間は、着色しやすい食べ物や飲み物（コーヒー、紅茶、赤ワイン、カレーなど）を避けることをおすすめします。
                    </p>
                    <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                      また、喫煙も控えてください。この期間は歯が着色物質を吸収しやすい状態です。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Topic Cluster Section */}
        <section className="py-2 md:py-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#5A4D41] font-serif">
                ホワイトニングについて詳しく知る
              </h2>
              <p className="text-center text-gray-600 mb-12">
                気になる項目をクリックして、詳しい情報をご覧ください
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 種類と比較 */}
                <a
                  href="/whitening/types"
                  className="group bg-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                        ホワイトニングの種類
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        オフィス・ホーム・デュアルの3つの方法を徹底比較
                      </p>
                      <div className="flex items-center text-blue-600 text-sm font-medium">
                        詳しく見る
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>

                {/* 料金・費用 */}
                <a
                  href="/whitening/cost"
                  className="group bg-white p-6 rounded-xl border-2 border-green-100 hover:border-green-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-green-600 transition-colors">
                        料金・費用について
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        各ホワイトニングの料金と費用対効果を解説
                      </p>
                      <div className="flex items-center text-green-600 text-sm font-medium">
                        詳しく見る
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>

                {/* 効果の持続期間 */}
                <a
                  href="/whitening/duration"
                  className="group bg-white p-6 rounded-xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">
                        効果の持続期間
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        白さを長持ちさせるためのコツとメンテナンス
                      </p>
                      <div className="flex items-center text-purple-600 text-sm font-medium">
                        詳しく見る
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>

                {/* 安全性・副作用 */}
                <a
                  href="/whitening/safety"
                  className="group bg-white p-6 rounded-xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-orange-600 transition-colors">
                        安全性・副作用
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        知覚過敏などのリスクと対策について
                      </p>
                      <div className="flex items-center text-orange-600 text-sm font-medium">
                        詳しく見る
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>

                {/* 他院との比較 */}
                <a
                  href="/whitening/comparison"
                  className="group bg-white p-6 rounded-xl border-2 border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-pink-600 transition-colors">
                        他院との比較
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        当院のホワイトニングが選ばれる理由
                      </p>
                      <div className="flex items-center text-pink-600 text-sm font-medium">
                        詳しく見る
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>

                {/* 無料カウンセリング予約 */}
                <div className="group bg-gradient-to-br from-blue-600 to-blue-400 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-white">
                        無料カウンセリング
                      </h3>
                      <p className="text-sm text-blue-100 mb-3">
                        あなたに最適なプランをご提案します
                      </p>
                      <a
                        href="/contact"
                        className="inline-flex items-center text-white text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                      >
                        今すぐ予約
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2 bg-[#5A4D41] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">
              白く美しい歯で、<br className="md:hidden" />自信あふれる笑顔を手に入れませんか？
            </h2>
            <p className="text-[#F0EAE0] mb-12 text-lg">
              まずは無料カウンセリングで、あなたに最適なプランをご提案します
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
              <a
                href="/contact"
                className="bg-[#C5A572] hover:bg-[#B59562] text-white px-8 py-5 rounded-full font-bold shadow-lg transition-all flex items-center justify-center gap-3 text-lg flex-1 group"
              >
                <Calendar className="group-hover:rotate-12 transition" />
                無料カウンセリング予約
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-[#F0EAE0] mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>無料カウンセリング</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>丁寧な診察</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>明瞭な料金</span>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
