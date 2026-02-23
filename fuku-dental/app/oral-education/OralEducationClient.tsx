"use client";

import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AuthorBio } from '../../components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import { CheckCircle2, ArrowRight, Calendar, Phone, ChevronRight } from 'lucide-react';

export default function OralEducationPage() {
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

    // Hero slider images
    const heroImages = [
        { imageId: "hero-slide1", alt: "赤ちゃんと母親" },
        { imageId: "hero-slide2", alt: "楽しそうな子供" },
        { imageId: "hero-slide3", alt: "親子でのカウンセリング" },
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
                                    path="/oral-education"
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
                                className="group relative flex items-center gap-3 bg-gradient-to-r from-[#395b45] to-[#2d4835] hover:from-[#4a6c56] hover:to-[#395b45] text-white px-6 py-4 md:px-8 md:py-5 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(57,91,69,0.6)] transition-all duration-300 transform hover:scale-105"
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
                                <div className="absolute inset-0 rounded-full bg-[#395b45] opacity-0 group-hover:opacity-20 group-hover:scale-110 transition-all duration-300"></div>
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
                                                0歳から始める、
                                            </span>
                                            <span className="inline-block bg-gradient-to-br from-[#395b45] via-[#4a6c56] to-[#2d4835] bg-clip-text text-transparent drop-shadow-lg transform hover:scale-105 transition-all duration-300"
                                                  style={{
                                                      WebkitBackgroundClip: 'text',
                                                      WebkitTextFillColor: 'transparent'
                                                  }}>
                                                <span className="text-[120%]">一生もの</span><span className="text-[85%]">の歯並び</span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#395b45]/10 via-[#c8ddd0]/20 to-[#395b45]/10 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
                                    <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-[#395b45]/5 to-transparent rounded-2xl -z-10"></div>
                                </div>
                                <span className="block text-[5.5vw] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#5A4D41] mt-1 md:mt-4 mb-0 pb-0 leading-none font-semibold font-serif">
                                    ０歳からの口育
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
                            FEATURES OF ORAL EDUCATION
                        </p>
                        <h2 className="text-2xl md:text-3xl font-medium text-[#5A4D41] font-serif leading-loose tracking-widest">
                            F歯科・矯正歯科 豊洲プライムスクエア院の口育は<br />
                            歯並びの根本原因にアプローチします
                        </h2>
                    </div>
                </section>

                {/* Features (CHARM) Section - Refined Zig-Zag */}
                <section className="pt-8 pb-8 bg-white overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <span className="text-[#C5A572] font-bold tracking-[0.2em] text-sm block mb-2">FEATURES</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif">
                                当院<span className="text-[0.75em]">の</span><span className="text-[#395b45]">特徴</span>
                            </h2>
                        </div>

                        <div className="space-y-12 max-w-5xl mx-auto">
                            {[
                                {
                                    id: "01",
                                    title: "Early Start",
                                    highlight: "0歳からのアプローチ",
                                    summary: "歯が生える前からの関わりで、きれいな歯並びの土台を作ります。",
                                    details: [
                                        "授乳姿勢や抱っこの仕方など、生活習慣からのアドバイス",
                                        "離乳食の与え方や噛む練習の指導",
                                        "指しゃぶりなどの習癖への早期対応"
                                    ],
                                    imageId: "feature1"
                                },
                                {
                                    id: "02",
                                    title: "Fun Training",
                                    highlight: "楽しく学べるトレーニング",
                                    summary: "遊び感覚で続けられる、お口周りの筋肉トレーニングです。",
                                    details: [
                                        "「あいうべ体操」や風船遊びで楽しく筋力アップ",
                                        "専用のトレーニング器具を使った効果的な練習",
                                        "お子様が飽きずに続けられるプログラム"
                                    ],
                                    imageId: "feature2"
                                },
                                {
                                    id: "03",
                                    title: "Myobrace",
                                    highlight: "マイオブレース対応",
                                    summary: "マウスピース型の装置で、歯並びが悪くなる根本原因にアプローチします。",
                                    details: [
                                        "日中1時間と就寝時の装着だけでOK",
                                        "口呼吸から鼻呼吸への改善をサポート",
                                        "正しい舌の位置や飲み込み方を習得"
                                    ],
                                    imageId: "feature3"
                                },
                                {
                                    id: "04",
                                    title: "Parent Support",
                                    highlight: "親子で取り組むサポート",
                                    summary: "ご自宅でのトレーニングも無理なく続けられるよう、親御様をサポートします。",
                                    details: [
                                        "ご家庭での練習方法を丁寧にレクチャー",
                                        "定期的なチェックでモチベーション維持を応援",
                                        "お子様の成長を一緒に見守るパートナーシップ"
                                    ],
                                    imageId: "feature4"
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
                                            <PageImage
                                                path="/oral-education"
                                                imageId={feature.imageId}
                                                alt={feature.highlight}
                                                className="w-full h-auto aspect-[16/9] object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#C5A572]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        </div>
                                    </div>

                                    {/* Text Area - Always Left Aligned */}
                                    <div>
                                        <p className="text-base md:text-lg text-[#5A4D41] leading-relaxed font-serif">
                                            {feature.summary}{feature.details.map((detail, i) => detail).join('')}
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
                                お子様の未来を、<br className="md:hidden" />今から守る
                            </h2>
                            <p className="text-lg leading-loose text-[#8D8070] max-w-3xl mx-auto mb-12">
                                「歯並びが悪くならないか心配」「いつも口が開いている気がする」<br />
                                そんなお悩みはありませんか？
                            </p>
                        </div>

                        {/* 口育とは？ */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">口育とは？</h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    「口育（こういく）」とは、<span className="font-bold bg-yellow-100">0歳から始める「お口育て」</span>のことです。
                                    歯並びや噛み合わせが悪くなる原因の多くは、幼少期の<span className="text-[#395b45] font-bold">「口呼吸」や「飲み込み方の癖」</span>にあります。
                                </p>
                                <p>
                                    当院では、単に虫歯を治すだけでなく、<span className="text-[#395b45] font-bold">正しい呼吸や飲み込みを身につけるトレーニング</span>を通じて、
                                    お子様の健やかな成長と、将来のきれいな歯並びの土台作りをサポートします。
                                </p>
                                <p>
                                    早期に正しい習慣を身につけることで、<span className="font-bold bg-yellow-100">将来的な矯正治療の必要性を減らし、生涯にわたる健康な口腔環境</span>を育むことができます。
                                </p>
                            </div>
                        </div>

                        {/* 子供の口呼吸を治す方法 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">子供の口呼吸を治す方法</h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    口呼吸は、<span className="font-bold bg-yellow-100">歯並び・顔つき・健康に深刻な影響</span>を与える習慣です。
                                    鼻が詰まっている、口周りの筋力が弱い、習慣化しているなどの原因があり、気づかないまま放置してしまうケースも少なくありません。
                                </p>
                                <p>
                                    <span className="text-[#395b45] font-bold">早期発見と適切なトレーニングで、鼻呼吸への改善が可能</span>です。
                                    「あいうべ体操」や口周りの筋力トレーニング（MFT）、マイオブレース装置を使った治療など、お子様の状態に合わせた方法をご提案します。
                                </p>
                                <p>
                                    口呼吸のチェックポイントや具体的な改善方法について、詳しくは専用ページをご覧ください。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/oral-education/mouth-breathing"
                                    className="inline-flex items-center gap-2 text-[#395b45] hover:text-[#2d4835] transition-colors border-b border-[#395b45] pb-1 font-medium"
                                >
                                    口呼吸について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* ポカン口の治し方 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">ポカン口（お口ポカン）の治し方</h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    日本小児歯科学会の調査によると、<span className="font-bold bg-yellow-100">30.7%の子供が「口唇閉鎖不全（ポカン口）」に該当</span>しています。
                                    テレビを見ているとき、本を読んでいるとき、お子様の口が無意識に開いていませんか？
                                </p>
                                <p>
                                    ポカン口は単なる癖ではなく、<span className="text-[#395b45] font-bold">口周りの筋力不足や口呼吸が原因</span>で起こります。
                                    放置すると、出っ歯やガタガタの歯並び、顔が長くなる、風邪をひきやすいなど、さまざまな悪影響が現れます。
                                </p>
                                <p>
                                    当院では、口を閉じる筋力を鍛えるトレーニングや、マイオブレース装置を使った治療で、ポカン口の改善をサポートします。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/oral-education/open-mouth"
                                    className="inline-flex items-center gap-2 text-[#395b45] hover:text-[#2d4835] transition-colors border-b border-[#395b45] pb-1 font-medium"
                                >
                                    ポカン口について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 子供の歯並びが悪くなる原因と予防 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">子供の歯並びが悪くなる原因と予防</h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    「歯並びは遺伝だから仕方ない」と諦めていませんか？
                                    実は、<span className="font-bold bg-yellow-100">歯並びが悪くなる原因の約80%は生活習慣</span>にあります。遺伝の影響は約20%に過ぎません。
                                </p>
                                <p>
                                    口呼吸、指しゃぶり、舌の位置の癖（低位舌）、柔らかい食べ物ばかり食べる、頬杖や横向き寝などの習慣が、
                                    <span className="text-[#395b45] font-bold">歯並びを悪くする5大原因</span>です。
                                </p>
                                <p>
                                    0歳からの正しい授乳姿勢、離乳食の与え方、3歳以降のトレーニングなど、
                                    年齢に応じた予防を行うことで、きれいな歯並びの土台を作ることができます。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/oral-education/bad-alignment"
                                    className="inline-flex items-center gap-2 text-[#395b45] hover:text-[#2d4835] transition-colors border-b border-[#395b45] pb-1 font-medium"
                                >
                                    歯並びが悪くなる原因と予防について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 小児矯正の費用 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">小児矯正の費用</h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    口育や小児矯正の費用は、<span className="font-bold bg-yellow-100">お子様の年齢、症状の程度、選択する治療方法によって異なります</span>。
                                    簡単なトレーニング指導であれば保険診療の範囲内で行えることもありますが、本格的なプログラムや装置を使用する場合は自費診療となります。
                                </p>
                                <p>
                                    <span className="text-[#395b45] font-bold">早期に始めることで、将来的な矯正費用を抑えられる</span>可能性が高まります。
                                    当院では、治療開始前に明確な費用をお伝えし、デンタルローンなどのお支払い方法もご相談いただけます。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/kidsortho/cost"
                                    className="inline-flex items-center gap-2 text-[#395b45] hover:text-[#2d4835] transition-colors border-b border-[#395b45] pb-1 font-medium"
                                >
                                    費用について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* マイオブレース */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">マイオブレース</h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    マイオブレースは、<span className="font-bold bg-yellow-100">マウスピース型の装置とトレーニングを組み合わせた小児矯正システム</span>です。
                                    従来のワイヤー矯正のように「歯を動かす」のではなく、「歯並びが悪くなる根本原因（口呼吸、舌の位置、飲み込み方の癖）」にアプローチします。
                                </p>
                                <p>
                                    <span className="text-[#395b45] font-bold">日中1時間と就寝時の装着だけで、正しい呼吸・舌の位置・飲み込み方を自然に習得</span>できます。
                                    3〜15歳のお子様が対象で、早く始めるほど効果が出やすい治療法です。
                                </p>
                                <p>
                                    マイオブレースの詳しい仕組み、効果、費用、治療の流れについては、専用ページをご覧ください。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/kidsortho/appliances/functional-mouthpiece"
                                    className="inline-flex items-center gap-2 text-[#395b45] hover:text-[#2d4835] transition-colors border-b border-[#395b45] pb-1 font-medium"
                                >
                                    マイオブレースについて詳しく見る <ArrowRight size={16} />
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
                                        title: "相談・カウンセリング",
                                        desc: "お子様のお口の状態や、日頃の様子（食べ方、寝方など）について詳しくお話を伺います。",
                                        imageId: "step1"
                                    },
                                    {
                                        num: "02",
                                        title: "検査・診断",
                                        desc: "お口の写真撮影、レントゲン撮影（必要な場合）、態癖（たいへき）のチェックなどを行い、問題の原因を探ります。",
                                        imageId: "step2"
                                    },
                                    {
                                        num: "03",
                                        title: "トレーニング指導",
                                        desc: "お子様の年齢や状態に合わせたトレーニング方法を指導します。親子で一緒に練習していただきます。",
                                        imageId: "step3"
                                    },
                                    {
                                        num: "04",
                                        title: "定期チェック",
                                        desc: "1ヶ月〜3ヶ月ごとに来院いただき、トレーニングの成果やお口の変化を確認します。",
                                        imageId: "step4"
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
                                                path="/oral-education"
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

                {/* FAQ Section */}
                <section className="pt-8 pb-8 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-8">
                            <p className="text-[#C5A572] tracking-[0.2em] font-bold mb-2">Q&A</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">よくあるご質問</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    q: "何歳から始められますか？",
                                    a: "0歳（妊娠中）からご相談いただけます。実際にトレーニングを始めるのは、言葉の理解が進む3歳頃からが一般的ですが、生活習慣の指導は早ければ早いほど効果的です。"
                                },
                                {
                                    q: "指しゃぶりは無理にやめさせた方がいいですか？",
                                    a: "3歳頃までの指しゃぶりは生理的なものですが、4歳を過ぎても続くと歯並びに悪影響が出ます。無理やりやめさせるのではなく、原因（不安や退屈など）に寄り添いながら、自然に卒業できるようサポートします。"
                                },
                                {
                                    q: "費用はどれくらいかかりますか？",
                                    a: "相談や簡単な指導は保険診療の範囲内で行えることもありますが、本格的なプログラムや装置を使用する場合は自費診療となります。詳しくは料金表をご覧ください。"
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
                <section className="py-2 bg-[#395b45] text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">
                            まずは一度、<br className="md:hidden" />お気軽にご相談ください
                        </h2>
                        <p className="text-white/90 mb-12">
                            お子様一人ひとりに合わせた最適なプログラムをご提案いたします。
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
                            <a href="/kidsortho/cost" className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#E5C592] transition-colors border-b border-[#C5A572] pb-1">
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
