"use client";

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import { FeatureSection } from '@/components/FeatureSection';
import { CheckCircle2, ArrowRight, Calendar, Phone, Plus, Minus, ChevronRight } from 'lucide-react';
import { FaqSection } from '@/components/FaqSection';
import { MobileTreatmentHero } from '@/components/MobileTreatmentHero';
import { WEB_RESERVATION_URL } from '@/lib/reservation';

export default function MouthpiecePage() {

    return (
        <div className="min-h-screen bg-white font-sans text-[#4A4A4A] overflow-x-hidden" style={{ wordBreak: 'normal', overflowWrap: 'anywhere' }}>
            <Header />

            <main>
                <MobileTreatmentHero
                    imageSrc="/images/pages/mobile-heroes/mouthpiece-hero.webp"
                    tabletSrc="/images/pages/mobile-heroes/mouthpiece-hero-tablet.webp"
                    desktopSrc="/images/pages/mobile-heroes/mouthpiece-hero-desktop.webp"
                    title="マウスピース矯正"
                    alt="目立ちにくく、見た目と噛み合わせを整える マウスピース矯正"
                />

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
                                    imageId: "case1"
                                },
                                {
                                    title: "Case.02",
                                    desc: "上下の歯の軽い叢生（ガタガタ）を、約8ヶ月で改善しました。",
                                    imageId: "case2"
                                },
                                {
                                    title: "Case.03",
                                    desc: "すきっ歯の改善と全体的な歯並びの調整を行いました。",
                                    imageId: "case3"
                                }
                            ].map((item, index) => (
                                <div key={index} className="group cursor-pointer">
                                    <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg">
                                        <PageImage
                                            path="/mouthpiece"
                                            imageId={item.imageId}
                                            alt={item.title}
                                            className="w-full aspect-[3/2] object-contain bg-[#F7F2EA] transform group-hover:scale-105 transition-transform duration-700"
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
                            <a href={WEB_RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="block">
                                <img
                                    src="/images/web-reservation-banner.webp"
                                    alt="Web予約" loading="lazy" decoding="async" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                />
                            </a>
                        </div>
                    </div>
                </section>

                <FeatureSection
                    title="当院の特徴"
                    pagePath="/mouthpiece"
                    features={[
                        { id: "01", title: "Comprehensive Care", highlight: "総合治療で安心", summary: "矯正中の虫歯・歯周病治療も同じ医院で対応し、総合的にお口を見ながら治療を進めます。", details: [], imageId: "feature1" },
                        { id: "02", title: "Double Check System", highlight: "ダブルチェック制度で確実に", summary: "一般歯科と矯正の視点を組み合わせ、治療計画を多角的に確認します。", details: [], imageId: "feature2" },
                        { id: "03", title: "3D Scanner", highlight: "3Dスキャンで快適に", summary: "従来の歯型取りの負担を減らし、デジタルデータで精密なマウスピースを作製します。", details: [], imageId: "feature3" },
                        { id: "04", title: "MFT Training", highlight: "根本原因にアプローチ", summary: "舌癖や口呼吸など、歯並びが悪くなる原因にも働きかけ、後戻りを防ぎます。", details: [], imageId: "舌の正しい位置を示す口腔断面図" },
                        { id: "05", title: "Aesthetics & Function", highlight: "美しさと機能の両立", summary: "見た目だけでなく、噛み合わせや顎の位置まで確認しながら治療します。", details: [], imageId: "feature5" },
                    ]}
                />

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
                                        imageId: "患者と歯科医師がマウスピースサンプルで相談"
                                    },
                                    {
                                        num: "02",
                                        title: "精密検査・スキャン",
                                        desc: "レントゲン撮影や口腔内スキャナー（iTero）を使って、お口の中をデジタルデータ化します。不快な型取りは不要です。",
                                        imageId: "iTeroでスキャン中の場面"
                                    },
                                    {
                                        num: "03",
                                        title: "治療計画の作成（シミュレーション）",
                                        desc: "3Dシミュレーションソフトを使って、歯がどのように動いていくか、最終的にどんな歯並びになるかを確認していただきます。",
                                        imageId: "3D画面で歯が動くシミュレーション"
                                    },
                                    {
                                        num: "04",
                                        title: "マウスピースの製作・お渡し",
                                        desc: "オーダーメイドのマウスピースが完成したら、装着方法や取り扱い方法をご説明し、治療スタートです。",
                                        imageId: "マウスピースセットを患者に渡している場面"
                                    },
                                    {
                                        num: "05",
                                        title: "定期チェック・交換",
                                        desc: "1〜2週間ごとに新しいマウスピースにご自身で交換していただきます。1.5〜2ヶ月ごとに来院し、進み具合をチェックします。",
                                        imageId: "カレンダーに通院マークとマウスピース交換"
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
                                                path="/mouthpiece"
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
                <FaqSection
                  title="よくあるご質問"
                  items={[
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
