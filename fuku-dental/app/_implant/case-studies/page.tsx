import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { ChevronRight, Heart, MessageCircle, Clock, Coins, CheckCircle, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'インプラント治療の症例紹介｜治療実績と患者様の声｜F歯科・矯正歯科',
  description: 'F歯科・矯正歯科のインプラント治療症例を詳しくご紹介。前歯・奥歯・複数本の症例から、治療期間・費用・患者様の満足度まで実際の治療結果をご覧いただけます。',
  keywords: 'インプラント,症例,治療例,ビフォーアフター,患者様の声,実績,成功率,F歯科・矯正歯科',
};

export default function ImplantCaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-purple-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-purple-600 transition-colors">
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/implant" className="hover:text-purple-600 transition-colors">
                インプラント
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-purple-600 font-medium">症例紹介</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                インプラント治療の症例紹介
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                実際の治療例から、インプラント治療の効果と患者様の満足度をご確認ください
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-purple-50 to-transparent"></div>
        </section>

        {/* Success Statistics */}
        <section className="py-2 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              当院のインプラント治療実績
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-md">
                <div className="text-5xl font-bold text-purple-600 mb-2">98.5%</div>
                <div className="text-gray-700 font-medium">10年生存率</div>
                <div className="text-sm text-gray-500 mt-2">適切なケアで長期使用可能</div>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-md">
                <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-700 font-medium">年間症例数</div>
                <div className="text-sm text-gray-500 mt-2">豊富な経験と実績</div>
              </div>
              <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-md">
                <div className="text-5xl font-bold text-green-600 mb-2">96%</div>
                <div className="text-gray-700 font-medium">患者満足度</div>
                <div className="text-sm text-gray-500 mt-2">高い治療満足度</div>
              </div>
              <div className="text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-md">
                <div className="text-5xl font-bold text-amber-600 mb-2">15年</div>
                <div className="text-gray-700 font-medium">平均使用期間</div>
                <div className="text-sm text-gray-500 mt-2">長期的な安定性</div>
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
              実際の治療例をご紹介します。症状や部位によって最適な治療計画を立案しています。
            </p>

            {/* Case 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-purple-100 to-indigo-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🦷</div>
                    <div className="text-lg font-semibold text-gray-700">前歯1本のインプラント治療</div>
                    <div className="text-sm text-gray-500 mt-2">Before → After</div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">
                      症例 #1
                    </span>
                    <span className="ml-3 text-sm text-gray-500">40代 女性</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    事故で失った前歯を自然な見た目に
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MessageCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">主訴</div>
                        <div className="text-gray-600">転倒で前歯が折れてしまった。見た目を自然に治したい</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療内容</div>
                        <div className="text-gray-600">上顎前歯部にストローマン社製インプラント1本埋入、オールセラミッククラウン装着</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療期間</div>
                        <div className="text-gray-600">約5ヶ月（抜歯即時埋入、仮歯使用期間含む）</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Coins className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">費用</div>
                        <div className="text-gray-600">¥450,000（プレミアムプラン・オールセラミック）</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
                    <div className="flex items-start">
                      <Heart className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-purple-900 mb-1">患者様の声</div>
                        <div className="text-sm text-gray-700">
                          「周りの歯と区別がつかないほど自然で、笑顔に自信が持てるようになりました。治療中の痛みもほとんどなく、先生の説明も丁寧で安心できました。」
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
              <div className="md:flex md:flex-row-reverse">
                <div className="md:w-1/2 bg-gradient-to-br from-blue-100 to-cyan-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🦷🦷</div>
                    <div className="text-lg font-semibold text-gray-700">奥歯2本のインプラント治療</div>
                    <div className="text-sm text-gray-500 mt-2">Before → After</div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                      症例 #2
                    </span>
                    <span className="ml-3 text-sm text-gray-500">60代 男性</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    入れ歯の違和感から解放、硬いものも噛める
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MessageCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">主訴</div>
                        <div className="text-gray-600">部分入れ歯が合わず痛い。しっかり噛みたい</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療内容</div>
                        <div className="text-gray-600">下顎臼歯部にインプラント2本埋入、連結セラミッククラウン装着</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療期間</div>
                        <div className="text-gray-600">約4ヶ月（下顎のため治癒期間3ヶ月）</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Coins className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">費用</div>
                        <div className="text-gray-600">¥700,000（スタンダードプラン×2本）</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <div className="flex items-start">
                      <Heart className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-blue-900 mb-1">患者様の声</div>
                        <div className="text-sm text-gray-700">
                          「入れ歯の時は食事が楽しめませんでしたが、今では何でも美味しく食べられます。取り外しの手間もなく、自分の歯と同じ感覚です。もっと早くやれば良かった！」
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-green-100 to-emerald-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🦷🦷🦷🦷</div>
                    <div className="text-lg font-semibold text-gray-700">上顎4本のインプラント治療</div>
                    <div className="text-sm text-gray-500 mt-2">Before → After</div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                      症例 #3
                    </span>
                    <span className="ml-3 text-sm text-gray-500">50代 女性</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    総入れ歯から解放、若々しい笑顔を取り戻す
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MessageCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">主訴</div>
                        <div className="text-gray-600">上顎の総入れ歯がずれる。人前で話すのが不安</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療内容</div>
                        <div className="text-gray-600">上顎にインプラント4本埋入、固定式ブリッジ（12歯分）装着（All-on-4）</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療期間</div>
                        <div className="text-gray-600">約6ヶ月（手術当日に仮歯装着、最終補綴物は6ヶ月後）</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Coins className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">費用</div>
                        <div className="text-gray-600">¥2,200,000（All-on-4特別プラン）</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                    <div className="flex items-start">
                      <Heart className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-green-900 mb-1">患者様の声</div>
                        <div className="text-sm text-gray-700">
                          「手術当日に仮の歯が入り、すぐに人前に出られました。総入れ歯の時は老けて見えましたが、今は10歳若返ったと言われます。本当に感謝しています。」
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 4 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
              <div className="md:flex md:flex-row-reverse">
                <div className="md:w-1/2 bg-gradient-to-br from-amber-100 to-orange-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🦷</div>
                    <div className="text-lg font-semibold text-gray-700">骨造成を伴うインプラント治療</div>
                    <div className="text-sm text-gray-500 mt-2">Before → After</div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">
                      症例 #4
                    </span>
                    <span className="ml-3 text-sm text-gray-500">70代 男性</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    骨が少なくても諦めない、骨造成で可能に
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MessageCircle className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">主訴</div>
                        <div className="text-gray-600">他院で「骨が少ないのでインプラントは無理」と言われた</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療内容</div>
                        <div className="text-gray-600">上顎洞底挙上術（サイナスリフト）後、インプラント1本埋入</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療期間</div>
                        <div className="text-gray-600">約10ヶ月（骨造成の治癒期間6ヶ月含む）</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Coins className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">費用</div>
                        <div className="text-gray-600">¥550,000（インプラント¥350,000 + 骨造成¥200,000）</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                    <div className="flex items-start">
                      <Heart className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-amber-900 mb-1">患者様の声</div>
                        <div className="text-sm text-gray-700">
                          「諦めていたインプラントができて本当に嬉しいです。期間はかかりましたが、その価値は十分にありました。先生の技術力に感謝しています。」
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 5 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-rose-100 to-pink-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🦷🦷🦷</div>
                    <div className="text-lg font-semibold text-gray-700">ブリッジからインプラントへ</div>
                    <div className="text-sm text-gray-500 mt-2">Before → After</div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full">
                      症例 #5
                    </span>
                    <span className="ml-3 text-sm text-gray-500">30代 女性</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    健康な歯を守るためにインプラントを選択
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MessageCircle className="w-5 h-5 text-rose-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">主訴</div>
                        <div className="text-gray-600">奥歯1本を失った。ブリッジで健康な歯を削りたくない</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-rose-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療内容</div>
                        <div className="text-gray-600">下顎臼歯部にインプラント1本埋入、セラミッククラウン装着</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-rose-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">治療期間</div>
                        <div className="text-gray-600">約3ヶ月（下顎・骨質良好のため早期結合）</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Coins className="w-5 h-5 text-rose-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">費用</div>
                        <div className="text-gray-600">¥350,000（スタンダードプラン）</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-rose-50 border-l-4 border-rose-600 p-4 rounded">
                    <div className="flex items-start">
                      <Heart className="w-5 h-5 text-rose-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-rose-900 mb-1">患者様の声</div>
                        <div className="text-sm text-gray-700">
                          「まだ若いので、健康な歯を削るのは避けたかった。インプラントは費用がかかりましたが、長期的に考えれば良い選択だったと思います。違和感もなく快適です。」
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
              当院のインプラント治療が成功する理由
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-md">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">
                  精密な診断と計画
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  歯科用CTによる3次元診断で、骨の状態や神経の位置を正確に把握。専用ソフトでシミュレーションを行い、最適な埋入位置を事前に決定します。
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-md">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">
                  高い技術力と豊富な経験
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  年間500症例以上の実績を持つ経験豊富なドクターが担当。骨造成などの高度な技術にも対応し、難症例でも諦めません。
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-md">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">
                  充実のアフターケア
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  治療後の定期メンテナンスを徹底し、インプラント周囲炎を予防。10年保証制度で長期的な安心をご提供します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-2">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              症例に関するよくある質問
            </h2>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-purple-50 transition-colors">
                  <span className="font-semibold text-lg text-gray-900">
                    私の症状でもインプラント治療はできますか？
                  </span>
                  <ChevronRight className="w-5 h-5 text-purple-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t">
                  骨が少ない方、糖尿病の方、高齢の方でも、条件が整えばインプラント治療は可能です。当院では事前に詳しい検査を行い、患者様一人ひとりに最適な治療計画を立案します。「他院で断られた」という方も、一度ご相談ください。
                </div>
              </details>

              <details className="group bg-white rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-purple-50 transition-colors">
                  <span className="font-semibold text-lg text-gray-900">
                    掲載されている費用は総額ですか？追加料金はありませんか？
                  </span>
                  <ChevronRight className="w-5 h-5 text-purple-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t">
                  掲載している費用は、インプラント体・アバットメント・上部構造（人工歯）を含む総額です。ただし、骨造成が必要な場合や、静脈内鎮静法をご希望の場合は別途費用がかかります。初診時のカウンセリングで、総額を明確にご提示いたします。
                </div>
              </details>

              <details className="group bg-white rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-purple-50 transition-colors">
                  <span className="font-semibold text-lg text-gray-900">
                    症例写真のような仕上がりになりますか？
                  </span>
                  <ChevronRight className="w-5 h-5 text-purple-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t">
                  お一人おひとりの骨の状態や歯茎の厚み、噛み合わせなどによって仕上がりは異なりますが、当院では常に自然で美しい仕上がりを目指しています。治療前にシミュレーションを行い、ご希望を丁寧にお伺いしながら進めますのでご安心ください。
                </div>
              </details>

              <details className="group bg-white rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-purple-50 transition-colors">
                  <span className="font-semibold text-lg text-gray-900">
                    治療期間は短縮できませんか？
                  </span>
                  <ChevronRight className="w-5 h-5 text-purple-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t">
                  骨質が良好な場合は「早期荷重」といって、通常より短期間で人工歯を装着できるケースもあります。また、抜歯と同時にインプラントを埋入する「抜歯即時埋入」により、治療期間を短縮できる場合があります。ただし、安全性を最優先に判断いたします。
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-2 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              インプラント治療について、さらに詳しく
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/implant"
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-600 transition-colors">
                    インプラント治療とは
                  </h3>
                  <ChevronRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  インプラント治療の特徴や当院の強みをご紹介
                </p>
              </Link>

              <Link
                href="/implant/types"
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-600 transition-colors">
                    インプラントの種類
                  </h3>
                  <ChevronRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  構造やメーカーによる違いを詳しく解説
                </p>
              </Link>

              <Link
                href="/implant/cost"
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-600 transition-colors">
                    インプラントの費用
                  </h3>
                  <ChevronRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  料金プランや支払い方法について
                </p>
              </Link>

              <Link
                href="/implant/vs-denture"
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-600 transition-colors">
                    インプラントと入れ歯・ブリッジの比較
                  </h3>
                  <ChevronRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  それぞれの治療法のメリット・デメリット
                </p>
              </Link>

              <Link
                href="/implant/procedure"
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-600 transition-colors">
                    治療の流れ
                  </h3>
                  <ChevronRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  カウンセリングから治療完了まで
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl shadow-2xl p-12">
              <Star className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                あなたに最適なインプラント治療をご提案します
              </h2>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                無料カウンセリングで、あなたのお悩みや疑問に丁寧にお答えします。<br />
                CT撮影による精密診断と、詳しい治療計画をご説明いたします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  無料カウンセリング予約
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:0120-xxx-xxx"
                  className="inline-flex items-center justify-center bg-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  📞 お電話でのご予約
                </a>
              </div>
              <p className="mt-6 text-sm text-purple-200">
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
