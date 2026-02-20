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
  Sparkles,
  Shield,
  Heart,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'インプラントとは？仕組みと構造を詳しく解説｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: 'インプラント治療の基本的な仕組みと構造を詳しく解説。インプラント体、アバットメント、上部構造の3つのパーツの役割と、なぜインプラントが天然歯に近い機能を実現できるのかをわかりやすくご説明します。',
  keywords: 'インプラント,仕組み,構造,インプラント体,アバットメント,上部構造,チタン,骨結合,オッセオインテグレーション',
  openGraph: {
    title: 'インプラントとは？仕組みと構造を詳しく解説｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: 'インプラント治療の基本的な仕組みと構造を解説。インプラント体・アバットメント・上部構造の役割と、天然歯に近い機能を実現できる理由をご説明します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/implant/about',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function ImplantAboutPage() {
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
              <span className="text-[#395b45]">インプラントとは</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d4835] font-serif">
                インプラントとは
              </h1>
              <div className="w-24 h-1 bg-[#395b45] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#2d4835] font-medium">
                失った歯の機能を取り戻す、最も天然歯に近い治療法
              </p>
              <p className="text-lg text-[#5A4D41] leading-relaxed">
                インプラント治療の基本的な仕組みと構造を詳しく解説します
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
                  インプラントとは、<span className="bg-yellow-100 font-bold">歯を失った部分の顎の骨にチタン製の人工歯根を埋め込み、その上に人工の歯を装着する治療法</span>です。
                </p>
                <p>
                  インプラント体（人工歯根）が顎の骨としっかり結合することで、<span className="text-[#395b45] font-bold">天然歯とほぼ同じ噛む力を回復</span>できます。
                  入れ歯やブリッジと違い、隣の健康な歯を削る必要がなく、<span className="font-bold">自分の歯のように自然に噛める</span>のが最大の特徴です。
                </p>
              </div>
            </div>

            {/* インプラントの構造 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">インプラントの3つの構造</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="space-y-12">
                {/* 1. インプラント体 */}
                <div>
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    ① インプラント体（人工歯根）
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      顎の骨に直接埋め込む<span className="bg-yellow-100 font-bold">チタン製のネジ</span>です。天然歯の根の役割を果たします。
                    </p>
                    <div>
                      <p className="font-bold mb-2">インプラント体の特徴：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">チタン製：</span>生体親和性が高く、骨と結合しやすい（オッセオインテグレーション）</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">直径：</span>約3.5〜5mm（歯の根の太さに近い）</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">長さ：</span>約6〜15mm（埋入部位の骨の状態によって選択）</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">表面加工：</span>骨との結合を促進する特殊な表面処理</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                      <p className="text-sm">
                        <strong>なぜチタンが使われるのか：</strong>チタンは金属アレルギーが起こりにくく、骨と直接結合する性質（オッセオインテグレーション）があるため、インプラント材料として最適です。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. アバットメント */}
                <div>
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    ② アバットメント（土台）
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      インプラント体と上部構造（人工歯）を<span className="bg-yellow-100 font-bold">連結する部品</span>です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">アバットメントの役割：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">インプラント体と上部構造を接続：</span>安定した土台を形成</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">角度調整：</span>噛み合わせに合わせて角度を調整可能</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">歯茎の形成：</span>自然な歯茎のラインを作る</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm">
                        <strong>材料の種類：</strong>チタン製が一般的ですが、前歯など審美性が重要な部位ではジルコニア（白色セラミック）製のアバットメントを使用することもあります。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. 上部構造 */}
                <div>
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    ③ 上部構造（人工歯）
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      実際に見える<span className="bg-yellow-100 font-bold">歯の部分</span>です。セラミックなどで作られた人工の歯をアバットメントに装着します。
                    </p>
                    <div>
                      <p className="font-bold mb-2">上部構造の材料：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">オールセラミック：</span>天然歯に最も近い透明感と色調、審美性が高い</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">ジルコニア：</span>強度が高く、奥歯に最適</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">メタルボンド：</span>金属フレームにセラミックを焼き付けた耐久性重視タイプ</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm">
                        <strong>固定方法：</strong>ネジで固定するスクリュー固定式と、セメントで接着するセメント固定式があります。当院ではメンテナンス性に優れたスクリュー固定式を主に採用しています。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* インプラントのメカニズム */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">なぜインプラントは天然歯のように噛めるのか</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6 text-[#5A4D41] leading-loose">
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <div className="flex items-start gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-[#395b45] flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">オッセオインテグレーション（骨結合）</h4>
                  </div>
                  <p>
                    インプラント体（チタン）と顎の骨が直接結合する現象を「オッセオインテグレーション」と呼びます。
                    通常、手術後<span className="bg-yellow-100 font-bold">3〜6ヶ月</span>で骨とインプラントがしっかり結合します。
                  </p>
                  <p className="mt-3">
                    この結合により、インプラントは顎の骨と一体化し、天然歯の根と同じように<span className="font-bold">噛む力を骨に伝達</span>できるようになります。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <div className="flex items-start gap-3 mb-4">
                    <Shield className="w-6 h-6 text-[#395b45] flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">荷重分散のメカニズム</h4>
                  </div>
                  <p>
                    インプラントは噛む力を<span className="bg-yellow-100 font-bold">顎の骨全体に分散</span>させます。
                    これにより、天然歯とほぼ同等の噛む力（約60〜80kg）を発揮できます。
                  </p>
                  <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">噛む力の比較：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 天然歯：60〜80kg</li>
                      <li>• インプラント：50〜70kg（天然歯の約70〜90%）</li>
                      <li>• 入れ歯：10〜30kg（天然歯の約20〜40%）</li>
                      <li>• ブリッジ：40〜60kg（天然歯の約60〜80%）</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <div className="flex items-start gap-3 mb-4">
                    <Heart className="w-6 h-6 text-[#395b45] flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">骨吸収の予防</h4>
                  </div>
                  <p>
                    歯を失うと、その部分の顎の骨は使われなくなり、徐々に痩せていきます（骨吸収）。
                  </p>
                  <p className="mt-3">
                    しかし、インプラントは噛む力を骨に伝えることで、<span className="bg-yellow-100 font-bold">骨に刺激を与え続け、骨吸収を防ぎます</span>。
                    これは入れ歯やブリッジにはない、インプラント独自のメリットです。
                  </p>
                </div>
              </div>
            </div>

            {/* インプラントが適している方 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">インプラント治療が適している方</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h4 className="text-lg font-bold text-[#2d4835] mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    こんな方におすすめ
                  </h4>
                  <ul className="space-y-2 text-[#5A4D41]">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0" />
                      <span>天然歯と同じように噛みたい</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0" />
                      <span>見た目の自然さにこだわりたい</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0" />
                      <span>隣の健康な歯を削りたくない</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0" />
                      <span>入れ歯の違和感が苦手</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0" />
                      <span>長期的に安定した治療を受けたい</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h4 className="text-lg font-bold text-[#2d4835] mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600" />
                    注意が必要な方
                  </h4>
                  <ul className="space-y-2 text-[#5A4D41]">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0" />
                      <span>重度の糖尿病の方（血糖コントロールが必要）</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0" />
                      <span>骨粗鬆症の薬を服用中の方（事前相談が必要）</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0" />
                      <span>喫煙習慣がある方（成功率が下がる可能性）</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0" />
                      <span>重度の歯周病がある方（治療が優先）</span>
                    </li>
                  </ul>
                  <p className="text-sm mt-4 text-gray-600">
                    ※ 条件によっては治療可能な場合もあります。まずはご相談ください。
                  </p>
                </div>
              </div>
            </div>

            {/* 関連ページへのリンク */}
            <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#2d4835] mb-6 text-center">インプラント治療についてもっと詳しく</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/implant/comparison"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">入れ歯・ブリッジとの比較</span>
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
