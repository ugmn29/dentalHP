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
    title: '機能的矯正装置（バイオネーター・FKO）｜効果・費用・治療期間を詳しく解説｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '機能的矯正装置（バイオネーター・FKO・アクチバトール）で顎のバランスを整える小児矯正治療を徹底解説。受け口・出っ歯の改善効果、費用、治療期間をわかりやすく説明します。',
    keywords: '機能的矯正装置,バイオネーター,FKO,アクチバトール,こども矯正,小児矯正,受け口,出っ歯,費用,治療期間',
    openGraph: {
        title: '機能的矯正装置（バイオネーター・FKO）｜効果・費用・治療期間を詳しく解説｜F歯科・矯正歯科 豊洲プライムスクエア院',
        description: '機能的矯正装置（バイオネーター・FKO・アクチバトール）で顎のバランスを整える小児矯正治療を徹底解説。受け口・出っ歯の改善効果、費用、治療期間をわかりやすく説明します。',
        type: 'website',
        locale: 'ja_JP',
        url: 'https://fshika.com/kidsortho/appliances/functional',
        siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
    },
};

export default function FunctionalAppliancePage() {
    return (
        <>
            <Header />

            {/* Breadcrumbs */}
            <section className="bg-white py-3 border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 text-sm text-[#8D8070]">
                        <Link href="/" className="hover:text-[#C5A572] transition-colors flex items-center">
                            <Home className="w-4 h-4 mr-1" />
                            ホーム
                        </Link>
                        <ChevronRight size={14} />
                        <Link href="/kidsortho" className="hover:text-[#C5A572] transition-colors">こども矯正</Link>
                        <ChevronRight size={14} />
                        <Link href="/kidsortho/appliances" className="hover:text-[#C5A572] transition-colors">装置一覧</Link>
                        <ChevronRight size={14} />
                        <span className="text-[#C5A572] font-bold">機能的矯正装置</span>
                    </div>
                </div>
            </section>

            <main className="bg-[#FDFBF7]" style={{ fontFamily: '"游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", sans-serif' }}>
                {/* Hero Section */}
                <section className="bg-[#FDFBF7] py-6 md:py-6">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="mb-6">
                                <p className="text-[#C5A572] font-bold text-sm mb-2">機能的矯正装置</p>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5A4D41] mb-3" style={{ fontFamily: '"游明朝", "Yu Mincho", YuMincho, "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif' }}>
                                    機能的矯正装置（バイオネーター・FKO）｜効果・費用・治療期間を詳しく解説
                                </h1>
                                <PageImage path="/kidsortho/appliances/functional" alt="機能的矯正装置の効果・費用・治療期間" />
                                <div className="w-16 h-0.5 bg-[#C5A572] mb-6"></div>
                            </div>

                            {/* ヒーロー画像 */}
                            <KidsOrthoImage
                                name="functional-hero"
                                alt="機能的矯正装置の外観"
                                category="appliances"
                            />

                            <p className="text-base md:text-lg leading-loose text-[#8D8070] font-sans mt-6 mb-8">
                                バイオネーター・FKOなど、筋肉の力を利用して顎の成長をコントロールし、骨格的な問題を改善する装置です
                            </p>
                        </div>
                    </div>
                </section>

                {/* 機能的矯正装置とは */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4" style={{ fontFamily: '"游明朝", "Yu Mincho", YuMincho, "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif' }}>
                                機能的矯正装置とは
                            </h2>
                            <p className="text-gray-600">
                                顎の骨格的な問題を成長期に改善する装置
                            </p>
                        </div>

                        <div className="mb-12">
                            <p className="text-lg text-[#5A4D41] leading-relaxed mb-6">
                                機能的矯正装置は、<span className="font-bold text-[#C5A572]">上下の顎のバランスを整える</span>ことを目的とした取り外し式の装置です。代表的なものに「バイオネーター」「FKO（Functional Orthodontic Appliance）」「アクチバトール」などがあります。
                            </p>
                            <p className="text-lg text-[#5A4D41] leading-relaxed">
                                <span className="font-bold text-[#C5A572]">筋肉の力や下顎の位置を利用</span>して、顎の成長を促進したり抑制したりすることで、受け口（反対咬合）・出っ歯（上顎前突）などの骨格的な問題を改善します。成長期のお子さまだからこそ効果が出やすい治療法です。
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">下顎の成長促進</h4>
                                <p className="text-[#8D8070] leading-relaxed">
                                    受け口・小顎症などに対して、下顎を前方に誘導し、下顎の成長を促進します
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">上顎の成長抑制</h4>
                                <p className="text-[#8D8070] leading-relaxed">
                                    出っ歯（上顎前突）に対して、上顎の過剰な成長を抑制し、上下のバランスを整えます
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* どのように機能するのか */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4" style={{ fontFamily: '"游明朝", "Yu Mincho", YuMincho, "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif' }}>
                                どのように機能するのか？
                            </h2>
                            <p className="text-gray-600">
                                筋肉の力を利用した自然な治療メカニズム
                            </p>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                機能的矯正装置の作用メカニズム
                            </h4>
                            <p className="text-[#5A4D41] leading-relaxed mb-8">
                                機能的矯正装置は、装置を口の中に入れることで<span className="font-bold text-[#C5A572]">下顎を前方または後方に誘導</span>します。この位置で咬むことで、咀嚼筋（かむ筋肉）に適度な刺激が加わり、顎の骨の成長方向をコントロールします。
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <p className="font-bold text-[#5A4D41] mb-2">1. 下顎の位置誘導</p>
                                    <p className="text-[#8D8070]">装置が下顎を正しい位置に誘導し、理想的な咬み合わせを作ります</p>
                                </div>
                                <div>
                                    <p className="font-bold text-[#5A4D41] mb-2">2. 筋肉への刺激</p>
                                    <p className="text-[#8D8070]">咀嚼筋に適切な刺激を与え、顎の成長を促進または抑制します</p>
                                </div>
                                <div>
                                    <p className="font-bold text-[#5A4D41] mb-2">3. 骨のリモデリング</p>
                                    <p className="text-[#8D8070]">持続的な刺激により、顎の骨が理想的な形に成長します</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-6 border-l-4 border-yellow-400 rounded-r-lg">
                            <p className="font-bold text-[#5A4D41] mb-2">成長期だからこそ効果が高い</p>
                            <p className="text-[#8D8070] leading-relaxed">
                                6〜10歳の成長期に治療を行うことで、顎の成長をコントロールしやすくなります。成人になってからでは外科手術が必要になる骨格的な問題も、この時期であれば装置で改善できる可能性があります。
                            </p>

                        {/* 効果の画像 */}
                        <div className="mt-8">
                            <KidsOrthoImage
                                name="functional-effect"
                                alt="機能的矯正装置の効果を示す図解"
                                category="appliances"
                            />
                        </div>
                        </div>
                    </div>
                </section>

                {/* 主な種類 */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4" style={{ fontFamily: '"游明朝", "Yu Mincho", YuMincho, "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif' }}>
                                機能的矯正装置の主な種類
                            </h2>
                            <p className="text-gray-600">
                                代表的な3つのタイプをご紹介します
                            </p>
                        </div>

                        <div className="space-y-12">
                            {/* バイオネーター */}
                            <div>
                                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                    1. バイオネーター（Bionator）
                                </h4>
                                <p className="text-[#8D8070] mb-6">最も広く使用されている機能的矯正装置</p>

                                <div className="space-y-6">
                                    <div>
                                        <p className="font-bold text-[#5A4D41] mb-3">特徴</p>
                                        <ul className="space-y-2 text-[#8D8070]">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">•</span>
                                                <span>上下一体型の取り外し式装置</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">•</span>
                                                <span>主に就寝時と日中数時間装着</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">•</span>
                                                <span>受け口・出っ歯の両方に対応可能</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">•</span>
                                                <span>6〜10歳の成長期に最適</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#5A4D41] mb-3">こんなお子さまに</p>
                                        <ul className="space-y-2 text-[#8D8070]">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">✓</span>
                                                <span>受け口（下顎が前に出ている）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">✓</span>
                                                <span>出っ歯（上顎が大きく前に出ている）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">✓</span>
                                                <span>上下の顎のバランスが悪い</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">✓</span>
                                                <span>骨格的な問題を早期に改善したい</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <p className="text-[#8D8070] bg-blue-50 p-4 border-l-4 border-blue-400 rounded-r-lg mt-4">
                                    <span className="font-bold text-[#5A4D41]">当院での採用：</span>
                                    バイオネーターは骨格的な問題の改善に効果が高く、当院でも受け口・出っ歯の治療に使用しています。
                                </p>
                            </div>

                            {/* FKO */}
                            <div>
                                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                    2. FKO（Functional Orthodontic Appliance）
                                </h4>
                                <p className="text-[#8D8070] mb-6">ヨーロッパで広く使用される機能的装置</p>

                                <div className="space-y-6">
                                    <div>
                                        <p className="font-bold text-[#5A4D41] mb-3">特徴</p>
                                        <ul className="space-y-2 text-[#8D8070]">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">•</span>
                                                <span>バイオネーターと類似した構造</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">•</span>
                                                <span>レジン製で耐久性が高い</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">•</span>
                                                <span>主に就寝時に装着</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">•</span>
                                                <span>6〜12歳に適応</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#5A4D41] mb-3">こんなお子さまに</p>
                                        <ul className="space-y-2 text-[#8D8070]">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">✓</span>
                                                <span>下顎後退（下顎が小さい）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">✓</span>
                                                <span>過蓋咬合（深い咬み合わせ）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">✓</span>
                                                <span>上顎前突</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* アクチバトール */}
                            <div>
                                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                    3. アクチバトール（Activator）
                                </h4>
                                <p className="text-[#8D8070] mb-6">古典的な機能的矯正装置の原型</p>

                                <div className="space-y-6">
                                    <div>
                                        <p className="font-bold text-[#5A4D41] mb-3">特徴</p>
                                        <ul className="space-y-2 text-[#8D8070]">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">•</span>
                                                <span>上下一体型で大きめの装置</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">•</span>
                                                <span>主に就寝時のみ装着</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">•</span>
                                                <span>受け口の治療に効果が高い</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">•</span>
                                                <span>7〜10歳に適応</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#5A4D41] mb-3">こんなお子さまに</p>
                                        <ul className="space-y-2 text-[#8D8070]">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">✓</span>
                                                <span>受け口（反対咬合）</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">✓</span>
                                                <span>下顎前突</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C5A572] mt-1">✓</span>
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
                                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>装着時間を守る必要：</strong>毎日10〜14時間の装着が必要（主に就寝時）</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>成長期限定：</strong>6〜10歳の成長期にしか効果が出ない</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>装置が大きい：</strong>口の中で違和感があり、慣れるまで時間がかかる</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>治療期間が長い：</strong>1〜2年以上かかることが多い</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>協力が必要：</strong>お子さまが自分で装着できる年齢・性格が必要</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>2期治療が必要なことも：</strong>顎のバランスは整っても、歯並びの仕上げが必要な場合がある</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* よくある質問 */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">
                                よくある質問
                            </h3>
                            <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <div className="mb-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                                        <h4 className="font-bold text-[#5A4D41] text-lg">何歳から始められますか？</h4>
                                    </div>
                                </div>
                                <div className="text-[#8D8070] leading-relaxed">
                                    <p>
                                        <strong className="text-[#C5A572]">A.</strong> 6〜10歳の成長期が最適です。この時期は顎の成長が活発なため、装置の効果が出やすくなります。特に受け口の治療は早ければ早いほど効果が高いため、3〜5歳から開始することもあります。
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <div className="mb-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                                        <h4 className="font-bold text-[#5A4D41] text-lg">1日どれくらい装着する必要がありますか？</h4>
                                    </div>
                                </div>
                                <div className="text-[#8D8070] leading-relaxed">
                                    <p>
                                        <strong className="text-[#C5A572]">A.</strong> 基本的には<strong>就寝時＋日中2〜3時間</strong>の装着が必要です。バイオネーターは主に就寝時のみでOKですが、効果を高めるために日中も装着することを推奨します。装着時間が長いほど効果が出やすくなります。
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <div className="mb-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                                        <h4 className="font-bold text-[#5A4D41] text-lg">痛みはありますか？</h4>
                                    </div>
                                </div>
                                <div className="text-[#8D8070] leading-relaxed">
                                    <p>
                                        <strong className="text-[#C5A572]">A.</strong> <strong>強い痛みはありません</strong>が、装着直後は口の中で違和感があります。特に最初の1〜2週間は慣れるまで時間がかかりますが、その後は快適に使用できます。自然な筋肉の力を利用するため、ワイヤー矯正のような強い痛みはありません。
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <div className="mb-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                                        <h4 className="font-bold text-[#5A4D41] text-lg">お手入れ方法は？</h4>
                                    </div>
                                </div>
                                <div className="text-[#8D8070] leading-relaxed">
                                    <p>
                                        <strong className="text-[#C5A572]">A.</strong> 使用後は<strong>水または専用洗浄剤で洗浄</strong>し、乾燥させて保管します。週に1〜2回、専用の洗浄剤（リテーナー洗浄剤）でつけ置き洗浄すると清潔に保てます。熱湯消毒は変形の原因になるので避けてください。
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <div className="mb-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                                        <h4 className="font-bold text-[#5A4D41] text-lg">治療期間はどれくらいですか？</h4>
                                    </div>
                                </div>
                                <div className="text-[#8D8070] leading-relaxed">
                                    <p>
                                        <strong className="text-[#C5A572]">A.</strong> 平均<strong>1〜2年</strong>です。お子さまの年齢・症状・装着時間の遵守状況によって変わります。受け口の場合は早期に始めることで6ヶ月〜1年で改善することもあります。
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                <div className="mb-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q6</span>
                                        <h4 className="font-bold text-[#5A4D41] text-lg">どんな症状に効果がありますか？</h4>
                                    </div>
                                </div>
                                <div className="text-[#8D8070] leading-relaxed">
                                    <p className="mb-3">
                                        <strong className="text-[#C5A572]">A.</strong> 以下のような骨格的な問題に効果があります：
                                    </p>
                                    <ul className="space-y-2 text-[#8D8070]">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#C5A572] mt-1">✓</span>
                                            <span>受け口（下顎前突・反対咬合）</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#C5A572] mt-1">✓</span>
                                            <span>出っ歯（上顎前突）</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#C5A572] mt-1">✓</span>
                                            <span>下顎後退（下顎が小さい）</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#C5A572] mt-1">✓</span>
                                            <span>過蓋咬合（深い咬み合わせ）</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#C5A572] mt-1">✓</span>
                                            <span>上下の顎のバランスが悪い</span>
                                        </li>
                                    </ul>
                                    <p className="mt-3">
                                        ただし、<strong>重度の骨格的な問題</strong>には効果が限定的です。まずは無料相談で適応かどうかご確認ください。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-4">
                                    お子さまの顎のバランスを早期に整えましょう
                                </h2>
                                <p className="text-lg md:text-xl text-[#8D8070] leading-loose font-sans">
                                    機能的矯正装置が適しているか、まずは無料相談でご確認ください
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
