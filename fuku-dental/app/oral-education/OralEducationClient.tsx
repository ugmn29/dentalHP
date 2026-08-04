"use client";

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AuthorBio } from '../../components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import { FeatureSection } from '@/components/FeatureSection';
import { CheckCircle2, ArrowRight, Calendar, Phone, ChevronRight } from 'lucide-react';
import { FaqSection } from '@/components/FaqSection';
import { MobileTreatmentHero } from '@/components/MobileTreatmentHero';

export default function OralEducationPage() {

    return (
        <div className="min-h-screen bg-white font-sans text-[#4A4A4A] overflow-x-hidden" style={{ wordBreak: 'normal', overflowWrap: 'anywhere' }}>
            <Header />

            <main>
                <MobileTreatmentHero
                    imageSrc="/images/pages/mobile-heroes/oral-education-hero.webp"
                    tabletSrc="/images/pages/mobile-heroes/oral-education-hero-tablet.webp"
                    desktopSrc="/images/pages/mobile-heroes/oral-education-hero-desktop.webp"
                    title="0歳からのこども歯科・予防"
                    alt="はじめての歯医者を、楽しい経験に 0歳からのこども歯科・予防"
                />

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
                            Fデンタルオフィス 豊洲プライムスクエア院のこども歯科は<br />
                            口育と予防でお口の成長を支えます
                        </h2>
                    </div>
                </section>

                <FeatureSection
                    title="当院の特徴"
                    pagePath="/oral-education"
                    features={[
                        {
                            no: "01",
                            label: "Early Start",
                            title: "0歳からのアプローチ",
                            highlight: "お口の成長を早期から支える",
                            body: "歯が生える前から、授乳姿勢・抱っこ・離乳食・噛む練習まで、将来の歯並びと口腔機能につながる土台づくりをサポートします。",
                            imageId: "医師と親子が対面で話している場面",
                            imageAlt: "親子が歯科医師に0歳からのこども歯科と予防について相談している様子",
                        },
                        {
                            no: "02",
                            label: "Preventive Care",
                            title: "虫歯予防まで一緒に",
                            highlight: "フッ素・シーラント・定期検診",
                            body: "フッ素塗布、シーラント、定期的なチェックで、虫歯になる前の予防を重視します。乳歯の虫歯も、永久歯や歯並びに影響するため早めの管理が大切です。",
                            imageId: "口腔内写真撮影と態癖チェック",
                            imageAlt: "こどものお口を確認しながら予防処置を説明している様子",
                        },
                        {
                            no: "03",
                            label: "Home Care",
                            title: "親子で続ける歯みがき",
                            highlight: "仕上げみがきと生活習慣",
                            body: "年齢に合わせた仕上げみがきの方法、歯ブラシの選び方、おやつや食べ方の工夫まで、ご家庭で続けやすい形でお伝えします。",
                            imageId: "子供がトレーニング中で衛生士が見守る場面",
                            imageAlt: "歯科衛生士が子供のトレーニングを見守っている様子",
                        },
                        {
                            no: "04",
                            label: "Step Up",
                            title: "怖くない通院体験",
                            highlight: "歯医者嫌いにしない工夫",
                            body: "いきなり治療を始めるのではなく、診療台に座る、器具に触れる、お口を開けるなど、できることを少しずつ増やしていきます。",
                            imageId: "笑顔の子供とGoodサイン",
                            imageAlt: "歯科医院で笑顔の子供が安心している様子",
                        },
                        {
                            no: "05",
                            label: "Oral Function",
                            title: "口呼吸・お口ぽかんへ対応",
                            highlight: "歯並びの原因にアプローチ",
                            body: "口呼吸、舌の位置、飲み込み方、指しゃぶりなどの癖を確認し、必要に応じてMFTやプレオルソなどで歯並びが悪くなる原因に働きかけます。",
                            imageId: "子供が風船やシャボン玉で遊んでいるイラスト",
                            imageAlt: "こどもが遊びながらお口周りのトレーニングをしているイラスト",
                        },
                    ]}
                />

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

                        {/* こども歯科・予防で行うこと */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">こども歯科・予防で行うこと</h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="grid gap-5 md:grid-cols-3">
                                {[
                                    {
                                        id: "fluoride",
                                        title: "フッ素・シーラント",
                                        desc: "歯質を強くするフッ素塗布と、奥歯の溝を守るシーラントで虫歯を予防します。"
                                    },
                                    {
                                        id: "brushing",
                                        title: "歯みがき・仕上げみがき",
                                        desc: "年齢や歯並びに合わせて、親子で続けやすい磨き方とケア用品をお伝えします。"
                                    },
                                    {
                                        id: "overcoming-fear",
                                        title: "歯医者嫌いにしない通院",
                                        desc: "お子様のペースに合わせたステップアップで、怖さを減らしながら通える環境を作ります。"
                                    }
                                ].map((item) => (
                                    <div key={item.id} id={item.id} className="rounded-2xl border border-[#E8E0D4] bg-white p-6 shadow-sm">
                                        <p className="mb-3 text-[11px] tracking-[0.25em] text-[#C5A572]">PREVENTION</p>
                                        <h4 className="mb-4 font-serif text-xl font-bold text-[#5A4D41]">{item.title}</h4>
                                        <p className="text-sm leading-[2] text-[#8D8070]">{item.desc}</p>
                                    </div>
                                ))}
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
                                    「あいうべ体操」や口周りの筋力トレーニング（MFT）、プレオルソなどの装置を使った治療など、お子様の状態に合わせた方法をご提案します。
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
                                    当院では、口を閉じる筋力を鍛えるトレーニングや、プレオルソなどの装置を使った治療で、ポカン口の改善をサポートします。
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

                        {/* プレオルソ */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">プレオルソ</h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    プレオルソは、<span className="font-bold bg-yellow-100">マウスピース型の装置とトレーニングを組み合わせた小児矯正治療</span>です。
                                    従来のワイヤー矯正のように「歯を動かす」のではなく、「歯並びが悪くなる根本原因（口呼吸、舌の位置、飲み込み方の癖）」にアプローチします。
                                </p>
                                <p>
                                    <span className="text-[#395b45] font-bold">日中2時間と就寝時の装着を目安に、特に就寝時の継続を大切にしながら</span>、
                                    正しい呼吸・舌の位置・飲み込み方の習得をサポートします。主に3〜10歳前後のお子様に使用する治療法です。
                                </p>
                                <p>
                                    プレオルソの詳しい仕組み、効果、費用、治療の流れについては、専用ページをご覧ください。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/kidsortho/appliances/functional-mouthpiece"
                                    className="inline-flex items-center gap-2 text-[#395b45] hover:text-[#2d4835] transition-colors border-b border-[#395b45] pb-1 font-medium"
                                >
                                    プレオルソについて詳しく見る <ArrowRight size={16} />
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
                                        imageId: "医師と親子が対面で話している場面"
                                    },
                                    {
                                        num: "02",
                                        title: "検査・診断",
                                        desc: "お口の写真撮影、レントゲン撮影（必要な場合）、態癖（たいへき）のチェックなどを行い、問題の原因を探ります。",
                                        imageId: "口腔内写真撮影と態癖チェック"
                                    },
                                    {
                                        num: "03",
                                        title: "トレーニング指導",
                                        desc: "お子様の年齢や状態に合わせたトレーニング方法を指導します。親子で一緒に練習していただきます。",
                                        imageId: "子供がトレーニング中で衛生士が見守る場面"
                                    },
                                    {
                                        num: "04",
                                        title: "定期チェック",
                                        desc: "1ヶ月〜3ヶ月ごとに来院いただき、トレーニングの成果やお口の変化を確認します。",
                                        imageId: "笑顔の子供とGoodサイン"
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
                <FaqSection
                  title="よくあるご質問"
                  items={[
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
