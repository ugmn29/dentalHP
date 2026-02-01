"use client";

import React from 'react';
import { Metadata } from 'next';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { AuthorBio } from '../../../components/AuthorBio';
import { CheckCircle2, ArrowRight, Home, ChevronRight, AlertCircle } from 'lucide-react';

export default function OpenMouthPage() {
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
                            <span className="text-[#5A4D41] font-medium">ポカン口（お口ポカン）の治し方</span>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="py-6 md:py-6 bg-gradient-to-b from-[#FDFBF7] to-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0 bg-[radial-gradient(#C5A572_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    </div>
                    <div className="container mx-auto px-4 max-w-4xl relative z-10">
                        <div className="text-center mb-8">
                            <p className="text-[#C5A572] tracking-[0.3em] font-medium mb-4 text-xs md:text-sm uppercase">
                                OPEN MOUTH TREATMENT
                            </p>
                            <h1 className="text-3xl md:text-5xl font-bold text-[#5A4D41] mb-6 font-serif leading-tight">
                                ポカン口（お口ポカン）の<br className="md:hidden" />治し方
                            </h1>
                            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-8"></div>
                            <p className="text-lg md:text-xl text-[#8D8070] leading-relaxed max-w-3xl mx-auto">
                                いつも口が開いている「ポカン口」は、<br />
                                歯並び・顔つき・健康に深刻な影響を与えます。<br />
                                30.7%の子供が該当する、現代の大きな問題です。
                            </p>
                        </div>
                    </div>
                </section>

                {/* 結論セクション */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="bg-gradient-to-br from-[#e8f2ed] to-[#f0f8f4] rounded-3xl p-8 md:p-12 shadow-lg border-2 border-[#c8ddd0]">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#395b45] mb-6 font-serif text-center">
                                結論：ポカン口は「口唇閉鎖不全」という病態
                            </h2>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p className="text-lg">
                                    <span className="font-bold text-[#395b45]">ポカン口は、正式には「口唇閉鎖不全」と呼ばれ、唇の筋力不足や口呼吸の習慣により、無意識に口が開いてしまう状態</span>です。
                                    日本小児歯科学会の調査では、<span className="font-bold bg-yellow-100">30.7%の子供が口唇閉鎖不全に該当</span>しており、決して珍しいことではありません。
                                </p>
                                <p className="text-lg">
                                    放置すると、<span className="font-bold bg-yellow-100">出っ歯、受け口、顔が長くなる（アデノイド顔貌）、風邪をひきやすい</span>などの問題が起こります。
                                    当院では、<span className="text-[#2E8B57] font-bold">「あいうべ体操」「MFT（口腔筋機能療法）」「マイオブレース」</span>など、
                                    お子様の年齢や状態に合わせたトレーニング方法で、ポカン口を改善します。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* メインコンテンツ */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-5xl">

                        {/* ポカン口（口唇閉鎖不全）とは */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">ポカン口（口唇閉鎖不全）とは</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    ポカン口（お口ポカン）とは、<span className="font-bold bg-yellow-100">リラックスしているときに無意識に口が開いてしまう状態</span>のことです。
                                    医学的には「口唇閉鎖不全」と呼ばれ、唇を閉じる筋力が弱い、または口呼吸の習慣があることが原因です。
                                </p>
                                <p>
                                    <span className="text-[#2E8B57] font-bold">日本小児歯科学会の調査（2019年）によると、3歳〜12歳の子供の30.7%がポカン口に該当</span>しており、
                                    約3人に1人という高い割合です。テレビを見ているとき、ゲームをしているとき、ボーッとしているときなど、
                                    お子様の口が開いていないかチェックしてみましょう。
                                </p>
                            </div>
                        </div>

                        {/* ポカン口のセルフチェック */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">ポカン口のセルフチェック</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <p className="text-center text-[#8D8070] mb-8">
                                以下の項目に3つ以上当てはまる場合は、ポカン口の可能性が高いです。
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    "テレビを見ているときに口が開いている",
                                    "食事中にクチャクチャ音がする",
                                    "寝ているときに口を開けている",
                                    "朝起きたときに喉が乾燥している",
                                    "いびきをかく",
                                    "風邪をひきやすい",
                                    "唇が乾燥しやすい",
                                    "発音が不明瞭（サ行、タ行が苦手）",
                                    "姿勢が悪い（猫背）"
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-[#C5A572] flex-shrink-0 mt-0.5" />
                                        <span className="text-[#5A4D41] font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ポカン口が与える悪影響 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">ポカン口が与える悪影響</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-6">
                                {/* 歯並びへの影響 */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-[#C5A572]">
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 bg-[#C5A572] text-white rounded-full flex items-center justify-center text-sm">1</span>
                                        歯並びへの影響（出っ歯・ガタガタ）
                                    </h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        口が開いていると、<span className="font-bold bg-yellow-100">舌が下がり、上あごの成長が不十分</span>になります。
                                        また、唇の力で前歯を押さえることができないため、<span className="text-[#2E8B57] font-bold">出っ歯、ガタガタの歯並び（叢生）、すきっ歯</span>になりやすくなります。
                                    </p>
                                </div>

                                {/* 顔つきへの影響 */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-[#C5A572]">
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 bg-[#C5A572] text-white rounded-full flex items-center justify-center text-sm">2</span>
                                        顔つきへの影響（顔が長くなる）
                                    </h4>
                                    <p className="text-[#5A4D41] leading-loose mb-4">
                                        ポカン口が続くと、<span className="font-bold bg-yellow-100">顔が縦に長くなり、あごが後退し、表情が乏しくなる「アデノイド顔貌」</span>と呼ばれる顔つきになることがあります。
                                        一度骨格が変わると、元に戻すのは非常に困難です。
                                    </p>
                                    <div className="bg-[#FFF4E6] p-4 rounded-xl">
                                        <p className="text-sm text-[#8D8070] leading-relaxed">
                                            <span className="font-bold">成長期（12歳頃まで）に改善することが重要</span>です。大人になってからでは、外科手術が必要になる場合もあります。
                                        </p>
                                    </div>
                                </div>

                                {/* 健康への影響 */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-[#C5A572]">
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 bg-[#C5A572] text-white rounded-full flex items-center justify-center text-sm">3</span>
                                        健康への影響（風邪・アレルギー）
                                    </h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        口呼吸になると、<span className="text-[#2E8B57] font-bold">鼻のフィルター機能が使えず、ウイルスや細菌が直接体内に入る</span>ため、
                                        風邪をひきやすい、扁桃炎になりやすい、アレルギー症状が悪化しやすいといった問題が起こります。
                                        また、口が乾燥することで、虫歯や歯周病のリスクも高まります。
                                    </p>
                                </div>

                                {/* 発音・睡眠への影響 */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-[#C5A572]">
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 bg-[#C5A572] text-white rounded-full flex items-center justify-center text-sm">4</span>
                                        発音・睡眠への影響
                                    </h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        舌の位置が下がることで、<span className="font-bold bg-yellow-100">サ行・タ行の発音が不明瞭</span>になることがあります。
                                        また、睡眠時無呼吸症候群のリスクが高まり、<span className="text-[#2E8B57] font-bold">睡眠の質が下がり、集中力の低下や成長ホルモンの分泌不足</span>につながります。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ポカン口の原因 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">ポカン口の原因</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="text-lg font-bold text-[#5A4D41] mb-2">口周りの筋力不足（口輪筋の弱さ）</h4>
                                    <p className="text-[#8D8070]">唇を閉じる筋肉（口輪筋）が弱いと、無意識に口が開いてしまいます。現代の子供は柔らかい食べ物が中心で、噛む回数が減っているため、筋力不足になりがちです。</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="text-lg font-bold text-[#5A4D41] mb-2">鼻づまり（アレルギー性鼻炎、副鼻腔炎など）</h4>
                                    <p className="text-[#8D8070]">鼻が詰まっていると、自然と口で呼吸するようになり、ポカン口が習慣化します。</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="text-lg font-bold text-[#5A4D41] mb-2">アデノイド・扁桃肥大</h4>
                                    <p className="text-[#8D8070]">喉の奥のアデノイドや扁桃腺が大きいと、鼻呼吸がしにくくなります。</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="text-lg font-bold text-[#5A4D41] mb-2">舌の位置の異常（低位舌）</h4>
                                    <p className="text-[#8D8070]">舌が正しい位置（上あごにピッタリついている状態）にないと、口が開きやすくなります。</p>
                                </div>
                            </div>
                        </div>

                        {/* ポカン口の治し方 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">ポカン口の治し方</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-8">
                                {/* あいうべ体操 */}
                                <div className="bg-gradient-to-br from-[#e8f2ed] to-white rounded-2xl p-6 md:p-8 shadow-lg">
                                    <h4 className="text-xl font-bold text-[#395b45] font-serif mb-4 border-b-2 border-[#c8ddd0] pb-3">
                                        あいうべ体操
                                    </h4>
                                    <p className="text-[#5A4D41] leading-loose mb-6">
                                        <span className="font-bold bg-yellow-100">口周りの筋肉を鍛えて、自然と口を閉じられるようにするトレーニング</span>です。
                                        福岡のみらいクリニック・今井一彰医師が考案し、全国の学校や医療機関で採用されています。
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
                                    <div className="mt-6 bg-white p-4 rounded-xl">
                                        <p className="text-sm text-[#8D8070] leading-relaxed">
                                            <span className="font-bold">ポイント：</span>「あ」「い」「う」は1秒ずつ、「べ」は舌を下に出して1秒キープ。
                                            声は出さなくてOKです。歯磨きの前など、タイミングを決めて習慣化しましょう。
                                        </p>
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
                                        舌を上あごにピッタリつける練習、唇の閉鎖力を強化する練習、正しい飲み込み方の習得などを行います。
                                    </p>
                                </div>

                                {/* マイオブレース */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-[#C5A572]">
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">
                                        マイオブレース
                                    </h4>
                                    <p className="text-[#5A4D41] leading-loose mb-4">
                                        <span className="font-bold bg-yellow-100">マウスピース型の装置を装着することで、舌を正しい位置に誘導し、口を自然と閉じる習慣をつけます</span>。
                                        日中1時間と就寝時の装着だけでOKです。
                                        口呼吸から鼻呼吸への改善をサポートし、歯並びの悪化も予防できます。
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
                                        アレルギー性鼻炎や副鼻腔炎が原因の場合は、まず耳鼻咽喉科での治療が必要です。
                                        鼻が通るようになってから、あいうべ体操やMFTで口を閉じる習慣をつけていきます。
                                        必要に応じて、信頼できる耳鼻咽喉科をご紹介いたします。
                                    </p>
                                </div>

                                {/* 生活習慣の見直し */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-[#C5A572]">
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">
                                        生活習慣の見直し
                                    </h4>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-[#C5A572] flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-bold text-[#5A4D41]">よく噛んで食べる</p>
                                                <p className="text-sm text-[#8D8070]">硬めの食材を取り入れ、噛む回数を増やすことで、口周りの筋力がつきます。</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-[#C5A572] flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-bold text-[#5A4D41]">姿勢を正す</p>
                                                <p className="text-sm text-[#8D8070]">猫背になると、気道が狭くなり口呼吸になりやすくなります。</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-[#C5A572] flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-bold text-[#5A4D41]">「口を閉じてね」と声をかける</p>
                                                <p className="text-sm text-[#8D8070]">気づいたら優しく声をかけて、意識させることも大切です。</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* メリット・デメリット */}
                        <div className="mb-16 bg-white rounded-2xl shadow-lg p-6 md:p-10">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* メリット */}
                                <div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-6 pb-3 border-b-2 border-[#C5A572] font-serif">
                                        ポカン口を治すメリット
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "出っ歯やガタガタの歯並びを予防できる",
                                            "顔が長くなるのを防ぎ、バランスの良い顔つきになる",
                                            "風邪をひきにくくなる",
                                            "睡眠の質が向上し、集中力がアップする",
                                            "発音が明瞭になる",
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
                                            "効果が出るまでに3ヶ月〜1年程度かかる",
                                            "鼻づまりが原因の場合は、まず耳鼻科での治療が必要",
                                            "すでに骨格が変わってしまっている場合は、完全には戻らない"
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
                                    q: "ポカン口は自然に治りますか？",
                                    a: "自然に治ることはほとんどありません。放置すると、歯並びや顔つきに影響が出てしまいます。早めにトレーニングを始めることで、確実に改善できます。"
                                },
                                {
                                    q: "何歳から治療を始められますか？",
                                    a: "3歳頃から「あいうべ体操」などのトレーニングを始められます。早ければ早いほど効果的ですので、気になったらすぐにご相談ください。"
                                },
                                {
                                    q: "あいうべ体操はどのくらい続ければ効果が出ますか？",
                                    a: "個人差がありますが、1日30セットを3ヶ月〜半年程度続けることで、多くのお子様に効果が見られます。重要なのは毎日継続することです。"
                                },
                                {
                                    q: "大人のポカン口も治りますか？",
                                    a: "大人でも改善は可能ですが、子供のうちに治す方が圧倒的に早く、確実です。特に骨格が変わってしまっている場合は、完全には戻らないこともあります。"
                                },
                                {
                                    q: "30.7%の子供がポカン口というデータは本当ですか？",
                                    a: "はい、日本小児歯科学会の調査（2019年）によると、3歳〜12歳の子供の30.7%が口唇閉鎖不全（ポカン口）に該当します。決して珍しいことではありません。"
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
                                    title: "子供の口呼吸を治す方法",
                                    description: "ポカン口の原因である口呼吸を改善する方法",
                                    link: "/oral-education/mouth-breathing",
                                    icon: "😮"
                                },
                                {
                                    title: "０歳からの口育",
                                    description: "ポカン口予防は0歳から。正しい呼吸と飲み込みを身につける",
                                    link: "/oral-education",
                                    icon: "👶"
                                },
                                {
                                    title: "マイオブレース",
                                    description: "マウスピース型装置でポカン口を改善",
                                    link: "/kidsortho/appliances/functional-mouthpiece",
                                    icon: "🦷"
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
                            お子様のポカン口が気になったら、<br className="md:hidden" />お気軽にご相談ください
                        </h2>
                        <p className="text-[#F0EAE0] mb-10 max-w-2xl mx-auto">
                            30.7%の子供が該当する「ポカン口」。<br />
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
                {/* 監修者情報 */}
                <div className="container mx-auto px-4 pt-2 pb-16">
                    <AuthorBio />
                </div>
            </main>

            <Footer />
        </div>
    );
}
