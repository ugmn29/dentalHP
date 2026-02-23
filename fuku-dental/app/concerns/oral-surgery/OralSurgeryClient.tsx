"use client";

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageImage } from '@/components/PageImage';
import { CheckCircle2, ArrowRight, Calendar, Phone, Plus, Minus, ChevronRight, AlertCircle } from 'lucide-react';

export default function OralSurgeryPage() {
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

    // Hero slider images
    const heroImages = [
        { imageId: "hero-slide1", alt: "口腔外科1" },
        { imageId: "hero-slide2", alt: "口腔外科2" },
        { imageId: "hero-slide3", alt: "口腔外科3" },
    ];

    // Hero image slider logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <div className="min-h-screen bg-white font-sans text-[#4A4A4A]">
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
                                <PageImage
                                    path="/concerns/oral-surgery"
                                    imageId={image.imageId}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                        ))}

                        {/* CTA Button - Bottom Right */}
                        <div className="absolute -bottom-8 right-4 md:-bottom-10 md:right-8 z-20 animate-bounce-slow">
                            <a
                                href="https://apo-toolboxes.stransa.co.jp/user/web/babordc4ba29b/reservations"
                                target="_blank"
                                rel="noopener noreferrer"
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
                                                お口の健康を、
                                            </span>
                                            <span className="inline-block bg-gradient-to-br from-[#D4AF37] via-[#F4E3B2] to-[#C5A028] bg-clip-text text-transparent drop-shadow-lg transform hover:scale-105 transition-all duration-300"
                                                  style={{
                                                      WebkitBackgroundClip: 'text',
                                                      WebkitTextFillColor: 'transparent'
                                                  }}>
                                                <span className="text-[120%]">守る</span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/10 via-[#F4E3B2]/20 to-[#D4AF37]/10 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
                                    <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent rounded-2xl -z-10"></div>
                                </div>
                                <span className="block text-[5.5vw] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#5A4D41] mt-1 md:mt-4 mb-0 pb-0 leading-none font-semibold font-serif">
                                    口腔外科・お口のトラブル専門治療
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
                            COMPREHENSIVE ORAL CARE
                        </p>
                        <h2 className="text-2xl md:text-3xl font-medium text-[#5A4D41] font-serif leading-loose tracking-widest">
                            虫歯や歯周病だけではない、<br />
                            お口全体の健康を守ります
                        </h2>
                    </div>
                </section>

                {/* Case Studies Section */}
                <section className="pt-8 pb-8 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-8">
                            <p className="text-[#C5A572] tracking-[0.2em] font-bold mb-2">TREATMENT AREAS</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">対応する疾患</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Area.01",
                                    desc: "口内炎・粘膜疾患：2週間以上治らない口内炎や舌の痛み、粘膜の変色など早期発見が重要です。",
                                    imageId: "area1"
                                },
                                {
                                    title: "Area.02",
                                    desc: "良性腫瘍・嚢胞：お口の中のできものや膿の袋を、日帰り手術で安全に摘出します。",
                                    imageId: "area2"
                                },
                                {
                                    title: "Area.03",
                                    desc: "唾液腺疾患：食事の時に顎の下が腫れる、唾液が出にくいなどの症状に対応します。",
                                    imageId: "area3"
                                }
                            ].map((item, index) => (
                                <div key={index} className="group cursor-pointer">
                                    <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg">
                                        <PageImage
                                            path="/concerns/oral-surgery"
                                            imageId={item.imageId}
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

                {/* Features Section */}
                <section className="pt-8 pb-2 bg-white overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <span className="text-[#C5A572] font-bold tracking-[0.2em] text-sm block mb-2">FEATURES</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif">
                                当院<span className="text-[0.75em]">の</span><span className="text-[#C5A572]">口腔外科</span>
                            </h2>
                        </div>

                        <div className="space-y-12 max-w-5xl mx-auto">
                            {[
                                {
                                    id: "01",
                                    title: "Pathology",
                                    highlight: "粘膜疾患の診断",
                                    summary: "口内炎やできものなど、お口の粘膜の病気を専門的に診断します。",
                                    details: [
                                        "なかなか治らない口内炎の鑑別診断",
                                        "口腔がんの早期発見・早期対応"
                                    ],
                                    imageId: "feature1"
                                },
                                {
                                    id: "02",
                                    title: "Minor Surgery",
                                    highlight: "良性腫瘍・嚢胞の摘出",
                                    summary: "お口の中のできものや膿の袋を、日帰り手術で摘出します。",
                                    details: [
                                        "局所麻酔下での安全な手術",
                                        "術後の痛みや腫れに配慮した丁寧な処置"
                                    ],
                                    imageId: "feature2"
                                },
                                {
                                    id: "03",
                                    title: "Hospital Link",
                                    highlight: "高次医療機関との連携",
                                    summary: "大学病院レベルの治療が必要な場合は、速やかに専門機関を紹介します。",
                                    details: [
                                        "口腔がんや重篤な全身疾患がある場合の連携体制",
                                        "紹介状の作成とスムーズな予約手配"
                                    ],
                                    imageId: "feature3"
                                },
                                {
                                    id: "04",
                                    title: "Second Opinion",
                                    highlight: "セカンドオピニオン対応",
                                    summary: "他院での診断や治療方針について、専門的な立場からアドバイスします。",
                                    details: [
                                        "抜歯が必要と言われたが残したいなどのご相談",
                                        "現在の治療方針に不安がある方の相談"
                                    ],
                                    imageId: "feature4"
                                }
                            ].map((feature, index) => (
                                <div key={feature.id} className="flex flex-col group">
                                    {/* Title Area - Title Left, Number Alternating */}
                                    <div className="relative h-24 flex items-center mb-0">
                                        {/* Large Gradient Number */}
                                        <span
                                            className={`absolute top-[20%] -translate-y-1/2 block text-[8rem] md:text-[11rem] leading-[0.8] font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#C5A572] via-[#E5C592] to-transparent select-none opacity-60 scale-x-[0.85] tracking-tighter ${index % 2 === 0 ? 'left-[-1rem] origin-left' : 'right-0 origin-right'}`}
                                        >
                                            {feature.id}
                                        </span>

                                        {/* Title - Always Left */}
                                        <div className="relative z-10 w-full text-left pl-4">
                                            <h3 className="text-3xl md:text-4xl font-bold text-[#5A4D41] leading-tight tracking-wide font-serif">
                                                {feature.highlight}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Image Area */}
                                    <div className="w-full mb-8 relative">
                                        <div className="relative rounded-[30px] overflow-hidden shadow-lg border-2 border-white">
                                            <PageImage
                                                path="/concerns/oral-surgery"
                                                imageId={feature.imageId}
                                                alt={feature.highlight}
                                                className="w-full h-auto aspect-[16/9] object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#C5A572]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        </div>
                                    </div>

                                    {/* Text Area - Always Left Aligned */}
                                    <div className="max-w-3xl text-left">
                                        <p className="text-[#C5A572] font-bold tracking-widest mb-2 uppercase text-xs">{feature.title}</p>
                                        <p className="text-lg text-[#8D8070] mb-6 leading-relaxed font-medium">
                                            {feature.summary}
                                        </p>
                                        <div className="grid gap-3 text-left bg-[#FDFBF7] p-6 rounded-2xl border border-[#C5A572]/10">
                                            {feature.details.map((detail, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <CheckCircle2 size={18} className="text-[#C5A572] flex-shrink-0 mt-0.5" />
                                                    <span className="text-[#5A4D41] font-medium text-sm md:text-base">{detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Lead & What is Section */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif">
                                お口のトラブル、<br className="md:hidden" />放置していませんか？
                            </h2>
                            <p className="text-lg leading-loose text-[#8D8070] max-w-3xl mx-auto">
                                口腔外科では、虫歯や歯周病以外の、<br />
                                お口の中や顎、顔面に生じる様々な病気を扱います。<br />
                                少しでも気になる症状があれば、お早めにご相談ください。
                            </p>
                        </div>

                        {/* 口腔外科とは */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">口腔外科とは</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    口腔外科とは、虫歯や歯周病以外の、お口の中や顎、顔面に生じる様々な病気を専門的に診断・治療する診療科です。
                                    <span className="font-bold bg-yellow-100">口内炎、粘膜疾患、良性腫瘍、嚢胞、唾液腺疾患</span>など、幅広い疾患に対応します。
                                </p>
                                <p>
                                    特に、<span className="text-[#2E8B57] font-bold">2週間以上治らない口内炎は、口腔がんなど重大な病気のサインである可能性</span>があります。
                                    当院では、早期発見・早期治療を重視し、必要に応じて大学病院などの専門機関と連携して治療を行います。
                                </p>
                                <p>
                                    また、<span className="font-bold bg-yellow-100">見た目に異常がなくても、舌が痛い、口が乾く、味がしない</span>などの症状にも対応いたします。
                                    お口の中の小さな違和感でも、お気軽にご相談ください。
                                </p>
                            </div>
                        </div>

                        {/* 対応する疾患の種類 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">対応する疾患</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-8">
                                {/* 粘膜疾患 */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">粘膜疾患</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        <span className="font-bold bg-yellow-100">口内炎、白板症、扁平苔癬、舌痛症</span>など、お口の粘膜に生じる様々な病気を診断します。
                                        <span className="text-[#2E8B57] font-bold">2週間以上治らない口内炎や、粘膜の色の変化（白や赤）は要注意</span>です。
                                        早期発見により、重大な病気の進行を防ぐことができます。
                                    </p>
                                </div>
                                {/* 良性腫瘍・嚢胞 */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">良性腫瘍・嚢胞</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        お口の中にできる<span className="font-bold bg-yellow-100">できもの（腫瘍）や膿の袋（嚢胞）</span>を摘出します。
                                        <span className="text-[#2E8B57] font-bold">当院では局所麻酔下での日帰り手術が可能</span>で、摘出した組織は病理検査に出し、確定診断を行います。
                                        入院が必要な大きな手術の場合は、大学病院をご紹介します。
                                    </p>
                                </div>
                                {/* 唾液腺疾患 */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">唾液腺疾患</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        <span className="font-bold bg-yellow-100">食事の時に顎の下が腫れる、唾液が出にくい、口が乾く</span>などの症状は、唾液腺の病気かもしれません。
                                        <span className="text-[#2E8B57] font-bold">唾液腺炎、唾石症、シェーグレン症候群</span>など、様々な原因が考えられます。
                                        適切な検査と治療により、症状の改善を図ります。
                                    </p>
                                </div>
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
                                        title: "問診・視診・触診",
                                        desc: "症状や経過を詳しく伺い、患部を直接見て、触って確認します。痛みの有無、経過期間、全身の健康状態なども確認します。",
                                        imageId: "flow1"
                                    },
                                    {
                                        num: "02",
                                        title: "画像検査",
                                        desc: "レントゲンやCT撮影を行い、骨や歯の状態、病変の広がりを確認します。必要に応じて、血液検査や生検（組織検査）を行うこともあります。",
                                        imageId: "flow2"
                                    },
                                    {
                                        num: "03",
                                        title: "診断・治療方針の決定",
                                        desc: "検査結果に基づき診断を行い、当院で治療可能か、専門機関への紹介が必要かを判断します。治療内容やリスクについて詳しくご説明します。",
                                        imageId: "flow3"
                                    },
                                    {
                                        num: "04",
                                        title: "治療・処置",
                                        desc: "投薬治療、切開排膿、摘出術など、病状に合わせた治療を行います。手術が必要な場合は、局所麻酔下で日帰り手術を行います。",
                                        imageId: "flow4"
                                    },
                                    {
                                        num: "05",
                                        title: "経過観察・病理検査",
                                        desc: "術後の経過を確認します。摘出した組織は、必要に応じて病理検査（顕微鏡での検査）に出し、確定診断を行います。",
                                        imageId: "flow5"
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
                                            <PageImage
                                                path="/concerns/oral-surgery"
                                                imageId={step.imageId}
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

                        {/* Recommended Section */}
                        <div className="bg-white p-10 md:p-14 rounded-[40px] shadow-2xl shadow-[#C5A572]/10 border border-[#C5A572]/20 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#C5A572] to-[#E5C592]"></div>
                            <h3 className="text-center text-[#C5A572] font-bold tracking-widest mb-10 uppercase flex items-center justify-center gap-4">
                                <span className="w-8 h-px bg-[#C5A572]"></span>
                                Recommended
                                <span className="w-8 h-px bg-[#C5A572]"></span>
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    "口の中にしこりやできものがある方",
                                    "口内炎が2週間以上治らない方",
                                    "舌が痛い、痺れる、味がしない方",
                                    "唾液が出にくい、食事の時に顎の下が腫れる方",
                                    "お口の中の粘膜の色がおかしい（白や赤）方"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 p-5 bg-[#FDFBF7] rounded-2xl hover:bg-[#Fcf8f0] transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-[#C5A572] flex items-center justify-center flex-shrink-0 shadow-md">
                                            <CheckCircle2 size={16} className="text-white" />
                                        </div>
                                        <span className="font-bold text-[#5A4D41]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Merit & Demerit */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <p className="text-[#C5A572] tracking-[0.2em] font-bold mb-2">MERIT & DEMERIT</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">メリット・デメリット</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Merit */}
                            <div className="bg-white p-10 rounded-[30px] shadow-xl border-t-8 border-[#C5A572] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Plus size={100} className="text-[#C5A572]" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#5A4D41] mb-8 flex items-center gap-3 relative z-10">
                                    <span className="bg-[#C5A572] text-white p-2 rounded-lg"><Plus size={20} /></span>
                                    メリット
                                </h3>
                                <ul className="space-y-4 relative z-10">
                                    {[
                                        "お口のトラブルの原因がはっきりする",
                                        "口腔がんなどの重大な病気の早期発見につながる",
                                        "専門的な処置により、症状を改善できる"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-[#C5A572] flex-shrink-0 mt-0.5" />
                                            <span className="text-[#5A4D41] font-bold">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Demerit */}
                            <div className="bg-white p-10 rounded-[30px] shadow-xl border-t-8 border-gray-400 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Minus size={100} className="text-gray-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#5A4D41] mb-8 flex items-center gap-3 relative z-10">
                                    <span className="bg-gray-400 text-white p-2 rounded-lg"><Minus size={20} /></span>
                                    デメリット
                                </h3>
                                <ul className="space-y-4 relative z-10">
                                    {[
                                        "確定診断のために、組織検査（生検）が必要になる場合がある",
                                        "治療内容によっては、術後に痛みや腫れが出ることがある"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                                            <span className="text-[#5A4D41] font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
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
                                    "外科処置に伴う出血、腫れ、痛みが一時的に生じることがあります。",
                                    "神経の近くの手術の場合、稀に感覚麻痺が残るリスクがあります。",
                                    "悪性腫瘍（がん）が見つかった場合は、長期的な治療が必要になります。"
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
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-16">
                            <p className="text-[#C5A572] tracking-[0.2em] font-bold mb-2">Q&A</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">よくあるご質問</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    q: "口内炎がなかなか治りません。受診した方がいいですか？",
                                    a: "はい、2週間以上治らない口内炎は、単なる口内炎ではなく、他の病気（口腔がんなど）の可能性があります。痛みがなくても、早めに受診してください。"
                                },
                                {
                                    q: "舌がヒリヒリ痛いのですが、見た目は何ともありません。",
                                    a: "「舌痛症（ぜっつうしょう）」の可能性があります。見た目に異常がなくても、神経的な要因やストレス、ビタミン不足などで痛みが出ることがあります。適切な診断と治療が必要です。"
                                },
                                {
                                    q: "手術は入院が必要ですか？",
                                    a: "当院で行う手術は、基本的にすべて局所麻酔下での日帰り手術です。入院が必要な全身麻酔の手術などは、大学病院をご紹介します。"
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

                {/* CTA Section */}
                <section className="py-2 bg-[#5A4D41] text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">
                            お口の気になる症状、<br className="md:hidden" />まずはご相談ください
                        </h2>
                        <p className="text-[#F0EAE0] mb-12">
                            少しでも気になることがあれば、お気軽にお問い合わせください。
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
                            <a
                                href="https://apo-toolboxes.stransa.co.jp/user/web/babordc4ba29b/reservations"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#C5A572] hover:bg-[#B59562] text-white px-8 py-5 rounded-full font-bold shadow-lg transition-all flex items-center justify-center gap-3 text-lg flex-1 group"
                            >
                                <Calendar className="group-hover:rotate-12 transition" />
                                24時間 WEB予約
                            </a>
                            <button className="bg-transparent border-2 border-[#C5A572] hover:bg-[#C5A572]/10 text-white px-8 py-5 rounded-full font-bold transition-all flex items-center justify-center gap-3 text-lg flex-1">
                                <Phone className="text-[#C5A572]" />
                                03-1234-5678
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
