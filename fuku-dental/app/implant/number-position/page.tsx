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
  title: '歯を失った本数と埋入部位別のインプラント治療｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '失った歯の本数や部位によって最適なインプラント治療法は異なります。1本欠損から全歯欠損まで、それぞれのケースに応じた治療方法を詳しく解説します。',
  keywords: 'インプラント,本数,部位,1本欠損,複数本欠損,全歯欠損,前歯,奥歯,オールオン4',
  openGraph: {
    title: '歯を失った本数と埋入部位別のインプラント治療｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '失った歯の本数や部位によって最適なインプラント治療法は異なります。1本欠損から全歯欠損まで、それぞれのケースに応じた治療方法を詳しく解説します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/implant/number-position',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function ImplantNumberPositionPage() {
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
              <span className="text-[#395b45]">本数と埋入部位</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d4835] font-serif">
                歯を失った本数と埋入部位
              </h1>
              <div className="w-24 h-1 bg-[#395b45] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#2d4835] font-medium">
                失った歯の状況に応じた最適なインプラント治療
              </p>
              <p className="text-lg text-[#5A4D41] leading-relaxed">
                1本から全歯まで、様々なケースに対応できます
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
                  インプラント治療は、<span className="bg-yellow-100 font-bold">失った歯の本数や部位によって最適な治療方法が異なります</span>。
                </p>
                <p>
                  1本の欠損から全歯の欠損まで、それぞれの状況に応じた治療計画を立てることで、<span className="text-[#395b45] font-bold">機能的にも審美的にも優れた結果</span>を得ることができます。
                </p>
              </div>
            </div>

            {/* 失った歯の本数別の治療法 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">失った歯の本数別の治療法</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="space-y-12">
                {/* 1本欠損 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    1本の歯を失った場合
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="bg-yellow-100 font-bold">1本のインプラント</span>で治療できます。
                    </p>
                    <div>
                      <p className="font-bold mb-2">治療の特徴：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">隣の歯を削らない：</span>ブリッジと違い、両隣の健康な歯に手を加えません</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">独立した歯として機能：</span>天然歯と同じように単独で機能します</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">メンテナンスが容易：</span>通常の歯磨きと同じようにケアできます</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm">
                        <strong>ブリッジとの比較：</strong>ブリッジは両隣の歯を大きく削る必要がありますが、インプラントなら隣の歯を守りながら治療できます。長期的に見ても、周囲の歯を健康に保つことができます。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2〜3本欠損 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    2〜3本の歯を失った場合
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      失った歯の本数に応じて、<span className="bg-yellow-100 font-bold">2〜3本のインプラント</span>を埋入するか、<span className="bg-yellow-100 font-bold">インプラントブリッジ</span>で治療します。
                    </p>
                    <div>
                      <p className="font-bold mb-2">治療パターン：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">パターン①：</span>すべての歯にインプラントを埋入（3本欠損なら3本のインプラント）</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">パターン②：</span>インプラントブリッジ（両端の2本にインプラント、中央は連結冠）</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                      <p className="text-sm">
                        <strong>インプラントブリッジのメリット：</strong>費用を抑えながら、天然歯を削らずに複数本の歯を回復できます。骨の状態や噛み合わせに応じて最適な方法をご提案します。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 多数歯欠損 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    4本以上の歯を失った場合
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      複数のインプラントを土台にして、<span className="bg-yellow-100 font-bold">連結したブリッジタイプの人工歯</span>を装着します。
                    </p>
                    <div>
                      <p className="font-bold mb-2">治療の特徴：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span>失った歯の本数よりも少ないインプラントで治療可能</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span>手術の負担と費用を抑えられる</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span>安定した噛み合わせを実現</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 全歯欠損 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    すべての歯を失った場合（全歯欠損）
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="bg-yellow-100 font-bold">オールオン4（All-on-4）</span>または<span className="bg-yellow-100 font-bold">インプラントオーバーデンチャー</span>という治療法があります。
                    </p>
                    <div className="space-y-6">
                      {/* オールオン4 */}
                      <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                        <h5 className="font-bold mb-2">オールオン4（All-on-4）</h5>
                        <p className="text-sm mb-3">
                          片顎に4〜6本のインプラントを埋入し、すべての歯を固定式で回復する治療法です。
                        </p>
                        <ul className="text-sm space-y-1">
                          <li>• 取り外しの必要がない固定式</li>
                          <li>• 天然歯に近い噛み心地</li>
                          <li>• 見た目が自然で美しい</li>
                          <li>• 手術当日から仮歯で噛める</li>
                        </ul>
                      </div>

                      {/* インプラントオーバーデンチャー */}
                      <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                        <h5 className="font-bold mb-2">インプラントオーバーデンチャー</h5>
                        <p className="text-sm mb-3">
                          2〜4本のインプラントで入れ歯を固定する治療法です。
                        </p>
                        <ul className="text-sm space-y-1">
                          <li>• 取り外し可能でお手入れが簡単</li>
                          <li>• 通常の入れ歯よりも安定性が高い</li>
                          <li>• オールオン4より費用を抑えられる</li>
                          <li>• しっかりと噛める</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 埋入部位別の特徴 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">埋入部位別の特徴</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="space-y-12">
                {/* 前歯部 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    前歯部（切歯・犬歯）のインプラント
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      前歯は<span className="bg-yellow-100 font-bold">審美性が最も重要</span>な部位です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">治療のポイント：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">歯茎の形成：</span>自然な歯茎のラインを作るため、歯茎の形成にも配慮</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">セラミック使用：</span>天然歯に近い透明感のあるオールセラミックを推奨</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">角度調整：</span>隣の歯と調和する角度や形態に調整</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm">
                        <strong>審美治療の重要性：</strong>前歯は笑ったときに最も目立つ部位です。当院では、周囲の歯との色調や形態を細かく調整し、天然歯と見分けがつかない自然な仕上がりを目指します。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 臼歯部 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    臼歯部（小臼歯・大臼歯）のインプラント
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      奥歯は<span className="bg-yellow-100 font-bold">噛む力が最も強くかかる</span>部位です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">治療のポイント：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">強度重視：</span>噛む力に耐えられる太く長いインプラントを選択</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">骨造成の可能性：</span>骨が不足している場合は骨造成治療を併用</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">ジルコニア使用：</span>強度の高いジルコニアクラウンを推奨</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm">
                        <strong>上顎の奥歯の注意点：</strong>上顎の奥歯の上には上顎洞（副鼻腔）があります。骨の高さが不足している場合は、サイナスリフトという骨造成治療が必要になることがあります。
                      </p>
                    </div>
                  </div>
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
                  href="/implant/overdenture"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">インプラントオーバーデンチャー</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/implant/cost"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">費用について</span>
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
