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
    title: 'プレオルソ・マイオブレース・T4K・EFラインの比較｜どれがいい？費用と効果の違い｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '機能的マウスピース装置（プレオルソ・マイオブレース・T4K・EFライン）の違いを徹底比較。どれを選べばいい？費用・効果・適応症例の違いをわかりやすく解説します。',
    keywords: 'プレオルソ,マイオブレース,T4K,EFライン,機能的マウスピース,こども矯正,小児矯正,費用,比較,選び方',
    openGraph: {
        title: 'プレオルソ・マイオブレース・T4K・EFラインの比較｜どれがいい？費用と効果の違い｜F歯科・矯正歯科 豊洲プライムスクエア院',
        description: '機能的マウスピース装置（プレオルソ・マイオブレース・T4K・EFライン）の違いを徹底比較。費用・効果・適応症例の違いをわかりやすく解説します。',
        type: 'website',
        locale: 'ja_JP',
        url: 'https://fuku-dental.jp/kidsortho/appliances/functional-mouthpiece',
        siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
    },
};

export default function FunctionalMouthpiecePage() {
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
                                <span className="text-[#C5A572] font-bold">機能的マウスピース装置</span>
                            </div>

                            <div className="mb-6">
                                <p className="text-[#C5A572] font-bold text-sm mb-2">機能的マウスピース装置</p>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#5A4D41] mb-3">
                                    プレオルソ・マイオブレース・T4K・EFラインの比較｜どれがいい？費用と効果の違い
                                </h1>
                                <PageImage path="/kidsortho/appliances/functional-mouthpiece" alt="機能的マウスピース装置の比較" />
                                <div className="w-16 h-0.5 bg-[#C5A572] mb-6"></div>
                            </div>

                            {/* ヒーロー画像 */}
                            <KidsOrthoImage
                                name="functional-mouthpiece-hero"
                                alt="機能的マウスピース装置の外観"
                                category="appliances"
                            />

                            <p className="text-sm text-[#8D8070] mt-3">豊洲の矯正歯科が各装置の違いを徹底比較</p>
                            <p className="text-base md:text-lg leading-loose text-[#8D8070] font-sans mt-4 mb-8">
                                プレオルソ・T4K・マイオブレースなど、柔らかいシリコン製のマウスピースで口呼吸・舌癖を改善しながら歯並びを整える治療法です
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-2 pb-16">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* 機能的マウスピース装置とは */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">機能的マウスピース装置とは</h2>
                            <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

                            <p className="text-lg text-[#5A4D41] leading-relaxed mb-6 font-sans">
                                機能的マウスピース装置は、<span className="font-bold text-[#C5A572]">柔らかいシリコン製のマウスピース</span>を使用して、歯並びの改善と同時に口の周りの筋肉（舌・唇・頬）の正しい使い方を訓練する装置です。
                            </p>
                            <p className="text-lg text-[#5A4D41] leading-relaxed mb-10 font-sans">
                                従来の矯正装置と異なり、<span className="font-bold text-[#C5A572]">歯を動かすだけでなく、不正咬合の根本原因となる口呼吸・舌癖・悪い嚥下習慣を改善</span>することで、後戻りしにくい安定した歯並びを目指します。
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">歯並びの改善</h4>
                                    <p className="text-[#8D8070] leading-relaxed font-sans">
                                        歯列のアーチを広げ、永久歯が正しい位置に生えるスペースを確保します
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">筋機能訓練</h4>
                                    <p className="text-[#8D8070] leading-relaxed font-sans">
                                        舌・唇・頬の筋肉を正しく使えるようにトレーニングし、口呼吸を鼻呼吸に改善します
                                    </p>
                                </div>
                            </div>

                            {/* 装着方法の画像 */}
                            <div className="mt-8">
                                <KidsOrthoImage
                                    name="functional-mouthpiece-usage"
                                    alt="機能的マウスピース装置を装着している様子"
                                    category="appliances"
                                />
                            </div>
                        </section>

                        {/* どのように機能するのか */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">どのように機能するのか？</h2>
                            <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

                            <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                プレオルソの構造的特徴
                            </h3>
                            <ul className="space-y-3 ml-4 mb-10 text-[#8D8070] leading-loose font-sans">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                    <span><strong className="text-[#5A4D41]">舌タブ：</strong>舌を正しい位置（上顎の前歯裏）に誘導し、舌癖を改善</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                    <span><strong className="text-[#5A4D41]">リップバンパー：</strong>唇を閉じやすくし、口呼吸から鼻呼吸へ誘導</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                    <span><strong className="text-[#5A4D41]">歯列アーチ形状：</strong>歯を適切な位置に誘導し、歯列を拡大</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                    <span><strong className="text-[#5A4D41]">柔軟な素材：</strong>ポリウレタン製で違和感が少なく、成長に合わせて変形</span>
                                </li>
                            </ul>

                            <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                3つの作用で歯並びを改善
                            </h4>
                            <div className="space-y-4 text-[#5A4D41] leading-loose font-sans mb-8">
                                <p>
                                    <span className="font-bold bg-yellow-100">口呼吸改善</span>：リップバンパーが唇を閉じさせ、鼻呼吸を促進。口腔内の乾燥を防ぎ、むし歯・歯周病のリスクを軽減
                                </p>
                                <p>
                                    <span className="font-bold bg-yellow-100">舌位置の矯正</span>：舌タブが舌を正しい位置に誘導。前歯を押し出す舌癖が改善され、出っ歯・開咬の予防につながる
                                </p>
                                <p>
                                    <span className="font-bold bg-yellow-100">歯列の拡大</span>：理想的なアーチ形状が歯を適切な位置に誘導。永久歯が生えるスペースを確保し、抜歯矯正のリスクを軽減
                                </p>
                            </div>

                            {/* 効果の画像 */}
                            <KidsOrthoImage
                                name="functional-mouthpiece-effect"
                                alt="機能的マウスピース装置の効果を示す図解"
                                category="appliances"
                            />
                        </section>

                        {/* 主な種類 */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">機能的マウスピース装置の主な種類</h2>
                            <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

                            {/* プレオルソ */}
                            <div className="mb-10">
                                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                    1. プレオルソ（Preortho）
                                </h3>
                                <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                    <p>
                                        日本で開発された機能的マウスピース装置。<span className="font-bold bg-yellow-100">ポリウレタン製で非常に柔らかく、違和感が少ない</span>のが特徴です。日中1時間＋就寝時の装着でOK。Type I〜IIIまでタイプがあり、症状に応じて選択します。
                                    </p>
                                    <p>
                                        <span className="text-[#C5A572] font-bold">適応症例：</span>口呼吸・舌癖、出っ歯・受け口・開咬、軽度〜中等度の歯並びの乱れ
                                    </p>
                                </div>
                            </div>

                            {/* EFライン */}
                            <div className="mb-10">
                                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                    2. EFライン（EF Line）
                                </h4>
                                <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                    <p>
                                        フランスで開発された機能的マウスピース装置。<span className="font-bold bg-yellow-100">プレオルソより柔らかいポリ塩化ビニル（PVC）素材</span>を使用しており、プレオルソが固くて使用できなかった場合の代替選択肢として最適です。日中2〜4時間＋就寝時の装着が推奨されています。
                                    </p>
                                    <p>
                                        <span className="text-[#C5A572] font-bold">適応症例：</span>口呼吸・舌癖、軽度〜中等度の歯並びの乱れ、プレオルソが硬くて装着困難な場合
                                    </p>
                                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                                        <p className="text-sm text-[#5A4D41] leading-relaxed">
                                            <span className="font-bold text-green-700">硬さの比較：</span>プレオルソ（硬い）＞ EFライン（中間）＞ マイオブレース/T4K（柔らかい）
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* T4K・マイオブレース */}
                            <div className="mb-10">
                                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                    3. T4K（Trainer for Kids）・マイオブレース（Myobrace）
                                </h4>

                                {/* 関係性の説明 */}
                                <div className="bg-blue-50 p-6 rounded-xl mb-6 border-l-4 border-blue-500">
                                    <p className="font-bold text-blue-700 mb-3">T4Kとマイオブレースの関係</p>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        結論から言うと、<span className="font-bold bg-yellow-100">「同じメーカー（オーストラリアのMRC社）が作った、兄弟のような関係」</span>です。厳密には<span className="font-bold text-[#C5A572]">「マイオブレースという大きなシステムの中に、T4Kという製品がある」</span>というイメージです。
                                    </p>
                                    <p className="text-[#5A4D41] leading-loose">
                                        どちらも「歯並びを直接動かす」というよりは、<span className="font-bold bg-yellow-100">「口の周りの筋肉を鍛えて、結果的に歯並びを整える」</span>という目的は共通しています。
                                    </p>
                                </div>

                                {/* 比較表 */}
                                <div className="overflow-x-auto mb-6">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="bg-[#FAF8F5]">
                                                <th className="border border-gray-300 p-3 text-left text-[#5A4D41] font-serif">特徴</th>
                                                <th className="border border-gray-300 p-3 text-left text-[#5A4D41] font-serif">T4K (Trainer for Kids)</th>
                                                <th className="border border-gray-300 p-3 text-left text-[#5A4D41] font-serif">マイオブレース (Myobrace)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            <tr>
                                                <td className="border border-gray-300 p-3 font-bold text-[#5A4D41]">位置づけ</td>
                                                <td className="border border-gray-300 p-3 text-[#8D8070]">初期の代表的な<strong>単一製品</strong></td>
                                                <td className="border border-gray-300 p-3 text-[#8D8070]">成長段階に合わせた<strong>矯正システム全体</strong></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 p-3 font-bold text-[#5A4D41]">種類</td>
                                                <td className="border border-gray-300 p-3 text-[#8D8070]">種類が少なく、汎用的</td>
                                                <td className="border border-gray-300 p-3 text-[#8D8070]">年齢や歯の状態に合わせ、数十種類ある</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 p-3 font-bold text-[#5A4D41]">構造</td>
                                                <td className="border border-gray-300 p-3 text-[#8D8070]">柔らかい素材がメイン</td>
                                                <td className="border border-gray-300 p-3 text-[#8D8070]">硬さの違う素材を組み合わせた多層構造</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 p-3 font-bold text-[#5A4D41]">目的</td>
                                                <td className="border border-gray-300 p-3 text-[#8D8070]">混合歯列期（生え変わり期）の改善</td>
                                                <td className="border border-gray-300 p-3 text-[#8D8070]">筋肉の訓練 ＋ 顎の拡大 ＋ 歯並びの微調整</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* T4K */}
                                    <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                                        <h5 className="font-bold text-[#C5A572] mb-3 text-lg">T4K：スタンダードな入門機</h5>
                                        <p className="text-[#5A4D41] leading-loose mb-4 text-sm">
                                            主に6〜10歳くらいの、乳歯と永久歯が混ざった時期に使われます。
                                        </p>
                                        <div className="space-y-2 text-sm">
                                            <p><span className="text-green-600 font-bold">メリット：</span>シンプルで扱いやすい</p>
                                            <p><span className="text-yellow-600 font-bold">デメリット：</span>既製品なので、個々の複雑な歯並びには対応しきれないことがある</p>
                                        </div>
                                        <p className="mt-4 text-[#C5A572] font-bold text-sm">
                                            適応：比較的症状が軽く、まずは筋肉の癖を直したい場合
                                        </p>
                                    </div>

                                    {/* マイオブレース */}
                                    <div className="bg-white p-6 rounded-xl border-2 border-[#C5A572]">
                                        <h5 className="font-bold text-[#C5A572] mb-3 text-lg">マイオブレース：進化版・オーダーメイドに近いシステム</h5>
                                        <p className="text-[#5A4D41] leading-loose mb-4 text-sm">
                                            T4Kの成功を経て、より細かく「乳歯期用」「永久歯期用」「出っ歯用」など、子供の成長段階や症状に合わせてステップアップできるように体系化されたシステムです。
                                        </p>
                                        <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                            <p className="text-sm text-[#5A4D41] leading-relaxed">
                                                <span className="font-bold text-blue-700">ポイント：</span>1つの装置で終わりではなく、ステージ1（習慣の改善）、ステージ2（顎の拡大）、ステージ3（歯並びの仕上げ）といった具合に、装置を付け替えながら進めていくのが一般的です。
                                            </p>
                                        </div>
                                        <p className="text-[#C5A572] font-bold text-sm">
                                            適応：歯並びの問題が少し複雑で、成長に合わせて段階的にしっかり治したい場合
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                                    <p className="font-bold text-[#5A4D41] mb-2">最近の歯科医院では</p>
                                    <p className="text-sm text-[#5A4D41] leading-relaxed">
                                        単に装置（T4Kなど）をはめるだけでなく、<span className="font-bold bg-yellow-100">「アクティビティ」と呼ばれるお口のトレーニング（MFT）</span>をセットで行うプログラム全体を「マイオブレース矯正」と呼ぶことが多いです。
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* メリット・デメリット */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">メリット・デメリット</h2>
                            <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

                            {/* メリット */}
                            <h4 className="text-xl font-serif font-bold text-[#5A4D41] mb-4 pb-2 border-b-2 border-[#C5A572]">メリット</h4>
                            <ul className="space-y-3 ml-4 mb-10 text-[#8D8070] leading-loose font-sans">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                    <span><strong className="text-[#5A4D41]">痛みがほとんどない：</strong>柔らかいシリコン製で違和感が少ない</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                    <span><strong className="text-[#5A4D41]">取り外し可能：</strong>食事・歯磨き時は外せるので衛生的</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                    <span><strong className="text-[#5A4D41]">根本原因を改善：</strong>口呼吸・舌癖を治すので後戻りしにくい</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                    <span><strong className="text-[#5A4D41]">早期開始が可能：</strong>3歳から始められる</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                    <span><strong className="text-[#5A4D41]">費用が抑えられる：</strong>既製品なので比較的安価</span>
                                </li>
                            </ul>

                            {/* デメリット */}
                            <h4 className="text-xl font-serif font-bold text-[#5A4D41] mb-4 pb-2 border-b-2 border-[#C5A572]">デメリット</h4>
                            <ul className="space-y-3 ml-4 mb-4 text-[#8D8070] leading-loose font-sans">
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                                    <span><strong className="text-[#5A4D41]">装着時間を守る必要：</strong>効果を出すには毎日の装着が必須</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                                    <span><strong className="text-[#5A4D41]">お子さまの協力が必要：</strong>自分で装着できる年齢・性格が必要</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                                    <span><strong className="text-[#5A4D41]">適応症例が限定的：</strong>重度の不正咬合には効果が薄い</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                                    <span><strong className="text-[#5A4D41]">治療期間が長い：</strong>1〜2年以上かかることが多い</span>
                                </li>
                            </ul>
                        </section>

                        {/* 費用について */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">費用について</h2>
                            <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-6 pb-2 border-b-2 border-[#C5A572]">
                                    当院の費用（税込）
                                </h3>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {/* 相談・検査費用 */}
                                    <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                                        <h4 className="font-bold text-green-700 mb-4 text-lg">相談・検査費用</h4>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[#5A4D41]">相談料</span>
                                                <span className="text-2xl font-bold text-green-700">¥0</span>
                                            </div>
                                            <p className="text-sm text-gray-600">矯正相談は無料です</p>
                                            <div className="flex justify-between items-center pt-3 border-t border-green-200">
                                                <span className="text-[#5A4D41]">検査代</span>
                                                <span className="text-2xl font-bold text-green-700">¥0</span>
                                            </div>
                                            <p className="text-sm text-gray-600">初回検査は無料です</p>
                                            <div className="flex justify-between items-center pt-3 border-t border-green-200">
                                                <span className="text-[#5A4D41]">結果説明</span>
                                                <span className="text-2xl font-bold text-[#C5A572]">¥11,000</span>
                                            </div>
                                            <p className="text-sm text-gray-600">検査結果の詳しい説明とカウンセリング</p>
                                        </div>
                                    </div>

                                    {/* 装置費用 */}
                                    <div className="bg-white p-6 rounded-xl border-2 border-[#C5A572]">
                                        <h4 className="font-bold text-[#C5A572] mb-4 text-lg">装置費用</h4>
                                        <div className="text-center mb-4">
                                            <div className="text-5xl font-bold text-[#C5A572] mb-2">
                                                ¥132,000
                                            </div>
                                            <p className="text-sm text-gray-600">（税込）</p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <p className="text-sm text-[#5A4D41] leading-relaxed">
                                                <span className="font-bold text-blue-700">含まれるもの：</span><br />
                                                プレオルソ、EFライン、その他の付加的装置の全てを含みます
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-6">
                                    <h4 className="font-bold text-[#5A4D41] mb-4 font-serif">治療費に含まれるサービス</h4>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="flex items-start gap-2">
                                            <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                            <span className="text-[#8D8070]">装置代（プレオルソ・EFライン等）</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                            <span className="text-[#8D8070]">装置の調整・交換費用</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                            <span className="text-[#8D8070]">MFT（筋機能療法）指導</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                            <span className="text-[#8D8070]">定期的な経過観察</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                            <span className="text-[#8D8070]">治療期間中のサポート</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                                            <span className="text-[#8D8070]">保護者への指導・相談</span>
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

                        {/* 当院で使用している装置 */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">当院で使用している装置について</h2>
                            <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200 mb-8">
                                <div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-4 font-serif">当院ではプレオルソとEFラインのみを使用しております</h3>

                                        <div className="space-y-4 text-[#5A4D41] leading-loose">
                                            <p>
                                                数ある機能的マウスピース装置の中で、当院では<span className="font-bold bg-yellow-100">プレオルソとEFラインの2つの装置</span>を採用しています。
                                            </p>

                                            <div className="bg-white p-6 rounded-xl">
                                                <h4 className="font-bold text-[#C5A572] mb-3 text-lg">選定理由</h4>
                                                <ul className="space-y-3">
                                                    <li className="flex items-start gap-3">
                                                        <span className="text-[#C5A572] mt-1 flex-shrink-0">1.</span>
                                                        <span><strong>ほとんどの症例に対応可能：</strong>この2つの装置で、お子さまの歯並びの問題のほとんどをカバーできます</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="text-[#C5A572] mt-1 flex-shrink-0">2.</span>
                                                        <span><strong>日本人の口に適している：</strong>プレオルソは日本で製造された装置のため、日本人のお子さまの口腔構造に合いやすく設計されています</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="text-[#C5A572] mt-1 flex-shrink-0">3.</span>
                                                        <span><strong>硬さの選択肢：</strong>プレオルソが硬くて使用できない場合、より柔らかいEFラインに切り替えることで対応できます</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                                                <p className="text-sm leading-relaxed mb-3">
                                                    <span className="font-bold text-blue-700">硬さの順番：</span><br />
                                                    プレオルソ（硬い）＞ EFライン（中間）＞ マイオブレース・T4K（柔らかい）
                                                </p>
                                                <p className="text-sm leading-relaxed">
                                                    <span className="font-bold text-blue-700">補足：</span>
                                                    マイオブレースやT4Kなどの海外製装置は欧米人の口腔構造に合わせて設計されています。機能的マウスピース装置としての効果は同等で、<span className="font-bold bg-yellow-100">どの装置を使用しても適切な効果が得られます</span>。最も有名なのはマイオブレースですが、「それでないとできない」ということはなく、他の装置でも十分に対応可能です。
                                                </p>
                                            </div>
                                        </div>
                                </div>
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
                                            <strong className="text-[#C5A572]">A.</strong> 3歳から始められます。プレオルソは3〜10歳、マイオブレースは3〜15歳まで年齢別のサイズがあります。早期に始めるほど、口呼吸・舌癖などの悪習癖を改善しやすく、効果が高くなります。
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
                                            <strong className="text-[#C5A572]">A.</strong> 基本的には<strong>就寝時＋日中1〜2時間</strong>の装着が必要です。プレオルソは日中1時間＋就寝時、マイオブレースは日中1〜2時間＋就寝時が推奨されています。装着時間が短いと効果が出にくくなります。
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
                                                痛みはありますか？
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="text-[#8D8070] leading-loose font-sans">
                                        <p className="mb-3">
                                            <strong className="text-[#C5A572]">A.</strong> 柔らかいシリコン製のため、<strong>ほとんど痛みはありません</strong>。装着直後は少し違和感がありますが、数日で慣れます。ワイヤー矯正のような強い痛みはないので、お子さまの負担が少ない治療法です。
                                        </p>
                                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                            <p className="text-sm text-[#5A4D41] leading-relaxed">
                                                <span className="font-bold text-blue-700">当院の方針：</span>
                                                基本的にはプレオルソを使用しますが、痛みがあり使用できない場合は、より柔らかいEFラインに切り替えて対応いたします。お子さまの快適性を最優先に考えた治療を行っています。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="bg-[#FDFBF7] rounded-xl p-8 md:p-12">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-4">お子さまに最適な装置を無料でご提案</h2>
                                <p className="text-lg md:text-xl text-[#8D8070] leading-loose font-sans">
                                    機能的マウスピース装置が適しているか、豊洲の歯医者・F歯科矯正歯科の無料相談でご確認ください
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
