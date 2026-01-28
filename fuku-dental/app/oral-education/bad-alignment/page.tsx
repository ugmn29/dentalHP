"use client";

import React from 'react';
import { Metadata } from 'next';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { CheckCircle2, ArrowRight, Home, ChevronRight, AlertCircle, XCircle } from 'lucide-react';

export default function BadAlignmentPage() {
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
                            <span className="text-[#5A4D41] font-medium">子供の歯並びが悪くなる原因と予防</span>
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
                                BAD ALIGNMENT PREVENTION
                            </p>
                            <h1 className="text-3xl md:text-5xl font-bold text-[#5A4D41] mb-6 font-serif leading-tight">
                                子供の歯並びが<br className="md:hidden" />悪くなる原因と予防
                            </h1>
                            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-8"></div>
                            <p className="text-lg md:text-xl text-[#8D8070] leading-relaxed max-w-3xl mx-auto">
                                歯並びが悪くなる原因の80%は「生活習慣」です。<br />
                                遺伝だけではありません。0歳からの予防で、<br className="md:hidden" />きれいな歯並びを手に入れましょう。
                            </p>
                        </div>
                    </div>
                </section>

                {/* 結論セクション */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="bg-gradient-to-br from-[#e8f2ed] to-[#f0f8f4] rounded-3xl p-8 md:p-12 shadow-lg border-2 border-[#c8ddd0]">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#395b45] mb-6 font-serif text-center">
                                結論：歯並びの80%は生活習慣で決まる
                            </h2>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p className="text-lg">
                                    <span className="font-bold text-[#395b45]">「歯並びは遺伝だから仕方ない」と思っていませんか？</span>
                                    実は、<span className="font-bold bg-yellow-100">歯並びが悪くなる原因の80%は、口呼吸・指しゃぶり・舌癖などの「生活習慣」</span>です。
                                    遺伝の影響は約20%に過ぎません。
                                </p>
                                <p className="text-lg">
                                    特に、<span className="text-[#2E8B57] font-bold">「口呼吸」「ポカン口」「指しゃぶり」「舌の位置」</span>の4つが、歯並びに最も大きな影響を与えます。
                                    当院では、0歳からの「口育」を通じて、これらの悪い習慣を改善し、<span className="font-bold bg-yellow-100">将来の矯正治療が不要になる、または期間が大幅に短縮できる</span>よう、お子様の成長をサポートします。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* メインコンテンツ */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-5xl">

                        {/* なぜ歯並びが悪くなるのか */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">なぜ歯並びが悪くなるのか</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-8">
                                <p>
                                    歯並びが悪くなる原因は、大きく分けて<span className="font-bold bg-yellow-100">「先天的要因（遺伝）」と「後天的要因（生活習慣）」</span>の2つです。
                                    多くの親御様は「遺伝だから仕方ない」と思いがちですが、実際には<span className="text-[#2E8B57] font-bold">後天的要因が80%</span>を占めています。
                                </p>
                                <p>
                                    つまり、<span className="font-bold bg-yellow-100">0歳からの生活習慣を見直すことで、歯並びの悪化を予防できる</span>のです。
                                </p>
                            </div>

                            {/* 遺伝 vs 生活習慣 */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-[#8D8070]">
                                    <h4 className="text-lg font-bold text-[#5A4D41] mb-4">先天的要因（遺伝）約20%</h4>
                                    <ul className="space-y-2 text-sm text-[#8D8070]">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#8D8070] mt-1">●</span>
                                            顎の大きさ・形
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#8D8070] mt-1">●</span>
                                            歯の大きさ・本数
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#8D8070] mt-1">●</span>
                                            骨格的な問題（受け口など）
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-br from-[#e8f2ed] to-white rounded-2xl p-6 shadow-md border-l-4 border-[#395b45]">
                                    <h4 className="text-lg font-bold text-[#395b45] mb-4">後天的要因（生活習慣）約80%</h4>
                                    <ul className="space-y-2 text-sm text-[#5A4D41]">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 size={16} className="text-[#395b45] mt-0.5 flex-shrink-0" />
                                            口呼吸・ポカン口
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 size={16} className="text-[#395b45] mt-0.5 flex-shrink-0" />
                                            指しゃぶり・爪噛み
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 size={16} className="text-[#395b45] mt-0.5 flex-shrink-0" />
                                            舌の位置・舌癖
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 size={16} className="text-[#395b45] mt-0.5 flex-shrink-0" />
                                            柔らかい食べ物ばかり食べる
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 size={16} className="text-[#395b45] mt-0.5 flex-shrink-0" />
                                            頬杖・横向き寝
                                        </li>
                                    </ul>
                                    <p className="text-xs text-[#395b45] mt-4 font-bold">👉 これらは予防・改善が可能です！</p>
                                </div>
                            </div>
                        </div>

                        {/* 歯並びが悪くなる5つの原因 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">歯並びが悪くなる5つの原因</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-6">
                                {/* 1. 口呼吸・ポカン口 */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-red-500">
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">1</span>
                                        口呼吸・ポカン口（最も影響大）
                                    </h4>
                                    <p className="text-[#5A4D41] leading-loose mb-4">
                                        <span className="font-bold bg-yellow-100">口呼吸をしていると、舌が下がり、上あごの成長が不十分</span>になります。
                                        その結果、<span className="text-[#2E8B57] font-bold">出っ歯、受け口、ガタガタ（叢生）、すきっ歯</span>などの歯並びの問題が起こります。
                                        また、顔が縦に長くなる「アデノイド顔貌」になることもあります。
                                    </p>
                                    <div className="bg-[#FFF4E6] p-4 rounded-xl">
                                        <p className="text-sm text-[#8D8070] leading-relaxed">
                                            <span className="font-bold">30.7%の子供が口唇閉鎖不全（ポカン口）</span>に該当します。早期発見・早期改善が重要です。
                                        </p>
                                    </div>
                                    <div className="text-center mt-4">
                                        <a
                                            href="/oral-education/mouth-breathing"
                                            className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium text-sm"
                                        >
                                            口呼吸について詳しく見る <ArrowRight size={14} />
                                        </a>
                                    </div>
                                </div>

                                {/* 2. 指しゃぶり・爪噛み */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-[#E89B4D]">
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 bg-[#E89B4D] text-white rounded-full flex items-center justify-center text-sm">2</span>
                                        指しゃぶり・爪噛み
                                    </h4>
                                    <p className="text-[#5A4D41] leading-loose mb-4">
                                        3歳頃までの指しゃぶりは生理的なものですが、<span className="font-bold bg-yellow-100">4歳を過ぎても続くと、前歯が前に出る（出っ歯）、上下の歯が噛み合わない（開咬）</span>などの問題が起こります。
                                        爪噛みも同様に、前歯に持続的な力がかかり、歯並びを悪化させます。
                                    </p>
                                    <div className="bg-[#FFF4E6] p-4 rounded-xl">
                                        <p className="text-sm text-[#8D8070] leading-relaxed">
                                            <span className="font-bold">無理やりやめさせるのは逆効果</span>です。不安や退屈の原因に寄り添い、自然に卒業できるようサポートしましょう。
                                        </p>
                                    </div>
                                </div>

                                {/* 3. 舌の位置・舌癖 */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-[#C5A572]">
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 bg-[#C5A572] text-white rounded-full flex items-center justify-center text-sm">3</span>
                                        舌の位置・舌癖（低位舌・舌突出癖）
                                    </h4>
                                    <p className="text-[#5A4D41] leading-loose mb-4">
                                        舌の正しい位置は、<span className="font-bold bg-yellow-100">上あごにピッタリついている状態</span>です。
                                        しかし、口呼吸の子供は舌が下がっている（低位舌）ことが多く、これが上あごの成長不足を引き起こします。
                                        また、飲み込むときに舌を前に出す「舌突出癖」があると、<span className="text-[#2E8B57] font-bold">出っ歯や開咬</span>になりやすくなります。
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                                            <p className="text-sm font-bold text-green-700 mb-2">✅ 正しい舌の位置</p>
                                            <p className="text-xs text-[#5A4D41]">上あごにピッタリついている（スポットに舌先が触れている）</p>
                                        </div>
                                        <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                                            <p className="text-sm font-bold text-red-700 mb-2">❌ 悪い舌の位置</p>
                                            <p className="text-xs text-[#5A4D41]">舌が下がっている、歯を押している、前に出ている</p>
                                        </div>
                                    </div>
                                </div>

                                {/* 4. 柔らかい食べ物ばかり */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-[#8D8070]">
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 bg-[#8D8070] text-white rounded-full flex items-center justify-center text-sm">4</span>
                                        柔らかい食べ物ばかり食べる
                                    </h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        現代の子供は、<span className="font-bold bg-yellow-100">柔らかい食べ物が中心で、噛む回数が減っている</span>ため、顎の成長が不十分になりがちです。
                                        顎が小さいと、歯が並ぶスペースが足りず、<span className="text-[#2E8B57] font-bold">ガタガタの歯並び（叢生）</span>になります。
                                        よく噛む食事を心がけ、顎の成長を促しましょう。
                                    </p>
                                </div>

                                {/* 5. 頬杖・横向き寝 */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-[#8D8070]">
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 bg-[#8D8070] text-white rounded-full flex items-center justify-center text-sm">5</span>
                                        頬杖・横向き寝・うつ伏せ寝
                                    </h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        頬杖をついたり、いつも同じ方向を向いて寝たりすると、<span className="font-bold bg-yellow-100">顎に持続的な力がかかり、顔や歯並びが歪む</span>ことがあります。
                                        姿勢を正し、仰向けで寝る習慣をつけましょう。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 0歳からできる歯並び予防 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">0歳からできる歯並び予防</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <p className="text-center text-[#8D8070] mb-8">
                                歯並びの予防は、歯が生える前から始められます。<br />
                                0歳からの「口育」で、きれいな歯並びの土台を作りましょう。
                            </p>
                            <div className="space-y-8">
                                {/* 0〜1歳 */}
                                <div className="bg-gradient-to-br from-[#e8f2ed] to-white rounded-2xl p-6 md:p-8 shadow-lg">
                                    <h4 className="text-xl font-bold text-[#395b45] font-serif mb-4 border-b-2 border-[#c8ddd0] pb-3">
                                        0〜1歳：授乳・離乳食の工夫
                                    </h4>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h5 className="font-bold text-[#5A4D41] mb-3">母乳・哺乳瓶の与え方</h5>
                                            <ul className="space-y-2 text-sm text-[#5A4D41]">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 size={16} className="text-[#395b45] mt-0.5 flex-shrink-0" />
                                                    母乳育児は、顎や舌の筋肉を鍛える最良の方法
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 size={16} className="text-[#395b45] mt-0.5 flex-shrink-0" />
                                                    哺乳瓶は、穴が小さめのものを選ぶ
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 size={16} className="text-[#395b45] mt-0.5 flex-shrink-0" />
                                                    抱っこの角度は45度程度（縦抱きに近い）
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#5A4D41] mb-3">離乳食の工夫</h5>
                                            <ul className="space-y-2 text-sm text-[#5A4D41]">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 size={16} className="text-[#395b45] mt-0.5 flex-shrink-0" />
                                                    月齢に合わせて、少しずつ硬さを増やす
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 size={16} className="text-[#395b45] mt-0.5 flex-shrink-0" />
                                                    噛む練習を意識した食材選び
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 size={16} className="text-[#395b45] mt-0.5 flex-shrink-0" />
                                                    スプーンは舌の上に置き、唇で取り込ませる
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* 1〜3歳 */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-[#C5A572]">
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">
                                        1〜3歳：悪い習慣の予防
                                    </h4>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-[#C5A572] flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-bold text-[#5A4D41]">指しゃぶりの卒業をサポート</p>
                                                <p className="text-sm text-[#8D8070]">3歳頃までは見守り、4歳以降も続く場合は歯科医院に相談</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-[#C5A572] flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-bold text-[#5A4D41]">口を閉じる習慣をつける</p>
                                                <p className="text-sm text-[#8D8070]">「お口を閉じてね」と優しく声をかける、あいうべ体操を始める</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-[#C5A572] flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-bold text-[#5A4D41]">よく噛んで食べる習慣</p>
                                                <p className="text-sm text-[#8D8070]">硬めの食材を取り入れ、「モグモグ30回」を意識</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 3歳〜 */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-[#C5A572]">
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">
                                        3歳〜：トレーニングの開始
                                    </h4>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-[#C5A572] flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-bold text-[#5A4D41]">あいうべ体操</p>
                                                <p className="text-sm text-[#8D8070]">1日30セットで口周りの筋力を鍛える</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-[#C5A572] flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-bold text-[#5A4D41]">MFT（口腔筋機能療法）</p>
                                                <p className="text-sm text-[#8D8070]">歯科医院で舌や唇の正しい位置を習得</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-[#C5A572] flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-bold text-[#5A4D41]">マイオブレース</p>
                                                <p className="text-sm text-[#8D8070]">マウスピース型装置で口呼吸から鼻呼吸へ</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-6">
                                        <a
                                            href="/kidsortho/appliances/functional-mouthpiece"
                                            className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                        >
                                            マイオブレースについて詳しく見る <ArrowRight size={16} />
                                        </a>
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
                                        早期予防のメリット
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "将来の矯正治療が不要になる、または期間が短くなる",
                                            "抜歯矯正のリスクが減る",
                                            "顔つきが整い、表情が豊かになる",
                                            "口呼吸から鼻呼吸になり、健康になる",
                                            "経済的負担が大幅に軽減される",
                                            "お子様の自信につながる"
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
                                        予防のデメリット
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "毎日の継続が必要（親御様のサポートが不可欠）",
                                            "効果が出るまでに数ヶ月〜数年かかる",
                                            "骨格的な要因が強い場合は、完全には予防できない",
                                            "定期的な歯科医院でのチェックが必要"
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
                                    q: "歯並びは遺伝で決まるのではないですか？",
                                    a: "遺伝の影響は約20%です。残り80%は、口呼吸・指しゃぶり・舌癖などの生活習慣が原因です。つまり、生活習慣を改善することで、歯並びの悪化を予防できます。"
                                },
                                {
                                    q: "何歳から予防を始めればいいですか？",
                                    a: "0歳（授乳期）から始められます。早ければ早いほど効果的です。3歳頃からはトレーニング（あいうべ体操、MFTなど）を本格的に始められます。"
                                },
                                {
                                    q: "すでに歯並びが悪い場合はどうすればいいですか？",
                                    a: "早めに歯科医院でご相談ください。年齢や状態に応じて、予防矯正（マイオブレースなど）や本格矯正をご提案します。成長期であれば、まだ十分に改善できる可能性があります。"
                                },
                                {
                                    q: "指しゃぶりをやめさせるにはどうすればいいですか？",
                                    a: "3歳頃までは生理的なものなので、無理にやめさせる必要はありません。4歳を過ぎても続く場合は、不安や退屈の原因に寄り添い、自然に卒業できるようサポートしましょう。無理やりやめさせるのは逆効果です。"
                                },
                                {
                                    q: "柔らかい食べ物ばかりだとなぜ歯並びが悪くなるのですか？",
                                    a: "よく噛まないと顎の成長が不十分になり、歯が並ぶスペースが足りなくなるためです。硬めの食材を取り入れ、「モグモグ30回」を意識して、顎の成長を促しましょう。"
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
                                口育・歯並び予防についてもっと詳しく知りたい方へ
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "子供の口呼吸を治す方法",
                                    description: "歯並びに最も影響する口呼吸の改善方法",
                                    link: "/oral-education/mouth-breathing",
                                    icon: "😮"
                                },
                                {
                                    title: "ポカン口の治し方",
                                    description: "30.7%の子供が該当するポカン口の予防と改善",
                                    link: "/oral-education/open-mouth",
                                    icon: "👄"
                                },
                                {
                                    title: "０歳からの口育",
                                    description: "生まれた時から始める歯並び予防",
                                    link: "/oral-education",
                                    icon: "👶"
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
                            お子様の歯並びが心配な方は、<br className="md:hidden" />お気軽にご相談ください
                        </h2>
                        <p className="text-[#F0EAE0] mb-10 max-w-2xl mx-auto">
                            歯並びの80%は生活習慣で決まります。<br />
                            0歳からの「口育」で、きれいな歯並びを手に入れましょう。
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
