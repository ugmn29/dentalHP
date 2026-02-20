import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import {
  CheckCircle2,
  ArrowRight,
  Home,
  ChevronRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'インプラントオーバーデンチャー｜入れ歯の悩みを解決｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: 'インプラントで入れ歯を固定するオーバーデンチャー。通常の入れ歯よりも安定性が高く、しっかり噛めて、取り外しも可能。全歯を失った方に最適な治療法です。',
  keywords: 'インプラントオーバーデンチャー,入れ歯,総入れ歯,インプラント,ロケーター,ボールアタッチメント',
  openGraph: {
    title: 'インプラントオーバーデンチャー｜入れ歯の悩みを解決｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: 'インプラントで入れ歯を固定するオーバーデンチャー。通常の入れ歯より安定性が高く、しっかり噛めて取り外しも可能。全歯を失った方に最適。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/implant/overdenture',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function OverdenturePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF7]">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#395b45] flex items-center">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/implant" className="hover:text-[#395b45]">
                インプラント
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#395b45]">オーバーデンチャー</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d4835] font-serif">
                インプラントオーバーデンチャー
              </h1>
              <div className="w-24 h-1 bg-[#395b45] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#2d4835] font-medium">
                インプラントで入れ歯をしっかり固定
              </p>
              <p className="text-lg text-[#5A4D41] leading-relaxed">
                取り外し可能で、通常の入れ歯よりも安定性の高い治療法
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pt-8 pb-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-5xl" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>

            {/* 結論 */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d4835] mb-8 font-serif">
                結論
              </h2>
              <div className="space-y-4 text-[#5A4D41] leading-loose max-w-3xl mx-auto">
                <p>
                  インプラントオーバーデンチャーとは、<span className="bg-yellow-100 font-bold">2〜4本のインプラントで入れ歯を固定する治療法</span>です。
                </p>
                <p>
                  通常の入れ歯と比べて<span className="text-[#395b45] font-bold">ずれたり外れたりすることが少なく、しっかりと噛める</span>上に、<span className="text-[#395b45] font-bold">取り外しができるのでお手入れが簡単</span>です。
                </p>
              </div>
            </div>

            {/* インプラントオーバーデンチャーとは */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">インプラントオーバーデンチャーとは</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 mb-8">
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    すべての歯を失った方（総入れ歯）や、多くの歯を失った方（部分入れ歯）に対して、<span className="bg-yellow-100 font-bold">少数のインプラントを土台にして入れ歯を安定させる</span>治療法です。
                  </p>
                  <p>
                    インプラントと入れ歯を特殊なアタッチメント（連結装置）で固定するため、通常の入れ歯のように動いたり外れたりすることがほとんどありません。
                  </p>
                </div>
              </div>

              {/* 固定式インプラントとの比較 */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 md:p-8 border border-blue-200">
                <h4 className="text-lg font-bold text-[#2d4835] mb-4">固定式インプラント（オールオン4）との違い</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-[#2d4835] mb-2">オールオン4（固定式）</p>
                    <ul className="text-sm space-y-1 text-[#5A4D41]">
                      <li>• 取り外しできない</li>
                      <li>• 天然歯に最も近い感覚</li>
                      <li>• インプラント本数：4〜6本</li>
                      <li>• 費用：高額</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                    <p className="font-bold text-[#2d4835] mb-2">オーバーデンチャー（取り外し式）</p>
                    <ul className="text-sm space-y-1 text-[#5A4D41]">
                      <li>• 取り外し可能</li>
                      <li>• お手入れが簡単</li>
                      <li>• インプラント本数：2〜4本</li>
                      <li>• 費用：比較的抑えられる</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* メリット */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">オーバーデンチャーのメリット</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">① 通常の入れ歯より安定性が高い</h4>
                  </div>
                  <p className="text-[#5A4D41] leading-loose ml-9">
                    インプラントでしっかり固定されるため、<span className="bg-yellow-100 font-bold">食事中にずれたり外れたりする心配がほとんどありません</span>。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">② しっかり噛める</h4>
                  </div>
                  <p className="text-[#5A4D41] leading-loose ml-9">
                    通常の総入れ歯の<span className="bg-yellow-100 font-bold">2〜3倍の噛む力</span>を発揮できます。硬い食べ物も安心して食べられます。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">③ 取り外しができる</h4>
                  </div>
                  <p className="text-[#5A4D41] leading-loose ml-9">
                    就寝時や清掃時に<span className="font-bold">取り外して洗える</span>ため、衛生的です。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">④ インプラント本数が少ない</h4>
                  </div>
                  <p className="text-[#5A4D41] leading-loose ml-9">
                    <span className="bg-yellow-100 font-bold">2〜4本のインプラント</span>で治療できるため、手術の負担と費用を抑えられます。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">⑤ 発音しやすい</h4>
                  </div>
                  <p className="text-[#5A4D41] leading-loose ml-9">
                    入れ歯が動かないため、<span className="font-bold">会話がしやすく</span>なります。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">⑥ 骨吸収を抑えられる</h4>
                  </div>
                  <p className="text-[#5A4D41] leading-loose ml-9">
                    インプラントが骨に刺激を与え続けるため、<span className="font-bold">顎の骨の吸収を防ぐ</span>ことができます。
                  </p>
                </div>
              </div>
            </div>

            {/* アタッチメントの種類 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">アタッチメントの種類</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="space-y-12">
                {/* ボールアタッチメント */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    ボールアタッチメント
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      インプラントの頭に<span className="bg-yellow-100 font-bold">ボール状の突起</span>を付け、入れ歯側のゴムのリングで挟んで固定する方式です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">特徴：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span>着脱が簡単</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span>比較的費用が抑えられる</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span>定期的にゴムの交換が必要</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ロケーターアタッチメント */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    ロケーターアタッチメント
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      インプラントと入れ歯を<span className="bg-yellow-100 font-bold">精密なスナップ式で固定</span>する方式です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">特徴：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span>保持力が強く安定性が高い</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span>横揺れに強い構造</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span>コンパクトで目立ちにくい</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span>ボールアタッチメントより高額</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                      <p className="text-sm">
                        <strong>当院の推奨：</strong>ロケーターアタッチメントは安定性と耐久性に優れているため、当院では主にこちらを推奨しています。
                      </p>
                    </div>
                  </div>
                </div>

                {/* バーアタッチメント */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    バーアタッチメント
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      複数のインプラントを<span className="bg-yellow-100 font-bold">バー（棒）で連結</span>し、入れ歯をクリップで固定する方式です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">特徴：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span>最も安定性が高い</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span>複数のインプラントで力を分散</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span>費用が最も高額</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 適応 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">こんな方におすすめ</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <ul className="space-y-3 text-[#5A4D41]">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>総入れ歯が動いてしっかり噛めない</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>入れ歯が外れやすくて困っている</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>入れ歯安定剤を使いたくない</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>固定式インプラントは費用が高い</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>取り外してお手入れしたい</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>多くのインプラントを埋めたくない</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="font-bold text-[#2d4835] mb-4">治療期間の目安</h4>
                  <div className="space-y-3 text-sm text-[#5A4D41]">
                    <p><strong>下顎：</strong>約3〜4ヶ月</p>
                    <p><strong>上顎：</strong>約4〜6ヶ月</p>
                    <div className="mt-4 p-3 bg-white rounded-lg">
                      <p className="text-xs">※ 骨の状態により個人差があります</p>
                    </div>
                  </div>
                  <h4 className="font-bold text-[#2d4835] mt-6 mb-4">インプラント本数の目安</h4>
                  <div className="space-y-3 text-sm text-[#5A4D41]">
                    <p><strong>下顎：</strong>2〜4本</p>
                    <p><strong>上顎：</strong>4本</p>
                    <div className="mt-4 p-3 bg-white rounded-lg">
                      <p className="text-xs">※ 下顎の方が骨が硬いため、少ない本数でも安定します</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* お手入れ方法 */}
            <div className="mb-16 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-[#2d4835] mb-6 text-center">お手入れ方法</h3>
              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <div>
                  <p className="font-bold mb-2">毎日のケア：</p>
                  <ol className="ml-6 space-y-2 list-decimal">
                    <li>入れ歯を外して、流水で洗浄</li>
                    <li>入れ歯用ブラシで汚れを落とす</li>
                    <li>インプラント部分を柔らかいブラシで清掃</li>
                    <li>歯間ブラシで細部を清掃</li>
                  </ol>
                </div>
                <div>
                  <p className="font-bold mb-2">定期メンテナンス：</p>
                  <p className="ml-4">
                    3〜6ヶ月ごとに歯科医院でプロフェッショナルクリーニングとアタッチメントの点検を受けましょう。
                  </p>
                </div>
              </div>
            </div>

            {/* 関連ページへのリンク */}
            <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#2d4835] mb-6 text-center">インプラント治療についてもっと詳しく</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/implant/about"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">インプラントとは</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/implant/number-position"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">歯を失った本数と埋入部位</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/implant/cost"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">費用について</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/implant/maintenance"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">治療後のメンテナンス</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Author Bio */}
        <section className="py-12 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-4xl">
            <AuthorBio />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
