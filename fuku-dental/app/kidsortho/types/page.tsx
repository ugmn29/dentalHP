import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { AlertCircle, CheckCircle, ArrowRight, Users, Clock, TrendingUp, Shield, ChevronDown, Calendar, Phone, Home, ChevronRight } from 'lucide-react';
import { KidsOrthoImage } from '@/components/KidsOrthoImage';
import { PageImage } from '@/components/PageImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '子供の不正咬合の種類｜歯並びタイプ別解説｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '子供の不正咬合の種類を歯科医師が解説。出っ歯・受け口・すきっ歯・叢生・開咬・過蓋咬合・交叉咬合など、各タイプの特徴と治療法をわかりやすくご紹介。豊洲のF歯科で無料相談。',
  keywords: '不正咬合 種類,子供 歯並び 種類,出っ歯,受け口,すきっ歯,叢生,開咬,過蓋咬合,豊洲 小児矯正',
  openGraph: {
    title: '子供の不正咬合の種類｜歯並びタイプ別解説｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '子供の不正咬合の種類を解説。出っ歯・受け口・すきっ歯など各タイプの特徴と治療法をご紹介。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/kidsortho/types',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function KidsOrthoTypesPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF7]" style={{ fontFamily: '"游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", sans-serif' }}>
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
                            <span className="text-[#E67A2E]">不正咬合の種類</span>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="py-6 md:py-6 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                                こどもの不正咬合の種類
                            </h1>
                            <PageImage path="/kidsortho/types" alt="こどもの不正咬合の種類" />
                            <div className="w-24 h-1 bg-[#E67A2E] mx-auto mb-8"></div>

                            <KidsOrthoImage
                                name="types-hero"
                                alt="不正咬合の種類と治療法"
                                category="guide"
                            />

                            <p className="text-xl md:text-2xl mt-6 mb-6 text-[#5A4D41] font-medium font-sans">
                                7つのタイプとその特徴
                            </p>
                            <p className="text-sm text-[#8D8070] mt-1 mb-4">豊洲の矯正歯科が詳しく解説</p>
                            <p className="text-lg text-[#8D8070] leading-relaxed font-sans">
                                豊洲で小児矯正をお考えの方へ。お子さまの不正咬合のタイプを知り、適切な治療時期と方法を理解しましょう
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}

                            <KidsOrthoImage
                                name="types-content"
                                alt="不正咬合の診断と治療計画"
                                category="guide"
                            />
                <section className="pt-8 pb-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-5xl">

                        {/* 不正咬合とは */}
                        <div className="mb-20">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">不正咬合とは？</h2>
                            <KidsOrthoImage
                                name="types-content"
                                alt="不正咬合の診断と治療計画"
                                category="guide"
                            />
                                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
                            </div>

                            <div className="space-y-4 text-[#5A4D41] leading-loose max-w-3xl mx-auto mb-8 font-sans">
                                <p>
                                    不正咬合（ふせいこうごう）とは、歯並びや咬み合わせが正常な状態からずれている状態のことです。見た目の問題だけでなく、お口の機能や全身の健康にも影響を与えます。
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                        <AlertCircle className="w-6 h-6 text-red-600" />
                                    </div>
                                    <h3 className="font-bold text-[#5A4D41] mb-2 font-serif">見た目への影響</h3>
                                    <p className="text-sm text-[#8D8070] font-sans">
                                        コンプレックスの原因となり、笑顔に自信が持てなくなることも
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                                        <AlertCircle className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <h3 className="font-bold text-[#5A4D41] mb-2 font-serif">機能への影響</h3>
                                    <p className="text-sm text-[#8D8070] font-sans">
                                        咀嚼（そしゃく）や発音に問題が生じ、消化不良や発音障害の原因に
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                        <AlertCircle className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="font-bold text-[#5A4D41] mb-2 font-serif">健康への影響</h3>
                                    <p className="text-sm text-[#8D8070] font-sans">
                                        虫歯や歯周病のリスクが高まり、顎関節症の原因にもなります
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 主な不正咬合の種類 */}
                        <div className="mb-16">
                            <div className="text-center mb-12">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">主な不正咬合の種類</h3>
                                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
                            </div>

                            <div className="space-y-12">
                                {/* 1. 上顎前突（出っ歯） */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#E67A2E]">
                                        1. 上顎前突（じょうがくぜんとつ）
                                    </h4>
                                    <p className="text-lg text-[#E67A2E] font-bold mb-4 font-sans">通称：出っ歯（でっぱ）</p>

                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <div>
                                            <h5 className="font-bold mb-2 font-serif">特徴</h5>
                                            <p className="mb-3">
                                                上の前歯が前方に突き出している状態です。上顎全体が前に出ている場合と、歯だけが前に出ている場合があります。
                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>口が閉じにくく、口呼吸になりやすい</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>前歯で噛み切りにくい</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>転倒時に前歯を折るリスクが高い</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="font-bold mb-2 font-serif">主な原因</h5>
                                            <p className="mb-3">
                                                <strong className="text-red-700">遺伝的要因：</strong>顎の骨格が遺伝、<strong className="text-yellow-700">悪習癖：</strong>指しゃぶり、舌で前歯を押す癖
                                            </p>
                                        </div>

                                        <div>
                                            <h5 className="font-bold text-[#E67A2E] mb-2">
                                                治療開始の適齢期
                                            </h5>
                                            <p>
                                                <strong>6〜8歳</strong>が最適。上顎の成長をコントロールし、下顎の成長を促すことで、バランスの良い骨格に導きます。
                                            </p>
                                        </div>

                                        <div className="text-center mt-6">
                                            <Link href="/kidsortho/types/overbite" className="inline-flex items-center gap-2 bg-[#E67A2E] text-white px-6 py-3 rounded-full font-bold hover:bg-[#D66A28] transition shadow-md">
                                                <span>上顎前突（出っ歯）について詳しく見る</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. 下顎前突（受け口） */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#E67A2E]">
                                        2. 下顎前突（かがくぜんとつ）
                                    </h4>
                                    <p className="text-lg text-[#E67A2E] font-bold mb-4 font-sans">通称：受け口（うけくち）、反対咬合</p>

                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <div>
                                            <h5 className="font-bold mb-2">特徴</h5>
                                            <p className="mb-3">
                                                下の前歯が上の前歯より前に出ている状態です。下顎全体が大きい場合と、歯の傾きだけの問題の場合があります。
                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>サ行、タ行の発音がしにくい</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>前歯で食べ物を噛み切れない</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>顔貌（しゃくれ）が気になる</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="font-bold mb-2 font-serif">主な原因</h5>
                                            <p className="mb-3">
                                                <strong className="text-red-700">遺伝的要因：</strong>下顎の過成長、上顎の劣成長、<strong className="text-yellow-700">悪習癖：</strong>舌の位置が低い、口呼吸
                                            </p>
                                        </div>

                                        <div>
                                            <h5 className="font-bold text-[#E67A2E] mb-2">
                                                治療開始の適齢期
                                            </h5>
                                            <p>
                                                <strong>3〜5歳</strong>が最適。早期に治療を開始することで、骨格的な問題を予防できます。放置すると手術が必要になる場合もあります。
                                            </p>
                                        </div>

                                        <div className="text-center mt-6">
                                            <Link href="/kidsortho/types/underbite" className="inline-flex items-center gap-2 bg-[#E67A2E] text-white px-6 py-3 rounded-full font-bold hover:bg-[#D66A28] transition shadow-md">
                                                <span>下顎前突（受け口）について詳しく見る</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. 叢生（そうせい） */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#E67A2E]">
                                        3. 叢生（そうせい）
                                    </h4>
                                    <p className="text-lg text-[#E67A2E] font-bold mb-4 font-sans">通称：ガタガタ、八重歯（やえば）</p>

                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <div>
                                            <h5 className="font-bold mb-2">特徴</h5>
                                            <p className="mb-3">
                                                歯が重なり合ったり、でこぼこに並んでいる状態です。顎のスペースが不足していることが原因です。
                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>歯磨きが難しく、虫歯や歯肉炎になりやすい</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>食べ物が挟まりやすい</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>見た目が気になる</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="font-bold mb-2 font-serif">主な原因</h5>
                                            <p className="mb-3">
                                                <strong className="text-red-700">顎の発育不足：</strong>歯が並ぶスペースが足りない、<strong className="text-yellow-700">歯のサイズ：</strong>歯が大きく顎が小さい
                                            </p>
                                        </div>

                                        <div>
                                            <h5 className="font-bold text-[#E67A2E] mb-2">
                                                治療開始の適齢期
                                            </h5>
                                            <p>
                                                <strong>6〜9歳</strong>が最適。顎を拡大してスペースを作ることで、永久歯が正しく並ぶように導きます。
                                            </p>
                                        </div>

                                        <div className="text-center mt-6">
                                            <Link href="/kidsortho/types/crowding" className="inline-flex items-center gap-2 bg-[#E67A2E] text-white px-6 py-3 rounded-full font-bold hover:bg-[#D66A28] transition shadow-md">
                                                <span>叢生（ガタガタ）について詳しく見る</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* 4. 開咬（かいこう） */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#E67A2E]">
                                        4. 開咬（かいこう）
                                    </h4>
                                    <p className="text-lg text-[#E67A2E] font-bold mb-4 font-sans">通称：オープンバイト</p>

                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <div>
                                            <h5 className="font-bold mb-2">特徴</h5>
                                            <p className="mb-3">
                                                奥歯を噛み合わせても、前歯が閉じず、上下の前歯の間に隙間ができる状態です。
                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>前歯で噛み切れない</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>発音（特にサ行、タ行）に問題が出やすい</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>口呼吸になりやすい</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="font-bold mb-2 font-serif">主な原因</h5>
                                            <p className="mb-3">
                                                <strong className="text-red-700">悪習癖：</strong>指しゃぶり、舌を出す癖、<strong className="text-yellow-700">口呼吸：</strong>常に口が開いている
                                            </p>
                                        </div>

                                        <div>
                                            <h5 className="font-bold text-[#E67A2E] mb-2">
                                                治療開始の適齢期
                                            </h5>
                                            <p>
                                                <strong>4〜6歳</strong>が最適。悪習癖の改善（MFT）と装置治療を組み合わせることで、早期に改善できます。
                                            </p>
                                        </div>

                                        <div className="text-center mt-6">
                                            <Link href="/kidsortho/types/openbite" className="inline-flex items-center gap-2 bg-[#E67A2E] text-white px-6 py-3 rounded-full font-bold hover:bg-[#D66A28] transition shadow-md">
                                                <span>開咬について詳しく見る</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* 5. 過蓋咬合（かがいこうごう） */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#E67A2E]">
                                        5. 過蓋咬合（かがいこうごう）
                                    </h4>
                                    <p className="text-lg text-[#E67A2E] font-bold mb-4 font-sans">通称：ディープバイト</p>

                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <div>
                                            <h5 className="font-bold mb-2">特徴</h5>
                                            <p className="mb-3">
                                                上の前歯が下の前歯を深く覆いすぎている状態です。正常な咬み合わせでは、上の前歯が下の前歯を2〜3mm覆いますが、過蓋咬合では下の前歯がほとんど見えません。
                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>下の前歯が上顎の歯茎を傷つけやすい</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>顎関節に負担がかかりやすい</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>笑った時に歯茎が見えやすい（ガミースマイル）</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="font-bold mb-2 font-serif">主な原因</h5>
                                            <p className="mb-3">
                                                <strong className="text-red-700">骨格的要因：</strong>上顎が下顎より大きい、<strong className="text-yellow-700">歯の萌出異常：</strong>奥歯の萌出不足
                                            </p>
                                        </div>

                                        <div>
                                            <h5 className="font-bold text-[#E67A2E] mb-2">
                                                治療開始の適齢期
                                            </h5>
                                            <p>
                                                <strong>7〜10歳</strong>が最適。成長期に奥歯の咬み合わせを改善することで、前歯の深い咬み合わせを解消します。
                                            </p>
                                        </div>

                                        <div className="text-center mt-6">
                                            <Link href="/kidsortho/types/deepbite" className="inline-flex items-center gap-2 bg-[#E67A2E] text-white px-6 py-3 rounded-full font-bold hover:bg-[#D66A28] transition shadow-md">
                                                <span>過蓋咬合について詳しく見る</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* 6. 交叉咬合（こうさこうごう） */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#E67A2E]">
                                        6. 交叉咬合（こうさこうごう）
                                    </h4>
                                    <p className="text-lg text-[#E67A2E] font-bold mb-4 font-sans">通称：クロスバイト</p>

                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <div>
                                            <h5 className="font-bold mb-2">特徴</h5>
                                            <p className="mb-3">
                                                上下の歯の咬み合わせが横にずれている状態です。片側だけの場合と、前歯部分だけの場合があります。
                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>顔が左右非対称になる可能性</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>顎がずれて顎関節症のリスク</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>咀嚼効率が低下</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="font-bold mb-2 font-serif">主な原因</h5>
                                            <p className="mb-3">
                                                <strong className="text-red-700">上顎の幅が狭い：</strong>顎の成長不足、<strong className="text-yellow-700">悪習癖：</strong>片側だけで噛む癖
                                            </p>
                                        </div>

                                        <div>
                                            <h5 className="font-bold text-[#E67A2E] mb-2">
                                                治療開始の適齢期
                                            </h5>
                                            <p>
                                                <strong>5〜8歳</strong>が最適。早期に上顎を拡大することで、骨格の非対称を予防できます。
                                            </p>
                                        </div>

                                        <div className="text-center mt-6">
                                            <Link href="/kidsortho/types/crossbite" className="inline-flex items-center gap-2 bg-[#E67A2E] text-white px-6 py-3 rounded-full font-bold hover:bg-[#D66A28] transition shadow-md">
                                                <span>交叉咬合について詳しく見る</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* 7. 空隙歯列（くうげきしれつ） */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#E67A2E]">
                                        7. 空隙歯列（くうげきしれつ）
                                    </h4>
                                    <p className="text-lg text-[#E67A2E] font-bold mb-4 font-sans">通称：すきっ歯</p>

                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <div>
                                            <h5 className="font-bold mb-2">特徴</h5>
                                            <p className="mb-3">
                                                歯と歯の間に隙間がある状態です。特に上の前歯の間に隙間がある場合を「正中離開（せいちゅうりかい）」と呼びます。
                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>発音（特にサ行）に影響が出やすい</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>見た目が気になる</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>食べ物が挟まりやすい</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="font-bold mb-2 font-serif">主な原因</h5>
                                            <p className="mb-3">
                                                <strong className="text-blue-700">顎が大きい：</strong>歯のサイズに対して顎が大きい、<strong className="text-yellow-700">悪習癖：</strong>舌で前歯を押す癖
                                            </p>
                                        </div>

                                        <div>
                                            <h5 className="font-bold text-[#E67A2E] mb-2">
                                                治療開始の適齢期
                                            </h5>
                                            <p>
                                                <strong>8〜10歳</strong>が最適。乳歯の場合は自然に閉じることもありますが、永久歯の場合は矯正治療が必要です。舌の悪習癖がある場合はMFTも併用します。
                                            </p>
                                        </div>

                                        <div className="text-center mt-6">
                                            <Link href="/kidsortho/types/spacing" className="inline-flex items-center gap-2 bg-[#E67A2E] text-white px-6 py-3 rounded-full font-bold hover:bg-[#D66A28] transition shadow-md">
                                                <span>空隙歯列（すきっ歯）について詳しく見る</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 複数タイプの併発 */}
                        <div className="mb-16">
                            <div className="text-center mb-12">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">複数のタイプが併発することも</h3>
                                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
                            </div>

                            <div className="space-y-4 text-[#5A4D41] leading-loose max-w-3xl mx-auto font-sans">
                                <p>
                                    多くのお子さまは、複数の不正咬合が組み合わさっています。例えば、「出っ歯」と「叢生」が同時にある、「受け口」と「交叉咬合」が併発している、といったケースです。
                                </p>
                                <ul className="space-y-3 ml-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                        <span><strong>上顎前突 + 叢生：</strong>出っ歯で歯並びもガタガタ</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                        <span><strong>下顎前突 + 交叉咬合：</strong>受け口で横にもずれている</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-[#E67A2E] mr-3 flex-shrink-0 mt-0.5" />
                                        <span><strong>開咬 + 叢生：</strong>前歯が閉じず、歯並びもでこぼこ</span>
                                    </li>
                                </ul>
                                <p className="font-bold bg-white p-6 rounded-2xl shadow-sm border border-[#E67A2E]/10">
                                    <span className="text-[#E67A2E]">重要：</span>複数の不正咬合が組み合わさっている場合、治療の優先順位や方法が変わります。精密検査を行い、お子さま一人ひとりに最適な治療計画を立てることが重要です。
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* FAQ Section */}
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
                                            <h3 className="font-bold text-[#5A4D41] text-lg font-serif">どのタイプの不正咬合が最も治療が必要ですか？</h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-relaxed font-sans">
                                        <p className="mb-3">
                                            <strong className="text-[#E67A2E]">A.</strong> すべての不正咬合が治療対象ですが、特に早期治療が重要なのは以下の3つです。
                                        </p>
                                        <ul className="space-y-2 mb-3 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#E67A2E] mt-1">•</span>
                                                <span><strong>下顎前突（受け口）：</strong>3〜5歳で治療開始が理想。放置すると骨格的な問題が悪化し、手術が必要になる場合も</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#E67A2E] mt-1">•</span>
                                                <span><strong>開咬：</strong>4〜6歳での悪習癖の改善が重要。放置すると顎の骨が変形します</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#E67A2E] mt-1">•</span>
                                                <span><strong>交叉咬合：</strong>5〜8歳で治療開始。顔の非対称を予防できます</span>
                                            </li>
                                        </ul>
                                        <p className="text-sm bg-red-50 p-4 rounded-lg">
                                            <strong>重要：</strong>これらは骨格的な問題に発展しやすいため、早期発見・早期治療が非常に重要です。
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                                            <h3 className="font-bold text-[#5A4D41] text-lg font-serif">複数のタイプが混在している場合、どうすればいいですか？</h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-relaxed font-sans">
                                        <p className="mb-3">
                                            <strong className="text-[#E67A2E]">A.</strong> 複数の不正咬合が併発している場合、優先順位をつけて治療を進めます。
                                        </p>
                                        <ul className="space-y-2 mb-3 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#E67A2E] mt-1">✓</span>
                                                <span><strong>まず骨格的な問題から：</strong>受け口や交叉咬合など、骨格に影響する問題を優先</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#E67A2E] mt-1">✓</span>
                                                <span><strong>次に歯の問題：</strong>叢生や上顎前突などの歯列の問題を治療</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#E67A2E] mt-1">✓</span>
                                                <span><strong>悪習癖の改善も同時進行：</strong>MFTで根本原因を解決</span>
                                            </li>
                                        </ul>
                                        <p className="text-sm bg-[#FFF9F0] p-4 rounded-lg">
                                            精密検査を行い、お子さまの状態に合わせた最適な治療計画を立てます。一度にすべてを治療するのではなく、成長に合わせて段階的に治療を進めます。
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                                            <h3 className="font-bold text-[#5A4D41] text-lg font-serif">自宅でチェックできる方法はありますか？</h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-relaxed font-sans">
                                        <p className="mb-3">
                                            <strong className="text-[#E67A2E]">A.</strong> 以下のセルフチェックリストで、お子さまの歯並びを確認してみましょう。
                                        </p>
                                        <div className="bg-blue-50 p-6 rounded-xl mb-3">
                                            <h4 className="font-bold text-blue-700 mb-3 font-serif">セルフチェックリスト</h4>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600 mt-1">□</span>
                                                    <span className="text-[#5A4D41]">口を閉じた時、下の前歯が上の前歯より前に出ている</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600 mt-1">□</span>
                                                    <span className="text-[#5A4D41]">奥歯を噛み合わせても、前歯が閉じない</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600 mt-1">□</span>
                                                    <span className="text-[#5A4D41]">上の前歯が大きく前に出ている</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600 mt-1">□</span>
                                                    <span className="text-[#5A4D41]">歯が重なり合っている、ガタガタしている</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600 mt-1">□</span>
                                                    <span className="text-[#5A4D41]">歯と歯の間に隙間が多い</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600 mt-1">□</span>
                                                    <span className="text-[#5A4D41]">噛み合わせが横にずれている</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-600 mt-1">□</span>
                                                    <span className="text-[#5A4D41]">常に口が開いている、口呼吸をしている</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="text-sm bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                                            <strong className="text-yellow-700">注意：</strong>1つでもチェックがついた場合は、早めに歯科医院での診察をお勧めします。
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                                            <h3 className="font-bold text-[#5A4D41] text-lg font-serif">不正咬合は遺伝しますか？</h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-relaxed font-sans">
                                        <p className="mb-3">
                                            <strong className="text-[#E67A2E]">A.</strong> 不正咬合には遺伝的要因と環境的要因の両方が関係しています。
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4 mb-3">
                                            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                                <p className="font-bold text-red-700 mb-2 font-serif">遺伝的要因（約30〜40%）</p>
                                                <ul className="text-sm text-[#5A4D41] space-y-1">
                                                    <li>• 顎の骨格のサイズや形</li>
                                                    <li>• 歯の大きさ</li>
                                                    <li>• 歯の本数（先天欠如など）</li>
                                                </ul>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                                <p className="font-bold text-blue-700 mb-2 font-serif">環境的要因（約60〜70%）</p>
                                                <ul className="text-sm text-[#5A4D41] space-y-1">
                                                    <li>• 指しゃぶり、舌癖などの悪習癖</li>
                                                    <li>• 口呼吸</li>
                                                    <li>• 食生活（硬いものを噛まない）</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="text-sm bg-[#FFF9F0] p-4 rounded-lg">
                                            遺伝的要因がある場合でも、早期に治療を開始すれば、成長をコントロールして問題を最小限に抑えることができます。また、環境的要因は改善可能です。
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                                            <h3 className="font-bold text-[#5A4D41] text-lg font-serif">いつ歯科医院を受診すべきですか？</h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-relaxed font-sans">
                                        <p className="mb-3">
                                            <strong className="text-[#E67A2E]">A.</strong> 日本矯正歯科学会では、<strong>「7歳までに一度、矯正歯科医の診察を受けること」</strong>を推奨しています。
                                        </p>
                                        <ul className="space-y-2 mb-3 ml-4">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-[#E67A2E] flex-shrink-0 mt-0.5" />
                                                <span><strong>3〜5歳：</strong>受け口、開咬などが見つかった場合はすぐに受診</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-[#E67A2E] flex-shrink-0 mt-0.5" />
                                                <span><strong>6〜7歳：</strong>前歯が生え変わる時期に一度チェック</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-[#E67A2E] flex-shrink-0 mt-0.5" />
                                                <span><strong>何か気になることがあればすぐに：</strong>「様子を見ましょう」と言われても、セカンドオピニオンを受けることも大切</span>
                                            </li>
                                        </ul>
                                        <p className="text-sm bg-green-50 p-4 rounded-lg border border-green-200">
                                            <strong className="text-green-700">当院では：</strong>初回相談は無料です。お子さまの歯並びが気になる場合は、お気軽にご相談ください。
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
                                <Link href="/kidsortho/timing" className="group bg-white p-6 rounded-2xl border-2 border-[#E67A2E]/20 hover:border-[#E67A2E]/40 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">いつから始めるべきか</h3>
                                    <p className="text-[#8D8070] mb-4 font-sans">
                                        こども矯正を始める最適なタイミング
                                    </p>
                                    <div className="flex items-center text-[#E67A2E] font-semibold group-hover:translate-x-2 transition-transform font-sans">
                                        詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                                    </div>
                                </Link>

                                <Link href="/kidsortho/duration" className="group bg-white p-6 rounded-2xl border-2 border-[#E67A2E]/20 hover:border-[#E67A2E]/40 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">治療期間</h3>
                                    <p className="text-[#8D8070] mb-4 font-sans">
                                        こども矯正にかかる期間と治療の流れ
                                    </p>
                                    <div className="flex items-center text-[#E67A2E] font-semibold group-hover:translate-x-2 transition-transform font-sans">
                                        詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                                    </div>
                                </Link>

                                <Link href="/kidsortho/appliances" className="group bg-white p-6 rounded-2xl border-2 border-[#E67A2E]/20 hover:border-[#E67A2E]/40 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">使用する装置</h3>
                                    <p className="text-[#8D8070] mb-4 font-sans">
                                        こども矯正で使用する様々な装置
                                    </p>
                                    <div className="flex items-center text-[#E67A2E] font-semibold group-hover:translate-x-2 transition-transform font-sans">
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
                                お子さまの歯並びが気になったら
                            </h2>
                            <p className="text-xl mb-8 text-white/90 font-sans">
                                豊洲の歯医者として、まずは無料相談でお子さまの不正咬合のタイプと最適な治療時期を確認いたします
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
