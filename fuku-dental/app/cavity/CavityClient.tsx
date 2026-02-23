"use client";

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import { CheckCircle2, ArrowRight, Calendar, Phone, Plus, Minus, ChevronRight } from 'lucide-react';

export default function CavityPage() {
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

    // Hero slider images
    const heroImages = [
        { imageId: "hero-slide1", alt: "むし歯治療1" },
        { imageId: "hero-slide2", alt: "むし歯治療2" },
        { imageId: "hero-slide3", alt: "むし歯治療3" },
    ];

    // Hero image slider logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Switch every 5 seconds

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
                                    path="/cavity"
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
                                                生涯、
                                            </span>
                                            <span className="inline-block bg-gradient-to-br from-[#D4AF37] via-[#F4E3B2] to-[#C5A028] bg-clip-text text-transparent drop-shadow-lg transform hover:scale-105 transition-all duration-300"
                                                  style={{
                                                      WebkitBackgroundClip: 'text',
                                                      WebkitTextFillColor: 'transparent'
                                                  }}>
                                                <span className="text-[120%]">一本でも多く</span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/10 via-[#F4E3B2]/20 to-[#D4AF37]/10 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
                                    <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent rounded-2xl -z-10"></div>
                                </div>
                                <span className="block text-[5.5vw] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#5A4D41] mt-1 md:mt-4 mb-0 pb-0 leading-none font-semibold font-serif">
                                    削らない・痛くない むし歯治療
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
                            PREVENTION-BASED TREATMENT
                        </p>
                        <h2 className="text-2xl md:text-3xl font-medium text-[#5A4D41] font-serif leading-loose tracking-widest">
                            削って詰めるだけでなく<br />
                            「なぜ虫歯になったか」を考える治療
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
                                    desc: "C2段階の虫歯を最小限の削りでレジン充填。神経を残すことに成功しました。",
                                    imageId: "case1"
                                },
                                {
                                    title: "Case.02",
                                    desc: "深い虫歯でしたが、MTAセメントによる覆髄で神経を保存できました。",
                                    imageId: "case2"
                                },
                                {
                                    title: "Case.03",
                                    desc: "拡大鏡を使用した精密治療で、健康な歯質を最大限に温存しました。",
                                    imageId: "case3"
                                }
                            ].map((item, index) => (
                                <div key={index} className="group cursor-pointer">
                                    <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg">
                                        <PageImage
                                            path="/cavity"
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
                                    title: "Pain-Free",
                                    highlight: "痛みに配慮した無痛治療",
                                    summary: "麻酔の痛みを極限まで減らす工夫で、<span class='text-[#395b45] font-bold'>リラックスして治療</span>を受けられます。",
                                    details: [
                                        "<span class='font-bold bg-yellow-100'>表面麻酔</span>で注射針のチクッとする痛みを軽減し、<span class='font-bold bg-yellow-100'>極細の針と電動麻酔器</span>による<span class='text-[#395b45] font-bold'>一定速度での注入</span>で痛みを最小限に抑えます。"
                                    ],
                                    imageId: "feature1"
                                },
                                {
                                    id: "02",
                                    title: "MI Treatment",
                                    highlight: "なるべく削らない治療",
                                    summary: "<span class='text-[#395b45] font-bold'>健康な歯を可能な限り残す</span>「ミニマル・インターベンション」を実践しています。",
                                    details: [
                                        "<span class='font-bold bg-yellow-100'>う蝕検知液</span>で虫歯の部分だけを正確に識別し、<span class='font-bold bg-yellow-100'>拡大鏡（ルーペ）</span>を使用した<span class='text-[#395b45] font-bold'>精密な切削</span>を行います。"
                                    ],
                                    imageId: "feature2"
                                },
                                {
                                    id: "03",
                                    title: "Precision",
                                    highlight: "拡大鏡による精密治療",
                                    summary: "肉眼では見えない細部まで確認し、<span class='text-[#395b45] font-bold'>確実な治療</span>を行います。",
                                    details: [
                                        "<span class='font-bold bg-yellow-100'>高倍率の拡大鏡</span>を使用して患部を拡大し、<span class='text-[#395b45] font-bold'>詰め物や被せ物の適合精度を向上</span>させます。"
                                    ],
                                    imageId: "feature3"
                                },
                                {
                                    id: "04",
                                    title: "Recurrence Prevention",
                                    highlight: "再発を防ぐ修復物",
                                    summary: "<span class='text-[#395b45] font-bold'>治療後の虫歯（二次カリエス）を防ぐ</span>ための高品質な素材をご用意しています。",
                                    details: [
                                        "<span class='font-bold bg-yellow-100'>歯との適合性が高いセラミック</span>などの素材で、<span class='text-[#395b45] font-bold'>汚れが付きにくく、見た目も自然で美しい</span>修復を実現します。"
                                    ],
                                    imageId: "feature4"
                                },
                                {
                                    id: "05",
                                    title: "Digital Diagnosis",
                                    highlight: "デジタル診断の実施",
                                    summary: "<span class='font-bold bg-yellow-100'>口腔内スキャナーの近赤外線機能や詳細なレントゲン撮影</span>を活用し、<span class='text-[#395b45] font-bold'>虫歯を数値化・可視化</span>します。",
                                    details: [
                                        "適宜、<span class='font-bold bg-yellow-100'>詳細なレントゲンを撮影</span>して虫歯の有無を正確に確認し、<span class='text-[#395b45] font-bold'>本当に削るべき虫歯と経過観察で良い虫歯を正確に判断</span>。不要な切削を防ぎ、歯の寿命を延ばします。"
                                    ],
                                    imageId: "feature5"
                                }
                            ].map((feature, index) => (
                                <div key={feature.id} className="flex flex-col group">
                                    {/* Title Area */}
                                    <div className="relative">
                                        {/* Large Gradient Number */}
                                        <span className="text-8xl font-serif text-[#C5A572]/15 absolute -top-16 -left-8 z-0 select-none font-bold" style={{ letterSpacing: '-0.05em' }}>
                                            {feature.id}
                                        </span>

                                        {/* Title */}
                                        <div className="flex items-start justify-between gap-4">
                                            <h3 className="text-3xl md:text-4xl font-bold text-[#5A4D41] leading-tight tracking-wide font-serif inline-block relative flex-1">
                                                {feature.id === "01" ? (
                                                    <>痛み<span className="text-[0.75em]">に</span>配慮した無痛治療</>
                                                ) : feature.id === "02" ? (
                                                    <>なるべく削らない治療</>
                                                ) : feature.id === "03" ? (
                                                    <>拡大鏡<span className="text-[0.75em]">による</span>精密治療</>
                                                ) : feature.id === "04" ? (
                                                    <>再発<span className="text-[0.75em]">を</span>防ぐ修復物</>
                                                ) : feature.id === "05" ? (
                                                    <>デジタル診断<span className="text-[0.75em]">の</span>実施</>
                                                ) : (
                                                    feature.highlight
                                                )}
                                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5A572] via-[#C5A572] to-transparent"></div>
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Image Area */}
                                    <div className="w-full mb-8 relative">
                                        <div className="relative rounded-[30px] overflow-hidden shadow-lg border-2 border-white">
                                            <PageImage
                                                path="/cavity"
                                                imageId={feature.imageId}
                                                alt={feature.highlight}
                                                className="w-full h-auto aspect-[16/9] object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#C5A572]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        </div>
                                    </div>

                                    {/* Text Area - Always Left Aligned */}
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

                {/* むし歯治療とは Section */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif">
                                歯医者が苦手な方へ
                            </h2>
                            <p className="text-lg leading-loose text-[#8D8070] max-w-3xl mx-auto">
                                「歯医者は痛い・怖い」というイメージを変えるために。<br />
                                子供の治療で培った<strong>『痛くない工夫』</strong>を、大人の治療にも徹底して応用しています。
                            </p>
                        </div>

                        {/* むし歯治療とは */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">むし歯治療とは</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    むし歯治療とは、細菌によって溶かされた歯質を除去し、詰め物や被せ物で修復する治療です。
                                    しかし当院では、<span className="font-bold bg-yellow-100">単に削って詰めるだけでなく、「なぜ虫歯になったか」の原因を考え</span>、再発を防ぐ予防ベースの治療を行います。
                                </p>
                                <p>
                                    可能な限り<span className="text-[#2E8B57] font-bold">「神経を残す」「削らない（MI治療）」</span>方針で、患者様の大切な歯を可能な限り残すことに全力を尽くしています。
                                    また、<span className="text-[#2E8B57] font-bold">拡大鏡やデジタル診断を活用</span>し、精密で確実な治療を提供します。
                                </p>
                                <p>
                                    <span className="font-bold bg-yellow-100">治療後の再発を防ぐため</span>、定期検診やクリーニング、ブラッシング指導などのメンテナンスも重視しています。
                                </p>
                            </div>
                        </div>

                        {/* 虫歯の進行段階 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">虫歯の進行段階</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-8">
                                {/* C0 */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">C0（初期虫歯）</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        歯の表面のエナメル質が少し溶け始めた「脱灰」の状態です。<span className="font-bold bg-yellow-100">まだ穴は空いておらず、痛みもありません</span>。
                                        <span className="text-[#2E8B57] font-bold">削らずに、正しい歯磨きとフッ素塗布で再石灰化を促します</span>。定期検診で経過を観察します。
                                    </p>
                                </div>
                                {/* C1 */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">C1（エナメル質の虫歯）</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        エナメル質がさらに溶け、小さな穴が空いた状態です。<span className="font-bold bg-yellow-100">痛みはまだありません</span>。
                                        <span className="text-[#2E8B57] font-bold">虫歯部分だけを最小限削り、白い詰め物（レジン）で修復します</span>。通常1回で治療が完了します。
                                    </p>
                                </div>
                                {/* C2 */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">C2（象牙質の虫歯）</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        エナメル質の内側にある象牙質まで虫歯が進行した状態です。<span className="font-bold bg-yellow-100">冷たいものがしみ始めます</span>。
                                        <span className="text-[#2E8B57] font-bold">虫歯を削り、型取りをして詰め物（インレー）を装着します</span>。型取りと装着で2〜3回の通院が必要です。
                                    </p>
                                </div>
                                {/* C3 */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">C3（神経まで達した虫歯）</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        虫歯が神経（歯髄）まで達した状態です。<span className="font-bold bg-yellow-100">何もしなくてもズキズキと激しく痛みます</span>。
                                        <span className="text-[#2E8B57] font-bold">汚染された神経を取り除く「根管治療」を行い、被せ物をします</span>。根の治療には回数がかかり、5〜8回程度必要です。
                                    </p>
                                </div>
                                {/* C4 */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">C4（歯根だけ残った状態）</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        歯の頭の部分（歯冠）が崩壊し、根っこ（歯根）だけが残った末期の状態です。<span className="font-bold bg-yellow-100">神経が死ぬと一旦痛みが引くこともあります</span>。
                                        <span className="text-[#2E8B57] font-bold">抜歯となる可能性が高いですが、条件次第で根管治療を行います</span>。治療期間は長期にわたります。
                                    </p>
                                </div>
                            </div>
                            <div className="text-center mt-6">
                                <a
                                    href="/cavity/stages"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    虫歯の進行段階を詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 虫歯の治療方法 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">虫歯の治療方法</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    虫歯の進行度に応じて、<span className="font-bold bg-yellow-100">コンポジットレジン充填、インレー（詰め物）、クラウン（被せ物）、根管治療</span>など、
                                    最適な治療方法をご提案します。保険適用の治療から、審美性や耐久性を重視した自費診療まで、幅広い選択肢をご用意しています。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/cavity/treatment-methods"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    治療方法を詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 虫歯の痛みと対処法 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">虫歯の痛みと対処法</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    急な歯の痛みが出た時の応急処置や、<span className="font-bold bg-yellow-100">痛み止めの正しい使い方、冷やし方</span>など、
                                    自宅でできる対処法をご紹介します。
                                    <span className="text-[#2E8B57] font-bold">痛みは虫歯が進行しているサイン</span>です。応急処置はあくまで一時的なものなので、早めの受診をおすすめします。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/cavity/pain"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    痛みと対処法を詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 虫歯治療の費用 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">虫歯治療の費用</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    虫歯治療の費用は、<span className="font-bold bg-yellow-100">虫歯の進行度と選択する材質によって異なります</span>。
                                    保険診療では経済的負担を抑えられ、自費診療では審美性や耐久性に優れた治療を選択できます。
                                    <span className="text-[#2E8B57] font-bold">医療費控除</span>の対象となる場合もありますので、詳しくはこちらをご覧ください。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/cavity/cost"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    費用について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 治療の流れ */}
                        <div className="mb-8 bg-white rounded-2xl shadow-lg p-6 md:p-10">
                            <div className="text-center mb-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">治療の流れ</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-12">
                                {[
                                    {
                                        num: "01",
                                        title: "診査・診断",
                                        desc: "レントゲン撮影、口腔内写真撮影、虫歯検査などを行い、現在の状態を詳しく確認します。デジタル診断で虫歯を可視化します。",
                                        imageId: "step1"
                                    },
                                    {
                                        num: "02",
                                        title: "治療計画のご説明",
                                        desc: "検査結果をもとに、治療法や素材、費用、治療期間について詳しくご説明します。ご納得いただいてから治療を開始します。",
                                        imageId: "step2"
                                    },
                                    {
                                        num: "03",
                                        title: "虫歯除去・充填",
                                        desc: "表面麻酔と電動麻酔器で痛みを最小限に。拡大鏡を使用して虫歯部分だけを精密に削り、レジンや詰め物で修復します。",
                                        imageId: "step3"
                                    },
                                    {
                                        num: "04",
                                        title: "噛み合わせ調整",
                                        desc: "詰め物や被せ物の高さを調整し、快適に噛めるようにします。必要に応じて研磨も行います。",
                                        imageId: "step4"
                                    },
                                    {
                                        num: "05",
                                        title: "定期メンテナンス",
                                        desc: "虫歯の再発を防ぐため、定期検診とクリーニング、ブラッシング指導を行います。3〜6ヶ月ごとの受診をお勧めします。",
                                        imageId: "step5"
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
                                                path="/cavity"
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
                    </div>
                </section>

                {/* Risks Section */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100">
                            <h3 className="text-lg font-bold text-[#5A4D41] mb-6 text-center">リスク・副作用について</h3>
                            <ul className="space-y-3 mb-6">
                                {[
                                    "治療中・治療後に一時的な痛みや知覚過敏が出ることがあります。",
                                    "虫歯が深い場合、神経を取る根管治療が必要になることがあります。",
                                    "詰め物・被せ物が外れたり、欠けたりすることがあります。",
                                    "定期的なメンテナンスを怠ると、虫歯が再発するリスクがあります。"
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
                                    q: "虫歯治療は痛いですか？",
                                    a: "当院では、表面麻酔、極細の針、電動麻酔器などを使用し、痛みを最小限に抑える工夫をしています。多くの患者様から「思ったより痛くなかった」とのお声をいただいています。"
                                },
                                {
                                    q: "虫歯は放置するとどうなりますか？",
                                    a: "虫歯は自然に治ることはなく、放置すると進行して神経まで達し、激しい痛みが出ます。最終的には歯を失うことになるため、早めの治療をお勧めします。"
                                },
                                {
                                    q: "治療期間はどのくらいですか？",
                                    a: "虫歯の進行度によって異なります。C1の小さな虫歯なら1回で完了しますが、C3の神経まで達した虫歯は5〜8回程度かかります。"
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
                {/* 監修者情報 */}
                <div className="container mx-auto px-4 pt-2 pb-16">
                    <AuthorBio />
                </div>
            </main>

            <Footer />
        </div>
    );
}
