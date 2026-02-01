import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Home,
  ChevronRight,
  TrendingDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: '受け口は自然に治る？確率14%の真実｜F歯科・矯正歯科',
  description: '「放置して治った」はレアケース。自然治癒率14%のエビデンスと、3歳から始める早期治療（ムーシールド・プレオルソ）を詳しく解説します。',
  keywords: '受け口,自然治癒,反対咬合,ムーシールド,プレオルソ,小児矯正,早期治療',
};

export default function UnderbiteNaturalCurePage() {
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
              <span className="text-[#E67A2E]">受け口は自然に治る？</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                受け口は自然に治る？<br />確率14%の真実
              </h1>
              <div className="w-24 h-1 bg-[#E67A2E] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                「放置して治った」はレアケース
              </p>
              <p className="text-lg text-[#8D8070] leading-relaxed">
                自然治癒率14%のエビデンスと、<br className="hidden md:block" />
                3歳から始める早期治療を詳しく解説します
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
                  <span className="font-bold bg-yellow-100">受け口（反対咬合）が自然に治る確率はわずか14%</span>です。
                  「様子を見ましょう」と言われても、86%は治らず悪化します。
                </p>
                <p>
                  <span className="text-[#E67A2E] font-bold">3歳からの早期治療（ムーシールド・プレオルソ）</span>なら、
                  成功率85%以上で改善が可能です。
                </p>
                <p className="font-bold bg-white p-6 rounded-2xl shadow-sm border border-[#E67A2E]/10">
                  6歳以降では骨格型に移行し、<span className="text-red-600">外科的矯正（手術）</span>が必要になるケースが急増します。
                </p>
              </div>
            </div>

            {/* 自然治癒率のデータ */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">自然治癒率のエビデンス</h3>
                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E67A2E]/10 mb-6">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-4 bg-red-50 px-8 py-4 rounded-full border-2 border-red-200">
                    <TrendingDown className="w-8 h-8 text-red-600" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">自然治癒率</p>
                      <p className="text-5xl font-bold text-red-600">14%</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    出典: 日本矯正歯科学会（2018年）3〜6歳児の追跡調査（n=342）
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
                    <h4 className="font-bold text-red-700 mb-3 text-lg">治らない（86%）</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">×</span>
                        <span>そのまま骨格型反対咬合に移行（72%）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">×</span>
                        <span>永久歯が生えて悪化（14%）</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                    <h4 className="font-bold text-green-700 mb-3 text-lg">自然に治る（14%）</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>機能性反対咬合のみ（歯の傾斜が原因）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>骨格的な問題がない場合に限る</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-yellow-700">重要：</span>
                  「様子を見ましょう」と言われても、実際には<span className="font-bold">定期的な経過観察（3〜6ヶ月ごと）</span>が必須です。
                  放置すると手遅れになるリスクが非常に高いです。
                </p>
              </div>
            </div>

            {/* 骨格型 vs 機能性 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">骨格型 vs 機能性の違い</h3>
                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E67A2E]/10 mb-6">
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="font-bold text-[#5A4D41]">タイプ</div>
                  <div className="font-bold text-red-600 text-center">骨格型反対咬合</div>
                  <div className="font-bold text-green-600 text-center">機能性反対咬合</div>
                </div>

                <div className="space-y-4">
                  {/* 原因 */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                    <div className="font-semibold text-[#5A4D41]">原因</div>
                    <div className="text-center text-sm">
                      下顎の骨が前方に成長しすぎ
                    </div>
                    <div className="text-center text-sm">
                      歯の傾斜や噛み合わせの悪習癖
                    </div>
                  </div>

                  {/* 自然治癒 */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-white rounded-xl">
                    <div className="font-semibold text-[#5A4D41]">自然治癒</div>
                    <div className="text-center">
                      <span className="text-red-600 font-bold">ほぼ不可能（0〜5%）</span>
                    </div>
                    <div className="text-center">
                      <span className="text-green-600 font-bold">可能性あり（14%）</span>
                    </div>
                  </div>

                  {/* 治療開始時期 */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                    <div className="font-semibold text-[#5A4D41]">治療開始時期</div>
                    <div className="text-center">
                      <span className="text-[#E67A2E] font-bold text-lg">3〜5歳</span>
                      <p className="text-xs text-gray-600 mt-1">（早ければ早いほど良い）</p>
                    </div>
                    <div className="text-center">
                      <span className="text-[#E67A2E] font-bold text-lg">6歳前後</span>
                      <p className="text-xs text-gray-600 mt-1">（永久歯萌出後）</p>
                    </div>
                  </div>

                  {/* 放置した場合 */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-white rounded-xl">
                    <div className="font-semibold text-[#5A4D41]">放置した場合</div>
                    <div className="text-center text-red-600 font-bold">外科的矯正（手術）が必要</div>
                    <div className="text-center text-orange-600 font-bold">骨格型に移行する可能性</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 早期治療の効果 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">3歳からの早期治療</h3>
                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* ムーシールド */}
                <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-[#E67A2E]/20">
                  <h4 className="text-xl font-bold text-[#E67A2E] mb-4">ムーシールド</h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">3〜5歳に最適</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">就寝時のみ装着（8時間）</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">成功率<span className="font-bold text-[#E67A2E]">85%以上</span></p>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold text-[#E67A2E]">費用：</span>10〜15万円程度
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      <span className="font-bold text-[#E67A2E]">期間：</span>6ヶ月〜1年
                    </p>
                  </div>
                </div>

                {/* プレオルソ */}
                <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-[#E67A2E]/20">
                  <h4 className="text-xl font-bold text-[#E67A2E] mb-4">プレオルソ</h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">4〜9歳に適応</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">日中2時間+就寝時</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">口腔筋機能も改善</p>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold text-[#E67A2E]">費用：</span>8〜12万円程度
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      <span className="font-bold text-[#E67A2E]">期間：</span>1〜2年
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  早期治療のメリット
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>外科的矯正（手術）を回避できる</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>痛みがほとんどない</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>費用が安い（10〜15万円 vs 手術200〜300万円）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>心理的負担が少ない</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 手遅れになるとどうなる？ */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">6歳以降に放置すると...</h3>
                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
              </div>

              <div className="bg-red-50 p-8 rounded-2xl border-2 border-red-200 mb-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-red-700 mb-2 text-lg">骨格型に移行（不可逆的）</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        下顎骨の過成長が固定化し、<span className="font-bold text-red-600">装置だけでは治せなく</span>なります。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-red-700 mb-2 text-lg">外科的矯正治療が必要</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">
                        顎の骨を切断して位置を調整する<span className="font-bold text-red-600">手術</span>が必要になります。
                      </p>
                      <div className="bg-white p-3 rounded-lg">
                        <p className="text-xs text-gray-700">
                          <span className="font-bold text-red-700">費用：</span>200〜300万円（保険適用でも約30万円）
                        </p>
                        <p className="text-xs text-gray-700 mt-1">
                          <span className="font-bold text-red-700">入院：</span>約2週間
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-red-700 mb-2 text-lg">顔貌への影響</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        「しゃくれ」が目立ち、思春期の<span className="font-bold text-red-600">自己肯定感の低下</span>やいじめのリスクが高まります。
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
                      <h4 className="font-bold text-[#5A4D41] text-lg">うちの子は自然に治る14%に入る可能性はありますか？</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#E67A2E]">A.</strong> レントゲン検査で判断できます。機能性反対咬合（歯の傾斜のみ）であれば自然治癒の可能性がありますが、
                      骨格型の場合はほぼ0%です。ただし、<span className="font-bold bg-yellow-100">「様子を見る」のは非常にリスクが高い</span>ため、
                      当院では3歳時点での早期治療をおすすめしています。
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                      <h4 className="font-bold text-[#5A4D41] text-lg">3歳では早すぎませんか？</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p>
                      <strong className="text-[#E67A2E]">A.</strong> むしろ<span className="font-bold bg-yellow-100">3歳がベストタイミング</span>です。
                      骨格型反対咬合は3歳から治療を開始することで成功率85%以上を達成できます。
                      6歳以降では骨格が固まり、治療が難しくなります。
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                      <h4 className="font-bold text-[#5A4D41] text-lg">装置を嫌がらないか心配です</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p>
                      <strong className="text-[#E67A2E]">A.</strong> ムーシールドは<span className="font-bold bg-yellow-100">就寝時のみの装着</span>なので、
                      日中は何もつけません。最初の2〜3日は違和感がありますが、ほとんどのお子さまは1週間以内に慣れます。
                      当院ではご褒美シールなどでモチベーションをサポートしています。
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
                お子さまの受け口、今すぐ相談を
              </h2>
              <p className="text-xl mb-8 text-white/90">
                3歳からの早期治療で、手術を回避できる可能性が高まります
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
