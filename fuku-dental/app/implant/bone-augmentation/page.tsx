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
  title: '骨造成治療（GBR・サイナスリフト）｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '骨が不足している方でもインプラント治療が可能に。GBR法、サイナスリフト、ソケットリフトなど、骨造成治療の種類と方法を詳しく解説します。',
  keywords: '骨造成,GBR,サイナスリフト,ソケットリフト,骨移植,インプラント',
};

export default function BoneAugmentationPage() {
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
              <span className="text-[#395b45]">骨造成治療</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d4835] font-serif">
                骨造成治療
              </h1>
              <div className="w-24 h-1 bg-[#395b45] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#2d4835] font-medium">
                骨が不足している方でもインプラント治療が可能に
              </p>
              <p className="text-lg text-[#5A4D41] leading-relaxed">
                骨の量を増やしてインプラントを支える治療法
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
                  骨造成治療とは、<span className="bg-yellow-100 font-bold">インプラントを埋め込むための骨の量を増やす治療法</span>です。
                </p>
                <p>
                  歯周病や長期間の歯の欠損により骨が不足している方でも、<span className="text-[#395b45] font-bold">骨造成治療を行うことでインプラント治療が可能</span>になります。
                </p>
              </div>
            </div>

            {/* 骨造成治療が必要なケース */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">骨造成治療が必要なケース</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 mb-8">
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    以下のような理由で、顎の骨が不足している場合があります。
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                      <span><span className="font-bold">歯周病：</span>歯周病が進行すると、歯を支える骨が溶けてしまいます</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                      <span><span className="font-bold">長期間の歯の欠損：</span>歯を失ったまま放置すると、噛む刺激がなくなり骨が吸収されます</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                      <span><span className="font-bold">入れ歯の長期使用：</span>入れ歯の圧力により骨が徐々に痩せていきます</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                      <span><span className="font-bold">上顎洞の問題：</span>上顎の奥歯の部分は、上顎洞（副鼻腔）により骨の高さが不足しやすい</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 主な骨造成治療の種類 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">主な骨造成治療の種類</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="space-y-12">
                {/* GBR法 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    GBR法（骨誘導再生法）
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="bg-yellow-100 font-bold">特殊な膜（メンブレン）を使って骨の再生を促す</span>治療法です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">治療方法：</p>
                      <ol className="space-y-2 ml-6 list-decimal">
                        <li>骨が不足している部分に骨補填材を填入</li>
                        <li>メンブレン（特殊な膜）で覆う</li>
                        <li>歯茎を閉じて治癒を待つ（4〜6ヶ月）</li>
                        <li>骨が再生されたらインプラントを埋入</li>
                      </ol>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm">
                        <strong>メンブレンの役割：</strong>メンブレンは、歯茎の組織が骨を作るスペースに入り込むのを防ぎ、骨の細胞だけが再生できる環境を作ります。
                      </p>
                    </div>
                    <div>
                      <p className="font-bold mb-2">適応部位：</p>
                      <ul className="space-y-1 ml-4">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#395b45] mt-2 mr-3 flex-shrink-0" />
                          <span>骨の幅が不足している部位</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#395b45] mt-2 mr-3 flex-shrink-0" />
                          <span>抜歯後の骨の欠損部</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* サイナスリフト */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    サイナスリフト（上顎洞底挙上術）
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      上顎の奥歯の上にある<span className="bg-yellow-100 font-bold">上顎洞（副鼻腔）の底を持ち上げて骨を増やす</span>治療法です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">治療方法：</p>
                      <ol className="space-y-2 ml-6 list-decimal">
                        <li>歯茎の横から骨に小さな窓を開ける</li>
                        <li>上顎洞の膜（シュナイダー膜）を慎重に持ち上げる</li>
                        <li>できたスペースに骨補填材を填入</li>
                        <li>骨が形成されるまで待つ（4〜6ヶ月）</li>
                        <li>インプラントを埋入</li>
                      </ol>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm">
                        <strong>適応：</strong>上顎の奥歯で骨の高さが5mm未満の場合に適用されます。骨の高さが極端に不足している場合でも治療可能です。
                      </p>
                    </div>
                  </div>
                </div>

                {/* ソケットリフト */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    ソケットリフト（上顎洞底挙上術・垂直的アプローチ）
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      サイナスリフトより<span className="bg-yellow-100 font-bold">低侵襲で、インプラントを埋入する穴から骨を増やす</span>方法です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">治療方法：</p>
                      <ol className="space-y-2 ml-6 list-decimal">
                        <li>インプラントを埋入する穴を開ける</li>
                        <li>その穴から特殊な器具で上顎洞底を持ち上げる</li>
                        <li>骨補填材を填入</li>
                        <li>同時にインプラントを埋入（または骨形成後に埋入）</li>
                      </ol>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                      <p className="text-sm">
                        <strong>メリット：</strong>サイナスリフトと比べて手術時間が短く、腫れや痛みが少ないのが特徴です。骨の高さが5mm以上ある場合に適用できます。
                      </p>
                    </div>
                    <div>
                      <p className="font-bold mb-2">適応：</p>
                      <ul className="space-y-1 ml-4">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#395b45] mt-2 mr-3 flex-shrink-0" />
                          <span>骨の高さが5mm以上ある場合</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#395b45] mt-2 mr-3 flex-shrink-0" />
                          <span>数ミリの骨の増加が必要な場合</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ブロック骨移植 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    ブロック骨移植
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      他の部位から採取した<span className="bg-yellow-100 font-bold">ブロック状の骨を移植</span>する方法です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">治療方法：</p>
                      <ol className="space-y-2 ml-6 list-decimal">
                        <li>下顎の後方や顎の骨から骨を採取</li>
                        <li>採取した骨をブロック状に整形</li>
                        <li>骨が不足している部位に固定</li>
                        <li>骨が結合するまで待つ（4〜6ヶ月）</li>
                        <li>インプラントを埋入</li>
                      </ol>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm">
                        <strong>自家骨のメリット：</strong>自分の骨を使用するため、拒絶反応がなく、骨の生着率が非常に高いのが特徴です。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 骨補填材の種類 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">使用する骨補填材の種類</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-[#2d4835] mb-3">自家骨（じかこつ）</h4>
                  <p className="text-sm text-[#5A4D41] leading-loose mb-3">
                    患者様自身の骨を使用。最も生着率が高い。
                  </p>
                  <div className="text-sm text-[#5A4D41]">
                    <p className="font-semibold mb-1">メリット：</p>
                    <ul className="space-y-1 ml-4">
                      <li>• 拒絶反応がない</li>
                      <li>• 高い生着率</li>
                    </ul>
                    <p className="font-semibold mt-2 mb-1">デメリット：</p>
                    <ul className="space-y-1 ml-4">
                      <li>• 採取部の手術が必要</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-[#2d4835] mb-3">他家骨（たかこつ）</h4>
                  <p className="text-sm text-[#5A4D41] leading-loose mb-3">
                    他の人の骨を処理したもの。
                  </p>
                  <div className="text-sm text-[#5A4D41]">
                    <p className="font-semibold mb-1">メリット：</p>
                    <ul className="space-y-1 ml-4">
                      <li>• 採取手術が不要</li>
                    </ul>
                    <p className="font-semibold mt-2 mb-1">デメリット：</p>
                    <ul className="space-y-1 ml-4">
                      <li>• 感染リスクがわずかにある</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-[#2d4835] mb-3">異種骨（いしゅこつ）</h4>
                  <p className="text-sm text-[#5A4D41] leading-loose mb-3">
                    牛などの動物の骨を処理したもの。
                  </p>
                  <div className="text-sm text-[#5A4D41]">
                    <p className="font-semibold mb-1">メリット：</p>
                    <ul className="space-y-1 ml-4">
                      <li>• 安定した品質</li>
                      <li>• 採取手術が不要</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-[#2d4835] mb-3">人工骨（合成骨）</h4>
                  <p className="text-sm text-[#5A4D41] leading-loose mb-3">
                    ハイドロキシアパタイトなどの人工材料。
                  </p>
                  <div className="text-sm text-[#5A4D41]">
                    <p className="font-semibold mb-1">メリット：</p>
                    <ul className="space-y-1 ml-4">
                      <li>• 感染リスクがない</li>
                      <li>• 無限に供給可能</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 治療期間と費用 */}
            <div className="mb-16 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-[#2d4835] mb-6 text-center">治療期間と注意点</h3>
              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <div>
                  <p className="font-bold mb-2">治療期間：</p>
                  <p className="ml-4">
                    骨造成治療を行う場合、通常のインプラント治療よりも<span className="bg-yellow-100 font-bold">3〜6ヶ月程度長くかかります</span>。
                  </p>
                  <ul className="mt-2 ml-8 space-y-1">
                    <li>• GBR法：4〜6ヶ月</li>
                    <li>• サイナスリフト：4〜6ヶ月</li>
                    <li>• ソケットリフト：インプラント同時埋入の場合は3〜4ヶ月</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-2">術後の注意点：</p>
                  <ul className="ml-4 space-y-1">
                    <li>• 鼻を強くかまない（上顎洞を挙上した場合）</li>
                    <li>• 激しい運動を避ける</li>
                    <li>• 禁煙（骨の生着に悪影響）</li>
                    <li>• 柔らかい食事を心がける</li>
                  </ul>
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
                  href="/implant/immediate-placement"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">抜歯即時埋入</span>
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
                  href="/implant/safety"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">安全性へのこだわり</span>
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
