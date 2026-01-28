import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import {
  Zap,
  Crown,
  Shield,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Home,
  ChevronRight,
  Sparkles,
  TrendingUp
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'インプラント vs 入れ歯・ブリッジ｜徹底比較｜F歯科・矯正歯科',
  description: 'インプラント、入れ歯、ブリッジの違いを徹底比較。噛む力、見た目、寿命、費用など、あらゆる角度から解説。あなたに最適な治療法が見つかります。',
  keywords: 'インプラント,入れ歯,ブリッジ,比較,違い,メリット,デメリット',
};

export default function ImplantVsDenturePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-purple-50">
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-purple-600 flex items-center">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/implant" className="hover:text-purple-600">
                インプラント治療
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-purple-600">入れ歯・ブリッジとの比較</span>
            </div>
          </div>
        </div>

        <section className="py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                インプラント vs 入れ歯・ブリッジ
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                どれを選ぶべき？徹底比較
              </p>
            </div>
          </div>
        </section>

        <section className="py-2">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  結論：長期的にはインプラントがおすすめ
                </h2>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-2xl shadow-2xl p-8 md:p-12">
                <div className="space-y-4 text-lg">
                  <p className="leading-relaxed">
                    <span className="font-bold text-yellow-300 text-2xl">噛む力、見た目、寿命、周囲の歯への影響</span>
                    を総合的に考えると、インプラントが最もおすすめです。
                  </p>
                  <p className="leading-relaxed">
                    初期費用は高額ですが、<span className="font-bold text-yellow-300">10年以上使える</span>ため、
                    長期的なコストパフォーマンスは優れています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  詳細比較表
                </h2>
              </div>

              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                      <th className="p-4 text-left">比較項目</th>
                      <th className="p-4 text-center bg-purple-700">インプラント</th>
                      <th className="p-4 text-center">入れ歯</th>
                      <th className="p-4 text-center">ブリッジ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold bg-gray-50">噛む力</td>
                      <td className="p-4 text-center bg-purple-50">
                        <span className="text-2xl font-bold text-green-600">◎◎</span>
                        <div className="text-sm text-gray-600">天然歯の80〜90%</div>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-2xl font-bold text-orange-600">△</span>
                        <div className="text-sm text-gray-600">天然歯の30〜40%</div>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-2xl font-bold text-blue-600">◎</span>
                        <div className="text-sm text-gray-600">天然歯の60〜70%</div>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold bg-gray-50">周囲の歯への影響</td>
                      <td className="p-4 text-center bg-purple-50">
                        <span className="text-green-600 font-bold">なし</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-orange-600 font-bold">負担あり</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-red-600 font-bold">両隣を削る</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold bg-gray-50">平均寿命</td>
                      <td className="p-4 text-center bg-purple-50">
                        <span className="text-2xl font-bold text-green-600">10年以上</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-2xl font-bold text-orange-600">3〜5年</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-2xl font-bold text-blue-600">7〜8年</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold bg-gray-50">見た目</td>
                      <td className="p-4 text-center bg-purple-50">
                        <span className="text-green-600 font-bold">◎◎ 非常に自然</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-orange-600 font-bold">△ 金具が見える</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-blue-600 font-bold">◎ 自然</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold bg-gray-50">違和感</td>
                      <td className="p-4 text-center bg-purple-50">
                        <span className="text-green-600 font-bold">ほぼなし</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-red-600 font-bold">大きい</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-green-600 font-bold">少ない</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold bg-gray-50">手術</td>
                      <td className="p-4 text-center bg-purple-50">
                        <span className="text-orange-600 font-bold">必要</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-green-600 font-bold">不要</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-green-600 font-bold">不要</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold bg-gray-50">治療期間</td>
                      <td className="p-4 text-center bg-purple-50">3〜6ヶ月</td>
                      <td className="p-4 text-center">2週間〜1ヶ月</td>
                      <td className="p-4 text-center">2〜4週間</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold bg-gray-50">食事の制限</td>
                      <td className="p-4 text-center bg-purple-50">
                        <span className="text-green-600 font-bold">ほぼなし</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-red-600 font-bold">硬いものNG</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-green-600 font-bold">少ない</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-semibold bg-gray-50">費用（1本）</td>
                      <td className="p-4 text-center bg-purple-50">
                        <span className="text-orange-600 font-bold">35〜45万円</span>
                        <div className="text-xs text-gray-600">自費</div>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-green-600 font-bold">1〜5万円</span>
                        <div className="text-xs text-gray-600">保険適用可</div>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-blue-600 font-bold">2〜3万円</span>
                        <div className="text-xs text-gray-600">保険適用可</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  それぞれの治療法がおすすめの方
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl p-6 border-2 border-purple-300">
                  <div className="text-center mb-6">
                    <Zap className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800">インプラント</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">天然歯のように噛みたい</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">見た目を重視する</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">長持ちする治療が良い</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">健康な歯を削りたくない</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-6 border-2 border-gray-300">
                  <div className="text-center mb-6">
                    <Crown className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800">入れ歯</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">費用を抑えたい</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">手術を避けたい</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">早く治療を終えたい</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">複数本失っている</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-6 border-2 border-blue-200">
                  <div className="text-center mb-6">
                    <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800">ブリッジ</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">違和感を最小限に</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">手術を避けたい</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">保険で治療したい</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">1〜2本の欠損</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                よくある質問
              </h2>

              <div className="space-y-6">
                <details className="group bg-white rounded-lg shadow-md overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-bold text-gray-800 pr-8">
                      入れ歯からインプラントに変更できますか？
                    </h3>
                    <span className="text-purple-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                    <p className="mb-3">
                      はい、<strong>可能です</strong>。多くの患者様が、入れ歯の不便さからインプラントへ変更されています。
                    </p>
                    <p>
                      ただし、長期間入れ歯を使用していると骨が痩せている場合があり、
                      骨造成手術が必要になることがあります。まずは検査を受けて、適応を確認しましょう。
                    </p>
                  </div>
                </details>

                <details className="group bg-white rounded-lg shadow-md overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-bold text-gray-800 pr-8">
                      ブリッジとインプラント、どちらが良いですか？
                    </h3>
                    <span className="text-purple-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                    <p className="mb-3">
                      <strong>健康な歯を守る</strong>という観点では、インプラントがおすすめです。
                    </p>
                    <p>
                      ブリッジは両隣の健康な歯を削る必要があり、将来的にその歯も失うリスクがあります。
                      インプラントは独立しているため、周囲の歯に負担をかけません。
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                あなたに最適な治療法をご提案します
              </h2>
              <p className="text-xl mb-8 text-purple-50">
                無料カウンセリングで詳しくご説明します
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg"
                >
                  無料相談を予約する
                  <ArrowRight className="w-6 h-6 ml-2" />
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
