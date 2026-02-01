import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { CheckCircle2, ArrowRight, Home, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ホワイトニングの種類｜オフィス・ホーム・デュアル徹底比較｜F歯科・矯正歯科',
  description: 'ホワイトニングの3つの種類（オフィス・ホーム・デュアル）を徹底比較。それぞれのメリット・デメリット、費用、効果持続期間、おすすめの方を詳しく解説します。',
  keywords: 'ホワイトニング,種類,オフィスホワイトニング,ホームホワイトニング,デュアルホワイトニング,比較,違い',
  openGraph: {
    title: 'ホワイトニングの種類｜オフィス・ホーム・デュアル徹底比較｜F歯科・矯正歯科',
    description: 'ホワイトニングの3つの種類を徹底比較。あなたに最適な方法が見つかります。',
    type: 'website',
  },
};

export default function WhiteningTypesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF7]">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <a href="/" className="hover:text-[#C5A572] flex items-center">
              <Home className="w-4 h-4 mr-1" />
              ホーム
            </a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <a href="/whitening" className="hover:text-[#C5A572]">
              ホワイトニング
            </a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[#C5A572]">ホワイトニングの種類</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-6 md:py-6 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
              ホワイトニングの種類
            </h1>
            <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
              3つのホワイトニング方法を徹底比較
            </p>
            <p className="text-lg text-[#8D8070] leading-relaxed">
              オフィス・ホーム・デュアルの3つの方法を詳しく比較。<br />
              あなたのライフスタイルに合った最適なホワイトニングが見つかります。
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-8 pb-2 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* 結論 */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif">
              あなたに最適な方法は？
            </h2>
            <div className="space-y-4 text-[#5A4D41] leading-loose max-w-3xl mx-auto">
              <p>
                <span className="font-bold bg-yellow-100">最高の効果と持続性を求めるならデュアルホワイトニング</span>がおすすめです。
                オフィスの即効性とホームの持続性を両立し、1〜2年の長期間白さを維持できます。
              </p>
              <p>
                <span className="text-[#2E8B57] font-bold">すぐに白くしたい方はオフィスホワイトニング</span>、
                自分のペースで進めたい方はホームホワイトニングが適しています。
              </p>
              <p className="font-bold bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                当院では、<span className="text-[#C5A572]">無料カウンセリング</span>で、
                あなたの歯の状態とライフスタイルに合わせた最適な方法をご提案します。
              </p>
            </div>
          </div>

          {/* 一目でわかる比較表 */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">一目でわかる比較</h3>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#C5A572]/10 mb-6">
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="font-bold text-[#5A4D41]">比較項目</div>
                <div className="font-bold text-blue-600 text-center">オフィス</div>
                <div className="font-bold text-green-600 text-center">ホーム</div>
                <div className="font-bold text-purple-600 text-center">デュアル</div>
              </div>

              <div className="space-y-4">
                {/* 施術場所 */}
                <div className="grid md:grid-cols-4 gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                  <div className="font-semibold text-[#5A4D41]">施術場所</div>
                  <div className="text-center text-gray-700">歯科医院</div>
                  <div className="text-center text-gray-700">自宅</div>
                  <div className="text-center text-gray-700">両方</div>
                </div>

                {/* 即効性 */}
                <div className="grid md:grid-cols-4 gap-4 p-4 bg-white rounded-xl">
                  <div className="font-semibold text-[#5A4D41]">即効性</div>
                  <div className="text-center">
                    <span className="text-blue-600 font-bold">⭐⭐⭐⭐⭐</span>
                    <p className="text-xs mt-1">即日〜1週間</p>
                  </div>
                  <div className="text-center">
                    <span className="text-gray-600 font-bold">⭐⭐</span>
                    <p className="text-xs mt-1">2〜4週間</p>
                  </div>
                  <div className="text-center">
                    <span className="text-purple-600 font-bold">⭐⭐⭐⭐</span>
                    <p className="text-xs mt-1">即日〜2週間</p>
                  </div>
                </div>

                {/* 持続期間 */}
                <div className="grid md:grid-cols-4 gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                  <div className="font-semibold text-[#5A4D41]">持続期間</div>
                  <div className="text-center">
                    <span className="text-gray-700 font-bold text-lg">3〜6ヶ月</span>
                  </div>
                  <div className="text-center">
                    <span className="text-green-600 font-bold text-lg">6〜12ヶ月</span>
                  </div>
                  <div className="text-center">
                    <span className="text-purple-600 font-bold text-lg">1〜2年</span>
                  </div>
                </div>

                {/* 費用目安 */}
                <div className="grid md:grid-cols-4 gap-4 p-4 bg-white rounded-xl">
                  <div className="font-semibold text-[#5A4D41]">費用目安</div>
                  <div className="text-center">
                    <span className="text-gray-700 font-bold">3〜6万円</span>
                  </div>
                  <div className="text-center">
                    <span className="text-green-600 font-bold">2〜4万円</span>
                  </div>
                  <div className="text-center">
                    <span className="text-gray-700 font-bold">5〜10万円</span>
                  </div>
                </div>

                {/* 通院回数 */}
                <div className="grid md:grid-cols-4 gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                  <div className="font-semibold text-[#5A4D41]">通院回数</div>
                  <div className="text-center text-gray-700">1〜3回</div>
                  <div className="text-center text-green-600 font-bold">1〜2回</div>
                  <div className="text-center text-gray-700">2〜4回</div>
                </div>

                {/* 痛み・しみやすさ */}
                <div className="grid md:grid-cols-4 gap-4 p-4 bg-white rounded-xl">
                  <div className="font-semibold text-[#5A4D41]">痛み・しみやすさ</div>
                  <div className="text-center text-orange-600 font-bold">しみやすい</div>
                  <div className="text-center text-green-600 font-bold">しみにくい</div>
                  <div className="text-center text-gray-700">やや しみやすい</div>
                </div>

                {/* 色戻りしやすさ */}
                <div className="grid md:grid-cols-4 gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                  <div className="font-semibold text-[#5A4D41]">色戻りしやすさ</div>
                  <div className="text-center text-orange-600 font-bold">しやすい</div>
                  <div className="text-center text-gray-700">しにくい</div>
                  <div className="text-center text-purple-600 font-bold">最もしにくい</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3つの詳細比較 */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">それぞれの特徴を詳しく解説</h3>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>

            <div className="space-y-12">
              {/* 1. オフィスホワイトニング */}
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  1. オフィスホワイトニング（歯科医院で行う）
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    歯科医院で<span className="font-bold bg-yellow-100">高濃度の薬剤（過酸化水素15〜35%）</span>を使用し、
                    特殊な光を照射して短時間で歯を白くする方法です。
                    1回の施術時間は60〜90分程度で、<span className="text-[#2E8B57] font-bold">即日〜1週間程度で効果を実感</span>できます。
                  </p>

                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                    <h5 className="font-bold text-[#5A4D41] mb-3">メリット</h5>
                    <ul className="space-y-2">
                      {[
                        "短時間で白くなる（即効性が高い）",
                        "プロが施術するため安全・確実",
                        "自分で行う手間がかからない",
                        "1回の施術で効果を実感しやすい",
                        "特殊な光で薬剤の効果を最大化"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                    <h5 className="font-bold text-[#5A4D41] mb-3">デメリット</h5>
                    <ul className="space-y-2">
                      {[
                        "知覚過敏が起きやすい",
                        "色戻りが比較的早い（3〜6ヶ月）",
                        "費用がやや高い（3〜6万円）",
                        "施術中に痛みを感じることがある"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-gray-400 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                    <h5 className="font-bold text-[#5A4D41] mb-3">こんな方におすすめ</h5>
                    <ul className="space-y-2">
                      {[
                        "結婚式や面接など大切なイベントを控えている",
                        "短期間ですぐに歯を白くしたい",
                        "自分で行うのは面倒",
                        "プロに任せて確実に白くしたい"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. ホームホワイトニング */}
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  2. ホームホワイトニング（自宅で行う）
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    歯科医院で作成した<span className="font-bold bg-yellow-100">専用のマウスピース</span>に
                    ホワイトニングジェル（過酸化尿素10〜20%）を入れて、自宅で装着する方法です。
                    1日2〜4時間、または就寝中に装着し、<span className="text-[#2E8B57] font-bold">2〜4週間継続</span>することで
                    徐々に歯を白くしていきます。
                  </p>

                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                    <h5 className="font-bold text-[#5A4D41] mb-3">メリット</h5>
                    <ul className="space-y-2">
                      {[
                        "自分のペースで進められる",
                        "通院回数が少ない（1〜2回）",
                        "知覚過敏が起きにくい",
                        "色戻りしにくい（6〜12ヶ月持続）",
                        "自然で透明感のある白さになる",
                        "費用がリーズナブル（2〜4万円）"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                    <h5 className="font-bold text-[#5A4D41] mb-3">デメリット</h5>
                    <ul className="space-y-2">
                      {[
                        "効果が出るまで時間がかかる（2〜4週間）",
                        "毎日継続する必要がある",
                        "自己管理が必要",
                        "マウスピース装着中は飲食不可"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-gray-400 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                    <h5 className="font-bold text-[#5A4D41] mb-3">こんな方におすすめ</h5>
                    <ul className="space-y-2">
                      {[
                        "自分のペースでゆっくり白くしたい",
                        "通院回数を減らしたい",
                        "費用を抑えたい",
                        "自然な透明感のある白さを求めている",
                        "知覚過敏が心配"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. デュアルホワイトニング */}
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  3. デュアルホワイトニング（オフィス＋ホームの併用）
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    <span className="font-bold bg-yellow-100">オフィスホワイトニングとホームホワイトニングを併用</span>する方法です。
                    まず歯科医院でオフィスホワイトニングを行い、短期間で歯を白くします。
                    その後、自宅でホームホワイトニングを継続することで、白さをさらに高め、長期間維持します。
                  </p>
                  <p className="font-bold bg-yellow-100 p-4 rounded-xl">
                    <span className="text-purple-600">「即効性」と「持続性」の両方</span>を実現できる、最も効果的なホワイトニング方法です。
                  </p>

                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                    <h5 className="font-bold text-[#5A4D41] mb-3">メリット</h5>
                    <ul className="space-y-2">
                      {[
                        "即効性と持続性を両立（1〜2年持続）",
                        "最も白くなる（効果が最大）",
                        "色戻りが最もしにくい",
                        "理想の白さまで確実に到達",
                        "オフィスの即効性+ホームの持続性",
                        "満足度が最も高い"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                    <h5 className="font-bold text-[#5A4D41] mb-3">デメリット</h5>
                    <ul className="space-y-2">
                      {[
                        "費用が最も高い（5〜10万円）",
                        "通院回数が増える（2〜4回）",
                        "自宅でのケアも必要",
                        "トータルの時間がかかる"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-gray-400 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
                    <h5 className="font-bold text-[#5A4D41] mb-3">こんな方におすすめ</h5>
                    <ul className="space-y-2">
                      {[
                        "最高レベルの白さを求めている",
                        "長期間白さを保ちたい",
                        "本格的にホワイトニングに取り組みたい",
                        "結婚式など重要イベントを控えている",
                        "これまでのホワイトニングで満足できなかった"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 選び方のポイント */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">あなたに合った選び方</h3>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-200">
                <h4 className="text-xl font-bold text-blue-600 mb-4 font-serif">すぐに白くしたい</h4>
                <p className="text-[#5A4D41] mb-4">
                  結婚式や面接など大切なイベントが間近に迫っている方
                </p>
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                  <p className="text-blue-600 font-bold">→ オフィスホワイトニング</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-200">
                <h4 className="text-xl font-bold text-green-600 mb-4 font-serif">自分のペースで</h4>
                <p className="text-[#5A4D41] mb-4">
                  通院回数を減らして、自宅で少しずつ白くしたい方
                </p>
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <p className="text-green-600 font-bold">→ ホームホワイトニング</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-200">
                <h4 className="text-xl font-bold text-purple-600 mb-4 font-serif">最高の効果を</h4>
                <p className="text-[#5A4D41] mb-4">
                  確実に白くして、長期間その白さを維持したい方
                </p>
                <div className="bg-purple-50 p-4 rounded-xl text-center">
                  <p className="text-purple-600 font-bold">→ デュアルホワイトニング</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 md:py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">
                よくある質問
              </h2>
              <p className="text-lg text-[#8D8070]">
                ホワイトニングの種類選びに関するよくある質問
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">どの方法が一番おすすめですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 長期的な白さと効果を求めるなら「デュアルホワイトニング」がおすすめです。即効性と持続性を両立し、1〜2年間白さを維持できます。
                  </p>
                  <div className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    すぐに白くしたい方は「オフィス」、自分のペースで進めたい方は「ホーム」が適しています。無料カウンセリングで、あなたに最適な方法をご提案いたします。
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">オフィスとホーム、どちらが白くなりますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> オフィスホワイトニングは即効性が高く、1回の施術で数段階白くなりますが、色戻りも早めです。ホームホワイトニングは時間はかかりますが、徐々に白くなり、自然な透明感のある白さが長持ちします。
                  </p>
                  <div className="text-sm bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    最も白くなるのは両方を併用するデュアルホワイトニングです。
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">ホワイトニングは痛いですか？しみますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> オフィスホワイトニングは高濃度の薬剤を使用するため、施術中や施術後にしみることがあります。ホームホワイトニングは低濃度のため、しみにくいです。
                  </p>
                  <div className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    知覚過敏が心配な方には、ホームホワイトニングをおすすめします。当院では、痛みを最小限に抑える工夫をしています。
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">ホワイトニングの効果はどのくらい持ちますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> オフィスホワイトニングは3〜6ヶ月、ホームホワイトニングは6〜12ヶ月、デュアルホワイトニングは1〜2年程度持続します。
                  </p>
                  <div className="text-sm bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    コーヒーやワインなどの着色しやすい飲食物の摂取頻度、喫煙の有無、歯磨きの習慣などにより個人差があります。定期的なメンテナンスで白さを長く保てます。
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">ホワイトニングができない人はいますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 妊娠中・授乳中の方、無カタラーゼ症の方、重度の知覚過敏の方は施術できません。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span>虫歯や歯周病がある場合は、先に治療が必要です</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span>詰め物や被せ物は白くならないため、ホワイトニング後に色を合わせてやり直すことがあります</span>
                    </li>
                  </ul>
                  <div className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    まずは無料カウンセリングで、あなたの歯の状態を確認させてください。
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q6</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">ホワイトニング後の注意点はありますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> ホワイトニング後24〜48時間は、コーヒー、紅茶、ワイン、カレー、ソースなど着色しやすい飲食物は避けてください。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span>喫煙も控えましょう</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span>この期間は歯が着色しやすい状態になっています</span>
                    </li>
                  </ul>
                  <div className="text-sm bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    白い食事（白米、パン、鶏肉、白身魚、牛乳など）を心がけることで、効果を最大限に引き出せます。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="py-2 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">関連ページ</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <a href="/whitening" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">ホワイトニングTOP</h3>
                <p className="text-[#8D8070] mb-4">
                  ホワイトニング全般について
                </p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </a>

              <a href="/whitening/cost" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">料金・費用</h3>
                <p className="text-[#8D8070] mb-4">
                  各ホワイトニングの詳しい料金
                </p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </a>

              <a href="/whitening/duration" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">効果の持続期間</h3>
                <p className="text-[#8D8070] mb-4">
                  白さを長持ちさせるコツ
                </p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-2 bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              あなたに最適なホワイトニングを<br />
              一緒に見つけましょう
            </h2>
            <p className="text-xl mb-8 text-white/90">
              無料カウンセリングで、あなたの歯の状態や<br />
              ご希望をお聞かせください
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-[#C5A572] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                無料カウンセリング予約
                <ArrowRight className="w-6 h-6 ml-2" />
              </a>
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
