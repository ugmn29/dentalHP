import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { KidsOrthoImage } from '@/components/KidsOrthoImage';
import { PageImage } from '@/components/PageImage';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Home,
  ChevronRight,
  Play
} from 'lucide-react';

export const metadata: Metadata = {
  title: '自宅でできるMFT｜あいうべ体操とボタンプル完全ガイド｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '口腔筋機能療法（MFT）の2大トレーニング。あいうべ体操とボタンプルの正しいやり方、効果が出る期間、注意点を動画付きで詳しく解説します。',
  keywords: 'MFT,口腔筋機能療法,あいうべ体操,ボタンプル,小児矯正,トレーニング',
  openGraph: {
    title: '自宅でできるMFT｜あいうべ体操とボタンプル完全ガイド｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '口腔筋機能療法（MFT）の2大トレーニング。あいうべ体操とボタンプルの正しいやり方、効果が出る期間、注意点を詳しく解説します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/kidsortho/mft-training',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function MFTTrainingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FDFBF7]" style={{ fontFamily: '"游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", sans-serif' }}>
        {/* Breadcrumb */}
        <div className="bg-[#FDFBF7] border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-[#8D8070]">
              <Link href="/" className="hover:text-[#C5A572] flex items-center transition-colors">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/kidsortho" className="hover:text-[#C5A572] transition-colors">
                こども矯正
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#C5A572] font-bold">MFTトレーニング</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                自宅でできるMFT<br />あいうべ体操とボタンプル
              </h1>
              <PageImage path="/kidsortho/mft-training" alt="MFTトレーニング あいうべ体操とボタンプル" />
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>

              {/* Hero Image */}
              <div className="mt-8">
                <KidsOrthoImage
                  name="/images/kidsortho/training/mft-training-hero"
                  alt="MFTトレーニング - あいうべ体操とボタンプルで口腔機能を改善"
                  category="training"
                />
              </div>

              <p className="text-xl md:text-2xl mt-6 mb-6 text-[#5A4D41] font-medium">
                1日3分で口呼吸・歯並びを改善
              </p>
              <p className="text-[#8D8070] mt-3 font-sans">豊洲の矯正歯科が詳しく解説します</p>
              <p className="text-lg text-[#8D8070] leading-relaxed">
                口腔筋機能療法（MFT）の2大トレーニング。<br className="hidden md:block" />
                正しいやり方、効果が出る期間、注意点を詳しく解説します
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pt-8 pb-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-5xl">

            {/* 結論 */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif">
                結論
              </h2>
              <div className="space-y-4 text-[#5A4D41] leading-loose max-w-3xl mx-auto">
                <p>
                  <span className="font-bold bg-yellow-100">MFTは「装置だけ」では治らない小児矯正の根本治療</span>です。
                  舌の位置・口唇閉鎖力・正しい嚥下を身につけないと、必ず後戻りします。
                </p>
                <p>
                  <span className="text-[#C5A572] font-bold">あいうべ体操（舌の筋トレ）とボタンプル（口唇閉鎖力強化）</span>を
                  毎日3分続けることで、3〜6ヶ月で効果が現れます。
                </p>
                <p className="font-bold bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  当院では、<span className="text-[#C5A572]">MFTを必須</span>としています。
                  トレーニングなしで装置だけの治療は行いません。
                </p>
              </div>
            </div>

            {/* MFTとは */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">MFT（口腔筋機能療法）とは？</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <p>
                  MFT（Myofunctional Therapy）は、<span className="font-bold bg-yellow-100">口・舌・唇の筋肉を正しく使えるようにトレーニング</span>する療法です。
                  小児矯正では装置と併用することで、歯並びの改善と後戻り防止の両方を実現します。
                </p>

                <div className="space-y-4 mt-6">
                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                      舌の位置
                    </h4>
                    <p>正しい位置（スポット）に舌を置く習慣をつける</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                      口唇閉鎖力
                    </h4>
                    <p>口をしっかり閉じる筋肉を強化</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                      正しい嚥下
                    </h4>
                    <p>舌を使った正しい飲み込み方を習得</p>
                  </div>
                </div>

                <p className="mt-6 text-red-700">
                  <span className="font-bold">重要：</span>
                  MFTをしないと、装置で歯並びを治しても<span className="font-bold">必ず後戻り</span>します。
                  悪い舌癖・口呼吸が残っていると、歯は元の位置に戻ってしまいます。
                </p>
              </div>
            </div>

            {/* あいうべ体操 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">あいうべ体操（舌の筋トレ）</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              {/* Method Image */}
              <div className="mb-8">
                <KidsOrthoImage
                  name="/images/kidsortho/training/mft-training-method"
                  alt="あいうべ体操の正しいやり方 - 口腔筋機能療法の実践方法"
                  category="training"
                />
              </div>

              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <p>
                  福岡の今井一彰先生が開発した、<span className="font-bold bg-yellow-100">口呼吸を鼻呼吸に改善する体操</span>です。
                  舌の筋肉を鍛え、正しい位置（スポット）に舌を置けるようにします。
                </p>

                <div className="space-y-6">
                  {/* ステップ1 */}
                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                      「あー」と口を大きく開ける
                    </h4>
                    <p>
                      喉の奥が見えるくらい、<span className="font-bold bg-yellow-100">縦に大きく</span>開けます。
                      横に開けるのではなく、「あくびをするように」縦に開けるのがポイント。
                    </p>
                    <p className="text-sm mt-2"><span className="font-bold text-[#C5A572]">所要時間：</span>1秒キープ</p>
                  </div>

                  {/* ステップ2 */}
                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                      「いー」と口を横に引く
                    </h4>
                    <p>
                      <span className="font-bold bg-yellow-100">首の筋肉が浮き出るくらい</span>思い切り横に引きます。
                      頬の筋肉を意識して、笑顔を作るように。
                    </p>
                    <p className="text-sm mt-2"><span className="font-bold text-[#C5A572]">所要時間：</span>1秒キープ</p>
                  </div>

                  {/* ステップ3 */}
                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                      「うー」と口を前に突き出す
                    </h4>
                    <p>
                      <span className="font-bold bg-yellow-100">唇をタコのように尖らせて</span>、できるだけ前に突き出します。
                      唇周りの筋肉（口輪筋）を意識して。
                    </p>
                    <p className="text-sm mt-2"><span className="font-bold text-[#C5A572]">所要時間：</span>1秒キープ</p>
                  </div>

                  {/* ステップ4 */}
                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                      「べー」と舌を出す
                    </h4>
                    <p>
                      <span className="font-bold bg-yellow-100">舌を下方向に、できるだけ遠くまで</span>伸ばします。
                      舌の根元から出すイメージで、顎の下まで舌が届くように。
                    </p>
                    <p className="text-sm mt-2"><span className="font-bold text-[#C5A572]">所要時間：</span>1秒キープ</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    実施頻度・タイミング
                  </h4>
                  <p><span className="font-bold">回数：</span>1セット10回 × 1日3セット（朝・昼・夜）</p>
                  <p><span className="font-bold">タイミング：</span>食事の前、お風呂の中、寝る前など</p>
                  <p><span className="font-bold">所要時間：</span>1回あたり約1分</p>
                </div>
              </div>
            </div>

            {/* ボタンプル */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">ボタンプル（口唇閉鎖力強化）</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <p>
                  ボタンにヒモを通し、<span className="font-bold bg-yellow-100">唇だけでボタンを引っ張る</span>トレーニングです。
                  口唇閉鎖力を強化し、口呼吸を改善します。
                </p>

                <div className="space-y-6">
                  {/* 準備物 */}
                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">準備物</h4>
                    <p><span className="font-bold">大きめのボタン</span>（直径2〜3cm、穴が4つのもの）</p>
                    <p><span className="font-bold">デンタルフロス</span>（または丈夫な糸）60cm程度</p>
                  </div>

                  {/* ステップ1 */}
                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                      ボタンに糸を通す
                    </h4>
                    <p>
                      ボタンの穴に糸を通し、8の字になるように結びます。
                      両端を持って引っ張れる状態にします。
                    </p>
                  </div>

                  {/* ステップ2 */}
                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                      ボタンを唇と歯の間に挟む
                    </h4>
                    <p>
                      <span className="font-bold bg-yellow-100">歯で噛まず、唇だけ</span>でボタンを挟みます。
                      上唇と下唇でボタンをサンドするイメージ。
                    </p>
                    <p className="text-sm mt-2 text-red-700">
                      <span className="font-bold">注意：</span>
                      歯で噛んではダメ。唇の筋肉だけで保持します。
                    </p>
                  </div>

                  {/* ステップ3 */}
                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                      親が糸を引っ張る
                    </h4>
                    <p>
                      親が糸の両端を持ち、<span className="font-bold bg-yellow-100">ゆっくり前方に引っ張り</span>ます。
                      子どもは唇の力だけでボタンを保持し、取られないように頑張ります。
                    </p>
                    <p className="text-sm mt-2"><span className="font-bold text-[#C5A572]">所要時間：</span>10秒間キープ × 3回</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    実施頻度・タイミング
                  </h4>
                  <p><span className="font-bold">回数：</span>10秒 × 3回 × 1日2セット（朝・夜）</p>
                  <p><span className="font-bold">タイミング：</span>歯磨きの後、寝る前など</p>
                  <p><span className="font-bold">所要時間：</span>1回あたり約1分</p>
                </div>

                <p className="mt-4 text-sm">
                  <span className="font-bold">ポイント：</span>
                  最初は5秒から始め、徐々に時間を伸ばしていきます。
                  親が引っ張る力も、最初は弱く、慣れてきたら強くしていきましょう。
                </p>
              </div>
            </div>

            {/* 効果が出る期間 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">効果が出るまでの期間</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              {/* Effect Image */}
              <div className="mb-8">
                <KidsOrthoImage
                  name="/images/kidsortho/training/mft-training-effect"
                  alt="MFTトレーニングの効果 - 口腔機能の改善と歯並びへの影響"
                  category="training"
                />
              </div>

              <div className="space-y-6">
                {/* 1ヶ月 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    1ヶ月：舌の位置が意識できるように
                  </h4>
                  <p className="text-[#5A4D41] leading-loose">
                    「スポット（正しい舌の位置）」を意識できるようになります。
                    まだ無意識では元の位置に戻ってしまいます。
                  </p>
                </div>

                {/* 3ヶ月 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    3ヶ月：口呼吸が減ってくる
                  </h4>
                  <p className="text-[#5A4D41] leading-loose">
                    日中の口呼吸が減り、自然と口を閉じている時間が増えます。
                    寝ている時はまだ口が開いていることが多いです。
                  </p>
                </div>

                {/* 6ヶ月 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    6ヶ月：無意識でも正しい位置に（習慣化）
                  </h4>
                  <p className="text-[#5A4D41] leading-loose">
                    意識しなくても舌が正しい位置にあり、口を閉じているのが普通になります。
                    歯並びの改善も目に見えて実感できるようになります。
                  </p>
                </div>

                <p className="mt-6 text-[#5A4D41]">
                  <span className="font-bold">重要：</span>
                  効果が出ても、<span className="font-bold bg-yellow-100">最低1年は継続</span>してください。
                  途中でやめると、また元の悪い癖に戻ってしまいます。
                </p>
              </div>
            </div>

            {/* よくある質問 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">よくある質問</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                      <h4 className="font-bold text-[#5A4D41] text-lg">子どもが嫌がってやってくれません</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold bg-yellow-100">ご褒美シール作戦</span>が効果的です。
                      カレンダーにシールを貼って、「10個貯まったらご褒美」などのゲーム要素を取り入れましょう。
                      また、親も一緒にやることで、子どもも楽しく続けられます。
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                      <h4 className="font-bold text-[#5A4D41] text-lg">ボタンプルでボタンがすぐ取れてしまいます</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p>
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold bg-yellow-100">最初は5秒から始め</span>、
                      徐々に時間を伸ばしていきます。また、親が引っ張る力も最初は弱くしましょう。
                      取れてしまうのは、まだ口唇閉鎖力が弱い証拠です。焦らず続けることで、必ず強くなります。
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                      <h4 className="font-bold text-[#5A4D41] text-lg">装置をつけながらMFTをしてもいいですか？</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p>
                      <strong className="text-[#C5A572]">A.</strong> はい、<span className="font-bold bg-yellow-100">むしろ併用が理想</span>です。
                      装置で歯並びを整えながら、MFTで口腔機能を改善することで、
                      後戻りのリスクを大幅に減らせます。当院では必ず併用しています。
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 監修者情報 */}
        <section className="py-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 pt-2 pb-8">
            <AuthorBio />
          </div>
        </section>

        {/* CTA */}
        <section className="py-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#FDFBF7] to-[#FFF9F0] rounded-xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-4">MFTで根本から改善しましょう</h2>
                  <p className="text-lg md:text-xl text-[#8D8070] leading-loose font-sans">
                    豊洲で小児矯正をお考えなら、豊洲駅徒歩2分の当院へ。装置とMFTの併用で、後戻りしない矯正治療を
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#C5A572] hover:bg-[#B39562] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
                  >
                    無料相談を予約する
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
