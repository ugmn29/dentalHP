"use client";

import React from 'react';
import { Metadata } from 'next';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { CheckCircle2, ArrowRight, Home, ChevronRight, AlertCircle } from 'lucide-react';

export default function MouthBreathingPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-[#4A4A4A]">
            <Header />

            <main>
                {/* Breadcrumb */}
                <div className="bg-[#FDFBF7] py-3 border-b border-gray-100">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex items-center gap-2 text-sm text-[#8D8070]">
                            <Home size={16} />
                            <ChevronRight size={14} />
                            <a href="/oral-education" className="hover:text-[#C5A572] transition-colors">０歳からの口育</a>
                            <ChevronRight size={14} />
                            <span className="text-[#5A4D41] font-medium">子供の口呼吸を治す方法</span>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="py-2 md:py-2 bg-gradient-to-b from-[#FDFBF7] to-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0 bg-[radial-gradient(#C5A572_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    </div>
                    <div className="container mx-auto px-4 max-w-4xl relative z-10">
                        <div className="text-center mb-8">
                            <p className="text-[#C5A572] tracking-[0.3em] font-medium mb-4 text-xs md:text-sm uppercase">
                                MOUTH BREATHING TREATMENT
                            </p>
                            <h1 className="text-3xl md:text-5xl font-bold text-[#5A4D41] mb-6 font-serif leading-tight">
                                子供の口呼吸を治す方法
                            </h1>
                            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-8"></div>
                            <p className="text-lg md:text-xl text-[#8D8070] leading-relaxed max-w-3xl mx-auto">
                                口呼吸は、歯並び・顔つき・健康に大きな影響を与えます。<br />
                                早期発見と適切なトレーニングで、鼻呼吸への改善を目指しましょう。
                            </p>
                        </div>
                    </div>
                </section>

                {/* 結論セクション */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="bg-gradient-to-br from-[#e8f2ed] to-[#f0f8f4] rounded-3xl p-8 md:p-12 shadow-lg border-2 border-[#c8ddd0]">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#395b45] mb-6 font-serif text-center">
                                結論：口呼吸は早期改善が重要
                            </h2>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p className="text-lg">
                                    <span className="font-bold text-[#395b45]">口呼吸は、単なる呼吸の癖ではありません。</span>
                                    放置すると、<span className="font-bold bg-yellow-100">歯並びの悪化、顔の骨格の変化、集中力の低下、風邪をひきやすくなる</span>など、
                                    お子様の成長と健康に深刻な影響を与えます。
                                </p>
                                <p className="text-lg">
                                    当院では、<span className="text-[#2E8B57] font-bold">「あいうべ体操」「MFT（口腔筋機能療法）」「マイオブレース」</span>など、
                                    お子様の年齢や状態に合わせたトレーニング方法をご提案します。
                                    早期に鼻呼吸へ改善することで、将来の矯正治療が不要になる、または期間が大幅に短縮できる可能性が高まります。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* メインコンテンツ */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-5xl">

                        {/* 口呼吸とは */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">口呼吸とは</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    口呼吸とは、<span className="font-bold bg-yellow-100">鼻ではなく口で呼吸をしてしまう状態</span>のことです。
                                    本来、人間は鼻で呼吸するように設計されていますが、鼻づまりや習慣により、口で呼吸してしまうお子様が増えています。
                                </p>
                                <p>
                                    <span className="text-[#2E8B57] font-bold">30.7%の子供が「口唇閉鎖不全」</span>（お口ポカン）という統計データがあり、
                                    口呼吸は現代の子供たちにとって非常に身近な問題です。
                                </p>
                            </div>
                        </div>

                        {/* 口呼吸のチェックポイント */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">口呼吸のチェックポイント</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <p className="text-center text-[#8D8070] mb-8">
                                以下の項目に3つ以上当てはまる場合は、口呼吸の可能性が高いです。
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    "いつも口が開いている（お口ポカン）",
                                    "寝ているときに口を開けている",
                                    "いびきをかく",
                                    "朝起きたときに口が乾いている",
                                    "風邪をひきやすい",
                                    "鼻がよく詰まる",
                                    "食べるときにクチャクチャ音がする",
                                    "姿勢が悪い（猫背）",
                                    "集中力が続かない"
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-[#C5A572] flex-shrink-0 mt-0.5" />
                                        <span className="text-[#5A4D41] font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 口呼吸が与える悪影響 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">口呼吸が与える悪影響</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-6">
                                {/* 歯並びへの影響 */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-[#C5A572]">
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 bg-[#C5A572] text-white rounded-full flex items-center justify-center text-sm">1</span>
                                        歯並びへの影響
                                    </h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        口呼吸をしていると、<span className="font-bold bg-yellow-100">舌の位置が下がり、上あごの成長が不十分</span>になります。
                                        その結果、<span className="text-[#2E8B57] font-bold">出っ歯、受け口、叢生（ガタガタの歯並び）</span>などのリスクが高まります。
                                    </p>
                                </div>

                                {/* 顔つきへの影響 */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-[#C5A572]">
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 bg-[#C5A572] text-white rounded-full flex items-center justify-center text-sm">2</span>
                                        顔つきへの影響（アデノイド顔貌）
                                    </h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        長期間の口呼吸により、<span className="font-bold bg-yellow-100">顔が縦に長くなり、あごが後退する「アデノイド顔貌」</span>と呼ばれる特徴的な顔つきになることがあります。
                                        表情が乏しくなり、見た目にも影響します。
                                    </p>
                                </div>

                                {/* 健康への影響 */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-[#C5A572]">
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 bg-[#C5A572] text-white rounded-full flex items-center justify-center text-sm">3</span>
                                        健康への影響
                                    </h4>
                                    <p className="text-[#5A4D41] leading-loose mb-4">
                                        鼻には、空気中のウイルスや細菌をフィルタリングする機能がありますが、口呼吸ではそれができません。
                                        そのため、<span className="text-[#2E8B57] font-bold">風邪をひきやすい、アレルギー症状が出やすい、扁桃炎になりやすい</span>といった問題が起こります。
                                    </p>
                                    <div className="bg-[#FFF4E6] p-4 rounded-xl">
                                        <p className="text-sm text-[#8D8070] leading-relaxed">
                                            また、睡眠時無呼吸症候群のリスクも高まり、<span className="font-bold">睡眠の質が下がり、集中力の低下や成長ホルモンの分泌不足</span>につながります。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 口呼吸の原因 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">口呼吸の原因</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="text-lg font-bold text-[#5A4D41] mb-2">鼻づまり（アレルギー性鼻炎、副鼻腔炎など）</h4>
                                    <p className="text-[#8D8070]">鼻がつまっていると、自然と口で呼吸するようになります。耳鼻咽喉科での治療が必要な場合があります。</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="text-lg font-bold text-[#5A4D41] mb-2">アデノイド・扁桃肥大</h4>
                                    <p className="text-[#8D8070]">喉の奥のアデノイドや扁桃腺が大きいと、鼻呼吸がしにくくなります。</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="text-lg font-bold text-[#5A4D41] mb-2">口周りの筋力不足</h4>
                                    <p className="text-[#8D8070]">唇や舌の筋力が弱いと、口を閉じ続けることが難しくなります。</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="text-lg font-bold text-[#5A4D41] mb-2">習慣・癖</h4>
                                    <p className="text-[#8D8070]">一度口呼吸が習慣になると、鼻づまりが治っても口呼吸を続けてしまうことがあります。</p>
                                </div>
                            </div>
                        </div>

                        {/* 口呼吸の治し方 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">口呼吸の治し方</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-8">
                                {/* あいうべ体操 */}
                                <div className="bg-gradient-to-br from-[#e8f2ed] to-white rounded-2xl p-6 md:p-8 shadow-lg">
                                    <h4 className="text-xl font-bold text-[#395b45] font-serif mb-4 border-b-2 border-[#c8ddd0] pb-3">
                                        あいうべ体操
                                    </h4>
                                    <p className="text-[#5A4D41] leading-loose mb-6">
                                        福岡のみらいクリニック・今井一彰医師が考案した、<span className="font-bold bg-yellow-100">口周りの筋肉を鍛えて鼻呼吸を促すトレーニング</span>です。
                                        1日30セット（3回に分けてもOK）を目安に、毎日続けましょう。
                                    </p>
                                    <div className="grid md:grid-cols-4 gap-4">
                                        {[
                                            { step: "あ", desc: "口を大きく開ける" },
                                            { step: "い", desc: "口を横に広げる" },
                                            { step: "う", desc: "口を前に突き出す" },
                                            { step: "べ", desc: "舌を下に出す" }
                                        ].map((item, index) => (
                                            <div key={index} className="bg-white p-4 rounded-xl text-center shadow-sm">
                                                <div className="text-3xl font-bold text-[#395b45] mb-2 font-serif">{item.step}</div>
                                                <p className="text-sm text-[#8D8070]">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* MFT */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-[#C5A572]">
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">
                                        MFT（口腔筋機能療法）
                                    </h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        歯科医院で行う、<span className="font-bold bg-yellow-100">舌や唇の正しい位置や動きを習得するトレーニング</span>です。
                                        当院では、お子様の状態に合わせたMFTプログラムをご提案します。
                                        舌のポジション改善、唇の閉鎖力強化、正しい飲み込み方の習得などを行います。
                                    </p>
                                </div>

                                {/* マイオブレース */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-[#C5A572]">
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">
                                        マイオブレース
                                    </h4>
                                    <p className="text-[#5A4D41] leading-loose mb-4">
                                        <span className="font-bold bg-yellow-100">マウスピース型の装置を装着することで、口呼吸から鼻呼吸への改善をサポート</span>します。
                                        日中1時間と就寝時の装着だけでOKです。
                                        舌の位置を正しい位置に誘導し、自然と鼻呼吸ができるようになります。
                                    </p>
                                    <div className="text-center">
                                        <a
                                            href="/kidsortho/appliances/functional-mouthpiece"
                                            className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                        >
                                            マイオブレースについて詳しく見る <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </div>

                                {/* 鼻づまりの治療 */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-[#C5A572]">
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">
                                        鼻づまりの治療（耳鼻咽喉科との連携）
                                    </h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        アレルギー性鼻炎や副鼻腔炎が原因の場合は、耳鼻咽喉科での治療が必要です。
                                        必要に応じて、信頼できる耳鼻咽喉科をご紹介いたします。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* メリット・デメリット */}
                        <div className="mb-16 bg-white rounded-2xl shadow-lg p-6 md:p-10">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* メリット */}
                                <div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-6 pb-3 border-b-2 border-[#C5A572] font-serif">
                                        鼻呼吸に改善するメリット
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "歯並びが悪くなるリスクが減る",
                                            "顔つきが引き締まり、表情が豊かになる",
                                            "風邪をひきにくくなる",
                                            "睡眠の質が向上し、集中力がアップする",
                                            "将来の矯正治療が不要になる、または期間が短くなる"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle2 size={20} className="text-[#2E8B57] flex-shrink-0 mt-0.5" />
                                                <span className="text-[#5A4D41] leading-relaxed">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* デメリット */}
                                <div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-6 pb-3 border-b-2 border-[#C5A572] font-serif">
                                        トレーニングのデメリット
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "毎日の継続が必要（親御様のサポートが不可欠）",
                                            "効果が出るまでに数ヶ月〜1年程度かかる",
                                            "鼻づまりが原因の場合は、まず耳鼻科での治療が必要"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <AlertCircle size={20} className="text-[#E89B4D] flex-shrink-0 mt-0.5" />
                                                <span className="text-[#5A4D41] leading-relaxed">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <p className="text-[#C5A572] tracking-[0.2em] font-bold mb-2">Q&A</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">よくあるご質問</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    q: "何歳から口呼吸の改善トレーニングを始められますか？",
                                    a: "3歳頃から始められます。ただし、0歳〜2歳でも、授乳姿勢や生活習慣の見直しで予防することができます。早ければ早いほど効果的ですので、お気軽にご相談ください。"
                                },
                                {
                                    q: "あいうべ体操はどのくらい続ければ効果が出ますか？",
                                    a: "個人差がありますが、1日30セットを3ヶ月〜半年程度続けることで、多くのお子様に効果が見られます。継続が大切ですので、歯磨きの前など、習慣化できるタイミングで行いましょう。"
                                },
                                {
                                    q: "鼻づまりがある場合はどうすればいいですか？",
                                    a: "まずは耳鼻咽喉科で鼻づまりの治療を受けることをお勧めします。鼻が通るようになってから、あいうべ体操やMFTで鼻呼吸の習慣をつけていきます。必要に応じて、信頼できる耳鼻咽喉科をご紹介いたします。"
                                },
                                {
                                    q: "口呼吸は大人になっても治りますか？",
                                    a: "大人でも改善は可能ですが、子供のうちに治す方が圧倒的に早く、確実です。特に顔の骨格が成長する時期（12歳頃まで）に改善することで、顔つきへの影響を最小限に抑えられます。"
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

                {/* Related Pages */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif mb-4">
                                関連ページ
                            </h2>
                            <p className="text-[#8D8070]">
                                口育についてもっと詳しく知りたい方へ
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "０歳からの口育",
                                    description: "口呼吸予防は0歳から。正しい呼吸と飲み込みを身につける",
                                    link: "/oral-education",
                                    icon: "👶"
                                },
                                {
                                    title: "マイオブレース",
                                    description: "マウスピース型装置で口呼吸から鼻呼吸へ",
                                    link: "/kidsortho/appliances/functional-mouthpiece",
                                    icon: "🦷"
                                },
                                {
                                    title: "小児矯正の費用",
                                    description: "口育・小児矯正にかかる費用について",
                                    link: "/kidsortho/cost",
                                    icon: "💰"
                                }
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
                                >
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-lg font-bold text-[#5A4D41] mb-2 font-serif group-hover:text-[#C5A572] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#8D8070] text-sm leading-relaxed mb-4">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-[#C5A572] font-bold text-sm group-hover:gap-3 transition-all">
                                        <span>詳しく見る</span>
                                        <ArrowRight size={16} />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-2 bg-[#5A4D41] text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 font-serif">
                            お子様の口呼吸が気になったら、<br className="md:hidden" />お気軽にご相談ください
                        </h2>
                        <p className="text-[#F0EAE0] mb-10 max-w-2xl mx-auto">
                            早期発見・早期改善で、お子様の健やかな成長をサポートします。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
                            <a href="#" className="bg-[#C5A572] hover:bg-[#B59562] text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all flex items-center justify-center gap-3 text-lg flex-1">
                                24時間 WEB予約
                            </a>
                            <a href="tel:03-1234-5678" className="bg-transparent border-2 border-[#C5A572] hover:bg-[#C5A572]/10 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-3 text-lg flex-1">
                                03-1234-5678
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
