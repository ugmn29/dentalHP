"use client";

import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AuthorBio } from '../../components/AuthorBio';
import { WaveBottom } from '../../components/Wave';
import { CheckCircle2, ArrowRight, Calendar, Phone, Plus, Minus, ChevronRight } from 'lucide-react';

export default function CeramicPage() {
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

    // Hero slider images
    const heroImages = [
        { src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000", alt: "セラミック治療1" },
        { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2000", alt: "セラミック治療2" },
        { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000", alt: "セラミック治療3" },
    ];

    // Hero image slider logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Switch every 5 seconds

        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <div className="min-h-screen bg-white font-serif text-[#4A4A4A]">
            <style jsx global>{`
                .brush-underline {
                    background-image: linear-gradient(transparent 60%, rgba(197, 165, 114, 0.4) 60%, rgba(197, 165, 114, 0.6) 80%, transparent 80%);
                    padding: 0 0.2em;
                }
            `}</style>
            <Header />

            <main>
                {/* Hero Section - Image Slider + Text */}
                <section className="relative w-full overflow-hidden bg-white">
                    {/* Image Slider - Reduced height */}
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
                                href="#"
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

                    {/* Text Area - Closer to image */}
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
                                                一生ものの、
                                            </span>
                                            <span className="inline-block bg-gradient-to-br from-[#D4AF37] via-[#F4E3B2] to-[#C5A028] bg-clip-text text-transparent drop-shadow-lg transform hover:scale-105 transition-all duration-300"
                                                  style={{
                                                      WebkitBackgroundClip: 'text',
                                                      WebkitTextFillColor: 'transparent'
                                                  }}>
                                                <span className="text-[120%]">美しい歯</span><span className="text-[85%]">を</span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/10 via-[#F4E3B2]/20 to-[#D4AF37]/10 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
                                    <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent rounded-2xl -z-10"></div>
                                </div>
                                <span className="block text-[5.5vw] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#5A4D41] mt-1 md:mt-4 mb-0 pb-0 leading-none font-semibold font-serif">
                                    審美性と機能性のセラミック治療
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
                            FEATURES OF PREMIUM CERAMIC
                        </p>
                        <h2 className="text-2xl md:text-3xl font-medium text-[#5A4D41] font-serif leading-loose tracking-widest">
                            F歯科・矯正歯科 豊洲プライムスクエア院のセラミック治療は<br />
                            これまでのものと違います
                        </h2>
                    </div>
                </section>

                {/* Case Studies Section */}
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
                                    desc: "前歯の変色と隙間を、ラミネートベニアで自然な白さと整った歯並びに改善しました。",
                                    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    title: "Case.02",
                                    desc: "銀歯をオールセラミッククラウンに交換し、透明感のある美しい口元を実現しました。",
                                    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    title: "Case.03",
                                    desc: "古くなった被せ物をジルコニアセラミックでやり直し、歯茎の黒ずみも解消しました。",
                                    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
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
                                        {item.desc.substring(0, 15)}...
                                    </h3>
                                    <p className="text-[#8D8070] text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <a href="#" className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium">
                                もっと症例を見る <ArrowRight size={16} />
                            </a>
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

                {/* Features (CHARM) Section - Refined Zig-Zag */}
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
                                    title: "Natural Beauty",
                                    highlight: "天然歯のような美しさ",
                                    summary: "セラミックは<span class='font-bold bg-yellow-100'>天然歯に近い透明感と光沢</span>を持ち、周囲の歯と自然に調和します。",
                                    details: [
                                        "豊富な色調から、患者様の歯に合った色を選択できるため、<span class='text-[#395b45] font-bold'>見た目が自然で美しい仕上がり</span>になります。また、<span class='font-bold bg-yellow-100'>変色しにくい</span>特性により、<span class='text-[#395b45] font-bold'>長期間美しさをキープ</span>できます。"
                                    ],
                                    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "02",
                                    title: "Expert Technician",
                                    highlight: "熟練技工士との連携",
                                    summary: "審美歯科に精通した<span class='font-bold bg-yellow-100'>熟練の歯科技工士</span>と連携し、精密で美しいセラミックを製作します。",
                                    details: [
                                        "豊富な経験を持つ技工士が<span class='font-bold bg-yellow-100'>オーダーメイド</span>で製作し、歯科医師と技工士の密な連携による<span class='text-[#395b45] font-bold'>高品質な仕上がり</span>を実現します。"
                                    ],
                                    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "03",
                                    title: "Digital Impression",
                                    highlight: "デジタル印象で負担軽減",
                                    summary: "従来のシリコン材料による歯型取りを大幅に削減。<span class='font-bold bg-yellow-100'>口腔内スキャナー</span>で快適に型取りを行います。",
                                    details: [
                                        "<span class='text-[#395b45] font-bold'>不快な歯型取りの時間を大幅に短縮</span>し、<span class='font-bold bg-yellow-100'>高精度なデジタルデータ</span>で<span class='text-[#395b45] font-bold'>精密な被せ物を製作</span>できます。"
                                    ],
                                    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "04",
                                    title: "Comprehensive Care",
                                    highlight: "総合治療でやり直しを防ぐ",
                                    summary: "<span class='font-bold bg-yellow-100'>むし歯・歯周病・噛み合わせ</span>を総合的に診断し、<span class='text-[#395b45] font-bold'>長持ちする治療</span>を実現します。",
                                    details: [
                                        "<span class='font-bold bg-yellow-100'>土台となる歯や歯周組織を整えてから治療</span>することで、<span class='text-[#395b45] font-bold'>将来的なやり直しを防ぎ、長期的な健康</span>を守ります。"
                                    ],
                                    image: "https://images.unsplash.com/photo-1584036561566-b93a945c3cbc?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "05",
                                    title: "Patient First",
                                    highlight: "ご希望に合わせた治療",
                                    summary: "患者様のご希望を丁寧にお聞きし、<span class='text-[#395b45] font-bold'>最適な治療プラン</span>をご提案します。",
                                    details: [
                                        "<span class='font-bold bg-yellow-100'>保険診療と自費診療の違いやメリット・デメリット</span>を分かりやすくご説明し、<span class='text-[#395b45] font-bold'>押し売りは一切せず、患者様ご自身で納得して選択できる環境</span>を提供します。"
                                    ],
                                    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800"
                                }
                            ].map((feature, index) => (
                                <div key={feature.id} className="flex flex-col mb-16 lg:mb-24 relative">
                                    {/* Title Section with Number */}
                                    <div className="relative">
                                        {/* Large Background Number */}
                                        <span className="text-8xl font-serif text-[#C5A572]/15 absolute -top-16 -left-8 z-0 select-none font-bold" style={{ letterSpacing: '-0.05em' }}>
                                            {feature.id}
                                        </span>

                                        {/* Title */}
                                        <div className="flex items-start justify-between gap-4">
                                            <h3 className="text-3xl md:text-4xl font-bold text-[#5A4D41] leading-tight tracking-wide font-serif inline-block relative">
                                                <span dangerouslySetInnerHTML={{ __html: feature.highlight.replace(/(の|を|に|が|は|と|へ|から|より|で|や)/g, '<span class="text-[0.75em]">$1</span>') }} />
                                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5A572] via-[#C5A572] to-transparent"></div>
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className="w-full relative group mb-8">
                                        <div className="relative rounded-[30px] overflow-hidden shadow-2xl border-4 border-white transform transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(197,165,114,0.3)]">
                                            <img
                                                src={feature.image}
                                                alt={feature.highlight}
                                                className="w-full h-auto aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#C5A572]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div>
                                        <p className="text-base md:text-lg text-[#5A4D41] leading-loose font-serif">
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

                {/* Lead & Recommended Section */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif">
                                あなたの笑顔を<br className="md:hidden" />もっと魅力的に
                            </h2>
                            <p className="text-lg leading-loose text-[#8D8070] max-w-3xl mx-auto">
                                セラミック治療は、単に歯を白くするだけではありません。<br />
                                当院では、見た目の美しさ（審美性）はもちろん、<br />
                                <strong>「噛み合わせ」</strong>や<strong>「耐久性」</strong>（機能性）も重視した治療を行っています。
                            </p>
                        </div>

                        {/* セラミック治療とは */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">セラミック治療とは</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    セラミック治療とは、虫歯治療後の詰め物や被せ物、または審美的な目的で、セラミック（陶器）素材を使用する治療法です。
                                    従来の銀歯（金属）と比べて、<span className="font-bold bg-yellow-100">天然歯に近い透明感と色調を再現</span>できるため、見た目が自然で美しい仕上がりになります。
                                </p>
                                <p>
                                    また、<span className="text-[#2E8B57] font-bold">金属を使用しないため金属アレルギーの心配がなく</span>、プラーク（歯垢）が付きにくい表面性状により、<span className="text-[#2E8B57] font-bold">虫歯や歯周病の再発リスクを軽減</span>できます。
                                </p>
                                <p>
                                    当院では、患者様一人ひとりのご希望や口腔内の状態に合わせて、<span className="font-bold bg-yellow-100">最適なセラミック素材をご提案</span>いたします。
                                </p>
                            </div>
                        </div>

                        {/* セラミックの種類 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">セラミックの種類</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-8">
                                {/* e-max */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">e-max（イーマックス）</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        ニケイ酸リチウムガラスを主成分とした、<span className="font-bold bg-yellow-100">透明感に優れたセラミック</span>です。
                                        天然歯に最も近い透明感と色調を再現でき、<span className="text-[#2E8B57] font-bold">特に前歯など審美性が求められる部位に適しています</span>。
                                        強度も十分にあり、単体で使用できます。
                                    </p>
                                </div>
                                {/* ジルコニア */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">ジルコニア</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        人工ダイヤモンドとも呼ばれる、<span className="font-bold bg-yellow-100">非常に強度の高いセラミック</span>です。
                                        <span className="text-[#2E8B57] font-bold">噛む力が強くかかる奥歯やブリッジに適しています</span>。
                                        近年は透明感も向上し、審美性と耐久性を兼ね備えた素材として幅広く使用されています。
                                    </p>
                                </div>
                                {/* ジルコニアセラミック */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">ジルコニアセラミック</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        ジルコニアの土台（フレーム）の上に、セラミックを焼き付けた素材です。
                                        <span className="font-bold bg-yellow-100">ジルコニアの強度とセラミックの審美性を兼ね備えて</span>おり、<span className="text-[#2E8B57] font-bold">前歯から奥歯まで幅広く対応</span>できます。
                                        より自然な色調のグラデーションを表現できます。
                                    </p>
                                </div>
                            </div>
                            <div className="text-center mt-6">
                                <a
                                    href="/ceramic/types"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    セラミックの種類について詳しく見る <ArrowRight size={16} />
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
                                    セラミック治療の料金は、<span className="font-bold bg-yellow-100">選択する種類（インレー、クラウン、ベニア）や材料（e.max、ジルコニアなど）</span>によって異なります。
                                    当院では、事前に明確な費用をお伝えし、追加料金の心配なく治療を受けていただけます。
                                    また、<span className="text-[#2E8B57] font-bold">デンタルローンや各種クレジットカード</span>もご利用いただけます。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/ceramic/cost"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    料金について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* セラミックvs銀歯 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">セラミックvs銀歯</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    セラミックと銀歯では、<span className="font-bold bg-yellow-100">見た目、寿命、費用、健康面</span>など、あらゆる点で違いがあります。
                                    初期費用は銀歯の方が安いですが、<span className="text-[#2E8B57] font-bold">セラミックは銀歯の2〜3倍長持ち</span>し、虫歯の再発リスクも低いため、
                                    長期的にはセラミックの方が経済的です。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/ceramic/vs-metal"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    セラミックvs銀歯を詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 寿命・耐久性 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">寿命・耐久性</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    セラミック治療の平均寿命は<span className="font-bold bg-yellow-100">7〜10年</span>です。
                                    ただし、適切なケアとメンテナンスを行えば<span className="text-[#2E8B57] font-bold">15年以上</span>使い続けることも珍しくありません。
                                    特にジルコニアは耐久性が高く、定期検診とナイトガード（マウスピース）の使用で、さらに長持ちさせることができます。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/ceramic/longevity"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    寿命・耐久性について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 治療の流れ */}
                        <div className="mb-16 bg-white rounded-2xl shadow-lg p-6 md:p-10">
                            <div className="text-center mb-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">治療の流れ</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-12">
                                {[
                                    {
                                        num: "01",
                                        title: "カウンセリング・診査診断",
                                        desc: "まずはお悩みやご希望をお聞かせください。レントゲン撮影、口腔内写真撮影、噛み合わせの検査などを行い、現在の状態を詳しく確認します。",
                                        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                                    },
                                    {
                                        num: "02",
                                        title: "治療計画のご説明",
                                        desc: "検査結果をもとに、最適な治療法や素材、費用、治療期間について詳しくご説明します。保険診療と自費診療の違いもお伝えし、ご納得いただいてから治療を開始します。",
                                        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                                    },
                                    {
                                        num: "03",
                                        title: "歯の形成・型取り",
                                        desc: "虫歯がある場合は除去し、セラミックを装着するために歯の形を整えます。口腔内スキャナーまたは精密な型取りを行い、技工所へデータを送ります。治療中は仮歯を装着します。",
                                        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                                    },
                                    {
                                        num: "04",
                                        title: "セラミック装着・調整",
                                        desc: "完成したセラミックを装着します。色調や形態、噛み合わせを細かく確認・調整し、問題がなければ接着して完了です。",
                                        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                                    },
                                    {
                                        num: "05",
                                        title: "メンテナンス",
                                        desc: "セラミックを長持ちさせるために、定期的な検診とクリーニングをお勧めします。噛み合わせのチェックや、歯ぎしり対策のマウスピースのご提案も行います。",
                                        image: "https://images.unsplash.com/photo-1584036561566-b93a945c3cbc?auto=format&fit=crop&q=80&w=800"
                                    }
                                ].map((step, index) => (
                                    <div key={index}>
                                        {/* 番号 + タイトル */}
                                        <div className="flex items-center gap-2 mb-6 border-b border-[#C5A572]/30 pb-3">
                                            <div className="relative">
                                                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#C5A572]/30 rotate-45"></div>
                                                <span className="text-3xl md:text-4xl font-light text-[#C5A572] tracking-wider relative z-10">{step.num}</span>
                                            </div>
                                            <h4 className="text-lg md:text-xl font-bold text-[#5A4D41] font-serif">{step.title}</h4>
                                        </div>
                                        {/* 画像 */}
                                        <div className="mb-6 rounded-2xl overflow-hidden shadow-md">
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                className="w-full h-56 md:h-72 object-cover"
                                            />
                                        </div>
                                        {/* 説明文 */}
                                        <p className="text-[#5A4D41] leading-loose text-sm md:text-base">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Price List Section */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <p className="text-[#C5A572] tracking-[0.2em] font-bold mb-2">PRICE</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">料金表</h2>
                        </div>

                        <div className="bg-white rounded-3xl shadow-sm border border-[#C5A572]/20 overflow-hidden">
                            <div className="p-8 md:p-12">
                                {/* Inlay */}
                                <div className="mb-12 last:mb-0">
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                                        <span className="w-1.5 h-6 bg-[#C5A572]"></span>
                                        詰め物（インレー）
                                    </h3>
                                    <div className="space-y-4">
                                        {[
                                            { name: "CAD In", price: "¥44,000" },
                                            { name: "emax In", price: "¥66,000" },
                                            { name: "Gold In", price: "¥77,000" }
                                        ].map((item, index) => (
                                            <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0">
                                                <span className="font-medium text-[#5A4D41]">{item.name}</span>
                                                <span className="font-bold text-[#C5A572]">{item.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Crown */}
                                <div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                                        <span className="w-1.5 h-6 bg-[#C5A572]"></span>
                                        被せ物（クラウン）
                                    </h3>
                                    <div className="space-y-4">
                                        {[
                                            { name: "CAD Cr", price: "¥66,000" },
                                            { name: "Zr Cr", price: "¥110,000" },
                                            { name: "PFZ", price: "¥132,000" },
                                            { name: "Gold Cr", price: "¥121,000" }
                                        ].map((item, index) => (
                                            <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0">
                                                <span className="font-medium text-[#5A4D41]">{item.name}</span>
                                                <span className="font-bold text-[#C5A572]">{item.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#FAF9F6] p-4 text-center text-xs text-[#8D8070]">
                                ※価格は全て税込表示です。
                            </div>
                        </div>
                    </div>
                </section>

                {/* Risks Section */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100">
                            <h3 className="text-lg font-bold text-[#5A4D41] mb-6 text-center">リスク・副作用について</h3>
                            <ul className="space-y-3 mb-6">
                                {[
                                    "過度な力が加わると、欠けたり割れたりすることがあります。",
                                    "知覚過敏が一時的に出ることがあります。",
                                    "歯ぎしりがある場合は、就寝時にマウスピースの装着が必要になることがあります。"
                                ].map((item, i) => (
                                    <li key={i} className="text-sm text-[#8D8070] flex items-start gap-2">
                                        <span className="text-[#C5A572] mt-1">●</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-gray-400 text-center">
                                ※全ての方に必ず起こるわけではありませんが、医療行為にはリスクが伴います。<br />
                                当院では、事前に十分なご説明を行い、納得していただいてから治療を開始します。
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="pt-8 pb-8 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-16">
                            <p className="text-[#C5A572] tracking-[0.2em] font-bold mb-2">Q&A</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">よくあるご質問</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    q: "保険の白い歯（CAD/CAM冠）と何が違いますか？",
                                    a: "保険の白い歯はプラスチックを含んでいるため、経年劣化で変色したり、強度が低く割れやすかったりします。セラミックは変色せず、汚れも付きにくく、美しさと耐久性に優れています。"
                                },
                                {
                                    q: "治療期間はどのくらいですか？",
                                    a: "本数や内容によりますが、型取りから装着まで通常1〜2週間程度です。お急ぎの場合はご相談ください。"
                                },
                                {
                                    q: "保証はありますか？",
                                    a: "当院では、自費診療の詰め物・被せ物に保証期間を設けています（定期検診を受けていただくことが条件となります）。詳しくはスタッフにお尋ねください。"
                                }
                            ].map((faq, index) => (
                                <div key={index} className="border-b border-[#F0EAE0] pb-6">
                                    <h3 className="text-lg font-bold text-[#5A4D41] mb-3 flex items-start gap-4">
                                        <span className="text-[#C5A572] font-serif italic text-2xl leading-none">Q.</span>
                                        {faq.q}
                                    </h3>
                                    <div className="pl-10">
                                        <p className="text-[#8D8070] leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 監修者情報 */}
                <div className="container mx-auto px-4 pt-2 pb-16">
                    <AuthorBio />
                </div>

                {/* セラミック治療について詳しく知る */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <p className="text-[#C5A572] tracking-[0.2em] font-bold mb-2 uppercase">MORE INFORMATION</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif mb-4">
                                セラミック治療について詳しく知る
                            </h2>
                            <p className="text-[#8D8070]">
                                各トピックの詳細ページで、より深く理解していただけます
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "セラミックの種類",
                                    description: "e-max、ジルコニア、ジルコニアセラミックなど、各種類の特徴を詳しく解説",
                                    link: "/ceramic/types",
                                    icon: "📋"
                                },
                                {
                                    title: "料金・費用",
                                    description: "詳しい料金表と、お支払い方法、医療費控除について",
                                    link: "/ceramic/cost",
                                    icon: "💰"
                                },
                                {
                                    title: "セラミックvs銀歯",
                                    description: "セラミックと銀歯の違いを徹底比較。メリット・デメリットを解説",
                                    link: "/ceramic/vs-metal",
                                    icon: "⚖️"
                                },
                                {
                                    title: "寿命・耐久性",
                                    description: "セラミックはどのくらい持つ？長持ちさせるためのケア方法",
                                    link: "/ceramic/longevity",
                                    icon: "⏱️"
                                },
                                {
                                    title: "症例紹介",
                                    description: "実際の治療例をビフォーアフター写真とともにご紹介",
                                    link: "/ceramic/case-studies",
                                    icon: "📸"
                                }
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="group bg-gradient-to-br from-[#FDFBF7] to-white rounded-3xl p-8 shadow-lg border-2 border-[#C5A572]/10 hover:border-[#C5A572] hover:shadow-xl transition-all transform hover:-translate-y-1"
                                >
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-3 font-serif group-hover:text-[#C5A572] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#8D8070] text-sm leading-relaxed mb-4">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-[#C5A572] font-bold text-sm group-hover:gap-3 transition-all">
                                        <span>詳しく見る</span>
                                        <ArrowRight size={16} />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-2 bg-[#5A4D41] text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">
                            まずは一度、<br className="md:hidden" />お気軽にご相談ください
                        </h2>
                        <p className="text-[#F0EAE0] mb-12">
                            患者様一人ひとりに合わせた最適な治療プランをご提案いたします。
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
                            <button className="bg-[#C5A572] hover:bg-[#B59562] text-white px-8 py-5 rounded-full font-bold shadow-lg transition-all flex items-center justify-center gap-3 text-lg flex-1 group">
                                <Calendar className="group-hover:rotate-12 transition" />
                                24時間 WEB予約
                            </button>
                            <button className="bg-transparent border-2 border-[#C5A572] hover:bg-[#C5A572]/10 text-white px-8 py-5 rounded-full font-bold transition-all flex items-center justify-center gap-3 text-lg flex-1">
                                <Phone className="text-[#C5A572]" />
                                03-1234-5678
                            </button>
                        </div>

                        <div className="mt-12">
                            <a href="/price" className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#E5C592] transition-colors border-b border-[#C5A572] pb-1">
                                料金表を見る <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
