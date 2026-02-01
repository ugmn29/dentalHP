"use client";

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { CheckCircle2, AlertCircle, Calendar, ArrowRight, DollarSign, Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function KidsOrthoCostPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF7] text-[#5A4D41]" style={{ fontFamily: '"M PLUS Rounded 1c", "Hiragino Maru Gothic ProN", "Zen Maru Gothic", sans-serif' }}>
            <Header />

            <main>
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
                            <span className="text-[#E67A2E]">費用・医療費控除</span>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="py-6 md:py-6 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                                こども矯正の費用
                            </h1>
                            <div className="w-24 h-1 bg-[#E67A2E] mx-auto mb-8"></div>
                            <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                                明確な料金体系で安心
                            </p>
                            <p className="text-lg text-[#8D8070] leading-relaxed">
                                安心して治療を始めていただけます
                            </p>
                        </div>
                    </div>
                </section>

                {/* 一般的なこども矯正の費用相場 */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">一般的なこども矯正の費用相場</h2>
                            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
                        </div>
                        <div className="text-center mb-12">
                            <p className="text-gray-600">
                                まずは、他院も含めた一般的な費用相場をご紹介します
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {/* 1期治療 */}
                            <div className="bg-gradient-to-br from-orange-50 to-white p-6 md:p-8 rounded-2xl border-2 border-orange-200 shadow-md">
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-3">1期治療（小児矯正）</h3>
                                    <p className="text-sm text-gray-600 mb-4">対象年齢：3〜12歳（混合歯列期）</p>
                                    <div className="text-4xl font-bold text-[#E67A2E] mb-2">
                                        30〜50万円
                                    </div>
                                    <p className="text-sm text-gray-600">（税込）</p>
                                </div>
                            </div>

                            {/* 2期治療 */}
                            <div className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 rounded-2xl border-2 border-blue-200 shadow-md">
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-3">2期治療（仕上げの矯正）</h3>
                                    <p className="text-sm text-gray-600 mb-4">対象：永久歯が生え揃った後</p>
                                    <div className="text-4xl font-bold text-blue-600 mb-2">
                                        40〜80万円
                                    </div>
                                    <p className="text-sm text-gray-600">（税込）</p>
                                </div>
                            </div>

                            {/* 超早期治療 */}
                            <div className="bg-gradient-to-br from-green-50 to-white p-6 md:p-8 rounded-2xl border-2 border-green-200 shadow-md">
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-3">超早期治療</h3>
                                    <p className="text-sm text-gray-600 mb-4">受け口など（3歳前後〜）</p>
                                    <div className="text-4xl font-bold text-green-600 mb-2">
                                        10〜20万円
                                    </div>
                                    <p className="text-sm text-gray-600">（税込）</p>
                                </div>
                            </div>

                            {/* 調整料 */}
                            <div className="bg-gradient-to-br from-purple-50 to-white p-6 md:p-8 rounded-2xl border-2 border-purple-200 shadow-md">
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-3">調整料（毎回）</h3>
                                    <p className="text-sm text-gray-600 mb-4">月1回の通院ごと</p>
                                    <div className="text-4xl font-bold text-purple-600 mb-2">
                                        3,000〜5,000円
                                    </div>
                                    <p className="text-sm text-gray-600">（税込/回）</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                            <div className="flex items-start gap-3">
                                <AlertCircle size={24} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-gray-800 mb-2">相場はあくまで目安です</p>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        上記は一般的な相場であり、実際の費用は医院の料金体系、治療内容、お子様の症状によって異なります。
                                        <span className="font-bold text-yellow-700">「総額でいくらかかるのか」</span>を必ず確認しましょう。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 費用で確認すべき注意点（チェックリスト） */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">費用で確認すべき重要ポイント</h2>
                            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
                        </div>
                        <div className="text-center mb-12">
                            <p className="text-gray-600">
                                他院と比較検討する際は、以下の項目を必ず確認しましょう
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border-2 border-[#E67A2E]/20 mb-8">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-200">
                                <div className="w-10 h-10 bg-[#E67A2E] rounded-full flex items-center justify-center flex-shrink-0">
                                    <DollarSign size={24} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#5A4D41]">費用確認チェックリスト</h3>
                            </div>

                            <div className="space-y-6">
                                {/* チェック項目1 */}
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50 transition-colors">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 border-2 border-[#E67A2E] rounded flex items-center justify-center bg-white">
                                            <CheckCircle2 size={16} className="text-[#E67A2E]" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-800 mb-2 text-lg">調整料の扱いを確認</h4>
                                        <p className="text-sm text-gray-700 leading-relaxed mb-2">
                                            毎回の通院で<span className="font-bold text-[#E67A2E]">調整料が別途かかるのか</span>、
                                            それとも<span className="font-bold text-[#E67A2E]">トータルフィーに含まれるのか</span>を確認しましょう。
                                        </p>
                                        <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
                                            <p className="text-sm text-red-800">
                                                <span className="font-bold">注意：</span>
                                                月1回通院で調整料5,000円の場合、2年間で<span className="font-bold">約12万円</span>の追加費用になります
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* チェック項目2 */}
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50 transition-colors">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 border-2 border-[#E67A2E] rounded flex items-center justify-center bg-white">
                                            <CheckCircle2 size={16} className="text-[#E67A2E]" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-800 mb-2 text-lg">2期治療への移行時の費用</h4>
                                        <p className="text-sm text-gray-700 leading-relaxed mb-2">
                                            1期治療後に2期治療が必要になった場合の費用を確認しましょう。
                                        </p>
                                        <ul className="text-sm text-gray-700 space-y-1 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#E67A2E] mt-1">•</span>
                                                <span>1期から継続の場合の<span className="font-bold">割引</span>はあるか</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#E67A2E] mt-1">•</span>
                                                <span>2期治療の<span className="font-bold">別途料金</span>はいくらか</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#E67A2E] mt-1">•</span>
                                                <span>「1期で終わる」と言われても2期が必要になるケースがある</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* チェック項目3 */}
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50 transition-colors">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 border-2 border-[#E67A2E] rounded flex items-center justify-center bg-white">
                                            <CheckCircle2 size={16} className="text-[#E67A2E]" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-800 mb-2 text-lg">経過観察期間の費用</h4>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            1期治療後、永久歯が生え揃うまでの「待機期間」の通院費用はどうなるか確認しましょう。
                                            無料の医院もあれば、別途費用がかかる医院もあります。
                                        </p>
                                    </div>
                                </div>

                                {/* チェック項目4 */}
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50 transition-colors">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 border-2 border-[#E67A2E] rounded flex items-center justify-center bg-white">
                                            <CheckCircle2 size={16} className="text-[#E67A2E]" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-800 mb-2 text-lg">装置の破損・紛失・追加費用</h4>
                                        <p className="text-sm text-gray-700 leading-relaxed mb-2">
                                            装置が壊れた、なくした、成長に合わせて作り直す場合の費用を確認しましょう。
                                        </p>
                                        <ul className="text-sm text-gray-700 space-y-1 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#E67A2E] mt-1">•</span>
                                                <span>装置の<span className="font-bold">破損・紛失</span>時の再作成費用</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#E67A2E] mt-1">•</span>
                                                <span>成長に伴う装置の<span className="font-bold">サイズアップ・交換</span>費用</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* チェック項目5 */}
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50 transition-colors">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 border-2 border-[#E67A2E] rounded flex items-center justify-center bg-white">
                                            <CheckCircle2 size={16} className="text-[#E67A2E]" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-800 mb-2 text-lg">検査・診断料</h4>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            初回検査時のレントゲン・セファロ撮影費用、経過観察時の追加撮影費用が含まれるか確認しましょう。
                                        </p>
                                    </div>
                                </div>

                                {/* チェック項目6 */}
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50 transition-colors">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 border-2 border-[#E67A2E] rounded flex items-center justify-center bg-white">
                                            <CheckCircle2 size={16} className="text-[#E67A2E]" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-800 mb-2 text-lg">保定期間の費用</h4>
                                        <p className="text-sm text-gray-700 leading-relaxed mb-2">
                                            治療後の後戻り防止期間にかかる費用を確認しましょう。
                                        </p>
                                        <ul className="text-sm text-gray-700 space-y-1 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#E67A2E] mt-1">•</span>
                                                <span>リテーナー（保定装置）の費用</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#E67A2E] mt-1">•</span>
                                                <span>保定期間中の通院費用</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* チェック項目7 */}
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50 transition-colors">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 border-2 border-[#E67A2E] rounded flex items-center justify-center bg-white">
                                            <CheckCircle2 size={16} className="text-[#E67A2E]" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-800 mb-2 text-lg">虫歯治療・抜歯の費用</h4>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            矯正治療前に虫歯治療が必要な場合や、抜歯が必要になった場合の費用は別途かかります（保険診療）。
                                        </p>
                                    </div>
                                </div>

                                {/* チェック項目8 */}
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50 transition-colors">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 border-2 border-[#E67A2E] rounded flex items-center justify-center bg-white">
                                            <CheckCircle2 size={16} className="text-[#E67A2E]" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-800 mb-2 text-lg">中断・転院時の返金ポリシー</h4>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            治療途中でやめた場合や転院する場合の返金規定を事前に確認しておきましょう。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* トータルフィー vs 都度払い */}
                        <div className="text-center mb-8 mt-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-3">
                                料金体系の違いを理解しましょう
                            </h3>
                            <p className="text-gray-600">
                                2つの料金体系を比較
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#E67A2E]">
                                <h3 className="text-xl font-bold text-[#5A4D41] mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-[#E67A2E] text-white rounded-full flex items-center justify-center text-sm">✓</span>
                                    トータルフィー制度
                                </h3>
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-700">最初に総額を提示、追加費用なし</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-700">予算が立てやすく安心</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-700">調整料・経過観察料も込み</p>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600 bg-orange-50 p-3 rounded-lg">
                                    <span className="font-bold text-[#E67A2E]">当院はこちら：</span>
                                    治療開始時に総額を明示します
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-300">
                                <h3 className="text-xl font-bold text-[#5A4D41] mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center text-sm">！</span>
                                    都度払い制度
                                </h3>
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-start gap-2">
                                        <AlertCircle size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-700">毎回の通院で調整料が発生</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <AlertCircle size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-700">治療期間が延びると総額が増える</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <AlertCircle size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-700">最終的な総額が見えにくい</p>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600 bg-yellow-50 p-3 rounded-lg">
                                    <span className="font-bold text-yellow-700">注意：</span>
                                    「安い」と感じても、総額では高くなることも
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 費用を抑えるポイント */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">費用を抑えるポイント</h2>
                            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
                        </div>

                        <div className="space-y-6">
                            {/* 医療費控除 */}
                            <div className="bg-gradient-to-r from-green-50 to-white p-6 md:p-8 rounded-2xl border-l-4 border-green-500">
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                                        1
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">医療費控除を活用</h3>
                                        <p className="text-gray-700 mb-3">
                                            小児矯正は医療費控除の対象です。年間の医療費が10万円を超えた場合、確定申告で所得税の還付が受けられます。
                                        </p>
                                        <div className="bg-white p-4 rounded-xl">
                                            <p className="text-sm font-bold text-green-700 mb-2">控除額の例（年収500万円の場合）</p>
                                            <p className="text-sm text-gray-700">治療費40万円 → <span className="font-bold text-green-600">約6万円</span>の税金還付</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* デンタルローン */}
                            <div className="bg-gradient-to-r from-blue-50 to-white p-6 md:p-8 rounded-2xl border-l-4 border-blue-500">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                                        2
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">デンタルローン・分割払い</h3>
                                        <p className="text-gray-700 mb-3">
                                            月々の負担を抑えて治療を開始できます。審査も簡単で、お手続きは当院でサポートいたします。
                                        </p>
                                        <div className="bg-white p-4 rounded-xl">
                                            <p className="text-sm font-bold text-blue-700 mb-2">分割払いの例（40万円の場合）</p>
                                            <div className="space-y-1 text-sm text-gray-700">
                                                <p>• 24回払い：月々 <span className="font-bold text-blue-600">約17,000円</span></p>
                                                <p>• 36回払い：月々 <span className="font-bold text-blue-600">約12,000円</span></p>
                                                <p>• 60回払い：月々 <span className="font-bold text-blue-600">約7,500円</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 早期治療 */}
                            <div className="bg-gradient-to-r from-orange-50 to-white p-6 md:p-8 rounded-2xl border-l-4 border-orange-500">
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                                        3
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">早期治療で2期治療を不要に</h3>
                                        <p className="text-gray-700 mb-3">
                                            適切な時期に1期治療を開始することで、2期治療が不要になるケースが多くあります。結果的に総費用を抑えられます。
                                        </p>
                                        <div className="bg-white p-4 rounded-xl">
                                            <p className="text-sm text-gray-700">1期治療のみで完了 → <span className="font-bold text-orange-600">約30〜60万円の節約</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 他院との比較 */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">当院の料金は適正価格です</h2>
                            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
                        </div>
                        <div className="text-center mb-12">
                            <p className="text-gray-600">東京都内の小児矯正の相場と比較</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-[#E67A2E] text-white">
                                    <tr>
                                        <th className="py-4 px-4 text-left font-bold">項目</th>
                                        <th className="py-4 px-4 text-center font-bold">都内相場</th>
                                        <th className="py-4 px-4 text-center font-bold bg-[#D66A28]">当院</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-4 px-4 font-bold text-gray-800">1期治療</td>
                                        <td className="py-4 px-4 text-center text-gray-700">30〜50万円</td>
                                        <td className="py-4 px-4 text-center bg-orange-50 font-bold text-[#E67A2E]">35〜45万円</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-4 px-4 font-bold text-gray-800">2期治療</td>
                                        <td className="py-4 px-4 text-center text-gray-700">40〜80万円</td>
                                        <td className="py-4 px-4 text-center bg-orange-50 font-bold text-[#E67A2E]">30〜60万円</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-4 px-4 font-bold text-gray-800">調整料（毎回）</td>
                                        <td className="py-4 px-4 text-center text-gray-700">3,000〜5,000円</td>
                                        <td className="py-4 px-4 text-center bg-orange-50 font-bold text-[#E67A2E]">無料（込み）</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 font-bold text-gray-800">料金体系</td>
                                        <td className="py-4 px-4 text-center text-gray-700">都度払い</td>
                                        <td className="py-4 px-4 text-center bg-orange-50 font-bold text-[#E67A2E]">トータルフィー</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 bg-white p-6 rounded-2xl border-2 border-[#E67A2E]/20">
                            <div className="flex items-start gap-3">
                                <AlertCircle size={24} className="text-[#E67A2E] flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-gray-800 mb-2">当院のトータルフィー制度の特徴</p>
                                    <p className="text-sm text-gray-700">
                                        毎回の調整料が無料（治療費に含まれる）のため、総額が明確です。他院では毎回3,000〜5,000円の調整料がかかり、
                                        2年間の治療で<span className="font-bold text-[#E67A2E]">追加で7万円〜12万円</span>かかることもあります。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 当院の費用体系について */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">当院の費用体系について</h2>
                            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
                        </div>
                        <div className="text-center mb-12">
                            <p className="text-gray-600">
                                ここからは、F歯科・矯正歯科のこども矯正費用について詳しくご説明します
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-[#E67A2E]/20">
                            <div className="text-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-4">
                                    安心のトータルフィー制度
                                </h3>
                                <p className="text-lg mb-6 text-gray-700">
                                    最初にご提示した金額から<span className="font-bold text-[#E67A2E]">費用が変わらない</span>明確な料金体系
                                </p>
                                <div className="grid md:grid-cols-3 gap-6 mt-8">
                                    <div className="bg-orange-50 p-6 rounded-2xl border border-[#E67A2E]/20">
                                        <div className="text-4xl mb-2">✓</div>
                                        <h4 className="font-bold text-lg mb-2 text-[#5A4D41]">追加費用なし</h4>
                                        <p className="text-sm text-gray-700">治療途中での追加費用は一切ありません</p>
                                    </div>
                                    <div className="bg-orange-50 p-6 rounded-2xl border border-[#E67A2E]/20">
                                        <div className="text-4xl mb-2">✓</div>
                                        <h4 className="font-bold text-lg mb-2 text-[#5A4D41]">明確な総額</h4>
                                        <p className="text-sm text-gray-700">治療開始前に総額を明確に提示</p>
                                    </div>
                                    <div className="bg-orange-50 p-6 rounded-2xl border border-[#E67A2E]/20">
                                        <div className="text-4xl mb-2">✓</div>
                                        <h4 className="font-bold text-lg mb-2 text-[#5A4D41]">予算が立てやすい</h4>
                                        <p className="text-sm text-gray-700">安心して治療を続けられます</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 費用一覧 */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">料金表</h2>
                            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
                        </div>
                        <div className="text-center mb-12">
                            <p className="text-gray-600">症状や年齢に応じた治療プランをご提案します</p>
                        </div>

                        {/* 1期治療 */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 border-2 border-[#E67A2E]/20">
                            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                                <div>
                                    <span className="bg-[#E67A2E] text-white px-4 py-2 rounded-full text-sm font-bold">おすすめ</span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mt-3">1期治療（小児矯正）</h3>
                                    <p className="text-gray-600 mt-2">対象年齢：3〜12歳（混合歯列期）</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-4xl md:text-5xl font-bold text-[#E67A2E]">
                                        ¥350,000<span className="text-2xl">〜</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mt-1">（税込 ¥385,000〜）</p>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h4 className="font-bold text-gray-800 mb-4">治療内容に含まれるもの</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "初診相談・カウンセリング",
                                        "精密検査（レントゲン・セファロ・型取り）",
                                        "診断・治療計画の説明",
                                        "装置代（拡大床・プレオルソ等）",
                                        "装置の調整費（定期通院時）",
                                        "MFT（口腔筋機能療法）指導",
                                        "経過観察（永久歯生え揃うまで）",
                                        "保定装置"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <CheckCircle2 size={20} className="text-[#E67A2E] flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 bg-orange-50 p-4 rounded-xl">
                                <p className="text-sm text-gray-700">
                                    <span className="font-bold text-[#E67A2E]">※ 通院回数：</span>月1回程度（1回30分未満）
                                </p>
                                <p className="text-sm text-gray-700 mt-1">
                                    <span className="font-bold text-[#E67A2E]">※ 治療期間：</span>平均1〜2年
                                </p>
                            </div>
                        </div>

                        {/* 2期治療 */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-gray-200">
                            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41]">2期治療（仕上げの矯正）</h3>
                                    <p className="text-gray-600 mt-2">対象：永久歯が生え揃った後（12歳以降）</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-4xl md:text-5xl font-bold text-gray-700">
                                        ¥300,000<span className="text-2xl">〜</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mt-1">（税込 ¥330,000〜）</p>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h4 className="font-bold text-gray-800 mb-4">治療内容に含まれるもの</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "精密検査・診断",
                                        "ワイヤー矯正またはマウスピース矯正",
                                        "装置の調整費",
                                        "保定装置",
                                        "保定期間の経過観察（2年）"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <CheckCircle2 size={20} className="text-gray-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 bg-blue-50 p-4 rounded-xl">
                                <p className="text-sm text-gray-700">
                                    <span className="font-bold text-blue-700">※ 1期治療から継続の場合：</span>割引価格適用
                                </p>
                                <p className="text-sm text-gray-700 mt-1">
                                    <span className="font-bold text-blue-700">※ 治療期間：</span>平均1〜3年
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 医療費控除で戻ってくる金額シミュレーション */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">医療費控除でいくら戻る？</h2>
                            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
                        </div>
                        <div className="text-center mb-12">
                            <p className="text-gray-600">
                                子供の矯正は<span className="font-bold bg-yellow-100">審美ではなく発育に必要な治療</span>なので医療費控除の対象です
                            </p>
                        </div>

                        {/* 年収別還付金シミュレーション */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border-2 border-[#E67A2E]/20 mb-8">
                            <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 text-center">年収別・還付金シミュレーション</h3>
                            <p className="text-sm text-gray-600 text-center mb-8">
                                治療費40万円の場合の還付金目安（所得税+住民税）
                            </p>

                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-[#E67A2E] text-white">
                                        <tr>
                                            <th className="py-4 px-4 text-left font-bold">年収</th>
                                            <th className="py-4 px-4 text-center font-bold">所得税率</th>
                                            <th className="py-4 px-4 text-center font-bold">住民税率</th>
                                            <th className="py-4 px-4 text-center font-bold bg-[#D66A28]">還付金目安</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200">
                                            <td className="py-4 px-4 font-bold text-gray-800">300万円</td>
                                            <td className="py-4 px-4 text-center text-gray-700">5%</td>
                                            <td className="py-4 px-4 text-center text-gray-700">10%</td>
                                            <td className="py-4 px-4 text-center bg-orange-50 font-bold text-[#E67A2E]">約4.5万円</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="py-4 px-4 font-bold text-gray-800">500万円</td>
                                            <td className="py-4 px-4 text-center text-gray-700">10%</td>
                                            <td className="py-4 px-4 text-center text-gray-700">10%</td>
                                            <td className="py-4 px-4 text-center bg-orange-50 font-bold text-[#E67A2E]">約6万円</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="py-4 px-4 font-bold text-gray-800">700万円</td>
                                            <td className="py-4 px-4 text-center text-gray-700">20%</td>
                                            <td className="py-4 px-4 text-center text-gray-700">10%</td>
                                            <td className="py-4 px-4 text-center bg-orange-50 font-bold text-[#E67A2E]">約9万円</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="py-4 px-4 font-bold text-gray-800">1,000万円</td>
                                            <td className="py-4 px-4 text-center text-gray-700">33%</td>
                                            <td className="py-4 px-4 text-center text-gray-700">10%</td>
                                            <td className="py-4 px-4 text-center bg-orange-50 font-bold text-[#E67A2E]">約12.9万円</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                                <p className="text-sm text-gray-700">
                                    <span className="font-bold text-yellow-700">計算式：</span>
                                    （治療費40万円 - 10万円）× 税率 = 還付金額
                                </p>
                                <p className="text-xs text-gray-600 mt-2">
                                    ※上記は目安です。実際の還付額は所得控除額や家族構成により異なります。
                                </p>
                            </div>
                        </div>

                        {/* 申請方法 */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border-2 border-[#E67A2E]/20">
                            <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 text-center">医療費控除の申請方法</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                                        1
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-800 mb-2 text-lg">領収書を保管</h4>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            治療費の領収書を<span className="font-bold text-[#E67A2E]">1年分まとめて保管</span>します。通院時の交通費（電車・バス）も対象となるため、記録しておきましょう。
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                                        2
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-800 mb-2 text-lg">確定申告書を作成</h4>
                                        <p className="text-sm text-gray-700 leading-relaxed mb-2">
                                            翌年の2月16日〜3月15日に確定申告を行います。<span className="font-bold text-[#E67A2E]">国税庁のe-Taxシステム</span>を利用すれば自宅からオンライン申請が可能です。
                                        </p>
                                        <div className="bg-blue-50 p-3 rounded-lg">
                                            <p className="text-xs text-gray-700">
                                                <span className="font-bold text-blue-700">必要書類：</span>
                                                医療費の領収書、源泉徴収票、マイナンバーカード
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                                        3
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-800 mb-2 text-lg">還付金を受け取る</h4>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            申告から<span className="font-bold text-[#E67A2E]">1〜2ヶ月後</span>に、指定した銀行口座に還付金が振り込まれます。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 bg-green-50 p-6 rounded-xl border-2 border-green-200">
                                <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" />
                                    医療費控除の対象となる費用
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span>こども矯正の治療費（検査・診断料・装置代・調整料など）</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span>治療のための通院費（電車・バス・タクシー代）</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span>治療に必要な医薬品代</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-4 bg-red-50 p-6 rounded-xl border-2 border-red-200">
                                <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                                    <AlertCircle className="w-5 h-5" />
                                    対象外となる費用
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">×</span>
                                        <span>自家用車でのガソリン代・駐車場代</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">×</span>
                                        <span>診断書作成料</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">×</span>
                                        <span>美容目的の矯正治療（成人の審美矯正など）</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* よくある質問（費用関連） */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">費用に関するよくある質問</h2>
                            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <div className="mb-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                                        <h3 className="font-bold text-[#5A4D41] text-lg">支払い方法は何がありますか？</h3>
                                    </div>
                                </div>
                                <div className="text-[#8D8070] leading-relaxed">
                                    <p className="mb-3">
                                        <strong className="text-[#E67A2E]">A.</strong> 以下の支払い方法に対応しています。
                                    </p>
                                    <ul className="space-y-2 mb-3 ml-4">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#E67A2E] mt-1">①</span>
                                            <span><strong>現金一括払い：</strong>治療開始時に全額お支払い</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#E67A2E] mt-1">②</span>
                                            <span><strong>クレジットカード払い：</strong>VISA、Master、JCB、AMEX対応</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#E67A2E] mt-1">③</span>
                                            <span><strong>デンタルローン（分割払い）：</strong>最大60回まで分割可能、低金利でご利用いただけます</span>
                                        </li>
                                    </ul>
                                    <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                                        デンタルローンは審査も簡単で、お手続きは当院でサポートいたします。月々の負担を抑えて治療を開始できます。
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <div className="mb-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                                        <h3 className="font-bold text-[#5A4D41] text-lg">治療費はいつ支払いますか？</h3>
                                    </div>
                                </div>
                                <div className="text-[#8D8070] leading-relaxed">
                                    <p>
                                        <strong className="text-[#E67A2E]">A.</strong> 治療開始時に頭金として総額の30%、残りは治療開始3ヶ月以内にお支払いいただくのが一般的です。分割払いの場合は初回のみ頭金をお支払いいただき、残りは月々の分割となります。
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <div className="mb-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                                        <h3 className="font-bold text-[#5A4D41] text-lg">保険は適用されますか？</h3>
                                    </div>
                                </div>
                                <div className="text-[#8D8070] leading-relaxed">
                                    <p className="mb-3">
                                        <strong className="text-[#E67A2E]">A.</strong> 小児矯正は基本的に自費診療（保険適用外）です。ただし、以下の特定の症例では保険適用となる場合があります。
                                    </p>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-3">
                                        <p className="text-sm text-[#5A4D41] font-bold mb-2">保険適用となるケース：</p>
                                        <ul className="text-sm text-[#5A4D41] space-y-1">
                                            <li>• 顎変形症（外科的矯正治療が必要な場合）</li>
                                            <li>• 先天性疾患（口唇口蓋裂など）</li>
                                            <li>• 指定医療機関での治療に限る</li>
                                        </ul>
                                    </div>
                                    <p className="text-sm bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                                        <strong className="text-yellow-700">注意：</strong>一般的なこども矯正（1期治療・2期治療）は自費診療ですが、<strong>医療費控除の対象</strong>となります。詳しくは診察時にご相談ください。
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <div className="mb-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                                        <h3 className="font-bold text-[#5A4D41] text-lg">途中で治療をやめた場合、返金はありますか？</h3>
                                    </div>
                                </div>
                                <div className="text-[#8D8070] leading-relaxed">
                                    <p>
                                        <strong className="text-[#E67A2E]">A.</strong> 治療の進行状況に応じて、未実施分の治療費を返金いたします。詳細は契約書に記載されています。
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <div className="mb-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                                        <h3 className="font-bold text-[#5A4D41] text-lg">兄弟割引はありますか？</h3>
                                    </div>
                                </div>
                                <div className="text-[#8D8070] leading-relaxed">
                                    <p>
                                        <strong className="text-[#E67A2E]">A.</strong> ご兄弟で治療される場合、2人目以降は治療費から5%割引させていただきます。詳しくはスタッフまでお問い合わせください。
                                    </p>
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

                                <Link href="/kidsortho/duration" className="group bg-white p-6 rounded-2xl border-2 border-[#E67A2E]/20 hover:border-[#E67A2E]/40 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">治療期間</h3>
                                    <p className="text-[#8D8070] mb-4">
                                        こども矯正にかかる期間と治療の流れ
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
                                まずは無料相談で詳しいお見積りをご確認ください
                            </h2>
                            <p className="text-xl mb-8 text-white/90">
                                お子様の歯並びの状態に応じた正確なお見積りをご提示します
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
        </div>
    );
}
