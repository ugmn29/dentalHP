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
  ThumbsUp,
  AlertCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'インプラントのメリット・デメリット｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: 'インプラント治療のメリット・デメリットを詳しく解説。天然歯に近い噛み心地、周囲の歯を守れる、骨吸収を防ぐなどのメリットと、手術が必要、費用、治療期間などのデメリットを正直にお伝えします。',
  keywords: 'インプラント,メリット,デメリット,利点,欠点,入れ歯との比較,ブリッジとの比較',
};

export default function ImplantMeritDemeritPage() {
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
              <span className="text-[#395b45]">メリット・デメリット</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d4835] font-serif">
                インプラントのメリット・デメリット
              </h1>
              <div className="w-24 h-1 bg-[#395b45] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#2d4835] font-medium">
                治療を選ぶ前に知っておきたいメリットとデメリット
              </p>
              <p className="text-lg text-[#5A4D41] leading-relaxed">
                インプラント治療の長所と短所を正直にお伝えします
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
                  インプラントは<span className="bg-yellow-100 font-bold">天然歯に最も近い機能と見た目を回復できる</span>治療法ですが、手術が必要で費用と時間がかかるというデメリットもあります。
                </p>
                <p>
                  しかし、<span className="text-[#395b45] font-bold">周囲の健康な歯を削らずに済む</span>こと、<span className="text-[#395b45] font-bold">骨の吸収を防げる</span>ことなど、長期的な視点で見ると大きなメリットがあります。
                </p>
              </div>
            </div>

            {/* インプラントのメリット */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block flex items-center gap-3 justify-center">
                  <ThumbsUp className="w-8 h-8 text-green-600" />
                  インプラントのメリット
                </h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="space-y-12">
                {/* メリット1 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-green-200">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-green-500">
                    ① 天然歯に近い噛み心地
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      インプラントは顎の骨に直接固定されるため、<span className="bg-yellow-100 font-bold">天然歯の70〜90%の噛む力</span>を回復できます。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>硬いものもしっかり噛める</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>食事の味や食感を楽しめる</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>入れ歯のような違和感がない</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* メリット2 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-green-200">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-green-500">
                    ② 周囲の健康な歯を守れる
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      ブリッジのように<span className="bg-yellow-100 font-bold">隣の健康な歯を削る必要がありません</span>。
                    </p>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm">
                        <strong>ブリッジとの比較：</strong>ブリッジは両隣の歯を大きく削る必要があり、削った歯は将来的にダメージを受けやすくなります。インプラントなら周囲の歯に負担をかけません。
                      </p>
                    </div>
                  </div>
                </div>

                {/* メリット3 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-green-200">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-green-500">
                    ③ 骨の吸収を防げる
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      歯を失うと顎の骨は徐々に痩せていきますが、インプラントは<span className="bg-yellow-100 font-bold">噛む力を骨に伝えることで骨の吸収を防ぎます</span>。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>顔貌の変化を防げる</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>他の歯への悪影響を防ぐ</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* メリット4 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-green-200">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-green-500">
                    ④ 見た目が自然で美しい
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      セラミック製の人工歯を使用するため、<span className="bg-yellow-100 font-bold">天然歯と見分けがつかないほど自然</span>です。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>入れ歯の金具が見えない</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>笑顔に自信が持てる</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* メリット5 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-green-200">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-green-500">
                    ⑤ 長期的に安定して使える
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      適切なメンテナンスを行えば、<span className="bg-yellow-100 font-bold">10年以上の生存率は90%以上</span>と非常に高い成功率を誇ります。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* インプラントのデメリット */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block flex items-center gap-3 justify-center">
                  <AlertCircle className="w-8 h-8 text-orange-600" />
                  インプラントのデメリット
                </h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="space-y-12">
                {/* デメリット1 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-orange-200">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-orange-500">
                    ① 手術が必要
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      インプラントを埋め込むための<span className="bg-yellow-100 font-bold">外科手術が必要</span>です。
                    </p>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                      <p className="text-sm">
                        <strong>当院の対策：</strong>当院では麻酔専門医による静脈内鎮静法を用いることで、リラックスした状態で手術を受けていただけます。痛みや不安を最小限に抑えた治療が可能です。
                      </p>
                    </div>
                  </div>
                </div>

                {/* デメリット2 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-orange-200">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-orange-500">
                    ② 治療期間が長い
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      骨とインプラントが結合するまで<span className="bg-yellow-100 font-bold">3〜6ヶ月程度の期間</span>が必要です。
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-semibold mb-2">治療期間の目安：</p>
                      <ul className="text-sm space-y-1">
                        <li>• 1回法：約3〜4ヶ月</li>
                        <li>• 2回法：約4〜6ヶ月</li>
                        <li>• 骨造成が必要な場合：6〜12ヶ月</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* デメリット3 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-orange-200">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-orange-500">
                    ③ 保険適用外で費用がかかる
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      インプラント治療は<span className="bg-yellow-100 font-bold">自費診療</span>のため、入れ歯やブリッジと比べて費用が高額になります。
                    </p>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm">
                        <strong>長期的なコストパフォーマンス：</strong>初期費用は高いですが、適切なメンテナンスで10年以上使用できるため、長期的に見ると入れ歯の作り直しやブリッジの再治療よりもコストパフォーマンスに優れることがあります。
                      </p>
                    </div>
                  </div>
                </div>

                {/* デメリット4 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-orange-200">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-orange-500">
                    ④ 定期的なメンテナンスが必要
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      インプラント周囲炎を防ぐため、<span className="bg-yellow-100 font-bold">3〜6ヶ月ごとの定期メンテナンス</span>が必要です。
                    </p>
                  </div>
                </div>

                {/* デメリット5 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-orange-200">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-orange-500">
                    ⑤ すべての方に適応できるわけではない
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      以下のような方は、治療が制限される場合があります。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0" />
                        <span>重度の糖尿病の方</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0" />
                        <span>骨粗鬆症の治療薬を服用中の方</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0" />
                        <span>顎の骨が極端に少ない方（骨造成で対応可能な場合もあります）</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* まとめ */}
            <div className="mb-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-xl font-bold text-[#2d4835] mb-6 text-center">メリット・デメリットのまとめ</h3>
              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <p>
                  インプラント治療は、手術が必要で費用と時間がかかるというデメリットはありますが、<span className="font-bold">天然歯に近い機能と見た目を回復でき、周囲の歯を守りながら長期的に安定して使える</span>というメリットがあります。
                </p>
                <p>
                  当院では、患者様一人ひとりのご状況やご希望をしっかりとお聞きし、インプラント治療が本当に最適かどうかを一緒に考えます。無理に治療をお勧めすることはありませんので、まずはお気軽にご相談ください。
                </p>
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
                  href="/implant/comparison"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">入れ歯・ブリッジとの比較</span>
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
                  href="/implant/flow"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">治療の流れ</span>
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
