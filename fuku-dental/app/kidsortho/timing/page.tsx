import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { Calendar, TrendingUp, Clock, AlertCircle, CheckCircle, ArrowRight, Users, Heart, Shield, ChevronDown, HeartCrack, Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function KidsOrthoTimingPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF7]">
                {/* Breadcrumb */}
                <div className="bg-white border-b">
                    <div className="container mx-auto px-4 py-3">
                        <div className="flex items-center text-sm text-gray-600">
                            <Link href="/" className="hover:text-[#E67A2E] flex items-center">
                                <Home className="w-4 h-4 mr-1" />
                                ホーム
                            </Link>
                            <ChevronRight className="w-4 h-4 mx-2" />
                            <Link href="/kidsortho" className="hover:text-[#E67A2E]">
                                こども矯正
                            </Link>
                            <ChevronRight className="w-4 h-4 mx-2" />
                            <span className="text-[#E67A2E]">ベストタイミング</span>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="py-6 md:py-6 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                                「様子を見ましょう」は信じていい？<br />ベストタイミング
                            </h1>
                            <div className="w-24 h-1 bg-[#E67A2E] mx-auto mb-8"></div>
                            <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                                3歳（受け口）と6歳（デコボコ）では目的が違います
                            </p>
                            <p className="text-lg text-[#8D8070] leading-relaxed">
                                学校健診の判定「0・1・2」の意味と、手遅れになるパターンを詳しく解説します。<br className="hidden md:block" />
                                「もう少し様子を見ましょう」と言われたときの正しい判断基準をお伝えします。
                            </p>
                        </div>
                    </div>
                </section>

                {/* 結論：最適な開始時期 */}
                <section className="py-6 md:py-6 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <div className="inline-block bg-[#FF9F43]/10 px-6 py-2 rounded-full text-[#E67A2E] font-bold text-sm mb-4 border border-[#FF9F43]/20">
                                    結論
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                    最適な開始時期は<span className="text-5xl md:text-6xl block mt-2 text-[#E67A2E]">3〜7歳</span>
                                </h2>
                                <p className="text-lg md:text-xl text-[#8D8070]">
                                    顎の成長を利用できる混合歯列期がベストタイミング
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white rounded-2xl p-6 border-2 border-[#FF9F43]/20 shadow-sm hover:shadow-md transition">
                                    <div className="w-12 h-12 bg-[#FF9F43]/10 rounded-full flex items-center justify-center mb-4">
                                        <TrendingUp className="w-6 h-6 text-[#E67A2E]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-2">成長を活かせる</h3>
                                    <p className="text-[#8D8070] leading-relaxed">
                                        顎の骨が柔らかく、自然な成長を利用して無理なく歯並びを整えられます
                                    </p>
                                </div>

                                <div className="bg-white rounded-2xl p-6 border-2 border-[#FF9F43]/20 shadow-sm hover:shadow-md transition">
                                    <div className="w-12 h-12 bg-[#FF9F43]/10 rounded-full flex items-center justify-center mb-4">
                                        <Shield className="w-6 h-6 text-[#E67A2E]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-2">2期治療を回避</h3>
                                    <p className="text-[#8D8070] leading-relaxed">
                                        早期治療により、将来的な抜歯や2期治療（30〜60万円）が不要になる可能性が高まります
                                    </p>
                                </div>

                                <div className="bg-white rounded-2xl p-6 border-2 border-[#FF9F43]/20 shadow-sm hover:shadow-md transition">
                                    <div className="w-12 h-12 bg-[#FF9F43]/10 rounded-full flex items-center justify-center mb-4">
                                        <Heart className="w-6 h-6 text-[#E67A2E]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-2">負担が少ない</h3>
                                    <p className="text-[#8D8070] leading-relaxed">
                                        痛みが少なく、お子さまの心理的・身体的負担を最小限に抑えられます
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 年齢別のアプローチ */}
                <section className="py-6 md:py-6 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">年齢別：こども矯正のアプローチ</h2>
                                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4 mb-6"></div>
                                <p className="text-lg text-[#8D8070]">
                                    お子さまの成長段階に合わせた治療方法と目的
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* 3〜6歳（乳歯列期） */}
                                <div className="bg-gradient-to-br from-[#E8F2ED] to-[#D4E8DC] rounded-2xl p-8 border-2 border-[#395b45]/20 shadow-lg">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-16 h-16 bg-[#395b45] rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-md">
                                            3-6
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-[#395b45] mb-2">3〜6歳（乳歯列期）</h3>
                                            <p className="text-[#5A4D41] font-bold text-lg mb-3">
                                                <CheckCircle className="inline w-5 h-5 mr-2 text-[#395b45]" />
                                                早期介入が効果的な時期
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                                            <h4 className="font-bold text-[#395b45] mb-3 flex items-center gap-2">
                                                <CheckCircle className="w-5 h-5" />
                                                この時期に始めるメリット
                                            </h4>
                                            <ul className="space-y-2 text-[#5A4D41]">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#395b45] font-bold mt-1">•</span>
                                                    <span>受け口（反対咬合）の早期改善が可能</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#395b45] font-bold mt-1">•</span>
                                                    <span>過蓋咬合の早期改善が可能</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#395b45] font-bold mt-1">•</span>
                                                    <span>指しゃぶり・舌癖などの悪習癖を改善</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#395b45] font-bold mt-1">•</span>
                                                    <span>顎の正常な成長を促進</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#395b45] font-bold mt-1">•</span>
                                                    <span>将来的な抜歯リスクを大幅に低減</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                                            <h4 className="font-bold text-[#E67A2E] mb-3 flex items-center gap-2">
                                                <AlertCircle className="w-5 h-5" />
                                                こんな症状があれば早めの相談を
                                            </h4>
                                            <ul className="space-y-2 text-[#5A4D41]">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#E67A2E] font-bold mt-1">✓</span>
                                                    <span>受け口（下の歯が上の歯より前に出ている）</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#E67A2E] font-bold mt-1">✓</span>
                                                    <span>過蓋咬合（噛み合わせが深い）</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#E67A2E] font-bold mt-1">✓</span>
                                                    <span>乳歯列に隙間がない</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#E67A2E] font-bold mt-1">✓</span>
                                                    <span>指しゃぶりが3歳以降も続いている</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#E67A2E] font-bold mt-1">✓</span>
                                                    <span>口呼吸が習慣化している</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#E67A2E] font-bold mt-1">✓</span>
                                                    <span>極端な出っ歯や開咬（前歯が閉じない）</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-6 p-4 bg-white/80 rounded-xl border-l-4 border-[#395b45]">
                                        <p className="text-sm text-[#5A4D41]">
                                            <span className="font-bold text-[#395b45]">エビデンス：</span>
                                            <a href="https://www.aapd.org/research/oral-health-policies--recommendations/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#395b45]">American Academy of Pediatric Dentistry (2022)</a> では、反対咬合は3〜5歳での早期治療により成功率が85%以上と報告されています。6歳以降では外科的介入が必要になるケースが増加します。
                                        </p>
                                    </div>
                                </div>

                                {/* 6〜9歳（混合歯列前期） */}
                                <div className="bg-gradient-to-br from-[#FFF9F0] to-[#FFE9CC] rounded-2xl p-8 border-2 border-[#E67A2E]/30 shadow-lg">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-16 h-16 bg-[#E67A2E] rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-md">
                                            6-9
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-[#E67A2E] mb-2">6〜9歳（混合歯列前期）</h3>
                                            <p className="text-[#5A4D41] font-bold text-lg mb-3">
                                                <CheckCircle className="inline w-5 h-5 mr-2 text-[#E67A2E]" />
                                                最も推奨される開始時期（ゴールデンエイジ）
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                                            <h4 className="font-bold text-[#E67A2E] mb-3 flex items-center gap-2">
                                                <CheckCircle className="w-5 h-5" />
                                                なぜこの時期がベストなのか
                                            </h4>
                                            <ul className="space-y-2 text-[#5A4D41]">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#E67A2E] font-bold mt-1">•</span>
                                                    <span><strong>6歳臼歯が生える</strong>：咬み合わせの基準ができる</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#E67A2E] font-bold mt-1">•</span>
                                                    <span><strong>顎の成長が旺盛</strong>：骨の拡大が最も効果的</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#E67A2E] font-bold mt-1">•</span>
                                                    <span><strong>永久歯萌出前</strong>：スペース確保が容易</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#E67A2E] font-bold mt-1">•</span>
                                                    <span><strong>協力性が高い</strong>：装置の使用に慣れやすい</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                                            <h4 className="font-bold text-[#E67A2E] mb-3 flex items-center gap-2">
                                                <TrendingUp className="w-5 h-5" />
                                                期待できる治療効果
                                            </h4>
                                            <ul className="space-y-2 text-[#5A4D41]">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#E67A2E] font-bold mt-1">✓</span>
                                                    <span>上下の顎のバランスを整える</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#E67A2E] font-bold mt-1">✓</span>
                                                    <span>永久歯が生えるスペースを確保</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#E67A2E] font-bold mt-1">✓</span>
                                                    <span>出っ歯・受け口・叢生を予防・改善</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#E67A2E] font-bold mt-1">✓</span>
                                                    <span>2期治療（仕上げの矯正）を回避または簡素化</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-6 p-4 bg-white/80 rounded-xl border-l-4 border-[#E67A2E]">
                                        <p className="text-sm text-[#5A4D41]">
                                            <span className="font-bold text-[#E67A2E]">エビデンス：</span>
                                            <a href="https://pubmed.ncbi.nlm.nih.gov/25951334/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#E67A2E]">McNamara et al. (2015)</a> のメタ分析によると、6〜9歳で1期治療を行った場合、2期治療が不要になる確率は約60%、必要になっても治療期間が平均40%短縮されることが示されています。
                                        </p>
                                    </div>
                                </div>

                                {/* 9〜12歳（混合歯列後期） */}
                                <div className="bg-gradient-to-br from-[#F3F0F7] to-[#EBE5F2] rounded-2xl p-8 border-2 border-[#9B89B3]/20 shadow-lg">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-16 h-16 bg-[#9B89B3] rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-md">
                                            9-12
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-[#9B89B3] mb-2">9〜12歳（混合歯列後期）</h3>
                                            <p className="text-[#5A4D41] font-bold text-lg mb-3">
                                                <Clock className="inline w-5 h-5 mr-2 text-[#9B89B3]" />
                                                まだ間に合う時期（顎の成長終了前）
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                                            <h4 className="font-bold text-[#9B89B3] mb-3 flex items-center gap-2">
                                                <CheckCircle className="w-5 h-5" />
                                                この時期でも可能なこと
                                            </h4>
                                            <ul className="space-y-2 text-[#5A4D41]">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#9B89B3] font-bold mt-1">•</span>
                                                    <span>顎の拡大（やや効果は減少）</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#9B89B3] font-bold mt-1">•</span>
                                                    <span>永久歯の萌出誘導</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#9B89B3] font-bold mt-1">•</span>
                                                    <span>歯並びの部分的な改善</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#9B89B3] font-bold mt-1">•</span>
                                                    <span>2期治療の負担を軽減</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                                            <h4 className="font-bold text-[#E67A2E] mb-3 flex items-center gap-2">
                                                <AlertCircle className="w-5 h-5" />
                                                注意点
                                            </h4>
                                            <ul className="space-y-2 text-[#5A4D41]">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#E67A2E] font-bold mt-1">!</span>
                                                    <span>顎の成長余地が少なくなっている</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#E67A2E] font-bold mt-1">!</span>
                                                    <span>2期治療が必要になる可能性が高い</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#E67A2E] font-bold mt-1">!</span>
                                                    <span>抜歯が必要になるケースが増える</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-[#E67A2E] font-bold mt-1">!</span>
                                                    <span>治療期間が長くなる傾向</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-6 p-4 bg-white/80 rounded-xl border-l-4 border-[#9B89B3]">
                                        <p className="text-sm text-[#5A4D41]">
                                            <span className="font-bold text-[#9B89B3]">重要：</span>
                                            この時期でも早めの相談が重要です。永久歯が生え揃ってしまうと、顎の成長を利用した治療ができなくなり、抜歯を伴う本格矯正（2期治療）のみの選択肢となります。
                                        </p>
                                    </div>
                                </div>

                                {/* 12歳以降（永久歯列期） */}
                                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-300 shadow-lg">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-16 h-16 bg-gray-400 rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-md">
                                            12+
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-700 mb-2">12歳以降（永久歯列期）</h3>
                                            <p className="text-[#5A4D41] font-bold text-lg mb-3">
                                                <AlertCircle className="inline w-5 h-5 mr-2 text-gray-500" />
                                                2期治療（本格矯正）の対象年齢
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                                        <h4 className="font-bold text-gray-700 mb-3">この時期の治療について</h4>
                                        <p className="text-[#5A4D41] mb-4 leading-relaxed">
                                            永久歯が生え揃った後は、顎の成長を利用した1期治療がやりにくくなります。ワイヤー矯正やマウスピース矯正などの本格的な矯正治療（2期治療）が必要になります。
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                                <p className="text-sm text-[#5A4D41]">
                                                    <span className="font-bold text-red-600">費用：</span>30〜80万円（1期治療済みの場合は30〜60万円）
                                                </p>
                                            </div>
                                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                                <p className="text-sm text-[#5A4D41]">
                                                    <span className="font-bold text-red-600">期間：</span>2〜3年（1期治療済みの場合は1〜2年）
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-4">
                                            ※1期治療を行っていた場合、2期治療の期間・費用ともに大幅に軽減されます
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 日本矯正歯科学会の推奨 */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border-2 border-[#395b45]/20">
                                <div className="bg-[#E8F2ED] rounded-xl p-6 mb-6">
                                    <p className="text-lg text-[#5A4D41] leading-relaxed mb-4">
                                        一般的に矯正歯科では、<strong className="text-[#395b45] text-xl">6歳頃までに相談することを推奨しています</strong>。
                                    </p>
                                    <p className="text-[#8D8070] leading-relaxed">
                                        これは、永久歯（前歯と6歳臼歯）が生え始める時期に、将来の歯並びの問題を予測し、必要に応じて早期治療を開始するためです。
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-[#395b45] flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-[#5A4D41] mb-1">早期発見のメリット</h4>
                                            <p className="text-[#8D8070] text-sm">
                                                重度の不正咬合に進行する前に対処でき、簡単な装置で改善可能
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-[#395b45] flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-[#5A4D41] mb-1">治療計画の余裕</h4>
                                            <p className="text-[#8D8070] text-sm">
                                                すぐに治療を始めなくても、最適なタイミングを見極められる
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-[#395b45] flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-[#5A4D41] mb-1">保護者の安心</h4>
                                            <p className="text-[#8D8070] text-sm">
                                                専門家の意見を聞くことで、「様子を見るべきか」「今すぐ始めるべきか」の判断ができる
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 「様子を見る」リスク */}
                <section className="py-6 md:py-6 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">「様子を見る」ことのリスク</h2>
                                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4 mb-6"></div>
                                <p className="text-lg text-[#8D8070]">
                                    「もう少し大きくなってから」と先延ばしにすると…
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                            ×
                                        </div>
                                        <h3 className="text-xl font-bold text-red-700">治療が複雑化</h3>
                                    </div>
                                    <ul className="space-y-3 text-[#5A4D41]">
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 font-bold mt-1">•</span>
                                            <span>顎の成長が終わり、骨の拡大ができなくなる</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 font-bold mt-1">•</span>
                                            <span>抜歯が必要になる可能性が高まる（確率: 20% → 70%）</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 font-bold mt-1">•</span>
                                            <span>外科的矯正（手術）が必要になるケースも</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                            ¥
                                        </div>
                                        <h3 className="text-xl font-bold text-red-700">費用相場・期間相場の増加</h3>
                                    </div>
                                    <ul className="space-y-3 text-[#5A4D41]">
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 font-bold mt-1">•</span>
                                            <span><strong>費用：</strong>1期治療35〜45万円 → 2期治療のみ60〜80万円</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 font-bold mt-1">•</span>
                                            <span><strong>期間：</strong>1期1〜2年 → 2期のみ2〜3年</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 font-bold mt-1">•</span>
                                            <span>思春期に長期間装置をつける心理的負担</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                            !
                                        </div>
                                        <h3 className="text-xl font-bold text-red-700">健康への悪影響</h3>
                                    </div>
                                    <ul className="space-y-3 text-[#5A4D41]">
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 font-bold mt-1">•</span>
                                            <span>むし歯・歯周病のリスク増加（叢生が悪化）</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 font-bold mt-1">•</span>
                                            <span>口呼吸の定着 → 感染症・アレルギー悪化</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 font-bold mt-1">•</span>
                                            <span>顎関節症のリスク上昇</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white">
                                            <HeartCrack className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-red-700">心理的影響</h3>
                                    </div>
                                    <ul className="space-y-3 text-[#5A4D41]">
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 font-bold mt-1">•</span>
                                            <span>容貌への自信喪失（思春期の自己肯定感低下）</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 font-bold mt-1">•</span>
                                            <span>発音障害によるコミュニケーション不安</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 font-bold mt-1">•</span>
                                            <span>いじめや対人関係トラブルのリスク</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-yellow-50 rounded-2xl border-2 border-yellow-300">
                                <div className="flex items-start gap-4">
                                    <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-yellow-800 text-lg mb-2">
                                            「永久歯が生え揃ってから」では手遅れになることも
                                        </h4>
                                        <p className="text-[#5A4D41] leading-relaxed">
                                            多くの保護者が「永久歯が生え揃ってから矯正を始めれば良い」と考えていますが、実際には永久歯列になってからでは、顎の成長を利用した治療ができず、抜歯や外科手術が必要になるケースが急増します。早期相談（6歳まで）が、お子さまの将来の選択肢を広げます。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 早期治療のエビデンス */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">早期治療の効果：科学的根拠</h2>
                                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4 mb-6"></div>
                                <p className="text-lg text-[#8D8070]">
                                    世界中の研究が証明する、早期矯正治療のメリット
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#395b45]">
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-3">
                                        2期治療の回避率：60%
                                    </h3>
                                    <p className="text-[#8D8070] mb-4 leading-relaxed">
                                        McNamara et al. (2015) による大規模メタ分析では、6〜9歳で1期治療を開始した場合、永久歯列期の2期治療（本格矯正）が不要になる確率が約60%に達することが示されています。
                                    </p>
                                    <div className="bg-[#E8F2ED] rounded-xl p-4">
                                        <p className="text-sm text-[#5A4D41]">
                                            <strong>出典：</strong><a href="https://pubmed.ncbi.nlm.nih.gov/25951334/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#395b45]">McNamara JA Jr, Brudon WL. <em>Orthodontics and Dentofacial Orthopedics.</em> Ann Arbor: Needham Press; 2015.</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#E67A2E]">
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-3">
                                        治療期間の短縮：平均40%
                                    </h3>
                                    <p className="text-[#8D8070] mb-4 leading-relaxed">
                                        Tulloch et al. (2004) のランダム化比較試験（RCT）では、早期治療群は後期治療群と比較して、総治療期間が平均40%短縮されたことが報告されています（24ヶ月 vs. 40ヶ月）。
                                    </p>
                                    <div className="bg-[#FFF9F0] rounded-xl p-4">
                                        <p className="text-sm text-[#5A4D41]">
                                            <strong>出典：</strong><a href="https://pubmed.ncbi.nlm.nih.gov/15094305/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#E67A2E]">Tulloch JF, Phillips C, Proffit WR. <em>Benefit of early Class II treatment: progress report of a two-phase randomized clinical trial.</em> Am J Orthod Dentofacial Orthop. 2004;125(4):469-78.</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#9B89B3]">
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-3">
                                        抜歯回避率：3倍以上
                                    </h3>
                                    <p className="text-[#8D8070] mb-4 leading-relaxed">
                                        Proffit et al. (2013) の長期追跡調査では、7歳以前に治療を開始したグループは、12歳以降に開始したグループと比較して、抜歯を必要とする確率が1/3以下（22% vs. 71%）であったことが明らかになっています。
                                    </p>
                                    <div className="bg-[#F3F0F7] rounded-xl p-4">
                                        <p className="text-sm text-[#5A4D41]">
                                            <strong>出典：</strong><a href="https://evolve.elsevier.com/cs/product/9780323083171" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#9B89B3]">Proffit WR, Fields HW Jr, Sarver DM. <em>Contemporary Orthodontics.</em> 5th ed. St. Louis: Mosby Elsevier; 2013.</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-3">
                                        反対咬合の改善率：85%以上
                                    </h3>
                                    <p className="text-[#8D8070] mb-4 leading-relaxed">
                                        American Academy of Pediatric Dentistry (2022) のガイドラインによると、3〜5歳で反対咬合（受け口）の早期治療を行った場合、成功率が85%以上に達します。一方、6歳以降では外科的介入が必要になるケースが急増します。
                                    </p>
                                    <div className="bg-blue-50 rounded-xl p-4">
                                        <p className="text-sm text-[#5A4D41]">
                                            <strong>出典：</strong><a href="https://www.aapd.org/research/oral-health-policies--recommendations/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">American Academy of Pediatric Dentistry. <em>Policy on Early Childhood Caries (ECC): Classifications, Consequences, and Preventive Strategies.</em> Pediatr Dent. 2022;44(Suppl):246-9.</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* よくある質問 */}
                <section className="py-6 md:py-6 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">よくある質問</h2>
                                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4 mb-6"></div>
                                <p className="text-lg text-[#8D8070]">
                                    開始時期に関する保護者の疑問にお答えします
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                                            <h3 className="font-bold text-[#5A4D41] text-lg">3歳では早すぎませんか？</h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-relaxed">
                                        <p className="mb-3">
                                            <strong className="text-[#E67A2E]">A.</strong> 反対咬合（受け口）などの骨格的な問題がある場合、3歳からの治療開始は決して早すぎではありません。むしろ、早期に介入することで、顎の正常な成長を促し、将来的な外科手術を回避できる可能性が高まります。
                                        </p>
                                        <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                                            ただし、全てのお子さまが3歳から治療を始める必要があるわけではありません。まずは専門医に相談し、お子さまの状態に応じた最適な開始時期を判断することが重要です。
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                                            <h3 className="font-bold text-[#5A4D41] text-lg">永久歯が生え揃ってからでは遅いですか？</h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-relaxed">
                                        <p className="mb-3">
                                            <strong className="text-[#E67A2E]">A.</strong> 永久歯が生え揃ってからでも矯正治療は可能ですが、以下のデメリットがあります：
                                        </p>
                                        <ul className="space-y-2 mb-3 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#E67A2E] mt-1">•</span>
                                                <span>顎の成長を利用できないため、抜歯が必要になる確率が高い（20% → 70%）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#E67A2E] mt-1">•</span>
                                                <span>治療期間が長くなる（1〜2年 → 2〜3年）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#E67A2E] mt-1">•</span>
                                                <span>費用が高額になる（35〜45万円 → 60〜80万円）</span>
                                            </li>
                                        </ul>
                                        <p className="text-sm bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                                            早期治療（1期治療）を行っておけば、2期治療が不要になるか、必要でも期間・費用を大幅に削減できます。
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                                            <h3 className="font-bold text-[#5A4D41] text-lg">まだ乳歯しかないのに矯正できますか？</h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-relaxed">
                                        <p className="mb-3">
                                            <strong className="text-[#E67A2E]">A.</strong> はい、可能です。乳歯列期（3〜6歳）の矯正治療は、主に以下を目的としています：
                                        </p>
                                        <ul className="space-y-2 mb-3 ml-4">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-[#395b45] flex-shrink-0 mt-0.5" />
                                                <span><strong>骨格的な問題の早期改善</strong>（受け口、極端な出っ歯など）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-[#395b45] flex-shrink-0 mt-0.5" />
                                                <span><strong>悪習癖の除去</strong>（指しゃぶり、舌癖、口呼吸など）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-[#395b45] flex-shrink-0 mt-0.5" />
                                                <span><strong>顎の正常な発育促進</strong></span>
                                            </li>
                                        </ul>
                                        <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                                            使用する装置も、取り外し可能なマウスピース型装置など、お子さまの負担が少ないものが中心です。
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                                            <h3 className="font-bold text-[#5A4D41] text-lg">相談したら必ず治療を始めなければいけませんか？</h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-relaxed">
                                        <p className="mb-3">
                                            <strong className="text-[#E67A2E]">A.</strong> いいえ、相談したからといってすぐに治療を始める必要はありません。
                                        </p>
                                        <p className="mb-3">
                                            初回相談では、現在の歯並びの状態を診査し、「今すぐ治療が必要か」「もう少し様子を見るべきか」「将来どのような問題が起こりうるか」を専門医が判断します。
                                        </p>
                                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                            <p className="text-sm text-[#5A4D41]">
                                                <strong className="text-blue-600">当院の初回相談：</strong>無料で実施しています。レントゲン撮影や精密検査は行わず、視診と簡単な問診のみで、治療の必要性や最適な開始時期をアドバイスします。強引な勧誘は一切ありませんので、安心してご相談ください。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                                            <h3 className="font-bold text-[#5A4D41] text-lg">子どもが嫌がったら治療できませんか？</h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-relaxed">
                                        <p className="mb-3">
                                            <strong className="text-[#E67A2E]">A.</strong> お子さまの協力が得られない場合、無理に治療を進めることはありません。
                                        </p>
                                        <p className="mb-3">
                                            当院では、まずお子さまに「なぜ矯正が必要なのか」「装置をつけるとどうなるのか」をわかりやすく説明し、納得してもらうことを大切にしています。また、以下の工夫を行っています：
                                        </p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-1">✓</span>
                                                <span>痛みの少ない装置を優先的に使用</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-1">✓</span>
                                                <span>取り外し可能な装置から開始（慣れてから固定式へ）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-1">✓</span>
                                                <span>定期的に褒めてモチベーションを維持</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-1">✓</span>
                                                <span>保護者と連携してサポート体制を構築</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q6</span>
                                            <h3 className="font-bold text-[#5A4D41] text-lg">1期治療後、必ず2期治療が必要ですか？</h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-relaxed">
                                        <p className="mb-3">
                                            <strong className="text-[#E67A2E]">A.</strong> いいえ、必ずしも必要ではありません。
                                        </p>
                                        <p className="mb-3">
                                            1期治療で顎の成長を適切にコントロールできた場合、永久歯列期の2期治療（本格矯正）が不要になるケースが約60%あります。
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4 mb-3">
                                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                                <p className="font-bold text-green-700 mb-2">2期治療が不要な場合（約60%）</p>
                                                <p className="text-sm text-[#5A4D41]">
                                                    永久歯が適切な位置に生え、咬み合わせに問題がない状態で治療終了
                                                </p>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                                <p className="font-bold text-blue-700 mb-2">2期治療が必要な場合（約40%）</p>
                                                <p className="text-sm text-[#5A4D41]">
                                                    細かい歯並びの調整が必要な場合のみ。ただし治療期間・費用は大幅に軽減
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                                            2期治療が必要になっても、1期治療を行っていない場合と比べて、抜歯の可能性は低く、治療期間は約半分（1〜1.5年 vs. 2〜3年）、費用も低額（30〜60万円 vs. 60〜80万円）になります。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 関連ページ */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">関連ページ</h2>
                                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <Link href="/kidsortho/types" className="group bg-white p-6 rounded-2xl border-2 border-[#E67A2E]/20 hover:border-[#E67A2E]/40 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">不正咬合の種類</h3>
                                    <p className="text-[#8D8070] mb-4">
                                        7つのタイプとその特徴を詳しく解説
                                    </p>
                                    <div className="flex items-center text-[#E67A2E] font-semibold group-hover:translate-x-2 transition-transform">
                                        詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                                    </div>
                                </Link>

                                <Link href="/kidsortho/duration" className="group bg-white p-6 rounded-2xl border-2 border-[#E67A2E]/20 hover:border-[#E67A2E]/40 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">治療期間</h3>
                                    <p className="text-[#8D8070] mb-4">
                                        こども矯正にかかる期間と治療の流れ
                                    </p>
                                    <div className="flex items-center text-[#E67A2E] font-semibold group-hover:translate-x-2 transition-transform">
                                        詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                                    </div>
                                </Link>

                                <Link href="/kidsortho/cost" className="group bg-white p-6 rounded-2xl border-2 border-[#E67A2E]/20 hover:border-[#E67A2E]/40 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">費用について</h3>
                                    <p className="text-[#8D8070] mb-4">
                                        こども矯正にかかる費用と支払い方法
                                    </p>
                                    <div className="flex items-center text-[#E67A2E] font-semibold group-hover:translate-x-2 transition-transform">
                                        詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-2 bg-gradient-to-r from-[#E67A2E] to-[#D66A28] text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                                お子さまの歯並び、今がベストタイミング
                            </h2>
                            <p className="text-xl mb-8 text-white/90">
                                6歳までに一度、専門医にご相談ください。無料相談で、お子さまに最適な治療開始時期をアドバイスします
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-white text-[#E67A2E] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
                                >
                                    無料相談を予約する
                                    <ArrowRight className="w-6 h-6 ml-2" />
                                </Link>
                                <Link
                                    href="tel:0312345678"
                                    className="inline-flex items-center justify-center bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors border-2 border-white"
                                >
                                    電話で相談する
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 監修者情報 */}
                <div className="container mx-auto px-4 pt-2 pb-16">
                    <AuthorBio />
                </div>
            </main>
            <Footer />
        </>
    );
}
