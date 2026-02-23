import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { KidsOrthoImage } from '@/components/KidsOrthoImage';
import { PageImage } from '@/components/PageImage';
import { Wrench, ArrowRight, CheckCircle, AlertCircle, Clock, TrendingUp, X, Info, Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '拡大床とは？｜効果・費用・装着時間を詳しく解説｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '拡大床による小児矯正治療を徹底解説。顎を広げて永久歯のスペースを確保する拡大床の効果、費用、装着時間、メリット・デメリットをわかりやすく説明します。',
    keywords: '拡大床,こども矯正,小児矯正,費用,効果,装着時間,顎を広げる,スペース確保',
    openGraph: {
        title: '拡大床とは？｜効果・費用・装着時間を詳しく解説｜F歯科・矯正歯科 豊洲プライムスクエア院',
        description: '拡大床による小児矯正治療を徹底解説。顎を広げて永久歯のスペースを確保する拡大床の効果、費用、装着時間、メリット・デメリットをわかりやすく説明します。',
        type: 'website',
        locale: 'ja_JP',
        url: 'https://fshika.com/kidsortho/appliances/expander',
        siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
    },
};

export default function ExpanderPage() {
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
                        <span className="text-[#C5A572] font-bold">拡大床</span>
                    </div>
                </div>
            </section>

            <main className="bg-[#FDFBF7]" style={{ fontFamily: '"游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", sans-serif' }}>
                {/* Hero Section */}
                <section className="bg-[#FDFBF7] py-6 md:py-6">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="mb-6">
                                <p className="text-[#C5A572] font-bold text-sm mb-2">拡大床（かくだいしょう）</p>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#5A4D41] mb-3">
                                    拡大床とは？｜効果・費用・装着時間を詳しく解説
                                </h1>
                                <PageImage path="/kidsortho/appliances/expander" alt="拡大床の効果・費用・装着時間" />
                                <div className="w-16 h-0.5 bg-[#C5A572] mb-6"></div>
                            </div>

                            {/* ヒーロー画像 */}
                            <KidsOrthoImage
                                name="expander-hero"
                                alt="拡大床の外観"
                                category="appliances"
                            />

                            <p className="text-sm text-[#8D8070] mt-3">豊洲の矯正歯科が詳しく解説</p>
                            <p className="text-base md:text-lg leading-loose text-[#8D8070] font-sans mt-4 mb-8">
                                こども矯正で最も一般的に使用される取り外し式装置です
                            </p>
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

                            <div className="mb-12">
                                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                    拡大床の仕組み
                                </h4>
                                <p className="text-[#5A4D41] leading-relaxed mb-8">
                                    拡大床は、プラスチック製のプレートと金属製のワイヤーで構成された取り外し式の装置です。中央に組み込まれた「拡大ネジ」を定期的に回すことで、少しずつ顎の骨を横に広げていきます。
                                </p>

                                <div className="space-y-6">
                                    <div>
                                        <p className="font-bold text-[#5A4D41] mb-2">
                                            1. プレート部分
                                        </p>
                                        <p className="text-[#8D8070]">
                                            上顎または下顎の歯列に沿ったプラスチック製の床
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#5A4D41] mb-2">
                                            2. 拡大ネジ
                                        </p>
                                        <p className="text-[#8D8070]">
                                            中央の金属ネジを回すことで装置が少しずつ広がる
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#5A4D41] mb-2">
                                            3. クラスプ
                                        </p>
                                        <p className="text-[#8D8070]">
                                            装置を固定するための金属製のバネ（ワイヤー）
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        上顎拡大床
                                    </h4>
                                    <p className="text-[#8D8070] mb-4 leading-relaxed">
                                        上顎の歯列を横に広げる装置。上顎は左右の骨が中央で結合しているため、成長期であれば骨自体を広げることが可能です。
                                    </p>
                                    <p className="text-[#5A4D41] font-bold mb-2">適応症例</p>
                                    <ul className="text-[#8D8070] space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#C5A572]">•</span>
                                            <span>上顎が狭く、永久歯のスペース不足</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#C5A572]">•</span>
                                            <span>交叉咬合（奥歯の咬み合わせが逆）</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#C5A572]">•</span>
                                            <span>叢生（歯が重なっている）</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        下顎拡大床
                                    </h4>
                                    <p className="text-[#8D8070] mb-4 leading-relaxed">
                                        下顎の歯列を横に広げる装置。下顎は一体の骨のため、主に歯列の傾斜を改善します。
                                    </p>
                                    <p className="text-[#5A4D41] font-bold mb-2">適応症例</p>
                                    <ul className="text-[#8D8070] space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#C5A572]">•</span>
                                            <span>下顎の叢生（歯が重なっている）</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#C5A572]">•</span>
                                            <span>前歯が内側に倒れている</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#C5A572]">•</span>
                                            <span>上顎拡大との併用治療</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* メリット・デメリット */}
                <section className="py-6 md:py-6 bg-[#FDFBF7]">
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

                            <div className="space-y-12">
                                {/* メリット */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">メリット</h4>

                                    <ul className="space-y-3 text-[#8D8070] leading-loose font-sans">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-1" />
                                            <span><strong className="text-[#5A4D41]">取り外し可能：</strong>食事・歯磨き時に外せるため、衛生的で日常生活への影響が少ない</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-1" />
                                            <span><strong className="text-[#5A4D41]">むし歯リスクが低い：</strong>装置を外して歯磨きができるため、固定式に比べてむし歯になりにくい</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-1" />
                                            <span><strong className="text-[#5A4D41]">痛みが少ない：</strong>少しずつ拡大するため、痛みや違和感が比較的少ない</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-1" />
                                            <span><strong className="text-[#5A4D41]">費用が比較的安い：</strong>固定式装置に比べて製作費が安く、治療費を抑えられる</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-1" />
                                            <span><strong className="text-[#5A4D41]">緊急時に外せる：</strong>スポーツや楽器演奏など、必要に応じて取り外せる</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-1" />
                                            <span><strong className="text-[#5A4D41]">抜歯を回避できる：</strong>早期に顎を広げることで、将来的な抜歯を避けられる可能性が高まる</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* デメリット */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">デメリット</h4>

                                    <ul className="space-y-3 text-[#8D8070] leading-loose font-sans">
                                        <li className="flex items-start gap-3">
                                            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                                            <span><strong className="text-[#5A4D41]">装着時間を守る必要がある：</strong>1日12〜14時間以上の装着が必須。お子さまの協力性が求められる</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                                            <span><strong className="text-[#5A4D41]">紛失・破損のリスク：</strong>取り外し式のため、紛失や破損の可能性がある（再製作費用が発生）</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                                            <span><strong className="text-[#5A4D41]">発音への影響：</strong>装着時は発音がしづらく、慣れるまで数日〜数週間かかる</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                                            <span><strong className="text-[#5A4D41]">効果が装着時間に依存：</strong>装着時間が短いと効果が出ず、治療期間が延びる</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                                            <span><strong className="text-[#5A4D41]">適応症例が限定的：</strong>重度の不正咬合や骨格的な問題には効果が限定的</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                                            <span><strong className="text-[#5A4D41]">後戻りのリスク：</strong>拡大後、保定装置を使用しないと後戻りする可能性がある</span>
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

                            <div className="mb-8">
                                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                    推奨装着時間
                                </h4>
                                <div className="space-y-6">
                                    <div>
                                        <p className="font-bold text-[#5A4D41] mb-2">最低装着時間：12時間/日</p>
                                        <p className="text-[#8D8070]">
                                            効果を出すための最低ライン。これ以下では治療効果が期待できません
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#5A4D41] mb-2">理想的な装着時間：14〜16時間/日</p>
                                        <p className="text-[#8D8070]">
                                            より確実な効果を得るための推奨時間。就寝時+日中の数時間
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8 mb-8">
                                <div>
                                    <h4 className="font-bold text-[#5A4D41] font-serif mb-3 pb-2 border-b-2 border-[#C5A572]">装着タイミング</h4>
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

                                <div>
                                    <h4 className="font-bold text-[#5A4D41] font-serif mb-3 pb-2 border-b-2 border-[#C5A572]">装着中に外す時</h4>
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

                                <div>
                                    <h4 className="font-bold text-[#5A4D41] font-serif mb-3 pb-2 border-b-2 border-[#C5A572]">ネジの回転</h4>
                                    <ul className="text-sm text-[#8D8070] space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#C5A572] font-bold mt-0.5">•</span>
                                            <span><strong>頻度：</strong>週に1〜2回</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#C5A572] font-bold mt-0.5">•</span>
                                            <span><strong>方法：</strong>専用キーで90°回転</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#C5A572] font-bold mt-0.5">•</span>
                                            <span><strong>担当：</strong>保護者の方が実施</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-yellow-50 p-6 border-l-4 border-yellow-400 rounded-r-lg">
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

                        {/* 装着方法の画像 */}
                        <div className="container mx-auto px-4 max-w-4xl mb-8">
                            <KidsOrthoImage
                                name="expander-usage"
                                alt="拡大床を装着している様子"
                                category="appliances"
                            />
                        </div>

                </section>

                {/* お手入れ方法 */}
                <section className="py-2 bg-white">
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

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">毎食後の洗浄</h4>
                                    <div className="space-y-4 text-[#5A4D41] leading-loose">
                                        <p className="text-[#8D8070] mb-3">
                                            装置を外した後は、必ず水またはぬるま湯で洗います。歯ブラシを使って優しくこすり、食べカスや汚れを落としましょう。
                                        </p>
                                        <p className="text-sm text-[#5A4D41] bg-yellow-50 p-4 border-l-4 border-yellow-400 rounded-r-lg mt-3">
                                            <strong>注意：</strong>熱湯は使用しないでください。プラスチックが変形する恐れがあります。
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">週に1〜2回の念入り洗浄</h4>
                                    <div className="space-y-4 text-[#5A4D41] leading-loose">
                                        <p className="text-[#8D8070] mb-3">
                                            入れ歯洗浄剤（ポリデントなど）を使用して、装置を浸け置き洗いします。臭いや着色を防ぎ、清潔に保てます。
                                        </p>
                                        <p className="text-sm text-[#5A4D41] bg-blue-50 p-4 border-l-4 border-blue-400 rounded-r-lg mt-3">
                                            <strong>方法：</strong>コップに水と洗浄剤を入れ、装置を15〜30分浸す → 水でよくすすぐ
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">保管方法</h4>
                                    <div className="space-y-4 text-[#5A4D41] leading-loose">
                                        <p className="text-[#8D8070] mb-3">
                                            使用しない時は、専用ケースに入れて保管します。ティッシュに包むと誤って捨ててしまうリスクがあるので注意。
                                        </p>
                                        <div className="space-y-4 mt-3">
                                            <div>
                                                <p className="font-bold text-[#5A4D41] mb-2">良い保管方法</p>
                                                <ul className="text-[#8D8070] space-y-1">
                                                    <li>• 専用ケースに入れる</li>
                                                    <li>• 風通しの良い場所に置く</li>
                                                    <li>• 直射日光を避ける</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#5A4D41] mb-2">悪い保管方法</p>
                                                <ul className="text-[#8D8070] space-y-1">
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
                                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#C5A572] hidden md:block"></div>

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
                                            <div className="absolute -left-16 w-12 h-12 bg-[#C5A572] rounded-full flex items-center justify-center text-white font-bold shadow-lg hidden md:flex">
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
                <section className="py-6 md:py-6 bg-[#FDFBF7]">
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
                                        <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
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
                                        <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
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
                                        <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
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
                                        <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
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
                                        <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
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
                                        <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q6</span>
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
                <section className="py-6 md:py-6 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-4">お子さまに最適な装置を無料でご提案</h2>
                                <p className="text-lg md:text-xl text-[#8D8070] leading-loose font-sans">
                                    拡大床が適しているか、豊洲の歯医者・F歯科矯正歯科の無料相談でご確認ください
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-[#C5A572] hover:bg-[#B39562] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
                                >
                                    無料相談を予約する
                                    <ArrowRight size={20} />
                                </Link>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                                <Link
                                    href="/kidsortho/appliances"
                                    className="flex items-center justify-center gap-2 text-[#5A4D41] hover:text-[#C5A572] transition-colors"
                                >
                                    <ArrowRight size={16} />
                                    装置一覧に戻る
                                </Link>
                                <Link
                                    href="/kidsortho/cost"
                                    className="flex items-center justify-center gap-2 text-[#5A4D41] hover:text-[#C5A572] transition-colors"
                                >
                                    <ArrowRight size={16} />
                                    費用について
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
