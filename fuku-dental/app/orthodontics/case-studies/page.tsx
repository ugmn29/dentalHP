import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { ChevronRight, Heart, MessageCircle, Clock, Coins, CheckCircle, Star, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: '矯正治療の症例紹介｜治療実績と患者様の声｜F歯科・矯正歯科',
  description: 'F歯科・矯正歯科の矯正治療症例を詳しくご紹介。出っ歯・受け口・ガタガタ・すきっ歯など、様々な症例の治療結果をビフォーアフターでご覧いただけます。',
  keywords: '矯正,症例,治療例,ビフォーアフター,患者様の声,実績,成功率,出っ歯,受け口,ガタガタ,F歯科・矯正歯科',
};

export default function OrthodonticsCaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-amber-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-amber-600 transition-colors">
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/orthodontics" className="hover:text-amber-600 transition-colors">
                矯正歯科
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-amber-600 font-medium">症例紹介</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                矯正治療の症例紹介
              </h1>
              <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                実際の治療例から、矯正治療の効果と患者様の満足度をご確認ください
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent"></div>
        </section>

        {/* Success Statistics */}
        <section className="py-2 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              当院の矯正治療実績
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-md">
                <div className="text-5xl font-bold text-amber-600 mb-2">1,200+</div>
                <div className="text-gray-700 font-medium">累計症例数</div>
                <div className="text-sm text-gray-500 mt-2">開院以来の実績</div>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-md">
                <div className="text-5xl font-bold text-blue-600 mb-2">350+</div>
                <div className="text-gray-700 font-medium">年間症例数</div>
                <div className="text-sm text-gray-500 mt-2">豊富な経験と実績</div>
              </div>
              <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-md">
                <div className="text-5xl font-bold text-green-600 mb-2">94%</div>
                <div className="text-gray-700 font-medium">患者満足度</div>
                <div className="text-sm text-gray-500 mt-2">やって良かった</div>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-md">
                <div className="text-5xl font-bold text-purple-600 mb-2">2.1年</div>
                <div className="text-gray-700 font-medium">平均治療期間</div>
                <div className="text-sm text-gray-500 mt-2">計画通りの治療</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
              治療症例
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              実際の治療例をご紹介します。症状や年齢によって最適な治療計画を立案しています。
            </p>

            {/* Case 1: 叢生（ガタガタ） */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-amber-100 to-yellow-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🦷</div>
                    <div className="text-lg font-semibold text-gray-700">叢生（ガタガタの歯並び）</div>
                    <div className="text-sm text-gray-500 mt-2">Before → After</div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">
                      症例 #1
                    </span>
                    <span className="ml-3 text-sm text-gray-500">28歳 女性</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    ガタガタの前歯をマウスピース矯正で美しく
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MessageCircle className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">主訴</div>
                        <div className="text-gray-600">前歯のガタガタが気になる。目立たない方法で治したい</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療内容</div>
                        <div className="text-gray-600">マウスピース矯正（インビザライン）非抜歯治療</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療期間</div>
                        <div className="text-gray-600">1年6ヶ月（マウスピース枚数：35枚）</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Coins className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">費用</div>
                        <div className="text-gray-600">¥850,000（マウスピース矯正）</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                    <div className="flex items-start">
                      <Heart className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-amber-900 mb-1">患者様の声</div>
                        <div className="text-sm text-gray-700">
                          「接客業なので、目立たないマウスピース矯正を選びました。仕事中も気づかれることなく、1年半で理想の歯並びに。歯磨きもしやすくなり、虫歯のリスクも減りました。」
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2: 上顎前突（出っ歯） */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
              <div className="md:flex md:flex-row-reverse">
                <div className="md:w-1/2 bg-gradient-to-br from-blue-100 to-cyan-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">😬</div>
                    <div className="text-lg font-semibold text-gray-700">上顎前突（出っ歯）</div>
                    <div className="text-sm text-gray-500 mt-2">Before → After</div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                      症例 #2
                    </span>
                    <span className="ml-3 text-sm text-gray-500">35歳 男性</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    出っ歯を抜歯矯正で改善、横顔も美しく
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MessageCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">主訴</div>
                        <div className="text-gray-600">出っ歯がコンプレックス。横顔を改善したい</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療内容</div>
                        <div className="text-gray-600">ワイヤー矯正（ホワイトブラケット）上下4本抜歯</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療期間</div>
                        <div className="text-gray-600">2年3ヶ月</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Coins className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">費用</div>
                        <div className="text-gray-600">¥900,000（審美ブラケット）</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <div className="flex items-start">
                      <Heart className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-blue-900 mb-1">患者様の声</div>
                        <div className="text-sm text-gray-700">
                          「35歳で抜歯矯正を決断しました。治療中は白いブラケットで目立たず、職場でも問題ありませんでした。横顔のEラインが改善され、自信が持てるようになりました。」
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 3: 下顎前突（受け口） */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-green-100 to-emerald-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🦷</div>
                    <div className="text-lg font-semibold text-gray-700">下顎前突（受け口）</div>
                    <div className="text-sm text-gray-500 mt-2">Before → After</div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                      症例 #3
                    </span>
                    <span className="ml-3 text-sm text-gray-500">24歳 女性</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    受け口を裏側矯正で改善、誰にも気づかれず
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MessageCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">主訴</div>
                        <div className="text-gray-600">受け口を治したいが、装置を見せたくない</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療内容</div>
                        <div className="text-gray-600">裏側矯正（舌側矯正）下顎2本抜歯</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療期間</div>
                        <div className="text-gray-600">2年8ヶ月</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Coins className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">費用</div>
                        <div className="text-gray-600">¥1,300,000（裏側矯正）</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                    <div className="flex items-start">
                      <Heart className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-green-900 mb-1">患者様の声</div>
                        <div className="text-sm text-gray-700">
                          「モデルの仕事をしているので、裏側矯正を選びました。誰にも気づかれることなく治療でき、今では自信を持って笑顔を見せられます。費用は高かったですが、価値がありました。」
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 4: 空隙歯列（すきっ歯） */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
              <div className="md:flex md:flex-row-reverse">
                <div className="md:w-1/2 bg-gradient-to-br from-purple-100 to-pink-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">😁</div>
                    <div className="text-lg font-semibold text-gray-700">空隙歯列（すきっ歯）</div>
                    <div className="text-sm text-gray-500 mt-2">Before → After</div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">
                      症例 #4
                    </span>
                    <span className="ml-3 text-sm text-gray-500">42歳 女性</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    前歯のすき間を部分矯正で短期間に改善
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MessageCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">主訴</div>
                        <div className="text-gray-600">前歯のすき間だけを治したい。短期間で終わらせたい</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療内容</div>
                        <div className="text-gray-600">部分矯正（上顎前歯のみ）マウスピース使用</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療期間</div>
                        <div className="text-gray-600">8ヶ月</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Coins className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">費用</div>
                        <div className="text-gray-600">¥400,000（部分矯正）</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
                    <div className="flex items-start">
                      <Heart className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-purple-900 mb-1">患者様の声</div>
                        <div className="text-sm text-gray-700">
                          「全体矯正は期間も費用もかかるので躊躇していましたが、部分矯正なら8ヶ月で終わると聞いて決断しました。気になっていた前歯のすき間がなくなり、大満足です。」
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 5: 開咬（前歯が閉じない） */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-rose-100 to-pink-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🫦</div>
                    <div className="text-lg font-semibold text-gray-700">開咬（前歯が閉じない）</div>
                    <div className="text-sm text-gray-500 mt-2">Before → After</div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full">
                      症例 #5
                    </span>
                    <span className="ml-3 text-sm text-gray-500">19歳 女性</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    前歯が閉じない開咬をワイヤー矯正で改善
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MessageCircle className="w-5 h-5 text-rose-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">主訴</div>
                        <div className="text-gray-600">前歯で噛み切れない。発音もしにくい</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-rose-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療内容</div>
                        <div className="text-gray-600">ワイヤー矯正（メタルブラケット）アンカースクリュー使用</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-rose-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療期間</div>
                        <div className="text-gray-600">2年4ヶ月</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Coins className="w-5 h-5 text-rose-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">費用</div>
                        <div className="text-gray-600">¥750,000（ワイヤー矯正 + アンカースクリュー）</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-rose-50 border-l-4 border-rose-600 p-4 rounded">
                    <div className="flex items-start">
                      <Heart className="w-5 h-5 text-rose-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-rose-900 mb-1">患者様の声</div>
                        <div className="text-sm text-gray-700">
                          「開咬は難しい症例だと聞いていましたが、アンカースクリューを使うことで治せると言われ安心しました。今では前歯でしっかり噛め、発音も改善されました。本当に感謝しています。」
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Success Factors */}
        <section className="py-2 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              当院の矯正治療が成功する理由
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-md">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">
                  精密な診断と治療計画
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  歯科用CTやセファロレントゲンによる3次元診断で、骨の状態や顎の位置を正確に把握。一人ひとりに最適な治療計画を立案します。
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-md">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">
                  豊富な症例経験
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  年間350症例以上の実績を持つ経験豊富なドクターが担当。難症例にも対応できる高度な技術力があります。
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-md">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">
                  丁寧なアフターケア
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  治療後の保定期間も定期的にチェックし、後戻りを防ぎます。治療完了後も長期的にサポートいたします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Age Distribution */}
        <section className="py-2 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              患者様の年齢分布
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-6 text-gray-900">年代別割合</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">10代</span>
                        <span className="font-bold text-gray-900">15%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-blue-600 h-3 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">20代</span>
                        <span className="font-bold text-gray-900">25%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-green-600 h-3 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">30代</span>
                        <span className="font-bold text-gray-900">30%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-amber-600 h-3 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">40代</span>
                        <span className="font-bold text-gray-900">20%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-purple-600 h-3 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">50代以上</span>
                        <span className="font-bold text-gray-900">10%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-pink-600 h-3 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-6 text-gray-900">治療法の選択傾向</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="font-semibold text-gray-900 mb-2">10〜20代</div>
                      <p className="text-sm text-gray-700">ワイヤー矯正が多い。費用を抑えたい学生や、治療期間を重視する方が中心。</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl">
                      <div className="font-semibold text-gray-900 mb-2">30〜40代</div>
                      <p className="text-sm text-gray-700">マウスピース矯正が人気。仕事や生活への影響を最小限にしたい社会人が選択。</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <div className="font-semibold text-gray-900 mb-2">50代以上</div>
                      <p className="text-sm text-gray-700">部分矯正や審美ブラケットを選ぶ方が多い。気になる部分だけを短期間で治療。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-2 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              症例に関するよくある質問
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">私の歯並びでも矯正できますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> ほとんどの歯並びの問題は矯正治療で改善できます。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="font-bold text-green-700 mb-2">✓ 矯正治療で対応可能</p>
                      <ul className="text-sm space-y-1">
                        <li>• 出っ歯、受け口</li>
                        <li>• 叢生（ガタガタ）</li>
                        <li>• すきっ歯</li>
                        <li>• 開咬、過蓋咬合</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="font-bold text-yellow-700 mb-2">外科矯正が必要な場合</p>
                      <p className="text-sm text-[#5A4D41]">
                        重度の骨格的な問題がある場合は、外科矯正が必要になることもあります
                      </p>
                    </div>
                  </div>
                  <p className="text-sm bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    まずは詳しく検査させていただき、最適な治療法をご提案します。無料カウンセリングでお気軽にご相談ください。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">掲載されている治療期間は目安ですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> はい、掲載している治療期間は実際の症例の期間ですが、個人差があります。
                  </p>
                  <div className="bg-[#FFF9F0] p-4 rounded-lg mb-3">
                    <h4 className="font-bold text-[#5A4D41] mb-2">期間に影響する要因</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E]">•</span>
                        <span>歯の動きやすさ（個人差があります）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E]">•</span>
                        <span>骨の状態や密度</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E]">•</span>
                        <span>年齢（若い方が動きやすい傾向）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E]">•</span>
                        <span>装着時間の遵守度</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    初診時の検査結果をもとに、より正確な治療期間をお伝えいたします。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">費用は症例によって変わりますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 当院では、選択する矯正方法（ワイヤー、マウスピース、裏側など）によって料金が決まります。
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-3">
                    <p className="font-bold text-green-700 mb-2">✓ トータルフィー制度</p>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>症例の難易度で費用が大きく変わることはありません</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>治療開始前に総額をご提示</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>追加費用は発生しません</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    料金体系については<a href="/orthodontics/cost" className="underline text-blue-600 hover:text-blue-800">費用ページ</a>で詳しくご説明しています。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">症例写真のような仕上がりになりますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> お一人おひとりの骨格や歯の状態によって仕上がりは異なりますが、当院では常に機能と審美性を両立した美しい歯並びを目指しています。
                  </p>
                  <div className="bg-[#FFF9F0] p-4 rounded-lg mb-3">
                    <h4 className="font-bold text-[#5A4D41] mb-2">当院の仕上がりへのこだわり</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E]">✓</span>
                        <span>機能面：しっかり噛める、発音しやすい</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E]">✓</span>
                        <span>審美面：美しいスマイルライン、Eライン</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E]">✓</span>
                        <span>長期安定性：後戻りしにくい仕上がり</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    治療前にシミュレーションを行い、仕上がりのイメージを共有しながら進めますのでご安心ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-2 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              矯正治療について、さらに詳しく
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/orthodontics"
                className="bg-white border-2 border-amber-200 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-amber-600 transition-colors">
                    矯正歯科について
                  </h3>
                  <ChevronRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  矯正治療の特徴や当院の強みをご紹介
                </p>
              </Link>

              <Link
                href="/orthodontics/types"
                className="bg-white border-2 border-amber-200 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-amber-600 transition-colors">
                    矯正治療の種類
                  </h3>
                  <ChevronRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ワイヤー・マウスピース・裏側矯正の比較
                </p>
              </Link>

              <Link
                href="/orthodontics/cost"
                className="bg-white border-2 border-amber-200 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-amber-600 transition-colors">
                    矯正治療の費用
                  </h3>
                  <ChevronRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  料金プランや支払い方法について
                </p>
              </Link>

              <Link
                href="/orthodontics/duration"
                className="bg-white border-2 border-amber-200 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-amber-600 transition-colors">
                    治療期間について
                  </h3>
                  <ChevronRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  矯正治療にかかる期間と通院頻度
                </p>
              </Link>

              <Link
                href="/orthodontics/adult"
                className="bg-white border-2 border-amber-200 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-amber-600 transition-colors">
                    大人の矯正治療
                  </h3>
                  <ChevronRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  大人になってからの矯正治療について
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-3xl shadow-2xl p-12">
              <Star className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                あなたに最適な矯正治療をご提案します
              </h2>
              <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                無料カウンセリングで、あなたの歯並びに合わせた<br />
                最適な治療法と詳しい治療計画をご説明いたします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  無料カウンセリング予約
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:0120-xxx-xxx"
                  className="inline-flex items-center justify-center bg-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  📞 お電話でのご予約
                </a>
              </div>
              <p className="mt-6 text-sm text-amber-200">
                ※無料カウンセリングは完全予約制です。お気軽にお問い合わせください。
              </p>
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
