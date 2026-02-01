import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { ArrowRight, CheckCircle, AlertCircle, Calendar, Heart, TrendingUp, Clock, DollarSign, Users, Wrench, Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function FunctionalAppliancePage() {
    return (
        <>
            <Header />
            <main className="bg-white">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-[#E8F2ED] to-[#D4E8DC] py-2 md:py-2 overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-[#395b45] rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#2d4835] rounded-full blur-3xl"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full text-[#395b45] font-bold text-sm mb-6 shadow-sm border border-[#395b45]/20">
                                <Wrench className="inline-block w-4 h-4 mr-2" />
                                機能的矯正装置
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5A4D41] mb-6 leading-tight">
                                上下の顎のバランスを整える<br />
                                <span className="text-[#395b45]">機能的矯正装置</span>
                            </h1>
                            <p className="text-lg md:text-xl text-[#8D8070] mb-8 leading-relaxed">
                                バイオネーター・FKOなど、筋肉の力を利用して<br className="hidden md:block" />
                                顎の成長をコントロールし、骨格的な問題を改善する装置です
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
                            <span className="text-[#E67A2E] font-bold">機能的矯正装置</span>
                        </div>
                    </div>
                </section>

                {/* 機能的矯正装置とは */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                機能的矯正装置とは
                            </h2>
                            <p className="text-gray-600">
                                顎の骨格的な問題を成長期に改善する装置
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-[#395b45]/20 mb-12">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                機能的矯正装置は、<span className="font-bold text-[#395b45]">上下の顎のバランスを整える</span>ことを目的とした取り外し式の装置です。代表的なものに「バイオネーター」「FKO（Functional Orthodontic Appliance）」「アクチバトール」などがあります。
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                <span className="font-bold text-[#395b45]">筋肉の力や下顎の位置を利用</span>して、顎の成長を促進したり抑制したりすることで、受け口（反対咬合）・出っ歯（上顎前突）などの骨格的な問題を改善します。成長期のお子さまだからこそ効果が出やすい治療法です。
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl p-6 border-2 border-[#395b45]/20 shadow-lg">
                                <div className="w-12 h-12 bg-[#395b45] rounded-full flex items-center justify-center mb-4">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#5A4D41] mb-3">下顎の成長促進</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    受け口・小顎症などに対して、下顎を前方に誘導し、下顎の成長を促進します
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 border-2 border-[#395b45]/20 shadow-lg">
                                <div className="w-12 h-12 bg-[#395b45] rounded-full flex items-center justify-center mb-4">
                                    <Heart className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#5A4D41] mb-3">上顎の成長抑制</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    出っ歯（上顎前突）に対して、上顎の過剰な成長を抑制し、上下のバランスを整えます
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
                                筋肉の力を利用した自然な治療メカニズム
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-[#395b45]/20 mb-8">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-[#5A4D41] mb-4 flex items-center gap-2">
                                    <Wrench className="w-6 h-6 text-[#395b45]" />
                                    機能的矯正装置の作用メカニズム
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    機能的矯正装置は、装置を口の中に入れることで<span className="font-bold text-[#395b45]">下顎を前方または後方に誘導</span>します。この位置で咬むことで、咀嚼筋（かむ筋肉）に適度な刺激が加わり、顎の骨の成長方向をコントロールします。
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-green-50 rounded-xl p-6 border-2 border-[#395b45]/20">
                                    <div className="w-12 h-12 bg-[#395b45] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">1</div>
                                    <h4 className="font-bold text-[#5A4D41] mb-2">下顎の位置誘導</h4>
                                    <p className="text-sm text-gray-700">装置が下顎を正しい位置に誘導し、理想的な咬み合わせを作ります</p>
                                </div>
                                <div className="bg-green-50 rounded-xl p-6 border-2 border-[#395b45]/20">
                                    <div className="w-12 h-12 bg-[#395b45] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">2</div>
                                    <h4 className="font-bold text-[#5A4D41] mb-2">筋肉への刺激</h4>
                                    <p className="text-sm text-gray-700">咀嚼筋に適切な刺激を与え、顎の成長を促進または抑制します</p>
                                </div>
                                <div className="bg-green-50 rounded-xl p-6 border-2 border-[#395b45]/20">
                                    <div className="w-12 h-12 bg-[#395b45] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">3</div>
                                    <h4 className="font-bold text-[#5A4D41] mb-2">骨のリモデリング</h4>
                                    <p className="text-sm text-gray-700">持続的な刺激により、顎の骨が理想的な形に成長します</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#395b45]/10 border-l-4 border-[#395b45] p-6 rounded-r-xl">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-[#395b45] flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-[#5A4D41] mb-2">成長期だからこそ効果が高い</p>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        6〜10歳の成長期に治療を行うことで、顎の成長をコントロールしやすくなります。成人になってからでは外科手術が必要になる骨格的な問題も、この時期であれば装置で改善できる可能性があります。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 主な種類 */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                機能的矯正装置の主な種類
                            </h2>
                            <p className="text-gray-600">
                                代表的な3つのタイプをご紹介します
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* バイオネーター */}
                            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-[#395b45]/20">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#395b45] to-[#2d4835] rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#5A4D41]">バイオネーター（Bionator）</h3>
                                        <p className="text-sm text-gray-600">最も広く使用されている機能的矯正装置</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="font-bold text-[#5A4D41] mb-3 flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#395b45]" />
                                            特徴
                                        </h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-1">•</span>
                                                <span>上下一体型の取り外し式装置</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-1">•</span>
                                                <span>主に就寝時と日中数時間装着</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-1">•</span>
                                                <span>受け口・出っ歯の両方に対応可能</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-1">•</span>
                                                <span>6〜10歳の成長期に最適</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#5A4D41] mb-3 flex items-center gap-2">
                                            <Users className="w-5 h-5 text-[#395b45]" />
                                            こんなお子さまに
                                        </h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-1">✓</span>
                                                <span>受け口（下顎が前に出ている）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-1">✓</span>
                                                <span>出っ歯（上顎が大きく前に出ている）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-1">✓</span>
                                                <span>上下の顎のバランスが悪い</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#395b45] mt-1">✓</span>
                                                <span>骨格的な問題を早期に改善したい</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-4 rounded-xl border border-[#395b45]/20">
                                    <p className="text-sm text-gray-700">
                                        <span className="font-bold text-[#395b45]">当院での採用：</span>
                                        バイオネーターは骨格的な問題の改善に効果が高く、当院でも受け口・出っ歯の治療に使用しています。
                                    </p>
                                </div>
                            </div>

                            {/* FKO */}
                            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-200">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#5A4D41]">FKO（Functional Orthodontic Appliance）</h3>
                                        <p className="text-sm text-gray-600">ヨーロッパで広く使用される機能的装置</p>
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
                                                <span>バイオネーターと類似した構造</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600 mt-1">•</span>
                                                <span>レジン製で耐久性が高い</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600 mt-1">•</span>
                                                <span>主に就寝時に装着</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600 mt-1">•</span>
                                                <span>6〜12歳に適応</span>
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
                                                <span>下顎後退（下顎が小さい）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600 mt-1">✓</span>
                                                <span>過蓋咬合（深い咬み合わせ）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-600 mt-1">✓</span>
                                                <span>上顎前突</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* アクチバトール */}
                            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-200">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#5A4D41]">アクチバトール（Activator）</h3>
                                        <p className="text-sm text-gray-600">古典的な機能的矯正装置の原型</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="font-bold text-[#5A4D41] mb-3 flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-purple-600" />
                                            特徴
                                        </h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-600 mt-1">•</span>
                                                <span>上下一体型で大きめの装置</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-600 mt-1">•</span>
                                                <span>主に就寝時のみ装着</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-600 mt-1">•</span>
                                                <span>受け口の治療に効果が高い</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-600 mt-1">•</span>
                                                <span>7〜10歳に適応</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#5A4D41] mb-3 flex items-center gap-2">
                                            <Users className="w-5 h-5 text-purple-600" />
                                            こんなお子さまに
                                        </h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-600 mt-1">✓</span>
                                                <span>受け口（反対咬合）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-600 mt-1">✓</span>
                                                <span>下顎前突</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-600 mt-1">✓</span>
                                                <span>骨格性の問題が強い</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* メリット・デメリット */}
                <section className="py-2 bg-gradient-to-b from-gray-50 to-white">
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
                                        <span><strong>骨格的な問題を改善：</strong>顎の成長をコントロールし、根本的な改善が可能</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>外科手術を回避：</strong>成長期に治療することで、将来の外科手術を避けられる</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>取り外し可能：</strong>食事・歯磨き時は外せるので衛生的</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>痛みが少ない：</strong>自然な筋肉の力を利用するため、強い痛みがない</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>2期治療が簡単に：</strong>1期治療で顎のバランスを整えることで、2期治療が短期間で済む</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>抜歯のリスク軽減：</strong>顎を広げることで、抜歯矯正を避けられる可能性が高まる</span>
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
                                        <span><strong>装着時間を守る必要：</strong>毎日10〜14時間の装着が必要（主に就寝時）</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>成長期限定：</strong>6〜10歳の成長期にしか効果が出ない</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>装置が大きい：</strong>口の中で違和感があり、慣れるまで時間がかかる</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>治療期間が長い：</strong>1〜2年以上かかることが多い</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>協力が必要：</strong>お子さまが自分で装着できる年齢・性格が必要</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>2期治療が必要なことも：</strong>顎のバランスは整っても、歯並びの仕上げが必要な場合がある</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 費用について */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                費用について
                            </h2>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-[#395b45]/20 mb-8">
                            <div className="text-center mb-8">
                                <div className="inline-block bg-[#395b45] text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                                    機能的矯正装置の費用
                                </div>
                                <div className="text-5xl font-bold text-[#395b45] mb-2">
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
                                        "装置代（バイオネーター等）",
                                        "装置の調整費（定期通院時）",
                                        "MFT（口腔筋機能療法）指導",
                                        "経過観察（永久歯生え揃うまで）",
                                        "保定装置"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#395b45] flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 bg-green-50 p-6 rounded-xl border border-[#395b45]/20">
                                <h4 className="font-bold text-[#5A4D41] mb-3 flex items-center gap-2">
                                    <DollarSign className="w-5 h-5 text-[#395b45]" />
                                    費用の詳細
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#395b45] mt-1">•</span>
                                        <span><strong>通院回数：</strong>月1回程度（1回30分未満）</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#395b45] mt-1">•</span>
                                        <span><strong>治療期間：</strong>平均1〜2年</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#395b45] mt-1">•</span>
                                        <span><strong>料金体系：</strong>トータルフィー制度（追加費用なし）</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#395b45] mt-1">•</span>
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
                <section className="py-2 bg-gradient-to-b from-gray-50 to-white">
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
                                    description: "お子さまの咬み合わせ・顎の大きさを確認し、機能的矯正装置が適しているか診断します",
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
                                    description: "検査結果をもとに、最適な装置の種類（バイオネーター・FKOなど）・治療期間・費用について詳しくご説明します",
                                    time: "約30分"
                                },
                                {
                                    step: "STEP 4",
                                    title: "装置の製作・装着",
                                    description: "お子さま専用の装置を製作し、装着します。正しい装着方法・お手入れ方法を丁寧にご指導します",
                                    time: "約30分"
                                },
                                {
                                    step: "STEP 5",
                                    title: "定期通院（月1回）",
                                    description: "装置の使用状況確認・顎の成長チェック・装置の調整を行います。お子さまの成長に合わせて装置を調整します",
                                    time: "1〜2年"
                                },
                                {
                                    step: "STEP 6",
                                    title: "保定期間",
                                    description: "顎のバランスが整ったら保定装置に切り替え、後戻りを防ぎます。必要に応じて2期治療（仕上げの矯正）に移行します",
                                    time: "6ヶ月〜1年"
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-6 hover:shadow-xl transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#395b45] to-[#2d4835] rounded-2xl flex items-center justify-center text-white font-bold flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-bold text-[#395b45]">{item.step}</span>
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
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                                よくある質問
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <h3 className="font-bold text-[#5A4D41] text-lg mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-[#395b45] rounded-full flex items-center justify-center text-white text-sm">Q1</span>
                                    何歳から始められますか？
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-10">
                                    <strong className="text-[#395b45]">A.</strong> 6〜10歳の成長期が最適です。この時期は顎の成長が活発なため、装置の効果が出やすくなります。特に受け口の治療は早ければ早いほど効果が高いため、3〜5歳から開始することもあります。
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <h3 className="font-bold text-[#5A4D41] text-lg mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-[#395b45] rounded-full flex items-center justify-center text-white text-sm">Q2</span>
                                    1日どれくらい装着する必要がありますか？
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-10">
                                    <strong className="text-[#395b45]">A.</strong> 基本的には<strong>就寝時＋日中2〜3時間</strong>の装着が必要です。バイオネーターは主に就寝時のみでOKですが、効果を高めるために日中も装着することを推奨します。装着時間が長いほど効果が出やすくなります。
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <h3 className="font-bold text-[#5A4D41] text-lg mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-[#395b45] rounded-full flex items-center justify-center text-white text-sm">Q3</span>
                                    痛みはありますか？
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-10">
                                    <strong className="text-[#395b45]">A.</strong> <strong>強い痛みはありません</strong>が、装着直後は口の中で違和感があります。特に最初の1〜2週間は慣れるまで時間がかかりますが、その後は快適に使用できます。自然な筋肉の力を利用するため、ワイヤー矯正のような強い痛みはありません。
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <h3 className="font-bold text-[#5A4D41] text-lg mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-[#395b45] rounded-full flex items-center justify-center text-white text-sm">Q4</span>
                                    お手入れ方法は？
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-10">
                                    <strong className="text-[#395b45]">A.</strong> 使用後は<strong>水または専用洗浄剤で洗浄</strong>し、乾燥させて保管します。週に1〜2回、専用の洗浄剤（リテーナー洗浄剤）でつけ置き洗浄すると清潔に保てます。熱湯消毒は変形の原因になるので避けてください。
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <h3 className="font-bold text-[#5A4D41] text-lg mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-[#395b45] rounded-full flex items-center justify-center text-white text-sm">Q5</span>
                                    治療期間はどれくらいですか？
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-10">
                                    <strong className="text-[#395b45]">A.</strong> 平均<strong>1〜2年</strong>です。お子さまの年齢・症状・装着時間の遵守状況によって変わります。受け口の場合は早期に始めることで6ヶ月〜1年で改善することもあります。
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <h3 className="font-bold text-[#5A4D41] text-lg mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-[#395b45] rounded-full flex items-center justify-center text-white text-sm">Q6</span>
                                    どんな症状に効果がありますか？
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-10 mb-3">
                                    <strong className="text-[#395b45]">A.</strong> 以下のような骨格的な問題に効果があります：
                                </p>
                                <ul className="space-y-2 pl-10 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#395b45] mt-1">✓</span>
                                        <span>受け口（下顎前突・反対咬合）</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#395b45] mt-1">✓</span>
                                        <span>出っ歯（上顎前突）</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#395b45] mt-1">✓</span>
                                        <span>下顎後退（下顎が小さい）</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#395b45] mt-1">✓</span>
                                        <span>過蓋咬合（深い咬み合わせ）</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#395b45] mt-1">✓</span>
                                        <span>上下の顎のバランスが悪い</span>
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
                <section className="py-2 bg-gradient-to-br from-[#E8F2ED] to-[#D4E8DC]">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-[#395b45]/20">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#5A4D41]">
                                お子さまの顎のバランスを<br />
                                <span className="text-4xl md:text-5xl block mt-2 text-[#395b45]">早期に整えましょう</span>
                            </h2>
                            <p className="text-lg md:text-xl mb-4 text-gray-700">
                                機能的矯正装置が適しているか、まずは無料相談でご確認ください
                            </p>
                            <p className="text-gray-600 mb-12">
                                相談料は保険診療の範囲内のみ。無理な勧誘は一切いたしません。
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto mb-8">
                                <a
                                    href="https://apo-toolboxes.stransa.co.jp/user/web/babordc4ba29b/reservations"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-[#395b45] text-white px-8 py-5 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-[#2d4835] transition-all transform hover:scale-105 flex items-center justify-center gap-3 text-lg"
                                >
                                    <Calendar size={24} className="group-hover:rotate-12 transition-transform" />
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs">24時間受付</span>
                                        <span className="text-lg font-bold">WEB予約</span>
                                    </div>
                                </a>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                                <a href="/kidsortho/appliances" className="flex items-center gap-2 text-[#395b45] hover:text-[#2d4835] transition-colors">
                                    <ArrowRight size={16} />
                                    装置一覧に戻る
                                </a>
                                <a href="/kidsortho/cost" className="flex items-center gap-2 text-[#395b45] hover:text-[#2d4835] transition-colors">
                                    <ArrowRight size={16} />
                                    費用について
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
