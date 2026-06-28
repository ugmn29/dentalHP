"use client";

import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AuthorBio } from '../../components/AuthorBio';
import { CheckCircle2, ArrowRight, Calendar, ChevronRight } from 'lucide-react';
import Image from "next/image";
import { PageImage } from '@/components/PageImage';
import { FeatureSection } from '@/components/FeatureSection';
import { FaqSection } from '@/components/FaqSection';
import { WEB_RESERVATION_URL } from '@/lib/reservation';

export default function PeriodontalPage() {
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

    const heroImages = [
        { imageId: "hero-slide1", alt: "豊洲の歯科 歯周病治療" },
        { imageId: "hero-slide2", alt: "豊洲の歯医者 歯周病の精密検査" },
        { imageId: "hero-slide3", alt: "豊洲 歯周病予防・メンテナンス" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    const cases = [
        { title: "50代男性・歯周組織再生療法", desc: "歯茎の腫れと歯のぐらつきが気になり来院されました。", beforeId: "case1-before", afterId: "case1-after", tags: ["エムドゲイン", "6ヶ月"], price: "要相談" },
        { title: "40代女性・スケーリング+定期管理", desc: "歯磨き時の出血が続き、歯周病の診断を受けました。", beforeId: "case2-before", afterId: "case2-after", tags: ["基本治療", "3ヶ月"], price: "保険適用" },
        { title: "60代男性・フラップ手術", desc: "重度の歯周病で、歯を残すための外科治療を行いました。", beforeId: "case3-before", afterId: "case3-after", tags: ["外科治療", "1年"], price: "要相談" }
    ];


    return (
        <div className="min-h-screen bg-white font-sans text-[#4A4A4A] overflow-x-hidden" style={{ wordBreak: 'normal', overflowWrap: 'anywhere' }}>
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative w-full overflow-hidden bg-white">
                    <div className="relative w-full" style={{ height: '50vh' }}>
                        {heroImages.map((image, index) => (
                            <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentHeroSlide ? 'opacity-100' : 'opacity-0'}`}>
                                <PageImage path="/periodontal" imageId={image.imageId} alt={image.alt} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                        ))}
                        <div className="absolute -bottom-8 right-4 md:-bottom-10 md:right-8 z-20 animate-bounce-slow">
                            <a href={WEB_RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-3 bg-gradient-to-r from-[#9B89B3] to-[#8B7AA3] hover:from-[#AB99C3] hover:to-[#9B89B3] text-white px-6 py-4 md:px-8 md:py-5 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(155,137,179,0.6)] transition-all duration-300 transform hover:scale-105">
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
                                            <span className="inline-block text-[#2d2d2d]">守る、</span>
                                            <span className="inline-block bg-gradient-to-br from-[#D4AF37] via-[#F4E3B2] to-[#C5A028] bg-clip-text text-transparent drop-shadow-lg transform hover:scale-105 transition-all duration-300" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                                <span className="text-[120%]">大切な歯</span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/10 via-[#F4E3B2]/20 to-[#D4AF37]/10 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
                                    <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent rounded-2xl -z-10"></div>
                                </div>
                                <span className="block text-[5.5vw] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#5A4D41] mt-1 md:mt-4 mb-0 pb-0 leading-none font-semibold font-serif">
                                    科学的根拠に基づいた歯周病治療
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
                        <p className="text-[#C5A572] tracking-[0.4em] font-medium mb-6 text-xs md:text-sm uppercase font-serif">PERIODONTAL</p>
                        <h2 className="text-2xl md:text-3xl font-medium text-[#5A4D41] font-serif leading-loose tracking-widest">
                            沈黙の病気と呼ばれる歯周病<br />早期発見・早期治療が重要です
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
                            {cases.map((c, index) => (
                                <div key={index} className="group cursor-pointer">
                                    <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg">
                                        <PageImage
                                            path="/periodontal"
                                            imageId={`case${index + 1}`}
                                            alt={c.title}
                                            className="w-full aspect-[3/2] object-contain bg-[#F7F2EA] transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full">
                                            <span className="text-[#C5A572] font-serif font-bold">Case.{String(index + 1).padStart(2, '0')}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                                        {c.title}
                                    </h3>
                                    <p className="text-[#8D8070] text-sm leading-relaxed">
                                        {c.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Web予約バナー */}
                        <div className="mt-12">
                            <a href={WEB_RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="block">
                                <img src="/images/web-reservation-banner.webp" alt="Web予約" loading="lazy" decoding="async" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                            </a>
                        </div>
                    </div>
                </section>

                <FeatureSection
                    title="当院の特徴"
                    pagePath="/periodontal"
                    features={[
                        { id: "01", title: "Visual Explanation", highlight: "口腔内カメラでよりわかりやすく", summary: "お口の状態をモニターで見ながら、歯周病の進行や磨き残しをわかりやすく説明します。", details: [], imageId: "feature1" },
                        { id: "02", title: "Plaque Visualization", highlight: "染め出しでより見やすく", summary: "染め出し液で磨き残しを可視化し、効果的なブラッシング改善につなげます。", details: [], imageId: "feature2" },
                        { id: "03", title: "Individual Guidance", highlight: "個別のブラッシング指導", summary: "歯科衛生士が一人ひとりのお口に合わせて、磨き方や歯ブラシの選び方を指導します。", details: [], imageId: "feature3" },
                        { id: "04", title: "Lifestyle Approach", highlight: "生活習慣からのアプローチ", summary: "喫煙・ストレス・食生活なども含め、歯周病の根本原因にアプローチします。", details: [], imageId: "食事喫煙ストレスなど歯周病リスク因子のインフォグラフィック" },
                        { id: "05", title: "Reminder System", highlight: "予防を習慣化するサポート", summary: "検診時期をお知らせし、治療後のメンテナンスを継続しやすくします。", details: [], imageId: "リコールはがきやLINE通知のリマインドイメージ" },
                    ]}
                />

                {/* Lead & Information Section */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif">
                                歯を失う原因の第1位は歯周病です
                            </h2>
                            <p className="text-lg leading-loose text-[#8D8070] max-w-3xl mx-auto">
                                歯周病は全身疾患(糖尿病、心疾患、誤嚥性肺炎など)とも深く関係しています。<br />
                                「歯磨きで血が出る」「口臭が気になる」などの症状があれば、放置せずに早めにご相談ください。
                            </p>
                        </div>

                        {/* 歯周病とは */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">歯周病とは</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    歯周病とは、<span className="font-bold bg-yellow-100">歯と歯茎の間にたまったプラーク(歯垢)の中の細菌が原因</span>で、歯茎が炎症を起こし、
                                    進行すると歯を支える骨が溶けてしまう病気です。
                                    成人の8割が罹患していると言われ、自覚症状が少ないまま進行するため「沈黙の病気」とも呼ばれています。
                                </p>
                            </div>
                        </div>

                        {/* 歯周病の進行段階 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">歯周病の進行段階</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    歯周病は軽度(歯肉炎)、中等度(歯周炎)、重度(重度歯周炎)の3つの段階で進行します。
                                    軽度では歯磨き時の出血程度ですが、<span className="font-bold bg-yellow-100">放置すると歯を支える骨が溶けて最終的に歯が抜け落ちてしまいます</span>。
                                    <span className="text-[#2E8B57] font-bold">早期発見・早期治療が非常に重要</span>です。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/periodontal/stages"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    進行段階について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 治療方法 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">治療方法</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    当院では、<span className="font-bold bg-yellow-100">基本治療(スケーリング、ルートプレーニング)から外科治療、再生療法</span>まで幅広く対応しています。
                                    検査・診断から始まり、患者様の状態に合わせた最適な治療計画を立案します。
                                    <span className="text-[#2E8B57] font-bold">治療後の定期メンテナンスで再発を防ぎます</span>。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/periodontal/treatment-methods"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    治療方法について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 予防・ケア */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">予防・ケア</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    歯周病は<span className="font-bold bg-yellow-100">予防できる病気</span>です。
                                    毎日の正しいブラッシングと歯間ブラシ・フロスの使用、そして<span className="text-[#2E8B57] font-bold">3〜6ヶ月ごとの定期検診とプロフェッショナルクリーニング</span>で、
                                    歯周病の発症や進行を防ぐことができます。予防こそが最善の治療です。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/periodontal/prevention"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    予防・ケアについて詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 費用 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">費用について</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    基本的な歯周病治療(検査、歯石除去、ブラッシング指導など)は<span className="font-bold bg-yellow-100">保険適用</span>となります。
                                    進行度によっては外科治療や再生療法(エムドゲインなど)が必要となり、その場合は自費診療となります。
                                    <span className="text-[#2E8B57] font-bold">詳しい料金や支払い方法については、診察時に丁寧にご説明</span>いたします。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/periodontal/cost"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    費用について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Risks */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100">
                            <h3 className="text-lg font-bold text-[#5A4D41] mb-6 text-center">リスク・副作用について</h3>
                            <ul className="space-y-3 mb-6">
                                {["歯石除去後、一時的に知覚過敏が起こることがあります。", "外科治療の場合、術後に腫れや痛みが出ることがあります。", "再生療法は保険適用外となり、費用がかかります。"].map((item, i) => (
                                    <li key={i} className="text-sm text-[#8D8070] flex items-start gap-2">
                                        <span className="text-[#C5A572] mt-1">●</span>{item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-gray-400 text-center">
                                ※効果には個人差があります。治療前にカウンセリングを行い、最適な治療計画をご提案いたします。
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <FaqSection
                  title="よくある質問"
                  items={[
                                    { q: "歯周病は治りますか?", a: "早期(歯肉炎)であれば完治します。進行した場合は、症状を改善し進行を止めることが目標となります。定期的なメンテナンスが重要です。" },
                                    { q: "痛みがなくても歯周病の可能性はありますか?", a: "はい、歯周病は初期段階では痛みがほとんどありません。「沈黙の病気」と呼ばれるため、定期検診での早期発見が大切です。" },
                                    { q: "治療は何回くらい通う必要がありますか?", a: "軽度なら2〜3回の通院で改善することもありますが、進行度により異なります。検査後に治療計画をご説明いたします。" },
                                    { q: "歯周病は全身疾患と関係がありますか?", a: "はい、糖尿病、心疾患、誤嚥性肺炎などとの関連が報告されています。お口の健康は全身の健康につながります。" }
                                ]}
                />


                {/* 監修者情報 */}
                <div className="container mx-auto px-4 pt-2 pb-16">
                    <AuthorBio />
                </div>
            </main>

            <Footer />
        </div>
    );
}
