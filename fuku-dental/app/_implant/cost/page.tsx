import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import {
  DollarSign,
  Zap,
  Calculator,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  TrendingDown,
  ArrowRight,
  Home,
  ChevronRight,
  Shield,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'インプラント治療の費用・料金相場｜1本の値段は？｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: 'インプラント治療の費用を詳しく解説。1本あたりの料金、総額の内訳、医療費控除、デンタルローンなど。適正価格で安心の治療をご提供します。',
  keywords: 'インプラント,費用,料金,値段,価格,相場,1本,総額,医療費控除,デンタルローン',
};

export default function ImplantCostPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-green-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-green-600 flex items-center">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/implant" className="hover:text-green-600">
                インプラント治療
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-green-600">費用・料金</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <DollarSign className="w-16 h-16" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                インプラント治療の費用・料金
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                明瞭な料金体系で安心の治療を
              </p>
              <p className="text-lg opacity-90">
                インプラント1本の費用から、<br />
                総額の内訳まで詳しく解説します
              </p>
            </div>
          </div>
        </section>

        {/* 重要なお知らせ */}
        <section className="py-8 bg-yellow-50 border-y border-yellow-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">インプラント治療は自費診療です</h3>
                  <p className="text-gray-700">
                    インプラント治療は保険適用外のため、全額自己負担となります。
                    ただし、医療費控除の対象となり、デンタルローンもご利用いただけます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 当院の料金表 */}
        <section className="py-2">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  当院のインプラント料金
                </h2>
                <p className="text-lg text-gray-600">
                  全て税込価格・1本あたりの費用です
                </p>
              </div>

              {/* 基本料金プラン */}
              <div className="mb-12">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-t-2xl">
                  <h3 className="text-2xl font-bold flex items-center">
                    <Zap className="w-8 h-8 mr-3" />
                    基本料金プラン
                  </h3>
                  <p className="text-green-50 mt-2">インプラント1本あたりの総額</p>
                </div>
                <div className="bg-white rounded-b-2xl shadow-lg overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6 p-6">
                    {/* スタンダードプラン */}
                    <div className="border-2 border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-800">スタンダードプラン</h4>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          人気
                        </span>
                      </div>
                      <div className="mb-4">
                        <div className="text-4xl font-bold text-green-600 mb-2">
                          ¥350,000
                          <span className="text-lg text-gray-600 font-normal ml-2">/ 1本</span>
                        </div>
                        <p className="text-sm text-gray-600">診査・手術・上部構造すべて込み</p>
                      </div>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">ストローマンインプラント使用</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">セラミック上部構造</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">CT診断・手術・型取りすべて含む</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">10年保証付き</span>
                        </li>
                      </ul>
                    </div>

                    {/* プレミアムプラン */}
                    <div className="border-2 border-blue-300 rounded-xl p-6 hover:shadow-lg transition-shadow bg-blue-50">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-800">プレミアムプラン</h4>
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          前歯推奨
                        </span>
                      </div>
                      <div className="mb-4">
                        <div className="text-4xl font-bold text-blue-600 mb-2">
                          ¥450,000
                          <span className="text-lg text-gray-600 font-normal ml-2">/ 1本</span>
                        </div>
                        <p className="text-sm text-gray-600">審美性を最優先した高品質プラン</p>
                      </div>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">ノーベルバイオケアまたはストローマン</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">高品質ジルコニアセラミック</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">歯茎の形成手術も含む</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">10年保証付き</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 詳細な内訳 */}
              <div className="mb-12">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-2xl">
                  <h3 className="text-2xl font-bold">
                    費用の詳細内訳
                  </h3>
                  <p className="text-blue-50 mt-2">何にいくらかかるのか明確に</p>
                </div>
                <div className="bg-white rounded-b-2xl shadow-lg overflow-hidden p-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-bold text-gray-800">①検査・診断費用</h4>
                        <p className="text-sm text-gray-600">CT撮影、口腔内検査、治療計画立案</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-800">¥30,000</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-bold text-gray-800">②インプラント体（人工歯根）</h4>
                        <p className="text-sm text-gray-600">ストローマン社製チタン製インプラント</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-800">¥150,000</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-bold text-gray-800">③手術費用</h4>
                        <p className="text-sm text-gray-600">麻酔、埋入手術、縫合、術後管理</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-800">¥70,000</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-bold text-gray-800">④アバットメント（土台）</h4>
                        <p className="text-sm text-gray-600">インプラントと上部構造をつなぐ部品</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-800">¥50,000</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-bold text-gray-800">⑤上部構造（人工歯）</h4>
                        <p className="text-sm text-gray-600">セラミッククラウン製作・装着</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-800">¥100,000</p>
                      </div>
                    </div>

                    <div className="border-t-2 border-green-600 pt-4 mt-4">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xl font-bold text-gray-800">合計（1本あたり）</h4>
                        <p className="text-4xl font-bold text-green-600">¥400,000</p>
                      </div>
                      <p className="text-sm text-gray-600 text-right mt-2">
                        ※ スタンダードプランは¥350,000に割引
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 追加費用が必要なケース */}
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <AlertCircle className="w-8 h-8 text-orange-600 mr-3" />
                  追加費用が必要になる場合
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">骨造成手術</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      骨の量が不足している場合、骨を増やす手術が必要です。
                    </p>
                    <p className="text-lg font-bold text-orange-600">+¥50,000〜¥150,000</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">サイナスリフト</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      上顎の骨が薄い場合に行う骨造成手術の一種です。
                    </p>
                    <p className="text-lg font-bold text-orange-600">+¥100,000〜¥200,000</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">静脈内鎮静法</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      リラックスした状態で手術を受けたい方向け。
                    </p>
                    <p className="text-lg font-bold text-orange-600">+¥50,000</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">仮歯</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      治療期間中の仮歯が必要な場合（前歯など）。
                    </p>
                    <p className="text-lg font-bold text-orange-600">+¥10,000〜¥30,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 一般的な相場との比較 */}
        <section className="py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  一般的な相場との比較
                </h2>
                <p className="text-lg text-gray-600">
                  当院の料金は適正価格です
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                    <tr>
                      <th className="p-4 text-left">地域・クリニック</th>
                      <th className="p-4 text-center">インプラント1本の費用</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4">東京都心部の平均</td>
                      <td className="p-4 text-center font-bold">¥400,000〜¥500,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4">全国平均</td>
                      <td className="p-4 text-center font-bold">¥300,000〜¥450,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 bg-green-50">
                      <td className="p-4 font-bold">当院（スタンダードプラン）</td>
                      <td className="p-4 text-center">
                        <span className="text-2xl font-bold text-green-600">¥350,000</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">格安インプラント</td>
                      <td className="p-4 text-center font-bold text-orange-600">¥200,000〜¥250,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">格安インプラントの注意点</h4>
                    <p className="text-gray-700 text-sm">
                      極端に安いインプラントは、メーカーの信頼性、パーツ供給の安定性、長期的な保証などに問題がある場合があります。
                      価格だけでなく、使用するインプラントの品質、術後の保証、メンテナンス体制なども確認しましょう。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 支払い方法 */}
        <section className="py-2 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  お支払い方法
                </h2>
                <p className="text-lg text-gray-600">
                  各種お支払い方法に対応しています
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* 現金 */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">現金払い</h3>
                  <p className="text-gray-600 text-sm">
                    一括払いでのお支払い
                  </p>
                </div>

                {/* クレジットカード */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <CreditCard className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">クレジットカード</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    各種カードに対応
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 text-xs">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">VISA</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">MasterCard</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">JCB</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">AMEX</span>
                  </div>
                </div>

                {/* デンタルローン */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-2 border-indigo-200">
                  <Calculator className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">デンタルローン</h3>
                  <p className="text-gray-600 text-sm">
                    分割払いで無理なく治療
                  </p>
                </div>
              </div>

              {/* デンタルローン詳細 */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-indigo-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Calculator className="w-8 h-8 text-indigo-600 mr-3" />
                  デンタルローンのご案内
                </h3>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">分割払いのシミュレーション</h4>
                  <div className="bg-white rounded-lg p-6 space-y-4">
                    <div className="border-b pb-4">
                      <p className="text-sm text-gray-600 mb-2">インプラント1本（¥350,000）の場合</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">12回払い：</span>
                          <span className="font-semibold">約¥30,500/月</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">24回払い：</span>
                          <span className="font-semibold">約¥15,800/月</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">36回払い：</span>
                          <span className="font-semibold">約¥10,800/月</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">60回払い：</span>
                          <span className="font-semibold">約¥6,800/月</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-2">インプラント3本（¥1,050,000）の場合</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">24回払い：</span>
                          <span className="font-semibold">約¥47,500/月</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">36回払い：</span>
                          <span className="font-semibold">約¥32,500/月</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">60回払い：</span>
                          <span className="font-semibold">約¥20,500/月</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">84回払い：</span>
                          <span className="font-semibold">約¥15,000/月</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 mt-4">
                      ※ 金利は年率3.9%で計算した概算です。実際の金額は審査により異なります。
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">デンタルローンのメリット</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">まとまった資金がなくても、すぐに治療を始められる</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">クレジットカードより低金利（年率3.9%〜）</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">月々の支払額を調整できる（6回〜84回）</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">医療費控除の対象になる</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 医療費控除 */}
        <section className="py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  医療費控除について
                </h2>
                <p className="text-lg text-gray-600">
                  インプラント治療は医療費控除の対象です
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">医療費控除とは？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    1年間に支払った医療費が10万円（または所得の5%）を超えた場合、
                    確定申告をすることで所得税の一部が還付される制度です。
                    インプラント治療も対象となります。
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">控除額のシミュレーション</h3>
                  <div className="bg-blue-50 rounded-lg p-6 space-y-4">
                    <div className="border-b border-blue-200 pb-4">
                      <p className="font-semibold text-gray-800 mb-2">例1：年収500万円の方がインプラント1本（35万円）の場合</p>
                      <div className="space-y-1 text-sm text-gray-700">
                        <p>医療費控除額：350,000円 - 100,000円 = 250,000円</p>
                        <p>所得税率：20%</p>
                        <p className="font-bold text-green-600">還付金額：約50,000円</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800 mb-2">例2：年収700万円の方がインプラント3本（105万円）の場合</p>
                      <div className="space-y-1 text-sm text-gray-700">
                        <p>医療費控除額：1,050,000円 - 100,000円 = 950,000円</p>
                        <p>所得税率：23%</p>
                        <p className="font-bold text-green-600">還付金額：約218,500円</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
                  <div className="flex items-start">
                    <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">領収書は必ず保管してください</h4>
                      <p className="text-gray-700 text-sm">
                        医療費控除を受けるには、治療費の領収書が必要です。
                        当院では治療後に必ず領収書を発行いたしますので、確定申告まで大切に保管してください。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-2 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                費用に関するよくある質問
              </h2>

              <div className="space-y-6">
                <details className="group bg-white rounded-lg shadow-md overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-bold text-gray-800 pr-8">
                      なぜインプラントは高いのですか？
                    </h3>
                    <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                    <p className="mb-3">
                      インプラント治療が高額な理由は、以下の通りです：
                    </p>
                    <ul className="space-y-2 ml-4 mb-3">
                      <li>• 高度な技術と専門知識が必要</li>
                      <li>• インプラント体（チタン製）自体が高価</li>
                      <li>• CT撮影など高額な設備が必要</li>
                      <li>• 手術や製作に時間と手間がかかる</li>
                      <li>• 長期的な保証とメンテナンス体制</li>
                    </ul>
                    <p>
                      ただし、<strong>10年以上使える</strong>ことを考えると、
                      入れ歯の作り直しより経済的な場合も多いです。
                    </p>
                  </div>
                </details>

                <details className="group bg-white rounded-lg shadow-md overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-bold text-gray-800 pr-8">
                      追加料金はかかりませんか？
                    </h3>
                    <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                    <p className="mb-3">
                      当院では、<strong>治療開始前に総額をお伝え</strong>し、
                      その金額以上はいただきません。
                    </p>
                    <p className="mb-3">
                      ただし、以下の場合は追加費用が必要です：
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li>• 骨が不足しており、骨造成手術が必要な場合</li>
                      <li>• 静脈内鎮静法を希望される場合</li>
                      <li>• 治療途中で新たな問題が見つかった場合</li>
                    </ul>
                    <p className="mt-3">
                      これらは事前の検査で判断し、ご説明・ご同意の上で進めます。
                    </p>
                  </div>
                </details>

                <details className="group bg-white rounded-lg shadow-md overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-bold text-gray-800 pr-8">
                      保険は適用されませんか？
                    </h3>
                    <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                    <p className="mb-3">
                      基本的に、インプラント治療は<strong>保険適用外</strong>の自費診療です。
                    </p>
                    <p className="mb-3">
                      ただし、以下の場合は保険適用になることがあります：
                    </p>
                    <ul className="space-y-1 ml-4 mb-3">
                      <li>• 事故や腫瘍などで広範囲の顎骨を失った場合</li>
                      <li>• 生まれつき顎骨が1/3以上欠損している場合</li>
                    </ul>
                    <p>
                      一般的な虫歯や歯周病で歯を失った場合は、保険適用外となります。
                    </p>
                  </div>
                </details>

                <details className="group bg-white rounded-lg shadow-md overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-bold text-gray-800 pr-8">
                      デンタルローンの審査は厳しいですか？
                    </h3>
                    <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                    <p className="mb-3">
                      デンタルローンは、一般的なローンと比べて<strong>審査が通りやすい</strong>傾向にあります。
                    </p>
                    <p className="mb-3">
                      審査基準：
                    </p>
                    <ul className="space-y-1 ml-4 mb-3">
                      <li>• 安定した収入があること（パート・アルバイトも可）</li>
                      <li>• 過去に金融事故がないこと</li>
                      <li>• 年齢が18歳以上であること</li>
                    </ul>
                    <p>
                      審査には数日かかるため、お早めのお申し込みをおすすめします。
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* 関連ページ */}
        <section className="py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                関連ページ
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/implant" className="group bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl border-2 border-cyan-100 hover:border-cyan-300 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <Zap className="w-8 h-8 text-cyan-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">インプラント治療TOP</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    インプラント治療の概要
                  </p>
                  <div className="flex items-center text-cyan-600 font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>

                <Link href="/implant/vs-denture" className="group bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">入れ歯との比較</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    詳しい比較とメリット
                  </p>
                  <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>

                <Link href="/implant/procedure" className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <Clock className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">治療の流れ</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    インプラント治療の手順
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                無料カウンセリング実施中
              </h2>
              <p className="text-xl mb-8 text-green-50">
                費用や治療内容について、詳しくご説明します<br />
                デンタルローンのご相談も承ります
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
                >
                  無料相談を予約する
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Link>
                <Link
                  href="tel:0312345678"
                  className="inline-flex items-center justify-center bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-800 transition-colors border-2 border-white"
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
