import { Metadata } from 'next';
import { AlertCircle, CheckCircle, ArrowRight, Users, Clock, TrendingUp, Shield, Calendar, Phone, ChevronRight, Home } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import Link from 'next/link';
import { KidsOrthoImage } from '@/components/KidsOrthoImage';
import { PageImage } from '@/components/PageImage';

export const metadata: Metadata = {
  title: '開咬（かいこう）オープンバイトの治療 | こども矯正 | F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '開咬（オープンバイト）の特徴、原因、治療法について詳しく解説。前歯が噛み合わない状態で、習癖改善と早期治療が重要です。お子様の歯並びが気になる方はご相談ください。',
  keywords: '開咬,オープンバイト,前歯が閉じない,こども矯正,小児矯正,歯列矯正,不正咬合,歯科,横浜',
  openGraph: {
    title: '開咬（かいこう）オープンバイトの治療 | こども矯正 | F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '開咬（オープンバイト）の特徴、原因、治療法について詳しく解説。前歯が噛み合わない状態で、習癖改善と早期治療が重要です。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/kidsortho/types/openbite',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function OpenBiteDetailPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF7]" style={{ fontFamily: '"游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", sans-serif' }}>
        {/* Hero Section */}
        <section className="relative bg-[#FDFBF7] py-2 md:py-2">

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* パンくずリスト */}
              <div className="flex items-center gap-2 mb-8 text-sm text-[#8D8070]">
                <Link href="/" className="hover:text-[#E67A2E] transition-colors flex items-center">
                  <Home className="w-4 h-4 mr-1" />
                  ホーム
                </Link>
                <ChevronRight size={14} />
                <Link href="/kidsortho" className="hover:text-[#E67A2E] transition-colors">こども矯正</Link>
                <ChevronRight size={14} />
                <Link href="/kidsortho/types" className="hover:text-[#E67A2E] transition-colors">不正咬合の種類</Link>
                <ChevronRight size={14} />
                <span className="text-[#E67A2E] font-bold">開咬</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#E67A2E] rounded-full flex items-center justify-center text-white shadow-lg">
                  <AlertCircle size={32} />
                </div>
                <div>
                  <p className="text-[#E67A2E] font-bold text-sm mb-1">不正咬合の種類</p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5A4D41]">
                    開咬（かいこう）
                  </h1>
                  <PageImage path="/kidsortho/types/openbite" alt="開咬（オープンバイト）の治療" />
                  <p className="text-sm text-[#8D8070] mt-2">豊洲の矯正歯科が症状・原因・治療法を解説</p>
                </div>
              </div>
            </div>

              {/* ヒーロー画像 */}
              <KidsOrthoImage
                name="openbite-hero"
                alt="開咬（オープンバイト）の症例写真"
                category="types"
              />

              <p className="text-lg text-[#E67A2E] font-bold mt-6 mb-4">通称：オープンバイト</p>

              <p className="text-base md:text-lg leading-relaxed text-[#8D8070]">
                開咬は、奥歯を噛み合わせても前歯が閉じず、上下の前歯の間に隙間ができる状態です。指しゃぶりや舌を前に出す癖が主な原因で、咀嚼や発音に大きな影響を与えます。習癖が固定化する前の4〜8歳での早期治療が最も効果的です。
              </p>
          </div>
        </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-2 md:py-2">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* 特徴セクション */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white flex-shrink-0">
                <CheckCircle size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">開咬の特徴</h2>
            </div>

            {/* 見た目の特徴 */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                1. 見た目の特徴
              </h4>

              {/* 開咬の見た目を示す画像 */}
              <div className="mb-6">
                <KidsOrthoImage
                  name="openbite-profile"
                  alt="開咬の前歯が閉じない特徴"
                  category="types"
                  className="max-w-2xl mx-auto"
                />
              </div>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">前歯が噛み合わない：</strong>奥歯を噛んでも上下の前歯の間に隙間ができます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">口が開きやすい：</strong>唇が閉じにくく、常に口が半開きになりがちです</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">舌が見える：</strong>話すときや飲み込むときに舌が見えることがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">顔が長く見える：</strong>下顔面が長く、面長に見える傾向があります</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 機能面での問題 */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                2. 機能面での問題
              </h4>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">前歯で噛み切れない：</strong>麺類や野菜を前歯で噛み切ることができません</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">発音障害：</strong>サ行、タ行、ラ行の発音が不明瞭になります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">口呼吸：</strong>前歯が閉じないため、口呼吸になりやすくなります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">奥歯への過剰負担：</strong>前歯が使えないため、奥歯だけで噛むことになります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">飲み込みの異常：</strong>舌を前に出して飲み込む癖（舌突出癖）があります</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 放置した場合のリスク */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                放置した場合のリスク
              </h4>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">奥歯の早期喪失：</strong>前歯が機能しないため、奥歯に負担が集中し、早期に失う可能性があります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">顎関節症のリスク：</strong>咬合バランスが悪く、顎関節に負担がかかります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">発音の固定化：</strong>成長とともに発音の問題が固定化し、改善が困難になります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">顔貌の変化：</strong>口呼吸により顔が長くなる（アデノイド顔貌）ことがあります</span>
                  </li>
                </ul>
                <div className="bg-red-50 p-5 rounded-lg mt-4">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-red-600">早期発見・早期治療が重要：</strong>開咬は習癖が原因のことが多く、習癖が固定化する前の4〜8歳での治療開始が理想的です。早期に習癖を改善することで、効果的に治療できます。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 原因セクション */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white flex-shrink-0">
                <AlertCircle size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">開咬の原因</h2>
            </div>

            <div className="mb-8">
              <KidsOrthoImage
                name="openbite-causes"
                alt="開咬の原因となる習癖と骨格"
                category="types"
                className="max-w-3xl mx-auto"
              />
            </div>

            {/* 遺伝的要因 */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                1. 遺伝的要因
              </h4>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">骨格的な問題：</strong>上下の顎が垂直方向に長く成長する傾向が遺伝します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">顔面の成長パターン：</strong>下顔面が長くなりやすい成長パターンが遺伝することがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">舌の大きさ：</strong>舌が大きい場合、歯を押す力が強くなります</span>
                  </li>
                </ul>
                <div className="bg-blue-50 p-5 rounded-lg mt-4 border-l-4 border-blue-500">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-blue-600">遺伝の影響：</strong>骨格的な開咬は遺伝的要因が大きいですが、早期治療により成長をコントロールすることで改善が可能です。
                  </p>
                </div>
              </div>
            </div>

            {/* 環境的要因 */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                2. 環境的要因（後天的な習癖）
              </h4>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">指しゃぶり：</strong>3歳以降も続く指しゃぶりは開咬の最大の原因です</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">舌突出癖：</strong>飲み込むときや話すときに舌を前歯の間に押し出す癖</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">おしゃぶりの長期使用：</strong>3歳以降もおしゃぶりを使い続けると開咬になりやすい</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">口呼吸：</strong>鼻づまりやアレルギーによる口呼吸が習慣化すると、開咬を引き起こします</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">低位舌（ていいぜつ）：</strong>舌が常に低い位置にあると、前歯を押す力が働きます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">アデノイド肥大・扁桃腺肥大：</strong>鼻呼吸ができず、口呼吸になることで開咬が進行します</span>
                  </li>
                </ul>
                <div className="bg-yellow-50 p-5 rounded-lg mt-4 border-l-4 border-yellow-400">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-yellow-600">習癖の改善が最優先：</strong>開咬の多くは習癖が原因です。指しゃぶりは3歳まで、おしゃぶりは2歳半までにやめることが推奨されます。早期に習癖を改善することで、開咬の進行を防げます。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 治療法セクション */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white flex-shrink-0">
                <Shield size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">治療方法</h2>
            </div>

            {/* 1期治療 */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                1. 1期治療（4〜12歳頃）
              </h4>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <p className="text-[#5A4D41] font-semibold mb-4">
                  習癖の改善と垂直的な成長のコントロールが中心です。開咬は習癖改善が最も重要で、早期治療が効果的です。
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">習癖改善装置：</strong>タンガードやタンクリブで舌突出癖や指しゃぶりを防止します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">機能的マウスピース装置：</strong>プレオルソなどで口腔周囲筋のバランスを整え、習癖を改善します</span>

                    {/* 治療装置の画像 */}
                    <div className="my-6">
                      <KidsOrthoImage
                        name="openbite-treatment"
                        alt="開咬の治療装置"
                        category="types"
                        className="max-w-xl mx-auto"
                      />
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">MFT（口腔筋機能療法）：</strong>舌や口の周りの筋肉のトレーニングを行います</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">垂直コントロール：</strong>奥歯の挺出を抑制し、前歯を圧下（押し込む）する装置を使用</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">鼻呼吸の確立：</strong>耳鼻科と連携してアデノイド切除などを行い、鼻呼吸を確立します</span>
                  </li>
                </ul>
                <div className="bg-[#E8F2ED] p-5 rounded-lg mt-4">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-[#395b45]">1期治療の目標：</strong>習癖を改善し、正しい舌の位置と飲み込み方を習得することです。習癖が改善されれば、前歯が自然に閉じてくることもあります。
                  </p>
                </div>
              </div>
            </div>

            {/* 2期治療 */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                2. 2期治療（12歳以降〜）
              </h4>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <p className="text-[#5A4D41] font-semibold mb-4">
                  永久歯が生え揃った後に、歯の位置を細かく調整する段階です。
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">マルチブラケット装置：</strong>前歯の圧下と奥歯の挺出抑制を行います</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">歯科矯正用アンカースクリュー：</strong>前歯を効果的に圧下するために使用することがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">継続的なMFT：</strong>舌のトレーニングを続けて後戻りを防ぎます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">外科矯正：</strong>骨格的な問題が大きい場合、顎の手術を併用することがあります</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 使用する装置 */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                3. 主な使用装置
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">タンガード</h4>
                  <p className="text-sm text-[#8D8070] mb-2">舌を前に出すのを防ぐ装置。習癖改善に効果的です。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">1期治療</p>
                </div>
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">タンクリブ</h4>
                  <p className="text-sm text-[#8D8070] mb-2">指しゃぶりを防止し、舌の位置を改善する装置。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">1期治療</p>
                </div>
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">機能的マウスピース装置</h4>
                  <p className="text-sm text-[#8D8070] mb-2">プレオルソなど。口腔周囲筋のバランスを整え、習癖を改善します。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">1期治療</p>
                </div>
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">ブラケット装置</h4>
                  <p className="text-sm text-[#8D8070] mb-2">前歯を圧下し、正確に歯を動かします。アンカースクリューと併用することも。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">2期治療</p>
                </div>
              </div>
            </div>

            {/* 治療期間と費用 */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                4. 治療期間と費用の目安
              </h4>
              <div className="space-y-6">
                {/* 1期治療 */}
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <h4 className="font-bold text-[#5A4D41] mb-4 text-lg">1期治療（4〜12歳頃）</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock size={18} className="text-blue-500" />
                        <span className="font-bold text-[#5A4D41] text-sm">治療期間</span>
                      </div>
                      <p className="text-[#8D8070] text-sm">1〜3年程度<br /><span className="text-xs">（習癖改善に6ヶ月〜1年、その後の成長観察を含む）</span></p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={18} className="text-blue-500" />
                        <span className="font-bold text-[#5A4D41] text-sm">費用</span>
                      </div>
                      <p className="text-[#8D8070] text-sm">30〜50万円程度<br /><span className="text-xs">（調整料：1回3,000〜5,000円程度）</span></p>
                    </div>
                  </div>
                </div>

                {/* 2期治療 */}
                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <h4 className="font-bold text-[#5A4D41] mb-4 text-lg">2期治療（12歳以降〜）</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock size={18} className="text-yellow-600" />
                        <span className="font-bold text-[#5A4D41] text-sm">治療期間</span>
                      </div>
                      <p className="text-[#8D8070] text-sm">2〜3年程度<br /><span className="text-xs">（保定期間：2〜3年以上、後戻りしやすい）</span></p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={18} className="text-yellow-600" />
                        <span className="font-bold text-[#5A4D41] text-sm">費用</span>
                      </div>
                      <p className="text-[#8D8070] text-sm">40〜80万円程度<br /><span className="text-xs">（1期治療から継続の場合は減額あり）</span></p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#8D8070] mt-2">
                  ※費用は症状や使用する装置によって異なります。医療費控除の対象となる場合があります。詳しくは初回カウンセリングでご説明いたします。
                </p>
              </div>
            </div>
          </section>

          {/* 最適な治療時期 */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white flex-shrink-0">
                <Calendar size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">最適な治療開始時期</h2>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[#C5A572]/10 p-8 md:p-10">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-[#5A4D41] mb-4 flex items-center gap-3">
                    <span className="text-3xl">🌟</span>
                    <span>理想的な開始時期：4〜8歳</span>
                  </h3>
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    開咬の治療は、<strong className="text-[#E67A2E]">習癖が固定化する前の4〜8歳頃が最も効果的</strong>です。この時期に習癖を改善し、正しい舌の位置を習得することで、開咬を効果的に改善できます。
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>習癖改善がしやすい時期</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>垂直的な成長をコントロールできる時期</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>舌のトレーニングを習得しやすい時期</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>鼻呼吸を確立しやすい時期</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <h4 className="font-bold text-[#5A4D41] mb-3">3歳までの習癖改善を推奨</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed">
                    指しゃぶりやおしゃぶりは3歳までにやめることが推奨されます。3歳以降も続く場合は、早めに専門の病院でご相談ください。習癖が長く続くほど、開咬が進行し、治療が困難になります。
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <h4 className="font-bold text-[#5A4D41] mb-3">12歳以降でも治療可能</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed">
                    成長期を過ぎてしまった場合でも、マルチブラケット装置とMFTで治療可能です。ただし、骨格的な問題が大きい場合は、外科矯正が必要になることがあります。また、後戻りしやすいため、長期の保定が必要です。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white flex-shrink-0">
                <Users size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">よくある質問</h2>
            </div>

            <div className="space-y-6">
              {/* Q1 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q1</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">指しゃぶりをやめれば自然に治りますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 3歳未満であれば、習癖をやめることで改善する可能性があります。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">3歳未満：</strong>習癖をやめれば、自然に前歯が閉じることがあります</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">3歳以降：</strong>すでに開咬が進行している場合、習癖をやめても自然には治りません</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">舌癖が残る：</strong>指しゃぶりをやめても、舌突出癖が残っていることが多い</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    習癖をやめた後も、舌のトレーニング（MFT）を行うことで、開咬の改善と再発防止ができます。早期にご相談ください。
                  </p>
                </div>
              </div>

              {/* Q2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q2</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">MFT（口腔筋機能療法）とは何ですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 舌や口の周りの筋肉を正しく使えるようにするトレーニングです。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">舌の位置：</strong>正しい舌の位置（スポットポジション）を習得します</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">飲み込み方：</strong>舌を前に出さない正しい飲み込み方を練習します</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">口唇閉鎖：</strong>口を閉じる筋肉を強化します</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    MFTは開咬治療に不可欠です。毎日のトレーニングにより、習癖を改善し、治療効果を高め、後戻りを防ぐことができます。
                  </p>
                </div>
              </div>

              {/* Q3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q3</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">開咬は後戻りしやすいと聞きましたが本当ですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> はい、開咬は他の不正咬合に比べて後戻りしやすい傾向があります。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">習癖が残る：</strong>舌突出癖が完全に改善されないと、後戻りします</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">口呼吸の再発：</strong>鼻炎などで口呼吸に戻ると、再び開咬になることがあります</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">長期保定が必要：</strong>2〜3年以上の保定期間が推奨されます</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    後戻り防止には、治療後もMFTを継続し、正しい舌の位置と鼻呼吸を維持することが重要です。定期的なメンテナンスで確認します。
                  </p>
                </div>
              </div>

              {/* Q4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q4</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">耳鼻科での治療も必要ですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> アデノイド肥大や扁桃腺肥大がある場合は、耳鼻科での治療が必要です。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">鼻呼吸ができない：</strong>鼻づまりがあると、口呼吸になり開咬が進行します</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">耳鼻科と連携：</strong>当院では耳鼻科と連携して治療を進めます</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">手術が必要な場合：</strong>アデノイド切除や口蓋扁桃摘出が推奨されることがあります</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    鼻呼吸ができる環境を整えることが、開咬治療の成功に不可欠です。初診時に鼻呼吸の状態を確認し、必要に応じて耳鼻科をご紹介します。
                  </p>
                </div>
              </div>

              {/* Q5 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q5</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">タンガードは痛いですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 痛みはほとんどありませんが、慣れるまで違和感があります。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">装着時の違和感：</strong>最初は話しにくい、食べにくいと感じることがあります</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">慣れるまで：</strong>1〜2週間で慣れることがほとんどです</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">習癖防止効果：</strong>舌を前に出せないため、習癖が自然に改善されます</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    タンガードは習癖改善に非常に効果的です。お子様が慣れるまで、保護者の方の励ましとサポートが重要です。
                  </p>
                </div>
              </div>

              {/* Q6 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q6</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">開咬の治療は難しいと聞きましたが本当ですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 習癖の改善が必要なため、他の不正咬合より治療期間が長く、難しい面があります。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">習癖改善が鍵：</strong>装置だけでなく、本人の意識と努力が必要です</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">早期治療が有利：</strong>4〜8歳で始めれば、習癖改善がしやすく効果的です</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">家族のサポート：</strong>保護者の方の協力が治療成功の重要な要素です</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    開咬は確かに難しい不正咬合ですが、早期治療と習癖改善、継続的なMFTにより、良好な結果が得られます。当院では丁寧にサポートいたします。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative bg-gradient-to-br from-[#FFF9F0] to-[#FFF3E0] rounded-2xl shadow-xl p-8 md:p-12 border-2 border-[#E67A2E]/20 overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-5 right-5 w-24 h-24 bg-[#E67A2E] rounded-full blur-2xl"></div>
              <div className="absolute bottom-5 left-5 w-32 h-32 bg-[#D66A28] rounded-full blur-2xl"></div>
            </div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">お子様の前歯が閉じないことが気になりませんか？</h2>
                <p className="text-lg md:text-xl text-[#8D8070] leading-relaxed">
                  開咬（オープンバイト）は早期治療が効果的です。<br />
                  豊洲の歯医者・F歯科矯正歯科で、まずは無料カウンセリングにお越しください。
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-md border border-[#E67A2E]/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#5A4D41]">無料カウンセリング</h3>
                      <p className="text-sm text-[#8D8070]">所要時間：30〜60分</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-[#8D8070]">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="mt-1 flex-shrink-0 text-[#E67A2E]" />
                      <span>お子様の歯並びの状態を詳しく診査</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="mt-1 flex-shrink-0 text-[#E67A2E]" />
                      <span>最適な治療方法と時期をご提案</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="mt-1 flex-shrink-0 text-[#E67A2E]" />
                      <span>治療期間と費用の詳しいご説明</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-[#E67A2E]/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#5A4D41]">お電話でのご予約</h3>
                      <p className="text-sm text-[#8D8070]">平日 9:00〜18:00</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-[#E67A2E] mb-3">045-XXX-XXXX</p>
                  <p className="text-sm text-[#8D8070]">
                    「こども矯正の相談」とお伝えください
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#E67A2E] hover:bg-[#D66A28] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-xl"
                >
                  <Calendar size={20} />
                  <span>無料カウンセリング予約</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/kidsortho"
                  className="inline-flex items-center justify-center gap-2 bg-[#5A4D41] hover:bg-[#4A3D31] text-white font-bold py-4 px-8 rounded-full transition-all border-2 border-[#5A4D41]"
                >
                  <span>こども矯正トップへ</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-6">関連ページ</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/kidsortho/types" className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-[#E67A2E]/30 group">
                <h3 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#E67A2E] transition-colors flex items-center gap-2">
                  不正咬合の種類
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-sm text-[#8D8070]">7つの不正咬合タイプと特徴</p>
              </Link>
              <Link href="/kidsortho/timing" className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-[#E67A2E]/30 group">
                <h3 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#E67A2E] transition-colors flex items-center gap-2">
                  いつから始めるべきか
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-sm text-[#8D8070]">最適な治療開始時期について</p>
              </Link>
              <Link href="/kidsortho/cost" className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-[#E67A2E]/30 group">
                <h3 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#E67A2E] transition-colors flex items-center gap-2">
                  費用について
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-sm text-[#8D8070]">治療費用と支払い方法</p>
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
