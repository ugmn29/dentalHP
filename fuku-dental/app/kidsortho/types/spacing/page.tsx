import { Metadata } from 'next';
import { ArrowRight, ChevronRight, Home, Calendar, Phone } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import Link from 'next/link';
import { KidsOrthoImage } from '@/components/KidsOrthoImage';
import { PageImage } from '@/components/PageImage';

export const metadata: Metadata = {
  title: '空隙歯列（くうげきしれつ）の治療 | こども矯正 | F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '空隙歯列（歯と歯の間に隙間がある状態）の特徴、原因、治療法について詳しく解説。見た目や機能に影響する不正咬合です。お子様の歯並びが気になる方はご相談ください。',
  keywords: '空隙歯列,歯間,隙間,歯の隙間,こども矯正,小児矯正,歯列矯正,不正咬合,歯科,横浜',
  openGraph: {
    title: '空隙歯列（くうげきしれつ）の治療 | こども矯正 | F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '空隙歯列（歯と歯の間に隙間がある状態）の特徴、原因、治療法について詳しく解説。見た目や機能に影響する不正咬合です。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/kidsortho/types/spacing',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function SpacingDetailPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FDFBF7]" style={{ fontFamily: '"游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", sans-serif' }}>
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
                <Link href="/kidsortho/types" className="hover:text-[#C5A572] transition-colors">不正咬合の種類</Link>
                <ChevronRight size={14} />
                <span className="text-[#C5A572] font-bold">空隙歯列</span>
              </div>

              <div className="mb-6">
                <p className="text-[#C5A572] font-bold text-sm mb-2">不正咬合の種類</p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#5A4D41] mb-3">
                  空隙歯列（くうげきしれつ）
                </h1>
                <PageImage path="/kidsortho/types/spacing" alt="空隙歯列（すきっ歯）の治療" />
                <p className="text-sm text-[#8D8070] mb-3">豊洲の矯正歯科が詳しく解説</p>
                <div className="w-16 h-0.5 bg-[#C5A572] mb-6"></div>
              </div>

              {/* ヒーロー画像 */}
              <KidsOrthoImage
                name="spacing-hero"
                alt="空隙歯列（歯間の隙間）の症例写真"
                category="types"
              />

              <p className="text-lg text-[#C5A572] font-bold mt-6 mb-4">通称：すきっ歯</p>

              <p className="text-base md:text-lg leading-loose text-[#8D8070] font-sans">
                空隙歯列は、歯と歯の間に隙間ができている状態です。特に前歯に見られることが多く、見た目の問題だけでなく、食べ物が詰まりやすくなったり、音が漏れやすくなったりします。永久歯が生え揃った8〜12歳での早期治療が効果的です。
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-2 pb-16">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* 特徴セクション */}
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">空隙歯列の特徴</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

              {/* 見た目の特徴 */}
              <h3 className="text-xl font-serif font-bold text-[#5A4D41] mb-4">1. 見た目の特徴</h3>

              {/* 空隙歯列の見た目を示す画像 */}
              <div className="mb-6">
                <KidsOrthoImage
                  name="spacing-profile"
                  alt="空隙歯列の特徴を示す画像"
                  category="types"
                  className="max-w-2xl mx-auto"
                />
              </div>

              <ul className="space-y-3 ml-4 mb-10 text-[#8D8070] leading-loose font-sans">
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">前歯に隙間がある：</strong>上の前歯の中央に隙間ができていることが多い</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">複数の歯間に隙間：</strong>上下の歯全体に隙間がみられることもあります</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">歯が小さく見える：</strong>隙間があるため、歯が小さく見えることがあります</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">笑顔に不安がある：</strong>見た目を気にして笑顔に自信がない場合が多い</span>
                </li>
              </ul>

              {/* 機能面での問題 */}
              <h3 className="text-xl font-serif font-bold text-[#5A4D41] mb-4">2. 機能面での問題</h3>
              <ul className="space-y-3 ml-4 mb-10 text-[#8D8070] leading-loose font-sans">
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">食べ物が詰まりやすい：</strong>隙間に食べ物が入り込みやすく、歯磨きが必要になります</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">発音への影響：</strong>サ行の音が漏れやすく、発音がしにくいことがあります</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">虫歯のリスク：</strong>隙間に食べ物が詰まり、虫歯になりやすくなります</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">歯周病のリスク：</strong>食べ物の詰まりにより、歯茎が炎症しやすくなります</span>
                </li>
              </ul>

              {/* 放置した場合のリスク */}
              <div className="bg-yellow-50 rounded-xl p-6 md:p-8 border border-yellow-200">
                <h3 className="text-xl font-serif font-bold text-[#5A4D41] mb-4">放置した場合のリスク</h3>
                <ul className="space-y-3 ml-4 mb-4 text-[#8D8070] leading-loose font-sans">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">虫歯の多発：</strong>隙間に詰まる食べ物により、複数の歯が虫歯になるリスク</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">歯周病の進行：</strong>歯茎の炎症が続くと、歯周病に発展します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">コンプレックスの形成：</strong>歯の隙間を気にして、笑顔に自信が持てなくなります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">発音の定着：</strong>発音の問題が習慣化し、改善が困難になります</span>
                  </li>
                </ul>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-[#5A4D41] font-sans">
                    <strong className="text-yellow-600">早期治療が重要：</strong>空隙歯列は見た目の改善だけでなく、虫歯や歯周病を予防するためにも治療が必要です。8〜12歳での治療開始が理想的です。
                  </p>
                </div>
              </div>
            </section>

            {/* 原因セクション */}
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">空隙歯列の原因</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

              <div className="mb-8">
                <KidsOrthoImage
                  name="spacing-causes"
                  alt="空隙歯列の原因となる顎と歯のサイズバランス"
                  category="types"
                  className="max-w-3xl mx-auto"
                />
              </div>

              {/* 遺伝的要因 */}
              <div className="mb-10">
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  1. 遺伝的要因
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                  <p>
                    <span className="font-bold bg-yellow-100">顎が大きい</span>。顎が大きく、歯が小さいと隙間ができやすいです。
                    <span className="text-[#395b45] font-bold">歯が先天的に小さい場合も隙間ができます</span>。
                  </p>
                  <p>
                    また、先天的に永久歯が少ない場合があります。
                    <span className="font-bold bg-yellow-100">親の顎が大きい場合、お子様も同様の傾向を持つ可能性があります</span>。
                    <span className="text-[#395b45] font-bold">早期の矯正治療で改善が可能です</span>。
                  </p>
                </div>
              </div>

              {/* 環境的要因 */}
              <div className="mb-10">
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  2. 環境的要因（後天的な要因）
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                  <p>
                    <span className="font-bold bg-yellow-100">舌癖</span>。舌が前歯を押す癖があると、隙間が広がります。
                    <span className="text-[#395b45] font-bold">低い舌位により歯が外側に押され、隙間が生じます</span>。
                  </p>
                  <p>
                    口呼吸により舌の位置が低くなり、隙間が生じます。
                    <span className="font-bold bg-yellow-100">乳歯がなかなか抜けないと、永久歯が斜めに生えます</span>。
                    また、上の前歯と歯茎の間の靭帯（上唇小帯）が太いと、隙間が生じやすいです。
                  </p>
                  <p>
                    <span className="font-bold bg-yellow-100">舌癖や口呼吸を改善することで、隙間の進行を防げます</span>。
                    <span className="text-[#395b45] font-bold">矯正治療と並行して習慣改善を行うことが効果的です</span>。
                  </p>
                </div>
              </div>
            </section>

            {/* 治療法セクション */}
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">治療方法</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

              {/* 1期治療 */}
              <div className="mb-10">
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  1. 1期治療（8〜12歳頃）
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                  <p>
                    <span className="font-bold bg-yellow-100">舌の位置を改善し、隙間が広がるのを防ぐことが中心です</span>。
                    舌訓練（MFT）で舌を正しい位置に保つトレーニングを行います。
                  </p>
                  <p>
                    透明なマウスピースで隙間を閉じる治療を行います。

                  {/* 治療装置の画像 */}
                  <div className="my-6">
                    <KidsOrthoImage
                      name="spacing-treatment"
                      alt="空隙歯列の治療装置"
                      category="types"
                      className="max-w-xl mx-auto"
                    />
                  </div>

                    <span className="text-[#395b45] font-bold">鼻呼吸の確立と舌位置の改善が重要です</span>。
                    上唇小帯が太く隙間が閉じない場合は、切除を検討します。
                  </p>
                  <p>
                    <span className="font-bold bg-yellow-100">1期治療の目標は、舌の位置を改善し、隙間が自然に埋まるのを促す、または隙間が広がるのを防ぐことです</span>。
                  </p>
                </div>
              </div>

              {/* 2期治療 */}
              <div className="mb-10">
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  2. 2期治療（12歳以降〜）
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                  <p>
                    <span className="text-[#395b45] font-bold">永久歯が生え揃った後に、隙間を閉じるための治療を行います</span>。
                  </p>
                  <p>
                    マルチブラケット装置で歯を正確に移動させて隙間を閉じます。
                    <span className="text-[#395b45] font-bold">マウスピース矯正で透明なマウスピースを使用し目立たずに治療可能です</span>。
                    必要に応じて上唇小帯を手術で切除します。治療後は後戻りを防ぐため、長期間の保定が必要です。
                  </p>
                </div>
              </div>

              {/* 治療期間と費用 */}
              <h3 className="text-xl font-bold text-[#5A4D41] mb-6">3. 治療期間と費用の目安</h3>

              {/* 1期治療 */}
              <div className="mb-8">
                <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">1期治療（8〜12歳頃）</h4>
                <div className="grid md:grid-cols-2 gap-6 text-[#8D8070] leading-loose">
                  <div>
                    <span className="font-bold text-[#5A4D41] block mb-2">治療期間</span>
                    <p className="text-sm">1〜2年程度<br /><span className="text-xs">（舌訓練を含む）</span></p>
                  </div>
                  <div>
                    <span className="font-bold text-[#5A4D41] block mb-2">費用</span>
                    <p className="text-sm">20〜40万円程度<br /><span className="text-xs">（調整料：1回3,000〜5,000円程度）</span></p>
                  </div>
                </div>
              </div>

              {/* 2期治療 */}
              <div className="mb-4">
                <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">2期治療（12歳以降〜）</h4>
                <div className="grid md:grid-cols-2 gap-6 text-[#8D8070] leading-loose">
                  <div>
                    <span className="font-bold text-[#5A4D41] block mb-2">治療期間</span>
                    <p className="text-sm">1〜2年程度<br /><span className="text-xs">（保定期間：2年以上）</span></p>
                  </div>
                  <div>
                    <span className="font-bold text-[#5A4D41] block mb-2">費用</span>
                    <p className="text-sm">30〜60万円程度<br /><span className="text-xs">（1期治療から継続の場合は減額あり）</span></p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#8D8070] mt-6">
                ※費用は症状や使用する装置によって異なります。医療費控除の対象となる場合があります。
              </p>
            </section>

            {/* 最適な治療時期 */}
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">最適な治療開始時期</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

              <div className="space-y-10">
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    最も理想的：8〜12歳
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                    <p>
                      <span className="font-bold bg-yellow-100">空隙歯列の治療は、永久歯が生え始める8〜12歳頃が最適です</span>。
                      <span className="text-[#395b45] font-bold">この時期に隙間の進行を止め、舌の位置を改善することで、効果的に治療できます</span>。
                    </p>
                    <p>
                      舌訓練の効果が高い時期です。隙間が埋まりやすい時期でもあり、
                      <span className="font-bold bg-yellow-100">見た目の改善が期待できる時期です</span>。
                      虫歯や歯周病予防ができる時期でもあります。
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    前歯が生えた時点で相談を
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                    <p>
                      <span className="text-[#395b45] font-bold">上の前歯に隙間が見られたら、すぐにこども矯正を専門にしている病院でご相談ください</span>。
                      早期に治療を開始することで、より効果的に改善できます。
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    成人後の治療
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                    <p>
                      <span className="text-[#395b45] font-bold">成人になってからも治療は可能ですが、1期治療で舌の位置を改善しておくことで、2期治療の期間を短縮できます</span>。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">よくある質問</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

              <div className="space-y-6">
                {/* Q1 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        Q1
                      </span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">
                        空隙歯列は自然に治りますか？
                      </h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-loose">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 自然に治ることはまれです。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span>乳歯と永久歯の交換期には隙間が埋まることもあります</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span>ただし、永久歯が全て生え揃った後は、自然には埋まりません</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span>舌癖が残っていると、隙間がむしろ広がることもあります</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">重要：</strong>隙間が見られたら、早めにこども矯正を専門にしている病院で相談することをお勧めします</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Q2 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        Q2
                      </span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">
                        前歯の隙間だけを治す方法はありますか？
                      </h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-loose">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> はい、部分矯正で対応することも可能です。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">部分矯正：</strong>前歯の隙間だけを治す方法</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">治療期間：</strong>比較的短い期間で完了することが多い</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">注意：</strong>舌癖が改善されていないと後戻りのリスクが高い</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">重要：</strong>部分矯正を選択する場合でも、舌訓練は並行して行うことが重要です</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Q3 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        Q3
                      </span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">
                        舌訓練（MFT）で隙間は埋まりますか？
                      </h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-loose">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 小さな隙間であれば、舌訓練だけで改善することもあります。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">軽度の隙間：</strong>2〜3mm程度の隙間は舌訓練で改善することもあります</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">大きな隙間：</strong>4mm以上の隙間は矯正装置による治療が必要</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">効果：</strong>舌訓練は後戻り防止にも重要です</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">注意：</strong>隙間の大きさによって治療方法が異なりますので、初回診査で判定します</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Q4 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        Q4
                      </span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">
                        治療後に隙間が戻ることはありますか？
                      </h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-loose">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 舌癖が改善されていないと、後戻りのリスクがあります。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">舌癖が残る：</strong>舌が前歯を押し続けると隙間が広がります</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">後戻り防止：</strong>長期間の保定と舌訓練の継続が重要</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">定期チェック：</strong>治療後も定期的な通院が推奨されます</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">重要：</strong>後戻りを防ぐために、治療期間中の舌訓練は非常に重要です</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Q5 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        Q5
                      </span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">
                        上唇小帯が太いと言われました。手術が必要ですか？
                      </h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-loose">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> まずは指で小帯を伸ばすことから始めます。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">①指で伸ばす：</strong>まずは指で上唇小帯を伸ばすストレッチを行います</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">②矯正装置で動かす：</strong>矯正装置で隙間を閉じながら、さらに小帯を伸ばしていきます</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">③手術を検討：</strong>それでも小帯が邪魔で歯が動かない場合に、切除手術を検討します</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">補足：</strong>初回診査で詳しく説明いたします。安心してご相談ください</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Q6 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        Q6
                      </span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">
                        矯正治療で隙間を完全に閉じられますか？
                      </h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-loose">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> はい、適切な治療で隙間を完全に閉じることができます。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">治療効果：</strong>ほぼすべてのケースで隙間を閉じられます</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">美しい仕上がり：</strong>歯並びも同時に改善されます</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">後戻り防止：</strong>舌訓練と保定で防ぐことができます</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">補足：</strong>隙間を閉じるだけでなく、綺麗な歯並びと咬み合わせを実現します</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="rounded-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-4">お子様の前歯に隙間が気になりませんか？</h2>
                <p className="text-lg md:text-xl text-[#8D8070] leading-loose">
                  空隙歯列は早期治療で効果的に改善できます。<br />
                  豊洲の歯医者・F歯科矯正歯科で、まずは無料カウンセリングにお越しください。
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar size={24} className="text-[#C5A572]" />
                    <div>
                      <h3 className="font-bold text-lg text-[#5A4D41]">無料カウンセリング</h3>
                      <p className="text-sm text-[#8D8070]">所要時間：30〜60分</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-[#8D8070] ml-9">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">✓</span>
                      <span>お子様の歯並びの状態を詳しく診査</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">✓</span>
                      <span>最適な治療方法と時期をご提案</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">✓</span>
                      <span>治療期間と費用の詳しいご説明</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Phone size={24} className="text-[#C5A572]" />
                    <div>
                      <h3 className="font-bold text-lg text-[#5A4D41]">お電話でのご予約</h3>
                      <p className="text-sm text-[#8D8070]">平日 9:00〜18:00</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-[#C5A572] mb-3 ml-9">045-XXX-XXXX</p>
                  <p className="text-sm text-[#8D8070] ml-9">
                    「こども矯正の相談」とお伝えください
                  </p>
                </div>
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
                  href="/kidsortho"
                  className="inline-flex items-center justify-center gap-2 bg-[#5A4D41] hover:bg-[#4A3D31] text-white font-bold py-4 px-8 rounded-full transition-all border-2 border-[#5A4D41]"
                >
                  <span>こども矯正トップへ</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </section>

            {/* Related Links */}
            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5A4D41] mb-3">関連ページ</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-6"></div>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/kidsortho/types" className="p-6 transition-all rounded-xl border border-gray-200 hover:border-[#C5A572] group">
                  <h3 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#C5A572] transition-colors flex items-center gap-2">
                    不正咬合の種類
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-sm text-[#8D8070]">7つの不正咬合タイプと特徴</p>
                </Link>
                <Link href="/kidsortho/timing" className="p-6 transition-all rounded-xl border border-gray-200 hover:border-[#C5A572] group">
                  <h3 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#C5A572] transition-colors flex items-center gap-2">
                    いつから始めるべきか
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-sm text-[#8D8070]">最適な治療開始時期について</p>
                </Link>
                <Link href="/kidsortho/cost" className="p-6 transition-all rounded-xl border border-gray-200 hover:border-[#C5A572] group">
                  <h3 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#C5A572] transition-colors flex items-center gap-2">
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
