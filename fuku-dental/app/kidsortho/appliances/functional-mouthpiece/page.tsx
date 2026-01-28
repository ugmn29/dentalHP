import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowRight, CheckCircle, AlertCircle, Calendar, Heart, TrendingUp, Clock, DollarSign, Users, Wrench, Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function FunctionalMouthpiecePage() {
    return (
        <>
            <Header />
            <main className="bg-white">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-[#F3E8FF] to-[#E8D5FF] py-2 md:py-2 overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-[#8E7CC3] rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#7E6CB3] rounded-full blur-3xl"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full text-[#8E7CC3] font-bold text-sm mb-6 shadow-sm border border-[#8E7CC3]/20">
                                <Wrench className="inline-block w-4 h-4 mr-2" />
                                機能的マウスピース装置
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5A4D41] mb-6 leading-tight">
                                柔らかいマウスピースで<br />
                                <span className="text-[#8E7CC3]">歯並び改善＋筋機能訓練</span>
                            </h1>
                            <p className="text-lg md:text-xl text-[#8D8070] mb-8 leading-relaxed">
                                プレオルソ・T4K・マイオブレースなど、柔らかいシリコン製のマウスピースで<br className="hidden md:block" />
                                口呼吸・舌癖を改善しながら歯並びを整える治療法です
                            </p>
                        </div>
                    </div>
                </section>

                {/* Breadcrumbs */}
                <section className="bg-white py-3 border-b border-gray-200">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-2 text-sm text-[#8D8070]">
                            <Link href="/" className="hover:text-[#E67A2E] transition-colors flex items-center">
                                <Home className="w-4 h-4 mr-1" />
                                ホーム
                            </Link>
                            <ChevronRight size={14} />
                            <Link href="/kidsortho" className="hover:text-[#E67A2E] transition-colors">こども矯正</Link>
                            <ChevronRight size={14} />
                            <Link href="/kidsortho/appliances" className="hover:text-[#E67A2E] transition-colors">装置一覧</Link>
                            <ChevronRight size={14} />
                            <span className="text-[#E67A2E] font-bold">機能的マウスピース装置</span>
                        </div>
                    </div>
                </section>

                {/* 機能的マウスピース装置とは */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                機能的マウスピース装置とは
                            </h2>
                            <p className="text-gray-600">
                                歯並びを整えるだけでなく、口の周りの筋肉機能も改善する画期的な装置
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-[#8E7CC3]/20 mb-12">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                機能的マウスピース装置は、<span className="font-bold text-[#8E7CC3]">柔らかいシリコン製のマウスピース</span>を使用して、歯並びの改善と同時に口の周りの筋肉（舌・唇・頬）の正しい使い方を訓練する装置です。
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                従来の矯正装置と異なり、<span className="font-bold text-[#8E7CC3]">歯を動かすだけでなく、不正咬合の根本原因となる口呼吸・舌癖・悪い嚥下習慣を改善</span>することで、後戻りしにくい安定した歯並びを目指します。
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl p-6 border-2 border-[#8E7CC3]/20 shadow-lg">
                                <div className="w-12 h-12 bg-[#8E7CC3] rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#5A4D41] mb-3">歯並びの改善</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    歯列のアーチを広げ、永久歯が正しい位置に生えるスペースを確保します
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 border-2 border-[#8E7CC3]/20 shadow-lg">
                                <div className="w-12 h-12 bg-[#8E7CC3] rounded-full flex items-center justify-center mb-4">
                                    <Heart className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#5A4D41] mb-3">筋機能訓練</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    舌・唇・頬の筋肉を正しく使えるようにトレーニングし、口呼吸を鼻呼吸に改善します
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* どのように機能するのか */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                どのように機能するのか？
                            </h2>
                            <p className="text-gray-600">
                                プレオルソの構造を例に、機能的マウスピース装置のメカニズムを解説
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-[#8E7CC3]/20 mb-8">
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                {/* プレオルソの写真プレースホルダー */}
                                <div className="bg-gradient-to-br from-[#8E7CC3]/10 to-[#7E6CB3]/10 rounded-2xl p-8 border-2 border-[#8E7CC3]/30 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-32 h-32 bg-white rounded-full shadow-lg mx-auto mb-4 flex items-center justify-center border-4 border-[#8E7CC3]">
                                            <Wrench className="w-16 h-16 text-[#8E7CC3]" />
                                        </div>
                                        <p className="text-sm text-gray-600 font-bold">プレオルソ装置</p>
                                        <p className="text-xs text-gray-500 mt-1">（イメージ）</p>
                                    </div>
                                </div>

                                {/* 構造説明 */}
                                <div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-4 flex items-center gap-2">
                                        <TrendingUp className="w-6 h-6 text-[#8E7CC3]" />
                                        プレオルソの構造的特徴
                                    </h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-[#8E7CC3] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                                            <span><strong>舌タブ：</strong>舌を正しい位置（上顎の前歯裏）に誘導し、舌癖を改善</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-[#8E7CC3] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                                            <span><strong>リップバンパー：</strong>唇を閉じやすくし、口呼吸から鼻呼吸へ誘導</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-[#8E7CC3] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                                            <span><strong>歯列アーチ形状：</strong>歯を適切な位置に誘導し、歯列を拡大</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-[#8E7CC3] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                                            <span><strong>柔軟な素材：</strong>ポリウレタン製で違和感が少なく、成長に合わせて変形</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border-t-2 border-[#8E7CC3]/20 pt-8">
                                <h3 className="text-xl font-bold text-[#5A4D41] mb-6 flex items-center gap-2">
                                    <Heart className="w-6 h-6 text-[#8E7CC3]" />
                                    3つの作用で歯並びを改善
                                </h3>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-white rounded-xl p-6 border-2 border-[#8E7CC3]/20 shadow-md">
                                        <div className="w-12 h-12 bg-[#8E7CC3] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">1</div>
                                        <h4 className="font-bold text-[#5A4D41] mb-2">口呼吸改善</h4>
                                        <p className="text-sm text-gray-700">リップバンパーが唇を閉じさせ、鼻呼吸を促進。口腔内の乾燥を防ぎ、むし歯・歯周病のリスクを軽減</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 border-2 border-[#8E7CC3]/20 shadow-md">
                                        <div className="w-12 h-12 bg-[#8E7CC3] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">2</div>
                                        <h4 className="font-bold text-[#5A4D41] mb-2">舌位置の矯正</h4>
                                        <p className="text-sm text-gray-700">舌タブが舌を正しい位置に誘導。前歯を押し出す舌癖が改善され、出っ歯・開咬の予防につながる</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 border-2 border-[#8E7CC3]/20 shadow-md">
                                        <div className="w-12 h-12 bg-[#8E7CC3] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">3</div>
                                        <h4 className="font-bold text-[#5A4D41] mb-2">歯列の拡大</h4>
                                        <p className="text-sm text-gray-700">理想的なアーチ形状が歯を適切な位置に誘導。永久歯が生えるスペースを確保し、抜歯矯正のリスクを軽減</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#8E7CC3]/10 border-l-4 border-[#8E7CC3] p-6 rounded-r-xl">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-[#8E7CC3] flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-[#5A4D41] mb-2">根本原因にアプローチ</p>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        従来のワイヤー矯正は「歯を動かす」だけでしたが、機能的マウスピース装置は「悪い癖を治す」ことで根本的に歯並びを改善します。そのため、<strong className="text-[#8E7CC3]">治療後の後戻りが少ない</strong>のが大きな特徴です。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 主な種類 */}
                <section className="py-2 bg-gradient-to-b from-gray-50 to-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                機能的マウスピース装置の主な種類
                            </h2>
                            <p className="text-gray-600">
                                代表的な4つのタイプをご紹介します
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* プレオルソ */}
                            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-[#8E7CC3]/20">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#8E7CC3] to-[#7E6CB3] rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#5A4D41]">プレオルソ（Preortho）</h3>
                                        <p className="text-sm text-gray-600">日本で開発された機能的マウスピース装置</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="font-bold text-[#5A4D41] mb-3 flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#8E7CC3]" />
                                            特徴
                                        </h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#8E7CC3] mt-1">•</span>
                                                <span>ポリウレタン製で非常に柔らかく、違和感が少ない</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#8E7CC3] mt-1">•</span>
                                                <span>日中1時間＋就寝時の装着でOK</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#8E7CC3] mt-1">•</span>
                                                <span>Type I〜IIIまでタイプがあり、症状に応じて選択</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#8E7CC3] mt-1">•</span>
                                                <span>3〜10歳の幅広い年齢に対応</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#5A4D41] mb-3 flex items-center gap-2">
                                            <Users className="w-5 h-5 text-[#8E7CC3]" />
                                            こんなお子さまに
                                        </h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#8E7CC3] mt-1">✓</span>
                                                <span>口呼吸・舌癖がある</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#8E7CC3] mt-1">✓</span>
                                                <span>出っ歯・受け口・開咬</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#8E7CC3] mt-1">✓</span>
                                                <span>軽度〜中等度の歯並びの乱れ</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#8E7CC3] mt-1">✓</span>
                                                <span>痛みの少ない治療を希望</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-4 rounded-xl border border-[#8E7CC3]/20">
                                    <p className="text-sm text-gray-700">
                                        <span className="font-bold text-[#8E7CC3]">当院での採用：</span>
                                        プレオルソは柔らかく違和感が少ないため、初めての矯正装置として最適です。当院で最も多く使用している機能的マウスピース装置です。
                                    </p>
                                </div>
                            </div>

                            {/* T4K */}
                            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-200">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#5A4D41]">T4K（Trainer for Kids）</h3>
                                        <p className="text-sm text-gray-600">オーストラリアで開発された筋機能訓練装置</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="font-bold text-[#5A4D41] mb-3 flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-blue-600" />
                                            特徴
                                        </h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600 mt-1">•</span>
                                                <span>シリコン製で弾力性がある</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600 mt-1">•</span>
                                                <span>舌タグで舌の位置を誘導</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600 mt-1">•</span>
                                                <span>日中1時間＋就寝時の装着</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600 mt-1">•</span>
                                                <span>6〜10歳の混合歯列期に適応</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#5A4D41] mb-3 flex items-center gap-2">
                                            <Users className="w-5 h-5 text-blue-600" />
                                            こんなお子さまに
                                        </h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600 mt-1">✓</span>
                                                <span>口呼吸・舌癖の改善が必要</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600 mt-1">✓</span>
                                                <span>軽度の叢生（歯の重なり）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600 mt-1">✓</span>
                                                <span>前歯の反対咬合</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* マイオブレース */}
                            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-200">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#5A4D41]">マイオブレース（Myobrace）</h3>
                                        <p className="text-sm text-gray-600">段階的に硬さを変えて歯を動かすシステム</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="font-bold text-[#5A4D41] mb-3 flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                            特徴
                                        </h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-600 mt-1">•</span>
                                                <span>4段階のステージで徐々に硬くなる</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-600 mt-1">•</span>
                                                <span>MFT（口腔筋機能療法）プログラムと併用</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-600 mt-1">•</span>
                                                <span>日中1〜2時間＋就寝時の装着</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-600 mt-1">•</span>
                                                <span>3〜15歳まで年齢別にサイズあり</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#5A4D41] mb-3 flex items-center gap-2">
                                            <Users className="w-5 h-5 text-green-600" />
                                            こんなお子さまに
                                        </h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-600 mt-1">✓</span>
                                                <span>筋機能訓練をしっかり行いたい</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-600 mt-1">✓</span>
                                                <span>中等度の歯並びの乱れ</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-600 mt-1">✓</span>
                                                <span>長期的な治療計画を立てたい</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* EF Line */}
                            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-200">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                                        4
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#5A4D41]">EF Line（イフライン）</h3>
                                        <p className="text-sm text-gray-600">ヨーロッパで開発された機能的マウスピース装置</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="font-bold text-[#5A4D41] mb-3 flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-teal-600" />
                                            特徴
                                        </h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="text-teal-600 mt-1">•</span>
                                                <span>ヨーロッパ基準の高品質シリコン製</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-teal-600 mt-1">•</span>
                                                <span>プレオルソに類似した構造と使用方法</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-teal-600 mt-1">•</span>
                                                <span>日中1時間＋就寝時の装着</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-teal-600 mt-1">•</span>
                                                <span>3〜10歳に対応したサイズ展開</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#5A4D41] mb-3 flex items-center gap-2">
                                            <Users className="w-5 h-5 text-teal-600" />
                                            こんなお子さまに
                                        </h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="text-teal-600 mt-1">✓</span>
                                                <span>口呼吸・舌癖がある</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-teal-600 mt-1">✓</span>
                                                <span>軽度〜中等度の不正咬合</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-teal-600 mt-1">✓</span>
                                                <span>柔らかい装置を希望</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* メリット・デメリット */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                メリット・デメリット
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* メリット */}
                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-xl border-2 border-green-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        ◎
                                    </div>
                                    <h3 className="text-2xl font-bold text-green-700">メリット</h3>
                                </div>

                                <ul className="space-y-3 text-[#5A4D41]">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>痛みがほとんどない：</strong>柔らかいシリコン製で違和感が少ない</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>取り外し可能：</strong>食事・歯磨き時は外せるので衛生的</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>根本原因を改善：</strong>口呼吸・舌癖を治すので後戻りしにくい</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>早期開始が可能：</strong>3歳から始められる</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>費用が抑えられる：</strong>既製品なので比較的安価</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>むし歯リスクが低い：</strong>就寝時と日中わずかな時間のみ装着</span>
                                    </li>
                                </ul>
                            </div>

                            {/* デメリット */}
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-xl border-2 border-orange-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        △
                                    </div>
                                    <h3 className="text-2xl font-bold text-orange-700">デメリット</h3>
                                </div>

                                <ul className="space-y-3 text-[#5A4D41]">
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>装着時間を守る必要：</strong>効果を出すには毎日の装着が必須</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>お子さまの協力が必要：</strong>自分で装着できる年齢・性格が必要</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>適応症例が限定的：</strong>重度の不正咬合には効果が薄い</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>治療期間が長い：</strong>1〜2年以上かかることが多い</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>紛失・破損のリスク：</strong>取り外し式のため管理が必要</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 費用について */}
                <section className="py-2 bg-gradient-to-b from-gray-50 to-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                費用について
                            </h2>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-[#8E7CC3]/20 mb-8">
                            <div className="text-center mb-8">
                                <div className="inline-block bg-[#8E7CC3] text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                                    機能的マウスピース装置の費用相場
                                </div>
                                <div className="text-5xl font-bold text-[#8E7CC3] mb-2">
                                    ¥70,000<span className="text-2xl">〜</span>
                                </div>
                                <p className="text-gray-600">（税込 ¥77,000〜）</p>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h4 className="font-bold text-gray-800 mb-4">治療内容に含まれるもの</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "初診相談・カウンセリング",
                                        "精密検査（レントゲン・型取り）",
                                        "診断・治療計画の説明",
                                        "装置代（プレオルソ等）",
                                        "装置の調整・交換費用",
                                        "MFT（筋機能療法）指導",
                                        "経過観察（永久歯生え揃うまで）",
                                        "保定装置"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#8E7CC3] flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 bg-purple-50 p-6 rounded-xl border border-[#8E7CC3]/20">
                                <h4 className="font-bold text-[#5A4D41] mb-3 flex items-center gap-2">
                                    <DollarSign className="w-5 h-5 text-[#8E7CC3]" />
                                    費用の詳細
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#8E7CC3] mt-1">•</span>
                                        <span><strong>通院回数：</strong>月1回程度（1回30分未満）</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#8E7CC3] mt-1">•</span>
                                        <span><strong>治療期間：</strong>平均1〜2年</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#8E7CC3] mt-1">•</span>
                                        <span><strong>料金体系：</strong>トータルフィー制度（追加費用なし）</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#8E7CC3] mt-1">•</span>
                                        <span><strong>支払い方法：</strong>現金・クレジットカード・デンタルローン対応</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                            <div className="flex items-start gap-3">
                                <AlertCircle size={24} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-gray-800 mb-2">医療費控除の対象です</p>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        小児矯正治療は医療費控除の対象となります。確定申告で一部が還付される可能性がありますので、領収書は大切に保管してください。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 治療の流れ */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                治療の流れ
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    step: "STEP 1",
                                    title: "初診相談（無料）",
                                    description: "お子さまの歯並び・咬み合わせを確認し、機能的マウスピース装置が適しているか診断します",
                                    time: "約30分"
                                },
                                {
                                    step: "STEP 2",
                                    title: "精密検査",
                                    description: "レントゲン撮影・セファロ撮影・口腔内写真・型取りなどを行い、詳しい治療計画を立てます",
                                    time: "約1時間"
                                },
                                {
                                    step: "STEP 3",
                                    title: "診断・治療計画の説明",
                                    description: "検査結果をもとに、最適な装置の種類・治療期間・費用について詳しくご説明します",
                                    time: "約30分"
                                },
                                {
                                    step: "STEP 4",
                                    title: "装置の装着・使用方法の指導",
                                    description: "装置をお渡しし、正しい装着方法・お手入れ方法・MFTトレーニングをご指導します",
                                    time: "約30分"
                                },
                                {
                                    step: "STEP 5",
                                    title: "定期通院（月1回）",
                                    description: "装置の使用状況確認・歯並びの変化チェック・MFTトレーニング指導を行います",
                                    time: "1〜2年"
                                },
                                {
                                    step: "STEP 6",
                                    title: "保定期間",
                                    description: "歯並びが安定したら保定装置に切り替え、後戻りを防ぎます",
                                    time: "6ヶ月〜1年"
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-6 hover:shadow-xl transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#8E7CC3] to-[#7E6CB3] rounded-2xl flex items-center justify-center text-white font-bold flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-bold text-[#8E7CC3]">{item.step}</span>
                                                <span className="text-sm text-gray-600">⏱ {item.time}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-[#5A4D41] mb-2">{item.title}</h3>
                                            <p className="text-gray-700 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* よくある質問 */}
                <section className="py-2 bg-gradient-to-b from-gray-50 to-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                よくある質問
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <h3 className="font-bold text-[#5A4D41] text-lg mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-[#8E7CC3] rounded-full flex items-center justify-center text-white text-sm">Q1</span>
                                    何歳から始められますか？
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-10">
                                    <strong className="text-[#8E7CC3]">A.</strong> 3歳から始められます。プレオルソは3〜10歳、マイオブレースは3〜15歳まで年齢別のサイズがあります。早期に始めるほど、口呼吸・舌癖などの悪習癖を改善しやすく、効果が高くなります。
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <h3 className="font-bold text-[#5A4D41] text-lg mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-[#8E7CC3] rounded-full flex items-center justify-center text-white text-sm">Q2</span>
                                    1日どれくらい装着する必要がありますか？
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-10">
                                    <strong className="text-[#8E7CC3]">A.</strong> 基本的には<strong>就寝時＋日中1〜2時間</strong>の装着が必要です。プレオルソは日中1時間＋就寝時、マイオブレースは日中1〜2時間＋就寝時が推奨されています。装着時間が短いと効果が出にくくなります。
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <h3 className="font-bold text-[#5A4D41] text-lg mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-[#8E7CC3] rounded-full flex items-center justify-center text-white text-sm">Q3</span>
                                    痛みはありますか？
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-10">
                                    <strong className="text-[#8E7CC3]">A.</strong> 柔らかいシリコン製のため、<strong>ほとんど痛みはありません</strong>。装着直後は少し違和感がありますが、数日で慣れます。ワイヤー矯正のような強い痛みはないので、お子さまの負担が少ない治療法です。
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <h3 className="font-bold text-[#5A4D41] text-lg mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-[#8E7CC3] rounded-full flex items-center justify-center text-white text-sm">Q4</span>
                                    お手入れ方法は？
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-10">
                                    <strong className="text-[#8E7CC3]">A.</strong> 使用後は<strong>水洗いして乾燥</strong>させるだけです。週に1〜2回、専用の洗浄剤（リテーナー洗浄剤）で洗浄すると清潔に保てます。熱湯消毒は変形の原因になるので避けてください。
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <h3 className="font-bold text-[#5A4D41] text-lg mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-[#8E7CC3] rounded-full flex items-center justify-center text-white text-sm">Q5</span>
                                    治療期間はどれくらいですか？
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-10">
                                    <strong className="text-[#8E7CC3]">A.</strong> 平均<strong>1〜2年</strong>です。お子さまの年齢・症状・装着時間の遵守状況によって変わります。早期に始めて毎日きちんと装着すれば、短期間で効果が出やすくなります。
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <h3 className="font-bold text-[#5A4D41] text-lg mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-[#8E7CC3] rounded-full flex items-center justify-center text-white text-sm">Q6</span>
                                    どんな症状に効果がありますか？
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-10 mb-3">
                                    <strong className="text-[#8E7CC3]">A.</strong> 以下のような症状に効果があります：
                                </p>
                                <ul className="space-y-2 pl-10 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#8E7CC3] mt-1">✓</span>
                                        <span>口呼吸・舌癖・指しゃぶり</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#8E7CC3] mt-1">✓</span>
                                        <span>軽度〜中等度の出っ歯・受け口・開咬</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#8E7CC3] mt-1">✓</span>
                                        <span>軽度の叢生（歯の重なり）</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#8E7CC3] mt-1">✓</span>
                                        <span>交叉咬合（奥歯の咬み合わせの異常）</span>
                                    </li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed pl-10 mt-3">
                                    ただし、<strong>重度の骨格的な問題</strong>には効果が限定的です。まずは無料相談で適応かどうかご確認ください。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-2 bg-gradient-to-br from-[#F3E8FF] to-[#E8D5FF]">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-[#8E7CC3]/20">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#5A4D41]">
                                お子さまに最適な装置を<br />
                                <span className="text-4xl md:text-5xl block mt-2 text-[#8E7CC3]">無料でご提案</span>
                            </h2>
                            <p className="text-lg md:text-xl mb-4 text-gray-700">
                                機能的マウスピース装置が適しているか、まずは無料相談でご確認ください
                            </p>
                            <p className="text-gray-600 mb-12">
                                相談料は保険診療の範囲内のみ。無理な勧誘は一切いたしません。
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto mb-8">
                                <a
                                    href="https://apo-toolboxes.stransa.co.jp/user/web/babordc4ba29b/reservations"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-[#8E7CC3] text-white px-8 py-5 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-[#7E6CB3] transition-all transform hover:scale-105 flex items-center justify-center gap-3 text-lg"
                                >
                                    <Calendar size={24} className="group-hover:rotate-12 transition-transform" />
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs">24時間受付</span>
                                        <span className="text-lg font-bold">WEB予約</span>
                                    </div>
                                </a>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                                <a href="/kidsortho/appliances" className="flex items-center gap-2 text-[#8E7CC3] hover:text-[#7E6CB3] transition-colors">
                                    <ArrowRight size={16} />
                                    装置一覧に戻る
                                </a>
                                <a href="/kidsortho/cost" className="flex items-center gap-2 text-[#8E7CC3] hover:text-[#7E6CB3] transition-colors">
                                    <ArrowRight size={16} />
                                    費用について
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
