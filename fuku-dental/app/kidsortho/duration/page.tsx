import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { Clock, ArrowRight, CheckCircle, AlertCircle, TrendingUp, Calendar, Info, Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function KidsOrthoDurationPage() {
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
                            <span className="text-[#E67A2E]">治療期間</span>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="py-6 md:py-6 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                                小児矯正はいつ終わる？<br />「長い」と感じる理由
                            </h1>
                            <div className="w-24 h-1 bg-[#E67A2E] mx-auto mb-8"></div>
                            <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                                期間が長いのは成長を待つ時間（経過観察）が含まれるから
                            </p>
                            <p className="text-lg text-[#8D8070] leading-relaxed">
                                I期治療とII期治療のタイムラインを詳しく解説します
                            </p>
                        </div>
                    </div>
                </section>

                {/* 結論：標準的な治療期間 */}
                <section className="py-6 md:py-6 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">標準的な治療期間</h2>
                                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
                            </div>
                            <div className="text-center mb-12">
                                <div className="inline-block bg-[#FF9F43]/10 px-6 py-2 rounded-full text-[#E67A2E] font-bold text-sm mb-4 border border-[#FF9F43]/20">
                                    結論
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                    <span className="text-5xl md:text-6xl block mt-2 text-[#E67A2E]">1〜3年</span>
                                </h3>
                                <p className="text-lg md:text-xl text-[#8D8070]">
                                    1期治療のみで完了する場合（治療開始から保定期間終了まで）
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-2xl p-6 border-2 border-[#FF9F43]/20 shadow-sm hover:shadow-md transition">
                                    <h3 className="text-xl font-bold mb-3 text-[#5A4D41]">1期治療のみで完了（約60%）</h3>
                                    <div className="space-y-2 text-[#8D8070]">
                                        <div className="flex justify-between items-center">
                                            <span>積極的治療</span>
                                            <span className="font-bold text-[#E67A2E]">6〜24ヶ月</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>保定期間</span>
                                            <span className="font-bold text-[#E67A2E]">6〜12ヶ月</span>
                                        </div>
                                        <div className="border-t border-[#E67A2E]/20 pt-2 mt-2 flex justify-between items-center font-bold text-lg text-[#5A4D41]">
                                            <span>合計</span>
                                            <span className="text-[#E67A2E]">1〜3年</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 border-2 border-[#FF9F43]/20 shadow-sm hover:shadow-md transition">
                                    <h3 className="text-xl font-bold mb-3 text-[#5A4D41]">1期+2期治療が必要な場合（約40%）</h3>
                                    <div className="space-y-2 text-[#8D8070]">
                                        <div className="flex justify-between items-center">
                                            <span>1期治療</span>
                                            <span className="font-bold text-[#E67A2E]">1〜2年</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>観察期間</span>
                                            <span className="font-bold text-[#E67A2E]">1〜2年</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>2期治療</span>
                                            <span className="font-bold text-[#E67A2E]">1〜2年</span>
                                        </div>
                                        <div className="border-t border-[#E67A2E]/20 pt-2 mt-2 flex justify-between items-center font-bold text-lg text-[#5A4D41]">
                                            <span>合計</span>
                                            <span className="text-[#E67A2E]">3〜6年</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 1期治療の期間詳細 */}
                <section className="py-6 md:py-6 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">1期治療（小児矯正）の期間</h2>
                                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
                            </div>
                            <div className="text-center mb-12">
                                <p className="text-lg text-[#8D8070]">
                                    顎の成長を利用した治療フェーズ
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-[#E8F2ED] to-[#D4E8DC] rounded-2xl p-8 md:p-10 shadow-xl border-2 border-[#395b45]/20 mb-12">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-16 h-16 bg-[#395b45] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                                        <Clock className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#5A4D41] mb-2">
                                            1期治療の標準期間：1〜3年
                                        </h3>
                                        <p className="text-[#8D8070] leading-relaxed">
                                            対象年齢：3〜12歳（混合歯列期）<br />
                                            使用装置：拡大床、機能的矯正装置、MFTトレーナーなど
                                        </p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                                        <h4 className="font-bold text-[#395b45] mb-3 flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5" />
                                            積極的治療期間：6〜24ヶ月
                                        </h4>
                                        <p className="text-sm text-[#5A4D41] mb-3">
                                            装置を装着して、顎の拡大や歯の移動を行う期間
                                        </p>
                                        <ul className="text-sm text-[#8D8070] space-y-2">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-0.5">•</span>
                                                <span>月に1回の通院（調整・経過観察）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-0.5">•</span>
                                                <span>装置の装着時間を厳守（12〜16時間/日）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-0.5">•</span>
                                                <span>歯並びの変化を実感できる期間</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                                        <h4 className="font-bold text-[#395b45] mb-3 flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5" />
                                            保定期間：6〜12ヶ月
                                        </h4>
                                        <p className="text-sm text-[#5A4D41] mb-3">
                                            治療した歯並びを安定させる期間
                                        </p>
                                        <ul className="text-sm text-[#8D8070] space-y-2">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-0.5">•</span>
                                                <span>保定装置の装着（主に就寝時）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-0.5">•</span>
                                                <span>2〜3ヶ月に1回の通院</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-0.5">•</span>
                                                <span>後戻りを防ぐ重要な期間</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                                    <h4 className="font-bold text-[#E67A2E] mb-3">短い場合（6〜9ヶ月）</h4>
                                    <ul className="text-sm text-[#8D8070] space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#395b45]">✓</span>
                                            <span>軽度の叢生や交叉咬合</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#395b45]">✓</span>
                                            <span>開始年齢が早い（3〜6歳）</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#395b45]">✓</span>
                                            <span>装着時間を厳守している</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#395b45]">
                                    <h4 className="font-bold text-[#395b45] mb-3">標準的（1〜1.5年）</h4>
                                    <ul className="text-sm text-[#8D8070] space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#395b45]">✓</span>
                                            <span>中等度の不正咬合</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#395b45]">✓</span>
                                            <span>6〜9歳での開始</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#395b45]">✓</span>
                                            <span>指示通りの装着時間</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                                    <h4 className="font-bold text-[#E67A2E] mb-3">長い場合（1.5〜2年）</h4>
                                    <ul className="text-sm text-[#8D8070] space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#E67A2E]">•</span>
                                            <span>重度の不正咬合</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#E67A2E]">•</span>
                                            <span>開始年齢が遅い（9歳以降）</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#E67A2E]">•</span>
                                            <span>装着時間が不十分</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2期治療の期間 */}
                <section className="py-6 md:py-6 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">2期治療（本格矯正）の期間</h2>
                                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
                            </div>
                            <div className="text-center mb-12">
                                <p className="text-lg text-[#8D8070]">
                                    永久歯列期の仕上げ矯正
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-[#FFF9F0] to-[#FFE9CC] rounded-2xl p-8 md:p-10 shadow-xl border-2 border-[#E67A2E]/20 mb-12">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-16 h-16 bg-[#E67A2E] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                                        <Clock className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#5A4D41] mb-2">
                                            2期治療の期間：1〜3年
                                        </h3>
                                        <p className="text-[#8D8070] leading-relaxed">
                                            対象年齢：12歳以降（永久歯列期）<br />
                                            使用装置：ワイヤー矯正、マウスピース矯正など
                                        </p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 border-[#395b45]">
                                        <h4 className="font-bold text-[#395b45] mb-3">1期治療を行った場合</h4>
                                        <div className="text-4xl font-bold text-[#395b45] mb-2">1〜1.5年</div>
                                        <p className="text-sm text-[#5A4D41] mb-3">
                                            1期治療で顎のバランスが整っているため、細かい調整のみで完了
                                        </p>
                                        <ul className="text-sm text-[#8D8070] space-y-1">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-[#395b45] flex-shrink-0 mt-0.5" />
                                                <span>抜歯の可能性が低い</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-[#395b45] flex-shrink-0 mt-0.5" />
                                                <span>治療範囲が限定的</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-[#395b45] flex-shrink-0 mt-0.5" />
                                                <span>費用も抑えられる（30〜60万円）</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                                        <h4 className="font-bold text-red-700 mb-3">1期治療を行わなかった場合</h4>
                                        <div className="text-4xl font-bold text-red-600 mb-2">2〜3年</div>
                                        <p className="text-sm text-[#5A4D41] mb-3">
                                            顎のバランス調整と歯の移動を同時に行うため、治療が複雑化
                                        </p>
                                        <ul className="text-sm text-[#8D8070] space-y-1">
                                            <li className="flex items-start gap-2">
                                                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                                                <span>抜歯が必要になる可能性が高い</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                                                <span>治療範囲が広範囲</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                                                <span>費用が高額（60〜80万円）</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                                    <p className="text-sm text-[#5A4D41]">
                                        <strong className="text-blue-600">エビデンス：</strong>
                                        Tulloch et al. (2004) の研究では、1期治療を行った群は2期治療のみの群と比較して、総治療期間が平均40%短縮（24ヶ月 vs. 40ヶ月）されたことが報告されています。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 治療期間に影響する要因 */}
                <section className="py-6 md:py-6 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">治療期間に影響する5つの要因</h2>
                                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
                            </div>
                            <div className="text-center mb-12">
                                <p className="text-lg text-[#8D8070]">
                                    治療期間が長くなる・短くなる理由
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                                            1
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-[#5A4D41] mb-3">開始年齢</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                                                    <p className="font-bold text-green-700 mb-2">✓ 期間が短くなる</p>
                                                    <p className="text-sm text-[#5A4D41]">
                                                        <strong>3〜7歳で開始：</strong>顎の成長を最大限利用でき、骨の拡大が容易。6〜24ヶ月で1期治療完了が可能。
                                                    </p>
                                                </div>
                                                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                                                    <p className="font-bold text-red-700 mb-2">× 期間が長くなる</p>
                                                    <p className="text-sm text-[#5A4D41]">
                                                        <strong>9歳以降で開始：</strong>顎の成長が鈍化し、骨の拡大が困難。1〜2年以上かかるケースが増加。
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                                            2
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-[#5A4D41] mb-3">不正咬合の重症度</h3>
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div className="bg-[#E8F2ED] rounded-xl p-4">
                                                    <p className="font-bold text-[#395b45] mb-2">軽度</p>
                                                    <p className="text-sm text-[#5A4D41] mb-2">6〜9ヶ月</p>
                                                    <p className="text-xs text-[#8D8070]">
                                                        軽い叢生、交叉咬合など
                                                    </p>
                                                </div>
                                                <div className="bg-[#FFF9F0] rounded-xl p-4">
                                                    <p className="font-bold text-[#E67A2E] mb-2">中等度</p>
                                                    <p className="text-sm text-[#5A4D41] mb-2">1〜1.5年</p>
                                                    <p className="text-xs text-[#8D8070]">
                                                        出っ歯、受け口など
                                                    </p>
                                                </div>
                                                <div className="bg-red-50 rounded-xl p-4">
                                                    <p className="font-bold text-red-700 mb-2">重度</p>
                                                    <p className="text-sm text-[#5A4D41] mb-2">1.5〜2年+</p>
                                                    <p className="text-xs text-[#8D8070]">
                                                        骨格的な問題、重度の叢生
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                                            3
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-[#5A4D41] mb-3">装着時間の遵守</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                                                    <p className="font-bold text-green-700 mb-2">✓ 指示通り（14〜16時間/日）</p>
                                                    <ul className="text-sm text-[#5A4D41] space-y-1">
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-[#395b45]">•</span>
                                                            <span>計画通りの期間で完了</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-[#395b45]">•</span>
                                                            <span>後戻りのリスクが低い</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-[#395b45]">•</span>
                                                            <span>追加費用なし</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                                                    <p className="font-bold text-red-700 mb-2">× 不十分（10時間以下/日）</p>
                                                    <ul className="text-sm text-[#5A4D41] space-y-1">
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-red-600">•</span>
                                                            <span>治療期間が1.5〜2倍に延長</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-red-600">•</span>
                                                            <span>後戻りが発生しやすい</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-red-600">•</span>
                                                            <span>装置の再製作が必要になることも</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                                            4
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-[#5A4D41] mb-3">定期通院の遵守</h3>
                                            <p className="text-[#8D8070] mb-4">
                                                月に1回の定期調整に通えなくなると、治療の進行が遅れ、期間が延びます。特に拡大床などは定期的な調整が必須です。
                                            </p>
                                            <div className="bg-yellow-50 rounded-xl p-4 border-l-4 border-yellow-400">
                                                <p className="text-sm text-[#5A4D41]">
                                                    <strong className="text-yellow-700">例：</strong>3回連続で調整を延期すると、約3ヶ月の遅延が発生。1年の予定が1年3ヶ月に延長される可能性があります。
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                                            5
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-[#5A4D41] mb-3">悪習癖の有無</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <p className="font-bold text-[#5A4D41] mb-2">期間を延ばす悪習癖</p>
                                                    <ul className="text-sm text-[#8D8070] space-y-2">
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-red-600">•</span>
                                                            <span><strong>指しゃぶり：</strong>前歯が前に押し出される</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-red-600">•</span>
                                                            <span><strong>舌癖：</strong>矯正した歯が元に戻る</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-red-600">•</span>
                                                            <span><strong>口呼吸：</strong>顎の成長に悪影響</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-[#395b45] mb-2">対策</p>
                                                    <p className="text-sm text-[#5A4D41] mb-3">
                                                        MFT（口腔筋機能療法）を併用することで、悪習癖を改善し、治療期間の延長を防ぎます。
                                                    </p>
                                                    <div className="bg-[#E8F2ED] rounded-lg p-3">
                                                        <p className="text-xs text-[#5A4D41]">
                                                            早期に悪習癖を改善すれば、治療期間を3〜6ヶ月短縮できる可能性があります
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                                            <h3 className="font-bold text-[#5A4D41] text-lg">治療期間を短くする方法はありますか？</h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-relaxed">
                                        <p className="mb-3">
                                            <strong className="text-[#E67A2E]">A.</strong> 以下の3点を守ることで、計画通りの期間で完了できます：
                                        </p>
                                        <ul className="space-y-2 mb-3 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-1">✓</span>
                                                <span>装置の装着時間を厳守（14〜16時間/日）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-1">✓</span>
                                                <span>月1回の定期調整を必ず受診</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-1">✓</span>
                                                <span>悪習癖（指しゃぶり・舌癖など）をMFTで改善</span>
                                            </li>
                                        </ul>
                                        <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                                            早期に治療を開始することで、より短期間で効果的な治療が可能です。3〜7歳で開始した場合、6〜12ヶ月で完了できるケースも多くあります。
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                                            <h3 className="font-bold text-[#5A4D41] text-lg">1期治療だけで終わる確率はどのくらいですか？</h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-relaxed">
                                        <p className="mb-3">
                                            <strong className="text-[#E67A2E]">A.</strong> 約60%のお子さまは1期治療のみで治療が完了します。特に、6〜9歳で治療を開始し、装着時間を守った場合は、2期治療が不要になる確率が高まります。
                                        </p>
                                        <p className="text-sm bg-green-50 p-4 rounded-lg border border-green-200">
                                            <strong className="text-green-700">早期開始のメリット：</strong>1期治療で顎のバランスを整えることで、永久歯が正しい位置に生え揃いやすくなり、2期治療が不要になるケースが多くなります。
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                                            <h3 className="font-bold text-[#5A4D41] text-lg">2期治療はいつから始めますか？</h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-relaxed">
                                        <p className="mb-3">
                                            <strong className="text-[#E67A2E]">A.</strong> 永久歯が生え揃う12〜14歳頃から開始します。1期治療終了後、1〜2年の観察期間を設け、永久歯の萌出状況を確認してから2期治療の必要性を判断します。
                                        </p>
                                        <p className="text-sm bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                            <strong className="text-blue-600">重要：</strong>すぐに開始するのではなく、適切なタイミングを見極めることが重要です。観察期間中は2〜3ヶ月に1回の通院で経過を確認します。
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                                            <h3 className="font-bold text-[#5A4D41] text-lg">治療期間中、通院頻度はどのくらいですか？</h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-relaxed">
                                        <p className="mb-3">
                                            <strong className="text-[#E67A2E]">A.</strong> 治療段階によって通院頻度が異なります：
                                        </p>
                                        <ul className="space-y-2 mb-3 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#E67A2E] mt-1">•</span>
                                                <span><strong>1期治療（積極的治療期間）：</strong>月に1回の調整</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#E67A2E] mt-1">•</span>
                                                <span><strong>保定期間：</strong>2〜3ヶ月に1回の経過観察</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#E67A2E] mt-1">•</span>
                                                <span><strong>2期治療：</strong>月に1回の調整</span>
                                            </li>
                                        </ul>
                                        <p className="text-sm bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                                            <strong className="text-yellow-700">ポイント：</strong>定期的な通院を守ることで、計画通りに治療が進み、期間の延長を防げます。
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                                            <h3 className="font-bold text-[#5A4D41] text-lg">装置をつけたまま部活やスポーツはできますか？</h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-relaxed">
                                        <p className="mb-3">
                                            <strong className="text-[#E67A2E]">A.</strong> はい、ほとんどの部活動やスポーツは問題なく行えます。
                                        </p>
                                        <ul className="space-y-2 mb-3 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-1">✓</span>
                                                <span><strong>取り外し式装置（拡大床など）：</strong>スポーツ時には外すことができます</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-1">✓</span>
                                                <span><strong>固定式装置：</strong>マウスガードの使用をお勧めします</span>
                                            </li>
                                        </ul>
                                        <p className="text-sm bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                                            <strong className="text-yellow-700">注意：</strong>コンタクトスポーツ（ラグビー、柔道など）の場合は、安全のため装置を外すか、専用のマウスガードを使用することをお勧めします。
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q6</span>
                                            <h3 className="font-bold text-[#5A4D41] text-lg">保定期間を守らないとどうなりますか？</h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-relaxed">
                                        <p className="mb-3">
                                            <strong className="text-[#E67A2E]">A.</strong> 保定装置を使用しないと、せっかく整えた歯並びが元に戻ってしまいます（後戻り）。
                                        </p>
                                        <ul className="space-y-2 mb-3 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-red-600 mt-1">⚠</span>
                                                <span><strong>治療直後の6ヶ月間</strong>は特に後戻りしやすい時期です</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-red-600 mt-1">⚠</span>
                                                <span>後戻りした場合、<strong>再治療が必要</strong>になります</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-red-600 mt-1">⚠</span>
                                                <span>追加の期間と費用がかかります</span>
                                            </li>
                                        </ul>
                                        <p className="text-sm bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                                            <strong className="text-red-700">重要：</strong>保定期間は治療の一部です。保定装置の使用を守ることで、治療の成果を長期的に維持できます。
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
                                <Link href="/kidsortho" className="group bg-white p-6 rounded-2xl border-2 border-[#E67A2E]/20 hover:border-[#E67A2E]/40 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">こども矯正トップ</h3>
                                    <p className="text-[#8D8070] mb-4">
                                        こども矯正の総合情報
                                    </p>
                                    <div className="flex items-center text-[#E67A2E] font-semibold group-hover:translate-x-2 transition-transform">
                                        詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                                    </div>
                                </Link>

                                <Link href="/kidsortho/timing" className="group bg-white p-6 rounded-2xl border-2 border-[#E67A2E]/20 hover:border-[#E67A2E]/40 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">いつから始めるべきか</h3>
                                    <p className="text-[#8D8070] mb-4">
                                        こども矯正を始める最適なタイミング
                                    </p>
                                    <div className="flex items-center text-[#E67A2E] font-semibold group-hover:translate-x-2 transition-transform">
                                        詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                                    </div>
                                </Link>

                                <Link href="/kidsortho/cost" className="group bg-white p-6 rounded-2xl border-2 border-[#E67A2E]/20 hover:border-[#E67A2E]/40 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">費用について</h3>
                                    <p className="text-[#8D8070] mb-4">
                                        こども矯正にかかる費用の詳細
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
                                お子さまの治療期間を詳しくシミュレーション
                            </h2>
                            <p className="text-xl mb-8 text-white/90">
                                精密検査で現在の歯並びを分析し、治療期間・装置・費用を詳しくご説明します
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
