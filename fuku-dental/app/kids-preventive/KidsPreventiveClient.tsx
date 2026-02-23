"use client";

import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AuthorBio } from '../../components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import { CheckCircle2, ArrowRight, Calendar, Phone, ChevronRight } from 'lucide-react';

export default function KidsPreventivePage() {
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

    // Hero slider images
    const heroImages = [
        { imageId: "hero-slide1", alt: "優しい診療" },
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
                                    path="/kids-preventive"
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
                                                乳歯から始める、
                                            </span>
                                            <span className="inline-block bg-gradient-to-br from-[#395b45] via-[#4a6c56] to-[#2d4835] bg-clip-text text-transparent drop-shadow-lg transform hover:scale-105 transition-all duration-300"
                                                  style={{
                                                      WebkitBackgroundClip: 'text',
                                                      WebkitTextFillColor: 'transparent'
                                                  }}>
                                                <span className="text-[120%]">一生もの</span><span className="text-[85%]">の健康</span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#395b45]/10 via-[#c8ddd0]/20 to-[#395b45]/10 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
                                    <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-[#395b45]/5 to-transparent rounded-2xl -z-10"></div>
                                </div>
                                <span className="block text-[5.5vw] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#5A4D41] mt-1 md:mt-4 mb-0 pb-0 leading-none font-semibold font-serif">
                                    こども歯科・予防
                                </span>
                                <span className="block text-sm md:text-base text-[#8D8070] mt-3 md:mt-5 font-normal tracking-normal">
                                    豊洲駅徒歩2分・F歯科のこども専門予防歯科
                                </span>
                            </h1>
                            <PageImage path="/kids-preventive" alt="こども歯科・予防" />
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
                            FEATURES OF PEDIATRIC DENTISTRY
                        </p>
                        <h2 className="text-2xl md:text-3xl font-medium text-[#5A4D41] font-serif leading-loose tracking-widest">
                            F歯科・矯正歯科 豊洲プライムスクエア院のこども歯科は<br />
                            治療より予防を重視します
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
                                    title: "Gentle Care",
                                    highlight: "痛くない・怖くない治療",
                                    summary: "お子様のペースに合わせ、<span class='text-[#395b45] font-bold'>無理のない治療</span>を行います。まずは<span class='font-bold bg-yellow-100'>診療台に座る練習からスタート（トレーニング）</span>し、<span class='font-bold bg-yellow-100'>表面麻酔</span>などで<span class='text-[#395b45] font-bold'>痛みを最小限に抑える</span>配慮をしています。「歯医者さんは楽しい場所」と思ってもらえる雰囲気づくりを大切にしています。",
                                    details: [],
                                    imageId: "feature1"
                                },
                                {
                                    id: "02",
                                    title: "Prevention First",
                                    highlight: "フッ素・シーラントで予防",
                                    summary: "虫歯になる前の「予防」を重視し、<span class='text-[#395b45] font-bold'>強い歯を育てます</span>。<span class='font-bold bg-yellow-100'>高濃度フッ素塗布</span>で歯質を強化し、<span class='font-bold bg-yellow-100'>奥歯の溝を埋めるシーラント</span>で虫歯をブロックします。<span class='text-[#395b45] font-bold'>定期的なチェックで早期発見・早期対応</span>を実現しています。",
                                    details: [],
                                    imageId: "feature2"
                                },
                                {
                                    id: "03",
                                    title: "Training",
                                    highlight: "ステップアップ方式",
                                    summary: "お子様の成長に合わせて、<span class='text-[#395b45] font-bold'>できることを少しずつ増やしていきます</span>。<span class='font-bold bg-yellow-100'>器具に触れる、お口を開けるなどのスモールステップ</span>で進め、できたことをたくさん褒めて<span class='text-[#395b45] font-bold'>自信を育みます</span>。泣いてしまっても大丈夫、根気強くサポートします。",
                                    details: [],
                                    imageId: "feature3"
                                },
                                {
                                    id: "04",
                                    title: "Parent Partnership",
                                    highlight: "親子で学ぶ歯の健康",
                                    summary: "ご家庭でのケア方法や生活習慣についてもアドバイスします。<span class='font-bold bg-yellow-100'>年齢に合わせた仕上げ磨きのコツ</span>を伝授し、<span class='font-bold bg-yellow-100'>虫歯になりにくいおやつの選び方</span>を指導します。親御様のお悩みや疑問にも<span class='text-[#395b45] font-bold'>丁寧にお答えします</span>。",
                                    details: [],
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
                                                path="/kids-preventive"
                                                imageId={feature.imageId}
                                                alt={feature.highlight}
                                                className="w-full h-auto aspect-[16/9] object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#C5A572]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        </div>
                                    </div>

                                    {/* Text Area - Always Left Aligned */}
                                    <div>
                                        <p className="text-base md:text-lg text-[#5A4D41] leading-loose font-sans" dangerouslySetInnerHTML={{ __html: feature.summary }}>
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
                                お子様の未来を守る、<br className="md:hidden" />予防歯科
                            </h2>
                            <p className="text-lg leading-loose text-[#8D8070] max-w-3xl mx-auto mb-12">
                                「乳歯はどうせ抜けるから虫歯になっても大丈夫」と思っていませんか？<br />
                                それは大きな間違いです。
                            </p>
                        </div>

                        {/* こども歯科とは？ */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">こども歯科とは？</h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    乳歯の虫歯は、<span className="font-bold bg-yellow-100">その下に控えている永久歯の質や歯並びに大きな悪影響</span>を与えます。
                                    また、乳歯が早期に失われると、永久歯が生えるスペースが不足し、歯並びが悪くなる原因にもなります。
                                </p>
                                <p>
                                    当院のこども歯科では、<span className="text-[#395b45] font-bold">「治療」よりも「予防」を重視</span>しています。
                                    フッ素塗布やシーラント、正しい歯磨き指導を通じて、お子様が虫歯ゼロで成長できるようサポートします。
                                </p>
                                <p>
                                    「歯医者さんは怖いところ」ではなく<span className="font-bold bg-yellow-100">「楽しいところ」</span>と思ってもらえるよう、
                                    お子様のペースに合わせた優しい診療を心がけています。
                                </p>
                            </div>
                        </div>

                        {/* 仕上げ磨きガイド */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">仕上げ磨きガイド</h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    「仕上げ磨きはいつまで必要？」「嫌がって磨かせてくれない」<br />
                                    そんなお悩みを持つ親御様は少なくありません。
                                </p>
                                <p>
                                    仕上げ磨きは、<span className="font-bold bg-yellow-100">小学校低学年（8〜9歳頃）までは必要</span>です。
                                    お子様自身では磨き残しが多く、特に<span className="text-[#395b45] font-bold">奥歯の溝や歯と歯の間は虫歯になりやすい</span>ため、親御様のサポートが欠かせません。
                                </p>
                                <p>
                                    年齢別の正しい磨き方、嫌がる子への対処法、おすすめの歯ブラシなど、詳しくは専用ページをご覧ください。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/kids-preventive/brushing"
                                    className="inline-flex items-center gap-2 text-[#395b45] hover:text-[#2d4835] transition-colors border-b border-[#395b45] pb-1 font-medium"
                                >
                                    仕上げ磨きについて詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 子供の歯医者嫌い克服法 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">子供の歯医者嫌い克服法</h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    「泣いて暴れて治療ができない」「歯医者に行くだけで嫌がる」<br />
                                    多くの親御様が抱えるこのお悩み、実は<span className="font-bold bg-yellow-100">正しいアプローチで克服できます</span>。
                                </p>
                                <p>
                                    歯医者嫌いの原因は、<span className="text-[#395b45] font-bold">「怖い」「痛い」という過去の経験や不安</span>にあります。
                                    当院では、お子様の恐怖心を減らすために、まずは「歯医者さんに慣れる」ことから始めます。
                                </p>
                                <p>
                                    診療台に座る練習、器具に触れてみる、お口を開ける練習など、<span className="text-[#395b45] font-bold">スモールステップで段階的にトレーニング</span>を行います。
                                    できたことはたくさん褒めて、「歯医者は楽しい場所」という記憶を作ります。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/kids-preventive/overcoming-fear"
                                    className="inline-flex items-center gap-2 text-[#395b45] hover:text-[#2d4835] transition-colors border-b border-[#395b45] pb-1 font-medium"
                                >
                                    歯医者嫌い克服法について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* フッ素塗布 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">フッ素塗布</h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    フッ素塗布は、<span className="font-bold bg-yellow-100">歯を強くして虫歯を予防する最も効果的な方法</span>の一つです。
                                    歯の表面にフッ素を塗ることで、歯質が強化され、酸に溶けにくい丈夫な歯になります。
                                </p>
                                <p>
                                    <span className="text-[#395b45] font-bold">生後6ヶ月頃（歯が生え始めたら）から開始</span>できます。
                                    定期的に塗布することで、虫歯予防効果が持続し、お子様の歯を守り続けます。
                                </p>
                                <p>
                                    「フッ素は体に害がないの？」「どのくらいの頻度で塗ればいい？」など、
                                    フッ素塗布の効果、安全性、適切な頻度について、詳しくは専用ページをご覧ください。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/kids-preventive/fluoride"
                                    className="inline-flex items-center gap-2 text-[#395b45] hover:text-[#2d4835] transition-colors border-b border-[#395b45] pb-1 font-medium"
                                >
                                    フッ素塗布について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 虫歯予防の基本 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">虫歯予防の基本</h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    虫歯予防は、<span className="font-bold bg-yellow-100">歯磨き・フッ素・食生活</span>の3つの柱で成り立ちます。
                                    どれか一つが欠けても、虫歯のリスクは高まってしまいます。
                                </p>
                                <p>
                                    特に重要なのが<span className="text-[#395b45] font-bold">おやつの選び方と食べ方</span>です。
                                    チョコレートやキャンディーなど、砂糖を多く含むおやつは虫歯の原因になります。
                                    だらだら食べは避け、おやつの後はお茶や水を飲む習慣をつけましょう。
                                </p>
                                <p>
                                    虫歯になりにくいおやつの選び方、食事の与え方、生活習慣のアドバイスなど、
                                    当院では親御様と一緒にお子様の歯を守る方法を考えます。
                                </p>
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
                                        title: "トレーニング（練習）",
                                        desc: "初めてのお子様や怖がりなお子様は、まずは歯医者さんの雰囲気に慣れることから始めます。",
                                        imageId: "step1"
                                    },
                                    {
                                        num: "02",
                                        title: "お口のチェック",
                                        desc: "虫歯の有無、歯茎の状態、生え変わりの状況などを確認します。",
                                        imageId: "step2"
                                    },
                                    {
                                        num: "03",
                                        title: "クリーニング・予防処置",
                                        desc: "専用のブラシで歯をきれいにし、フッ素塗布やシーラントを行います。",
                                        imageId: "step3"
                                    },
                                    {
                                        num: "04",
                                        title: "ブラッシング指導",
                                        desc: "染め出し液を使って磨き残しをチェックし、正しい磨き方を練習します。",
                                        imageId: "step4"
                                    },
                                    {
                                        num: "05",
                                        title: "ご褒美",
                                        desc: "頑張ったお子様には、最後にガチャガチャなどのご褒美があります！",
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
                                                path="/kids-preventive"
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
                                    "フッ素は適量であれば安全ですが、大量に飲み込むと中毒症状が出る可能性があります（歯科医院での塗布は安全な量で行います）。",
                                    "シーラントは噛み合わせによって外れることがあります（定期検診でチェックします）。"
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
                                    q: "何歳から通えばいいですか？",
                                    a: "歯が生え始めたら（生後6ヶ月頃〜）通院可能です。早い段階からフッ素塗布などの予防管理を始めることで、虫歯ゼロのお口を目指せます。"
                                },
                                {
                                    q: "泣いてしまって治療ができなくても大丈夫ですか？",
                                    a: "もちろん大丈夫です。泣いてしまうのは当たり前の反応です。当院のスタッフは子供の扱いに慣れていますので、何度でも根気強く練習します。決して叱ったりしませんのでご安心ください。"
                                },
                                {
                                    q: "フッ素は体に害はありませんか？",
                                    a: "歯科医院で使用するフッ素は安全な濃度に調整されており、用法用量を守れば体に害はありません。むしろ歯を強くする必須のミネラルです。"
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
                            お子様一人ひとりに合わせた最適な予防プランをご提案いたします。
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
