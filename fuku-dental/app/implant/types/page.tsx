import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import {
  Zap,
  Crown,
  Shield,
  CheckCircle2,
  ArrowRight,
  Home,
  ChevronRight,
  Star,
  Layers
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'インプラントの種類とシステム｜ストローマン・ノーベル比較｜F歯科・矯正歯科',
  description: 'インプラントの種類（1ピース・2ピース）とメーカー（ストローマン、ノーベルバイオケア等）の違いを詳しく解説。あなたに最適なインプラントが見つかります。',
  keywords: 'インプラント,種類,ストローマン,ノーベルバイオケア,メーカー,システム,比較',
};

export default function ImplantTypesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-cyan-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-cyan-600 flex items-center">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/implant" className="hover:text-cyan-600">
                インプラント治療
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-cyan-600">インプラントの種類</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Layers className="w-16 h-16" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                インプラントの種類とシステム
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                構造とメーカーによる違いを徹底解説
              </p>
              <p className="text-lg opacity-90">
                あなたに最適なインプラントを選ぶための<br />
                基礎知識をご紹介します
              </p>
            </div>
          </div>
        </section>

        {/* 構造による分類 */}
        <section className="py-2">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  構造による2つのタイプ
                </h2>
                <p className="text-lg text-gray-600">
                  インプラントは構造によって大きく2種類に分かれます
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* 2ピースタイプ */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-cyan-300">
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">2ピースタイプ</h3>
                        <span className="bg-yellow-400 text-cyan-900 text-xs font-bold px-3 py-1 rounded-full">
                          最も一般的
                        </span>
                      </div>
                      <Layers className="w-12 h-12" />
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="font-bold text-lg text-gray-800 mb-3">特徴</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>インプラント体</strong>（骨に埋める部分）と<strong>アバットメント</strong>（土台）が
                        <span className="font-bold text-cyan-600">分離している</span>タイプです。
                        世界中で最も広く使われています。
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-lg text-gray-800 mb-3">メリット</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">様々な症例に対応できる</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">アバットメントの角度調整が可能</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">上部構造のみの交換が容易</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">メーカーの選択肢が豊富</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-lg text-gray-800 mb-3">デメリット</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          </span>
                          <span className="text-gray-700">接続部分が緩むリスクがある</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          </span>
                          <span className="text-gray-700">手術が2回必要な場合がある</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-cyan-50 p-4 rounded-lg border-2 border-cyan-200">
                      <p className="text-sm text-gray-700">
                        <strong>適している症例：</strong>
                        前歯・奥歯ともに対応可能。ほとんどのケースで使用できます。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 1ピースタイプ */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">1ピースタイプ</h3>
                        <p className="text-blue-50 text-sm">ワンピース型</p>
                      </div>
                      <Zap className="w-12 h-12" />
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="font-bold text-lg text-gray-800 mb-3">特徴</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        インプラント体とアバットメントが
                        <span className="font-bold text-blue-600">一体化している</span>タイプです。
                        シンプルな構造が特徴です。
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-lg text-gray-800 mb-3">メリット</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">手術が1回で済む</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">治療期間が短い</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">費用が抑えられる</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">接続部分が緩むリスクがない</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-lg text-gray-800 mb-3">デメリット</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          </span>
                          <span className="text-gray-700">角度調整ができない</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          </span>
                          <span className="text-gray-700">適応できる症例が限られる</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          </span>
                          <span className="text-gray-700">審美性がやや劣る場合がある</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                      <p className="text-sm text-gray-700">
                        <strong>適している症例：</strong>
                        骨が十分にある奥歯。前歯には不向きな場合が多いです。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-cyan-50 rounded-lg border-2 border-cyan-200">
                <p className="font-bold text-gray-800 mb-2">
                  <span className="text-cyan-600">当院の推奨：2ピースタイプ</span>
                </p>
                <p className="text-gray-700">
                  当院では、幅広い症例に対応でき、長期的な安定性が高い<strong>2ピースタイプ</strong>を
                  主に採用しています。患者様の症例に応じて最適なタイプを選択します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 主要メーカー比較 */}
        <section className="py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  主要メーカー・システム比較
                </h2>
                <p className="text-lg text-gray-600">
                  世界で信頼されているインプラントシステム
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* ストローマン */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-cyan-300">
                  <div className="bg-gradient-to-r from-cyan-600 to-teal-600 p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold">ストローマン</h3>
                        <p className="text-cyan-50 text-sm mt-1">Straumann（スイス）</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-yellow-400 text-cyan-900 text-xs font-bold px-3 py-1 rounded-full">
                          世界シェアNo.1
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="font-bold text-lg text-gray-800 mb-3">特徴</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• 世界シェアNo.1（約30%）の最大手メーカー</li>
                        <li>• 60年以上の歴史と豊富な臨床データ</li>
                        <li>• SLA表面処理による高い骨結合率</li>
                        <li>• 短期間での骨結合（3〜4週間）</li>
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-lg text-gray-800 mb-3">メリット</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">長期予後のデータが豊富で信頼性が高い</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">世界中で使用され、移転先でもメンテナンス可能</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">10年生存率97%以上</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>当院での採用：</strong>
                        メインシステムとして採用。ほとんどの症例で使用しています。
                      </p>
                    </div>
                  </div>
                </div>

                {/* ノーベルバイオケア */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold">ノーベルバイオケア</h3>
                        <p className="text-blue-50 text-sm mt-1">Nobel Biocare（スウェーデン）</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-blue-200 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
                          老舗ブランド
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="font-bold text-lg text-gray-800 mb-3">特徴</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• 世界初の実用インプラントを開発した老舗</li>
                        <li>• 50年以上の歴史を持つパイオニア</li>
                        <li>• All-on-4の開発元</li>
                        <li>• TiUnite表面処理による高い骨結合</li>
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-lg text-gray-800 mb-3">メリット</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">歴史が長く、臨床データが豊富</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">難症例に対応できる製品ラインナップ</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">審美性が高い</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>当院での採用：</strong>
                        前歯部など審美性が重要な症例で使用することがあります。
                      </p>
                    </div>
                  </div>
                </div>

                {/* その他の主要メーカー */}
                <div className="md:col-span-2 bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">その他の主要メーカー</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">アストラテック（スウェーデン）</h4>
                      <p className="text-sm text-gray-700">
                        骨吸収を最小限に抑える設計。長期安定性に優れる。
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">ジンマー・バイオメット（アメリカ）</h4>
                      <p className="text-sm text-gray-700">
                        整形外科分野でも実績。MTXマイクロテクスチャー表面。
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">オステム（韓国）</h4>
                      <p className="text-sm text-gray-700">
                        コストパフォーマンスに優れる。アジアで高シェア。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* メーカー選びのポイント */}
        <section className="py-2 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  インプラントメーカー選びのポイント
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-cyan-500">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        長期的な臨床データがあるか
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        10年、20年といった長期的なデータが豊富なメーカーを選ぶことが重要です。
                        ストローマンやノーベルバイオケアは50年以上の実績があり、信頼性が高いです。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        世界中で使われているか
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        転勤や引っ越しがあっても、どこでもメンテナンスを受けられることが大切です。
                        世界シェアの高いメーカーなら、転居先でも対応してもらえます。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        パーツの供給が安定しているか
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        上部構造の交換や修理が必要になった際、パーツが手に入らないと困ります。
                        大手メーカーなら、10年後、20年後もパーツ供給が続く可能性が高いです。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        科学的根拠があるか
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        表面処理や材質について、科学的な研究論文が多数発表されているメーカーを選びましょう。
                        エビデンスに基づいた治療が重要です。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Shield className="w-8 h-8 mr-3" />
                  当院が推奨する理由
                </h3>
                <p className="text-lg leading-relaxed">
                  当院では、<span className="font-bold text-yellow-300">ストローマンインプラント</span>を
                  メインシステムとして採用しています。
                  世界シェアNo.1の実績、豊富な臨床データ、高い成功率など、
                  患者様に安心して使っていただける条件が揃っているからです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
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
                      インプラントのメーカーは自分で選べますか？
                    </h3>
                    <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                    <p className="mb-3">
                      はい、<strong>患者様のご希望を伺った上で選択</strong>できます。
                    </p>
                    <p>
                      ただし、症例によって適したメーカーやシステムが異なるため、
                      歯科医師の推奨も考慮して決定することをおすすめします。
                      カウンセリング時に詳しくご説明いたします。
                    </p>
                  </div>
                </details>

                <details className="group bg-white rounded-lg shadow-md overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-bold text-gray-800 pr-8">
                      安いインプラントと高いインプラントの違いは何ですか？
                    </h3>
                    <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                    <p className="mb-3">
                      主な違いは<strong>メーカーの信頼性、臨床データの量、パーツ供給の安定性</strong>です。
                    </p>
                    <p className="mb-3">
                      格安インプラントの多くは：
                    </p>
                    <ul className="space-y-1 ml-4 mb-3">
                      <li>• 臨床データが少ない</li>
                      <li>• 将来的なパーツ供給が不安定</li>
                      <li>• 世界的な普及率が低い</li>
                    </ul>
                    <p>
                      当院では、長期的な安心を考え、実績のあるメーカーのみを採用しています。
                    </p>
                  </div>
                </details>

                <details className="group bg-white rounded-lg shadow-md overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-bold text-gray-800 pr-8">
                      他院で埋めたインプラントのメンテナンスはできますか？
                    </h3>
                    <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                    <p className="mb-3">
                      <strong>メーカーが判明していれば、メンテナンス可能</strong>です。
                    </p>
                    <p>
                      ストローマン、ノーベルバイオケアなど主要メーカーであれば対応できますが、
                      マイナーなメーカーやアジア製の一部製品は、パーツが手に入らない場合があります。
                      まずはご相談ください。
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* 関連ページ */}
        <section className="py-2 bg-gradient-to-b from-white to-gray-50">
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

                <Link href="/implant/cost" className="group bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-green-100 hover:border-green-300 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <Star className="w-8 h-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">費用・料金</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    インプラントの費用について
                  </p>
                  <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>

                <Link href="/implant/procedure" className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <Crown className="w-8 h-8 text-blue-600 mr-3" />
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
        <section className="py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                あなたに最適なインプラントをご提案します
              </h2>
              <p className="text-xl mb-8 text-cyan-50">
                無料カウンセリングで詳しくご説明します<br />
                まずはお気軽にご相談ください
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-cyan-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-50 transition-colors shadow-lg"
                >
                  無料相談を予約する
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Link>
                <Link
                  href="tel:0312345678"
                  className="inline-flex items-center justify-center bg-cyan-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-800 transition-colors border-2 border-white"
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
