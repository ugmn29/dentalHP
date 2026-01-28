"use client";

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CheckCircle2, AlertTriangle, Calendar, ChevronRight } from 'lucide-react';

export default function TMJPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#8B7AA3] via-[#9B89B3] to-[#AB99C3] text-white py-2 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          </div>

          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center mb-8">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                <span className="text-sm font-bold tracking-wider">TMJ DISORDERS</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                痛み・音・開口障害から<br />解放される
                <span className="block mt-4 text-3xl md:text-4xl lg:text-5xl text-white/90">
                  顎関節症の専門治療
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                顎の痛み、カクカク音、口が開かない…<br />
                原因を見極め、エビデンスに基づいた適切な治療を提供します
              </p>
            </div>

            {/* WEB予約ボタン */}
            <div className="flex justify-center mt-12">
              <a
                href="https://apo-toolboxes.stransa.co.jp/user/web/babordc4ba29b/reservations"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 bg-white text-[#9B89B3] px-8 py-5 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:scale-105"
              >
                <Calendar size={24} className="group-hover:rotate-12 transition-transform" />
                <div className="flex flex-col items-start">
                  <span className="text-xs font-medium">24時間受付</span>
                  <span className="text-lg font-bold">WEB予約</span>
                </div>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section id="quick-nav" className="py-2 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {[
                { href: "#definition", label: "顎関節症とは", num: "1" },
                { href: "#symptoms", label: "症状チェック", num: "2" },
                { href: "#causes", label: "原因", num: "3" },
                { href: "#risks", label: "放置のリスク", num: "4" },
                { href: "#treatments", label: "治療方法", num: "5" },
                { href: "#faq", label: "よくある質問", num: "6" }
              ].map((item) => (
                <a
                  key={item.num}
                  href={item.href}
                  className="group bg-white hover:bg-[#9B89B3] border-2 border-[#9B89B3] rounded-xl p-4 transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#9B89B3] group-hover:bg-white text-white group-hover:text-[#9B89B3] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors">
                      {item.num}
                    </div>
                    <span className="text-sm font-bold text-gray-800 group-hover:text-white transition-colors text-center">
                      {item.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Definition Section */}
        <section id="definition" className="py-2 bg-white scroll-mt-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-[#9B89B3] font-bold tracking-wider text-sm">DEFINITION</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">顎関節症とは</h2>
            </div>

            <article className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-[#9B89B3]/20">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                顎関節症（Temporomandibular Disorders: TMD）とは、<span className="font-bold text-[#9B89B3]">顎関節や咀嚼筋の疼痛、関節雑音、開口障害</span>を主症状とする疾患群です。
                医学的には単一の疾患ではなく、様々な病態を含む症候群として認識されています。
              </p>

              <div className="bg-blue-50 border-l-4 border-[#9B89B3] p-6 rounded-r-xl mb-8">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="bg-[#9B89B3] text-white px-3 py-1 rounded-full text-sm">疫学データ</span>
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-[#9B89B3] flex-shrink-0 mt-0.5" />
                    <span>成人の<span className="font-bold text-[#9B89B3]">約20〜30%</span>が何らかのTMD症状を経験</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-[#9B89B3] flex-shrink-0 mt-0.5" />
                    <span>治療が必要な症例は<span className="font-bold text-[#9B89B3]">約5〜10%</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-[#9B89B3] flex-shrink-0 mt-0.5" />
                    <span>女性は男性の<span className="font-bold text-[#9B89B3]">約2〜3倍</span>発症しやすい</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 italic">
                  Scrivani SJ et al., N Engl J Med 2008; 359:2693-2705
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-[#9B89B3] pb-2">TMDの分類（3つのタイプ）</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-[#9B89B3]/30">
                  <div className="bg-[#9B89B3] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    Ⅰ
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2 text-lg">筋筋膜性疼痛</h4>
                  <p className="text-sm text-gray-600 mb-3">Myofascial Pain</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    咀嚼筋の痛みや圧痛が主症状。ストレスや歯ぎしりが原因となることが多い。
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-[#9B89B3]/30">
                  <div className="bg-[#9B89B3] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    Ⅱ
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2 text-lg">関節円板障害</h4>
                  <p className="text-sm text-gray-600 mb-3">Disc Displacement</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    関節円板のズレにより「カクッ」という音や開口障害が生じる。最も一般的なタイプ。
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-[#9B89B3]/30">
                  <div className="bg-[#9B89B3] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    Ⅲ
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2 text-lg">変形性関節症</h4>
                  <p className="text-sm text-gray-600 mb-3">Osteoarthritis</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    関節の変形や骨の変化を伴う。長期間の負荷により発症することが多い。
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Symptoms Section */}
        <section id="symptoms" className="py-2 bg-gradient-to-b from-gray-50 to-white scroll-mt-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-[#9B89B3] font-bold tracking-wider text-sm">SYMPTOMS CHECK</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">こんな症状はありませんか？</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "顎・顔面の痛み",
                  items: [
                    "口を開け閉めすると顎が痛い",
                    "食事中に顎やこめかみが痛む",
                    "朝起きると顎が疲れている、だるい",
                    "硬いものを噛むと痛い"
                  ],
                  color: "red"
                },
                {
                  title: "関節雑音",
                  items: [
                    "口を開けると「カクッ」「コキッ」と音がする",
                    "「ジャリジャリ」と擦れるような音がする",
                    "音が気になって食事が楽しめない",
                    "以前はなかった音が最近出るようになった"
                  ],
                  color: "blue"
                },
                {
                  title: "開口障害",
                  items: [
                    "指が縦に3本入らない（約40mm以下）",
                    "あくびをするのが怖い",
                    "ハンバーガーなどが食べにくい",
                    "急に口が開かなくなった"
                  ],
                  color: "orange"
                },
                {
                  title: "関連症状",
                  items: [
                    "頭痛や首・肩のこりがひどい",
                    "耳の痛みや耳鳴りがする",
                    "噛み合わせに違和感がある",
                    "めまいや目の疲れを感じる"
                  ],
                  color: "green"
                }
              ].map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-[#9B89B3] transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full bg-${category.color}-500`}></span>
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle2 size={16} className="text-[#9B89B3] flex-shrink-0 mt-1" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <p className="text-gray-700 font-bold flex items-start gap-2">
                <AlertTriangle size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                これらの症状が2週間以上続く場合は、早めの受診をお勧めします
              </p>
            </div>
          </div>
        </section>

        {/* Causes Section */}
        <section id="causes" className="py-2 bg-white scroll-mt-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-[#9B89B3] font-bold tracking-wider text-sm">CAUSES</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">顎関節症の原因</h2>
            </div>

            <article className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-[#9B89B3]/20">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                顎関節症は<span className="font-bold text-[#9B89B3]">多因子性疾患</span>であり、複数の要因が複雑に絡み合って発症します。
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "ブラキシズム（歯ぎしり・食いしばり）",
                    desc: "最大の原因因子。睡眠中や覚醒時に無意識に行われ、顎関節に過度な負荷をかける。",
                    impact: "高"
                  },
                  {
                    title: "心理社会的ストレス",
                    desc: "不安、抑うつ、緊張などが筋緊張を高め、TMD発症リスクを増加させる。",
                    impact: "高"
                  },
                  {
                    title: "咬合異常・不正咬合",
                    desc: "噛み合わせのアンバランスが顎関節への負担を増やす。ただし単独原因となることは稀。",
                    impact: "中"
                  },
                  {
                    title: "外傷",
                    desc: "顎への直接的な打撲、交通事故、スポーツ外傷などが関節損傷を引き起こす。",
                    impact: "中"
                  },
                  {
                    title: "生活習慣",
                    desc: "頬杖、片側咀嚼、うつぶせ寝、悪い姿勢などの日常的な癖。",
                    impact: "中"
                  },
                  {
                    title: "全身疾患",
                    desc: "関節リウマチ、線維筋痛症などの全身性疾患がTMDのリスク因子となる。",
                    impact: "低"
                  }
                ].map((cause, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-[#9B89B3]/30">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-800 text-lg">{cause.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        cause.impact === '高' ? 'bg-red-100 text-red-700' :
                        cause.impact === '中' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        影響度: {cause.impact}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{cause.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
                <p className="text-gray-700 text-sm italic">
                  Liu F, Steinkeler A. Epidemiology, diagnosis, and treatment of temporomandibular disorders. Dent Clin North Am 2013;57:465-479
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Risks Section */}
        <section id="risks" className="py-2 bg-gradient-to-b from-gray-50 to-white scroll-mt-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-[#9B89B3] font-bold tracking-wider text-sm">RISKS OF NEGLECT</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">放置することで起こりうる悪影響</h2>
              <p className="text-gray-600 mt-4">症状を我慢していると、さらに深刻な問題に発展する可能性があります</p>
            </div>

            <div className="space-y-8">
              {/* Risk 1 */}
              <article id="risk-1" className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-red-200 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">関節円板の非復位性転位への進行</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  初期の「カクッ」という音を伴う可逆性の円板転位（復位性転位）を放置すると、
                  <span className="font-bold text-red-600">関節円板が完全にズレたまま戻らなくなる「非復位性転位」に進行</span>する可能性があります。
                  この状態になると、急に口が開かなくなる「ロッキング」が起こり、日常生活に大きな支障をきたします。
                </p>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl mb-6">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <AlertTriangle size={20} className="text-red-600" />
                    エビデンス
                  </h4>
                  <p className="text-gray-700 mb-2">
                    復位性円板転位患者の<span className="font-bold text-red-600">約10〜20%が5年以内に非復位性転位に進行</span>することが報告されています。
                    特に治療を受けない場合、進行リスクが高まります。
                  </p>
                  <p className="text-xs text-gray-500 mt-3 italic">
                    Schiffman E et al., J Orofac Pain 2010;24:237-254
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2 text-sm">復位性転位（初期段階）</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 開口時に「カクッ」と音がする</li>
                      <li>• 口は正常に開けられる</li>
                      <li>• 痛みは軽度または無し</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                    <h4 className="font-bold text-red-700 mb-2 text-sm">非復位性転位（進行段階）</h4>
                    <ul className="space-y-1 text-sm text-red-600">
                      <li>• 音は消失するが口が開かない</li>
                      <li>• 開口量が指2本分以下</li>
                      <li>• 痛みや不快感が強い</li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Risk 2 */}
              <article id="risk-2" className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-orange-200 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">慢性疼痛への移行</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  急性期の痛みを適切に治療せずに放置すると、
                  <span className="font-bold text-orange-600">中枢神経系の感作が起こり、慢性疼痛に移行</span>するリスクが高まります。
                  慢性疼痛は治療が困難になり、QOL（生活の質）を著しく低下させます。
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-xl mb-6">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <AlertTriangle size={20} className="text-orange-600" />
                    エビデンス
                  </h4>
                  <p className="text-gray-700 mb-2">
                    急性TMD患者の<span className="font-bold text-orange-600">約15〜30%が慢性疼痛に移行</span>すると報告されています。
                    早期介入により、この移行を<span className="font-bold text-orange-600">約50%減少</span>させることが可能です。
                  </p>
                  <p className="text-xs text-gray-500 mt-3 italic">
                    Slade GD et al., Pain 2013;154:1820-1830
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl border border-orange-200">
                  <h4 className="font-bold text-gray-800 mb-3">慢性疼痛の特徴</h4>
                  <ul className="space-y-2">
                    {[
                      "3ヶ月以上続く持続的な痛み",
                      "わずかな刺激でも強い痛みを感じる（痛覚過敏）",
                      "頭痛、首・肩こり、睡眠障害などを併発",
                      "抑うつや不安などの心理的問題を伴う",
                      "通常の治療に反応しにくい"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                        <AlertTriangle size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              {/* Risk 3 */}
              <article id="risk-3" className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-purple-200 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">QOL（生活の質）の著しい低下</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  顎関節症を放置すると、
                  <span className="font-bold text-purple-600">食事、会話、仕事、社会活動など、日常生活のあらゆる場面で支障</span>をきたします。
                  痛みや機能障害による生活制限は、精神的ストレスをさらに増大させ、悪循環を生み出します。
                </p>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-xl mb-6">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <AlertTriangle size={20} className="text-purple-600" />
                    エビデンス
                  </h4>
                  <p className="text-gray-700 mb-2">
                    重度のTMD患者では、<span className="font-bold text-purple-600">一般人口と比較してQOLスコアが約30〜40%低下</span>することが示されています。
                    特に心理的・社会的側面での影響が大きく、慢性腰痛患者と同等レベルのQOL低下が認められます。
                  </p>
                  <p className="text-xs text-gray-500 mt-3 italic">
                    Durham J et al., J Oral Rehabil 2011;38:643-649
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-xl border border-purple-200">
                    <h4 className="font-bold text-purple-700 mb-2 text-sm">身体的影響</h4>
                    <ul className="space-y-1 text-xs text-gray-600">
                      <li>• 食事制限・栄養不足</li>
                      <li>• 睡眠障害</li>
                      <li>• 全身の筋骨格系症状</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-xl border border-purple-200">
                    <h4 className="font-bold text-purple-700 mb-2 text-sm">心理的影響</h4>
                    <ul className="space-y-1 text-xs text-gray-600">
                      <li>• 抑うつ・不安</li>
                      <li>• イライラ・集中力低下</li>
                      <li>• 自己評価の低下</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-xl border border-purple-200">
                    <h4 className="font-bold text-purple-700 mb-2 text-sm">社会的影響</h4>
                    <ul className="space-y-1 text-xs text-gray-600">
                      <li>• 仕事の生産性低下</li>
                      <li>• 社交活動の制限</li>
                      <li>• 医療費の負担増</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>

            <div className="mt-12 bg-gradient-to-r from-[#9B89B3] to-[#8B7AA3] text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-center">早期治療の重要性</h3>
              <p className="text-center leading-relaxed">
                これらの悪影響を防ぐためには、<span className="font-bold text-yellow-200">症状の早期発見と適切な治療介入</span>が不可欠です。<br />
                わずかな違和感や症状でも、まずは専門医にご相談ください。
              </p>
            </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section id="treatments" className="py-2 bg-white scroll-mt-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-[#9B89B3] font-bold tracking-wider text-sm">TREATMENT OPTIONS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">エビデンスに基づく治療方法</h2>
              <p className="text-gray-600 mt-4">患者様の症状と病態に合わせた最適な治療法をご提案します</p>
            </div>

            <div className="space-y-8">
              {/* Treatment 1: Splint Therapy */}
              <article className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-[#9B89B3]/20">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                  <h3 className="text-2xl font-bold text-gray-800">スプリント療法（ナイトガード）</h3>
                  <div className="flex gap-2">
                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">推奨度：高</span>
                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">保険適用</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  TMD治療の<span className="font-bold text-[#9B89B3]">第一選択</span>として推奨される保存的治療法です。
                  患者様の歯型に合わせて製作したマウスピースを装着することで、顎関節と咀嚼筋への負担を軽減します。
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-green-500" />
                      メリット
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "筋筋膜性疼痛を平均50〜70%軽減",
                        "歯の摩耗・破折を効果的に防止",
                        "保険適用で経済的（3割負担で約3,000〜5,000円）",
                        "非侵襲的で副作用が少ない",
                        "取り外し可能で口腔衛生を保ちやすい"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-green-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <AlertTriangle size={20} className="text-orange-500" />
                      デメリット・注意点
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "装着に慣れるまで1〜2週間の違和感",
                        "定期的な調整が必要（月1回程度）",
                        "歯ぎしりそのものを止めるものではない",
                        "不適切な調整で咬合が変化するリスク",
                        "毎晩の装着が必要（継続性が重要）"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
                  <h4 className="font-bold text-gray-800 mb-2">エビデンス</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Cochrane Review（最高水準のエビデンス）において、スプリント療法は筋筋膜性疼痛に対して
                    <span className="font-bold text-blue-600">疼痛スコアを平均50%以上改善</span>させることが示されています。
                    特に夜間の歯ぎしりを伴うケースでは<span className="font-bold text-blue-600">70〜80%の有効率</span>が報告されています。
                  </p>
                  <p className="text-xs text-gray-500 mt-3 italic">
                    Fricton J et al., Cranio 2010;28:84-95 / Macedo CR et al., Cochrane Database Syst Rev 2007
                  </p>
                </div>

                <div className="mt-6 bg-gradient-to-r from-[#9B89B3]/10 to-transparent p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-2">当院のスプリント療法の特徴</h4>
                  <ul className="space-y-2">
                    {[
                      "デジタルスキャンによる高精度な型取り",
                      "咬合分析に基づいた個別調整",
                      "定期的なフォローアップと微調整",
                      "装着方法・ケア方法の丁寧な指導"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                        <CheckCircle2 size={16} className="text-[#9B89B3] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              {/* Treatment 2: Physical Therapy */}
              <article className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-[#9B89B3]/20">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                  <h3 className="text-2xl font-bold text-gray-800">理学療法・運動療法</h3>
                  <div className="flex gap-2">
                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">推奨度：高</span>
                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">保険適用</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  顎のストレッチ、マッサージ、温熱療法などにより、<span className="font-bold text-[#9B89B3]">筋肉の緊張を和らげ、関節の可動域を改善</span>します。
                  自宅で行えるセルフケアの指導も含まれ、スプリント療法との併用が効果的です。
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
                  <h4 className="font-bold text-gray-800 mb-2">エビデンス</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    ストレッチや徒手療法により、<span className="font-bold text-blue-600">開口量が平均5〜10mm改善</span>し、
                    疼痛が<span className="font-bold text-blue-600">約40〜60%軽減</span>することが報告されています。
                  </p>
                  <p className="text-xs text-gray-500 mt-3 italic">
                    Medlicott MS, Harris SR. Phys Ther 2006;86:710-725
                  </p>
                </div>
              </article>

              {/* Treatment 3: Pharmacotherapy */}
              <article className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-[#9B89B3]/20">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                  <h3 className="text-2xl font-bold text-gray-800">薬物療法</h3>
                  <div className="flex gap-2">
                    <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-bold">推奨度：中</span>
                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">保険適用</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  急性期の強い痛みに対して、<span className="font-bold text-[#9B89B3]">消炎鎮痛剤（NSAIDs）や筋弛緩剤</span>を短期間使用します。
                  対症療法であり、根本治療ではありませんが、痛みのコントロールにより日常生活の質を改善できます。
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2 text-sm">NSAIDs</h4>
                    <p className="text-xs text-gray-600">消炎鎮痛作用により急性疼痛を軽減。短期使用（2週間以内）が原則。</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2 text-sm">筋弛緩剤</h4>
                    <p className="text-xs text-gray-600">咀嚼筋の過緊張を和らげる。眠気の副作用に注意。</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2 text-sm">三環系抗うつ薬</h4>
                    <p className="text-xs text-gray-600">慢性疼痛に対して低用量で使用。疼痛閾値を上げる効果。</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
                  <p className="text-gray-700 text-sm font-bold flex items-start gap-2">
                    <AlertTriangle size={16} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                    薬物療法は他の治療法と併用し、長期連用は避けることが重要です
                  </p>
                </div>
              </article>

              {/* Treatment 4: Botox */}
              <article className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-[#9B89B3]/20">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                  <h3 className="text-2xl font-bold text-gray-800">ボトックス治療</h3>
                  <div className="flex gap-2">
                    <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-bold">推奨度：中</span>
                    <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold">自費診療</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  ボツリヌストキシンを咬筋に注射し、<span className="font-bold text-[#9B89B3]">筋肉の過度な収縮を抑制</span>します。
                  特に重度のブラキシズムを伴うTMD患者や、保存的治療に反応しない難治例に対して有効性が示されています。
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-green-500" />
                      メリット
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "筋性疼痛を50〜70%軽減",
                        "ブラキシズムの頻度・強度を減少",
                        "効果は3〜6ヶ月持続",
                        "手術不要の低侵襲治療",
                        "咬筋肥大によるエラ張りも改善"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-green-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <AlertTriangle size={20} className="text-orange-500" />
                      デメリット・注意点
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "自費診療（両側で約30,000〜60,000円）",
                        "効果は一時的で定期的な再注射が必要",
                        "稀に咬合力の低下や嚥下障害",
                        "妊娠中・授乳中は禁忌",
                        "注射部位の一時的な腫れや痛み"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
                  <h4 className="font-bold text-gray-800 mb-2">エビデンス</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    ボツリヌストキシン注射により、筋性TMD患者の<span className="font-bold text-blue-600">疼痛が平均50〜70%減少</span>し、
                    ブラキシズムの活動が<span className="font-bold text-blue-600">約60%減少</span>することが報告されています。
                    特に保存的治療に抵抗性の症例で有効性が高いとされています。
                  </p>
                  <p className="text-xs text-gray-500 mt-3 italic">
                    De Riu G et al., J Craniofac Surg 2012;23:1126-1129 / Al-Wayli H. Cochrane Database Syst Rev 2017
                  </p>
                </div>
              </article>

              {/* Treatment 5: Orthodontics */}
              <article className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-[#9B89B3]/20">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                  <h3 className="text-2xl font-bold text-gray-800">矯正治療による顎位・咬合の改善</h3>
                  <div className="flex gap-2">
                    <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-bold">推奨度：中〜高</span>
                    <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold">自費診療</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  不正咬合や顎位の異常がTMDの原因となっている場合、
                  <span className="font-bold text-[#9B89B3]">矯正治療により咬合バランスを整え、顎関節への負担を根本から軽減</span>します。
                  特に若年者や成長期の患者に対しては、将来のTMD予防としても有効です。
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-green-500" />
                      メリット
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "咬合の根本的な改善",
                        "顎位の適正化により関節負担を軽減",
                        "長期的な再発予防効果",
                        "審美的な改善も同時に達成",
                        "全身の姿勢改善にも寄与"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-green-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <AlertTriangle size={20} className="text-orange-500" />
                      デメリット・注意点
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "治療期間が長い（1〜3年）",
                        "費用が高額（約60〜100万円）",
                        "治療中に一時的に症状が悪化することも",
                        "全てのTMDが矯正で改善するわけではない",
                        "保定期間中のメンテナンスが必要"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
                  <h4 className="font-bold text-gray-800 mb-2">エビデンス</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    咬合異常を伴うTMD患者において、矯正治療により
                    <span className="font-bold text-blue-600">約60〜70%の症例で症状の改善</span>が認められています。
                    特に前歯部の開咬や著しい過蓋咬合を伴う症例では、矯正治療が<span className="font-bold text-blue-600">根本的な解決策</span>となりえます。
                  </p>
                  <p className="text-xs text-gray-500 mt-3 italic">
                    Manfredini D et al., J Oral Rehabil 2012;39:784-792
                  </p>
                </div>

                <div className="mt-6 bg-gradient-to-r from-[#9B89B3]/10 to-transparent p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-2">適応となるケース</h4>
                  <ul className="space-y-2">
                    {[
                      "明らかな不正咬合（開咬、過蓋咬合、反対咬合など）を伴う",
                      "顎位のズレが顕著で、咬合調整だけでは不十分",
                      "若年者で成長を利用した治療が可能",
                      "保存的治療で改善が見られず、咬合が原因と考えられる"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                        <CheckCircle2 size={16} className="text-[#9B89B3] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              {/* Treatment 6: Surgery */}
              <article className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-gray-300">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                  <h3 className="text-2xl font-bold text-gray-800">外科的治療</h3>
                  <div className="flex gap-2">
                    <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-bold">推奨度：低</span>
                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">保険適用</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  重度の関節円板転位、変形性顎関節症、骨性癒着など、
                  <span className="font-bold text-gray-600">保存的治療に抵抗性の重症例に対する最終手段</span>です。
                  関節鏡視下手術や開放手術がありますが、適応は非常に限定的です。
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl mb-6">
                  <p className="text-gray-700 text-sm font-bold flex items-start gap-2">
                    <AlertTriangle size={16} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                    外科治療が必要となるケースはTMD全体の5%未満です。ほとんどのケースは保存的治療で改善します。
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-3">外科治療の適応（稀なケース）</h4>
                  <ul className="space-y-2">
                    {[
                      "関節円板穿孔や高度な変形",
                      "骨性癒着により開口が著しく制限",
                      "保存的治療を6ヶ月以上行っても改善しない重症例",
                      "腫瘍や骨折などの器質的病変"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span className="text-gray-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 mt-4">
                    ※該当する場合は、大学病院などの専門医療機関をご紹介いたします
                  </p>
                </div>
              </article>
            </div>

            <div className="mt-12 bg-gradient-to-r from-[#9B89B3] to-[#8B7AA3] text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-center">当院の治療方針</h3>
              <p className="text-center leading-relaxed mb-4">
                当院では<span className="font-bold text-yellow-200">エビデンスに基づいた段階的治療</span>を実践しています。<br />
                まずは保存的治療（スプリント・理学療法）から開始し、患者様の症状と反応に応じて最適な治療法を選択します。
              </p>
              <div className="flex justify-center mt-6">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <p className="text-sm font-bold">低侵襲 → 効果的 → 患者様中心</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-2 bg-gradient-to-b from-gray-50 to-white scroll-mt-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-[#9B89B3] font-bold tracking-wider text-sm">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">よくあるご質問</h2>
            </div>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg md:text-xl mb-4 text-[#5A4D41] flex items-start gap-3">
                  <span className="bg-[#E67A2E] text-white px-3 py-1 rounded-full text-sm flex-shrink-0">Q</span>
                  <span>顎関節症は完全に治りますか？</span>
                </h3>
                <div className="ml-0 md:ml-12">
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    多くのケースで症状の大幅な改善または完治が可能です。特に早期に適切な治療を開始した場合、70〜80%の患者様で満足のいく結果が得られます。ただし、慢性化した症例や重度の器質的変化を伴う場合は、症状の軽減にとどまることもあります。生活習慣の改善と定期的なメンテナンスにより、再発を予防することが重要です。
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                    <p className="text-sm font-semibold text-green-800 mb-2">改善率</p>
                    <div className="grid md:grid-cols-2 gap-3 text-sm text-[#8D8070]">
                      <div>
                        <p className="font-bold mb-1">早期治療</p>
                        <p className="text-xs">70〜80%が満足のいく結果</p>
                      </div>
                      <div>
                        <p className="font-bold mb-1">慢性化症例</p>
                        <p className="text-xs">症状の軽減が中心</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg md:text-xl mb-4 text-[#5A4D41] flex items-start gap-3">
                  <span className="bg-[#E67A2E] text-white px-3 py-1 rounded-full text-sm flex-shrink-0">Q</span>
                  <span>マウスピース（スプリント）は保険適用ですか？</span>
                </h3>
                <div className="ml-0 md:ml-12">
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    はい、顎関節症の治療に使用するスプリントは保険適用となります。3割負担の場合、製作費用は約3,000〜5,000円程度です。ただし、診察料や検査料は別途かかります。初診から完成まで2〜3回の通院が必要です。
                  </p>
                  <div className="bg-blue-50 border-l-4 border-[#E67A2E] p-4 rounded-r-lg">
                    <p className="text-sm font-semibold text-[#5A4D41] mb-2">費用の目安（3割負担）</p>
                    <ul className="space-y-2 text-sm text-[#8D8070]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E] mt-1">●</span>
                        <span>スプリント製作：3,000〜5,000円</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E] mt-1">●</span>
                        <span>初診料・検査料：別途</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E] mt-1">●</span>
                        <span>通院回数：2〜3回</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg md:text-xl mb-4 text-[#5A4D41] flex items-start gap-3">
                  <span className="bg-[#E67A2E] text-white px-3 py-1 rounded-full text-sm flex-shrink-0">Q</span>
                  <span>治療期間はどのくらいかかりますか？</span>
                </h3>
                <div className="ml-0 md:ml-12">
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    症状の程度や病態により異なりますが、軽度〜中等度の筋筋膜性疼痛の場合、スプリント療法で1〜3ヶ月程度で改善が見られることが多いです。関節円板障害を伴う場合は3〜6ヶ月、慢性化した症例では6ヶ月以上かかることもあります。症状が改善した後も、再発予防のため定期検診（3〜6ヶ月ごと）をお勧めします。
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="font-bold text-[#5A4D41] mb-1 text-sm">軽度〜中等度</p>
                      <p className="text-xs text-[#8D8070]">1〜3ヶ月</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <p className="font-bold text-[#5A4D41] mb-1 text-sm">円板障害</p>
                      <p className="text-xs text-[#8D8070]">3〜6ヶ月</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="font-bold text-[#5A4D41] mb-1 text-sm">慢性化</p>
                      <p className="text-xs text-[#8D8070]">6ヶ月以上</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg md:text-xl mb-4 text-[#5A4D41] flex items-start gap-3">
                  <span className="bg-[#E67A2E] text-white px-3 py-1 rounded-full text-sm flex-shrink-0">Q</span>
                  <span>口を開けると音がしますが、痛みはありません。治療は必要ですか？</span>
                </h3>
                <div className="ml-0 md:ml-12">
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    痛みや開口障害がない単純なクリック音（復位性円板転位）の場合、必ずしも治療は必要ありません。しかし、約10〜20%の症例で非復位性転位（口が開かなくなる状態）に進行する可能性があるため、定期的な経過観察が推奨されます。音が大きくなってきた、痛みが出始めた、開口量が減ってきたなどの変化があれば、早めに受診してください。
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <p className="text-sm font-semibold text-yellow-800 mb-2">受診が必要な変化</p>
                    <ul className="space-y-2 text-sm text-[#8D8070]">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>音が大きくなってきた</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>痛みが出始めた</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>開口量が減ってきた</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg md:text-xl mb-4 text-[#5A4D41] flex items-start gap-3">
                  <span className="bg-[#E67A2E] text-white px-3 py-1 rounded-full text-sm flex-shrink-0">Q</span>
                  <span>歯ぎしりと顎関節症の関係は？</span>
                </h3>
                <div className="ml-0 md:ml-12">
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    歯ぎしり（ブラキシズム）は顎関節症の最大のリスク因子の一つです。睡眠中の歯ぎしりでは通常の咀嚼力の2〜10倍の力が顎関節にかかるため、関節や筋肉に過度な負担となります。TMD患者の約70〜80%に何らかのブラキシズムが認められます。スプリント療法は歯ぎしりによる顎関節への負担を軽減する効果があります。
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                    <p className="text-sm font-semibold text-red-800 mb-2">歯ぎしりの影響</p>
                    <ul className="space-y-2 text-sm text-[#8D8070]">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">●</span>
                        <span>通常の2〜10倍の力が顎関節にかかる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">●</span>
                        <span>TMD患者の70〜80%にブラキシズムあり</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">●</span>
                        <span>スプリント療法で負担軽減可能</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ 6 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg md:text-xl mb-4 text-[#5A4D41] flex items-start gap-3">
                  <span className="bg-[#E67A2E] text-white px-3 py-1 rounded-full text-sm flex-shrink-0">Q</span>
                  <span>ボトックス治療は誰でも受けられますか？</span>
                </h3>
                <div className="ml-0 md:ml-12">
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    ボトックス治療は重度のブラキシズムを伴うTMDや、保存的治療に抵抗性の筋性疼痛に対して有効ですが、全ての方に適しているわけではありません。妊娠中・授乳中の方、神経筋疾患のある方、ボツリヌストキシンにアレルギーのある方は禁忌です。また自費診療のため費用面でのご検討も必要です。適応については診察時に詳しくご説明いたします。
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                    <p className="text-sm font-semibold text-red-800 mb-2">禁忌事項</p>
                    <ul className="space-y-2 text-sm text-[#8D8070]">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">×</span>
                        <span>妊娠中・授乳中の方</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">×</span>
                        <span>神経筋疾患のある方</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">×</span>
                        <span>ボツリヌストキシンアレルギーの方</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ 7 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg md:text-xl mb-4 text-[#5A4D41] flex items-start gap-3">
                  <span className="bg-[#E67A2E] text-white px-3 py-1 rounded-full text-sm flex-shrink-0">Q</span>
                  <span>手術が必要になることはありますか？</span>
                </h3>
                <div className="ml-0 md:ml-12">
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    ほとんどのケースは保存的治療（スプリント、理学療法、薬物療法など）で改善します。外科手術が必要となるのはTMD全体の5%未満で、関節円板穿孔、高度な変形性関節症、骨性癒着など、保存的治療を6ヶ月以上行っても改善しない重症例に限られます。その場合は大学病院などの専門医療機関をご紹介いたします。
                  </p>
                  <div className="bg-blue-50 border-l-4 border-[#E67A2E] p-4 rounded-r-lg">
                    <p className="text-sm font-semibold text-[#5A4D41] mb-2">手術が必要なケース</p>
                    <ul className="space-y-2 text-sm text-[#8D8070]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E] mt-1">●</span>
                        <span>TMD全体の5%未満</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E] mt-1">●</span>
                        <span>保存的治療6ヶ月以上で改善なし</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E67A2E] mt-1">●</span>
                        <span>専門医療機関へご紹介</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2 bg-gradient-to-br from-[#5A4D41] to-[#6A5D51] text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              顎の痛み・音・違和感を<br className="md:hidden" />そのままにしないでください
            </h2>
            <p className="text-lg mb-4 text-white/90">
              早期治療が、早期改善の鍵です。<br />
              症状が軽いうちに適切な治療を開始することで、慢性化を防ぎ、QOLを守ることができます。
            </p>
            <p className="text-white/80 mb-12">
              まずはお気軽にご相談ください。エビデンスに基づいた最適な治療法をご提案いたします。
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
              <a
                href="https://apo-toolboxes.stransa.co.jp/user/web/babordc4ba29b/reservations"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#9B89B3] hover:bg-[#AB99C3] text-white px-8 py-5 rounded-full font-bold shadow-2xl transition-all flex items-center justify-center gap-3 text-lg flex-1"
              >
                <Calendar size={24} className="group-hover:rotate-12 transition-transform" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">24時間受付</span>
                  <span className="text-lg font-bold">WEB予約</span>
                </div>
              </a>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a href="/concerns/bruxism" className="flex items-center gap-2 text-[#9B89B3] bg-white hover:bg-gray-100 px-6 py-3 rounded-full transition-colors font-bold">
                関連ページ：歯ぎしり・食いしばり
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
