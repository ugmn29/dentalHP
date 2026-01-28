import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowRight, CheckCircle, AlertCircle, Calendar, Heart, TrendingUp, Clock, DollarSign, Users, Wrench, Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ChinCapPage() {
    return (
        <>
            <Header />
            <main className="bg-white">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-[#D6E9F5] to-[#C6D9E5] py-2 md:py-2 overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-[#6B9BD1] rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#5B8BC1] rounded-full blur-3xl"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full text-[#6B9BD1] font-bold text-sm mb-6 shadow-sm border border-[#6B9BD1]/20">
                                <Wrench className="inline-block w-4 h-4 mr-2" />
                                チンキャップ
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5A4D41] mb-6 leading-tight">
                                受け口を早期に改善する<br />
                                <span className="text-[#6B9BD1]">チンキャップ</span>
                            </h1>
                            <p className="text-lg md:text-xl text-[#8D8070] mb-8 leading-relaxed">
                                下顎の過成長を抑制し、骨格性の受け口を<br className="hidden md:block" />
                                成長期に根本的に改善する装置です
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
                            <span className="text-[#E67A2E] font-bold">チンキャップ</span>
                        </div>
                    </div>
                </section>

                {/* チンキャップとは */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                チンキャップとは
                            </h2>
                            <p className="text-gray-600">
                                下顎の成長を抑制し、受け口を改善する装置
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-[#6B9BD1]/20 mb-12">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                チンキャップは、<span className="font-bold text-[#6B9BD1]">受け口（下顎前突・反対咬合）</span>を改善するための装置です。顎先（オトガイ部）にキャップを当て、頭部とゴムバンドで連結することで、<span className="font-bold text-[#6B9BD1]">下顎の前方への成長を抑制</span>します。
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                受け口は遺伝的な要素が強く、自然に治ることはほとんどありません。<span className="font-bold text-[#6B9BD1]">3〜10歳の成長期に治療を開始</span>することで、下顎の過剰な成長をコントロールし、将来の外科手術を回避できる可能性が高まります。
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl p-6 border-2 border-[#6B9BD1]/20 shadow-lg">
                                <div className="w-12 h-12 bg-[#6B9BD1] rounded-full flex items-center justify-center mb-4">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#5A4D41] mb-3">下顎の成長抑制</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    下顎の前方・下方への過剰な成長を抑制し、上下の顎のバランスを整えます
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 border-2 border-[#6B9BD1]/20 shadow-lg">
                                <div className="w-12 h-12 bg-[#6B9BD1] rounded-full flex items-center justify-center mb-4">
                                    <Heart className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#5A4D41] mb-3">外科手術の回避</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    成長期に治療することで、成人後の外科的矯正治療を回避できる可能性があります
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* どのように機能するのか */}
                <section className="py-2 bg-gradient-to-b from-gray-50 to-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                どのように機能するのか？
                            </h2>
                            <p className="text-gray-600">
                                頭部からの牽引力で下顎の成長をコントロール
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-[#6B9BD1]/20 mb-8">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-[#5A4D41] mb-4 flex items-center gap-2">
                                    <Wrench className="w-6 h-6 text-[#6B9BD1]" />
                                    チンキャップの作用メカニズム
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    チンキャップは、オトガイ部（顎先）にカップ状の装置を当て、頭部に装着したヘッドキャップとゴムバンドで連結します。この牽引力により、<span className="font-bold text-[#6B9BD1]">下顎骨の前方への成長を抑制</span>します。
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-blue-50 rounded-xl p-6 border-2 border-[#6B9BD1]/20">
                                    <div className="w-12 h-12 bg-[#6B9BD1] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">1</div>
                                    <h4 className="font-bold text-[#5A4D41] mb-2">オトガイ部への圧力</h4>
                                    <p className="text-sm text-gray-700">顎先に装着したキャップから後方・上方への持続的な力をかけます</p>
                                </div>
                                <div className="bg-blue-50 rounded-xl p-6 border-2 border-[#6B9BD1]/20">
                                    <div className="w-12 h-12 bg-[#6B9BD1] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">2</div>
                                    <h4 className="font-bold text-[#5A4D41] mb-2">成長方向の変更</h4>
                                    <p className="text-sm text-gray-700">下顎の前方への成長を抑制し、上方・後方への成長を促します</p>
                                </div>
                                <div className="bg-blue-50 rounded-xl p-6 border-2 border-[#6B9BD1]/20">
                                    <div className="w-12 h-12 bg-[#6B9BD1] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">3</div>
                                    <h4 className="font-bold text-[#5A4D41] mb-2">顎のバランス改善</h4>
                                    <p className="text-sm text-gray-700">上下の顎の大きさのバランスが整い、正常な咬み合わせに近づきます</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#6B9BD1]/10 border-l-4 border-[#6B9BD1] p-6 rounded-r-xl">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-[#6B9BD1] flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-[#5A4D41] mb-2">早期治療が重要</p>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        受け口は自然に治ることがほとんどなく、放置すると症状が悪化します。<span className="font-bold text-[#6B9BD1]">3〜10歳の成長期に治療を開始</span>することで、下顎の過剰な成長を抑制し、外科手術を避けられる可能性が高まります。
                                    </p>
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
                                        <span><strong>外科手術を回避：</strong>成長期に治療することで、成人後の外科的矯正を避けられる可能性が高い</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>骨格的な改善：</strong>下顎の成長をコントロールし、根本的な問題を解決</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>早期開始が可能：</strong>3歳から始められ、早ければ早いほど効果が高い</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>取り外し可能：</strong>主に就寝時の装着なので、日中の生活に支障がない</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>顔貌の改善：</strong>下顎の突出が改善され、横顔のラインが整う</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>発音・咀嚼機能向上：</strong>咬み合わせが改善され、機能面も向上</span>
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
                                        <span><strong>装着時間が長い：</strong>毎日10〜12時間（主に就寝時）の装着が必要</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>見た目の問題：</strong>就寝時に頭部に装置を装着するため、お子さまが嫌がることがある</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>成長期限定：</strong>成長期が終わると効果が出ないため、早期開始が重要</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>治療期間が長い：</strong>1〜3年と長期間の治療が必要</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>協力が必須：</strong>お子さまの協力がないと効果が出ない</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>2期治療が必要なことも：</strong>顎のバランスは改善されても、歯並びの仕上げが必要な場合がある</span>
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

                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-[#6B9BD1]/20 mb-8">
                            <div className="text-center mb-8">
                                <div className="inline-block bg-[#6B9BD1] text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                                    チンキャップの費用
                                </div>
                                <div className="text-5xl font-bold text-[#6B9BD1] mb-2">
                                    ¥350,000<span className="text-2xl">〜</span>
                                </div>
                                <p className="text-gray-600">（税込 ¥385,000〜）</p>
                                <p className="text-sm text-gray-600 mt-2">※ 1期治療（小児矯正）の料金に含まれます</p>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h4 className="font-bold text-gray-800 mb-4">治療内容に含まれるもの</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "初診相談・カウンセリング",
                                        "精密検査（レントゲン・セファロ・型取り）",
                                        "診断・治療計画の説明",
                                        "装置代（チンキャップ）",
                                        "装置の調整費（定期通院時）",
                                        "MFT（口腔筋機能療法）指導",
                                        "経過観察（永久歯生え揃うまで）",
                                        "保定装置"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#6B9BD1] flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-[#6B9BD1]/20">
                                <h4 className="font-bold text-[#5A4D41] mb-3 flex items-center gap-2">
                                    <DollarSign className="w-5 h-5 text-[#6B9BD1]" />
                                    費用の詳細
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#6B9BD1] mt-1">•</span>
                                        <span><strong>通院回数：</strong>月1回程度（1回30分未満）</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#6B9BD1] mt-1">•</span>
                                        <span><strong>治療期間：</strong>平均1〜3年</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#6B9BD1] mt-1">•</span>
                                        <span><strong>料金体系：</strong>トータルフィー制度（追加費用なし）</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#6B9BD1] mt-1">•</span>
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
                                    description: "お子さまの咬み合わせ・下顎の大きさを確認し、チンキャップが適しているか診断します",
                                    time: "約30分"
                                },
                                {
                                    step: "STEP 2",
                                    title: "精密検査",
                                    description: "レントゲン撮影・セファロ撮影（顎の骨格分析）・口腔内写真・型取りなどを行い、詳しい治療計画を立てます",
                                    time: "約1時間"
                                },
                                {
                                    step: "STEP 3",
                                    title: "診断・治療計画の説明",
                                    description: "検査結果をもとに、チンキャップの治療期間・費用について詳しくご説明します",
                                    time: "約30分"
                                },
                                {
                                    step: "STEP 4",
                                    title: "装置の製作・装着",
                                    description: "お子さま専用のチンキャップを製作し、装着します。正しい装着方法・装着時間を丁寧にご指導します",
                                    time: "約30分"
                                },
                                {
                                    step: "STEP 5",
                                    title: "定期通院（月1回）",
                                    description: "装置の使用状況確認・下顎の成長チェック・装置の調整を行います。お子さまの成長に合わせてゴムの強さを調整します",
                                    time: "1〜3年"
                                },
                                {
                                    step: "STEP 6",
                                    title: "保定期間",
                                    description: "下顎の成長が抑制されたら保定装置に切り替え、後戻りを防ぎます。必要に応じて2期治療（仕上げの矯正）に移行します",
                                    time: "6ヶ月〜1年"
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-6 hover:shadow-xl transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#6B9BD1] to-[#5B8BC1] rounded-2xl flex items-center justify-center text-white font-bold flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-bold text-[#6B9BD1]">{item.step}</span>
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
                                    <span className="w-8 h-8 bg-[#6B9BD1] rounded-full flex items-center justify-center text-white text-sm">Q1</span>
                                    何歳から始められますか？
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-10">
                                    <strong className="text-[#6B9BD1]">A.</strong> 3〜10歳の成長期が最適です。受け口は早期発見・早期治療が重要で、<strong>3〜5歳から開始</strong>することで効果が最も高くなります。遅くとも10歳までには開始することを推奨します。
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <h3 className="font-bold text-[#5A4D41] text-lg mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-[#6B9BD1] rounded-full flex items-center justify-center text-white text-sm">Q2</span>
                                    1日どれくらい装着する必要がありますか？
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-10">
                                    <strong className="text-[#6B9BD1]">A.</strong> <strong>毎日10〜12時間</strong>の装着が必要です。主に就寝時に装着するため、日中は外して普通の生活ができます。装着時間が短いと効果が出にくくなるため、毎日きちんと装着することが重要です。
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <h3 className="font-bold text-[#5A4D41] text-lg mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-[#6B9BD1] rounded-full flex items-center justify-center text-white text-sm">Q3</span>
                                    痛みはありますか？
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-10">
                                    <strong className="text-[#6B9BD1]">A.</strong> 装着直後は顎先への圧迫感がありますが、<strong>強い痛みはありません</strong>。数日で慣れます。ただし、装着が不適切な場合は痛みが出ることがあるため、違和感が続く場合はすぐにご相談ください。
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <h3 className="font-bold text-[#5A4D41] text-lg mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-[#6B9BD1] rounded-full flex items-center justify-center text-white text-sm">Q4</span>
                                    お手入れ方法は？
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-10">
                                    <strong className="text-[#6B9BD1]">A.</strong> 使用後は<strong>水洗いして乾燥</strong>させます。キャップ部分は中性洗剤で洗浄し、ゴムバンドは定期的に交換します。清潔に保つことで、肌トラブルを防げます。
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <h3 className="font-bold text-[#5A4D41] text-lg mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-[#6B9BD1] rounded-full flex items-center justify-center text-white text-sm">Q5</span>
                                    治療期間はどれくらいですか？
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-10">
                                    <strong className="text-[#6B9BD1]">A.</strong> 平均<strong>1〜3年</strong>です。お子さまの年齢・症状の重さ・装着時間の遵守状況によって変わります。早期に始めるほど治療期間は短くなる傾向があります。
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <h3 className="font-bold text-[#5A4D41] text-lg mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-[#6B9BD1] rounded-full flex items-center justify-center text-white text-sm">Q6</span>
                                    外科手術は本当に避けられますか？
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-10">
                                    <strong className="text-[#6B9BD1]">A.</strong> <strong>成長期に早期治療を行うことで、外科手術を避けられる可能性が高くなります</strong>。ただし、重度の骨格性受け口や遺伝的要因が強い場合は、成人後に外科手術が必要になることもあります。まずは無料相談で詳しく診断させていただきます。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-2 bg-gradient-to-br from-[#D6E9F5] to-[#C6D9E5]">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-[#6B9BD1]/20">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#5A4D41]">
                                受け口は早期治療が重要です<br />
                                <span className="text-4xl md:text-5xl block mt-2 text-[#6B9BD1]">まずは無料相談へ</span>
                            </h2>
                            <p className="text-lg md:text-xl mb-4 text-gray-700">
                                チンキャップが適しているか、まずは無料相談でご確認ください
                            </p>
                            <p className="text-gray-600 mb-12">
                                相談料は保険診療の範囲内のみ。無理な勧誘は一切いたしません。
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto mb-8">
                                <a
                                    href="https://apo-toolboxes.stransa.co.jp/user/web/babordc4ba29b/reservations"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-[#6B9BD1] text-white px-8 py-5 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-[#5B8BC1] transition-all transform hover:scale-105 flex items-center justify-center gap-3 text-lg"
                                >
                                    <Calendar size={24} className="group-hover:rotate-12 transition-transform" />
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs">24時間受付</span>
                                        <span className="text-lg font-bold">WEB予約</span>
                                    </div>
                                </a>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                                <a href="/kidsortho/appliances" className="flex items-center gap-2 text-[#6B9BD1] hover:text-[#5B8BC1] transition-colors">
                                    <ArrowRight size={16} />
                                    装置一覧に戻る
                                </a>
                                <a href="/kidsortho/cost" className="flex items-center gap-2 text-[#6B9BD1] hover:text-[#5B8BC1] transition-colors">
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
