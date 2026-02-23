import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { Wrench, ArrowRight, CheckCircle, AlertCircle, Clock, Heart, Shield, TrendingUp, Users, Home, ChevronRight } from 'lucide-react';
import { KidsOrthoImage } from '@/components/KidsOrthoImage';
import { PageImage } from '@/components/PageImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '小児矯正の装置一覧｜種類と特徴を比較｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲のF歯科が小児矯正で使用する装置を一覧でご紹介。プレオルソ・拡大床・ワイヤー矯正など、各装置の特徴・対象年齢・治療期間を比較。お子様に最適な装置をご提案します。',
  keywords: '小児矯正 装置,子供 矯正 種類,プレオルソ,拡大床,小児矯正 装置 比較,豊洲 小児矯正',
  openGraph: {
    title: '小児矯正の装置一覧｜種類と特徴を比較｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '小児矯正で使用する装置を一覧でご紹介。各装置の特徴・対象年齢・治療期間を比較。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/kidsortho/appliances',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function KidsOrthoAppliancesPage() {
    const appliances = [
        {
            id: "preortho",
            name: "機能的マウスピース装置（プレオルソ）",
            category: "筋機能+歯列",
            age: "3〜10歳",
            duration: "1〜2年",
            removable: true,
            color: "from-[#8E7CC3] to-[#7E6CB3]",
            borderColor: "border-[#8E7CC3]",
            imageId: "preortho",
            shortDesc: "マウスピース型の筋機能訓練装置",
            features: [
                "柔らかいシリコン製で違和感が少ない",
                "口呼吸から鼻呼吸への改善",
                "舌の位置を正しく誘導",
                "歯並びの改善と筋機能訓練を同時に"
            ],
            suitable: [
                "口呼吸・舌癖がある",
                "軽度〜中等度の歯並びの乱れ",
                "早期から予防的に治療したい",
                "痛みの少ない治療を希望"
            ],
            link: "/kidsortho/appliances/functional-mouthpiece",
            usedInClinic: true
        },
        {
            id: "expander",
            name: "拡大床（かくだいしょう）",
            category: "顎の拡大",
            age: "3〜9歳",
            duration: "6〜12ヶ月",
            removable: true,
            color: "from-[#C5A572] to-[#B39562]",
            borderColor: "border-[#C5A572]",
            imageId: "expander",
            shortDesc: "顎を広げて永久歯のスペースを確保する装置",
            features: [
                "上顎・下顎の骨を横に広げる",
                "永久歯が生えるスペースを作る",
                "取り外し可能で食事・歯磨き時は外せる",
                "就寝時と日中数時間の装着"
            ],
            suitable: [
                "歯が並ぶスペースが不足している",
                "顎が狭く、歯が重なっている（叢生）",
                "交叉咬合（奥歯の咬み合わせが逆）",
                "口呼吸を改善したい"
            ],
            link: "/kidsortho/appliances/expander",
            usedInClinic: true
        },
        {
            id: "functional",
            name: "機能的矯正装置（バイオネーターなど）",
            category: "顎の位置",
            age: "6〜10歳",
            duration: "1〜1.5年",
            removable: true,
            color: "from-[#395b45] to-[#2d4835]",
            borderColor: "border-[#395b45]",
            imageId: "functional",
            shortDesc: "上下の顎のバランスを整える装置（バイオネーター、FKOなど）",
            features: [
                "下顎の成長を促進（受け口の改善）",
                "上顎の過成長を抑制（出っ歯の改善）",
                "主に就寝時に装着",
                "筋肉の力を利用した自然な治療"
            ],
            suitable: [
                "受け口（下顎が前に出ている）",
                "出っ歯（上顎が大きく前に出ている）",
                "上下の顎の大きさのバランスが悪い",
                "骨格的な問題を早期に改善したい"
            ],
            link: "/kidsortho/appliances/functional",
            usedInClinic: true
        },
        {
            id: "mft-trainer",
            name: "MFT（口腔筋機能療法）トレーナー",
            category: "筋機能",
            age: "3〜12歳",
            duration: "1〜2年",
            removable: true,
            color: "from-[#9B89B3] to-[#8B79A3]",
            borderColor: "border-[#9B89B3]",
            imageId: "mft-trainer",
            shortDesc: "舌・唇・頬の筋肉を正しく使えるようにする装置",
            features: [
                "口呼吸を鼻呼吸に改善",
                "舌の正しい位置を覚える",
                "唇・頬の筋肉バランスを整える",
                "就寝時と日中1〜2時間の装着"
            ],
            suitable: [
                "口呼吸が習慣化している",
                "舌癖（舌で歯を押す癖）がある",
                "指しゃぶりが続いている",
                "発音が不明瞭（さ行・た行など）"
            ],
            link: "/kidsortho/appliances/mft-trainer",
            usedInClinic: false
        },
        {
            id: "headgear",
            name: "ヘッドギア（上顎前方牽引装置）",
            category: "顎の成長抑制",
            age: "7〜12歳",
            duration: "1〜2年",
            removable: true,
            color: "from-[#E89B4D] to-[#D88B3D]",
            borderColor: "border-[#E89B4D]",
            imageId: "headgear",
            shortDesc: "上顎の過成長を抑制し、出っ歯を改善する装置",
            features: [
                "上顎の前方への成長を抑制",
                "奥歯を後方に移動",
                "主に就寝時に装着（10〜12時間）",
                "出っ歯の根本的な改善が可能"
            ],
            suitable: [
                "上顎前突（出っ歯）",
                "上顎が大きく成長しすぎている",
                "抜歯せずに治療したい",
                "骨格的な問題を早期に解決したい"
            ],
            link: "/kidsortho/appliances/headgear",
            usedInClinic: false
        },
        {
            id: "chin-cap",
            name: "チンキャップ",
            category: "顎の成長抑制",
            age: "3〜10歳",
            duration: "1〜3年",
            removable: true,
            color: "from-[#6B9BD1] to-[#5B8BC1]",
            borderColor: "border-[#6B9BD1]",
            imageId: "chin-cap",
            shortDesc: "下顎の過成長を抑制し、受け口を改善する装置",
            features: [
                "下顎の前方への成長を抑制",
                "オトガイ部（顎先）を後方に誘導",
                "主に就寝時に装着（10〜12時間）",
                "受け口の根本的な改善が可能"
            ],
            suitable: [
                "受け口（下顎前突）",
                "下顎が大きく成長しすぎている",
                "骨格性の受け口",
                "早期治療で外科手術を回避したい"
            ],
            link: "/kidsortho/appliances/chin-cap",
            usedInClinic: true
        },
        {
            id: "quad-helix",
            name: "クワドヘリックス",
            category: "顎の拡大",
            age: "6〜10歳",
            duration: "6〜9ヶ月",
            removable: false,
            color: "from-[#4A7C59] to-[#3A6C49]",
            borderColor: "border-[#4A7C59]",
            imageId: "quad-helix",
            shortDesc: "固定式の顎拡大装置（上顎専用）",
            features: [
                "上顎を効率的に横に広げる",
                "24時間装着のため効果が高い",
                "取り外しの手間がない",
                "交叉咬合の改善に最適"
            ],
            suitable: [
                "交叉咬合（奥歯の咬み合わせが逆）",
                "上顎が狭く、永久歯のスペース不足",
                "取り外し式装置の装着が困難",
                "確実な治療効果を求める"
            ],
            link: "/kidsortho/appliances/quad-helix",
            usedInClinic: false
        },
        {
            id: "lingual-arch",
            name: "リンガルアーチ",
            category: "スペース保持",
            age: "6〜12歳",
            duration: "1〜2年",
            removable: false,
            color: "from-[#6B7AA1] to-[#5B6A91]",
            borderColor: "border-[#6B7AA1]",
            imageId: "lingual-arch",
            shortDesc: "永久歯のスペースを確保する固定式装置",
            features: [
                "乳歯抜歯後のスペースを保持",
                "前歯を正しい位置に誘導",
                "24時間装着で確実な効果",
                "取り外しの手間がない"
            ],
            suitable: [
                "乳歯が早期に抜けた",
                "永久歯のスペースが塞がってきている",
                "前歯が内側に倒れている",
                "確実にスペースを維持したい"
            ],
            link: "/kidsortho/appliances/lingual-arch",
            usedInClinic: false
        },
        {
            id: "rapid-expander",
            name: "急速拡大装置",
            category: "顎の拡大",
            age: "7〜14歳",
            duration: "3〜6ヶ月",
            removable: false,
            color: "from-[#C85A54] to-[#B84A44]",
            borderColor: "border-[#C85A54]",
            imageId: "rapid-expander",
            shortDesc: "短期間で上顎を効率的に拡大する固定式装置",
            features: [
                "数週間〜数ヶ月で顎を拡大",
                "正中口蓋縫合を拡大",
                "24時間装着で確実な効果",
                "交叉咬合の早期改善"
            ],
            suitable: [
                "重度の上顎劣成長",
                "交叉咬合（奥歯の咬み合わせが逆）",
                "短期間で効果を出したい",
                "成長期の早い段階（7〜12歳）"
            ],
            link: "/kidsortho/appliances/rapid-expander",
            usedInClinic: false
        },
        {
            id: "wire-braces",
            name: "ワイヤー矯正",
            category: "歯列矯正",
            age: "12歳〜",
            duration: "1.5〜3年",
            removable: false,
            color: "from-[#5A7C9B] to-[#4A6C8B]",
            borderColor: "border-[#5A7C9B]",
            imageId: "wire-braces",
            shortDesc: "2期治療で使用する本格的な歯列矯正",
            features: [
                "あらゆる不正咬合に対応可能",
                "細かい歯の移動が可能",
                "24時間装着で確実な効果",
                "治療実績が豊富"
            ],
            suitable: [
                "永久歯が生え揃った後（2期治療）",
                "1期治療後の仕上げ",
                "複雑な歯並びの問題",
                "確実に歯を動かしたい"
            ],
            link: "/kidsortho/appliances/wire-braces",
            usedInClinic: true
        },
        {
            id: "clear-aligner",
            name: "マウスピース矯正",
            category: "歯列矯正",
            age: "12歳〜",
            duration: "1〜2.5年",
            removable: true,
            color: "from-[#7B9FAB] to-[#6B8F9B]",
            borderColor: "border-[#7B9FAB]",
            imageId: "clear-aligner",
            shortDesc: "透明で目立たないマウスピース型矯正装置",
            features: [
                "透明で目立たない",
                "取り外し可能で衛生的",
                "食事・歯磨き時は外せる",
                "痛みが少ない"
            ],
            suitable: [
                "見た目を気にする方",
                "軽度〜中等度の歯並びの乱れ",
                "スポーツや楽器をしている",
                "衛生管理を自分でできる"
            ],
            link: "/kidsortho/appliances/clear-aligner",
            usedInClinic: true
        }
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-[#FDFBF7]" style={{ fontFamily: '"游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", sans-serif' }}>
                {/* Breadcrumb */}
                <div className="bg-[#FDFBF7] border-b">
                    <div className="container mx-auto px-4 py-3">
                        <div className="flex items-center text-sm text-gray-600 font-sans">
                            <Link href="/" className="hover:text-[#C5A572] flex items-center">
                                <Home className="w-4 h-4 mr-1" />
                                ホーム
                            </Link>
                            <ChevronRight className="w-4 h-4 mx-2" />
                            <Link href="/kidsortho" className="hover:text-[#C5A572]">
                                こども矯正
                            </Link>
                            <ChevronRight className="w-4 h-4 mx-2" />
                            <span className="text-[#C5A572]">使用する装置</span>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="py-6 md:py-6 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#5A4D41]">
                                こども矯正で使用する装置
                            </h1>
                            <PageImage path="/kidsortho/appliances" alt="こども矯正で使用する装置" />
                            <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
                            <p className="text-xl md:text-2xl mb-4 text-[#5A4D41] font-sans font-medium">
                                お子さまに最適な矯正装置をご提案
                            </p>
                            <p className="text-sm text-[#8D8070] mb-4">豊洲の矯正歯科が各装置の特徴を詳しく解説</p>
                            <p className="text-lg text-[#8D8070] font-sans leading-relaxed">
                                1期治療（小児矯正）では、顎の成長を利用した様々な装置を使用します。<br className="hidden md:block" />
                                お子さまの年齢・症状・生活スタイルに合わせて、最も効果的な装置を選択します。
                            </p>
                        </div>
                    </div>
                            <KidsOrthoImage
                                name="appliances-hero"
                                alt="小児矯正の装置の種類"
                                category="guide"
                            />
                </section>

                {/* 装置選択の3つのポイント */}
                <section className="py-6 md:py-6 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41]">装置選択の3つのポイント</h2>
                            <KidsOrthoImage
                                name="appliances-content"
                                alt="装置の選び方と使用方法"
                                category="guide"
                            />
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4 mb-6"></div>
                                <p className="text-lg text-[#8D8070] font-sans">
                                    お子さまに最適な装置を選ぶために考慮すること
                                </p>
                            </div>

                            <div className="space-y-4 text-[#5A4D41] leading-loose max-w-3xl mx-auto">
                                <div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        1. 症状・年齢
                                    </h3>
                                    <p className="font-sans leading-relaxed">
                                        受け口、出っ歯、叢生など、お子さまの不正咬合の種類と年齢に応じて、最も効果的な装置が異なります
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        2. 協力性
                                    </h3>
                                    <p className="font-sans leading-relaxed">
                                        取り外し式装置は装着時間を守る必要があり、固定式は24時間効果を発揮します。お子さまの性格に合わせて選択
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        3. 生活スタイル
                                    </h3>
                                    <p className="font-sans leading-relaxed">
                                        スポーツをしている、楽器を演奏するなど、お子さまの生活習慣に合わせた装置を提案します
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* こども矯正で使われる主な装置 */}
                <section className="py-6 md:py-6 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41]">こども矯正で使われる主な装置</h2>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4 mb-6"></div>

                                <div className="mb-8">
                                    <KidsOrthoImage
                                        name="appliances-types"
                                        alt="小児矯正で使用される主な装置の種類"
                                        category="guide"
                                        className="max-w-3xl mx-auto"
                                    />
                                </div>

                                <p className="text-lg text-[#8D8070] font-sans">
                                    小児矯正（1期治療）では様々な装置を使用します。症状・年齢に応じて最適な装置を選択します
                                </p>
                            </div>

                            <div className="space-y-12">
                                {appliances.map((appliance, index) => (
                                    <div key={appliance.id}>
                                        <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                            {index + 1}. {appliance.name}
                                        </h4>

                                        {appliance.usedInClinic && (
                                            <div className="inline-flex items-center gap-2 bg-[#C5A572] text-white px-4 py-2 rounded-full text-sm font-sans font-bold mb-4">
                                                <CheckCircle className="w-4 h-4" />
                                                当院で使用
                                            </div>
                                        )}

                                        <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                            <div>
                                                <p className="mb-3 font-medium">
                                                    {appliance.shortDesc}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-700">
                                                        カテゴリ: {appliance.category}
                                                    </span>
                                                    <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-700">
                                                        対象年齢: {appliance.age}
                                                    </span>
                                                    <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-700">
                                                        期間: {appliance.duration}
                                                    </span>
                                                    <span className={`${appliance.removable ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'} px-3 py-1 rounded-full text-xs font-bold`}>
                                                        {appliance.removable ? '取り外し可能' : '固定式'}
                                                    </span>
                                                </div>
                                            </div>

                                            <div>
                                                <h5 className="font-bold mb-2">装置の特徴</h5>
                                                <ul className="space-y-2 ml-4">
                                                    {appliance.features.map((feature, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h5 className="font-bold mb-2">こんな症状におすすめ</h5>
                                                <ul className="space-y-2 ml-4">
                                                    {appliance.suitable.map((item, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="text-center mt-6">
                                                <Link
                                                    href={appliance.link}
                                                    className="inline-flex items-center gap-2 bg-[#C5A572] text-white px-6 py-3 rounded-full font-bold hover:bg-[#B39562] transition shadow-md"
                                                >
                                                    <span>{appliance.name}について詳しく見る</span>
                                                    <ArrowRight className="w-5 h-5" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 当院で使用する矯正装置 */}
                <section className="py-6 md:py-6 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41]">当院で使用する矯正装置</h2>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4 mb-6"></div>
                                <p className="text-lg text-[#8D8070] font-sans leading-relaxed">
                                    F歯科・矯正歯科 豊洲プライムスクエア院では、お子さまの症状・年齢・生活スタイルに合わせて、<br className="hidden md:block" />
                                    以下の装置から最適なものを選択し、オーダーメイドの治療を行っています
                                </p>
                            </div>

                            <div className="space-y-4 text-[#5A4D41] leading-loose max-w-3xl mx-auto mb-12">
                                {appliances.filter(a => a.usedInClinic).map((appliance, index) => (
                                    <div key={appliance.id} className="border-l-4 border-[#C5A572] pl-4">
                                        <h3 className="text-xl font-serif font-bold text-[#5A4D41] mb-2">{appliance.name}</h3>
                                        <p className="font-sans mb-2">
                                            {appliance.shortDesc}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-700">
                                                {appliance.category}
                                            </span>
                                            <span className={`${appliance.removable ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'} px-3 py-1 rounded-full text-xs font-bold`}>
                                                {appliance.removable ? '取り外し可能' : '固定式'}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mb-8">
                                <p className="font-bold bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10 text-[#5A4D41]">
                                    当院では、初診時の詳しい検査・診断に基づき、お子さま一人ひとりに最適な装置を選択します。複数の装置を組み合わせて使用することもあります。まずは無料相談でお気軽にご相談ください。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 装置の選び方 */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41]">症状別：おすすめの装置</h2>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4 mb-6"></div>
                                <p className="text-lg text-[#8D8070] font-sans">
                                    お子さまの不正咬合の種類に応じた装置の選び方
                                </p>
                            </div>

                            <div className="space-y-8 max-w-3xl mx-auto">
                                <div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        1. 受け口（反対咬合）
                                    </h3>
                                    <p className="text-sm text-[#8D8070] mb-3">下の歯が上の歯より前に出ている</p>
                                    <div>
                                        <p className="font-bold text-[#C5A572] mb-2">推奨装置：</p>
                                        <ul className="space-y-2 text-[#5A4D41]">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                <span><strong>機能的矯正装置</strong>（下顎の成長を後方に誘導）</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                <span><strong>上顎拡大装置</strong>（上顎を広げて前方に誘導）</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        2. 出っ歯（上顎前突）
                                    </h3>
                                    <p className="text-sm text-[#8D8070] mb-3">上の前歯が大きく前に出ている</p>
                                    <div>
                                        <p className="font-bold text-[#C5A572] mb-2">推奨装置：</p>
                                        <ul className="space-y-2 text-[#5A4D41]">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                <span><strong>ヘッドギア</strong>（上顎の成長を抑制）</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                <span><strong>機能的矯正装置</strong>（下顎の成長を促進）</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        3. 叢生（乱ぐい歯）
                                    </h3>
                                    <p className="text-sm text-[#8D8070] mb-3">歯が重なって生えている</p>
                                    <div>
                                        <p className="font-bold text-[#C5A572] mb-2">推奨装置：</p>
                                        <ul className="space-y-2 text-[#5A4D41]">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                <span><strong>拡大床</strong>（顎を広げてスペース確保）</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                <span><strong>クワドヘリックス</strong>（固定式で確実な拡大）</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        4. 交叉咬合
                                    </h3>
                                    <p className="text-sm text-[#8D8070] mb-3">奥歯の咬み合わせが逆になっている</p>
                                    <div>
                                        <p className="font-bold text-[#C5A572] mb-2">推奨装置：</p>
                                        <ul className="space-y-2 text-[#5A4D41]">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                <span><strong>クワドヘリックス</strong>（上顎の拡大に最適）</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                <span><strong>拡大床</strong>（軽度の場合）</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        5. 口呼吸・舌癖
                                    </h3>
                                    <p className="text-sm text-[#8D8070] mb-3">口が開いている、舌で歯を押す癖がある</p>
                                    <div>
                                        <p className="font-bold text-[#C5A572] mb-2">推奨装置：</p>
                                        <ul className="space-y-2 text-[#5A4D41]">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                <span><strong>MFTトレーナー</strong>（筋機能の改善）</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                <span><strong>拡大床</strong>（顎の拡大と併用）</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        6. 開咬
                                    </h3>
                                    <p className="text-sm text-[#8D8070] mb-3">前歯が閉じない、隙間がある</p>
                                    <div>
                                        <p className="font-bold text-[#C5A572] mb-2">推奨装置：</p>
                                        <ul className="space-y-2 text-[#5A4D41]">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                <span><strong>MFTトレーナー</strong>（舌癖・口呼吸の改善）</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                <span><strong>機能的矯正装置</strong>（顎の位置改善）</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 取り外し式 vs 固定式 */}
                <section className="py-6 md:py-6 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41]">取り外し式 vs 固定式：どちらを選ぶ？</h2>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4 mb-6"></div>
                                <p className="text-lg text-[#8D8070] font-sans">
                                    それぞれのメリット・デメリットを理解して最適な装置を選択
                                </p>
                            </div>

                            <div className="space-y-8 max-w-3xl mx-auto">
                                {/* 取り外し式 */}
                                <div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        取り外し式装置
                                    </h3>

                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <div>
                                            <h4 className="font-bold mb-2">メリット</h4>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>食事・歯磨き時に外せるので衛生的</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>むし歯リスクが低い</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>痛みや違和感が少ない</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>スポーツや楽器演奏時は外せる</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-bold mb-2">デメリット</h4>
                                            <p>
                                                装着時間を守らないと効果が出ない、紛失・破損のリスクがある、お子さまの協力性が必須
                                            </p>
                                        </div>

                                        <p className="font-bold bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                                            <span className="text-[#C5A572]">こんなお子さまに：</span>
                                            約束を守れる、衛生管理を自分でできる、スポーツや楽器をしている
                                        </p>
                                    </div>
                                </div>

                                {/* 固定式 */}
                                <div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        固定式装置
                                    </h3>

                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <div>
                                            <h4 className="font-bold mb-2">メリット</h4>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>24時間装着で確実な治療効果</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>取り外しの手間がない</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>紛失の心配がない</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                                                    <span>治療期間が短くなる傾向</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-bold mb-2">デメリット</h4>
                                            <p>
                                                歯磨きが難しく、むし歯リスクがやや高い、食事の制限がある（硬いもの、粘着性のもの）、装着直後は違和感が強い
                                            </p>
                                        </div>

                                        <p className="font-bold bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                                            <span className="text-[#C5A572]">こんなお子さまに：</span>
                                            取り外し式の装着時間を守れない、確実に効果を出したい、治療期間を短くしたい
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 関連ページ */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41]">関連ページ</h2>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <Link href="/kidsortho/types" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-serif font-bold text-[#5A4D41] mb-4">不正咬合の種類</h3>
                                    <p className="text-[#8D8070] font-sans mb-4">
                                        7つのタイプとその特徴を詳しく解説
                                    </p>
                                    <div className="flex items-center text-[#C5A572] font-sans font-semibold group-hover:translate-x-2 transition-transform">
                                        詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                                    </div>
                                </Link>

                                <Link href="/kidsortho/timing" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-serif font-bold text-[#5A4D41] mb-4">いつから始めるべきか</h3>
                                    <p className="text-[#8D8070] font-sans mb-4">
                                        こども矯正を始める最適なタイミング
                                    </p>
                                    <div className="flex items-center text-[#C5A572] font-sans font-semibold group-hover:translate-x-2 transition-transform">
                                        詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                                    </div>
                                </Link>

                                <Link href="/kidsortho/cost" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-serif font-bold text-[#5A4D41] mb-4">費用について</h3>
                                    <p className="text-[#8D8070] font-sans mb-4">
                                        こども矯正にかかる費用と支払い方法
                                    </p>
                                    <div className="flex items-center text-[#C5A572] font-sans font-semibold group-hover:translate-x-2 transition-transform">
                                        詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-2 bg-gradient-to-r from-[#C5A572] to-[#B39562] text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                                お子さまに最適な装置を専門医がご提案
                            </h2>
                            <p className="text-xl mb-8 font-sans text-white/90">
                                豊洲の歯医者として、症状・年齢・生活スタイルに合わせて最も効果的な装置をオーダーメイドでご提案します
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-white text-[#C5A572] px-8 py-4 rounded-full font-sans font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
                                >
                                    無料相談を予約する
                                    <ArrowRight className="w-6 h-6 ml-2" />
                                </Link>
                                <Link
                                    href="tel:0312345678"
                                    className="inline-flex items-center justify-center bg-white/20 text-white px-8 py-4 rounded-full font-sans font-bold text-lg hover:bg-white/30 transition-colors border-2 border-white"
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
