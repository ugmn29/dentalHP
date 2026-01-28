"use client";

import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CheckCircle2, ArrowRight, Calendar, Phone, Plus, Minus, ChevronRight } from 'lucide-react';
import Image from "next/image";

export default function GeneralPreventivePage() {
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

    const heroImages = [
        { src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000", alt: "予防歯科1" },
        { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2000", alt: "予防歯科2" },
        { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000", alt: "予防歯科3" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    const menu = [
        { title: "クリーニング（スケーリング）", desc: "歯垢（プラーク）や歯石、着色（ステイン）を除去します。歯周病治療の基本とも言える処置です。", image: "https://placehold.co/400x300/png?text=Scaling" },
        { title: "PMTC", desc: "Professional Mechanical Tooth Cleaningの略。専用機器で歯面を清掃・研磨し、バイオフィルムを除去します。", image: "https://placehold.co/400x300/png?text=PMTC" }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-[#4A4A4A]">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative w-full overflow-hidden bg-white">
                    <div className="relative w-full" style={{ height: '50vh' }}>
                        {heroImages.map((image, index) => (
                            <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentHeroSlide ? 'opacity-100' : 'opacity-0'}`}>
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
                                            <span className="inline-block text-[#2d2d2d]">守る、</span>
                                            <span className="inline-block bg-gradient-to-br from-[#D4AF37] via-[#F4E3B2] to-[#C5A028] bg-clip-text text-transparent drop-shadow-lg" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                                <span className="text-[120%]">健康な歯</span><span className="text-[85%]">を</span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/10 via-[#F4E3B2]/20 to-[#D4AF37]/10 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
                                </div>
                                <span className="block text-[5.5vw] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#5A4D41] mt-1 md:mt-4 mb-0 pb-0 leading-none font-semibold font-serif">
                                    一生涯のための予防歯科
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
                        <p className="text-[#C5A572] tracking-[0.4em] font-medium mb-6 text-xs md:text-sm uppercase font-serif">PREVENTIVE DENTISTRY</p>
                        <h2 className="text-2xl md:text-3xl font-medium text-[#5A4D41] font-serif leading-loose tracking-widest">
                            「痛くなったら行く」から<br />「健康を守るために行く」へ
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
                                { title: "Case.01", desc: "定期検診で初期虫歯を発見し、早期に対処できました。", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" },
                                { title: "Case.02", desc: "PMTC後、歯の表面がツルツルになり着色も除去されました。", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" },
                                { title: "Case.03", desc: "歯周病の予防ケアで、歯茎の健康を維持しています。", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" }
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
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5A4D41] font-serif">
                                当院<span className="text-[0.75em]">の</span><span className="text-[#C5A572]">特徴</span>
                            </h2>
                        </div>

                        <div className="space-y-12 max-w-5xl mx-auto">
                            {[
                                {
                                    id: "01",
                                    title: "Visual Education",
                                    highlight: "目で見てわかる予防教育",
                                    summary: "虫歯や歯周病のメカニズムを、<span class='font-bold bg-yellow-100'>アニメーション</span>を用いてわかりやすく説明。<span class='text-[#395b45] font-bold'>「なぜ予防が大切なのか」を視覚的に理解できる</span>ため、モチベーション維持につながります。",
                                    details: [
                                        "<span class='font-bold bg-yellow-100'>口腔内カメラの映像とアニメーション</span>で、ご自身の口の中の状態を確認",
                                        "<span class='text-[#395b45] font-bold'>磨き残しや歯周ポケットの深さなど、数値とビジュアルで説明</span>"
                                    ],
                                    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "02",
                                    title: "Personalized Care Products",
                                    highlight: "一人ひとりに最適な予防グッズ",
                                    summary: "虫歯リスクが高い方、歯周病が気になる方、知覚過敏の方など、お口の状態は人それぞれ。患者様に合わせた<span class='font-bold bg-yellow-100'>歯磨き粉や歯ブラシをプロが選定</span>してご提案します。",
                                    details: [
                                        "<span class='text-[#395b45] font-bold'>虫歯予防・歯周病予防・知覚過敏対策など、目的別の歯磨き粉をご提案</span>",
                                        "<span class='text-[#395b45] font-bold'>歯ブラシの硬さや形状も、歯並びや磨き方に合わせて選定</span>"
                                    ],
                                    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "03",
                                    title: "Take-home Materials",
                                    highlight: "わかりやすい資料の提供",
                                    summary: "診療中に説明した内容を、<span class='font-bold bg-yellow-100'>ご自宅でも見返せるオリジナル資料</span>としてお渡し。<span class='text-[#395b45] font-bold'>正しいブラッシング方法やフロスの使い方など、いつでも確認できます</span>。",
                                    details: [
                                        "<span class='font-bold bg-yellow-100'>当院独自作成の予防ケア資料を無料配布</span>",
                                        "<span class='text-[#395b45] font-bold'>イラスト付きで分かりやすく、ご家族での共有も可能</span>"
                                    ],
                                    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "04",
                                    title: "Data-Driven Prevention",
                                    highlight: "記録と比較で効果を実感",
                                    summary: "<span class='font-bold bg-yellow-100'>口腔内写真やレントゲンを定期的に記録</span>し、過去のデータと比較。<span class='text-[#395b45] font-bold'>虫歯リスクや歯周病の進行度を数値・グラフで可視化</span>することで、予防効果を実感できます。",
                                    details: [
                                        "<span class='font-bold bg-yellow-100'>口腔内写真を経年で記録・比較</span>し、変化を確認",
                                        "<span class='text-[#395b45] font-bold'>歯周ポケットの深さや出血の有無などをグラフ化して説明</span>"
                                    ],
                                    image: "https://images.unsplash.com/photo-1584036561566-b93a945c3cbc?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "05",
                                    title: "Reminder System",
                                    highlight: "予防を習慣化するサポート",
                                    summary: "「気づいたら1年以上歯医者に行ってない」を防ぐため、<span class='font-bold bg-yellow-100'>検診時期をLINEやメールでお知らせ</span>。<span class='text-[#395b45] font-bold'>患者様ごとに最適な間隔を設定し、予防を習慣化</span>します。",
                                    details: [
                                        "<span class='font-bold bg-yellow-100'>3ヶ月・6ヶ月など、お口の状態に合わせた検診間隔を設定</span>",
                                        "<span class='text-[#395b45] font-bold'>LINEやメールで検診時期を自動リマインド</span>"
                                    ],
                                    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800"
                                }
                            ].map((feature, index) => (
                                <div key={feature.id} className="flex flex-col group">
                                    <div className="relative h-24 flex items-center mb-0">
                                        <span className={`absolute top-[20%] -translate-y-1/2 block text-[8rem] md:text-[11rem] leading-[0.8] font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#C5A572] via-[#E5C592] to-transparent select-none opacity-60 scale-x-[0.85] tracking-tighter ${index % 2 === 0 ? 'left-[-1rem] origin-left' : 'right-0 origin-right'}`}>
                                            {feature.id}
                                        </span>
                                        <div className="relative z-10 w-full text-left pl-4">
                                            <h3 className="text-3xl md:text-4xl font-bold text-[#5A4D41] leading-tight tracking-wide font-serif inline-block relative">
                                                {feature.id === "01" ? (
                                                    <>目<span className="text-[0.75em]">で</span>見<span className="text-[0.75em]">てわかる</span>予防教育</>
                                                ) : feature.id === "02" ? (
                                                    <>一人<span className="text-[0.75em]">ひとりに</span>最適<span className="text-[0.75em]">な</span>予防<span className="text-[0.75em]">グッズ</span></>
                                                ) : feature.id === "03" ? (
                                                    <>わかりやすい資料<span className="text-[0.75em]">の</span>提供</>
                                                ) : feature.id === "04" ? (
                                                    <>記録<span className="text-[0.75em]">と</span>比較<span className="text-[0.75em]">で</span>効果<span className="text-[0.75em]">を</span>実感</>
                                                ) : feature.id === "05" ? (
                                                    <>予防<span className="text-[0.75em]">を</span>習慣化<span className="text-[0.75em]">する</span><span className="tracking-tight">サポート</span></>
                                                ) : (
                                                    feature.highlight
                                                )}
                                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5A572] via-[#C5A572] to-transparent"></div>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="w-full mb-8 relative">
                                        <div className="relative rounded-[30px] overflow-hidden shadow-lg border-2 border-white">
                                            <img src={feature.image} alt={feature.highlight} className="w-full h-auto aspect-[2/1] object-cover" />
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
                                一生涯、<br className="md:hidden" />自分の歯で過ごすために
                            </h2>
                            <p className="text-lg leading-loose text-[#8D8070] max-w-3xl mx-auto">
                                予防歯科とは、虫歯などになってからの治療ではなく、<br />
                                少しでも治療にならないで済むように予防を大切にすることです。
                            </p>
                        </div>

                        {/* 予防歯科とは */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">予防歯科とは</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    予防歯科とは、虫歯や歯周病になる前に、<span className="font-bold bg-yellow-100">定期的なプロフェッショナルケアと毎日のセルフケア</span>で
                                    お口の健康を守る取り組みです。
                                </p>
                                <p>
                                    <span className="text-[#2E8B57] font-bold">治療で削った歯は元には戻りません</span>。
                                    トラブルを未然に防ぐことが、歯を長く残す秘訣です。
                                    80歳になっても自分の歯で食事ができる「8020運動」の実現を目指しましょう。
                                </p>
                            </div>
                        </div>

                        {/* 予防歯科メニュー */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">予防歯科メニュー</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">スケーリング（歯石除去）</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        <span className="font-bold bg-yellow-100">専用の器具を使って、歯ブラシでは取れない硬い歯石を除去</span>します。
                                        <span className="text-[#2E8B57] font-bold">歯石は細菌の温床となる</span>ため、定期的な除去が必要です。
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">PMTC（専門的クリーニング）</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        Professional Mechanical Tooth Cleaningの略。
                                        <span className="font-bold bg-yellow-100">専用の機器と研磨剤で、歯の表面のバイオフィルム（細菌の膜）や着色汚れを徹底的に除去</span>し、
                                        <span className="text-[#2E8B57] font-bold">ツルツルに磨き上げます</span>。
                                    </p>
                                    <div className="text-right">
                                        <a
                                            href="/preventive/cleaning"
                                            className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium text-sm"
                                        >
                                            詳しく見る <ArrowRight size={14} />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">フッ素コーティング</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        きれいになった歯に<span className="font-bold bg-yellow-100">高濃度のフッ素を塗布</span>します。
                                        <span className="text-[#2E8B57] font-bold">歯質を強化し、虫歯菌の活動を抑制</span>することで、虫歯になりにくい歯を作ります。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 定期検診 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">定期検診</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    定期検診では、<span className="font-bold bg-yellow-100">虫歯や歯周病の早期発見・早期治療</span>を目的に、
                                    歯や歯茎の状態を詳しくチェックします。
                                    <span className="text-[#2E8B57] font-bold">痛みが出る前に発見できれば、治療も最小限で済みます</span>。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/preventive/checkup"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    定期検診について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* クリーニング・PMTC */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">クリーニング・PMTC</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    <span className="font-bold bg-yellow-100">歯科衛生士による専門的なクリーニング</span>で、
                                    普段の歯磨きでは落としきれないバイオフィルムや着色を除去します。
                                    <span className="text-[#2E8B57] font-bold">定期的なクリーニングで、虫歯や歯周病のリスクを大幅に軽減</span>できます。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/preventive/cleaning"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    クリーニング・PMTCについて詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* フッ素塗布 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">フッ素塗布</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    <span className="font-bold bg-yellow-100">高濃度のフッ素を歯に塗布することで、歯質を強化</span>し、
                                    虫歯菌の活動を抑制します。
                                    <span className="text-[#2E8B57] font-bold">子どもから大人まで、すべての年代に効果的</span>な予防法です。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/preventive/fluoride"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    フッ素塗布について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 予防歯科の費用 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">予防歯科の費用</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    基本的な予防処置(定期検診、スケーリング、フッ素塗布など)は<span className="font-bold bg-yellow-100">保険適用</span>となります。
                                    PMTCは自費診療となる場合がありますが、<span className="text-[#2E8B57] font-bold">長期的には治療費の削減につながります</span>。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/preventive/cost"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    費用について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 治療の流れ */}
                        <div className="mb-8 bg-white rounded-2xl shadow-lg p-6 md:p-10">
                            <div className="text-center mb-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">予防歯科の流れ</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-12">
                                {[
                                    { num: "01", title: "お口のチェック・染め出し", desc: "歯周ポケットの検査や、染め出し液を使って磨き残しのチェックを行います。ご自身の歯磨きの癖を知ることが予防の第一歩です。", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" },
                                    { num: "02", title: "スケーリング（歯石除去）", desc: "専用の器具（スケーラー）を使って、歯ブラシでは取れない硬い歯石を除去します。", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" },
                                    { num: "03", title: "PMTC（専門的クリーニング）", desc: "専用の機器と研磨剤を使って、歯の表面のバイオフィルムや着色汚れを徹底的に落とし、ツルツルに磨き上げます。", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" },
                                    { num: "04", title: "フッ素コーティング", desc: "きれいになった歯に高濃度のフッ素を塗布します。歯質を強化し、虫歯になりにくい歯を作ります。", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" }
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

                {/* FAQ */}
                <section className="pt-8 pb-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-16">
                            <p className="text-[#C5A572] tracking-[0.2em] font-bold mb-2">Q&A</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">よくあるご質問</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                { q: "予防歯科はどれくらいの頻度で通えばいいですか？", a: "一般的には3〜6ヶ月に1回が目安ですが、お口の状態に合わせて最適な間隔をご提案します。" },
                                { q: "クリーニングは痛くないですか？", a: "基本的に痛みはほとんどありません。ただし、歯茎に炎症がある場合は少し出血することがあります。" },
                                { q: "予防歯科は保険が使えますか？", a: "スケーリング（歯石除去）は保険適用となります。PMTCは自費となる場合があります。" }
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

                {/* CTA */}
                <section className="py-2 bg-[#5A4D41] text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">まずは一度、<br className="md:hidden" />お気軽にご相談ください</h2>
                        <p className="text-[#F0EAE0] mb-12">定期的なケアで、一生涯ご自身の歯で過ごせるようサポートいたします。</p>
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
            </main>

            <Footer />
        </div>
    );
}
