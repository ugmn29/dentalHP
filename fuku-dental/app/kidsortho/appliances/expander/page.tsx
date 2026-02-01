import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { Wrench, ArrowRight, CheckCircle, AlertCircle, Clock, TrendingUp, X, Info, Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ExpanderPage() {
    return (
        <>
            <Header />
            <main className="bg-white">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-[#FFF9F0] to-[#FFF3E0] py-2 md:py-2 overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-[#E67A2E] rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#D66A28] rounded-full blur-3xl"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full text-[#E67A2E] font-bold text-sm mb-6 shadow-sm border border-[#E67A2E]/20">
                                <Wrench className="inline-block w-4 h-4 mr-2" />
                                取り外し式装置
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5A4D41] mb-6 leading-tight">
                                拡大床（かくだいしょう）
                            </h1>
                            <p className="text-lg md:text-xl text-[#8D8070] mb-8 leading-relaxed">
                                顎を横に広げて永久歯のスペースを確保する、<br className="hidden md:block" />
                                こども矯正で最も一般的に使用される装置です
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-[#5A4D41] border border-gray-200">
                                    対象年齢: 3〜9歳
                                </span>
                                <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-[#5A4D41] border border-gray-200">
                                    期間: 6〜12ヶ月
                                </span>
                                <span className="bg-green-100 px-4 py-2 rounded-full text-sm font-bold text-green-700">
                                    取り外し可能
                                </span>
                            </div>
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
                            <span className="text-[#E67A2E] font-bold">拡大床</span>
                        </div>
                    </div>
                </section>

                {/* 拡大床とは */}
                <section className="py-6 md:py-6">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                    拡大床とは
                                </h2>
                                <p className="text-lg text-[#8D8070]">
                                    取り外し可能なプレート型の矯正装置
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-[#FFF9F0] to-[#FFE9CC] rounded-2xl p-8 md:p-10 shadow-xl border-2 border-[#E67A2E]/20 mb-12">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-16 h-16 bg-[#E67A2E] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                                        <Wrench className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#5A4D41] mb-2">
                                            拡大床の仕組み
                                        </h3>
                                        <p className="text-[#8D8070] leading-relaxed">
                                            拡大床は、プラスチック製のプレートと金属製のワイヤーで構成された取り外し式の装置です。中央に組み込まれた「拡大ネジ」を定期的に回すことで、少しずつ顎の骨を横に広げていきます。
                                        </p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4">
                                        <h4 className="font-bold text-[#E67A2E] mb-2 flex items-center gap-2">
                                            <span className="w-6 h-6 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm">1</span>
                                            プレート部分
                                        </h4>
                                        <p className="text-sm text-[#5A4D41]">
                                            上顎または下顎の歯列に沿ったプラスチック製の床
                                        </p>
                                    </div>
                                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4">
                                        <h4 className="font-bold text-[#E67A2E] mb-2 flex items-center gap-2">
                                            <span className="w-6 h-6 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm">2</span>
                                            拡大ネジ
                                        </h4>
                                        <p className="text-sm text-[#5A4D41]">
                                            中央の金属ネジを回すことで装置が少しずつ広がる
                                        </p>
                                    </div>
                                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4">
                                        <h4 className="font-bold text-[#E67A2E] mb-2 flex items-center gap-2">
                                            <span className="w-6 h-6 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm">3</span>
                                            クラスプ
                                        </h4>
                                        <p className="text-sm text-[#5A4D41]">
                                            装置を固定するための金属製のバネ（ワイヤー）
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-4 flex items-center gap-2">
                                        <CheckCircle className="w-6 h-6 text-[#395b45]" />
                                        上顎拡大床
                                    </h3>
                                    <p className="text-[#8D8070] mb-4 leading-relaxed">
                                        上顎の歯列を横に広げる装置。上顎は左右の骨が中央で結合しているため、成長期であれば骨自体を広げることが可能です。
                                    </p>
                                    <div className="bg-[#E8F2ED] rounded-xl p-4">
                                        <p className="text-sm text-[#5A4D41] font-bold mb-2">適応症例</p>
                                        <ul className="text-sm text-[#5A4D41] space-y-1">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45]">•</span>
                                                <span>上顎が狭く、永久歯のスペース不足</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45]">•</span>
                                                <span>交叉咬合（奥歯の咬み合わせが逆）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45]">•</span>
                                                <span>叢生（歯が重なっている）</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-4 flex items-center gap-2">
                                        <CheckCircle className="w-6 h-6 text-[#395b45]" />
                                        下顎拡大床
                                    </h3>
                                    <p className="text-[#8D8070] mb-4 leading-relaxed">
                                        下顎の歯列を横に広げる装置。下顎は一体の骨のため、主に歯列の傾斜を改善します。
                                    </p>
                                    <div className="bg-[#E8F2ED] rounded-xl p-4">
                                        <p className="text-sm text-[#5A4D41] font-bold mb-2">適応症例</p>
                                        <ul className="text-sm text-[#5A4D41] space-y-1">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45]">•</span>
                                                <span>下顎の叢生（歯が重なっている）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45]">•</span>
                                                <span>前歯が内側に倒れている</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45]">•</span>
                                                <span>上顎拡大との併用治療</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* メリット・デメリット */}
                <section className="py-6 md:py-6 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                    拡大床のメリット・デメリット
                                </h2>
                                <p className="text-lg text-[#8D8070]">
                                    拡大床を選択する前に知っておくべきポイント
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* メリット */}
                                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-xl border-2 border-green-200">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                            ○
                                        </div>
                                        <h3 className="text-2xl font-bold text-green-700">メリット</h3>
                                    </div>

                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-[#5A4D41] mb-1">取り外し可能</h4>
                                                <p className="text-sm text-[#8D8070]">
                                                    食事・歯磨き時に外せるため、衛生的で日常生活への影響が少ない
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-[#5A4D41] mb-1">むし歯リスクが低い</h4>
                                                <p className="text-sm text-[#8D8070]">
                                                    装置を外して歯磨きができるため、固定式に比べてむし歯になりにくい
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-[#5A4D41] mb-1">痛みが少ない</h4>
                                                <p className="text-sm text-[#8D8070]">
                                                    少しずつ拡大するため、痛みや違和感が比較的少ない
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-[#5A4D41] mb-1">費用が比較的安い</h4>
                                                <p className="text-sm text-[#8D8070]">
                                                    固定式装置に比べて製作費が安く、治療費を抑えられる
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-[#5A4D41] mb-1">緊急時に外せる</h4>
                                                <p className="text-sm text-[#8D8070]">
                                                    スポーツや楽器演奏など、必要に応じて取り外せる
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-[#5A4D41] mb-1">抜歯を回避できる</h4>
                                                <p className="text-sm text-[#8D8070]">
                                                    早期に顎を広げることで、将来的な抜歯を避けられる可能性が高まる
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* デメリット */}
                                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 shadow-xl border-2 border-red-200">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                            △
                                        </div>
                                        <h3 className="text-2xl font-bold text-red-700">デメリット</h3>
                                    </div>

                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-[#5A4D41] mb-1">装着時間を守る必要がある</h4>
                                                <p className="text-sm text-[#8D8070]">
                                                    1日12〜14時間以上の装着が必須。お子さまの協力性が求められる
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-[#5A4D41] mb-1">紛失・破損のリスク</h4>
                                                <p className="text-sm text-[#8D8070]">
                                                    取り外し式のため、紛失や破損の可能性がある（再製作費用が発生）
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-[#5A4D41] mb-1">発音への影響</h4>
                                                <p className="text-sm text-[#8D8070]">
                                                    装着時は発音がしづらく、慣れるまで数日〜数週間かかる
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-[#5A4D41] mb-1">効果が装着時間に依存</h4>
                                                <p className="text-sm text-[#8D8070]">
                                                    装着時間が短いと効果が出ず、治療期間が延びる
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-[#5A4D41] mb-1">適応症例が限定的</h4>
                                                <p className="text-sm text-[#8D8070]">
                                                    重度の不正咬合や骨格的な問題には効果が限定的
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-[#5A4D41] mb-1">後戻りのリスク</h4>
                                                <p className="text-sm text-[#8D8070]">
                                                    拡大後、保定装置を使用しないと後戻りする可能性がある
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 使用方法・装着時間 */}
                <section className="py-6 md:py-6">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                    使用方法と装着時間
                                </h2>
                                <p className="text-lg text-[#8D8070]">
                                    効果を最大限に引き出すための正しい使い方
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-[#E8F2ED] to-[#D4E8DC] rounded-2xl p-8 md:p-10 shadow-xl border-2 border-[#395b45]/20 mb-8">
                                <h3 className="text-2xl font-bold text-[#395b45] mb-6 flex items-center gap-3">
                                    <Clock className="w-8 h-8" />
                                    推奨装着時間
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                                        <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">最低装着時間</h4>
                                        <div className="text-4xl font-bold text-[#E67A2E] mb-2">12時間/日</div>
                                        <p className="text-sm text-[#8D8070]">
                                            効果を出すための最低ライン。これ以下では治療効果が期待できません
                                        </p>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 border-[#395b45]">
                                        <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">理想的な装着時間</h4>
                                        <div className="text-4xl font-bold text-[#395b45] mb-2">14〜16時間/日</div>
                                        <p className="text-sm text-[#8D8070]">
                                            より確実な効果を得るための推奨時間。就寝時+日中の数時間
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                                        1
                                    </div>
                                    <h4 className="font-bold text-[#5A4D41] mb-2">装着タイミング</h4>
                                    <ul className="text-sm text-[#8D8070] space-y-2">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-[#395b45] flex-shrink-0 mt-0.5" />
                                            <span><strong>就寝時：</strong>必ず装着（8時間）</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-[#395b45] flex-shrink-0 mt-0.5" />
                                            <span><strong>帰宅後：</strong>夕方〜夜（4〜6時間）</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                            <span><strong>学校：</strong>基本的に不要</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                                        2
                                    </div>
                                    <h4 className="font-bold text-[#5A4D41] mb-2">装着中に外す時</h4>
                                    <ul className="text-sm text-[#8D8070] space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#395b45] mt-0.5">✓</span>
                                            <span>食事の時</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#395b45] mt-0.5">✓</span>
                                            <span>歯磨きの時</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#395b45] mt-0.5">✓</span>
                                            <span>スポーツをする時</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#395b45] mt-0.5">✓</span>
                                            <span>楽器を演奏する時</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                                        3
                                    </div>
                                    <h4 className="font-bold text-[#5A4D41] mb-2">ネジの回転</h4>
                                    <ul className="text-sm text-[#8D8070] space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#E67A2E] font-bold mt-0.5">•</span>
                                            <span><strong>頻度：</strong>週に1〜2回</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#E67A2E] font-bold mt-0.5">•</span>
                                            <span><strong>方法：</strong>専用キーで90°回転</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#E67A2E] font-bold mt-0.5">•</span>
                                            <span><strong>担当：</strong>保護者の方が実施</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-yellow-50 rounded-2xl p-6 border-2 border-yellow-300">
                                <div className="flex items-start gap-4">
                                    <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-yellow-800 text-lg mb-2">
                                            装着時間が不足すると…
                                        </h4>
                                        <ul className="text-[#5A4D41] space-y-2">
                                            <li className="flex items-start gap-2">
                                                <span className="text-yellow-600 font-bold">•</span>
                                                <span>拡大した顎が元に戻ってしまう（後戻り）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-yellow-600 font-bold">•</span>
                                                <span>治療期間が大幅に延びる（6ヶ月 → 12ヶ月以上）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-yellow-600 font-bold">•</span>
                                                <span>最悪の場合、治療を中断せざるを得ないことも</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* お手入れ方法 */}
                <section className="py-2 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                    拡大床のお手入れ方法
                                </h2>
                                <p className="text-lg text-[#8D8070]">
                                    清潔に保つための毎日のケア
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl p-6 shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-[#395b45] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                            1
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-[#5A4D41] mb-2">毎食後の洗浄</h3>
                                            <p className="text-[#8D8070] mb-3">
                                                装置を外した後は、必ず水またはぬるま湯で洗います。歯ブラシを使って優しくこすり、食べカスや汚れを落としましょう。
                                            </p>
                                            <div className="bg-[#E8F2ED] rounded-lg p-4">
                                                <p className="text-sm text-[#5A4D41]">
                                                    <strong className="text-[#395b45]">注意：</strong>熱湯は使用しないでください。プラスチックが変形する恐れがあります。
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-[#395b45] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                            2
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-[#5A4D41] mb-2">週に1〜2回の念入り洗浄</h3>
                                            <p className="text-[#8D8070] mb-3">
                                                入れ歯洗浄剤（ポリデントなど）を使用して、装置を浸け置き洗いします。臭いや着色を防ぎ、清潔に保てます。
                                            </p>
                                            <div className="bg-[#E8F2ED] rounded-lg p-4">
                                                <p className="text-sm text-[#5A4D41]">
                                                    <strong className="text-[#395b45]">方法：</strong>コップに水と洗浄剤を入れ、装置を15〜30分浸す → 水でよくすすぐ
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-[#395b45] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                            3
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-[#5A4D41] mb-2">保管方法</h3>
                                            <p className="text-[#8D8070] mb-3">
                                                使用しない時は、専用ケースに入れて保管します。ティッシュに包むと誤って捨ててしまうリスクがあるので注意。
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                                    <p className="text-sm font-bold text-green-700 mb-2">✓ 良い保管方法</p>
                                                    <ul className="text-sm text-[#5A4D41] space-y-1">
                                                        <li>• 専用ケースに入れる</li>
                                                        <li>• 風通しの良い場所に置く</li>
                                                        <li>• 直射日光を避ける</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                                                    <p className="text-sm font-bold text-red-700 mb-2">× 悪い保管方法</p>
                                                    <ul className="text-sm text-[#5A4D41] space-y-1">
                                                        <li>• ティッシュに包む</li>
                                                        <li>• ポケットに入れる</li>
                                                        <li>• 高温の場所に置く</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 治療の流れ */}
                <section className="py-6 md:py-6">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                    拡大床治療の流れ
                                </h2>
                                <p className="text-lg text-[#8D8070]">
                                    初診から治療完了までのステップ
                                </p>
                            </div>

                            <div className="relative">
                                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#E67A2E] hidden md:block"></div>

                                <div className="space-y-8">
                                    {[
                                        {
                                            step: "01",
                                            title: "初診相談",
                                            duration: "30分",
                                            content: "お子さまの歯並びを拝見し、拡大床治療の適応かどうかを判断します。治療の流れ・期間・費用について詳しくご説明します。",
                                        },
                                        {
                                            step: "02",
                                            title: "精密検査",
                                            duration: "60分",
                                            content: "レントゲン撮影、口腔内写真撮影、歯型採取を行います。顎の骨の状態や歯並びを詳しく分析します。",
                                        },
                                        {
                                            step: "03",
                                            title: "診断・治療計画",
                                            duration: "30分",
                                            content: "検査結果をもとに、具体的な治療計画を立てます。拡大量や治療期間、装着時間などを決定します。",
                                        },
                                        {
                                            step: "04",
                                            title: "装置の装着",
                                            duration: "30分",
                                            content: "製作した拡大床を装着し、使用方法・ネジの回し方・お手入れ方法を丁寧にご指導します。",
                                        },
                                        {
                                            step: "05",
                                            title: "定期調整",
                                            duration: "月1回・20分",
                                            content: "月に1回通院し、拡大状況を確認します。必要に応じて装置の調整を行います。",
                                        },
                                        {
                                            step: "06",
                                            title: "拡大完了・保定",
                                            duration: "6〜12ヶ月後",
                                            content: "目標とする拡大量に達したら、後戻り防止のため保定装置に移行します。数ヶ月間の保定期間が必要です。",
                                        },
                                    ].map((item, index) => (
                                        <div key={index} className="relative flex items-start gap-6 md:ml-16">
                                            <div className="absolute -left-16 w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold shadow-lg hidden md:flex">
                                                {item.step}
                                            </div>
                                            <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                                                <div className="flex items-start justify-between mb-3">
                                                    <h3 className="text-xl font-bold text-[#5A4D41]">{item.title}</h3>
                                                    <span className="bg-[#E8F2ED] px-3 py-1 rounded-full text-sm font-bold text-[#395b45]">
                                                        {item.duration}
                                                    </span>
                                                </div>
                                                <p className="text-[#8D8070] leading-relaxed">{item.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* よくある質問 */}
                <section className="py-6 md:py-6 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                    よくある質問
                                </h2>
                                <p className="text-lg text-[#8D8070]">
                                    拡大床に関する保護者の方からのご質問
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Q1 */}
                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <h3 className="font-bold text-[#5A4D41] mb-4 flex items-start gap-3">
                                        <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                                        <span>痛みはありますか？</span>
                                    </h3>
                                    <div className="pl-11">
                                        <p className="text-[#8D8070] leading-relaxed mb-4">
                                            拡大ネジを回した直後は、少し圧迫感や違和感がありますが、強い痛みはほとんどありません。多くのお子さまは2〜3日で慣れます。もし痛みが強い場合は、ネジを回すペースを遅くするなどの調整が可能です。
                                        </p>
                                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                                            <p className="text-sm font-bold text-blue-900 mb-2">痛みの程度</p>
                                            <ul className="space-y-2 text-sm text-[#5A4D41]">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span><strong>ネジを回した直後：</strong>軽い圧迫感（1〜2時間程度）</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span><strong>2〜3日後：</strong>ほとんど気にならなくなる</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span><strong>調整可能：</strong>痛みが強い場合はペース調整できます</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Q2 */}
                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <h3 className="font-bold text-[#5A4D41] mb-4 flex items-start gap-3">
                                        <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                                        <span>学校に装着していく必要がありますか？</span>
                                    </h3>
                                    <div className="pl-11">
                                        <p className="text-[#8D8070] leading-relaxed mb-4">
                                            基本的には不要です。拡大床は就寝時と帰宅後の装着で十分効果が得られます。ただし、より早く治療を進めたい場合や、医師が必要と判断した場合は、学校でも装着をお願いすることがあります。
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-green-50 border border-green-200 p-4 rounded-xl">
                                                <p className="text-sm font-bold text-green-700 mb-2">基本的な装着時間</p>
                                                <ul className="space-y-2 text-sm text-[#5A4D41]">
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                                                        <span>就寝時（必須）</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                                                        <span>帰宅後〜就寝前</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                                                        <span>合計12〜14時間/日</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl">
                                                <p className="text-sm font-bold text-yellow-700 mb-2">学校での装着</p>
                                                <ul className="space-y-2 text-sm text-[#5A4D41]">
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-yellow-600">•</span>
                                                        <span>基本的に不要</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-yellow-600">•</span>
                                                        <span>早期治療希望時は検討</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Q3 */}
                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <h3 className="font-bold text-[#5A4D41] mb-4 flex items-start gap-3">
                                        <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                                        <span>食事中は外しますか？</span>
                                    </h3>
                                    <div className="pl-11">
                                        <p className="text-[#8D8070] leading-relaxed mb-4">
                                            はい、必ず外してください。装着したまま食事をすると、装置が破損したり、食べカスが詰まって不衛生になります。食事後は歯磨きをしてから再度装着しましょう。
                                        </p>
                                        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                                            <p className="text-sm font-bold text-red-900 mb-2">食事中の注意事項</p>
                                            <ul className="space-y-2 text-sm text-[#5A4D41]">
                                                <li className="flex items-start gap-2">
                                                    <X size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                                                    <span><strong>装着したまま食事NG：</strong>装置破損の原因</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <X size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                                                    <span><strong>食べカス詰まり：</strong>不衛生でむし歯リスク増</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span><strong>正しい手順：</strong>外す → 食事 → 歯磨き → 装着</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Q4 */}
                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <h3 className="font-bold text-[#5A4D41] mb-4 flex items-start gap-3">
                                        <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                                        <span>何歳まで使えますか？</span>
                                    </h3>
                                    <div className="pl-11">
                                        <p className="text-[#8D8070] leading-relaxed mb-4">
                                            上顎拡大の場合、骨の成長が期待できる9〜10歳頃までが最も効果的です。それ以降でも歯列の拡大は可能ですが、骨自体を広げる効果は減少します。下顎拡大は年齢による制限が比較的緩やかです。
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
                                                <p className="text-sm font-bold text-blue-700 mb-2">上顎拡大</p>
                                                <ul className="space-y-2 text-sm text-[#5A4D41]">
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-blue-600">•</span>
                                                        <span><strong>最適年齢：</strong>3〜9歳</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-blue-600">•</span>
                                                        <span><strong>10歳以降：</strong>効果は減少するが可能</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-blue-600">•</span>
                                                        <span>骨の成長期が鍵</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-50 border border-green-200 p-4 rounded-xl">
                                                <p className="text-sm font-bold text-green-700 mb-2">下顎拡大</p>
                                                <ul className="space-y-2 text-sm text-[#5A4D41]">
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-green-600">•</span>
                                                        <span><strong>年齢制限：</strong>比較的緩やか</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-green-600">•</span>
                                                        <span>歯列傾斜改善が主目的</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Q5 */}
                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <h3 className="font-bold text-[#5A4D41] mb-4 flex items-start gap-3">
                                        <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                                        <span>拡大後、元に戻ることはありますか？</span>
                                    </h3>
                                    <div className="pl-11">
                                        <p className="text-[#8D8070] leading-relaxed mb-4">
                                            拡大直後は後戻りのリスクがあります。そのため、拡大完了後も数ヶ月間は保定装置として使用を続けます。指示通りに装着すれば、後戻りはほとんど起こりません。
                                        </p>
                                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
                                            <p className="text-sm font-bold text-yellow-900 mb-2">後戻り防止のポイント</p>
                                            <ul className="space-y-2 text-sm text-[#5A4D41]">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-yellow-600">1.</span>
                                                    <span><strong>保定期間：</strong>拡大完了後3〜6ヶ月間継続使用</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-yellow-600">2.</span>
                                                    <span><strong>装着時間：</strong>徐々に減らしていく</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-yellow-600">3.</span>
                                                    <span><strong>定期検診：</strong>月1回のチェックで安心</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 border border-green-200 p-4 rounded-xl">
                                            <p className="text-sm text-[#5A4D41]">
                                                <CheckCircle size={16} className="inline text-green-500 mr-2" />
                                                <strong>指示通りに装着すれば、後戻りはほとんど起こりません</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Q6 */}
                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <h3 className="font-bold text-[#5A4D41] mb-4 flex items-start gap-3">
                                        <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q6</span>
                                        <span>費用はどのくらいですか？</span>
                                    </h3>
                                    <div className="pl-11">
                                        <p className="text-[#8D8070] leading-relaxed mb-4">
                                            当院では1期治療全体（拡大床含む）で35〜45万円です。トータルフィー制度のため、治療途中で追加費用が発生することはありません。詳しくは費用ページをご覧ください。
                                        </p>
                                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                                            <p className="text-sm font-bold text-blue-900 mb-2">費用の内訳</p>
                                            <ul className="space-y-2 text-sm text-[#5A4D41]">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span><strong>1期治療費：</strong>35〜45万円（拡大床含む）</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span><strong>トータルフィー制：</strong>追加費用なし</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span><strong>含まれるもの：</strong>検査・診断・装置・調整・経過観察</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-6 md:py-6 bg-gradient-to-br from-[#E67A2E] to-[#D66A28] text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                お子さまに拡大床が<br className="md:hidden" />
                                <span className="text-5xl block mt-2">適しているか</span>
                                <span className="block mt-2">無料相談で確認できます</span>
                            </h2>
                            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
                                歯並びの状態を拝見し、拡大床治療が最適かどうかを診断します。<br className="hidden md:block" />
                                他の装置との比較もご説明しますので、お気軽にご相談ください。
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
                                <a
                                    href="#"
                                    className="w-full md:w-auto bg-white text-[#E67A2E] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    無料相談を予約する
                                    <ArrowRight size={20} />
                                </a>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                                <a
                                    href="/kidsortho/appliances"
                                    className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white/20 transition border border-white/20 flex items-center justify-center gap-2"
                                >
                                    <ArrowRight size={16} />
                                    装置一覧に戻る
                                </a>
                                <a
                                    href="/kidsortho/cost"
                                    className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white/20 transition border border-white/20 flex items-center justify-center gap-2"
                                >
                                    <ArrowRight size={16} />
                                    費用について
                                </a>
                                <a
                                    href="/kidsortho"
                                    className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white/20 transition border border-white/20 flex items-center justify-center gap-2"
                                >
                                    <ArrowRight size={16} />
                                    こども矯正トップ
                                </a>
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
