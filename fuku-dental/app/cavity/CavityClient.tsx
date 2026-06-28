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

export default function CavityPage() {

    return (
        <div className="min-h-screen bg-white font-sans text-[#4A4A4A] overflow-x-hidden" style={{ wordBreak: 'normal', overflowWrap: 'anywhere' }}>
            <Header />

            <main>
                <MobileTreatmentHero
                    imageSrc="/images/pages/mobile-heroes/cavity-hero.webp"
                    tabletSrc="/images/pages/mobile-heroes/cavity-hero-tablet.webp"
                    desktopSrc="/images/pages/mobile-heroes/cavity-hero-desktop.webp"
                    title="むしば治療"
                    alt="痛みに配慮して、できるだけ削らない むしば治療"
                />

                {/* Concept Message Section */}
                <section className="pt-6 md:pt-2 pb-2 md:pb-2 bg-[#FDFBF7] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0 bg-[radial-gradient(#C5A572_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <p className="text-[#C5A572] tracking-[0.4em] font-medium mb-6 text-xs md:text-sm uppercase font-serif">
                            PREVENTION-BASED TREATMENT
                        </p>
                        <h2 className="text-2xl md:text-3xl font-medium text-[#5A4D41] font-serif leading-loose tracking-widest">
                            削って詰めるだけでなく<br />
                            「なぜ虫歯になったか」を考える治療
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
                                    desc: "C2段階の虫歯を最小限の削りでレジン充填。神経を残すことに成功しました。",
                                    imageId: "case1"
                                },
                                {
                                    title: "Case.02",
                                    desc: "深い虫歯でしたが、MTAセメントによる覆髄で神経を保存できました。",
                                    imageId: "case2"
                                },
                                {
                                    title: "Case.03",
                                    desc: "拡大鏡を使用した精密治療で、健康な歯質を最大限に温存しました。",
                                    imageId: "case3"
                                }
                            ].map((item, index) => (
                                <div key={index} className="group cursor-pointer">
                                    <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg">
                                        <PageImage
                                            path="/cavity"
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
                    pagePath="/cavity"
                    features={[
                        { id: "01", title: "Pain-Free", highlight: "痛みに配慮した無痛治療", summary: "麻酔の痛みを極限まで減らす工夫で、<span class='text-[#395b45] font-bold'>リラックスして治療</span>を受けられます。", details: ["<span class='font-bold bg-yellow-100'>表面麻酔</span>、<span class='font-bold bg-yellow-100'>極細の針と電動麻酔器</span>を使用し、痛みを最小限に抑えます。"], imageId: "feature1" },
                        { id: "02", title: "MI Treatment", highlight: "なるべく削らない治療", summary: "<span class='text-[#395b45] font-bold'>健康な歯を可能な限り残す</span>ミニマル・インターベンションを実践しています。", details: ["う蝕検知液と拡大鏡を使い、虫歯の部分だけを正確に見極めます。"], imageId: "feature2" },
                        { id: "03", title: "Precision", highlight: "拡大鏡による精密治療", summary: "肉眼では見えない細部まで確認し、<span class='text-[#395b45] font-bold'>詰め物や被せ物の適合精度</span>まで大切にします。", details: [], imageId: "feature3" },
                        { id: "04", title: "Recurrence Prevention", highlight: "再発を防ぐ修復物", summary: "治療後の虫歯を防ぐため、適合性が高く汚れが付きにくい素材をご提案します。", details: [], imageId: "feature4" },
                        { id: "05", title: "Digital Diagnosis", highlight: "デジタル診断の実施", summary: "口腔内スキャナーやレントゲンを活用し、<span class='text-[#395b45] font-bold'>削るべき虫歯と経過観察で良い虫歯</span>を見極めます。", details: [], imageId: "feature5" },
                    ]}
                />

                {/* むし歯治療とは Section */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif">
                                歯医者が苦手な方へ
                            </h2>
                            <p className="text-lg leading-loose text-[#8D8070] max-w-3xl mx-auto">
                                「歯医者は痛い・怖い」というイメージを変えるために。<br />
                                子供の治療で培った<strong>『痛くない工夫』</strong>を、大人の治療にも徹底して応用しています。
                            </p>
                        </div>

                        {/* むし歯治療とは */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">むし歯治療とは</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    むし歯治療とは、細菌によって溶かされた歯質を除去し、詰め物や被せ物で修復する治療です。
                                    しかし当院では、<span className="font-bold bg-yellow-100">単に削って詰めるだけでなく、「なぜ虫歯になったか」の原因を考え</span>、再発を防ぐ予防ベースの治療を行います。
                                </p>
                                <p>
                                    可能な限り<span className="text-[#2E8B57] font-bold">「神経を残す」「削らない（MI治療）」</span>方針で、患者様の大切な歯を可能な限り残すことに全力を尽くしています。
                                    また、<span className="text-[#2E8B57] font-bold">拡大鏡やデジタル診断を活用</span>し、精密で確実な治療を提供します。
                                </p>
                                <p>
                                    <span className="font-bold bg-yellow-100">治療後の再発を防ぐため</span>、定期検診やクリーニング、ブラッシング指導などのメンテナンスも重視しています。
                                </p>
                            </div>
                        </div>

                        {/* 虫歯の進行段階 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">虫歯の進行段階</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-8">
                                {/* C0 */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">C0（初期虫歯）</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        歯の表面のエナメル質が少し溶け始めた「脱灰」の状態です。<span className="font-bold bg-yellow-100">まだ穴は空いておらず、痛みもありません</span>。
                                        <span className="text-[#2E8B57] font-bold">削らずに、正しい歯磨きとフッ素塗布で再石灰化を促します</span>。定期検診で経過を観察します。
                                    </p>
                                </div>
                                {/* C1 */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">C1（エナメル質の虫歯）</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        エナメル質がさらに溶け、小さな穴が空いた状態です。<span className="font-bold bg-yellow-100">痛みはまだありません</span>。
                                        <span className="text-[#2E8B57] font-bold">虫歯部分だけを最小限削り、白い詰め物（レジン）で修復します</span>。通常1回で治療が完了します。
                                    </p>
                                </div>
                                {/* C2 */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">C2（象牙質の虫歯）</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        エナメル質の内側にある象牙質まで虫歯が進行した状態です。<span className="font-bold bg-yellow-100">冷たいものがしみ始めます</span>。
                                        <span className="text-[#2E8B57] font-bold">虫歯を削り、型取りをして詰め物（インレー）を装着します</span>。型取りと装着で2〜3回の通院が必要です。
                                    </p>
                                </div>
                                {/* C3 */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">C3（神経まで達した虫歯）</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        虫歯が神経（歯髄）まで達した状態です。<span className="font-bold bg-yellow-100">何もしなくてもズキズキと激しく痛みます</span>。
                                        <span className="text-[#2E8B57] font-bold">汚染された神経を取り除く「根管治療」を行い、被せ物をします</span>。根の治療には回数がかかり、5〜8回程度必要です。
                                    </p>
                                </div>
                                {/* C4 */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">C4（歯根だけ残った状態）</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        歯の頭の部分（歯冠）が崩壊し、根っこ（歯根）だけが残った末期の状態です。<span className="font-bold bg-yellow-100">神経が死ぬと一旦痛みが引くこともあります</span>。
                                        <span className="text-[#2E8B57] font-bold">抜歯となる可能性が高いですが、条件次第で根管治療を行います</span>。治療期間は長期にわたります。
                                    </p>
                                </div>
                            </div>
                            <div className="text-center mt-6">
                                <a
                                    href="/cavity/stages"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    虫歯の進行段階を詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 虫歯の治療方法 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">虫歯の治療方法</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    虫歯の進行度に応じて、<span className="font-bold bg-yellow-100">コンポジットレジン充填、インレー（詰め物）、クラウン（被せ物）、根管治療</span>など、
                                    最適な治療方法をご提案します。保険適用の治療から、審美性や耐久性を重視した自費診療まで、幅広い選択肢をご用意しています。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/cavity/treatment-methods"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    治療方法を詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 虫歯の痛みと対処法 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">虫歯の痛みと対処法</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    急な歯の痛みが出た時の応急処置や、<span className="font-bold bg-yellow-100">痛み止めの正しい使い方、冷やし方</span>など、
                                    自宅でできる対処法をご紹介します。
                                    <span className="text-[#2E8B57] font-bold">痛みは虫歯が進行しているサイン</span>です。応急処置はあくまで一時的なものなので、早めの受診をおすすめします。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/cavity/pain"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    痛みと対処法を詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 虫歯治療の費用 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">虫歯治療の費用</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    虫歯治療の費用は、<span className="font-bold bg-yellow-100">虫歯の進行度と選択する材質によって異なります</span>。
                                    保険診療では経済的負担を抑えられ、自費診療では審美性や耐久性に優れた治療を選択できます。
                                    <span className="text-[#2E8B57] font-bold">医療費控除</span>の対象となる場合もありますので、詳しくはこちらをご覧ください。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/cavity/cost"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    費用について詳しく見る <ArrowRight size={16} />
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
                                        title: "診査・診断",
                                        desc: "レントゲン撮影、口腔内写真撮影、虫歯検査などを行い、現在の状態を詳しく確認します。デジタル診断で虫歯を可視化します。",
                                        imageId: "step1"
                                    },
                                    {
                                        num: "02",
                                        title: "治療計画のご説明",
                                        desc: "検査結果をもとに、治療法や素材、費用、治療期間について詳しくご説明します。ご納得いただいてから治療を開始します。",
                                        imageId: "step2"
                                    },
                                    {
                                        num: "03",
                                        title: "虫歯除去・充填",
                                        desc: "表面麻酔と電動麻酔器で痛みを最小限に。拡大鏡を使用して虫歯部分だけを精密に削り、レジンや詰め物で修復します。",
                                        imageId: "step3"
                                    },
                                    {
                                        num: "04",
                                        title: "噛み合わせ調整",
                                        desc: "詰め物や被せ物の高さを調整し、快適に噛めるようにします。必要に応じて研磨も行います。",
                                        imageId: "step4"
                                    },
                                    {
                                        num: "05",
                                        title: "定期メンテナンス",
                                        desc: "虫歯の再発を防ぐため、定期検診とクリーニング、ブラッシング指導を行います。3〜6ヶ月ごとの受診をお勧めします。",
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
                                                path="/cavity"
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
                                    "治療中・治療後に一時的な痛みや知覚過敏が出ることがあります。",
                                    "虫歯が深い場合、神経を取る根管治療が必要になることがあります。",
                                    "詰め物・被せ物が外れたり、欠けたりすることがあります。",
                                    "定期的なメンテナンスを怠ると、虫歯が再発するリスクがあります。"
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
                                    q: "虫歯治療は痛いですか？",
                                    a: "当院では、表面麻酔、極細の針、電動麻酔器などを使用し、痛みを最小限に抑える工夫をしています。多くの患者様から「思ったより痛くなかった」とのお声をいただいています。"
                                },
                                {
                                    q: "虫歯は放置するとどうなりますか？",
                                    a: "虫歯は自然に治ることはなく、放置すると進行して神経まで達し、激しい痛みが出ます。最終的には歯を失うことになるため、早めの治療をお勧めします。"
                                },
                                {
                                    q: "治療期間はどのくらいですか？",
                                    a: "虫歯の進行度によって異なります。C1の小さな虫歯なら1回で完了しますが、C3の神経まで達した虫歯は5〜8回程度かかります。"
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
