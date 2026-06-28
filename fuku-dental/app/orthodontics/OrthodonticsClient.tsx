"use client";

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import { FeatureSection } from '@/components/FeatureSection';
import { CheckCircle2, ArrowRight, Calendar, Phone, Plus, Minus, ChevronRight } from 'lucide-react';
import { RelatedPagesSection } from '@/components/RelatedPagesSection';
import { orthodonticsRelatedPages } from '@/data/related-pages';
import { FaqSection } from '@/components/FaqSection';
import { MobileTreatmentHero } from '@/components/MobileTreatmentHero';
import { WEB_RESERVATION_URL } from '@/lib/reservation';

export default function OrthoGeneralPage() {

    return (
        <div className="min-h-screen bg-white font-sans text-[#4A4A4A] overflow-x-hidden" style={{ wordBreak: 'normal', overflowWrap: 'anywhere' }}>
            <Header />

            <main>
                <MobileTreatmentHero
                    imageSrc="/images/pages/mobile-heroes/orthodontics-hero.webp"
                    tabletSrc="/images/pages/mobile-heroes/orthodontics-hero-tablet.webp"
                    desktopSrc="/images/pages/mobile-heroes/orthodontics-hero-desktop.webp"
                    title="ワイヤー矯正"
                    alt="噛み合わせまで、丁寧に整える ワイヤー矯正"
                />

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
                                { title: "Case.01", desc: "叢生（ガタガタの歯並び）をワイヤー矯正で整えました。", imageId: "case1" },
                                { title: "Case.02", desc: "出っ歯（上顎前突）を抜歯矯正で改善しました。", imageId: "case2" },
                                { title: "Case.03", desc: "受け口（下顎前突）を矯正治療で改善しました。", imageId: "case3" }
                            ].map((item, index) => (
                                <div key={index} className="group cursor-pointer">
                                    <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg">
                                        <PageImage path="/orthodontics" imageId={item.imageId} alt={item.title} className="w-full aspect-[3/2] object-contain bg-[#F7F2EA] transform group-hover:scale-105 transition-transform duration-700" />
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
                            <a href="/case-studies#orthodontics" className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium">
                                もっと症例を見る <ArrowRight size={16} />
                            </a>
                        </div>

                        <div className="mt-12">
                            <a href={WEB_RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="block">
                                <img src="/images/web-reservation-banner.webp" alt="Web予約" loading="lazy" decoding="async" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                            </a>
                        </div>
                    </div>
                </section>

                <FeatureSection
                    title="当院の特徴"
                    pagePath="/orthodontics"
                    features={[
                        { id: "01", title: "Versatile", highlight: "幅広い症例に対応可能", summary: "歴史あるワイヤー矯正で、マウスピース矯正では難しい複雑な症例にも対応します。", details: [], imageId: "feature1" },
                        { id: "02", title: "Aesthetic Options", highlight: "目立ちにくい装置も選択可能", summary: "白いブラケットやホワイトワイヤーなど、見た目に配慮した装置もご用意しています。", details: [], imageId: "feature2" },
                        { id: "03", title: "Partial Ortho", highlight: "部分矯正にも対応", summary: "前歯だけ整えたいなどのご希望には、部分的な矯正で対応できる場合があります。", details: [], imageId: "feature3" },
                        { id: "04", title: "Functional Focus", highlight: "機能面も重視した治療", summary: "見た目だけでなく、しっかり噛める噛み合わせと長期安定を目指します。", details: [], imageId: "feature4" },
                        { id: "05", title: "Patient First", highlight: "ご希望に合わせた治療", summary: "治療期間や費用も丁寧に説明し、ご自身で納得して選べる環境を大切にしています。", details: [], imageId: "feature5" },
                    ]}
                />

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
                                    { num: "01", title: "初診相談", desc: "お口の中を拝見し、矯正治療の必要性、開始時期、費用の目安などをご説明します。", imageId: "step1" },
                                    { num: "02", title: "精密検査", desc: "レントゲン（セファロ）、CT、歯型採り、お顔や口腔内の写真撮影などを行い、詳細なデータを集めます。", imageId: "step2" },
                                    { num: "03", title: "診断・治療計画の説明", desc: "検査結果を分析し、最適な治療方針、期間、費用などを詳しくご説明します。納得いただいてから治療を開始します。", imageId: "step3" },
                                    { num: "04", title: "装置の装着", desc: "歯にブラケットやワイヤーなどの装置を装着します。歯磨きの指導も行います。", imageId: "step4" },
                                    { num: "05", title: "動的治療（通院）", desc: "3〜4週間に1回程度来院いただき、ワイヤーの調整や交換を行います。治療期間は平均2〜3年程度です。", imageId: "step5" },
                                    { num: "06", title: "保定期間", desc: "歯並びが整ったら装置を外し、後戻りを防ぐための「リテーナー（保定装置）」を使用します。", imageId: "step6" }
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
                                            <PageImage path="/orthodontics" imageId={step.imageId} alt={step.title} className="w-full h-56 md:h-72 object-cover" />
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
                <FaqSection
                  title="よくあるご質問"
                  items={[
                                { q: "大人になってからでも矯正できますか？", a: "はい、可能です。歯と歯茎が健康であれば、何歳からでも矯正治療は始められます。最近では40代、50代で始められる方も増えています。" },
                                { q: "抜歯は必ず必要ですか？", a: "いいえ、必ずしも必要ではありません。顎の大きさや歯並びの状態によっては、歯を抜かずに並べることができる場合もあります。精密検査の結果をもとに判断します。" },
                                { q: "治療期間はどれくらいですか？", a: "歯並びの状態や治療法によって異なりますが、全体矯正の場合、平均して2年〜3年程度かかります。部分矯正であれば数ヶ月〜1年程度で終わることもあります。" }
                            ]}
                />

                <RelatedPagesSection
                  title="関連ページ"
                  items={orthodonticsRelatedPages}
                  currentPath="/orthodontics"
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
