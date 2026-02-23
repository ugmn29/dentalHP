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
  Clock,
  Heart,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '抜歯即時埋入インプラント｜治療期間を短縮｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '抜歯と同時にインプラントを埋入する抜歯即時埋入。治療期間の短縮、骨吸収の抑制、手術回数の削減など、多くのメリットがあります。適応条件と治療の流れを詳しく解説します。',
  keywords: '抜歯即時埋入,インプラント,即時荷重,治療期間短縮,骨吸収抑制',
  openGraph: {
    title: '抜歯即時埋入インプラント｜治療期間を短縮｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '抜歯と同時にインプラントを埋入する抜歯即時埋入。治療期間の短縮、骨吸収の抑制、手術回数の削減など多くのメリットを解説。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/implant/immediate-placement',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function ImmediatePlacementPage() {
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
              <span className="text-[#395b45]">抜歯即時埋入</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d4835] font-serif">
                抜歯即時埋入インプラント
              </h1>
              <div className="w-24 h-1 bg-[#395b45] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#2d4835] font-medium">
                抜歯と同時にインプラントを埋め込む治療法
              </p>
              <p className="text-lg text-[#5A4D41] leading-relaxed">
                治療期間の短縮と身体への負担軽減を実現
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
                  抜歯即時埋入とは、<span className="bg-yellow-100 font-bold">歯を抜いたその日にインプラントを埋め込む治療法</span>です。
                </p>
                <p>
                  従来の方法と比べて<span className="text-[#395b45] font-bold">治療期間が2〜3ヶ月短縮</span>でき、<span className="text-[#395b45] font-bold">手術回数も1回で済む</span>ため、患者様の負担を大幅に軽減できます。
                </p>
              </div>
            </div>

            {/* 抜歯即時埋入とは */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">抜歯即時埋入とは</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 mb-8">
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    通常のインプラント治療では、抜歯後に<span className="bg-yellow-100 font-bold">3〜6ヶ月の治癒期間</span>を置いてからインプラントを埋入します。
                  </p>
                  <p>
                    しかし、抜歯即時埋入では、<span className="font-bold">抜歯と同時にインプラントを埋め込む</span>ため、この待機期間が不要になります。
                  </p>
                </div>
              </div>

              {/* 治療期間の比較 */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 md:p-8 border border-blue-200">
                <h4 className="text-lg font-bold text-[#2d4835] mb-4">治療期間の比較</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-[#2d4835] mb-2">従来の方法</p>
                    <ul className="text-sm space-y-1 text-[#5A4D41]">
                      <li>① 抜歯</li>
                      <li>② 治癒期間：3〜6ヶ月</li>
                      <li>③ インプラント埋入手術</li>
                      <li>④ 骨結合期間：3〜6ヶ月</li>
                      <li>⑤ 最終的な歯の装着</li>
                      <li className="font-bold mt-2">合計：約6〜12ヶ月</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                    <p className="font-bold text-[#2d4835] mb-2">抜歯即時埋入</p>
                    <ul className="text-sm space-y-1 text-[#5A4D41]">
                      <li>① 抜歯と同時にインプラント埋入</li>
                      <li>② 骨結合期間：3〜6ヶ月</li>
                      <li>③ 最終的な歯の装着</li>
                      <li className="font-bold mt-2 text-green-700">合計：約3〜6ヶ月（2〜6ヶ月短縮！）</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* メリット */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block flex items-center gap-3 justify-center">
                  <Heart className="w-8 h-8 text-green-600" />
                  抜歯即時埋入のメリット
                </h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">① 治療期間が短縮できる</h4>
                  </div>
                  <p className="text-[#5A4D41] leading-loose ml-9">
                    抜歯後の治癒期間が不要なため、<span className="bg-yellow-100 font-bold">2〜6ヶ月の期間短縮</span>が可能です。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">② 手術回数が1回で済む</h4>
                  </div>
                  <p className="text-[#5A4D41] leading-loose ml-9">
                    抜歯とインプラント埋入を同時に行うため、<span className="bg-yellow-100 font-bold">身体的・精神的な負担が軽減</span>されます。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">③ 骨の吸収を最小限に抑えられる</h4>
                  </div>
                  <p className="text-[#5A4D41] leading-loose ml-9">
                    抜歯後、骨は徐々に吸収されていきます。即時埋入では<span className="bg-yellow-100 font-bold">すぐにインプラントで骨に刺激を与える</span>ため、骨吸収を最小限に抑えられます。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">④ 歯茎の形態を保ちやすい</h4>
                  </div>
                  <p className="text-[#5A4D41] leading-loose ml-9">
                    特に前歯では、<span className="font-bold">自然な歯茎のライン</span>を維持しやすく、審美的に優れた結果が得られます。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">⑤ 費用を抑えられる</h4>
                  </div>
                  <p className="text-[#5A4D41] leading-loose ml-9">
                    手術回数が1回で済むため、<span className="font-bold">手術費用や通院費用を削減</span>できます。
                  </p>
                </div>
              </div>
            </div>

            {/* 適応条件 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">抜歯即時埋入の適応条件</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 md:p-8 border border-yellow-200 mb-8">
                <p className="text-[#5A4D41] leading-loose mb-4">
                  抜歯即時埋入は、すべてのケースに適応できるわけではありません。以下の条件を満たす必要があります。
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* 適応できるケース */}
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h4 className="text-lg font-bold text-[#2d4835] mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    適応できるケース
                  </h4>
                  <ul className="space-y-2 text-[#5A4D41]">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0" />
                      <span>抜歯部位に炎症がない</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0" />
                      <span>十分な骨量がある</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0" />
                      <span>周囲の骨が健康</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0" />
                      <span>全身状態が良好</span>
                    </li>
                  </ul>
                </div>

                {/* 適応が難しいケース */}
                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h4 className="text-lg font-bold text-[#2d4835] mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600" />
                    適応が難しいケース
                  </h4>
                  <ul className="space-y-2 text-[#5A4D41]">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0" />
                      <span>重度の歯周病がある</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0" />
                      <span>根尖病巣（根の先の膿）がある</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0" />
                      <span>骨量が不足している</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0" />
                      <span>喫煙習慣がある</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 治療の流れ */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">治療の流れ</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="text-lg font-bold text-[#2d4835] mb-3">STEP 1：精密検査・診断</h4>
                  <p className="text-[#5A4D41] leading-loose">
                    CT撮影やレントゲン撮影を行い、骨の状態、抜歯部位の炎症の有無などを詳しく調べます。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="text-lg font-bold text-[#2d4835] mb-3">STEP 2：治療計画の立案</h4>
                  <p className="text-[#5A4D41] leading-loose">
                    抜歯即時埋入が適応可能かどうかを判断し、インプラントの埋入位置や角度をシミュレーションします。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="text-lg font-bold text-[#2d4835] mb-3">STEP 3：抜歯とインプラント埋入（手術日）</h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    麻酔下で歯を抜き、その抜歯窩にインプラントを埋入します。必要に応じて仮歯を装着します。
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm">
                      <strong>静脈内鎮静法の利用：</strong>当院では麻酔専門医による静脈内鎮静法を用いることで、リラックスした状態で手術を受けていただけます。
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="text-lg font-bold text-[#2d4835] mb-3">STEP 4：治癒期間（3〜6ヶ月）</h4>
                  <p className="text-[#5A4D41] leading-loose">
                    インプラントと骨が結合するまで待ちます。この間、仮歯で日常生活を送っていただけます。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="text-lg font-bold text-[#2d4835] mb-3">STEP 5：最終的な歯の装着</h4>
                  <p className="text-[#5A4D41] leading-loose">
                    骨結合が確認できたら、最終的なセラミックの歯を装着します。
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
                  href="/implant/bone-augmentation"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">骨造成治療</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/implant/flow"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">治療の流れ</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/implant/iv-sedation"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">静脈内鎮静法</span>
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
