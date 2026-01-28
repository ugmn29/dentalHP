import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChevronRight, CheckCircle, Users, Heart, Briefcase, Calendar, TrendingUp, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: '大人の矯正治療｜何歳からでも始められる歯列矯正｜F歯科・矯正歯科',
  description: '大人になってからでも矯正治療は可能です。40代・50代から始める方も増加中。目立たないマウスピース矯正や裏側矯正で、仕事や生活に支障なく美しい歯並びを手に入れられます。',
  keywords: '大人,矯正,成人矯正,何歳まで,40代,50代,社会人,目立たない,F歯科・矯正歯科',
};

export default function OrthodonticsAdultPage() {
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
              <span className="text-amber-600 font-medium">大人の矯正治療</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                大人の矯正治療
              </h1>
              <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                何歳からでも遅くない。あなたのライフスタイルに合わせた矯正治療
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent"></div>
        </section>

        {/* Statistics */}
        <section className="py-2 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                増え続ける大人の矯正治療
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                「矯正は子供がするもの」というイメージは過去のものです。<br />
                近年、<span className="font-bold text-amber-700">成人矯正患者の割合は年々増加</span>しており、<br />
                当院でも矯正患者の約70%が20歳以上の成人です。
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 shadow-md">
                <div className="text-5xl font-bold text-amber-600 mb-2">70%</div>
                <div className="text-gray-700 font-medium">成人患者の割合</div>
                <div className="text-sm text-gray-500 mt-2">当院実績</div>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-md">
                <div className="text-5xl font-bold text-blue-600 mb-2">40代</div>
                <div className="text-gray-700 font-medium">最も多い年代</div>
                <div className="text-sm text-gray-500 mt-2">30〜50代が中心</div>
              </div>
              <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-md">
                <div className="text-5xl font-bold text-green-600 mb-2">60代〜</div>
                <div className="text-gray-700 font-medium">最高齢患者</div>
                <div className="text-sm text-gray-500 mt-2">年齢制限なし</div>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-md">
                <div className="text-5xl font-bold text-purple-600 mb-2">90%</div>
                <div className="text-gray-700 font-medium">満足度</div>
                <div className="text-sm text-gray-500 mt-2">やって良かった</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Adults Choose Orthodontics */}
        <section className="py-2">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              大人が矯正治療を始める理由
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">見た目のコンプレックス解消</h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                  「笑顔に自信が持てない」「人前で口を開けるのが恥ずかしい」といったコンプレックスを解消し、自信を取り戻したい。
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">将来の健康への投資</h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                  歯並びが悪いと虫歯や歯周病のリスクが高まります。将来の歯の健康を守るための予防的治療として。
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Briefcase className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">仕事やライフイベント</h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                  結婚式、転職、昇進など、人生の節目に合わせて「今だ！」と決断される方が多くいらっしゃいます。
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">咀嚼機能の改善</h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                  噛み合わせが悪いと、しっかり噛めない、顎が痛いなどの症状が出ます。機能改善のために矯正を選択。
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">お子様の矯正がきっかけ</h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                  お子様の矯正治療を見て「自分も治したい」と感じ、親子で矯正を始められる方も増えています。
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Calendar className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">経済的・時間的余裕</h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                  学生時代はできなかったが、社会人になり経済的に余裕ができたため、矯正治療を決断。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Adult vs Child */}
        <section className="py-2 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              大人の矯正と子供の矯正の違い
            </h2>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-xl rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
                    <th className="p-4 text-left font-bold">比較項目</th>
                    <th className="p-4 text-center font-bold bg-amber-700">大人の矯正</th>
                    <th className="p-4 text-center font-bold">子供の矯正</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-amber-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">治療目的</td>
                    <td className="p-4 text-center">審美性・機能改善</td>
                    <td className="p-4 text-center">成長を利用した予防・誘導</td>
                  </tr>
                  <tr className="hover:bg-amber-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">治療期間</td>
                    <td className="p-4 text-center">やや長い（2〜3年）</td>
                    <td className="p-4 text-center bg-green-50">短め（1〜2年）</td>
                  </tr>
                  <tr className="hover:bg-amber-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">歯の動きやすさ</td>
                    <td className="p-4 text-center">ゆっくり</td>
                    <td className="p-4 text-center bg-green-50">早い（骨が柔らかい）</td>
                  </tr>
                  <tr className="hover:bg-amber-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">自己管理</td>
                    <td className="p-4 text-center bg-amber-50">できる（自己責任）</td>
                    <td className="p-4 text-center">親の協力が必要</td>
                  </tr>
                  <tr className="hover:bg-amber-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">治療への理解</td>
                    <td className="p-4 text-center bg-amber-50">高い（自発的）</td>
                    <td className="p-4 text-center">低い場合がある</td>
                  </tr>
                  <tr className="hover:bg-amber-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">モチベーション</td>
                    <td className="p-4 text-center bg-amber-50">高い</td>
                    <td className="p-4 text-center">親主導の場合も</td>
                  </tr>
                  <tr className="hover:bg-amber-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">審美装置の需要</td>
                    <td className="p-4 text-center bg-amber-50">高い</td>
                    <td className="p-4 text-center">低い</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-6">
              {[
                { item: '治療目的', adult: '審美性・機能改善', child: '成長を利用した予防・誘導' },
                { item: '治療期間', adult: 'やや長い（2〜3年）', child: '短め（1〜2年）' },
                { item: '歯の動きやすさ', adult: 'ゆっくり', child: '早い（骨が柔らかい）' },
                { item: '自己管理', adult: 'できる（自己責任）', child: '親の協力が必要' },
                { item: '治療への理解', adult: '高い（自発的）', child: '低い場合がある' },
                { item: 'モチベーション', adult: '高い', child: '親主導の場合も' },
                { item: '審美装置の需要', adult: '高い', child: '低い' },
              ].map((row, index) => (
                <div key={index} className="bg-white border-2 border-amber-200 rounded-xl p-4 shadow-md">
                  <h3 className="font-bold text-gray-900 mb-3 text-center">{row.item}</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-amber-50 p-3 rounded">
                      <div className="text-xs text-gray-600 mb-1">大人</div>
                      <div className="font-semibold text-gray-900">{row.adult}</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <div className="text-xs text-gray-600 mb-1">子供</div>
                      <div className="font-semibold text-gray-900">{row.child}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-amber-600 mr-3" />
                大人の矯正のメリット
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">●</span>
                  <span><span className="font-bold">自己管理ができる：</span>装着時間や通院を自己責任で守れるため、計画通りに治療が進みやすい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">●</span>
                  <span><span className="font-bold">モチベーションが高い：</span>自分の意志で始めるため、治療へのモチベーションが維持しやすい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">●</span>
                  <span><span className="font-bold">審美的な選択肢が豊富：</span>目立たないマウスピース矯正や裏側矯正など、大人向けの治療法が充実</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">●</span>
                  <span><span className="font-bold">経済的な余裕：</span>社会人として経済力があるため、質の高い治療を選択できる</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recommended Methods */}
        <section className="py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              大人におすすめの矯正方法
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Invisalign */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-green-600">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-5xl mb-2">😁</div>
                      <h3 className="text-2xl font-bold text-gray-900">マウスピース矯正</h3>
                      <p className="text-sm text-gray-600">インビザライン</p>
                    </div>
                    <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      人気No.1
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">こんな大人におすすめ</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>接客業・営業職など人と接する仕事の方</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>ビジネスシーンで装置を目立たせたくない方</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>食事や歯磨きを普段通りに行いたい方</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>自己管理ができる方</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">費用</span>
                      <span className="font-bold text-gray-900">¥800,000〜</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">期間</span>
                      <span className="font-bold text-gray-900">1〜2年</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lingual Braces */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-purple-600">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-5xl mb-2">👄</div>
                      <h3 className="text-2xl font-bold text-gray-900">裏側矯正</h3>
                      <p className="text-sm text-gray-600">舌側矯正</p>
                    </div>
                    <div className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      完全に見えない
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">こんな大人におすすめ</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>絶対に装置を見せたくない方</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>アナウンサー・モデルなど人前に出る職業の方</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>結婚式などのイベントを控えている方</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>費用より審美性を優先したい方</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">費用</span>
                      <span className="font-bold text-gray-900">¥1,200,000〜</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">期間</span>
                      <span className="font-bold text-gray-900">2〜3年</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Voices */}
        <section className="py-2 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              大人で矯正を始めた患者様の声
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-l-4 border-blue-600 shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    45歳
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">会社員（女性）マウスピース矯正</div>
                    <div className="text-sm text-gray-600">治療期間：1年8ヶ月</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  「ずっとコンプレックスだった出っ歯を、45歳で治す決心をしました。職場で矯正していることに気づかれることもなく、1年半で理想の歯並びに。もっと早くやれば良かったと思いますが、今からでも遅くないと実感しています。笑顔に自信が持て、人生が変わりました。」
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-600 shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    38歳
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">営業職（男性）裏側矯正</div>
                    <div className="text-sm text-gray-600">治療期間：2年3ヶ月</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  「営業職なので、見た目が重要です。裏側矯正なら誰にも気づかれず治療できました。初めは舌に違和感がありましたが、1週間で慣れました。費用は高めでしたが、投資する価値は十分にありました。お客様からも『印象が良くなった』と言われます。」
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-l-4 border-purple-600 shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    52歳
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">主婦（女性）ワイヤー矯正</div>
                    <div className="text-sm text-gray-600">治療期間：2年6ヶ月</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  「子育てが一段落し、『今度は自分のために』と矯正を決意。52歳でワイヤー矯正を始めました。周囲からは『今から？』と驚かれましたが、自分の人生なので気にしませんでした。歯並びが整い、顔の印象も若返った気がします。何歳からでも遅くないと実感しています。」
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-2 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              大人の矯正に関するよくある質問
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">何歳まで矯正治療はできますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 年齢制限はありません。歯と歯茎が健康であれば、60代、70代でも矯正治療は可能です。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="font-bold text-green-700 mb-2">✓ 矯正可能な条件</p>
                      <ul className="text-sm space-y-1">
                        <li>• 歯が健康である</li>
                        <li>• 歯茎が健康である</li>
                        <li>• 歯周病がコントロールされている</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="font-bold text-yellow-700 mb-2">! 注意が必要な場合</p>
                      <p className="text-sm text-[#5A4D41]">
                        重度の歯周病がある場合は、まず歯周病の治療を優先する必要があります
                      </p>
                    </div>
                  </div>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    当院では、お口の状態を詳しく診査し、矯正治療が可能かどうかを判断いたします。年齢を理由に諦める必要はありません。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">大人になってからでは遅すぎませんか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 遅すぎることはありません。確かに子供の方が歯が動きやすいですが、大人でも適切な治療を行えば確実に歯は動きます。
                  </p>
                  <div className="bg-[#FFF9F0] p-4 rounded-lg mb-3 border-l-4 border-[#E67A2E]">
                    <h4 className="font-bold text-[#5A4D41] mb-2">大人の矯正のメリット</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E]">✓</span>
                        <span>自己管理ができる → 計画通りに進みやすい</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E]">✓</span>
                        <span>モチベーションが高い → 治療への協力度が高い</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E]">✓</span>
                        <span>自分の意志で始める → 満足度が高い</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <strong className="text-blue-600">「今が一番若い時」です。</strong>思い立った時が始め時です。何歳からでも美しい歯並びを手に入れることができます。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">仕事をしながらでも矯正治療はできますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> はい、もちろん可能です。通院は月1回程度なので、仕事への影響は最小限です。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="font-bold text-green-700 mb-2">目立たない装置</p>
                      <ul className="text-sm space-y-1">
                        <li>• マウスピース矯正</li>
                        <li>• 裏側矯正</li>
                        <li>• 審美ブラケット</li>
                      </ul>
                      <p className="text-xs text-[#5A4D41] mt-2">接客業や営業職でも問題なし</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="font-bold text-blue-700 mb-2">通院しやすい診療時間</p>
                      <ul className="text-sm space-y-1">
                        <li>• 平日夜間診療</li>
                        <li>• 土曜日診療</li>
                        <li>• 予約制で待ち時間なし</li>
                      </ul>
                      <p className="text-xs text-[#5A4D41] mt-2">仕事のスケジュールに合わせて通院可能</p>
                    </div>
                  </div>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    お仕事のスケジュールに合わせて通院いただけますので、ご安心ください。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">大人の矯正は子供より痛いですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 痛みの感じ方には個人差がありますが、大人だから特別痛いということはありません。
                  </p>
                  <div className="bg-[#FFF9F0] p-4 rounded-lg mb-3">
                    <h4 className="font-bold text-[#5A4D41] mb-2">痛みについて</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E]">•</span>
                        <span>装置をつけた直後や調整後2〜3日は、歯が浮くような違和感や痛みが出ることがあります</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E]">•</span>
                        <span>市販の痛み止めで十分コントロールできる範囲です</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E]">•</span>
                        <span>マウスピース矯正は特に痛みが少ないと言われています</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    痛みが心配な方には、マウスピース矯正をお勧めしています。ワイヤー矯正と比べて痛みや違和感が少なく、快適に治療を進められます。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">銀歯や差し歯があっても矯正できますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> はい、できます。銀歯や差し歯があっても、ほとんどの場合は問題なく矯正治療を行えます。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="font-bold text-green-700 mb-2">問題ないケース</p>
                      <ul className="text-sm space-y-1">
                        <li>• 銀歯（インレー、クラウン）</li>
                        <li>• セラミックの差し歯</li>
                        <li>• ブリッジ（場合による）</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="font-bold text-yellow-700 mb-2">注意が必要なケース</p>
                      <ul className="text-sm space-y-1">
                        <li>• インプラント（動かせない）</li>
                        <li>• 大きなブリッジ</li>
                        <li>• 矯正後に被せ物をやり直す場合あり</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    まずは詳しく診査させていただき、被せ物の状態を確認した上で、最適な治療計画を立案いたします。矯正後に被せ物をやり直す場合は、セラミックなど審美性の高い材料をご提案します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-2 bg-white">
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
                href="/orthodontics/case-studies"
                className="bg-white border-2 border-amber-200 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-amber-600 transition-colors">
                    症例紹介
                  </h3>
                  <ChevronRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  実際の治療例と患者様の声
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2 bg-gradient-to-r from-amber-600 to-yellow-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm text-white rounded-3xl shadow-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                今からでも遅くない。理想の笑顔を手に入れましょう
              </h2>
              <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                年齢を理由に諦める必要はありません。<br />
                無料カウンセリングで、あなたに最適な矯正プランをご提案します。
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
      </main>
      <Footer />
    </>
  );
}
