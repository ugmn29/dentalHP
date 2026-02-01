"use client";

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { CheckCircle2, ArrowRight, Calendar, Phone, Plus, Minus, ChevronRight } from 'lucide-react';

export default function MouthpiecePage() {
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

    // Hero slider images
    const heroImages = [
        { src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000", alt: "マウスピース矯正1" },
        { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2000", alt: "マウスピース矯正2" },
        { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000", alt: "マウスピース矯正3" },
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
                                                目立たない、
                                            </span>
                                            <span className="inline-block bg-gradient-to-br from-[#D4AF37] via-[#F4E3B2] to-[#C5A028] bg-clip-text text-transparent drop-shadow-lg transform hover:scale-105 transition-all duration-300"
                                                  style={{
                                                      WebkitBackgroundClip: 'text',
                                                      WebkitTextFillColor: 'transparent'
                                                  }}>
                                                <span className="text-[120%]">美しい歯並び</span><span className="text-[85%]">へ</span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/10 via-[#F4E3B2]/20 to-[#D4AF37]/10 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
                                    <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent rounded-2xl -z-10"></div>
                                </div>
                                <span className="block text-[5.5vw] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#5A4D41] mt-1 md:mt-4 mb-0 pb-0 leading-none font-semibold font-serif">
                                    透明マウスピース矯正
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
                            INVISIBLE ORTHODONTICS
                        </p>
                        <h2 className="text-2xl md:text-3xl font-medium text-[#5A4D41] font-serif leading-loose tracking-widest">
                            周りに気づかれずに<br />
                            理想の歯並びを手に入れる
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
                                    desc: "前歯の軽度な歯並びの乱れを、マウスピース矯正で自然に整えました。",
                                    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    title: "Case.02",
                                    desc: "上下の歯の軽い叢生（ガタガタ）を、約8ヶ月で改善しました。",
                                    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    title: "Case.03",
                                    desc: "すきっ歯の改善と全体的な歯並びの調整を行いました。",
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
                                    title: "Comprehensive Care",
                                    highlight: "総合治療で安心",
                                    summary: "矯正専門医院では虫歯治療ができず、一般歯科では矯正の質が心配。当院なら<span class='font-bold bg-yellow-100'>両方を高いレベルで提供</span>できます。",
                                    details: [
                                        "<span class='text-[#395b45] font-bold'>矯正中の虫歯・歯周病治療も同じ医院で対応</span>",
                                        "<span class='text-[#395b45] font-bold'>一般歯科と矯正の両方を熟知した総合的なアプローチ</span>"
                                    ],
                                    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "02",
                                    title: "Double Check System",
                                    highlight: "ダブルチェック制度で確実に",
                                    summary: "一般歯科医だけでなく、<span class='font-bold bg-yellow-100'>矯正専門医とのダブルチェック制度を導入</span>。総合的な視点で最適な治療計画を立てます。",
                                    details: [
                                        "<span class='text-[#395b45] font-bold'>矯正専門医による定期的な症例チェック</span>",
                                        "<span class='text-[#395b45] font-bold'>難症例や複雑なケースにも対応可能な体制</span>"
                                    ],
                                    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "03",
                                    title: "3D Scanner",
                                    highlight: "3Dスキャンで快適に",
                                    summary: "従来の気持ち悪い歯型取りは不要。<span class='font-bold bg-yellow-100'>最新の3Dスキャナー</span>で、快適かつ精密に歯型を取得します。",
                                    details: [
                                        "<span class='text-[#395b45] font-bold'>嘔吐反射が強い方でも安心</span>",
                                        "<span class='text-[#395b45] font-bold'>デジタルデータで精密なマウスピース作成が可能</span>"
                                    ],
                                    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "04",
                                    title: "MFT Training",
                                    highlight: "根本原因にアプローチ",
                                    summary: "舌癖や口呼吸など、歯並びが悪くなる根本原因を改善。<span class='font-bold bg-yellow-100'>MFT（口腔筋機能療法）</span>で後戻りを防ぎます。",
                                    details: [
                                        "<span class='text-[#395b45] font-bold'>舌癖・口呼吸・嚥下癖などの悪習癖を改善</span>",
                                        "<span class='text-[#395b45] font-bold'>矯正後の後戻り防止と、長期的な安定を実現</span>"
                                    ],
                                    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    id: "05",
                                    title: "Aesthetics & Function",
                                    highlight: "美しさと機能の両立",
                                    summary: "見た目の美しさだけでなく、<span class='font-bold bg-yellow-100'>噛み合わせや顎の位置も精査</span>。<span class='text-[#395b45] font-bold'>顎関節症の予防・改善も考慮</span>した治療を行います。",
                                    details: [
                                        "<span class='text-[#395b45] font-bold'>顎位を精密に分析し、顎関節症のリスクを軽減</span>",
                                        "<span class='text-[#395b45] font-bold'>食事の質向上や発音改善など、機能面も重視</span>"
                                    ],
                                    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800"
                                }
                            ].map((feature, index) => (
                                <div key={feature.id} className="flex flex-col group">
                                    {/* Title Area */}
                                    <div className="relative">
                                        <span className="text-8xl font-serif text-[#C5A572]/15 absolute -top-16 -left-8 z-0 select-none font-bold" style={{ letterSpacing: '-0.05em' }}>
                                            {feature.id}
                                        </span>

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

                                    {/* Text Area */}
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
                                ワイヤーを使わない<br className="md:hidden" />新しい矯正治療
                            </h2>
                            <p className="text-lg leading-loose text-[#8D8070] max-w-3xl mx-auto">
                                「矯正したいけど、ワイヤーが見えるのは嫌だ」<br />
                                「接客業だから目立たないようにしたい」<br />
                                そんな方におすすめなのが、透明なマウスピースを使った矯正治療です。
                            </p>
                        </div>

                        {/* マウスピース矯正とは */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">マウスピース矯正とは</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    マウスピース矯正（インビザラインなど）とは、透明なマウスピース型の装置を使って歯並びを整える矯正治療法です。
                                    従来のワイヤー矯正と比べて、<span className="font-bold bg-yellow-100">装置が目立たず、周囲の人に気づかれにくい</span>のが大きな特徴です。
                                </p>
                                <p>
                                    薄くて透明なマウスピースを1〜2週間ごとに交換しながら、少しずつ歯を動かしていきます。
                                    <span className="text-[#2E8B57] font-bold">取り外しができるため、食事や歯磨きは普段通り</span>に行えます。
                                </p>
                                <p>
                                    当院では、患者様一人ひとりの歯並びの状態やご希望に合わせて、<span className="font-bold bg-yellow-100">最適な矯正プランをご提案</span>いたします。
                                </p>
                            </div>
                        </div>

                        {/* マウスピース矯正の種類 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">マウスピース矯正の種類</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-8">
                                {/* インビザライン */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">インビザライン</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        世界で最も普及しているマウスピース矯正システムです。
                                        <span className="font-bold bg-yellow-100">1,500万人以上の治療実績</span>があり、<span className="text-[#2E8B57] font-bold">軽度から中程度の歯並びの乱れに幅広く対応</span>できます。
                                        3Dシミュレーションで治療後の歯並びを事前に確認できるのも魅力です。
                                    </p>
                                </div>
                                {/* インビザラインGo */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">インビザラインGo</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        前歯を中心とした<span className="font-bold bg-yellow-100">軽度な歯並びの乱れに特化</span>したシステムです。
                                        <span className="text-[#2E8B57] font-bold">治療期間が短く、費用も抑えられる</span>のが特徴です。
                                        「前歯だけ気になる」という方におすすめです。
                                    </p>
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
                                        title: "相談・カウンセリング",
                                        desc: "歯並びのお悩みやご希望を伺い、マウスピース矯正が適しているか簡易診断を行います。ワイヤー矯正との違いもご説明します。",
                                        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                                    },
                                    {
                                        num: "02",
                                        title: "精密検査・スキャン",
                                        desc: "レントゲン撮影や口腔内スキャナー（iTero）を使って、お口の中をデジタルデータ化します。不快な型取りは不要です。",
                                        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                                    },
                                    {
                                        num: "03",
                                        title: "治療計画の作成（シミュレーション）",
                                        desc: "3Dシミュレーションソフトを使って、歯がどのように動いていくか、最終的にどんな歯並びになるかを確認していただきます。",
                                        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                                    },
                                    {
                                        num: "04",
                                        title: "マウスピースの製作・お渡し",
                                        desc: "オーダーメイドのマウスピースが完成したら、装着方法や取り扱い方法をご説明し、治療スタートです。",
                                        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                                    },
                                    {
                                        num: "05",
                                        title: "定期チェック・交換",
                                        desc: "1〜2週間ごとに新しいマウスピースにご自身で交換していただきます。1.5〜2ヶ月ごとに来院し、進み具合をチェックします。",
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
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100">
                            <h3 className="text-lg font-bold text-[#5A4D41] mb-6 text-center">リスク・副作用について</h3>
                            <ul className="space-y-3 mb-6">
                                {[
                                    "装着時間を守らないと、計画通りに歯が動かず、治療期間が延びたり、作り直しが必要になったりすることがあります。",
                                    "食後は必ず歯磨きをしてから装着しないと、虫歯のリスクが高まります。",
                                    "歯を動かすスペースを作るために、歯の側面をわずかに削る（IPR）必要がある場合があります。"
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
                                    q: "本当に目立ちませんか？",
                                    a: "はい、透明なプラスチック製なので、至近距離で見ない限りほとんど気づかれません。「矯正していることに気づかれなかった」という患者様も多いです。"
                                },
                                {
                                    q: "1日どれくらい着けていればいいですか？",
                                    a: "1日20時間〜22時間の装着が必要です。食事と歯磨きの時以外は、基本的にずっと装着していただくイメージです。"
                                },
                                {
                                    q: "虫歯の治療中ですが、矯正できますか？",
                                    a: "虫歯や歯周病がある場合は、まずはそちらの治療を優先します。お口の中が健康な状態になってから矯正治療をスタートします。"
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
