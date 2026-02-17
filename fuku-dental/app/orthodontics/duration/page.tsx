import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { ChevronRight, Clock, Calendar, CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: '矯正治療の期間｜どれくらいかかる？通院頻度は？｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '矯正治療にかかる期間を詳しく解説。ワイヤー矯正2〜3年、マウスピース矯正1〜2年、部分矯正3ヶ月〜1年。通院頻度や治療の流れ、期間を短縮する方法もご紹介します。',
  keywords: '矯正,期間,治療期間,どのくらい,何年,通院,頻度,短縮,F歯科・矯正歯科 豊洲プライムスクエア院',
};

export default function OrthodonticsDurationPage() {
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
              <span className="text-amber-600 font-medium">治療期間</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                矯正治療の期間について
              </h1>
              <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                矯正治療にかかる期間と通院頻度を詳しく解説します
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent"></div>
        </section>

        {/* Overview */}
        <section className="py-2 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                矯正治療にはどれくらいの期間がかかる？
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                矯正治療の期間は、歯並びの状態や選択する治療法によって大きく異なります。<br />
                一般的には<span className="font-bold text-amber-700">全体矯正で1〜3年、部分矯正で3ヶ月〜1年程度</span>が目安です。<br />
                治療期間を正しく理解することで、計画的に矯正治療を進めることができます。
              </p>
            </div>
          </div>
        </section>

        {/* Duration by Type */}
        <section className="py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              矯正方法別の治療期間
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Wire Braces */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-amber-600">
                <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-5xl mr-4">🦷</div>
                      <h3 className="text-2xl font-bold text-gray-900">ワイヤー矯正</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-center mb-6 bg-amber-50 rounded-xl p-6">
                    <div className="text-sm text-gray-600 mb-2">平均治療期間</div>
                    <div className="text-5xl font-bold text-amber-600 mb-2">2〜3年</div>
                    <div className="text-sm text-gray-500">（24〜36ヶ月）</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">動的治療期間</div>
                        <div className="text-sm text-gray-700">装置をつけて歯を動かす期間：2〜3年</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">保定期間</div>
                        <div className="text-sm text-gray-700">後戻りを防ぐ期間：2年以上</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">通院頻度</div>
                        <div className="text-sm text-gray-700">月1回程度（調整のため）</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">症例別の目安：</span><br />
                      軽度：1.5〜2年 / 中度：2〜2.5年 / 重度：2.5〜3年以上
                    </p>
                  </div>
                </div>
              </div>

              {/* Clear Aligners */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-green-600">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-5xl mr-4">😁</div>
                      <h3 className="text-2xl font-bold text-gray-900">マウスピース矯正</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-center mb-6 bg-green-50 rounded-xl p-6">
                    <div className="text-sm text-gray-600 mb-2">平均治療期間</div>
                    <div className="text-5xl font-bold text-green-600 mb-2">1〜2年</div>
                    <div className="text-sm text-gray-500">（12〜24ヶ月）</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">動的治療期間</div>
                        <div className="text-sm text-gray-700">マウスピース装着期間：1〜2年</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">保定期間</div>
                        <div className="text-sm text-gray-700">後戻りを防ぐ期間：2年以上</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">通院頻度</div>
                        <div className="text-sm text-gray-700">2〜3ヶ月に1回程度（チェックのため）</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-600 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">重要：</span>1日20〜22時間の装着が必須。装着時間が短いと期間が延びます。
                    </p>
                  </div>
                </div>
              </div>

              {/* Lingual Braces */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-purple-600">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-5xl mr-4">👄</div>
                      <h3 className="text-2xl font-bold text-gray-900">裏側矯正</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-center mb-6 bg-purple-50 rounded-xl p-6">
                    <div className="text-sm text-gray-600 mb-2">平均治療期間</div>
                    <div className="text-5xl font-bold text-purple-600 mb-2">2〜3年</div>
                    <div className="text-sm text-gray-500">（24〜36ヶ月）</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">動的治療期間</div>
                        <div className="text-sm text-gray-700">装置をつけて歯を動かす期間：2〜3年</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">保定期間</div>
                        <div className="text-sm text-gray-700">後戻りを防ぐ期間：2年以上</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">通院頻度</div>
                        <div className="text-sm text-gray-700">月1回程度（調整のため）</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-600 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">注意：</span>表側矯正よりやや期間が長くなる場合があります。
                    </p>
                  </div>
                </div>
              </div>

              {/* Partial */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-teal-600">
                <div className="bg-gradient-to-br from-teal-100 to-cyan-100 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-5xl mr-4">⚡</div>
                      <h3 className="text-2xl font-bold text-gray-900">部分矯正</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-center mb-6 bg-teal-50 rounded-xl p-6">
                    <div className="text-sm text-gray-600 mb-2">平均治療期間</div>
                    <div className="text-5xl font-bold text-teal-600 mb-2">3ヶ月〜1年</div>
                    <div className="text-sm text-gray-500">（3〜12ヶ月）</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">動的治療期間</div>
                        <div className="text-sm text-gray-700">装置をつける期間：3ヶ月〜1年</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">保定期間</div>
                        <div className="text-sm text-gray-700">後戻りを防ぐ期間：1年以上</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">通院頻度</div>
                        <div className="text-sm text-gray-700">月1回程度（調整のため）</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-600 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">メリット：</span>短期間・低費用で気になる部分だけを改善できます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Flow Timeline */}
        <section className="py-2 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              矯正治療の流れと期間
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-amber-200 hidden md:block"></div>

              <div className="space-y-12">
                {[
                  {
                    phase: 'STEP 1',
                    title: '初診相談',
                    duration: '1日（60分）',
                    desc: 'お口の中を拝見し、矯正治療の必要性や費用の目安をご説明します。',
                    icon: '📋'
                  },
                  {
                    phase: 'STEP 2',
                    title: '精密検査',
                    duration: '1日（90分）',
                    desc: 'レントゲン・CT・歯型採取・口腔内写真撮影などを行い、詳細なデータを収集します。',
                    icon: '🔬'
                  },
                  {
                    phase: 'STEP 3',
                    title: '診断・治療計画の説明',
                    duration: '検査から2週間後',
                    desc: '検査結果を分析し、最適な治療方針・期間・費用を詳しくご説明します。',
                    icon: '📊'
                  },
                  {
                    phase: 'STEP 4',
                    title: '装置の装着',
                    duration: '1日（2〜3時間）',
                    desc: '歯にブラケットやワイヤーを装着します。歯磨きの方法も指導します。',
                    icon: '🦷'
                  },
                  {
                    phase: 'STEP 5',
                    title: '動的治療期間',
                    duration: '1〜3年',
                    desc: '月1回程度通院し、ワイヤーの調整や交換を行います。歯が徐々に動いていきます。',
                    icon: '⚙️',
                    highlight: true
                  },
                  {
                    phase: 'STEP 6',
                    title: '装置の除去',
                    duration: '1日（1時間）',
                    desc: '歯並びが整ったら装置を外します。歯のクリーニングも行います。',
                    icon: '✨'
                  },
                  {
                    phase: 'STEP 7',
                    title: '保定期間',
                    duration: '2年以上',
                    desc: 'リテーナー（保定装置）を装着し、後戻りを防ぎます。3〜6ヶ月に1回通院します。',
                    icon: '🔒',
                    highlight: true
                  },
                ].map((step, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="hidden md:flex absolute left-0 w-16 h-16 bg-amber-600 text-white rounded-full items-center justify-center text-3xl shadow-lg z-10">
                      {step.icon}
                    </div>
                    <div className={`md:ml-24 w-full ${step.highlight ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300' : 'bg-white border-2 border-gray-200'} rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-sm font-bold text-amber-600 mb-1">{step.phase}</div>
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-5 h-5 mr-2" />
                            <span className="font-semibold">{step.duration}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Factors Affecting Duration */}
        <section className="py-2 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              治療期間に影響する要因
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 text-amber-600 mr-3" />
                  期間が長くなる要因
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">重度の歯並びの乱れ</div>
                      <div className="text-sm text-gray-600">ガタガタが強い、骨格的な問題がある場合</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">抜歯が必要なケース</div>
                      <div className="text-sm text-gray-600">抜歯後のスペースを閉じる時間が必要</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">大人の矯正</div>
                      <div className="text-sm text-gray-600">成長期を過ぎると歯の動きがゆっくり</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">通院の中断</div>
                      <div className="text-sm text-gray-600">定期的な調整が遅れると期間が延びる</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">装着時間の不足</div>
                      <div className="text-sm text-gray-600">マウスピース矯正で装着時間が短い場合</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  期間を短縮できる要因
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">軽度の歯並びの乱れ</div>
                      <div className="text-sm text-gray-600">移動距離が少なければ短期間で完了</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">成長期の矯正</div>
                      <div className="text-sm text-gray-600">子供や若い方は歯が動きやすい</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">部分矯正の選択</div>
                      <div className="text-sm text-gray-600">前歯だけなら3ヶ月〜1年で完了</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">定期的な通院</div>
                      <div className="text-sm text-gray-600">予定通りの調整で計画的に進む</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">加速装置の使用</div>
                      <div className="text-sm text-gray-600">オルソパルスなどで歯の動きを促進</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Retention Period */}
        <section className="py-2 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              保定期間の重要性
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 shadow-xl border-2 border-blue-200">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl mr-6 flex-shrink-0">
                  🔒
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    矯正治療は装置を外してからが本当の勝負
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    動的治療で歯並びが整っても、<span className="font-bold text-blue-700">保定をしなければ歯は必ず元の位置に戻ろうとします</span>。
                    これを「後戻り」と言います。保定期間をしっかり守ることが、美しい歯並びを長く保つための鍵です。
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">保定装置（リテーナー）の種類</h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">固定式リテーナー：</span>歯の裏側にワイヤーを接着
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">取り外し式リテーナー：</span>透明なマウスピース型
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">併用：</span>固定式と取り外し式を組み合わせる
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">保定期間のスケジュール</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center bg-blue-50 p-3 rounded">
                      <span className="text-gray-700">装置除去後〜6ヶ月</span>
                      <span className="font-bold text-gray-900">24時間装着</span>
                    </div>
                    <div className="flex justify-between items-center bg-blue-50 p-3 rounded">
                      <span className="text-gray-700">6ヶ月〜1年</span>
                      <span className="font-bold text-gray-900">夜間のみ装着</span>
                    </div>
                    <div className="flex justify-between items-center bg-blue-50 p-3 rounded">
                      <span className="text-gray-700">1年〜2年以上</span>
                      <span className="font-bold text-gray-900">週2〜3回装着</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-red-900 mb-2">保定装置を使わないとどうなる？</div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      保定装置の使用をやめると、数ヶ月〜1年程度で歯並びが元に戻り始めます。
                      せっかく長い時間と費用をかけて整えた歯並びが台無しになってしまいます。
                      <span className="font-bold text-red-700">保定期間は矯正治療の一部</span>として、必ず守りましょう。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-2 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              治療期間に関するよくある質問
            </h2>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-amber-50 transition-colors">
                  <span className="font-semibold text-lg text-gray-900">
                    予定より治療期間が長引くことはありますか？
                  </span>
                  <ChevronRight className="w-5 h-5 text-amber-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t">
                  はい、あります。歯の動き方には個人差があり、予想より時間がかかる場合があります。また、通院を怠ったり、マウスピース矯正で装着時間が短かったりすると、計画より期間が延びます。当院では定期的に進捗を確認し、適宜治療計画を見直しています。
                </div>
              </details>

              <details className="group bg-white rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-amber-50 transition-colors">
                  <span className="font-semibold text-lg text-gray-900">
                    治療期間を短くする方法はありますか？
                  </span>
                  <ChevronRight className="w-5 h-5 text-amber-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t">
                  歯並びの状態によっては、部分矯正で短期間に治療できる場合があります。また、オルソパルス（光加速装置）などの補助装置を使用すると、治療期間を最大30〜40%短縮できることがあります。詳しくはカウンセリング時にご相談ください。
                </div>
              </details>

              <details className="group bg-white rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-amber-50 transition-colors">
                  <span className="font-semibold text-lg text-gray-900">
                    保定期間はいつまで続けるべきですか？
                  </span>
                  <ChevronRight className="w-5 h-5 text-amber-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t">
                  最低でも2年間は必要ですが、理想的には「一生涯」です。ただし、最初の2年を過ぎれば装着頻度は減らせます（週2〜3回程度）。歯は一生動き続けるため、美しい歯並びを維持したい方は、できるだけ長く保定装置を使用することをおすすめします。
                </div>
              </details>

              <details className="group bg-white rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-amber-50 transition-colors">
                  <span className="font-semibold text-lg text-gray-900">
                    大人と子供で治療期間は違いますか？
                  </span>
                  <ChevronRight className="w-5 h-5 text-amber-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t">
                  はい、一般的に子供の方が短期間で治療できます。成長期の子供は骨が柔らかく歯が動きやすいため、同じ歯並びでも大人より短期間で済むことが多いです。ただし、大人でも適切な治療を行えば確実に歯は動きますのでご安心ください。
                </div>
              </details>
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
                あなたの治療期間を詳しくお伝えします
              </h2>
              <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                無料カウンセリングで、歯並びの状態を診断し、<br />
                具体的な治療期間と通院スケジュールをご説明します。
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
