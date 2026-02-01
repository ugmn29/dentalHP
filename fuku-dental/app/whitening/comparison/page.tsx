import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { Sparkles, ArrowRight, CheckCircle, Clock, Heart, Star, AlertCircle, Shield, Users, TrendingUp, X, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '当院のホワイトニングが選ばれる理由｜他院との違い｜F歯科・矯正歯科',
  description: '当院のホワイトニングが選ばれる理由を徹底解説。他院との違い、当院だけの特徴、充実したサービス内容をご紹介します。',
  keywords: 'ホワイトニング,比較,選び方,おすすめ,歯科医院,違い,特徴',
  openGraph: {
    title: '当院のホワイトニングが選ばれる理由｜他院との違い｜F歯科・矯正歯科',
    description: '当院のホワイトニングが選ばれる理由と他院との違いをご紹介します。',
    type: 'website',
  },
};

export default function WhiteningComparisonPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-pink-50">

      {/* --- Hero Section --- */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 to-pink-400 text-white py-2 md:py-2">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              当院が選ばれる理由
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              当院のホワイトニングが<br />
              選ばれる5つの理由
            </h1>

            <p className="text-lg md:text-xl mb-8 text-pink-50 leading-relaxed max-w-3xl mx-auto">
              他院との違いを明確にお伝えします。<br />
              なぜ多くの患者様に選ばれているのか、その理由がここにあります。
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              無料カウンセリング予約
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* --- パンくずリスト --- */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-pink-600">ホーム</a>
            <span>/</span>
            <a href="/whitening" className="hover:text-pink-600">ホワイトニング</a>
            <span>/</span>
            <span className="text-gray-800 font-medium">当院が選ばれる理由</span>
          </div>
        </div>
      </section>

      {/* --- 選ばれる5つの理由 --- */}
      <section className="py-6 md:py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
              当院が選ばれる5つの理由
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              他院にはない、当院だけの特徴をご紹介します
            </p>

            <div className="space-y-12">
              {/* 理由1 */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 md:p-12 border-l-4 border-blue-600">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                      効果を最大化する事前クリーニング
                    </h3>
                    <p className="text-blue-600 font-bold text-lg">すべてのプランに自費クリーニングレベルの着色除去を標準装備</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-800">当院のアプローチ</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span><strong>自費クリーニングレベルの徹底した着色除去</strong>をすべてのホワイトニングプランに標準装備</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>エアフローや超音波スケーラーで表面の汚れを完全除去</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>薬剤の浸透を最大化し、<strong>確実な効果</strong>を実現</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-800">他院の場合</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-700">
                        <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>簡易的なクリーニングのみ、または省略</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>表面の汚れが残ったまま施術</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>効果が半減する可能性</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-blue-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <strong className="text-blue-600">効果の違い：</strong>
                    事前クリーニングを徹底することで、薬剤の浸透率が大幅にアップ。
                    同じ薬剤でも、<strong>当院なら1.5〜2倍の効果</strong>を実感できます。
                  </p>
                </div>
              </div>

              {/* 理由2 */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-xl p-8 md:p-12 border-l-4 border-green-600">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                      ホワイトニング後の必須フッ素塗布
                    </h3>
                    <p className="text-green-600 font-bold text-lg">白さ+虫歯予防を同時実現</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-800">当院のアプローチ</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>すべてのホワイトニング後にフッ素塗布</strong>を必ず実施</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>ホワイトニング直後はフッ素の吸収率が高いベストタイミング</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>知覚過敏の軽減+虫歯予防の<strong>ダブル効果</strong></span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-800">他院の場合</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-700">
                        <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>フッ素塗布は別料金、またはオプション扱い</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>ベストタイミングを逃してしまう</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>審美面だけで予防効果なし</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-green-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <strong className="text-green-600">科学的根拠：</strong>
                    ホワイトニング直後の歯は、エナメル質の微細構造が一時的に変化し、
                    フッ素イオンを通常の<strong>約2倍吸収しやすい</strong>状態になります（Journal of Dentistry, 2018）。
                  </p>
                </div>
              </div>

              {/* 理由3 */}
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl p-8 md:p-12 border-l-4 border-purple-600">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                      独自のアフターケア資料＋専用歯磨き粉提案
                    </h3>
                    <p className="text-purple-600 font-bold text-lg">白さを長期間キープする秘訣を伝授</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-800">当院のアプローチ</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span><strong>当院独自のアフターケア資料</strong>をお渡し</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>再着色を防ぐ<strong>効果絶大の専用歯磨き粉</strong>をご提案</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>食生活のアドバイスとホームケアの具体的な方法</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-800">他院の場合</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-700">
                        <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>口頭での簡単な説明のみ</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>具体的なケア方法がわからない</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>色戻りが早く、満足度が下がる</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-purple-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <strong className="text-purple-600">実績：</strong>
                    当院推奨の歯磨き粉とケア方法を実践した患者様は、
                    <strong>白さの持続期間が平均1.5倍</strong>に伸びています（当院調べ）。
                  </p>
                </div>
              </div>

              {/* 理由4 */}
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-xl p-8 md:p-12 border-l-4 border-orange-600">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-white">4</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                      豊富な種類とカスタマイズ対応
                    </h3>
                    <p className="text-orange-600 font-bold text-lg">4つの方法から最適なプランを</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-800">当院のアプローチ</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span><strong>4つのホワイトニング方法</strong>をすべて完備（オフィス・ホーム・デュアル・オパールGo）</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span>あなたのライフスタイル・ご予算・目標に合わせてカスタマイズ</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span>丁寧なカウンセリングで<strong>最適なプランをご提案</strong></span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-800">他院の場合</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-700">
                        <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>1〜2種類のみ、選択肢が少ない</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>画一的なプラン、個別対応なし</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>自分に合わないプランで妥協</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-orange-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <strong className="text-orange-600">提供プラン：</strong>
                    オフィスホワイトニング（1回・3回・5回コース）、ホームホワイトニング、デュアルホワイトニング、
                    オパールGo（手軽なホームケア）の全4種類をご用意。
                  </p>
                </div>
              </div>

              {/* 理由5 */}
              <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-xl p-8 md:p-12 border-l-4 border-teal-600">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-white">5</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                      徹底したカウンセリングと押し売りゼロ
                    </h3>
                    <p className="text-teal-600 font-bold text-lg">納得してから施術、無理な勧誘は一切なし</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-800">当院のアプローチ</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span><strong>メリット・デメリットを正直にお伝え</strong>します</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>納得いただいてから施術、無理な勧誘は一切なし</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>ご自身で選択できる環境をご提供</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-800">他院の場合</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-700">
                        <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>メリットだけを強調、リスク説明不足</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>高額プランへの誘導、断りにくい雰囲気</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>不安を抱えたまま施術</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-teal-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <strong className="text-teal-600">患者様第一：</strong>
                    「迷っている」「もう少し考えたい」という方は、遠慮なくお帰りください。
                    後日、再度ご来院いただいても大歓迎です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 比較表 --- */}
      <section className="py-6 md:py-6 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              サービス内容の比較
            </h2>

            {/* デスクトップ用テーブル */}
            <div className="hidden md:block overflow-x-auto bg-white rounded-2xl shadow-xl">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 border-b-2 border-gray-200">
                    <th className="px-6 py-4 text-left font-bold text-gray-800">項目</th>
                    <th className="px-6 py-4 text-center font-bold text-pink-600 bg-pink-50">当院</th>
                    <th className="px-6 py-4 text-center font-bold text-gray-600">一般的な歯科医院</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-bold text-gray-700">事前クリーニング</td>
                    <td className="px-6 py-4 text-center bg-pink-50">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5 text-pink-600" />
                        <span className="font-bold text-pink-600">自費レベルの徹底除去</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">簡易的 or 省略</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-700">フッ素塗布</td>
                    <td className="px-6 py-4 text-center bg-pink-50">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5 text-pink-600" />
                        <span className="font-bold text-pink-600">すべてのプランに標準装備</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">別料金 or オプション</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-bold text-gray-700">アフターケア資料</td>
                    <td className="px-6 py-4 text-center bg-pink-50">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5 text-pink-600" />
                        <span className="font-bold text-pink-600">独自資料をお渡し</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">口頭説明のみ</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-700">専用歯磨き粉提案</td>
                    <td className="px-6 py-4 text-center bg-pink-50">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5 text-pink-600" />
                        <span className="font-bold text-pink-600">効果絶大な製品を提案</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">提案なし</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-bold text-gray-700">ホワイトニングの種類</td>
                    <td className="px-6 py-4 text-center bg-pink-50">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5 text-pink-600" />
                        <span className="font-bold text-pink-600">4種類完備</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">1〜2種類</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-700">カウンセリング</td>
                    <td className="px-6 py-4 text-center bg-pink-50">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5 text-pink-600" />
                        <span className="font-bold text-pink-600">徹底的・押し売りゼロ</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">簡易的・営業的</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-gray-700">料金</td>
                    <td className="px-6 py-4 text-center bg-pink-50">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5 text-pink-600" />
                        <span className="font-bold text-pink-600">適正価格・明瞭会計</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">相場通り or 高額</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* モバイル用カード */}
            <div className="md:hidden space-y-6">
              {[
                { label: "事前クリーニング", ours: "自費レベルの徹底除去", others: "簡易的 or 省略" },
                { label: "フッ素塗布", ours: "すべてのプランに標準装備", others: "別料金 or オプション" },
                { label: "アフターケア資料", ours: "独自資料をお渡し", others: "口頭説明のみ" },
                { label: "専用歯磨き粉提案", ours: "効果絶大な製品を提案", others: "提案なし" },
                { label: "ホワイトニングの種類", ours: "4種類完備", others: "1〜2種類" },
                { label: "カウンセリング", ours: "徹底的・押し売りゼロ", others: "簡易的・営業的" },
                { label: "料金", ours: "適正価格・明瞭会計", others: "相場通り or 高額" },
              ].map((row, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-800 border-b pb-2">{row.label}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-bold text-pink-600 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        当院
                      </p>
                      <p className="text-gray-700 text-sm bg-pink-50 p-3 rounded-lg">{row.ours}</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-600 mb-2">一般的な歯科医院</p>
                      <p className="text-gray-700 text-sm bg-gray-50 p-3 rounded-lg">{row.others}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 患者様の声 --- */}
      <section className="py-6 md:py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              患者様の声
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "A様（30代女性）",
                  plan: "デュアルホワイトニング",
                  comment: "他院と比較して、事前のクリーニングが本当に丁寧で驚きました。おかげで期待以上に白くなり、大満足です！",
                  rating: 5,
                },
                {
                  name: "B様（40代男性）",
                  plan: "オフィスホワイトニング",
                  comment: "押し売りが一切なく、メリット・デメリットを正直に説明してくれたので安心して施術を受けられました。",
                  rating: 5,
                },
                {
                  name: "C様（20代女性）",
                  plan: "ホームホワイトニング",
                  comment: "アフターケアの資料と歯磨き粉のおかげで、半年以上白さをキープできています。コスパ最高！",
                  rating: 5,
                },
              ].map((review, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4 italic">
                    「{review.comment}」
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-800">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.plan}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-6 md:py-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              よくある質問
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">他院との一番の違いは何ですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p>
                    <strong className="text-[#E67A2E]">A.</strong> 事前クリーニングとフッ素塗布を標準装備している点です。多くの歯科医院では省略されがちですが、当院ではすべてのプランに含まれており、効果を最大化しています。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">なぜこんなに充実したサービスを提供できるのですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p>
                    <strong className="text-[#E67A2E]">A.</strong> 患者様の満足度を最優先に考え、長期的な関係を大切にしているからです。一時的な利益よりも、患者様に本当に喜んでいただけるサービスを提供することを重視しています。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">カウンセリングだけでも受けられますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p>
                    <strong className="text-[#E67A2E]">A.</strong> はい、もちろんです。無料カウンセリングのみのご来院も大歓迎です。押し売りは一切ございませんので、お気軽にお越しください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 関連ページ --- */}
      <section className="py-6 md:py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              ホワイトニングについてもっと知る
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a
                href="/whitening"
                className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                      ホワイトニングTOP
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      ホワイトニング全般について
                    </p>
                    <div className="flex items-center text-blue-600 text-sm font-medium">
                      詳しく見る
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="/whitening/types"
                className="group bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">
                      ホワイトニングの種類
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      3つの方法を徹底比較
                    </p>
                    <div className="flex items-center text-purple-600 text-sm font-medium">
                      詳しく見る
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="/whitening/cost"
                className="group bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-green-100 hover:border-green-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-green-600 transition-colors">
                      料金・費用
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      各プランの詳しい料金
                    </p>
                    <div className="flex items-center text-green-600 text-sm font-medium">
                      詳しく見る
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-6 md:py-6 bg-gradient-to-r from-pink-600 to-pink-400 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              当院のホワイトニングを<br />
              ぜひ体験してください
            </h2>
            <p className="text-xl mb-8 text-pink-50">
              他院との違いを実感していただける<br className="md:hidden" />
              自信があります
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="group bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                無料カウンセリング予約
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-pink-100">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>充実のサービス</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>患者様第一</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>高い満足度</span>
              </div>
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
