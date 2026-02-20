import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { KidsOrthoImage } from '@/components/KidsOrthoImage';
import { PageImage } from '@/components/PageImage';
import { ArrowRight, CheckCircle, AlertCircle, Calendar, Heart, TrendingUp, Clock, DollarSign, Users, Wrench, Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'チンキャップとは？｜受け口治療の効果・費用・装着時間を詳しく解説｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: 'チンキャップで骨格性の受け口を早期改善。下顎の成長抑制による根本的治療の効果、費用相場、装着時間、外科手術回避の可能性をわかりやすく解説します。',
    keywords: 'チンキャップ,受け口,下顎前突,反対咬合,小児矯正,こども矯正,費用,効果,装着時間,外科手術回避',
    openGraph: {
        title: 'チンキャップとは？｜受け口治療の効果・費用・装着時間を詳しく解説｜F歯科・矯正歯科 豊洲プライムスクエア院',
        description: 'チンキャップで骨格性の受け口を早期改善。下顎の成長抑制による根本的治療の効果、費用相場、装着時間、外科手術回避の可能性をわかりやすく解説します。',
        type: 'website',
        locale: 'ja_JP',
        url: 'https://fuku-dental.jp/kidsortho/appliances/chin-cap',
        siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
    },
};

export default function ChinCapPage() {
    return (
        <>
            <Header />
            <main className="bg-[#FDFBF7]" style={{ fontFamily: '"游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", sans-serif' }}>
                {/* Hero Section */}
                <section className="bg-[#FDFBF7] py-8 md:py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {/* パンくずリスト */}
                            <div className="flex items-center gap-2 mb-8 text-sm text-[#8D8070]">
                                <Link href="/" className="hover:text-[#C5A572] transition-colors flex items-center">
                                    <Home className="w-4 h-4 mr-1" />
                                    ホーム
                                </Link>
                                <ChevronRight size={14} />
                                <Link href="/kidsortho" className="hover:text-[#C5A572] transition-colors">こども矯正</Link>
                                <ChevronRight size={14} />
                                <Link href="/kidsortho/appliances" className="hover:text-[#C5A572] transition-colors">装置一覧</Link>
                                <ChevronRight size={14} />
                                <span className="text-[#C5A572] font-bold">チンキャップ</span>
                            </div>

                            <div className="mb-6">
                                <p className="text-[#C5A572] font-bold text-sm mb-2">チンキャップ</p>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#5A4D41] mb-3">
                                    受け口を早期に改善するチンキャップ
                                </h1>
                                <PageImage path="/kidsortho/appliances/chin-cap" alt="受け口を早期に改善するチンキャップ" />
                                <div className="w-16 h-0.5 bg-[#C5A572] mb-6"></div>
                            </div>

                            {/* ヒーロー画像 */}
                            <KidsOrthoImage
                                name="chin-cap-hero"
                                alt="チンキャップの外観"
                                category="appliances"
                            />

                            <p className="text-base md:text-lg leading-loose text-[#8D8070] font-sans mt-6 mb-8">
                                下顎の過成長を抑制し、骨格性の受け口を成長期に根本的に改善する装置です
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-2 pb-16">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* チンキャップとは */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">チンキャップとは</h2>
                            <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

                            <p className="text-lg text-[#5A4D41] leading-relaxed mb-6 font-sans">
                                チンキャップは、<span className="font-bold text-[#C5A572]">受け口（下顎前突・反対咬合）</span>を改善するための装置です。顎先（オトガイ部）にキャップを当て、頭部とゴムバンドで連結することで、<span className="font-bold text-[#C5A572]">下顎の前方への成長を抑制</span>します。
                            </p>
                            <p className="text-lg text-[#5A4D41] leading-relaxed mb-10 font-sans">
                                受け口は遺伝的な要素が強く、自然に治ることはほとんどありません。<span className="font-bold text-[#C5A572]">3〜10歳の成長期に治療を開始</span>することで、下顎の過剰な成長をコントロールし、将来の外科手術を回避できる可能性が高まります。
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">下顎の成長抑制</h4>
                                    <p className="text-[#8D8070] leading-relaxed font-sans">
                                        下顎の前方・下方への過剰な成長を抑制し、上下の顎のバランスを整えます
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">外科手術の回避</h4>
                                    <p className="text-[#8D8070] leading-relaxed font-sans">
                                        成長期に治療することで、成人後の外科的矯正治療を回避できる可能性があります
                                    </p>
                                </div>
                            </div>

                            {/* 装着方法の画像 */}
                            <div className="mt-8">
                                <KidsOrthoImage
                                    name="chin-cap-usage"
                                    alt="チンキャップを装着している様子"
                                    category="appliances"
                                />
                            </div>
                        </section>

                        {/* どのように機能するのか */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">どのように機能するのか？</h2>
                            <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

                            <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                チンキャップの作用メカニズム
                            </h4>
                            <div className="space-y-4 text-[#5A4D41] leading-loose font-sans mb-10">
                                <p>
                                    チンキャップは、オトガイ部（顎先）にカップ状の装置を当て、頭部に装着したヘッドキャップとゴムバンドで連結します。この牽引力により、<span className="font-bold bg-yellow-100">下顎骨の前方への成長を抑制</span>します。
                                </p>
                                <p>
                                    <span className="font-bold bg-yellow-100">オトガイ部への圧力</span>：顎先に装着したキャップから後方・上方への持続的な力をかけます
                                </p>
                                <p>
                                    <span className="font-bold bg-yellow-100">成長方向の変更</span>：下顎の前方への成長を抑制し、上方・後方への成長を促します
                                </p>
                                <p>
                                    <span className="font-bold bg-yellow-100">顎のバランス改善</span>：上下の顎の大きさのバランスが整い、正常な咬み合わせに近づきます
                                </p>
                            </div>

                            {/* 効果の画像 */}
                            <KidsOrthoImage
                                name="chin-cap-effect"
                                alt="チンキャップの効果を示す図解"
                                category="appliances"
                            />

                            <div className="bg-yellow-50 p-6 border-l-4 border-yellow-400 rounded-r-lg mt-8">
                                <p className="font-bold text-[#5A4D41] mb-2 font-serif">早期治療が重要</p>
                                <p className="text-sm text-[#5A4D41] leading-relaxed font-sans">
                                    受け口は自然に治ることがほとんどなく、放置すると症状が悪化します。<span className="font-bold text-[#C5A572]">3〜10歳の成長期に治療を開始</span>することで、下顎の過剰な成長を抑制し、外科手術を避けられる可能性が高まります。
                                </p>
                            </div>
                        </section>

                        {/* メリット・デメリット */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">メリット・デメリット</h2>
                            <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

                            <h4 className="text-xl font-serif font-bold text-[#5A4D41] mb-4 pb-2 border-b-2 border-[#C5A572]">メリット</h4>
                            <ul className="space-y-3 ml-4 mb-10 text-[#8D8070] leading-loose font-sans">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                    <span><strong className="text-[#5A4D41]">外科手術を回避：</strong>成長期に治療することで、成人後の外科的矯正を避けられる可能性が高い</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                    <span><strong className="text-[#5A4D41]">骨格的な改善：</strong>下顎の成長をコントロールし、根本的な問題を解決</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                    <span><strong className="text-[#5A4D41]">早期開始が可能：</strong>3歳から始められ、早ければ早いほど効果が高い</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                    <span><strong className="text-[#5A4D41]">取り外し可能：</strong>主に就寝時の装着なので、日中の生活に支障がない</span>
                                </li>
                            </ul>

                            <h4 className="text-xl font-serif font-bold text-[#5A4D41] mb-4 pb-2 border-b-2 border-[#C5A572]">デメリット</h4>
                            <ul className="space-y-3 ml-4 mb-4 text-[#8D8070] leading-loose font-sans">
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                                    <span><strong className="text-[#5A4D41]">装着時間が長い：</strong>毎日10〜12時間（主に就寝時）の装着が必要</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                                    <span><strong className="text-[#5A4D41]">見た目の問題：</strong>就寝時に頭部に装置を装着するため、お子さまが嫌がることがある</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                                    <span><strong className="text-[#5A4D41]">成長期限定：</strong>成長期が終わると効果が出ないため、早期開始が重要</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                                    <span><strong className="text-[#5A4D41]">治療期間が長い：</strong>1〜3年と長期間の治療が必要</span>
                                </li>
                            </ul>
                        </section>

                        {/* 費用について */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">費用について</h2>
                            <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

                            {/* 一般的な費用相場 */}
                            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 mb-8">
                                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-blue-300">
                                    一般的な費用相場
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-[#8D8070] font-sans">全国の歯科医院での平均的な費用：</span>
                                        <span className="text-3xl font-bold text-blue-700">¥350,000〜¥500,000</span>
                                        <span className="text-gray-600">（税込）</span>
                                    </div>
                                    <p className="text-sm text-[#5A4D41] leading-relaxed font-sans">
                                        チンキャップは通常、1期治療（小児矯正）の一環として使用されます。多くの歯科医院では、チンキャップ単体ではなく、拡大床やその他の装置を組み合わせた総合的な小児矯正治療として提供されているため、費用は35万円〜50万円程度が一般的です。
                                    </p>
                                    <div className="bg-white p-4 rounded-lg">
                                        <p className="text-sm text-[#5A4D41] font-sans">
                                            <span className="font-bold text-blue-700">地域差・医院差：</span>
                                            都市部の専門医院では50万円〜70万円、地方の一般歯科では30万円〜45万円程度と、地域や医院の専門性によって費用が異なります。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                    当院の費用（税込）
                                </h3>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {/* 相談・検査費用 */}
                                    <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                                        <h4 className="font-bold text-green-700 mb-4 text-lg font-serif">相談・検査費用</h4>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[#5A4D41] font-sans">相談料</span>
                                                <span className="text-2xl font-bold text-green-700">¥0</span>
                                            </div>
                                            <p className="text-sm text-gray-600 font-sans">矯正相談は無料です</p>
                                            <div className="flex justify-between items-center pt-3 border-t border-green-200">
                                                <span className="text-[#5A4D41] font-sans">検査代</span>
                                                <span className="text-2xl font-bold text-green-700">¥0</span>
                                            </div>
                                            <p className="text-sm text-gray-600 font-sans">初回検査は無料です</p>
                                            <div className="flex justify-between items-center pt-3 border-t border-green-200">
                                                <span className="text-[#5A4D41] font-sans">結果説明</span>
                                                <span className="text-2xl font-bold text-[#C5A572]">¥11,000</span>
                                            </div>
                                            <p className="text-sm text-gray-600 font-sans">検査結果の詳しい説明とカウンセリング</p>
                                        </div>
                                    </div>

                                    {/* 装置費用 */}
                                    <div className="bg-white p-6 rounded-xl border-2 border-[#C5A572]">
                                        <h4 className="font-bold text-[#C5A572] mb-4 text-lg font-serif">装置費用</h4>
                                        <div className="text-center mb-4">
                                            <div className="text-5xl font-bold text-[#C5A572] mb-2">
                                                ¥132,000
                                            </div>
                                            <p className="text-sm text-gray-600 font-sans">（税込）</p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <p className="text-sm text-[#5A4D41] leading-relaxed font-sans">
                                                <span className="font-bold text-blue-700">含まれるもの：</span><br />
                                                チンキャップ、プレオルソ、EFライン、その他の付加的装置の全てを含みます
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-6">
                                    <h4 className="font-bold text-[#5A4D41] mb-4 font-serif">治療費に含まれるサービス</h4>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="flex items-start gap-2">
                                            <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                            <span className="text-[#8D8070] font-sans">装置代（チンキャップ・プレオルソ・EFライン等）</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                            <span className="text-[#8D8070] font-sans">装置の調整・交換費用</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                            <span className="text-[#8D8070] font-sans">MFT（筋機能療法）指導</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                            <span className="text-[#8D8070] font-sans">定期的な経過観察</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                            <span className="text-[#8D8070] font-sans">治療期間中のサポート</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                            <span className="text-[#8D8070] font-sans">保護者への指導・相談</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 p-6 border-l-4 border-yellow-400 rounded-r-lg">
                                <p className="font-bold text-[#5A4D41] mb-2 font-serif">医療費控除の対象です</p>
                                <p className="text-sm text-[#5A4D41] leading-relaxed font-sans">
                                    小児矯正治療は医療費控除の対象となります。確定申告で一部が還付される可能性がありますので、領収書は大切に保管してください。
                                </p>
                            </div>
                        </section>

                        {/* よくある質問 */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">よくある質問</h2>
                            <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

                            <div className="space-y-6">
                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                                                Q1
                                            </span>
                                            <h3 className="font-bold text-[#5A4D41] text-lg font-serif">
                                                何歳から始められますか？
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-loose font-sans">
                                        <p className="mb-3">
                                            <strong className="text-[#C5A572]">A.</strong> 3〜10歳の成長期が最適です。受け口は早期発見・早期治療が重要で、<strong>3〜5歳から開始</strong>することで効果が最も高くなります。遅くとも10歳までには開始することを推奨します。
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                                                Q2
                                            </span>
                                            <h3 className="font-bold text-[#5A4D41] text-lg font-serif">
                                                1日どれくらい装着する必要がありますか？
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-loose font-sans">
                                        <p className="mb-3">
                                            <strong className="text-[#C5A572]">A.</strong> <strong>毎日10〜12時間</strong>の装着が必要です。主に就寝時に装着するため、日中は外して普通の生活ができます。装着時間が短いと効果が出にくくなるため、毎日きちんと装着することが重要です。
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                                                Q3
                                            </span>
                                            <h3 className="font-bold text-[#5A4D41] text-lg font-serif">
                                                外科手術は本当に避けられますか？
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-loose font-sans">
                                        <p className="mb-3">
                                            <strong className="text-[#C5A572]">A.</strong> <strong>成長期に早期治療を行うことで、外科手術を避けられる可能性が高くなります</strong>。ただし、重度の骨格性受け口や遺伝的要因が強い場合は、成人後に外科手術が必要になることもあります。まずは無料相談で詳しく診断させていただきます。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="bg-[#FDFBF7] rounded-xl p-8 md:p-12">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-4">受け口は早期治療が重要です</h2>
                                <p className="text-lg md:text-xl text-[#8D8070] leading-loose font-sans">
                                    チンキャップが適しているか、まずは無料相談でご確認ください
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-[#C5A572] hover:bg-[#B39562] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
                                >
                                    <Calendar size={20} />
                                    <span>無料カウンセリング予約</span>
                                    <ArrowRight size={20} />
                                </Link>
                                <Link
                                    href="/kidsortho/appliances"
                                    className="inline-flex items-center justify-center gap-2 bg-[#5A4D41] hover:bg-[#4A3D31] text-white font-bold py-4 px-8 rounded-full transition-all border-2 border-[#5A4D41]"
                                >
                                    <span>装置一覧に戻る</span>
                                    <ArrowRight size={20} />
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>

                {/* 監修者情報 */}
                <div className="container mx-auto px-4 pt-2 pb-16">
                    <AuthorBio />
                </div>
            </main>
            <Footer />
        </>
    );
}
