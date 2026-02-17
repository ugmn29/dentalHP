import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { ChevronRight, DollarSign, CreditCard, Calendar, Calculator, CheckCircle, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '矯正治療の費用・料金｜分割払い・デンタルローン対応｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '矯正治療の費用を詳しく解説。ワイヤー矯正70万円〜、マウスピース矯正80万円〜、裏側矯正120万円〜。分割払い・デンタルローン・医療費控除にも対応。明確な料金体系で安心です。',
  keywords: '矯正,費用,料金,値段,安い,分割払い,デンタルローン,医療費控除,支払い方法,F歯科・矯正歯科 豊洲プライムスクエア院',
};

export default function OrthodonticsCostPage() {
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
              <span className="text-amber-600 font-medium">費用・料金</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                矯正治療の費用・料金
              </h1>
              <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                明確な料金体系で安心。分割払い・デンタルローンにも対応しています
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent"></div>
        </section>

        {/* Price Overview */}
        <section className="py-2 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                当院の矯正治療費用
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                当院では、治療開始前に総額をご提示する「トータルフィー制度」を採用しています。<br />
                追加費用が発生する心配がないため、安心して治療を受けていただけます。
              </p>
            </div>

            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8 mb-12">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">トータルフィー制度とは？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    治療開始時に装置代・調整料・保定装置代など、治療完了までにかかる全ての費用を含めた総額をご提示します。
                    治療期間が延びても追加費用は発生しませんので、予算を立てやすく安心です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Price Plans */}
        <section className="py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              矯正治療の料金プラン
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Wire Braces */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-amber-600 hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-6 text-center">
                  <div className="text-5xl mb-4">🦷</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">ワイヤー矯正</h3>
                  <p className="text-sm text-gray-600">メタルブラケット</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-amber-600 mb-2">¥700,000</div>
                    <div className="text-sm text-gray-500">〜 ¥900,000</div>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>装置代込み</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>調整料込み（通院毎）</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>保定装置代込み</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>治療期間：2〜3年</span>
                    </li>
                  </ul>
                  <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded">
                    ※最も実績のある確実な治療法
                  </div>
                </div>
              </div>

              {/* Clear Braces */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-blue-600 hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 text-center">
                  <div className="text-5xl mb-4">✨</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">審美ブラケット</h3>
                  <p className="text-sm text-gray-600">ホワイトブラケット</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2">¥850,000</div>
                    <div className="text-sm text-gray-500">〜 ¥1,050,000</div>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>白い装置で目立ちにくい</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>調整料込み（通院毎）</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>保定装置代込み</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>治療期間：2〜3年</span>
                    </li>
                  </ul>
                  <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded">
                    ※審美性を重視する方におすすめ
                  </div>
                </div>
              </div>

              {/* Clear Aligners */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-green-600 hover:shadow-2xl transition-shadow duration-300 relative">
                <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  人気
                </div>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 text-center">
                  <div className="text-5xl mb-4">😁</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">マウスピース矯正</h3>
                  <p className="text-sm text-gray-600">インビザライン</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-green-600 mb-2">¥800,000</div>
                    <div className="text-sm text-gray-500">〜 ¥1,100,000</div>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>透明で目立たない</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>取り外しができて衛生的</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>保定装置代込み</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>治療期間：1〜2年</span>
                    </li>
                  </ul>
                  <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded">
                    ※目立たせたくない方に最適
                  </div>
                </div>
              </div>

              {/* Lingual Braces */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-purple-600 hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 text-center">
                  <div className="text-5xl mb-4">👄</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">裏側矯正</h3>
                  <p className="text-sm text-gray-600">舌側矯正</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-purple-600 mb-2">¥1,200,000</div>
                    <div className="text-sm text-gray-500">〜 ¥1,500,000</div>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>装置が完全に見えない</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>調整料込み（通院毎）</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>保定装置代込み</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>治療期間：2〜3年</span>
                    </li>
                  </ul>
                  <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded">
                    ※絶対に見せたくない方向け
                  </div>
                </div>
              </div>
            </div>

            {/* Partial Orthodontics */}
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-teal-200">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-teal-100 to-cyan-100 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">⚡</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">部分矯正</h3>
                      <p className="text-sm text-gray-600">MTM</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-3xl font-bold text-teal-600">¥300,000 〜 ¥500,000</div>
                        <div className="text-sm text-gray-500 mt-1">治療期間：3ヶ月〜1年</div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700 mb-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>前歯など気になる部分だけを治療</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>全体矯正より短期間・低費用</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>軽度の歯並びの乱れに対応</span>
                      </li>
                    </ul>
                    <div className="text-xs text-gray-500 bg-teal-50 p-3 rounded border-l-4 border-teal-600">
                      ※適応できる症例が限られます。まずは検査を受けてください。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Costs */}
        <section className="py-2 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              その他の費用
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Calculator className="w-6 h-6 text-amber-600 mr-3" />
                  初期費用
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                    <span className="text-gray-700">初診相談料</span>
                    <span className="font-bold text-gray-900">無料</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                    <span className="text-gray-700">精密検査料</span>
                    <span className="font-bold text-gray-900">¥50,000</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                    <span className="text-gray-700">診断料</span>
                    <span className="font-bold text-gray-900">検査料に含む</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 bg-white p-3 rounded">
                  ※精密検査では、レントゲン・CT・歯型採取・口腔内写真撮影などを行います。
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertCircle className="w-6 h-6 text-amber-600 mr-3" />
                  オプション費用
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                    <span className="text-gray-700">抜歯（1本）</span>
                    <span className="font-bold text-gray-900">¥5,000〜¥10,000</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                    <span className="text-gray-700">歯科矯正用アンカースクリュー（1本）</span>
                    <span className="font-bold text-gray-900">¥20,000</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                    <span className="text-gray-700">装置の再製作（紛失時）</span>
                    <span className="font-bold text-gray-900">¥30,000〜</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 bg-white p-3 rounded">
                  ※必要な場合のみ発生する費用です。事前にご説明します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-2 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              お支払い方法
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <DollarSign className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">現金一括払い</h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed mb-4">
                  治療開始時に一括でお支払いいただく方法です。
                </p>
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <div className="text-xs text-gray-600 mb-1">特典</div>
                  <div className="font-bold text-amber-700">5%割引</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CreditCard className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">クレジットカード</h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed mb-4">
                  各種クレジットカードに対応しています。分割払いも可能です。
                </p>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-xs text-gray-600 mb-1">対応ブランド</div>
                  <div className="font-bold text-blue-700 text-xs">VISA / Master / JCB / AMEX</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-green-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">デンタルローン</h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed mb-4">
                  月々の負担を抑えた分割払いが可能です。最大84回払いまで対応。
                </p>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-xs text-gray-600 mb-1">例：80万円の場合</div>
                  <div className="font-bold text-green-700">月々¥11,000〜</div>
                </div>
              </div>
            </div>

            {/* Dental Loan Simulation */}
            <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
                デンタルローン　シミュレーション
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border-2 border-amber-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-amber-700 mb-4 text-center">
                    ワイヤー矯正（¥800,000の場合）
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-amber-50 p-3 rounded">
                      <span className="text-gray-700">12回払い</span>
                      <span className="font-bold text-gray-900">約¥69,000/月</span>
                    </div>
                    <div className="flex justify-between items-center bg-amber-50 p-3 rounded">
                      <span className="text-gray-700">24回払い</span>
                      <span className="font-bold text-gray-900">約¥35,500/月</span>
                    </div>
                    <div className="flex justify-between items-center bg-amber-50 p-3 rounded">
                      <span className="text-gray-700">36回払い</span>
                      <span className="font-bold text-gray-900">約¥24,500/月</span>
                    </div>
                    <div className="flex justify-between items-center bg-amber-50 p-3 rounded">
                      <span className="text-gray-700">60回払い</span>
                      <span className="font-bold text-gray-900">約¥15,500/月</span>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-green-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-green-700 mb-4 text-center">
                    マウスピース矯正（¥900,000の場合）
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-green-50 p-3 rounded">
                      <span className="text-gray-700">12回払い</span>
                      <span className="font-bold text-gray-900">約¥78,000/月</span>
                    </div>
                    <div className="flex justify-between items-center bg-green-50 p-3 rounded">
                      <span className="text-gray-700">24回払い</span>
                      <span className="font-bold text-gray-900">約¥40,000/月</span>
                    </div>
                    <div className="flex justify-between items-center bg-green-50 p-3 rounded">
                      <span className="text-gray-700">36回払い</span>
                      <span className="font-bold text-gray-900">約¥27,500/月</span>
                    </div>
                    <div className="flex justify-between items-center bg-green-50 p-3 rounded">
                      <span className="text-gray-700">60回払い</span>
                      <span className="font-bold text-gray-900">約¥17,500/月</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-6 text-center">
                ※上記は概算です。実質年率や手数料により変動します。詳しくはお問い合わせください。
              </p>
            </div>
          </div>
        </section>

        {/* Medical Expense Deduction */}
        <section className="py-2 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              医療費控除について
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="flex items-start mb-6">
                <CheckCircle className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    矯正治療は医療費控除の対象です
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    矯正治療は、「噛み合わせの改善」など<span className="font-bold text-blue-700">治療目的であれば医療費控除の対象</span>となります。
                    年間の医療費が10万円を超えた場合、確定申告で所得税の一部が還付されます。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">医療費控除の計算例</h4>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">例：年収500万円の方が、矯正治療で80万円支払った場合</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-700">医療費総額：</span>
                        <span className="font-semibold">¥800,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">基礎控除額：</span>
                        <span className="font-semibold">− ¥100,000</span>
                      </div>
                      <div className="border-t border-blue-200 pt-2 flex justify-between">
                        <span className="font-bold text-gray-900">控除対象額：</span>
                        <span className="font-bold text-blue-700 text-lg">¥700,000</span>
                      </div>
                      <div className="flex justify-between bg-blue-100 p-2 rounded mt-3">
                        <span className="font-bold text-gray-900">還付金の目安：</span>
                        <span className="font-bold text-blue-700 text-lg">約¥140,000</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">
                    ※所得税率20%で計算。実際の還付額は所得や他の控除により異なります。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-gray-900 mb-4">医療費控除に必要なもの</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>医療費の領収書（当院で発行します）</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>診断書（噛み合わせ改善が目的であることを証明）</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>通院にかかった交通費の記録</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 bg-gray-50 p-3 rounded">
                  ※大人の矯正でも「噛み合わせの改善」「発音障害の改善」などの治療目的があれば控除対象となります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-2 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              費用に関するよくある質問
            </h2>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-amber-50 transition-colors">
                  <span className="font-semibold text-lg text-gray-900">
                    トータルフィー以外に追加費用はかかりませんか？
                  </span>
                  <ChevronRight className="w-5 h-5 text-amber-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t">
                  基本的にはかかりません。トータルフィーには、装置代・調整料・保定装置代など、治療完了までに必要な全ての費用が含まれています。ただし、抜歯が必要な場合や、装置を紛失された場合などは別途費用が発生します。事前に詳しくご説明いたします。
                </div>
              </details>

              <details className="group bg-white rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-amber-50 transition-colors">
                  <span className="font-semibold text-lg text-gray-900">
                    デンタルローンの審査は厳しいですか？
                  </span>
                  <ChevronRight className="w-5 h-5 text-amber-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t">
                  安定した収入があれば、正社員の方はもちろん、パート・アルバイトの方でも審査に通る可能性があります。学生の方は保護者の方が契約者になることも可能です。審査は通常2〜3営業日で結果が出ます。
                </div>
              </details>

              <details className="group bg-white rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-amber-50 transition-colors">
                  <span className="font-semibold text-lg text-gray-900">
                    矯正治療は保険が効きますか？
                  </span>
                  <ChevronRight className="w-5 h-5 text-amber-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t">
                  一般的な矯正治療は自費診療（保険適用外）となります。ただし、「顎変形症」や「先天性疾患」など、特定の症例では保険が適用される場合があります。該当する可能性がある場合は、診断時に詳しくご説明いたします。
                </div>
              </details>

              <details className="group bg-white rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-amber-50 transition-colors">
                  <span className="font-semibold text-lg text-gray-900">
                    治療期間が延びた場合、追加料金はかかりますか？
                  </span>
                  <ChevronRight className="w-5 h-5 text-amber-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t">
                  いいえ、かかりません。トータルフィー制度では、治療期間が予定より長引いても追加料金は発生しません。ただし、患者様のご都合で治療を一時中断される場合などは、別途ご相談させていただくことがあります。
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
                まずは無料カウンセリングでご相談ください
              </h2>
              <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                費用や支払い方法について、詳しくご説明いたします。<br />
                あなたに最適な治療プランをご提案します。
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
