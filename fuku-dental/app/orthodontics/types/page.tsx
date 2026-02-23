import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import { ChevronRight, CheckCircle, XCircle, Clock, DollarSign, Eye, Smile } from 'lucide-react';

export const metadata: Metadata = {
  title: '矯正治療の種類｜ワイヤー・マウスピース・裏側矯正の比較｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲の歯医者 F歯科・矯正歯科が矯正治療の種類を詳しく解説。ワイヤー矯正、マウスピース矯正、裏側矯正、部分矯正など、それぞれの特徴・費用・治療期間を比較。あなたに最適な矯正方法が見つかります。',
  keywords: '矯正,種類,ワイヤー矯正,マウスピース矯正,インビザライン,裏側矯正,部分矯正,比較,F歯科・矯正歯科 豊洲プライムスクエア院',
  openGraph: {
    title: '矯正治療の種類｜ワイヤー・マウスピース・裏側矯正の比較｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲の歯医者 F歯科が矯正治療の種類を詳しく解説。ワイヤー・マウスピース・裏側・部分矯正の特徴・費用・治療期間を比較。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/orthodontics/types',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function OrthodonticsTypesPage() {
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
              <span className="text-amber-600 font-medium">矯正治療の種類</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                矯正治療の種類
              </h1>
              <PageImage path="/orthodontics/types" alt="矯正治療の種類" />
              <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                豊洲駅徒歩2分のF歯科が、ライフスタイルやご希望に合わせて選べる多彩な矯正治療法をご用意しています
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent"></div>
        </section>

        {/* Overview Section */}
        <section className="py-2 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                あなたに最適な矯正治療を見つけましょう
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                矯正治療には、ワイヤー矯正、マウスピース矯正、裏側矯正など、様々な種類があります。<br />
                それぞれにメリット・デメリットがあり、歯並びの状態やライフスタイル、ご予算によって最適な治療法は異なります。<br />
                当院では、患者様一人ひとりに最適な矯正方法をご提案いたします。
              </p>
            </div>
          </div>
        </section>

        {/* Type 1: Wire Braces */}
        <section className="py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-amber-100 to-yellow-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl mb-6">🦷</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">ワイヤー矯正</h3>
                    <p className="text-gray-600 text-sm">最も実績のあるスタンダードな矯正法</p>
                  </div>
                </div>
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="flex items-center mb-6">
                    <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">
                      表側矯正
                    </span>
                    <span className="ml-3 text-sm text-gray-500">Metal / Ceramic Braces</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">
                    歯にブラケットとワイヤーを装着する従来型の矯正
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    歯の表側にブラケット（小さな装置）を接着し、ワイヤーを通して歯を動かします。
                    最も歴史が長く、<span className="font-bold text-amber-700">ほぼ全ての症例に対応できる確実性の高い治療法</span>です。
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        メリット
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-amber-600 mr-2">●</span>
                          <span>複雑な症例にも対応可能</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-600 mr-2">●</span>
                          <span>装着忘れの心配がない</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-600 mr-2">●</span>
                          <span>治療実績が豊富で信頼性が高い</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-600 mr-2">●</span>
                          <span>費用が比較的リーズナブル</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <XCircle className="w-5 h-5 text-gray-400 mr-2" />
                        デメリット
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">●</span>
                          <span>装置が目立つ（白い装置で軽減可能）</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">●</span>
                          <span>歯磨きがしにくい</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">●</span>
                          <span>装置が口内を傷つけることがある</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">●</span>
                          <span>食事制限が必要</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 bg-amber-50 rounded-xl p-6">
                    <div className="text-center">
                      <Clock className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">治療期間</div>
                      <div className="font-bold text-gray-900">2〜3年</div>
                    </div>
                    <div className="text-center">
                      <DollarSign className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">費用目安</div>
                      <div className="font-bold text-gray-900">¥700,000〜</div>
                    </div>
                    <div className="text-center">
                      <Eye className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">目立ちにくさ</div>
                      <div className="font-bold text-gray-900">★★☆☆☆</div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold text-blue-900">こんな方におすすめ：</span>
                      歯並びのガタガタが強い方、確実な治療結果を求める方、費用を抑えたい方
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Type 2: Clear Aligners */}
        <section className="py-2 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="md:flex md:flex-row-reverse">
                <div className="md:w-2/5 bg-gradient-to-br from-blue-100 to-cyan-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl mb-6">😁</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">マウスピース矯正</h3>
                    <p className="text-gray-600 text-sm">目立たない、取り外せる矯正法</p>
                  </div>
                </div>
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="flex items-center mb-6">
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                      マウスピース型
                    </span>
                    <span className="ml-3 text-sm text-gray-500">Invisalign / Clear Aligners</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">
                    透明なマウスピースで目立たず矯正できる
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    透明なマウスピース型の装置を装着し、定期的に交換しながら歯を動かします。
                    <span className="font-bold text-blue-700">装置が目立たず、取り外しができる</span>ため、
                    食事や歯磨きも普段通りに行えます。
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        メリット
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">●</span>
                          <span>装置が透明で目立たない</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">●</span>
                          <span>取り外しができて衛生的</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">●</span>
                          <span>食事制限がない</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">●</span>
                          <span>痛みや違和感が少ない</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <XCircle className="w-5 h-5 text-gray-400 mr-2" />
                        デメリット
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">●</span>
                          <span>複雑な症例には対応できない場合がある</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">●</span>
                          <span>装着時間を守らないと効果が出ない</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">●</span>
                          <span>費用がやや高額</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">●</span>
                          <span>自己管理が必要</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 bg-blue-50 rounded-xl p-6">
                    <div className="text-center">
                      <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">治療期間</div>
                      <div className="font-bold text-gray-900">1〜2年</div>
                    </div>
                    <div className="text-center">
                      <DollarSign className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">費用目安</div>
                      <div className="font-bold text-gray-900">¥800,000〜</div>
                    </div>
                    <div className="text-center">
                      <Eye className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">目立ちにくさ</div>
                      <div className="font-bold text-gray-900">★★★★★</div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-600 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold text-green-900">こんな方におすすめ：</span>
                      装置を目立たせたくない方、接客業や営業職の方、食事を楽しみたい方
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Type 3: Lingual Braces */}
        <section className="py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-purple-100 to-pink-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl mb-6">👄</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">裏側矯正</h3>
                    <p className="text-gray-600 text-sm">外から見えない矯正法</p>
                  </div>
                </div>
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="flex items-center mb-6">
                    <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">
                      舌側矯正
                    </span>
                    <span className="ml-3 text-sm text-gray-500">Lingual Braces</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">
                    歯の裏側に装置をつける見えない矯正
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    歯の裏側（舌側）にブラケットとワイヤーを装着する矯正法です。
                    <span className="font-bold text-purple-700">正面からは装置がまったく見えない</span>ため、
                    矯正していることを周囲に気づかれたくない方に最適です。
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        メリット
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">●</span>
                          <span>正面から装置が見えない</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">●</span>
                          <span>ワイヤー矯正と同等の効果</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">●</span>
                          <span>前歯が引っ込みやすい</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">●</span>
                          <span>表側のエナメル質を傷つけない</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <XCircle className="w-5 h-5 text-gray-400 mr-2" />
                        デメリット
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">●</span>
                          <span>費用が高額</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">●</span>
                          <span>舌に違和感や痛みが出やすい</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">●</span>
                          <span>発音しにくくなることがある</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">●</span>
                          <span>歯磨きがさらに難しい</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 bg-purple-50 rounded-xl p-6">
                    <div className="text-center">
                      <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">治療期間</div>
                      <div className="font-bold text-gray-900">2〜3年</div>
                    </div>
                    <div className="text-center">
                      <DollarSign className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">費用目安</div>
                      <div className="font-bold text-gray-900">¥1,200,000〜</div>
                    </div>
                    <div className="text-center">
                      <Eye className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">目立ちにくさ</div>
                      <div className="font-bold text-gray-900">★★★★★</div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-600 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold text-purple-900">こんな方におすすめ：</span>
                      絶対に装置を見せたくない方、人前に出る職業の方、結婚式などのイベントを控えている方
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Type 4: Partial Orthodontics */}
        <section className="py-2 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="md:flex md:flex-row-reverse">
                <div className="md:w-2/5 bg-gradient-to-br from-green-100 to-emerald-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl mb-6">✨</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">部分矯正</h3>
                    <p className="text-gray-600 text-sm">気になる部分だけを治す矯正法</p>
                  </div>
                </div>
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="flex items-center mb-6">
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                      MTM（Minor Tooth Movement）
                    </span>
                    <span className="ml-3 text-sm text-gray-500">Partial Orthodontics</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">
                    前歯など気になる部分だけを短期間で改善
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    歯並び全体ではなく、前歯など<span className="font-bold text-green-700">気になる部分だけをピンポイントで治療</span>します。
                    全体矯正に比べて治療期間が短く、費用も抑えられるのが特徴です。
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        メリット
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">●</span>
                          <span>治療期間が短い（数ヶ月〜1年）</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">●</span>
                          <span>費用が全体矯正より安い</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">●</span>
                          <span>気になる部分だけ治せる</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">●</span>
                          <span>負担が少ない</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <XCircle className="w-5 h-5 text-gray-400 mr-2" />
                        デメリット
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">●</span>
                          <span>適応できる症例が限られる</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">●</span>
                          <span>噛み合わせは改善されない</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">●</span>
                          <span>後戻りしやすい場合がある</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">●</span>
                          <span>抜歯が必要な場合は不向き</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 bg-green-50 rounded-xl p-6">
                    <div className="text-center">
                      <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">治療期間</div>
                      <div className="font-bold text-gray-900">3ヶ月〜1年</div>
                    </div>
                    <div className="text-center">
                      <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">費用目安</div>
                      <div className="font-bold text-gray-900">¥300,000〜</div>
                    </div>
                    <div className="text-center">
                      <Smile className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">適応範囲</div>
                      <div className="font-bold text-gray-900">★★☆☆☆</div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-600 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold text-yellow-900">こんな方におすすめ：</span>
                      前歯の軽いガタガタや隙間が気になる方、短期間で治したい方、費用を抑えたい方
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-2 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              矯正治療の種類　比較表
            </h2>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-xl rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
                    <th className="p-4 text-left font-bold">比較項目</th>
                    <th className="p-4 text-center font-bold bg-amber-700">ワイヤー矯正</th>
                    <th className="p-4 text-center font-bold">マウスピース矯正</th>
                    <th className="p-4 text-center font-bold">裏側矯正</th>
                    <th className="p-4 text-center font-bold">部分矯正</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-amber-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">目立ちにくさ</td>
                    <td className="p-4 text-center">★★☆☆☆</td>
                    <td className="p-4 text-center bg-blue-50">★★★★★</td>
                    <td className="p-4 text-center bg-purple-50">★★★★★</td>
                    <td className="p-4 text-center">★★☆☆☆</td>
                  </tr>
                  <tr className="hover:bg-amber-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">適応範囲</td>
                    <td className="p-4 text-center bg-amber-50">★★★★★<br /><span className="text-xs text-gray-600">全症例対応</span></td>
                    <td className="p-4 text-center">★★★☆☆<br /><span className="text-xs text-gray-600">軽度〜中度</span></td>
                    <td className="p-4 text-center">★★★★☆<br /><span className="text-xs text-gray-600">ほぼ全症例</span></td>
                    <td className="p-4 text-center">★★☆☆☆<br /><span className="text-xs text-gray-600">軽度のみ</span></td>
                  </tr>
                  <tr className="hover:bg-amber-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">治療期間</td>
                    <td className="p-4 text-center">2〜3年</td>
                    <td className="p-4 text-center">1〜2年</td>
                    <td className="p-4 text-center">2〜3年</td>
                    <td className="p-4 text-center bg-green-50">3ヶ月〜1年</td>
                  </tr>
                  <tr className="hover:bg-amber-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">費用目安</td>
                    <td className="p-4 text-center bg-amber-50">¥700,000〜</td>
                    <td className="p-4 text-center">¥800,000〜</td>
                    <td className="p-4 text-center">¥1,200,000〜</td>
                    <td className="p-4 text-center bg-green-50">¥300,000〜</td>
                  </tr>
                  <tr className="hover:bg-amber-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">取り外し</td>
                    <td className="p-4 text-center">不可</td>
                    <td className="p-4 text-center bg-blue-50">可能</td>
                    <td className="p-4 text-center">不可</td>
                    <td className="p-4 text-center">不可</td>
                  </tr>
                  <tr className="hover:bg-amber-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">痛み・違和感</td>
                    <td className="p-4 text-center">やや強い</td>
                    <td className="p-4 text-center bg-blue-50">少ない</td>
                    <td className="p-4 text-center">強い</td>
                    <td className="p-4 text-center">少ない</td>
                  </tr>
                  <tr className="hover:bg-amber-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">歯磨きのしやすさ</td>
                    <td className="p-4 text-center">難しい</td>
                    <td className="p-4 text-center bg-blue-50">普段通り</td>
                    <td className="p-4 text-center">かなり難しい</td>
                    <td className="p-4 text-center">難しい</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-6">
              {[
                { name: 'ワイヤー矯正', color: 'amber', data: { visible: '★★☆☆☆', range: '★★★★★', period: '2〜3年', cost: '¥700,000〜', remove: '不可', pain: 'やや強い', clean: '難しい' } },
                { name: 'マウスピース矯正', color: 'blue', data: { visible: '★★★★★', range: '★★★☆☆', period: '1〜2年', cost: '¥800,000〜', remove: '可能', pain: '少ない', clean: '普段通り' } },
                { name: '裏側矯正', color: 'purple', data: { visible: '★★★★★', range: '★★★★☆', period: '2〜3年', cost: '¥1,200,000〜', remove: '不可', pain: '強い', clean: 'かなり難しい' } },
                { name: '部分矯正', color: 'green', data: { visible: '★★☆☆☆', range: '★★☆☆☆', period: '3ヶ月〜1年', cost: '¥300,000〜', remove: '不可', pain: '少ない', clean: '難しい' } },
              ].map((type, index) => (
                <div key={index} className={`bg-${type.color}-50 border-2 border-${type.color}-200 rounded-2xl p-6 shadow-lg`}>
                  <h3 className={`text-xl font-bold text-${type.color}-900 mb-4 text-center`}>{type.name}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">目立ちにくさ</span>
                      <span className="font-semibold">{type.data.visible}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">適応範囲</span>
                      <span className="font-semibold">{type.data.range}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">治療期間</span>
                      <span className="font-semibold">{type.data.period}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">費用目安</span>
                      <span className="font-semibold">{type.data.cost}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">取り外し</span>
                      <span className="font-semibold">{type.data.remove}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">痛み・違和感</span>
                      <span className="font-semibold">{type.data.pain}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">歯磨き</span>
                      <span className="font-semibold">{type.data.clean}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-2 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              矯正治療の種類に関するよくある質問
            </h2>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-amber-50 transition-colors">
                  <span className="font-semibold text-lg text-gray-900">
                    どの矯正方法が自分に合っているか分かりません
                  </span>
                  <ChevronRight className="w-5 h-5 text-amber-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t">
                  最適な矯正方法は、歯並びの状態、ご予算、ライフスタイル、治療期間のご希望などによって異なります。当院では、無料カウンセリングで詳しく検査し、患者様に最適な治療法を複数ご提案いたします。メリット・デメリットを丁寧にご説明しますので、ご安心ください。
                </div>
              </details>

              <details className="group bg-white rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-amber-50 transition-colors">
                  <span className="font-semibold text-lg text-gray-900">
                    マウスピース矯正とワイヤー矯正、どちらが効果的ですか？
                  </span>
                  <ChevronRight className="w-5 h-5 text-amber-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t">
                  症例によって異なります。軽度〜中度の歯並びの乱れであれば、マウスピース矯正でも十分な効果が得られます。一方、重度の叢生や骨格的な問題がある場合は、ワイヤー矯正の方が確実です。当院では、両方の治療法に対応しており、症例に応じて最適な方法をご提案します。
                </div>
              </details>

              <details className="group bg-white rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-amber-50 transition-colors">
                  <span className="font-semibold text-lg text-gray-900">
                    部分矯正で前歯だけ治すことはできますか？
                  </span>
                  <ChevronRight className="w-5 h-5 text-amber-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t">
                  前歯の軽いガタガタや隙間であれば、部分矯正で改善できる可能性があります。ただし、噛み合わせに問題がある場合や、奥歯にも問題がある場合は、全体矯正が必要になることもあります。まずは検査を受けて、部分矯正が適応できるかどうかを判断させていただきます。
                </div>
              </details>

              <details className="group bg-white rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-amber-50 transition-colors">
                  <span className="font-semibold text-lg text-gray-900">
                    裏側矯正は誰でもできますか？
                  </span>
                  <ChevronRight className="w-5 h-5 text-amber-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t">
                  ほとんどの症例で裏側矯正は可能ですが、歯の大きさや形状、噛み合わせの状態によっては適応が難しい場合もあります。また、舌に装置が当たることによる違和感や発音への影響を気にされる方もいらっしゃいます。まずはご相談いただき、適応可能かどうかを診断させていただきます。
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
                あなたに最適な矯正治療法をご提案します
              </h2>
              <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                無料カウンセリングで、歯並びの状態を詳しく診断し、<br />
                複数の治療プランを比較検討していただけます。
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
