import { Metadata } from 'next';
import { AlertCircle, CheckCircle, ArrowRight, Users, Clock, TrendingUp, Shield, Calendar, Phone, ChevronRight, Home } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import Link from 'next/link';
import { KidsOrthoImage } from '@/components/KidsOrthoImage';
import { PageImage } from '@/components/PageImage';

export const metadata: Metadata = {
  title: '交叉咬合（こうさこうごう）クロスバイトの治療 | こども矯正 | F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '交叉咬合（クロスバイト）の特徴、原因、治療法について詳しく解説。上下の歯が交差して噛み合う状態で、顔の歪みを引き起こす可能性があります。お子様の歯並びが気になる方はご相談ください。',
  keywords: '交叉咬合,クロスバイト,歯の交差,顔の歪み,こども矯正,小児矯正,歯列矯正,不正咬合,歯科,横浜',
  openGraph: {
    title: '交叉咬合（こうさこうごう）クロスバイトの治療 | こども矯正 | F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '交叉咬合（クロスバイト）の特徴、原因、治療法について詳しく解説。上下の歯が交差して噛み合う状態で、顔の歪みを引き起こす可能性があります。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/kidsortho/types/crossbite',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function CrossBiteDetailPage() {
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
                <span className="text-[#E67A2E] font-bold">交叉咬合</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#E67A2E] rounded-full flex items-center justify-center text-white shadow-lg">
                  <AlertCircle size={32} />
                </div>
                <div>
                  <p className="text-[#E67A2E] font-bold text-sm mb-1">不正咬合の種類</p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5A4D41]">
                    交叉咬合（こうさこうごう）
                  </h1>
                  <PageImage path="/kidsortho/types/crossbite" alt="交叉咬合（クロスバイト）の治療" />
                  <p className="text-sm text-[#8D8070] mt-2">豊洲の矯正歯科が症状・原因・治療法を解説</p>
                </div>
              </div>
            </div>

              {/* ヒーロー画像 */}
              <KidsOrthoImage
                name="crossbite-hero"
                alt="交叉咬合（クロスバイト）の症例写真"
                category="types"
              />

              <p className="text-lg text-[#E67A2E] font-bold mt-6 mb-4">通称：クロスバイト</p>

              <p className="text-base md:text-lg leading-relaxed text-[#8D8070]">
                交叉咬合は、上下の歯が正常とは逆に交差して噛み合っている状態です。本来は上の歯が外側にくるべきところ、下の歯が外側になっています。放置すると顔の左右非対称や顎の変形を引き起こすため、6〜9歳での早期治療が非常に重要です。
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">交叉咬合の特徴</h2>
            </div>

            {/* 見た目の特徴 */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                1. 見た目の特徴
              </h4>

              {/* 交叉咬合の見た目を示す画像 */}
              <div className="mb-6">
                <KidsOrthoImage
                  name="crossbite-profile"
                  alt="交叉咬合の噛み合わせの特徴"
                  category="types"
                  className="max-w-2xl mx-auto"
                />
              </div>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">歯が交差している：</strong>上下の歯の位置関係が逆になっています</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">顔の左右非対称：</strong>顎が左右どちらかにずれて、顔が歪んで見えます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">顎のずれ：</strong>正面から見て、下顎が左右どちらかに偏っています</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">片側だけの場合も：</strong>前歯全体、奥歯だけ、または片側だけに見られることもあります</span>
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
                    <span><strong className="text-[#5A4D41]">咀嚼効率の低下：</strong>正しく噛めないため、食べ物をしっかり噛み砕けません</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">片側噛み：</strong>片側だけで噛む癖がつきやすくなります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">顎の偏位：</strong>噛むたびに顎がずれる方向に誘導されます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">発音障害：</strong>サ行やタ行の発音がしにくいことがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">顎関節への負担：</strong>左右のバランスが悪く、顎関節に負担がかかります</span>
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
                    <span><strong className="text-[#5A4D41]">顔の変形：</strong>成長期に放置すると、顎が左右非対称に成長し、顔が歪みます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">骨格的な問題に：</strong>歯の問題から骨格的な変形に進行します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">顎関節症のリスク：</strong>顎の偏位により顎関節症を発症しやすくなります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">治療困難化：</strong>骨格的な変形が進むと、外科矯正が必要になることがあります</span>
                  </li>
                </ul>
                <div className="bg-red-50 p-5 rounded-lg mt-4">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-red-600">緊急性が高い不正咬合：</strong>交叉咬合は放置すると顔の変形を引き起こすため、最も早期治療が必要な不正咬合の一つです。6〜9歳での治療開始が理想的で、できるだけ早い対応が求められます。
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">交叉咬合の原因</h2>
            </div>

            <div className="mb-8">
              <KidsOrthoImage
                name="crossbite-causes"
                alt="交叉咬合の原因となる顎の幅の不調和"
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
                    <span><strong className="text-[#5A4D41]">上顎の狭窄：</strong>上顎が狭く成長する傾向が遺伝します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">下顎の幅が広い：</strong>下顎が上顎に対して相対的に幅広い骨格が遺伝します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">顎の左右非対称：</strong>左右で顎の大きさや位置が異なる傾向が遺伝することがあります</span>
                  </li>
                </ul>
                <div className="bg-blue-50 p-5 rounded-lg mt-4 border-l-4 border-blue-500">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-blue-600">遺伝の影響：</strong>親に交叉咬合がある場合、お子様も同様の傾向を持つ可能性があります。ただし、早期治療により顎の成長をコントロールし、改善することが可能です。
                  </p>
                </div>
              </div>
            </div>

            {/* 環境的要因 */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                2. 環境的要因（後天的な要因）
              </h4>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">口呼吸：</strong>鼻づまりなどで口呼吸が習慣化すると、上顎の成長が不足します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">片側噛み：</strong>いつも同じ側だけで噛む癖があると、顎が偏って成長します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">頬杖（ほおづえ）：</strong>いつも同じ側で頬杖をつくと、顎の成長が偏ります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">うつ伏せ寝：</strong>常にうつ伏せで寝ると、顎が圧迫されて変形します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">乳歯の早期喪失：</strong>片側の乳歯を早く失うと、反対側だけで噛むようになります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">指しゃぶり：</strong>片側を吸う癖があると、その側の歯並びが狭くなります</span>
                  </li>
                </ul>
                <div className="bg-yellow-50 p-5 rounded-lg mt-4 border-l-4 border-yellow-400">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-yellow-600">習癖の早期改善が重要：</strong>片側噛みや頬杖などの習癖は、早期に改善することで交叉咬合の進行を防げます。また、鼻呼吸を確立することも重要です。
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
                1. 1期治療（6〜12歳頃）
              </h4>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <p className="text-[#5A4D41] font-semibold mb-4">
                  成長期を利用した顎の拡大と位置の修正が中心です。交叉咬合は早期治療が最も重要な不正咬合の一つです。
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">機能的マウスピース装置：</strong>プレオルソなどで口腔周囲筋のバランスを整え、顎の成長を促進します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>

                    {/* 治療装置の画像 */}
                    <div className="my-6">
                      <KidsOrthoImage
                        name="crossbite-treatment"
                        alt="交叉咬合の治療装置"
                        category="types"
                        className="max-w-xl mx-auto"
                      />
                    </div>
                    <span><strong className="text-[#5A4D41]">拡大床：</strong>取り外し式の装置で顎を少しずつ拡大します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">急速拡大装置：</strong>上顎を効率的に拡大し、幅を広げます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">クワドヘリックス：</strong>上顎をゆっくり拡大する固定式装置</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">部分矯正：</strong>交叉している歯を早期に正しい位置に誘導します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">習癖の改善：</strong>片側噛みや頬杖などの習癖を改善します</span>
                  </li>
                </ul>
                <div className="bg-[#E8F2ED] p-5 rounded-lg mt-4">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-[#395b45]">1期治療の目標：</strong>上下の顎の幅のバランスを整え、正しい位置関係に導くことです。早期治療により顔の変形を防ぎ、対称的な成長を促します。
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
                    <span><strong className="text-[#5A4D41]">マルチブラケット装置：</strong>歯の位置を正確に調整します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">顎間ゴム：</strong>上下の顎の位置関係を調整するために使用します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">外科矯正：</strong>骨格的な変形が大きい場合、顎の手術を併用することがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">保定装置：</strong>治療後は後戻りを防ぐため、リテーナーを使用します</span>
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
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">機能的マウスピース装置</h4>
                  <p className="text-sm text-[#8D8070] mb-2">プレオルソなど。口腔周囲筋のバランスを整え、顎の成長を促進します。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">1期治療</p>
                </div>
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">拡大床</h4>
                  <p className="text-sm text-[#8D8070] mb-2">取り外し式の装置で顎を少しずつ拡大します。軽度の場合に使用します。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">1期治療</p>
                </div>
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">急速拡大装置</h4>
                  <p className="text-sm text-[#8D8070] mb-2">上顎を短期間で効率的に拡大する固定式装置。最も効果的です。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">1期治療</p>
                </div>
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">クワドヘリックス</h4>
                  <p className="text-sm text-[#8D8070] mb-2">上顎をゆっくり拡大する固定式装置。違和感が少ないです。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">1期治療</p>
                </div>
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">ブラケット装置</h4>
                  <p className="text-sm text-[#8D8070] mb-2">歯の表面に装着し、正確に歯を動かします。仕上げに使用します。</p>
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
                  <h4 className="font-bold text-[#5A4D41] mb-4 text-lg">1期治療（6〜12歳頃）</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock size={18} className="text-blue-500" />
                        <span className="font-bold text-[#5A4D41] text-sm">治療期間</span>
                      </div>
                      <p className="text-[#8D8070] text-sm">6ヶ月〜2年程度<br /><span className="text-xs">（拡大に3〜6ヶ月、その後の経過観察を含む）</span></p>
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
                      <p className="text-[#8D8070] text-sm">1.5〜2.5年程度<br /><span className="text-xs">（保定期間：2年以上）</span></p>
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
                    <span>理想的な開始時期：6〜9歳（緊急性が高い）</span>
                  </h3>
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    交叉咬合の治療は、<strong className="text-[#E67A2E]">永久歯前歯が生えた6〜9歳頃が最も重要</strong>です。この時期を逃すと顔の変形が進行するため、最も早期治療が必要な不正咬合の一つです。
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>顎の成長を利用して効果的に拡大できる時期</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>顔の変形を防げる時期</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>顎の偏位を修正できる時期</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>対称的な成長を促せる時期</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <h4 className="font-bold text-[#5A4D41] mb-3">早期発見が極めて重要</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed">
                    交叉咬合は放置すると顔の変形を引き起こす緊急性の高い不正咬合です。少しでも疑いがある場合は、すぐに矯正歯科でご相談ください。早ければ早いほど、簡単な治療で改善できます。
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <h4 className="font-bold text-[#5A4D41] mb-3">12歳以降は治療困難化</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed">
                    成長期を過ぎてしまうと、顎の拡大が困難になり、骨格的な変形が固定化します。重度の場合は、外科矯正（顎の手術）が必要になることがあります。
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
                    <h3 className="font-bold text-[#5A4D41] text-lg">交叉咬合は自然に治りますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 自然に治ることは絶対にありません。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>交叉咬合は自然に改善することはなく、むしろ悪化します</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>放置すると、顎が偏って成長し、顔が歪みます</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>早期治療が最も重要な不正咬合の一つです</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    交叉咬合を発見したら、できるだけ早く矯正歯科で治療を開始することが極めて重要です。
                  </p>
                </div>
              </div>

              {/* Q2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q2</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">急速拡大装置は痛いですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 痛みはほとんどなく、主に圧迫感や違和感程度です。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">拡大時の圧迫感：</strong>ネジを回した直後に歯や顎に圧迫感を感じます</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">持続時間：</strong>圧迫感は数時間〜1日程度で治まります</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">効果的：</strong>短期間で顎を拡大できる最も効果的な方法です</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    ほとんどのお子様は数日で装置に慣れます。痛みが強い場合は調整できますので、ご相談ください。
                  </p>
                </div>
              </div>

              {/* Q3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q3</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">治療を遅らせるとどうなりますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 顔の変形が進行し、治療が困難になります。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">顔の歪み：</strong>顎が左右非対称に成長し、顔が歪みます</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">骨格的変形：</strong>歯の問題から骨格の問題に進行します</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">外科矯正が必要：</strong>成人してからは顎の手術が必要になることがあります</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    交叉咬合は最も早期治療が重要な不正咬合です。発見したらできるだけ早く治療を開始してください。
                  </p>
                </div>
              </div>

              {/* Q4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q4</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">治療期間はどれくらいですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 早期治療の場合、拡大自体は3〜6ヶ月程度で完了します。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">拡大期間：</strong>急速拡大装置で3〜6ヶ月程度</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">保定期間：</strong>拡大後、装置をそのまま6ヶ月〜1年使用して安定させます</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">その後の観察：</strong>永久歯が生え揃うまで経過観察します</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    早期に治療を開始すれば、比較的短期間で交叉咬合を改善できます。顔の変形を防ぐためにも早期治療が重要です。
                  </p>
                </div>
              </div>

              {/* Q5 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q5</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">前歯だけの交叉咬合も治療が必要ですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> はい、前歯だけでも早期治療が必要です。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">顎のずれ：</strong>前歯の交叉でも、噛むたびに顎がずれる方向に誘導されます</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">顔の変形：</strong>放置すると顎が偏って成長します</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">早期治療が効果的：</strong>前歯だけの場合は、比較的簡単に治療できます</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    前歯だけの交叉咬合は、早期に発見して治療すれば、短期間で改善できます。放置すると全体に広がることもあるため、早めの治療をお勧めします。
                  </p>
                </div>
              </div>

              {/* Q6 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q6</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">片側噛みをやめれば治りますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 習癖を改善しても、すでにある交叉咬合は自然には治りません。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">習癖改善は重要：</strong>片側噛みをやめることで、悪化を防げます</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">矯正治療が必要：</strong>すでにある交叉咬合は、矯正治療でしか治せません</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">併用が効果的：</strong>矯正治療と並行して習癖を改善することが重要です</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    交叉咬合の治療と並行して、片側噛みや頬杖などの習癖を改善することで、治療効果が高まり、後戻りを防げます。
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">お子様の噛み合わせが交差していませんか？</h2>
                <p className="text-lg md:text-xl text-[#8D8070] leading-relaxed">
                  交叉咬合（クロスバイト）は早期治療が極めて重要です。<br />
                  豊洲の歯科・F歯科矯正歯科で、まずは無料カウンセリングにお越しください。
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
