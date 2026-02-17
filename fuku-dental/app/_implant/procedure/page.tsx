import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import {
  Clock,
  Zap,
  CheckCircle2,
  ArrowRight,
  Home,
  ChevronRight,
  Calendar
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'インプラント治療の流れ｜手術から完成まで｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: 'インプラント治療の流れを6ステップで詳しく解説。初診から手術、骨結合期間、上部構造装着まで。治療期間や通院回数も分かります。',
  keywords: 'インプラント,治療,流れ,手順,期間,手術,通院',
};

export default function ImplantProcedurePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 flex items-center">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/implant" className="hover:text-blue-600">
                インプラント治療
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-blue-600">治療の流れ</span>
            </div>
          </div>
        </div>

        <section className="py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Clock className="w-16 h-16" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                インプラント治療の流れ
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                初診から完成まで6つのステップ
              </p>
              <p className="text-lg opacity-90">
                治療期間：3〜6ヶ月<br />
                通院回数：5〜8回程度
              </p>
            </div>
          </div>
        </section>

        <section className="py-2">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mr-6">
                    1
                  </div>
                  <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">初診・カウンセリング</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        所要時間：60分
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      現在のお悩みや治療への希望をお伺いします。
                      口腔内を検査し、レントゲン・CT撮影を行い、骨の状態を詳しく調べます。
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">この段階で分かること：</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• インプラント治療が可能かどうか</li>
                        <li>• 必要な本数と位置</li>
                        <li>• 骨造成手術の必要性</li>
                        <li>• 概算の費用と治療期間</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mr-6">
                    2
                  </div>
                  <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">治療計画のご説明・同意</h3>
                      <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold">
                        所要時間：30分
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      CT画像をもとに、詳細な治療計画を立案します。
                      インプラントの種類、手術方法、費用、リスクなどを詳しくご説明し、
                      ご納得いただいた上で治療を開始します。
                    </p>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>重要：</strong>
                        ご不明な点や不安なことがあれば、何でもお聞きください。
                        十分にご理解・ご納得いただいてから治療を進めます。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mr-6">
                    3
                  </div>
                  <div className="flex-1 bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">一次手術（インプラント埋入）</h3>
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                        所要時間：60〜120分
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      局所麻酔を行い、歯茎を切開して顎の骨にインプラント体（人工歯根）を埋め込みます。
                      手術中は麻酔が効いているため、痛みを感じることはほとんどありません。
                    </p>
                    <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">手術の流れ：</h4>
                      <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
                        <li>局所麻酔</li>
                        <li>歯茎を切開</li>
                        <li>骨に穴を開ける</li>
                        <li>インプラント体を埋入</li>
                        <li>歯茎を縫合</li>
                      </ol>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
                      <p className="text-sm text-gray-700">
                        <strong>術後の注意：</strong>
                        当日は安静にし、処方された痛み止めを服用してください。
                        腫れや痛みは2〜3日で治まります。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mr-6">
                    4
                  </div>
                  <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">治癒期間（骨結合を待つ）</h3>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                        期間：2〜6ヶ月
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      インプラント体と骨がしっかりと結合するのを待ちます。
                      この期間は、定期的に通院して経過を確認します。
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-2">下顎の場合</h4>
                        <p className="text-sm text-gray-700">
                          骨が硬いため、<strong className="text-purple-600">2〜3ヶ月</strong>で結合します。
                        </p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-2">上顎の場合</h4>
                        <p className="text-sm text-gray-700">
                          骨が柔らかいため、<strong className="text-purple-600">4〜6ヶ月</strong>かかります。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mr-6">
                    5
                  </div>
                  <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">二次手術・型取り</h3>
                      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">
                        所要時間：60分
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      歯茎を少し切開して、インプラント体の上部を露出させます。
                      アバットメント（土台）を装着し、人工歯を作るための型取りを行います。
                    </p>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>注意：</strong>
                        システムによっては、二次手術が不要な場合もあります。
                        一次手術時に頭出しを行うワンピース型や、一部の2ピース型では省略できます。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mr-6">
                    6
                  </div>
                  <div className="flex-1 bg-white rounded-xl shadow-lg p-8 border-2 border-green-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">上部構造の装着・完成</h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        所要時間：60分
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      製作した人工歯（上部構造）を装着します。
                      噛み合わせを調整し、色や形を最終確認して完成です。
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">完成後は：</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>天然歯と同じように噛める</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>見た目も自然で美しい</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>違和感なく快適に使える</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* メンテナンス */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-6">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg p-8 border-2 border-orange-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">定期メンテナンス</h3>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                        3〜6ヶ月に1回
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      インプラントを長持ちさせるには、定期的なメンテナンスが必須です。
                      3〜6ヶ月ごとに通院し、クリーニングと検診を受けましょう。
                    </p>
                    <div className="bg-orange-100 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">メンテナンスでチェックすること：</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• インプラント周囲の炎症の有無</li>
                        <li>• 噛み合わせの確認</li>
                        <li>• レントゲンで骨の状態チェック</li>
                        <li>• プロフェッショナルクリーニング</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  治療期間の目安
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">3〜4ヶ月</div>
                  <p className="text-gray-700 font-semibold mb-2">最短の場合</p>
                  <p className="text-sm text-gray-600">
                    下顎・骨が十分にある・1本の場合
                  </p>
                </div>

                <div className="bg-cyan-50 rounded-xl p-6 text-center border-2 border-cyan-300">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">4〜6ヶ月</div>
                  <p className="text-gray-700 font-semibold mb-2">一般的なケース</p>
                  <p className="text-sm text-gray-600">
                    上顎または下顎・通常の骨量
                  </p>
                </div>

                <div className="bg-indigo-50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">6〜12ヶ月</div>
                  <p className="text-gray-700 font-semibold mb-2">骨造成が必要な場合</p>
                  <p className="text-sm text-gray-600">
                    骨を増やす手術が必要な場合
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                治療の流れについて詳しく知りたい方へ
              </h2>
              <p className="text-xl mb-8 text-blue-50">
                無料カウンセリングで個別に詳しくご説明します
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                無料相談を予約する
                <ArrowRight className="w-6 h-6 ml-2" />
              </Link>
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
