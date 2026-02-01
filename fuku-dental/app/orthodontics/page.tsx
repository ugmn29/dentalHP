"use client";

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { CheckCircle2, ArrowRight, Calendar, Phone, Plus, Minus, ChevronRight } from 'lucide-react';

export default function OrthoGeneralPage() {
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

    const heroImages = [
        { src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000", alt: "矯正歯科1" },
        { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2000", alt: "矯正歯科2" },
        { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000", alt: "矯正歯科3" },
    ];

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
                {/* Hero Section */}
                <section className="relative w-full overflow-hidden bg-white">
                    <div className="relative w-full" style={{ height: '50vh' }}>
                        {heroImages.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ${
                                    index === currentHeroSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                        ))}
                        <div className="absolute -bottom-8 right-4 md:-bottom-10 md:right-8 z-20 animate-bounce-slow">
                            <a href="#" className="group relative flex items-center gap-3 bg-gradient-to-r from-[#9B89B3] to-[#8B7AA3] hover:from-[#AB99C3] hover:to-[#9B89B3] text-white px-6 py-4 md:px-8 md:py-5 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(155,137,179,0.6)] transition-all duration-300 transform hover:scale-105">
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
                            </a>
                        </div>
                    </div>

                    <div className="relative bg-white flex flex-col items-center justify-start px-4 pt-8 pb-6 md:pb-8">
                        <div className="max-w-7xl w-full text-center flex items-center justify-center">
                            <h1 className="font-bold leading-tight font-serif mb-0">
                                <div className="relative inline-block mb-2 md:mb-4 px-4 md:px-8">
                                    <div className="relative z-10 py-2 md:py-4 whitespace-nowrap overflow-x-auto">
                                        <span className="inline-flex items-center justify-center gap-1 md:gap-3 text-[6vw] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif" style={{ fontWeight: '900', letterSpacing: '0.05em' }}>
                                            <span className="inline-block text-[#2d2d2d]">美しく、</span>
                                            <span className="inline-block bg-gradient-to-br from-[#D4AF37] via-[#F4E3B2] to-[#C5A028] bg-clip-text text-transparent drop-shadow-lg" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                                <span className="text-[120%]">健康的な歯並び</span><span className="text-[85%]">へ</span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/10 via-[#F4E3B2]/20 to-[#D4AF37]/10 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
                                </div>
                                <span className="block text-[5.5vw] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#5A4D41] mt-1 md:mt-4 mb-0 pb-0 leading-none font-semibold font-serif">
                                    確実な結果を追求する矯正治療
                                </span>
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Concept Message */}
                <section className="pt-6 md:pt-2 pb-2 md:pb-2 bg-[#FDFBF7] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0 bg-[radial-gradient(#C5A572_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <p className="text-[#C5A572] tracking-[0.4em] font-medium mb-6 text-xs md:text-sm uppercase font-serif">ORTHODONTICS</p>
                        <h2 className="text-2xl md:text-3xl font-medium text-[#5A4D41] font-serif leading-loose tracking-widest">
                            あらゆる歯並びの悩みに対応<br />確実な治療結果を目指します
                        </h2>
                    </div>
                </section>

                {/* Case Studies */}
                <section className="pt-8 pb-8 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-8">
                            <p className="text-[#C5A572] tracking-[0.2em] font-bold mb-2">CASE STUDIES</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">症例紹介</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Case.01", desc: "叢生（ガタガタの歯並び）をワイヤー矯正で整えました。", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" },
                                { title: "Case.02", desc: "出っ歯（上顎前突）を抜歯矯正で改善しました。", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" },
                                { title: "Case.03", desc: "受け口（下顎前突）を矯正治療で改善しました。", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" }
                            ].map((item, index) => (
                                <div key={index} className="group cursor-pointer">
                                    <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg">
                                        <img src={item.image} alt={item.title} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full">
                                            <span className="text-[#C5A572] font-serif font-bold">{item.title}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">{item.desc.substring(0, 15)}...</h3>
                                    <p className="text-[#8D8070] text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <a href="#" className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium">
                                もっと症例を見る <ArrowRight size={16} />
                            </a>
                        </div>

                        <div className="mt-12">
                            <a href="https://apo-toolboxes.stransa.co.jp/user/web/babordc4ba29b/reservations" target="_blank" rel="noopener noreferrer" className="block">
                                <img src="/images/web-reservation-banner.png" alt="Web予約" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
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
                                    id: "01", title: "Versatile", highlight: "幅広い症例に対応可能",
                                    summary: "<span class='font-bold bg-yellow-100'>歴史ある治療法</span>で、あらゆる歯並びの悩みを解決します。",
                                    details: ["<span class='text-[#395b45] font-bold'>マウスピース矯正では難しい複雑な症例にも対応</span>", "<span class='text-[#395b45] font-bold'>確実な治療結果を求める方におすすめ</span>"],
                                    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "02", title: "Aesthetic Options", highlight: "目立ちにくい装置も選択可能",
                                    summary: "「矯正＝目立つ」というイメージを変える、<span class='font-bold bg-yellow-100'>審美的な装置</span>をご用意しています。",
                                    details: ["歯の色に馴染む<span class='font-bold bg-yellow-100'>「ホワイトブラケット」</span>", "目立ちにくい<span class='font-bold bg-yellow-100'>「ホワイトワイヤー」</span>"],
                                    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "03", title: "Partial Ortho", highlight: "部分矯正（MTM）にも対応",
                                    summary: "「前歯だけ直したい」などのご希望には、<span class='font-bold bg-yellow-100'>部分的な矯正</span>で対応します。",
                                    details: ["<span class='text-[#395b45] font-bold'>気になる部分だけをピンポイントで治療</span>", "<span class='text-[#395b45] font-bold'>全体矯正に比べて治療期間が短い</span>"],
                                    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "04", title: "Functional Focus", highlight: "機能面も重視した治療",
                                    summary: "見た目の美しさだけでなく、<span class='font-bold bg-yellow-100'>「噛み合わせ」の改善</span>も重視しています。",
                                    details: ["<span class='text-[#395b45] font-bold'>しっかり噛める健康的な噛み合わせを構築</span>", "<span class='text-[#395b45] font-bold'>長期的に安定する歯並びを目指す</span>"],
                                    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "05", title: "Patient First", highlight: "ご希望に合わせた治療",
                                    summary: "患者様のご希望を丁寧にお聞きし、<span class='font-bold bg-yellow-100'>最適な治療プラン</span>をご提案します。",
                                    details: ["<span class='text-[#395b45] font-bold'>治療期間や費用について丁寧にご説明</span>", "<span class='text-[#395b45] font-bold'>押し売りは一切せず、ご自身で選択できる環境を提供</span>"],
                                    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800"
                                }
                            ].map((feature, index) => (
                                <div key={feature.id} className="flex flex-col group">
                                    <div className="relative">
                                        <span className="text-8xl font-serif text-[#C5A572]/15 absolute -top-16 -left-8 z-0 select-none font-bold" style={{ letterSpacing: '-0.05em' }}>
                                            {feature.id}
                                        </span>
                                        <div className="flex items-start justify-between gap-4">
                                            <h3 className="text-3xl md:text-4xl font-bold text-[#5A4D41] leading-tight tracking-wide font-serif inline-block relative">
                                                <span dangerouslySetInnerHTML={{ __html: feature.highlight.replace(/(の|を|に|が|は|と|へ|から|より|で|や)/g, '<span class="text-[0.75em]">$1</span>') }} />
                                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5A572] via-[#C5A572] to-transparent"></div>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="w-full mb-8 relative">
                                        <div className="relative rounded-[30px] overflow-hidden shadow-lg border-2 border-white">
                                            <img src={feature.image} alt={feature.highlight} className="w-full h-auto aspect-[16/9] object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#C5A572]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-base md:text-lg text-[#5A4D41] leading-loose font-sans" dangerouslySetInnerHTML={{ __html: feature.summary + feature.details.join('') }}>
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
                                確実な結果を求める<br className="md:hidden" />矯正治療
                            </h2>
                            <p className="text-lg leading-loose text-[#8D8070] max-w-3xl mx-auto">
                                歯並びが悪いと、見た目のコンプレックスだけでなく、<br />
                                「虫歯や歯周病になりやすい」「しっかり噛めない」「発音がしにくい」など、<br />
                                お口や全身の健康に様々な悪影響を及ぼします。
                            </p>
                        </div>

                        {/* 矯正歯科とは */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">矯正歯科とは</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    矯正歯科とは、ワイヤーやブラケットなどの装置を使って歯を動かし、歯並びや噛み合わせを整える治療です。
                                    <span className="font-bold bg-yellow-100">あらゆる症例に対応できる歴史ある治療法</span>で、マウスピース矯正では難しい複雑なケースにも対応できます。
                                </p>
                                <p>
                                    当院では、<span className="text-[#2E8B57] font-bold">見た目の美しさはもちろん、「しっかり噛める」という機能面も重視</span>した治療を行っています。
                                    お子様から大人の方まで、一人ひとりに合わせた最適な治療法をご提案します。
                                </p>
                            </div>
                        </div>

                        {/* 矯正装置の種類 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">矯正装置の種類</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">メタルブラケット</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        最も一般的なワイヤー矯正装置です。<span className="font-bold bg-yellow-100">金属製で強度が高く、幅広い症例に対応</span>できます。
                                        <span className="text-[#2E8B57] font-bold">費用を抑えたい方</span>におすすめです。
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">ホワイトブラケット（審美ブラケット）</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        <span className="font-bold bg-yellow-100">歯の色に馴染む白いセラミック製のブラケット</span>です。
                                        金属製に比べて<span className="text-[#2E8B57] font-bold">目立ちにくく、審美性を重視する方</span>におすすめです。
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">舌側矯正（リンガル矯正）</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        歯の裏側に装置をつける矯正法です。<span className="font-bold bg-yellow-100">正面からは装置が見えない</span>ため、
                                        <span className="text-[#2E8B57] font-bold">矯正していることを知られたくない方</span>に最適です。
                                    </p>
                                </div>
                            </div>
                            <div className="text-center mt-8">
                                <a href="/orthodontics/types" className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium">
                                    矯正装置の種類について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 矯正歯科の費用 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">矯正歯科の費用</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    矯正治療は<span className="font-bold bg-yellow-100">基本的に自費診療</span>となり、装置の種類や治療期間によって費用が異なります。
                                    当院では、患者様のご予算やご希望に合わせて、最適な治療プランをご提案いたします。
                                </p>
                                <p>
                                    メタルブラケットは比較的費用を抑えられ、<span className="text-[#2E8B57] font-bold">審美ブラケットや舌側矯正は見た目を重視する分、費用が高くなります</span>。
                                    詳しい料金や分割払いのご相談は、お気軽にお問い合わせください。
                                </p>
                            </div>
                            <div className="text-center mt-8">
                                <a href="/orthodontics/cost" className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium">
                                    矯正歯科の費用について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 矯正治療の期間 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">矯正治療の期間</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    矯正治療の期間は、歯並びの状態や選択する装置によって異なりますが、<span className="font-bold bg-yellow-100">全体矯正の場合、平均2〜3年程度</span>かかります。
                                    部分矯正であれば、数ヶ月〜1年程度で終わることもあります。
                                </p>
                                <p>
                                    治療期間中は<span className="text-[#2E8B57] font-bold">3〜4週間に1回程度の通院</span>が必要です。
                                    治療完了後も、後戻りを防ぐための保定期間（リテーナー使用）が必要となります。
                                </p>
                            </div>
                            <div className="text-center mt-8">
                                <a href="/orthodontics/duration" className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium">
                                    矯正治療の期間について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 大人の矯正歯科 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">大人の矯正歯科</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    「矯正は子どもがするもの」というイメージをお持ちの方もいらっしゃいますが、<span className="font-bold bg-yellow-100">歯と歯茎が健康であれば、何歳からでも矯正治療は可能</span>です。
                                    最近では、40代、50代で始められる方も増えています。
                                </p>
                                <p>
                                    大人の矯正には、<span className="text-[#2E8B57] font-bold">見た目のコンプレックス解消だけでなく、虫歯や歯周病の予防、しっかり噛める機能の回復</span>など、多くのメリットがあります。
                                    ライフスタイルに合わせた装置選びも可能です。
                                </p>
                            </div>
                            <div className="text-center mt-8">
                                <a href="/orthodontics/adult" className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium">
                                    大人の矯正歯科について詳しく見る <ArrowRight size={16} />
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
                                    { num: "01", title: "初診相談", desc: "お口の中を拝見し、矯正治療の必要性、開始時期、費用の目安などをご説明します。", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" },
                                    { num: "02", title: "精密検査", desc: "レントゲン（セファロ）、CT、歯型採り、お顔や口腔内の写真撮影などを行い、詳細なデータを集めます。", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" },
                                    { num: "03", title: "診断・治療計画の説明", desc: "検査結果を分析し、最適な治療方針、期間、費用などを詳しくご説明します。納得いただいてから治療を開始します。", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" },
                                    { num: "04", title: "装置の装着", desc: "歯にブラケットやワイヤーなどの装置を装着します。歯磨きの指導も行います。", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" },
                                    { num: "05", title: "動的治療（通院）", desc: "3〜4週間に1回程度来院いただき、ワイヤーの調整や交換を行います。治療期間は平均2〜3年程度です。", image: "https://images.unsplash.com/photo-1584036561566-b93a945c3cbc?auto=format&fit=crop&q=80&w=800" },
                                    { num: "06", title: "保定期間", desc: "歯並びが整ったら装置を外し、後戻りを防ぐための「リテーナー（保定装置）」を使用します。", image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800" }
                                ].map((step, index) => (
                                    <div key={index}>
                                        <div className="flex items-center gap-2 mb-6 border-b border-[#C5A572]/30 pb-3">
                                            <div className="relative">
                                                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#C5A572]/30 rotate-45"></div>
                                                <span className="text-3xl md:text-4xl font-light text-[#C5A572] tracking-wider relative z-10">{step.num}</span>
                                            </div>
                                            <h4 className="text-lg md:text-xl font-bold text-[#5A4D41] font-serif">{step.title}</h4>
                                        </div>
                                        <div className="mb-6 rounded-2xl overflow-hidden shadow-md">
                                            <img src={step.image} alt={step.title} className="w-full h-56 md:h-72 object-cover" />
                                        </div>
                                        <p className="text-[#5A4D41] leading-loose text-sm md:text-base">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Risks */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100">
                            <h3 className="text-lg font-bold text-[#5A4D41] mb-6 text-center">リスク・副作用について</h3>
                            <ul className="space-y-3 mb-6">
                                {["歯根吸収（歯の根が短くなること）が起こる可能性があります。", "歯肉退縮（歯茎が下がること）が起こる可能性があります。", "治療中は歯磨きが難しくなるため、虫歯や歯周病のリスクが高まります。", "保定装置を正しく使用しないと、歯並びが後戻りしてしまいます。"].map((item, i) => (
                                    <li key={i} className="text-sm text-[#8D8070] flex items-start gap-2">
                                        <span className="text-[#C5A572] mt-1">●</span>{item}
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

                {/* FAQ */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-16">
                            <p className="text-[#C5A572] tracking-[0.2em] font-bold mb-2">Q&A</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">よくあるご質問</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                { q: "大人になってからでも矯正できますか？", a: "はい、可能です。歯と歯茎が健康であれば、何歳からでも矯正治療は始められます。最近では40代、50代で始められる方も増えています。" },
                                { q: "抜歯は必ず必要ですか？", a: "いいえ、必ずしも必要ではありません。顎の大きさや歯並びの状態によっては、歯を抜かずに並べることができる場合もあります。精密検査の結果をもとに判断します。" },
                                { q: "治療期間はどれくらいですか？", a: "歯並びの状態や治療法によって異なりますが、全体矯正の場合、平均して2年〜3年程度かかります。部分矯正であれば数ヶ月〜1年程度で終わることもあります。" }
                            ].map((faq, index) => (
                                <div key={index} className="border-b border-[#F0EAE0] pb-6">
                                    <h3 className="text-lg font-bold text-[#5A4D41] mb-3 flex items-start gap-4">
                                        <span className="text-[#C5A572] font-serif italic text-2xl leading-none">Q.</span>{faq.q}
                                    </h3>
                                    <div className="pl-10">
                                        <p className="text-[#8D8070] leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Pages */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-12">
                            <p className="text-[#C5A572] tracking-[0.2em] font-bold mb-2">RELATED PAGES</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">関連ページ</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "矯正歯科の種類", desc: "ワイヤー矯正、マウスピース矯正など、様々な矯正方法をご紹介します。", href: "/orthodontics/types", icon: "📋" },
                                { title: "矯正歯科の費用", desc: "矯正治療にかかる費用の目安と、お支払い方法について詳しくご説明します。", href: "/orthodontics/cost", icon: "💰" },
                                { title: "矯正治療の期間", desc: "矯正治療にかかる期間の目安と、期間に影響する要因について解説します。", href: "/orthodontics/duration", icon: "📅" },
                                { title: "大人の矯正歯科", desc: "大人になってからの矯正治療について、メリットや注意点をご紹介します。", href: "/orthodontics/adult", icon: "👨‍⚕️" },
                                { title: "矯正歯科の症例", desc: "実際の治療事例をビフォーアフターでご覧いただけます。", href: "/orthodontics/case-studies", icon: "📸" }
                            ].map((page, index) => (
                                <a key={index} href={page.href} className="group block bg-[#FDFBF7] hover:bg-white border border-[#C5A572]/10 hover:border-[#C5A572]/30 rounded-2xl p-6 transition-all hover:shadow-lg">
                                    <div className="flex items-start gap-4 mb-3">
                                        <span className="text-4xl">{page.icon}</span>
                                        <h3 className="text-lg font-bold text-[#5A4D41] group-hover:text-[#C5A572] transition-colors">{page.title}</h3>
                                    </div>
                                    <p className="text-sm text-[#8D8070] leading-relaxed mb-4">{page.desc}</p>
                                    <div className="flex items-center gap-2 text-[#C5A572] text-sm font-medium">
                                        詳しく見る <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-2 bg-[#5A4D41] text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">まずは一度、<br className="md:hidden" />お気軽にご相談ください</h2>
                        <p className="text-[#F0EAE0] mb-12">患者様一人ひとりに合わせた最適な治療プランをご提案いたします。</p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
                            <button className="bg-[#C5A572] hover:bg-[#B59562] text-white px-8 py-5 rounded-full font-bold shadow-lg transition-all flex items-center justify-center gap-3 text-lg flex-1 group">
                                <Calendar className="group-hover:rotate-12 transition" />24時間 WEB予約
                            </button>
                            <button className="bg-transparent border-2 border-[#C5A572] hover:bg-[#C5A572]/10 text-white px-8 py-5 rounded-full font-bold transition-all flex items-center justify-center gap-3 text-lg flex-1">
                                <Phone className="text-[#C5A572]" />03-1234-5678
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
