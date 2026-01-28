import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Home,
  ChevronRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'ガムトレーニング完全手順｜咬合力と顎の発達を促進｜F歯科・矯正歯科',
  description: 'キシリトールガムを使った咬合力強化トレーニング。片側10回ずつ噛む正しいやり方、効果が出る期間、注意点を詳しく解説します。',
  keywords: 'ガムトレーニング,咬合力,顎の発達,小児矯正,キシリトールガム',
};

export default function GumTrainingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF7]">
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
              <span className="text-[#E67A2E]">ガムトレーニング</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-2 md:py-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                ガムトレーニング完全手順
              </h1>
              <div className="w-24 h-1 bg-[#E67A2E] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                咬合力と顎の発達を促進
              </p>
              <p className="text-lg text-[#8D8070] leading-relaxed">
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
                  <span className="text-[#E67A2E] font-bold">キシリトール100%のガムを使い、毎食後5分間</span>実施することで、
                  3〜6ヶ月で顎の幅が広がり、歯が並ぶスペースが確保されます。
                </p>
                <p className="font-bold bg-white p-6 rounded-2xl shadow-sm border border-[#E67A2E]/10">
                  ただし、<span className="text-red-600">受け口・骨格型の不正咬合には効果がありません</span>。
                  適応症例を見極めることが重要です。
                </p>
              </div>
            </div>

            {/* ガムトレーニングとは */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">ガムトレーニングとは？</h3>
                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E67A2E]/10 mb-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  ガムトレーニングは、<span className="font-bold bg-yellow-100">左右均等に噛む習慣をつけ、咬筋・側頭筋を鍛える</span>トレーニングです。
                  現代の子どもは柔らかい食べ物ばかり食べているため、顎が発達せず、歯が並ぶスペースが不足しています。
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-orange-50 p-6 rounded-xl border border-[#E67A2E]/20">
                    <h4 className="font-bold text-[#E67A2E] mb-3 text-center">咬合力の強化</h4>
                    <p className="text-sm text-gray-700 text-center">
                      咬筋・側頭筋を鍛えて噛む力を向上
                    </p>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-xl border border-[#E67A2E]/20">
                    <h4 className="font-bold text-[#E67A2E] mb-3 text-center">顎の発達促進</h4>
                    <p className="text-sm text-gray-700 text-center">
                      顎骨の成長を促し、歯が並ぶスペースを確保
                    </p>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-xl border border-[#E67A2E]/20">
                    <h4 className="font-bold text-[#E67A2E] mb-3 text-center">左右バランス改善</h4>
                    <p className="text-sm text-gray-700 text-center">
                      片噛み癖を直し、均等な発達を促進
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-yellow-700">重要：</span>
                  ガムトレーニングは<span className="font-bold">予防・軽度の叢生改善</span>には有効ですが、
                  重度の不正咬合や骨格型の問題には効果がありません。必ず歯科医師の診断を受けてください。
                </p>
              </div>
            </div>

            {/* ガムトレーニングの手順 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">ガムトレーニングの正しい手順</h3>
                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E67A2E]/10 mb-6">
                <div className="space-y-6">
                  {/* ステップ1 */}
                  <div className="flex items-start gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#E67A2E] mb-2 text-lg">キシリトール100%のガムを用意</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">
                        <span className="font-bold bg-yellow-100">キシリトール100%</span>のガムを選びます。
                        砂糖入りのガムは虫歯の原因になるため避けましょう。
                      </p>
                      <div className="bg-white p-3 rounded-lg">
                        <p className="text-xs text-gray-700">
                          <span className="font-bold text-[#E67A2E]">推奨商品：</span>
                          ロッテ「キシリトールガム」、江崎グリコ「ポスカ・エフ」など
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ステップ2 */}
                  <div className="flex items-start gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#E67A2E] mb-2 text-lg">右奥歯で10回噛む</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">
                        ガムを<span className="font-bold bg-yellow-100">右側の奥歯（第一大臼歯）</span>に置き、
                        ゆっくり10回噛みます。前歯で噛まないように注意。
                      </p>
                      <div className="bg-white p-3 rounded-lg">
                        <p className="text-xs text-gray-700">
                          <span className="font-bold text-red-700">注意：</span>
                          早く噛まず、1回1回しっかり奥歯で噛み締める
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ステップ3 */}
                  <div className="flex items-start gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#E67A2E] mb-2 text-lg">左奥歯で10回噛む</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">
                        ガムを<span className="font-bold bg-yellow-100">左側の奥歯</span>に移動させ、
                        同様に10回噛みます。左右均等に噛むことが最も重要です。
                      </p>
                      <div className="bg-white p-3 rounded-lg">
                        <p className="text-xs text-gray-700">
                          <span className="font-bold text-[#E67A2E]">ポイント：</span>
                          子どもが「右10回、左10回」と数えながら噛むと習慣化しやすい
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ステップ4 */}
                  <div className="flex items-start gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#E67A2E] mb-2 text-lg">2〜3セット繰り返す</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">
                        右10回→左10回を<span className="font-bold bg-yellow-100">2〜3セット</span>繰り返します。
                        合計5分程度が目安です。
                      </p>
                      <div className="bg-white p-3 rounded-lg">
                        <p className="text-xs text-gray-700">
                          <span className="font-bold text-[#E67A2E]">所要時間：</span>
                          1回あたり約5分
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ステップ5 */}
                  <div className="flex items-start gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#E67A2E] mb-2 text-lg">ガムを捨てる</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">
                        5分経ったら、ガムをティッシュに包んで捨てます。
                        <span className="font-bold bg-yellow-100">飲み込まないように</span>注意してください。
                      </p>
                      <div className="bg-white p-3 rounded-lg">
                        <p className="text-xs text-gray-700">
                          <span className="font-bold text-red-700">注意：</span>
                          5歳未満の子どもはガムを飲み込むリスクがあるため避けましょう
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-green-50 p-6 rounded-xl border-2 border-green-200">
                  <h4 className="font-bold text-green-800 mb-3">実施頻度・タイミング</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><span className="font-bold">回数：</span>1日3回（毎食後）</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><span className="font-bold">タイミング：</span>食事の直後、歯磨きの前</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><span className="font-bold">所要時間：</span>1回あたり約5分</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 効果が出る期間 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">効果が出るまでの期間</h3>
                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E67A2E]/10">
                <div className="space-y-6">
                  {/* 1ヶ月 */}
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-[#E67A2E]">1</p>
                        <p className="text-xs text-gray-600">ヶ月</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-2 text-lg">噛む力が強くなる</h4>
                      <p className="text-sm text-gray-700">
                        咬筋が鍛えられ、硬いものを噛めるようになります。
                        「せんべいが噛める」「りんごを丸かじりできる」など、変化が見えてきます。
                      </p>
                    </div>
                  </div>

                  {/* 3ヶ月 */}
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-[#E67A2E]">3</p>
                        <p className="text-xs text-gray-600">ヶ月</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-2 text-lg">顎の幅が広がり始める</h4>
                      <p className="text-sm text-gray-700">
                        歯科医院でレントゲンを撮ると、顎の骨が横方向に成長していることが確認できます。
                        歯が並ぶスペースが少しずつ確保されます。
                      </p>
                    </div>
                  </div>

                  {/* 6ヶ月 */}
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-[#E67A2E] rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">6</p>
                        <p className="text-xs text-white">ヶ月</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-2 text-lg">歯並びの改善が実感できる</h4>
                      <p className="text-sm text-gray-700">
                        軽度の叢生（デコボコ）であれば、歯が自然に並び始めます。
                        ただし、重度の場合は装置との併用が必要です。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-green-700">重要：</span>
                    効果が出ても、<span className="font-bold bg-yellow-100">最低1年は継続</span>してください。
                    途中でやめると、顎の成長が止まり、効果が半減します。
                  </p>
                </div>
              </div>
            </div>

            {/* 注意点 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">ガムトレーニングの注意点</h3>
                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                {/* 注意点1 */}
                <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-bold text-red-700 mb-2 text-lg">5歳未満の子どもは避ける</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        ガムを飲み込むリスクがあるため、5歳未満の子どもにはガムトレーニングを推奨しません。
                        代わりに「硬い食べ物を前歯で噛みちぎる」練習をしましょう。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 注意点2 */}
                <div className="bg-yellow-50 p-6 rounded-2xl border-2 border-yellow-200">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-bold text-yellow-700 mb-2 text-lg">砂糖入りガムは絶対に使わない</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        砂糖入りのガムは虫歯の原因になります。
                        必ず<span className="font-bold bg-yellow-100">キシリトール100%</span>のガムを使用してください。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 注意点3 */}
                <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-bold text-blue-700 mb-2 text-lg">顎関節症のリスク</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        やりすぎると顎関節症（顎の痛み・カクカク音）のリスクがあります。
                        1日3回、1回5分を守り、痛みが出たらすぐに中止してください。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* よくある質問 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">よくある質問</h3>
                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                      <h4 className="font-bold text-[#5A4D41] text-lg">受け口にも効果がありますか？</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#E67A2E]">A.</strong> <span className="font-bold text-red-600">効果はありません</span>。
                      受け口（骨格型反対咬合）は顎の骨の位置異常なので、ガムトレーニングでは治せません。
                      ムーシールドやプレオルソなどの装置が必要です。
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                      <h4 className="font-bold text-[#5A4D41] text-lg">どのくらいの硬さのガムがいいですか？</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p>
                      <strong className="text-[#E67A2E]">A.</strong> <span className="font-bold bg-yellow-100">最初は柔らかめ、慣れたら硬め</span>に変えていきます。
                      「ロッテ キシリトールガム」（柔らかめ）から始めて、
                      慣れたら「歯科専売キシリトールガム（硬め）」に変えると効果的です。
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                      <h4 className="font-bold text-[#5A4D41] text-lg">装置をつけながらガムを噛んでもいいですか？</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p>
                      <strong className="text-[#E67A2E]">A.</strong> 装置の種類によります。
                      <span className="font-bold bg-yellow-100">取り外し式の装置（プレオルソ・ムーシールドなど）は外してから噛む</span>ことができます。
                      固定式の装置（拡大床など）は装置にガムがくっつくため避けてください。
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-2 bg-gradient-to-r from-[#E67A2E] to-[#D66A28] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                ガムトレーニングで顎の発達を促進
              </h2>
              <p className="text-xl mb-8 text-white/90">
                装置とトレーニングの併用で、効果的な矯正治療を
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
      </main>
      <Footer />
    </>
  );
}
