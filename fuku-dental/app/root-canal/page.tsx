"use client";

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { CheckCircle2, ArrowRight, Calendar, Phone, Plus, Minus, ChevronRight } from 'lucide-react';

export default function RootCanalPage() {
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

    // Hero slider images
    const heroImages = [
        { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2000", alt: "根管治療1" },
        { src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000", alt: "根管治療2" },
        { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000", alt: "根管治療3" },
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
                                                歯を残す、
                                            </span>
                                            <span className="inline-block bg-gradient-to-br from-[#D4AF37] via-[#F4E3B2] to-[#C5A028] bg-clip-text text-transparent drop-shadow-lg transform hover:scale-105 transition-all duration-300"
                                                  style={{
                                                      WebkitBackgroundClip: 'text',
                                                      WebkitTextFillColor: 'transparent'
                                                  }}>
                                                <span className="text-[120%]">最後の砦</span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/10 via-[#F4E3B2]/20 to-[#D4AF37]/10 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
                                    <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent rounded-2xl -z-10"></div>
                                </div>
                                <span className="block text-[5.5vw] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#5A4D41] mt-1 md:mt-4 mb-0 pb-0 leading-none font-semibold font-serif">
                                    精密な根管治療で大切な歯を守る
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
                            ADVANCED ROOT CANAL TREATMENT
                        </p>
                        <h2 className="text-2xl md:text-3xl font-medium text-[#5A4D41] font-serif leading-loose tracking-widest">
                            抜歯を避けるために<br />
                            当院の根管治療があります
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
                                    desc: "激しい痛みを伴う深い虫歯に対し、精密な根管治療を行い、抜歯せずに歯を保存できました。",
                                    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    title: "Case.02",
                                    desc: "他院で抜歯を勧められた歯も、マイクロスコープを使った精密治療で残すことができました。",
                                    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    title: "Case.03",
                                    desc: "根の先に膿が溜まった歯を再根管治療し、健康な状態に回復させました。",
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
                                    title: "Precision Treatment",
                                    highlight: "マイクロスコープによる精密治療",
                                    summary: "肉眼では見えない微細な根管も、<span class='font-bold bg-yellow-100'>歯科用顕微鏡</span>で拡大視野下で確実に治療します。",
                                    details: [
                                        "<span class='text-[#395b45] font-bold'>最大20倍の拡大視野で精密に処置</span>",
                                        "<span class='text-[#395b45] font-bold'>見落としがちな根管も確実に発見・治療</span>"
                                    ],
                                    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "02",
                                    title: "Pain Control",
                                    highlight: "痛みを最小限に抑える麻酔技術",
                                    summary: "<span class='font-bold bg-yellow-100'>表面麻酔・電動麻酔器・極細針</span>を使用し、治療中の痛みや不快感を軽減します。",
                                    details: [
                                        "<span class='text-[#395b45] font-bold'>表面麻酔で注射の痛みを和らげる</span>",
                                        "<span class='text-[#395b45] font-bold'>電動麻酔器で一定速度の注入により痛みを軽減</span>"
                                    ],
                                    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "03",
                                    title: "Nickel Titanium File",
                                    highlight: "ニッケルチタンファイルの使用",
                                    summary: "<span class='font-bold bg-yellow-100'>柔軟性のあるニッケルチタンファイル</span>で、複雑に曲がった根管も確実に清掃できます。",
                                    details: [
                                        "<span class='text-[#395b45] font-bold'>従来のステンレスファイルでは届かない部分まで到達</span>",
                                        "<span class='text-[#395b45] font-bold'>根管の形状を保ちながら効率的に清掃</span>"
                                    ],
                                    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "04",
                                    title: "Rubber Dam Isolation",
                                    highlight: "ラバーダム防湿で再感染を防ぐ",
                                    summary: "治療中の<span class='font-bold bg-yellow-100'>唾液や細菌の侵入を防ぎ</span>、無菌的な環境で確実な治療を行います。",
                                    details: [
                                        "<span class='text-[#395b45] font-bold'>唾液中の細菌による再感染リスクを大幅に低減</span>",
                                        "<span class='text-[#395b45] font-bold'>薬液の口腔内流出を防ぎ、安全性を向上</span>"
                                    ],
                                    image: "https://images.unsplash.com/photo-1584036561566-b93a945c3cbc?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "05",
                                    title: "Long-term Success",
                                    highlight: "長期的な成功を目指す治療計画",
                                    summary: "根管治療後の被せ物まで考慮し、<span class='font-bold bg-yellow-100'>長持ちする総合的な治療計画</span>を立案します。",
                                    details: [
                                        "<span class='text-[#395b45] font-bold'>根管治療後の土台や被せ物の選択までサポート</span>",
                                        "<span class='text-[#395b45] font-bold'>定期的なメンテナンスで長期的な健康を維持</span>"
                                    ],
                                    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800"
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
                                                className="w-full h-auto aspect-[16/9] object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#C5A572]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        </div>
                                    </div>

                                    {/* Text Area - Always Left Aligned */}
                                    <div>
                                        <p className="text-base md:text-lg text-[#5A4D41] leading-loose font-sans" dangerouslySetInnerHTML={{ __html: feature.summary + feature.details.join('') }}>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 根管治療とは Section */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif">
                                痛みのある歯も<br className="md:hidden" />諦めないでください
                            </h2>
                            <p className="text-lg leading-loose text-[#8D8070] max-w-3xl mx-auto">
                                虫歯が進行して神経まで達してしまった歯でも、<br />
                                適切な根管治療を行えば、<strong>抜歯せずに残せる可能性があります</strong>。<br />
                                当院では、<strong>「精密さ」</strong>と<strong>「確実性」</strong>を重視した治療を提供しています。
                            </p>
                        </div>

                        {/* 根管治療とは */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">根管治療とは</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    根管治療（こんかんちりょう）とは、虫歯が神経まで達してしまった場合や、以前に神経を取った歯の根の先に膿が溜まってしまった場合に行う治療です。
                                    <span className="font-bold bg-yellow-100">歯の根っこの中（根管）にある汚染された神経や血管を取り除き、きれいに洗浄・消毒してから薬剤を詰める</span>ことで、歯を残すことができます。
                                </p>
                                <p>
                                    根管は非常に細く複雑な形状をしているため、<span className="text-[#2E8B57] font-bold">肉眼だけでは見えない部分も多く、高度な技術と精密さが求められます</span>。
                                    当院では、マイクロスコープ（歯科用顕微鏡）やニッケルチタンファイルなどの最新機器を使用し、確実な治療を行っています。
                                </p>
                                <p>
                                    根管治療は<span className="font-bold bg-yellow-100">「歯の基礎工事」</span>とも言える重要な治療です。
                                    この治療がしっかりと行われていないと、被せ物をしてもすぐに痛みや腫れが再発し、最悪の場合は抜歯が必要になります。
                                </p>
                            </div>
                        </div>

                        {/* こんな症状はありませんか */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">こんな症状はありませんか？</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-8">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#C5A572]/10">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {[
                                            "ズキズキと激しく痛む",
                                            "噛むと痛い、違和感がある",
                                            "温かいものがしみる",
                                            "歯茎が腫れている、膿が出る",
                                            "過去に神経を抜いた歯が痛む",
                                            "歯が浮いたような感じがする"
                                        ].map((symptom, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle2 size={18} className="text-[#C5A572] flex-shrink-0 mt-0.5" />
                                                <span className="text-[#5A4D41] font-medium">{symptom}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <p className="text-[#5A4D41] font-bold text-center">
                                            これらの症状がある場合、<span className="text-[#E05D5D]">放置すると抜歯が必要になる</span>可能性があります。<br />
                                            早めにご相談ください。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 詳しい情報セクション */}
                        <div className="space-y-16 mb-16">
                            {/* 根管治療の種類 */}
                            <div>
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">根管治療の種類</h3>
                                    <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                                </div>
                                <div className="space-y-8">
                                    {/* 初回根管治療 */}
                                    <div>
                                        <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">初回根管治療</h4>
                                        <p className="text-[#5A4D41] leading-loose">
                                            虫歯が神経まで達した場合や、外傷などで歯髄（神経）が死んでしまった場合に行う、<span className="font-bold bg-yellow-100">初めての根管治療</span>です。感染した歯髄を取り除き、根管内を徹底的に清掃・消毒します。
                                        </p>
                                    </div>
                                    {/* 再根管治療 */}
                                    <div>
                                        <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">再根管治療（リトリートメント）</h4>
                                        <p className="text-[#5A4D41] leading-loose">
                                            過去に根管治療を行った歯が再び感染した場合に行う治療です。<span className="font-bold bg-yellow-100">一度充填した薬剤を取り除き、再度清掃・消毒</span>を行います。初回より複雑で難易度が高い治療となります。
                                        </p>
                                    </div>
                                    {/* 歯根端切除術 */}
                                    <div>
                                        <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">歯根端切除術</h4>
                                        <p className="text-[#5A4D41] leading-loose">
                                            通常の根管治療では治癒しない場合に行う<span className="font-bold bg-yellow-100">外科的な治療法</span>です。歯茎を切開し、根の先端部分と病巣を直接取り除きます。被せ物を外さずに治療できるメリットがあります。
                                        </p>
                                    </div>
                                </div>
                                <div className="text-center mt-6">
                                    <a href="/root-canal/types" className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium">
                                        根管治療の種類について詳しく見る <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>

                            {/* 費用について */}
                            <div>
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">費用について</h3>
                                    <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                                </div>
                                <p className="text-[#5A4D41] leading-loose mb-6">
                                    根管治療は<span className="font-bold bg-yellow-100">保険診療と自費診療</span>から選択できます。保険診療は費用を抑えられますが、使用できる器具や材料に制限があります。一方、<span className="font-bold bg-yellow-100">自費診療ではマイクロスコープやニッケルチタンファイル</span>などの最新機器を使用し、より精密で成功率の高い治療が可能です。当院では、患者様のご希望やお口の状態に応じて最適なプランをご提案します。
                                </p>
                                <div className="text-center mt-6">
                                    <a href="/root-canal/cost" className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium">
                                        費用について詳しく見る <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>

                            {/* 痛みについて */}
                            <div>
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">痛みについて</h3>
                                    <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                                </div>
                                <p className="text-[#5A4D41] leading-loose mb-6">
                                    「根管治療は痛い」というイメージをお持ちの方も多いかもしれません。しかし、<span className="font-bold bg-yellow-100">現代の根管治療では麻酔を十分に効かせて行う</span>ため、治療中の痛みはほとんどありません。治療後に一時的な痛みや違和感が出ることがありますが、通常は数日で治まります。当院では痛みに配慮した治療を心がけ、必要に応じて痛み止めを処方しています。
                                </p>
                                <div className="text-center mt-6">
                                    <a href="/root-canal/pain" className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium">
                                        痛みについて詳しく見る <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>

                            {/* 治療期間・回数 */}
                            <div>
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">治療期間・回数</h3>
                                    <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                                </div>
                                <p className="text-[#5A4D41] leading-loose mb-6">
                                    根管治療の期間は、<span className="font-bold bg-yellow-100">通常3〜5回の通院で完了</span>します。1回の治療時間は30分〜1時間程度です。ただし、根管の形状が複雑な場合や、感染が重度の場合は、さらに時間がかかることがあります。治療終了後は、土台と被せ物を作製するため、さらに2〜3回の通院が必要です。当院では、できる限り通院回数を減らせるよう効率的な治療を心がけています。
                                </p>
                                <div className="text-center mt-6">
                                    <a href="/root-canal/duration" className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium">
                                        治療期間・回数について詳しく見る <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>

                            {/* 症例紹介 */}
                            <div>
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">症例紹介</h3>
                                    <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                                </div>
                                <p className="text-[#5A4D41] leading-loose mb-6">
                                    当院で実際に行った根管治療の症例をご紹介しています。<span className="font-bold bg-yellow-100">初回根管治療、再根管治療、歯根端切除術</span>など、さまざまなケースの治療前後の写真や経過、患者様の声を掲載しています。同じような症状でお悩みの方は、ぜひ参考にしてください。
                                </p>
                                <div className="text-center mt-6">
                                    <a href="/root-canal/case-studies" className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium">
                                        症例紹介を詳しく見る <ArrowRight size={16} />
                                    </a>
                                </div>
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
                                        desc: "レントゲン撮影や視診、触診などで、根管の状態を詳しく確認します。必要に応じてCT撮影も行い、立体的に根の形状を把握します。",
                                        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                                    },
                                    {
                                        num: "02",
                                        title: "麻酔・ラバーダム装着",
                                        desc: "痛みを抑えるために十分に麻酔を効かせます。また、唾液や細菌の侵入を防ぐため、ラバーダムというゴムのシートで治療する歯を隔離します。",
                                        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                                    },
                                    {
                                        num: "03",
                                        title: "根管の清掃・消毒",
                                        desc: "マイクロスコープで拡大視野下、ニッケルチタンファイルを使って根管内の汚染された組織を取り除き、薬液で徹底的に洗浄・消毒します。この工程を数回繰り返します。",
                                        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                                    },
                                    {
                                        num: "04",
                                        title: "根管充填",
                                        desc: "根管内がきれいになったら、ガッタパーチャという薬剤で隙間なく充填し、再感染を防ぎます。これで根管治療は完了です。",
                                        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                                    },
                                    {
                                        num: "05",
                                        title: "土台・被せ物の作製",
                                        desc: "根管治療が終わったら、歯の土台を作り、その上に被せ物（クラウン）を装着します。当院では、審美性・耐久性に優れたセラミッククラウンもご提供しています。",
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

                {/* Risks Section */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100">
                            <h3 className="text-lg font-bold text-[#5A4D41] mb-6 text-center">リスク・副作用について</h3>
                            <ul className="space-y-3 mb-6">
                                {[
                                    "治療中・治療後に一時的な痛みや腫れが出ることがあります。",
                                    "根管が複雑な形状の場合、完全な清掃ができず、再治療が必要になることがあります。",
                                    "治療中に器具が折れて根管内に残ってしまうことがあります（その場合、除去を試みるか経過観察します）。",
                                    "歯の根が割れている場合や、根の先の病巣が大きすぎる場合は、抜歯が必要になることがあります。"
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
                <section className="pt-8 pb-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-16">
                            <p className="text-[#C5A572] tracking-[0.2em] font-bold mb-2">Q&A</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">よくあるご質問</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    q: "根管治療は痛いですか？",
                                    a: "麻酔を十分に効かせて治療しますので、治療中の痛みはほとんどありません。ただし、炎症が強い場合や治療後に一時的な痛みが出ることがあります。痛み止めを処方しますのでご安心ください。"
                                },
                                {
                                    q: "治療期間はどのくらいですか？",
                                    a: "根管の本数や感染の程度によりますが、通常3〜5回程度の通院が必要です。期間としては2週間〜1ヶ月程度が目安となります。"
                                },
                                {
                                    q: "他院で抜歯と言われた歯も治療できますか？",
                                    a: "歯の状態によりますが、当院では精密な根管治療により、抜歯を避けられるケースも多くあります。一度ご相談ください。ただし、歯根破折や根尖病巣が大きすぎる場合など、どうしても抜歯が必要なケースもあります。"
                                },
                                {
                                    q: "保険は適用されますか？",
                                    a: "基本的な根管治療は保険適用です。ただし、マイクロスコープを使用した精密治療やMTAセメントなどの特殊な材料を使用する場合は、自費診療となることがあります。詳しくはご相談ください。"
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
                            歯を残せる可能性があります。<br className="md:hidden" />まずはご相談ください
                        </h2>
                        <p className="text-[#F0EAE0] mb-12">
                            抜歯を避け、大切な歯を守るために。精密な根管治療で最善を尽くします。
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
