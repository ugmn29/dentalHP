"use client";

import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { WaveBottom } from './Wave';
import { AuthorBio } from './AuthorBio';
import { CheckCircle2, ChevronRight, Calendar, Phone, ArrowRight } from 'lucide-react';
import { PageImage } from '@/components/PageImage';

interface Feature {
    id: string;
    title: string;
    highlight: string;
    summary: string;
    details: string[];
    image?: string;
    imageId?: string;
    imageAlt: string;
}

interface Step {
    title: string;
    description: string;
}

interface FAQ {
    q: string;
    a: string;
}

interface RelatedPage {
    title: string;
    desc: string;
    href: string;
    icon: string;
}

interface TreatmentLayoutProps {
    title: string;
    titleEn: string;
    lead: React.ReactNode;
    features?: Feature[];
    steps?: Step[];
    faqs?: FAQ[];
    priceLink?: boolean;
    recommended?: string[];
    merits?: string[];
    demerits?: string[];
    risks?: string[];
    showImplantHero?: boolean;
    relatedPages?: RelatedPage[];
    children?: React.ReactNode;
    pagePath?: string;
}

export const TreatmentLayout: React.FC<TreatmentLayoutProps> = ({
    title,
    titleEn,
    lead,
    features,
    steps,
    faqs,
    priceLink = true,
    recommended,
    merits,
    demerits,
    risks,
    showImplantHero = false,
    relatedPages,
    children,
    pagePath
}) => {
    return (
        <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#5A4D41] selection:bg-[#FF9F43] selection:text-white">
            <Header />

            <main>
                {/* Hero Section */}
                {showImplantHero && (
                    <section className="relative h-screen overflow-hidden">
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0">
                            <PageImage
                                path={pagePath || '/shared'}
                                imageId="layout-hero"
                                alt="インプラント治療風景"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#0d1b3a]/90"></div>
                        </div>

                        {/* Content */}
                        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 h-full flex items-start pt-24 md:pt-32 lg:pt-40">
                            <div className="flex flex-col md:flex-row items-start w-full gap-12 md:gap-16 lg:gap-20 max-w-[75%]">
                                {/* Left Side - Main Title */}
                                <div className="text-white flex-shrink-0">
                                    <h1 className="text-[#F2E5C5] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-0 text-left" style={{ letterSpacing: '0.18em', lineHeight: '1.5', fontWeight: '700', fontFamily: 'Georgia, "Yu Mincho", "Hiragino Mincho ProN", serif' }}>
                                        F歯科・矯正歯科 豊洲プライムスクエア院の<br />
                                        プレミアム<br />
                                        インプラント
                                    </h1>
                                </div>

                                {/* Right Side - Vertical Text and Badges */}
                                <div className="flex flex-row items-start gap-6 lg:gap-10">
                                    {/* Vertical Text */}
                                    <div className="hidden md:flex items-start">
                                        <div className="bg-transparent border-l-[2.5px] border-r-[2.5px] border-[#C5A572] px-4 lg:px-5 py-16 lg:py-20">
                                            <p className="text-white text-2xl lg:text-3xl font-bold" style={{ writingMode: 'vertical-rl', letterSpacing: '0.5em', lineHeight: '2', fontFamily: 'Georgia, "Yu Mincho", "Hiragino Mincho ProN", serif' }}>
                                                生まれ変わった新しいレーシック手術
                                            </p>
                                        </div>
                                    </div>

                                    {/* Feature Badges Grid and Bottom Text */}
                                    <div className="flex flex-col items-center gap-4 -mt-6 -ml-6">
                                        {/* Feature Badges Grid */}
                                        <div className="grid grid-cols-2 gap-4 lg:gap-5">
                                            {/* Badge 1 */}
                                            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-full flex items-center justify-center shadow-2xl border-[3px] lg:border-[5px] border-[#C5A572] p-3">
                                                <div className="text-center leading-tight" style={{ fontFamily: 'Georgia, "Yu Mincho", "Hiragino Mincho ProN", serif' }}>
                                                    <p className="text-xs md:text-sm lg:text-base text-[#8B7355] mb-0.5">厚生労働省</p>
                                                    <p className="text-sm md:text-base lg:text-lg font-bold text-[#5A4D41] leading-tight">認可の</p>
                                                    <p className="text-sm md:text-base lg:text-lg font-bold text-[#5A4D41] leading-tight">レーザー機器</p>
                                                </div>
                                            </div>

                                            {/* Badge 2 */}
                                            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-full flex items-center justify-center shadow-2xl border-[3px] lg:border-[5px] border-[#C5A572] p-3">
                                                <div className="text-center leading-tight" style={{ fontFamily: 'Georgia, "Yu Mincho", "Hiragino Mincho ProN", serif' }}>
                                                    <p className="text-xs md:text-sm lg:text-base text-[#8B7355] mb-0.5">年間手術実績</p>
                                                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#C5A572] leading-tight">3,000件</p>
                                                    <p className="text-xs md:text-sm lg:text-base text-[#8B7355] leading-tight">以上の</p>
                                                    <p className="text-sm md:text-base lg:text-lg font-bold text-[#5A4D41] leading-tight">執刀医</p>
                                                </div>
                                            </div>

                                            {/* Badge 3 */}
                                            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-full flex items-center justify-center shadow-2xl border-[3px] lg:border-[5px] border-[#C5A572] p-3">
                                                <div className="text-center leading-tight" style={{ fontFamily: 'Georgia, "Yu Mincho", "Hiragino Mincho ProN", serif' }}>
                                                    <p className="text-xs md:text-sm lg:text-base text-[#8B7355] mb-0.5">手術時間</p>
                                                    <p className="text-sm md:text-base lg:text-lg font-bold text-[#5A4D41] leading-tight">両眼約</p>
                                                    <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#C5A572] leading-tight">10</p>
                                                    <p className="text-base md:text-lg lg:text-xl font-bold text-[#5A4D41] leading-tight">分</p>
                                                </div>
                                            </div>

                                            {/* Badge 4 */}
                                            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-full flex items-center justify-center shadow-2xl border-[3px] lg:border-[5px] border-[#C5A572] p-3">
                                                <div className="text-center leading-tight" style={{ fontFamily: 'Georgia, "Yu Mincho", "Hiragino Mincho ProN", serif' }}>
                                                    <p className="text-xs md:text-sm lg:text-base text-[#8B7355] mb-0.5">LenSxを</p>
                                                    <p className="text-sm md:text-base lg:text-lg font-bold text-[#5A4D41] leading-tight">併用した</p>
                                                    <p className="text-sm md:text-base lg:text-lg font-bold text-[#5A4D41] leading-tight">次世代型</p>
                                                    <p className="text-sm md:text-base lg:text-lg font-bold text-[#C5A572] leading-tight">レーシック</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Text - Directly Below Badges */}
                                        <div className="text-center mt-4 pointer-events-none">
                                            <p className="text-white/15 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[0.3em] leading-none select-none" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>PREMIUM</p>
                                            <p className="text-white/15 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[0.4em] -mt-2 select-none" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>LASIK SURGERY</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <WaveBottom color="fill-[#FDFBF7]" />
                    </section>
                )}

                {/* Lead Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <div className="text-lg md:text-xl leading-relaxed text-[#5A4D41] font-medium">
                            {lead}
                        </div>
                    </div>
                </section>

                {/* Recommended Section */}
                {recommended && recommended.length > 0 && (
                    <section className="py-16 md:py-24 bg-white">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <div className="text-center mb-12">
                                <span className="text-[#FF9F43] font-bold tracking-widest text-sm uppercase mb-2 block">Recommended</span>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41]">こんな方におすすめです</h2>
                            </div>
                            <div className="bg-[#FDFBF7] rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
                                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                    {recommended.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-[#FF9F43] flex-shrink-0 mt-1" size={20} />
                                            <span className="text-[#5A4D41] font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                )}

                {/* Features Section (Redesigned) */}
                {features && features.length > 0 && (
                    <section className="pt-8 pb-16 bg-gradient-to-b from-[#FAFAFA] to-white relative overflow-hidden" style={{ fontFamily: '"Noto Sans Japanese", sans-serif' }}>
                        <style jsx global>{`
                            .brush-underline {
                                background-image: linear-gradient(transparent 60%, rgba(197, 165, 114, 0.4) 60%, rgba(197, 165, 114, 0.6) 80%, transparent 80%);
                                padding: 0 0.1em;
                            }
                        `}</style>
                        <div className="container mx-auto px-4 relative z-10">
                            <div className="text-center mb-8">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 relative inline-block">
                                    <span className="text-[#395b45] relative z-10">
                                        Features
                                    </span>
                                </h2>
                                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#666666] mb-4">
                                    当院の{title}の特徴
                                </p>
                                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#395b45] to-transparent mx-auto mb-4"></div>
                            </div>

                            <div className="space-y-12 max-w-5xl mx-auto">
                                {features.map((feature, index) => (
                                    <div key={feature.id} className="flex flex-col mb-16 lg:mb-24 relative">
                                        {/* Title Section with Number */}
                                        <div className="relative h-24 flex items-center mb-4">
                                            {/* Large Gradient Number */}
                                            <span className={`absolute top-[20%] -translate-y-1/2 block text-[8rem] md:text-[11rem] leading-[0.8] font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#C5A572] via-[#E5C592] to-transparent select-none opacity-60 scale-x-[0.85] tracking-tighter ${index % 2 === 0 ? 'left-[-1rem] origin-left' : 'right-0 origin-right'}`}>
                                                {feature.id}
                                            </span>

                                            {/* Title - Always Left */}
                                            <div className="relative z-10 w-full text-left pl-4">
                                                <h3 className="text-3xl md:text-4xl font-bold text-[#5A4D41] leading-tight tracking-wide font-serif inline-block relative">
                                                    <span dangerouslySetInnerHTML={{ __html: feature.highlight.replace(/(の|を|に|が|は|と|へ|から|より|で|や)/g, '<span class="text-[0.75em]">$1</span>') }} />
                                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5A572] via-[#C5A572] to-transparent"></div>
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Image */}
                                        <div className="w-full relative group mb-8">
                                            <div className="relative rounded-[30px] overflow-hidden shadow-2xl border-4 border-white transform transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(197,165,114,0.3)]">
                                                {feature.imageId && pagePath ? (
                                                    <PageImage
                                                        path={pagePath}
                                                        imageId={feature.imageId}
                                                        alt={feature.imageAlt}
                                                        className="w-full h-auto aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                ) : feature.image ? (
                                                    <img
                                                        src={feature.image}
                                                        alt={feature.imageAlt}
                                                        className="w-full h-auto aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                ) : null}
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#C5A572]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            </div>
                                        </div>

                                        {/* Text Content */}
                                        <div>
                                            <p className="text-base md:text-lg text-[#5A4D41] leading-relaxed">
                                                <span dangerouslySetInnerHTML={{ __html: feature.summary.replace(/([^。、\s]{2,})/g, (match) => `<span class='brush-underline'>${match}</span>`) }} />
                                                {feature.details.map((detail, i) => (
                                                    <span key={i}>{detail}</span>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Custom Children Section */}
                {children}

                {/* Merits & Demerits Section */}
                {(merits && merits.length > 0) || (demerits && demerits.length > 0) ? (
                    <section className="py-16 md:py-24 bg-white">
                        <div className="container mx-auto px-4 max-w-6xl">
                            <div className="text-center mb-16">
                                <span className="text-[#FF9F43] font-bold tracking-widest text-sm uppercase mb-2 block">Merits & Demerits</span>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41]">メリット・デメリット</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                                {merits && merits.length > 0 && (
                                    <div className="bg-[#F0F9FF] rounded-3xl p-8 border border-[#E0F2FE]">
                                        <h3 className="text-xl font-bold text-[#0369A1] mb-6 flex items-center gap-2">
                                            <span className="bg-[#0369A1] text-white text-xs px-2 py-1 rounded">MERIT</span>
                                            メリット
                                        </h3>
                                        <ul className="space-y-4">
                                            {merits.map((item, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 bg-[#0369A1] rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-[#334155]">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {demerits && demerits.length > 0 && (
                                    <div className="bg-[#FFF1F2] rounded-3xl p-8 border border-[#FFE4E6]">
                                        <h3 className="text-xl font-bold text-[#BE123C] mb-6 flex items-center gap-2">
                                            <span className="bg-[#BE123C] text-white text-xs px-2 py-1 rounded">DEMERIT</span>
                                            デメリット
                                        </h3>
                                        <ul className="space-y-4">
                                            {demerits.map((item, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 bg-[#BE123C] rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-[#334155]">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                ) : null}

                {/* Flow Section */}
                {steps && steps.length > 0 && (
                    <section className="py-16 md:py-24 bg-[#FAFAFA]">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <div className="text-center mb-16">
                                <span className="text-[#FF9F43] font-bold tracking-widest text-sm uppercase mb-2 block">Flow</span>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41]">治療の流れ</h2>
                            </div>

                            <div className="space-y-6">
                                {steps.map((step, index) => (
                                    <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start relative">
                                        {index < steps.length - 1 && (
                                            <div className="absolute left-8 top-20 bottom-[-24px] w-0.5 bg-gray-100 md:block hidden"></div>
                                        )}
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 bg-[#FF9F43] text-white rounded-2xl flex flex-col items-center justify-center font-bold shadow-md">
                                                <span className="text-xs opacity-80">STEP</span>
                                                <span className="text-2xl leading-none">{index + 1}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 pt-2">
                                            <h3 className="text-lg font-bold text-[#5A4D41] mb-3">{step.title}</h3>
                                            <p className="text-[#8D8070] leading-relaxed text-sm">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Risks Section */}
                {risks && risks.length > 0 && (
                    <section className="py-16 md:py-24 bg-white">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200">
                                <div className="text-center mb-8">
                                    <span className="text-gray-500 font-bold tracking-widest text-sm uppercase mb-2 block">Risks & Side Effects</span>
                                    <h2 className="text-xl md:text-2xl font-bold text-gray-700">リスク・副作用について</h2>
                                </div>
                                <ul className="space-y-3">
                                    {risks.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                                            <span className="text-gray-400 mt-0.5">●</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-xs text-gray-400 text-center">
                                    ※全ての方に必ず起こるわけではありませんが、医療行為にはリスクが伴います。<br />
                                    当院では、事前に十分なご説明を行い、納得していただいてから治療を開始します。
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                {/* FAQ Section */}
                {faqs && faqs.length > 0 && (
                    <section className="py-16 md:py-24 bg-[#FAFAFA]">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <div className="text-center mb-16">
                                <span className="text-[#FF9F43] font-bold tracking-widest text-sm uppercase mb-2 block">Q&A</span>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41]">よくあるご質問</h2>
                            </div>

                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                                        <div className="flex gap-4 items-start mb-4">
                                            <span className="text-[#FF9F43] font-bold text-xl">Q.</span>
                                            <h3 className="text-[#5A4D41] font-bold text-lg pt-0.5">{faq.q}</h3>
                                        </div>
                                        <div className="flex gap-4 items-start pl-0 md:pl-9">
                                            <span className="text-[#FF9F43] font-bold text-xl">A.</span>
                                            <p className="text-[#8D8070] leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Related Pages Section */}
                {relatedPages && relatedPages.length > 0 && (
                    <section className="py-16 md:py-24 bg-white">
                        <div className="container mx-auto px-4 max-w-6xl">
                            <div className="text-center mb-12">
                                <span className="text-[#FF9F43] font-bold tracking-widest text-sm uppercase mb-2 block">RELATED PAGES</span>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41]">関連ページ</h2>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedPages.map((page, index) => (
                                    <a key={index} href={page.href} className="group block bg-[#FDFBF7] hover:bg-white border border-gray-100 hover:border-[#FF9F43]/30 rounded-2xl p-6 transition-all hover:shadow-lg">
                                        <div className="flex items-start gap-4 mb-3">
                                            <span className="text-4xl">{page.icon}</span>
                                            <h3 className="text-lg font-bold text-[#5A4D41] group-hover:text-[#FF9F43] transition-colors">{page.title}</h3>
                                        </div>
                                        <p className="text-sm text-[#8D8070] leading-relaxed mb-4">{page.desc}</p>
                                        <div className="flex items-center gap-2 text-[#FF9F43] text-sm font-medium">
                                            詳しく見る <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 監修者情報 */}
                <div className="container mx-auto px-4 pt-2 pb-16">
                    <AuthorBio />
                </div>

                {/* CTA & Price Link */}
                <section className="py-16 md:py-24 bg-[#FFF9F0]">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-8">
                            まずは一度、お気軽にご相談ください
                        </h2>

                        {priceLink && (
                            <div className="mb-12">
                                <a href="/price" className="inline-flex items-center gap-2 text-[#FF9F43] font-bold border-b-2 border-[#FF9F43] pb-1 hover:text-[#E0862D] hover:border-[#E0862D] transition-colors">
                                    料金表を見る <ArrowRight size={18} />
                                </a>
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#FF9F43] hover:bg-[#FF8F20] text-white px-8 py-4 rounded-full font-bold shadow-[0_4px_0_#E0862D] active:shadow-none active:translate-y-[4px] transition-all flex items-center justify-center gap-2 text-lg group min-w-[240px]">
                                <Calendar className="group-hover:rotate-12 transition" />
                                24時間 WEB予約
                            </button>
                            <button className="bg-white hover:bg-gray-50 text-[#5A4D41] border-2 border-[#E0D6EA] px-8 py-4 rounded-full font-bold shadow-sm transition-all flex items-center justify-center gap-2 text-lg group min-w-[240px]">
                                <Phone className="text-[#FF9F43] group-hover:scale-110 transition" />
                                03-1234-5678
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};
