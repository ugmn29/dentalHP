import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { KidsOrthoImage } from '@/components/KidsOrthoImage';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Home,
  ChevronRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'ガムトレーニング完全手順｜咬合力と顎の発達を促進｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: 'キシリトールガムを使った咬合力強化トレーニング。片側10回ずつ噛む正しいやり方、効果が出る期間、注意点を詳しく解説します。',
  keywords: 'ガムトレーニング,咬合力,顎の発達,小児矯正,キシリトールガム',
};

export default function GumTrainingPage() {
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
              <span className="text-[#C5A572] font-bold">ガムトレーニング</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                ガムトレーニング完全手順
              </h1>
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>

              {/* Hero Image */}
              <div className="mt-8">
                <KidsOrthoImage
                  name="/images/kidsortho/training/gum-training-hero"
                  alt="ガムトレーニング - キシリトールガムで咬合力と顎の発達を促進"
                  category="training"
                />
              </div>

              <p className="text-xl md:text-2xl mt-6 mb-6 text-[#5A4D41] font-medium font-sans">
                咬合力と顎の発達を促進
              </p>
              <p className="text-lg text-[#8D8070] leading-relaxed font-sans">
                キシリトールガムを使った咬合力強化トレーニング。<br className="hidden md:block" />
                片側10回ずつ噛む正しいやり方を詳しく解説します
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
                  <span className="font-bold bg-yellow-100">ガムトレーニングは顎の発達不足による叢生（デコボコ）の予防・改善に有効</span>です。
                  片側10回ずつバランスよく噛むことで、咬合力が強化され、顎が正しく成長します。
                </p>
                <p>
                  <span className="text-[#C5A572] font-bold">キシリトール100%のガムを使い、毎食後5分間</span>実施することで、
                  3〜6ヶ月で顎の幅が広がり、歯が並ぶスペースが確保されます。
                </p>
                <p className="font-bold bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  ただし、<span className="text-red-600">受け口・骨格型の不正咬合には効果がありません</span>。
                  適応症例を見極めることが重要です。
                </p>
              </div>
            </div>

            {/* ガムトレーニングとは */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">ガムトレーニングとは？</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <p>
                  ガムトレーニングは、<span className="font-bold bg-yellow-100">左右均等に噛む習慣をつけ、咬筋・側頭筋を鍛える</span>トレーニングです。
                  現代の子どもは柔らかい食べ物ばかり食べているため、顎が発達せず、歯が並ぶスペースが不足しています。
                </p>

                <div className="space-y-4 mt-6">
                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                      咬合力の強化
                    </h4>
                    <p>咬筋・側頭筋を鍛えて噛む力を向上</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                      顎の発達促進
                    </h4>
                    <p>顎骨の成長を促し、歯が並ぶスペースを確保</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                      左右バランス改善
                    </h4>
                    <p>片噛み癖を直し、均等な発達を促進</p>
                  </div>
                </div>

                <p className="mt-6">
                  <span className="font-bold">重要：</span>
                  ガムトレーニングは<span className="font-bold">予防・軽度の叢生改善</span>には有効ですが、
                  重度の不正咬合や骨格型の問題には効果がありません。必ず歯科医師の診断を受けてください。
                </p>
              </div>
            </div>

            {/* ガムトレーニングの手順 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">ガムトレーニングの正しい手順</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              {/* Method Image */}
              <div className="mb-8">
                <KidsOrthoImage
                  name="/images/kidsortho/training/gum-training-method"
                  alt="ガムトレーニングの正しいやり方 - 片側10回ずつバランスよく噛む"
                  category="training"
                />
              </div>

              <div className="space-y-6 text-[#5A4D41] leading-loose">
                  {/* ステップ1 */}
                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                      キシリトール100%のガムを用意
                    </h4>
                    <p>
                      <span className="font-bold bg-yellow-100">キシリトール100%</span>のガムを選びます。
                      砂糖入りのガムは虫歯の原因になるため避けましょう。
                    </p>
                    <p className="text-sm mt-2">
                      <span className="font-bold text-[#C5A572]">推奨商品：</span>
                      ロッテ「キシリトールガム」、江崎グリコ「ポスカ・エフ」など
                    </p>
                  </div>

                  {/* ステップ2 */}
                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                      右奥歯で10回噛む
                    </h4>
                    <p>
                      ガムを<span className="font-bold bg-yellow-100">右側の奥歯（第一大臼歯）</span>に置き、
                      ゆっくり10回噛みます。前歯で噛まないように注意。
                    </p>
                    <p className="text-sm mt-2 text-red-700">
                      <span className="font-bold">注意：</span>
                      早く噛まず、1回1回しっかり奥歯で噛み締める
                    </p>
                  </div>

                  {/* ステップ3 */}
                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                      左奥歯で10回噛む
                    </h4>
                    <p>
                      ガムを<span className="font-bold bg-yellow-100">左側の奥歯</span>に移動させ、
                      同様に10回噛みます。左右均等に噛むことが最も重要です。
                    </p>
                    <p className="text-sm mt-2">
                      <span className="font-bold text-[#C5A572]">ポイント：</span>
                      子どもが「右10回、左10回」と数えながら噛むと習慣化しやすい
                    </p>
                  </div>

                  {/* ステップ4 */}
                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                      2〜3セット繰り返す
                    </h4>
                    <p>
                      右10回→左10回を<span className="font-bold bg-yellow-100">2〜3セット</span>繰り返します。
                      合計5分程度が目安です。
                    </p>
                    <p className="text-sm mt-2"><span className="font-bold text-[#C5A572]">所要時間：</span>1回あたり約5分</p>
                  </div>

                  {/* ステップ5 */}
                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                      ガムを捨てる
                    </h4>
                    <p>
                      5分経ったら、ガムをティッシュに包んで捨てます。
                      <span className="font-bold bg-yellow-100">飲み込まないように</span>注意してください。
                    </p>
                    <p className="text-sm mt-2 text-red-700">
                      <span className="font-bold">注意：</span>
                      5歳未満の子どもはガムを飲み込むリスクがあるため避けましょう
                    </p>
                  </div>

                <div className="mt-6">
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    実施頻度・タイミング
                  </h4>
                  <p><span className="font-bold">回数：</span>1日3回（毎食後）</p>
                  <p><span className="font-bold">タイミング：</span>食事の直後、歯磨きの前</p>
                  <p><span className="font-bold">所要時間：</span>1回あたり約5分</p>
                </div>
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
                  name="/images/kidsortho/training/gum-training-effect"
                  alt="ガムトレーニングの効果 - 咬合力の向上と顎の発達"
                  category="training"
                />
              </div>

              <div className="space-y-6 text-[#5A4D41] leading-loose">
                {/* 1ヶ月 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    1ヶ月：噛む力が強くなる
                  </h4>
                  <p>
                    咬筋が鍛えられ、硬いものを噛めるようになります。
                    「せんべいが噛める」「りんごを丸かじりできる」など、変化が見えてきます。
                  </p>
                </div>

                {/* 3ヶ月 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    3ヶ月：顎の幅が広がり始める
                  </h4>
                  <p>
                    歯科医院でレントゲンを撮ると、顎の骨が横方向に成長していることが確認できます。
                    歯が並ぶスペースが少しずつ確保されます。
                  </p>
                </div>

                {/* 6ヶ月 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-[#C5A572]">
                    6ヶ月：歯並びの改善が実感できる
                  </h4>
                  <p>
                    軽度の叢生（デコボコ）であれば、歯が自然に並び始めます。
                    ただし、重度の場合は装置との併用が必要です。
                  </p>
                </div>

                <p className="mt-6">
                  <span className="font-bold">重要：</span>
                  効果が出ても、<span className="font-bold bg-yellow-100">最低1年は継続</span>してください。
                  途中でやめると、顎の成長が止まり、効果が半減します。
                </p>
              </div>
            </div>

            {/* 注意点 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">ガムトレーニングの注意点</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6 text-[#5A4D41] leading-loose">
                {/* 注意点1 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    5歳未満の子どもは避ける
                  </h4>
                  <p>
                    ガムを飲み込むリスクがあるため、5歳未満の子どもにはガムトレーニングを推奨しません。
                    代わりに「硬い食べ物を前歯で噛みちぎる」練習をしましょう。
                  </p>
                </div>

                {/* 注意点2 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    砂糖入りガムは絶対に使わない
                  </h4>
                  <p>
                    砂糖入りのガムは虫歯の原因になります。
                    必ず<span className="font-bold bg-yellow-100">キシリトール100%</span>のガムを使用してください。
                  </p>
                </div>

                {/* 注意点3 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    顎関節症のリスク
                  </h4>
                  <p>
                    やりすぎると顎関節症（顎の痛み・カクカク音）のリスクがあります。
                    1日3回、1回5分を守り、痛みが出たらすぐに中止してください。
                  </p>
                </div>
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
                      <h4 className="font-bold text-[#5A4D41] text-lg">受け口にも効果がありますか？</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold text-red-600">効果はありません</span>。
                      受け口（骨格型反対咬合）は顎の骨の位置異常なので、ガムトレーニングでは治せません。
                      プレオルソの装置または生活習慣の改善が必要です。
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                      <h4 className="font-bold text-[#5A4D41] text-lg">どのくらいの硬さのガムがいいですか？</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p>
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold bg-yellow-100">最初は柔らかめ、慣れたら硬め</span>に変えていきます。
                      「ロッテ キシリトールガム」（柔らかめ）から始めて、
                      慣れたら「歯科専売キシリトールガム（硬め）」に変えると効果的です。
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                      <h4 className="font-bold text-[#5A4D41] text-lg">装置をつけながらガムを噛んでもいいですか？</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p>
                      <strong className="text-[#C5A572]">A.</strong> 装置の種類によります。
                      <span className="font-bold bg-yellow-100">取り外し式の装置（プレオルソ・ムーシールドなど）は外してから噛む</span>ことができます。
                      固定式の装置（拡大床など）は装置にガムがくっつくため避けてください。
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
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-4">ガムトレーニングで顎の発達を促進</h2>
                  <p className="text-lg md:text-xl text-[#8D8070] leading-loose font-sans">
                    装置とトレーニングの併用で、効果的な矯正治療を
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
