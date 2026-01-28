"use client";

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AlertTriangle, CheckCircle, Clock, Shield } from 'lucide-react';

export default function BruxismPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#8B7AA3] via-[#9B89B3] to-[#AB99C3] text-white py-2 md:py-2 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <span className="text-sm font-bold tracking-wider">BRUXISM TREATMENT</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                歯<span className="text-[0.75em]">を</span>守<span className="text-[0.75em]">る</span>
                <br />
                <span className="text-[#FFE5B4]">歯ぎしり・食いしばり</span>治療
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                睡眠中の歯ぎしりや、無意識の食いしばりは、<br />
                大切な歯に深刻なダメージを与えます。<br />
                エビデンスに基づいた適切な治療で、歯を守りましょう。
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Quick Navigation */}
        <section className="py-2 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-2">
                  <span className="text-[#9B89B3]">目次</span>
                </h2>
                <p className="text-gray-600">知りたい情報にすぐアクセス</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <a href="#definition" className="group bg-white hover:bg-[#9B89B3] border-2 border-[#9B89B3] rounded-xl p-4 transition-all duration-300 shadow-md hover:shadow-xl">
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#9B89B3] group-hover:bg-white text-white group-hover:text-[#9B89B3] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors">1</div>
                    <span className="text-sm font-bold text-gray-800 group-hover:text-white transition-colors text-center">歯ぎしりとは</span>
                  </div>
                </a>

                <a href="#symptoms" className="group bg-white hover:bg-[#9B89B3] border-2 border-[#9B89B3] rounded-xl p-4 transition-all duration-300 shadow-md hover:shadow-xl">
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#9B89B3] group-hover:bg-white text-white group-hover:text-[#9B89B3] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors">2</div>
                    <span className="text-sm font-bold text-gray-800 group-hover:text-white transition-colors text-center">症状チェック</span>
                  </div>
                </a>

                <a href="#risks" className="group bg-white hover:bg-[#9B89B3] border-2 border-[#9B89B3] rounded-xl p-4 transition-all duration-300 shadow-md hover:shadow-xl">
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#9B89B3] group-hover:bg-white text-white group-hover:text-[#9B89B3] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors">3</div>
                    <span className="text-sm font-bold text-gray-800 group-hover:text-white transition-colors text-center">放置のリスク</span>
                  </div>
                </a>

                <a href="#treatments" className="group bg-white hover:bg-[#9B89B3] border-2 border-[#9B89B3] rounded-xl p-4 transition-all duration-300 shadow-md hover:shadow-xl">
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#9B89B3] group-hover:bg-white text-white group-hover:text-[#9B89B3] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors">4</div>
                    <span className="text-sm font-bold text-gray-800 group-hover:text-white transition-colors text-center">治療方法</span>
                  </div>
                </a>

                <a href="#faq" className="group bg-white hover:bg-[#9B89B3] border-2 border-[#9B89B3] rounded-xl p-4 transition-all duration-300 shadow-md hover:shadow-xl">
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#9B89B3] group-hover:bg-white text-white group-hover:text-[#9B89B3] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors">5</div>
                    <span className="text-sm font-bold text-gray-800 group-hover:text-white transition-colors text-center">よくある質問</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Definition Section */}
        <section id="definition" className="py-2 md:py-2 px-4 bg-white scroll-mt-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#9B89B3] font-bold tracking-[0.2em] text-sm block mb-2">WHAT IS BRUXISM</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] mb-4">
                歯<span className="text-[0.75em]">ぎしり・</span>食<span className="text-[0.75em]">いしばりとは</span>
              </h2>
            </div>

            <article className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-2 border-gray-100 mb-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  歯ぎしり・食いしばりは、医学的には<span className="font-bold bg-yellow-100">ブラキシズム（Bruxism）</span>と呼ばれ、
                  睡眠中や日中に無意識に歯を強く噛みしめたり、こすり合わせたりする習癖性の運動障害です。
                </p>

                <div className="bg-blue-50 border-l-4 border-[#9B89B3] p-6 rounded-r-lg my-8">
                  <h3 className="text-xl font-bold text-[#5A4D41] mb-3 flex items-center gap-2">
                    <Shield className="text-[#9B89B3]" size={24} />
                    疫学データ
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#9B89B3] mt-1">●</span>
                      <span>成人の<span className="font-bold text-[#9B89B3]">約8〜16%</span>が睡眠時ブラキシズムを有している</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9B89B3] mt-1">●</span>
                      <span>覚醒時ブラキシズム（食いしばり）は成人の<span className="font-bold text-[#9B89B3]">約20%</span>に見られる</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9B89B3] mt-1">●</span>
                      <span>自覚症状がない場合が多く、実際の有病率はさらに高いと推定される</span>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-4 italic">Lavigne GJ et al., Sleep Med Rev 2008; Lobbezoo F et al., J Oral Rehabil 2013</p>
                </div>

                <h3 className="text-2xl font-bold text-[#5A4D41] mt-12 mb-6">ブラキシズムの3つのタイプ</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-200">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3">グラインディング</h4>
                  <p className="text-sm text-gray-700 mb-4">上下の歯をギリギリと強くこすり合わせるタイプ</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <span>音が出るため家族に指摘されることが多い</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <span>歯のすり減りが著しい</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <span>主に睡眠中に発生</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3">クレンチング</h4>
                  <p className="text-sm text-gray-700 mb-4">音を立てずにグッと強く噛みしめるタイプ</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>無音のため自覚しにくい</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>日中、集中時やストレス時にも発生</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>舌や頬に圧痕が見られる</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border-2 border-green-200">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3">タッピング</h4>
                  <p className="text-sm text-gray-700 mb-4">上下の歯をカチカチと素早く噛み合わせるタイプ</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>比較的頻度は少ない</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>リズミカルな動作</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>歯や顎への負担となる</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Symptoms Check Section */}
        <section id="symptoms" className="py-2 md:py-2 px-4 bg-gray-50 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#9B89B3] font-bold tracking-[0.2em] text-sm block mb-2">SELF CHECK</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] mb-4">
                こんな症状<span className="text-[0.75em]">は</span>ありませんか？
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                以下の症状に当てはまる場合、歯ぎしり・食いしばりの可能性があります
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Clock className="text-yellow-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#5A4D41] mb-4 text-center">朝の症状</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#9B89B3] mt-1">✓</span>
                    <span>起床時に顎が疲れている・痛い</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9B89B3] mt-1">✓</span>
                    <span>肩こりや頭痛がひどい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9B89B3] mt-1">✓</span>
                    <span>こめかみや頬の筋肉が張っている</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <AlertTriangle className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#5A4D41] mb-4 text-center">歯の変化</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#9B89B3] mt-1">✓</span>
                    <span>歯が短くなった・すり減っている</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9B89B3] mt-1">✓</span>
                    <span>歯の根元が削れている（くさび状欠損）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9B89B3] mt-1">✓</span>
                    <span>詰め物や被せ物がよく取れる</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#5A4D41] mb-4 text-center">口腔内の変化</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#9B89B3] mt-1">✓</span>
                    <span>舌の側面に歯型がついている</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9B89B3] mt-1">✓</span>
                    <span>頬の内側に白い線（噛み跡）がある</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9B89B3] mt-1">✓</span>
                    <span>家族に歯ぎしりを指摘された</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Risks Section */}
        <section id="risks" className="py-2 md:py-2 px-4 bg-white scroll-mt-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#E74C3C] font-bold tracking-[0.2em] text-sm block mb-2">RISKS OF NEGLECT</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] mb-4">
                放置<span className="text-[0.75em]">することによる</span><span className="text-[#E74C3C]">悪影響</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                歯ぎしり・食いしばりは、体重の数倍もの力が歯や顎にかかります。<br />
                放置すると様々な問題を引き起こします。
              </p>
            </div>

            <div className="space-y-12">
              {/* Risk 1: 歯の損傷 */}
              <article id="risk-1" className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-red-100 scroll-mt-24">
                <header className="flex items-center gap-3 mb-8 pb-6 border-b-2 border-gray-200">
                  <div className="bg-[#E74C3C] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">1</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">
                    歯<span className="text-[0.75em]">の</span>損傷・破壊
                  </h3>
                </header>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg mb-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    ブラキシズムによる咬合力は、<span className="font-bold bg-yellow-100">通常の咀嚼時の約2〜10倍</span>にも達します。
                    この過度な力により、歯に深刻なダメージが蓄積されます。
                  </p>
                </div>

                <section className="mb-8">
                  <h4 className="text-2xl font-bold text-[#E74C3C] mb-4">主な損傷パターン</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h5 className="font-bold text-gray-800 mb-3">歯の摩耗（Tooth Wear）</h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">●</span>
                          <span>エナメル質が削れ、象牙質が露出</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">●</span>
                          <span>知覚過敏の原因となる</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">●</span>
                          <span>歯が短くなり、審美性が損なわれる</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h5 className="font-bold text-gray-800 mb-3">歯の破折（Tooth Fracture）</h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">●</span>
                          <span>歯冠破折：歯の上部が割れる</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">●</span>
                          <span>歯根破折：歯の根が割れる（抜歯の原因）</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">●</span>
                          <span>クラック（亀裂）の進行</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h5 className="font-bold text-gray-800 mb-3">くさび状欠損（Abfraction）</h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">●</span>
                          <span>歯の根元がV字に削れる</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">●</span>
                          <span>咬合力の集中により発生</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">●</span>
                          <span>知覚過敏や虫歯のリスク増加</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h5 className="font-bold text-gray-800 mb-3">修復物の破損</h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">●</span>
                          <span>詰め物・被せ物の頻繁な脱落</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">●</span>
                          <span>セラミック修復物の破折</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">●</span>
                          <span>再治療のコスト増加</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <div className="bg-blue-50 border-l-4 border-[#9B89B3] p-6 rounded-r-lg mt-6">
                  <p className="text-sm font-semibold text-[#9B89B3] mb-2">エビデンス</p>
                  <p className="text-gray-700 leading-relaxed">
                    Lobbezoo F らの系統的レビュー（J Oral Rehabil 2013）によると、ブラキシズムは歯の摩耗、破折、および修復物の失敗と強く関連しています。
                    特に、睡眠時ブラキシズムを有する患者では、歯の摩耗のリスクが<span className="font-bold">約3倍</span>高いことが報告されています。
                  </p>
                  <p className="text-xs text-gray-500 italic mt-2">Lobbezoo F et al., J Oral Rehabil 2013; Manfredini D et al., Clin Oral Investig 2015</p>
                </div>
              </article>

              {/* Risk 2: 顎関節症 */}
              <article id="risk-2" className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-orange-100 scroll-mt-24">
                <header className="flex items-center gap-3 mb-8 pb-6 border-b-2 border-gray-200">
                  <div className="bg-[#FF6B35] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">2</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">
                    顎関節症<span className="text-[0.75em]">のリスク増加</span>
                  </h3>
                </header>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg mb-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    ブラキシズムは、<span className="font-bold bg-yellow-100">顎関節症（TMD: Temporomandibular Disorders）の主要なリスク因子</span>の一つです。
                  </p>
                </div>

                <section className="mb-8">
                  <h4 className="text-2xl font-bold text-[#FF6B35] mb-4">顎関節への影響</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h5 className="font-bold text-gray-800 mb-3">関節への過負荷</h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                          <span>関節円板の変位や損傷</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                          <span>関節痛・開口障害の発生</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                          <span>クリック音やクレピタス（ゴリゴリ音）</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h5 className="font-bold text-gray-800 mb-3">咀嚼筋の障害</h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                          <span>咬筋・側頭筋の肥大と圧痛</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                          <span>筋筋膜性疼痛（Myofascial Pain）</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                          <span>開口制限・咀嚼困難</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <div className="bg-blue-50 border-l-4 border-[#9B89B3] p-6 rounded-r-lg mt-6">
                  <p className="text-sm font-semibold text-[#9B89B3] mb-2">エビデンス</p>
                  <p className="text-gray-700 leading-relaxed">
                    Shetty S らのメタアナリシス（J Indian Prosthodont Soc 2010）では、ブラキシズムを有する患者は、
                    そうでない患者と比較して顎関節症の有病率が<span className="font-bold">約4倍</span>高いことが示されています。
                    特に睡眠時ブラキシズムは、筋筋膜性疼痛と強く関連しています。
                  </p>
                  <p className="text-xs text-gray-500 italic mt-2">Shetty S et al., J Indian Prosthodont Soc 2010; Raphael KG et al., J Orofac Pain 2012</p>
                </div>
              </article>

              {/* Risk 3: 全身への影響 */}
              <article id="risk-3" className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-purple-100 scroll-mt-24">
                <header className="flex items-center gap-3 mb-8 pb-6 border-b-2 border-gray-200">
                  <div className="bg-[#9B89B3] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">3</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">
                    全身<span className="text-[0.75em]">への</span>影響
                  </h3>
                </header>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h4 className="font-bold text-[#9B89B3] mb-3 text-lg">頭痛・肩こり</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#9B89B3] mt-1">●</span>
                        <span>緊張型頭痛の原因となる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#9B89B3] mt-1">●</span>
                        <span>側頭筋の持続的緊張による頭部痛</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#9B89B3] mt-1">●</span>
                        <span>頸部・肩部の筋緊張と関連痛</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h4 className="font-bold text-[#9B89B3] mb-3 text-lg">睡眠障害</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#9B89B3] mt-1">●</span>
                        <span>睡眠の質の低下</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#9B89B3] mt-1">●</span>
                        <span>中途覚醒の増加</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#9B89B3] mt-1">●</span>
                        <span>日中の疲労感・集中力低下</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h4 className="font-bold text-[#9B89B3] mb-3 text-lg">歯周病の悪化</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#9B89B3] mt-1">●</span>
                        <span>過度な咬合力により歯周組織が損傷</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#9B89B3] mt-1">●</span>
                        <span>歯の動揺の進行</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#9B89B3] mt-1">●</span>
                        <span>歯周病による歯の喪失リスク増加</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h4 className="font-bold text-[#9B89B3] mb-3 text-lg">その他の影響</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#9B89B3] mt-1">●</span>
                        <span>耳鳴り・耳閉感</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#9B89B3] mt-1">●</span>
                        <span>めまい・ふらつき</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#9B89B3] mt-1">●</span>
                        <span>生活の質（QOL）の低下</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-[#9B89B3] p-6 rounded-r-lg mt-6">
                  <p className="text-sm font-semibold text-[#9B89B3] mb-2">エビデンス</p>
                  <p className="text-gray-700 leading-relaxed">
                    Ciancaglini R らの研究（Cranio 1999）では、ブラキシズム患者の約60%が頭痛を訴え、
                    その多くが緊張型頭痛であることが報告されています。また、Lavigne GJ らの研究（Sleep Med Rev 2008）では、
                    睡眠時ブラキシズムが睡眠の質を低下させ、日中の眠気や疲労感と関連することが示されています。
                  </p>
                  <p className="text-xs text-gray-500 italic mt-2">Ciancaglini R et al., Cranio 1999; Lavigne GJ et al., Sleep Med Rev 2008</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Treatment Section */}
        <section id="treatments" className="py-2 md:py-2 px-4 bg-gray-50 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#9B89B3] font-bold tracking-[0.2em] text-sm block mb-2">TREATMENT OPTIONS</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] mb-4">
                <span className="text-[#9B89B3]">治療方法</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                エビデンスに基づいた様々な治療法で、<br />
                歯ぎしり・食いしばりによるダメージを最小限に抑えます
              </p>
            </div>

            <div className="space-y-12">
              {/* Treatment 1: ナイトガード（スプリント療法） */}
              <article className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-2 border-[#9B89B3]/20">
                <header className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#9B89B3] text-white px-4 py-2 rounded-full font-bold">推奨度：高</div>
                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm">保険適用</div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-2">
                    ナイトガード（スプリント療法）
                  </h3>
                  <p className="text-lg text-gray-600">歯を守る最も標準的な治療法</p>
                </header>

                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    オーダーメイドのマウスピース（ナイトガード）を睡眠時に装着することで、
                    歯と顎関節を保護します。<span className="font-bold bg-yellow-100">最も一般的で、エビデンスの確立された治療法</span>です。
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-[#9B89B3] mb-4">メリット</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-[#9B89B3] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">歯のすり減り・破折を効果的に防止</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-[#9B89B3] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">顎関節への負担を軽減</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-[#9B89B3] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">筋肉の緊張緩和により頭痛・肩こりが改善</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-[#9B89B3] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">保険適用で経済的（3割負担で約3,000〜5,000円）</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-[#9B89B3] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">非侵襲的で副作用が少ない</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-600 mb-4">デメリット・注意点</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">装着に慣れるまで違和感がある（通常1〜2週間）</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">歯ぎしりそのものを止めるものではない（対症療法）</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">毎日の装着と適切な管理が必要</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">定期的なチェックと調整が必要</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-[#9B89B3] p-6 rounded-r-lg">
                  <p className="text-sm font-semibold text-[#9B89B3] mb-2">エビデンス</p>
                  <p className="text-gray-700 leading-relaxed">
                    Macedo CR らのコクランレビュー（Cochrane Database Syst Rev 2007）では、
                    スプリント療法は歯の摩耗を予防し、顎関節症の症状を軽減する効果があることが示されています。
                    また、Landry ML らの研究（Cranio 2006）では、ナイトガード使用により筋筋膜性疼痛が<span className="font-bold">平均50%減少</span>したことが報告されています。
                  </p>
                  <p className="text-xs text-gray-500 italic mt-2">Macedo CR et al., Cochrane Database Syst Rev 2007; Landry ML et al., Cranio 2006</p>
                </div>

                <div className="mt-8 bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-4">治療の流れ</h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start gap-3">
                      <span className="bg-[#9B89B3] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
                      <div>
                        <span className="font-bold">問診・診査</span>
                        <p className="text-xs text-gray-600 mt-1">症状の確認、歯のすり減り具合、顎関節の状態をチェック</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-[#9B89B3] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
                      <div>
                        <span className="font-bold">型取り</span>
                        <p className="text-xs text-gray-600 mt-1">精密な歯型を採取し、オーダーメイドのナイトガードを作製</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-[#9B89B3] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
                      <div>
                        <span className="font-bold">装着・調整（約1週間後）</span>
                        <p className="text-xs text-gray-600 mt-1">完成したナイトガードの装着、噛み合わせの微調整、使用方法の説明</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-[#9B89B3] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
                      <div>
                        <span className="font-bold">定期チェック</span>
                        <p className="text-xs text-gray-600 mt-1">3〜6ヶ月ごとにナイトガードの状態確認と調整</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Treatment 2: ボトックス治療 */}
              <article className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-2 border-blue-100">
                <header className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold">推奨度：中</div>
                    <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold text-sm">自費診療</div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-2">
                    ボトックス治療
                  </h3>
                  <p className="text-lg text-gray-600">咬筋の過緊張を緩和する治療法</p>
                </header>

                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    ボツリヌストキシン（ボトックス）を咬筋に注射することで、
                    筋肉の過剰な収縮を抑制し、<span className="font-bold bg-yellow-100">食いしばりの力を弱める治療法</span>です。
                    美容目的のボトックスと同じ薬剤を使用しますが、目的は筋肉の緊張緩和です。
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-blue-600 mb-4">メリット</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">咬筋の過緊張を直接的に緩和</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">食いしばりの力が弱まる</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">頭痛・肩こりの改善効果が高い</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">エラの張りが改善され、小顔効果も</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">施術時間が短い（約10〜15分）</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-600 mb-4">デメリット・注意点</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">効果は一時的（約3〜6ヶ月）で、定期的な再注射が必要</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">自費診療のため費用が高い（両側で3〜5万円程度）</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">効果発現まで数日〜2週間かかる</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">まれに咬む力が弱くなりすぎることがある</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">妊娠中・授乳中は使用不可</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-sm font-semibold text-blue-600 mb-2">エビデンス</p>
                  <p className="text-gray-700 leading-relaxed">
                    Lee SJ らの無作為化比較試験（J Dent Res 2010）では、ボトックス注射により睡眠時ブラキシズムのエピソード頻度が
                    <span className="font-bold">約60%減少</span>したことが報告されています。
                    また、Al-Wayli H らの系統的レビュー（J Oral Rehabil 2017）では、ボトックスは筋筋膜性疼痛の軽減に有効であるとされています。
                    ただし、長期的な安全性と有効性についてはさらなる研究が必要とされています。
                  </p>
                  <p className="text-xs text-gray-500 italic mt-2">Lee SJ et al., J Dent Res 2010; Al-Wayli H et al., J Oral Rehabil 2017</p>
                </div>

                <div className="mt-8 bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-3">こんな方におすすめ</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>ナイトガードだけでは症状が改善しない方</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>日中の食いしばりが強い方</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>頭痛・肩こりが特にひどい方</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>咬筋の肥大（エラの張り）が気になる方</span>
                    </li>
                  </ul>
                </div>
              </article>

              {/* Treatment 3: 矯正治療 */}
              <article className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-2 border-green-100">
                <header className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-600 text-white px-4 py-2 rounded-full font-bold">推奨度：中〜高</div>
                    <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-bold text-sm">保険適用外（一部条件あり）</div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-2">
                    矯正治療による咬合改善
                  </h3>
                  <p className="text-lg text-gray-600">顎位・咬合を整えることで根本から改善</p>
                </header>

                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    歯並びや噛み合わせの異常がブラキシズムの原因となっている場合、
                    <span className="font-bold bg-yellow-100">矯正治療により顎位を適正化し、咬合バランスを整えることで、根本的な改善が期待できます</span>。
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold">重要：</span>
                    すべてのブラキシズムが咬合異常によるものではありません。
                    精密な診査診断により、矯正治療が適応かどうかを慎重に判断する必要があります。
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-green-600 mb-4">メリット</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">咬合の根本的な改善</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">顎位の適正化により顎関節への負担が軽減</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">歯並びの改善により審美性も向上</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">咀嚼機能の向上</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">長期的な効果が期待できる</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-600 mb-4">デメリット・注意点</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">治療期間が長い（1〜3年程度）</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">費用が高額（70〜150万円程度）</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">矯正中の装置の違和感や痛み</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">すべてのブラキシズムに有効とは限らない</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">矯正後の保定（リテーナー）が必要</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <p className="text-sm font-semibold text-green-600 mb-2">エビデンス</p>
                  <p className="text-gray-700 leading-relaxed">
                    咬合異常とブラキシズムの関連については議論がありますが、Manfredini D らの研究（J Oral Rehabil 2012）では、
                    特定の咬合干渉（early contact）を有する患者では、矯正治療や咬合調整によりブラキシズムが軽減する可能性が示唆されています。
                    ただし、咬合調整だけでブラキシズムを完全に治療できるとするエビデンスは限定的であり、
                    多因子性の問題として包括的にアプローチすることが重要です。
                  </p>
                  <p className="text-xs text-gray-500 italic mt-2">Manfredini D et al., J Oral Rehabil 2012; Lobbezoo F et al., J Oral Rehabil 2018</p>
                </div>

                <div className="mt-8 bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-3">矯正治療の適応となる咬合異常</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">●</span>
                      <span>開咬（前歯が咬み合わない）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">●</span>
                      <span>過蓋咬合（深い噛み合わせ）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">●</span>
                      <span>交叉咬合（横のずれ）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">●</span>
                      <span>顎のずれ（顎偏位）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">●</span>
                      <span>早期接触（特定の歯が先に当たる）</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-3">当院の矯正治療</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    当院では、ブラキシズムの原因が咬合異常にあると診断された場合、
                    矯正専門医と連携して適切な治療計画を立案します。
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>精密な咬合診査（咬合器分析、顎運動測定など）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>3Dシミュレーションによる治療計画の可視化</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>マウスピース矯正・ワイヤー矯正など複数の選択肢</span>
                    </li>
                  </ul>
                </div>
              </article>

              {/* Treatment 4: その他の治療法 */}
              <article className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-2 border-gray-200">
                <header className="mb-8">
                  <h3 className="text-3xl font-bold text-[#5A4D41] mb-2">
                    その他の治療法・セルフケア
                  </h3>
                </header>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-[#9B89B3] mb-3">認知行動療法（CBT）</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      ストレスや不安がブラキシズムの原因となっている場合、認知行動療法が有効です。
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-purple-500 flex-shrink-0 mt-0.5" />
                        <span>リラクゼーション技法の習得</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-purple-500 flex-shrink-0 mt-0.5" />
                        <span>ストレスマネジメント</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-purple-500 flex-shrink-0 mt-0.5" />
                        <span>バイオフィードバック療法</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-blue-600 mb-3">生活習慣の改善</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      日常生活での意識改善も重要です。
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>日中の食いしばりに気づいたらリラックス</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>カフェイン・アルコールを控える</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>睡眠の質を改善する</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-green-600 mb-3">理学療法・マッサージ</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      筋肉の緊張を和らげることで症状を軽減します。
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span>咬筋・側頭筋のマッサージ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span>温熱療法（ホットパック）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span>顎のストレッチ体操</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-orange-600 mb-3">薬物療法</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      症状が重度の場合、一時的に薬物療法を併用することがあります。
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />
                        <span>筋弛緩剤（短期間のみ）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />
                        <span>抗不安薬（医師の処方が必要）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />
                        <span>痛み止め（対症療法）</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-2 md:py-2 px-4 bg-white scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#9B89B3] font-bold tracking-[0.2em] text-sm block mb-2">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] mb-4">
                よくあるご質問
              </h2>
            </div>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <h3 className="font-bold text-lg md:text-xl mb-4 text-[#5A4D41] flex items-start gap-3">
                  <span className="bg-[#E67A2E] text-white px-3 py-1 rounded-full text-sm flex-shrink-0">Q</span>
                  <span>歯ぎしりは完全に治りますか？</span>
                </h3>
                <div className="ml-0 md:ml-12">
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    歯ぎしりの原因はストレス、遺伝、咬合異常など複合的であり、完全に「治す（なくす）」ことは難しいのが現状です。治療の目的は、ナイトガードやボトックスなどで歯や顎への負担を軽減し、症状をコントロールすること（対症療法）が中心となります。ただし、咬合異常が原因の場合は、矯正治療により根本的な改善が期待できる場合もあります。
                  </p>
                  <div className="bg-blue-50 border-l-4 border-[#E67A2E] p-4 rounded-r-lg">
                    <p className="text-sm font-semibold text-[#5A4D41] mb-2">治療アプローチ</p>
                    <ul className="space-y-2 text-sm text-[#8D8070]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E] mt-1">●</span>
                        <span>対症療法：ナイトガード、ボトックス</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E] mt-1">●</span>
                        <span>根本治療：咬合異常の場合は矯正治療</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <h3 className="font-bold text-lg md:text-xl mb-4 text-[#5A4D41] flex items-start gap-3">
                  <span className="bg-[#E67A2E] text-white px-3 py-1 rounded-full text-sm flex-shrink-0">Q</span>
                  <span>ナイトガードは保険適用ですか？</span>
                </h3>
                <div className="ml-0 md:ml-12">
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    はい、歯科医院で作製するナイトガード（スプリント）は保険適用です。3割負担の方で約3,000円〜5,000円程度で作製できます（初診料・検査料等は別途）。ただし、市販のマウスピースは保険適用外であり、フィット感も劣るため、歯科医院でオーダーメイドのものを作製することをお勧めします。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                      <p className="font-bold text-green-800 mb-2 text-sm">歯科医院製</p>
                      <ul className="space-y-1 text-xs text-[#8D8070]">
                        <li>• 保険適用</li>
                        <li>• 3,000〜5,000円</li>
                        <li>• オーダーメイド</li>
                        <li>• フィット感良好</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                      <p className="font-bold text-red-800 mb-2 text-sm">市販品</p>
                      <ul className="space-y-1 text-xs text-[#8D8070]">
                        <li>• 保険適用外</li>
                        <li>• 価格は安いが...</li>
                        <li>• フィット感不良</li>
                        <li>• 効果不十分</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <h3 className="font-bold text-lg md:text-xl mb-4 text-[#5A4D41] flex items-start gap-3">
                  <span className="bg-[#E67A2E] text-white px-3 py-1 rounded-full text-sm flex-shrink-0">Q</span>
                  <span>市販のマウスピースでも効果はありますか？</span>
                </h3>
                <div className="ml-0 md:ml-12">
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    市販品は誰にでも合うように作られているため、フィット感が悪く、逆に顎を痛めたり噛み合わせが悪くなるリスクがあります。また、適切な厚みや硬さでないと、歯を守る効果が不十分です。歯科医院でご自身の歯型に合わせて作製したものを使用することを強くお勧めします。
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <p className="text-sm font-semibold text-yellow-800 mb-2">市販品のリスク</p>
                    <ul className="space-y-2 text-sm text-[#8D8070]">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>フィット感が悪い</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>顎を痛めるリスク</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>噛み合わせが悪化する可能性</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>保護効果が不十分</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <h3 className="font-bold text-lg md:text-xl mb-4 text-[#5A4D41] flex items-start gap-3">
                  <span className="bg-[#E67A2E] text-white px-3 py-1 rounded-full text-sm flex-shrink-0">Q</span>
                  <span>ボトックス治療の効果はどのくらい持続しますか？</span>
                </h3>
                <div className="ml-0 md:ml-12">
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    ボトックスの効果は個人差がありますが、通常3〜6ヶ月程度持続します。効果が切れてきたら、再度注射を行う必要があります。定期的に継続することで、咬筋が徐々に小さくなり、食いしばりの力も弱まっていく傾向があります。
                  </p>
                  <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                    <p className="text-sm font-semibold text-purple-800 mb-2">ボトックスの効果</p>
                    <ul className="space-y-2 text-sm text-[#8D8070]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E] mt-1">●</span>
                        <span>持続期間：3〜6ヶ月</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E] mt-1">●</span>
                        <span>定期的な継続が必要</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E] mt-1">●</span>
                        <span>継続により咬筋が小さくなる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E] mt-1">●</span>
                        <span>食いしばりの力が弱まる傾向</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <h3 className="font-bold text-lg md:text-xl mb-4 text-[#5A4D41] flex items-start gap-3">
                  <span className="bg-[#E67A2E] text-white px-3 py-1 rounded-full text-sm flex-shrink-0">Q</span>
                  <span>矯正治療をすれば歯ぎしりは治りますか？</span>
                </h3>
                <div className="ml-0 md:ml-12">
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    矯正治療が有効なのは、咬合異常（噛み合わせのずれ）がブラキシズムの主な原因となっている場合です。すべての歯ぎしりが咬合異常によるものではないため、精密な診査診断が必要です。ストレスや遺伝的要因が強い場合は、矯正だけでは改善しないこともあります。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-bold text-[#5A4D41] mb-2 text-sm">効果あり</p>
                      <p className="text-xs text-[#8D8070]">咬合異常が主原因の場合</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-bold text-[#5A4D41] mb-2 text-sm">効果限定的</p>
                      <p className="text-xs text-[#8D8070]">ストレス・遺伝要因が主原因の場合</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ 6 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <h3 className="font-bold text-lg md:text-xl mb-4 text-[#5A4D41] flex items-start gap-3">
                  <span className="bg-[#E67A2E] text-white px-3 py-1 rounded-full text-sm flex-shrink-0">Q</span>
                  <span>日中も食いしばっていることに気づきました。どうすればいいですか？</span>
                </h3>
                <div className="ml-0 md:ml-12">
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    日中の食いしばり（覚醒時ブラキシズム）には、意識的なリラクゼーションが効果的です。気づいたらすぐに顎の力を抜き、上下の歯を離すようにしましょう。「唇は閉じて、歯は離す」を意識してください。また、ストレス管理や認知行動療法も有効です。重度の場合はボトックス治療も検討されます。
                  </p>
                  <div className="bg-cyan-50 border-l-4 border-cyan-400 p-4 rounded-r-lg">
                    <p className="text-sm font-semibold text-cyan-800 mb-2">セルフケア</p>
                    <ul className="space-y-2 text-sm text-[#8D8070]">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>気づいたら顎の力を抜く</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>「唇は閉じて、歯は離す」</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>ストレス管理</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>認知行動療法</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ 7 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <h3 className="font-bold text-lg md:text-xl mb-4 text-[#5A4D41] flex items-start gap-3">
                  <span className="bg-[#E67A2E] text-white px-3 py-1 rounded-full text-sm flex-shrink-0">Q</span>
                  <span>子供も歯ぎしりをしますが、治療は必要ですか？</span>
                </h3>
                <div className="ml-0 md:ml-12">
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    子供の歯ぎしりは成長過程で一時的に見られることが多く、多くの場合は自然に治まります。ただし、乳歯や永久歯が大きくすり減っている場合、顎の痛みを訴える場合は、小児歯科での相談をお勧めします。必要に応じて、子供用のナイトガードを作製することもあります。
                  </p>
                  <div className="bg-blue-50 border-l-4 border-[#E67A2E] p-4 rounded-r-lg">
                    <p className="text-sm font-semibold text-[#5A4D41] mb-2">受診が必要な場合</p>
                    <ul className="space-y-2 text-sm text-[#8D8070]">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-[#E67A2E] flex-shrink-0 mt-0.5" />
                        <span>歯が大きくすり減っている</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-[#E67A2E] flex-shrink-0 mt-0.5" />
                        <span>顎の痛みを訴える</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">○</span>
                        <span>多くは自然に治まる</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2 bg-gradient-to-br from-[#8B7AA3] to-[#9B89B3] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              まずは一度、お気軽にご相談ください
            </h2>
            <p className="text-white/90 mb-12 text-lg">
              歯ぎしり・食いしばりのお悩み、お気軽にご相談ください。<br />
              患者様一人ひとりに合わせた最適な治療プランをご提案いたします。
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
              <a
                href="https://apo-toolboxes.stransa.co.jp/user/web/babordc4ba29b/reservations"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-[#9B89B3] px-8 py-5 rounded-full font-bold shadow-lg transition-all flex items-center justify-center gap-3 text-lg flex-1"
              >
                <Clock />
                24時間 WEB予約
              </a>
              <a
                href="tel:03-1234-5678"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-5 rounded-full font-bold transition-all flex items-center justify-center gap-3 text-lg flex-1"
              >
                お電話でのご予約
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
