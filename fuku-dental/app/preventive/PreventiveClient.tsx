"use client";

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AuthorBio } from '../../components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import { FeatureSection } from '@/components/FeatureSection';
import { CheckCircle2, ArrowRight, Calendar, Phone, Plus, Minus, ChevronRight } from 'lucide-react';
import Image from "next/image";
import { FaqSection } from '@/components/FaqSection';
import { MobileTreatmentHero } from '@/components/MobileTreatmentHero';

export default function GeneralPreventivePage() {

    const menu = [
        { title: "クリーニング（スケーリング）", desc: "歯垢（プラーク）や歯石、着色（ステイン）を除去します。歯周病治療の基本とも言える処置です。", imageId: "cleaning-scaling" },
        { title: "PMTC", desc: "Professional Mechanical Tooth Cleaningの略。専用機器で歯面を清掃・研磨し、バイオフィルムを除去します。", imageId: "cleaning-pmtc" }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-[#4A4A4A] overflow-x-hidden" style={{ wordBreak: 'normal', overflowWrap: 'anywhere' }}>
            <Header />

            <main>
                <MobileTreatmentHero
                    imageSrc="/images/pages/mobile-heroes/preventive-hero.webp"
                    tabletSrc="/images/pages/mobile-heroes/preventive-hero-tablet.webp"
                    desktopSrc="/images/pages/mobile-heroes/preventive-hero-desktop.webp"
                    title="予防歯科"
                    alt="治す前に、守る。予防歯科"
                />

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

                <FeatureSection
                    title="当院の特徴"
                    pagePath="/preventive"
                    features={[
                        { id: "01", title: "Visual Education", highlight: "目で見てわかる予防教育", summary: "口腔内カメラや資料を使い、虫歯や歯周病の原因を視覚的に理解できるよう説明します。", details: [], imageId: "feature1" },
                        { id: "02", title: "Personalized Care", highlight: "一人ひとりに最適な予防グッズ", summary: "虫歯リスク、歯周病、知覚過敏など、お口の状態に合わせた歯ブラシや歯磨き粉をご提案します。", details: [], imageId: "feature2" },
                        { id: "03", title: "Take-home Materials", highlight: "わかりやすい資料の提供", summary: "診療中に説明した内容をご自宅でも見返せるよう、ケア資料としてお渡しします。", details: [], imageId: "feature3" },
                        { id: "04", title: "Data-Driven Prevention", highlight: "記録と比較で効果を実感", summary: "口腔内写真や検査結果を記録し、過去の状態と比較しながら予防効果を確認します。", details: [], imageId: "feature4" },
                        { id: "05", title: "Reminder System", highlight: "予防を習慣化するサポート", summary: "検診時期をお知らせし、患者様ごとに最適な間隔で予防を継続できるよう支えます。", details: [], imageId: "feature5" },
                    ]}
                />

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
                                    { num: "01", title: "お口のチェック・染め出し", desc: "歯周ポケットの検査や、染め出し液を使って磨き残しのチェックを行います。ご自身の歯磨きの癖を知ることが予防の第一歩です。", imageId: "step1" },
                                    { num: "02", title: "スケーリング（歯石除去）", desc: "専用の器具（スケーラー）を使って、歯ブラシでは取れない硬い歯石を除去します。", imageId: "step2" },
                                    { num: "03", title: "PMTC（専門的クリーニング）", desc: "専用の機器と研磨剤を使って、歯の表面のバイオフィルムや着色汚れを徹底的に落とし、ツルツルに磨き上げます。", imageId: "step3" },
                                    { num: "04", title: "フッ素コーティング", desc: "きれいになった歯に高濃度のフッ素を塗布します。歯質を強化し、虫歯になりにくい歯を作ります。", imageId: "step4" }
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
                                            <PageImage path="/preventive" imageId={step.imageId} alt={step.title} className="w-full h-56 md:h-72 object-cover" />
                                        </div>
                                        <p className="text-[#5A4D41] leading-loose text-sm md:text-base">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <FaqSection
                  title="よくあるご質問"
                  items={[
                                { q: "予防歯科はどれくらいの頻度で通えばいいですか？", a: "一般的には3〜6ヶ月に1回が目安ですが、お口の状態に合わせて最適な間隔をご提案します。" },
                                { q: "クリーニングは痛くないですか？", a: "基本的に痛みはほとんどありません。ただし、歯茎に炎症がある場合は少し出血することがあります。" },
                                { q: "予防歯科は保険が使えますか？", a: "スケーリング（歯石除去）は保険適用となります。PMTCは自費となる場合があります。" }
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
