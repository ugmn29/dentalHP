"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PageImage } from '@/components/PageImage';

const WisdomToothPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B7355]/90 to-[#A0826D]/80 z-10"></div>
        <PageImage
          path="/wisdom"
          imageId="hero-bg"
          alt="親知らずの抜歯"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              親知らず<span className="text-[0.75em]">の</span>抜歯
            </h1>
            <p className="text-lg md:text-xl mb-4 leading-relaxed">
              不安<span className="text-[0.75em]">を</span>安心<span className="text-[0.75em]">に</span>変<span className="text-[0.75em]">える</span>、<br className="md:hidden" />
              丁寧<span className="text-[0.75em]">な</span>説明<span className="text-[0.75em]">と</span>精密<span className="text-[0.75em]">な</span>診断
            </p>
            <p className="text-sm md:text-base opacity-90">
              エビデンス<span className="text-[0.75em]">に</span>基<span className="text-[0.75em]">づいた</span>正確<span className="text-[0.75em]">な</span>情報提供<span className="text-[0.75em]">で</span>、納得<span className="text-[0.75em]">して</span>治療<span className="text-[0.75em]">を</span>受<span className="text-[0.75em]">けて</span>いただけます
            </p>
          </div>
        </div>
      </section>

      {/* Anxiety Relief Section */}
      <section className="py-6 md:py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#8B7355] font-bold tracking-[0.2em] text-sm block mb-2">ANXIETY RELIEF</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif mb-6">
              親知らず<span className="text-[0.75em]">の</span>抜歯、<br className="md:hidden" />
              <span className="text-[0.75em]">こんな</span><span className="text-[#8B7355]">不安</span><span className="text-[0.75em]">ありませんか？</span>
            </h2>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#8B7355]/20 mb-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#8B7355] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">本当に抜く必要があるの？</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#8B7355] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">痛みへの不安</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#8B7355] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">腫れが心配</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#8B7355] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">神経損傷が怖い</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#8B7355] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">治療の流れが分からない</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#8B7355] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">費用がどのくらいかかるか不安</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#8B7355] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">治療期間や回復にかかる時間が心配</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-[#8B7355] font-bold">
              <span className="text-2xl">↓</span>
              <span className="text-lg">以下で詳しく解説していきます</span>
              <span className="text-2xl">↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* When Extraction is Needed */}
      <section className="py-6 md:py-6 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#8B7355] font-bold tracking-[0.2em] text-sm block mb-2">EXTRACTION NEEDED</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif mb-4">
              <span className="text-[#8B7355]">抜歯</span><span className="text-[0.75em]">が</span>必要<span className="text-[0.75em]">な</span>ケース
            </h2>
            <p className="text-gray-600">
              以下<span className="text-[0.75em]">の</span>ような症状<span className="text-[0.75em]">が</span>ある場合、抜歯<span className="text-[0.75em]">を</span>検討します
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {/* Case 1 */}
            <div className="border-b border-gray-200 pb-2">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-4">
                繰<span className="text-[0.75em]">り</span>返<span className="text-[0.75em]">す</span>炎症（智歯周囲炎）
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                親知らず周辺の<span className="font-bold bg-yellow-100">歯茎が腫れ、痛みや膿が出る</span>状態が繰り返される場合。放置すると、<span className="text-[#1B6B3D]">隣の歯や顎の骨にも影響を及ぼす</span>可能性があります。
              </p>
              <div className="bg-blue-50 border-l-4 border-[#8B7355] p-6 rounded-r-lg">
                <p className="text-sm font-semibold text-[#8B7355] mb-2">研究結果</p>
                <p className="text-gray-700 leading-relaxed">
                  研究により、智歯周囲炎の再発率は保存的治療で<span className="font-bold text-[#8B7355]">約60-70%</span>と報告されています。
                </p>
                <p className="text-xs text-gray-500 italic mt-2">Dodson TB, J Oral Maxillofac Surg 2012</p>
              </div>
            </div>

            {/* Case 2 */}
            <div className="border-b border-gray-200 pb-2">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-4">
                手前<span className="text-[0.75em]">の</span>歯<span className="text-[0.75em]">への</span>悪影響
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                親知らずが斜めに生えて、<span className="font-bold bg-yellow-100">隣の第二大臼歯を圧迫</span>したり、<span className="text-[#1B6B3D]">虫歯や歯周病の原因</span>になっている場合。第二大臼歯は噛み合わせに重要な歯です。
              </p>
              <div className="bg-blue-50 border-l-4 border-[#8B7355] p-6 rounded-r-lg">
                <p className="text-sm font-semibold text-[#8B7355] mb-2">研究結果</p>
                <p className="text-gray-700 leading-relaxed">
                  水平埋伏智歯による第二大臼歯の虫歯リスクは、正常萌出歯と比較して<span className="font-bold text-[#8B7355]">約2.2倍高い</span>ことが示されています。
                </p>
                <p className="text-xs text-gray-500 italic mt-2">Allen RT, J Am Dent Assoc 2009</p>
              </div>
            </div>

            {/* Case 3 */}
            <div className="border-b border-gray-200 pb-2">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-4">
                嚢胞<span className="text-[0.75em]">や</span>腫瘍<span className="text-[0.75em]">の</span>形成
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                埋伏した親知らずの周りに<span className="font-bold bg-yellow-100">嚢胞（液体の入った袋）</span>ができている場合。放置すると<span className="text-[#1B6B3D]">顎の骨を溶かし、顔の変形や骨折のリスク</span>が高まります。
              </p>
              <div className="bg-blue-50 border-l-4 border-[#8B7355] p-6 rounded-r-lg">
                <p className="text-sm font-semibold text-[#8B7355] mb-2">研究結果</p>
                <p className="text-gray-700 leading-relaxed">
                  埋伏智歯に伴う含歯性嚢胞の発生率は<span className="font-bold text-[#8B7355]">約2-5%</span>で、早期発見・早期治療が推奨されます。
                </p>
                <p className="text-xs text-gray-500 italic mt-2">Shear M, Oral Maxillofac Surg Clin North Am 2004</p>
              </div>
            </div>

            {/* Case 4 */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-4">
                矯正治療<span className="text-[0.75em]">のため</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                歯列矯正を行う際、親知らずが<span className="font-bold bg-yellow-100">他の歯を押して歯並びを悪化させる</span>可能性がある場合。<span className="text-[#1B6B3D]">矯正治療後の後戻り防止</span>のためにも抜歯を検討します。
              </p>
              <div className="bg-blue-50 border-l-4 border-[#8B7355] p-6 rounded-r-lg">
                <p className="text-sm font-semibold text-[#8B7355] mb-2">研究結果</p>
                <p className="text-gray-700 leading-relaxed">
                  矯正治療における予防的智歯抜歯の必要性は議論がありますが、スペース不足や後戻りリスクを考慮した<span className="font-bold text-[#8B7355]">個別判断が重要</span>です。
                </p>
                <p className="text-xs text-gray-500 italic mt-2">Harradine NWT, Br J Orthod 1998</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Extraction is NOT Needed */}
      <section className="py-6 md:py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#8B7355] font-bold tracking-[0.2em] text-sm block mb-2">NO EXTRACTION NEEDED</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif mb-4">
              抜歯<span className="text-[0.75em]">が</span><span className="text-[#8B7355]">必要<span className="text-[0.75em]">ない</span></span>ケース
            </h2>
            <p className="text-gray-600">
              すべて<span className="text-[0.75em]">の</span>親知らず<span className="text-[0.75em]">を</span>抜<span className="text-[0.75em]">く</span>必要<span className="text-[0.75em]">は</span>ありません
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto mb-12">
            {/* Case 1 */}
            <div className="border-b border-gray-200 pb-2">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-4">
                正常<span className="text-[0.75em]">に</span>生<span className="text-[0.75em]">えて</span>機能<span className="text-[0.75em]">している</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                まっすぐ生え、<span className="font-bold bg-yellow-100">上下でしっかり噛み合い、清掃もできている</span>場合は、<span className="text-[#1B6B3D]">貴重な咀嚼歯として残す</span>ことができます。
              </p>
            </div>

            {/* Case 2 */}
            <div className="border-b border-gray-200 pb-2">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-4">
                完全<span className="text-[0.75em]">に</span>埋<span className="text-[0.75em]">まって</span>問題<span className="text-[0.75em]">がない</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                骨の中に完全に埋まり、<span className="font-bold bg-yellow-100">嚢胞や炎症もなく、他の歯への影響もない</span>場合。<span className="text-[#1B6B3D]">定期的なレントゲン検査で経過観察</span>します。
              </p>
            </div>

            {/* Case 3 */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-4">
                将来的<span className="text-[0.75em]">な</span>歯<span className="text-[0.75em]">の</span>移植<span className="text-[0.75em]">に</span>利用
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                健康な親知らずは、<span className="font-bold bg-yellow-100">他の奥歯を失った際の移植に使える</span>可能性があります。<span className="text-[#1B6B3D]">天然歯の保存</span>という観点から有用です。
              </p>
            </div>
          </div>

          {/* Tooth Transplantation Detailed Explanation */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#8B7355]">
            <h3 className="text-2xl font-bold text-[#8B7355] mb-6 text-center">
              歯<span className="text-[0.75em]">の</span>移植<span className="text-[0.75em]">について</span>
            </h3>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                親知らずは、虫歯や歯周病で失った奥歯の場所に移植できる可能性があります。これを「歯牙移植」と呼び、天然歯を活かした治療法として注目されています。
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h4 className="font-bold text-blue-900 mb-3">歯牙移植のメリット</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>自分の歯なので、体に馴染みやすい</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>歯根膜（歯と骨をつなぐ組織）が残るため、自然な噛み心地が得られる</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>インプラントと比べて、生体親和性が高い</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>条件が合えば保険適用も可能</span>
                  </li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-bold text-yellow-900 mb-3">移植が可能な条件</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>親知らずが健康で、虫歯や歯周病がない</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>移植先の骨が十分にある</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>親知らずの形やサイズが移植先に適している</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>年齢が若いほど成功率が高い（歯根が完成していない方が有利）</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                将来的に移植の可能性がある場合、健康な親知らずを「予備の歯」として残しておく選択肢もあります。当院では、CT検査と総合的な診断に基づき、患者様一人ひとりに最適な治療計画をご提案します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complications Section */}
      <section className="py-6 md:py-6 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#8B7355] font-bold tracking-[0.2em] text-sm block mb-2">COMPLICATIONS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif mb-4">
              起<span className="text-[0.75em]">こりうる</span><span className="text-[#8B7355]">合併症</span><span className="text-[0.75em]">と</span>対策
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              正確<span className="text-[0.75em]">な</span>情報<span className="text-[0.75em]">を</span>お伝<span className="text-[0.75em]">えする</span>ため、<br className="md:hidden" />
              起<span className="text-[0.75em]">こりうる</span>リスク<span className="text-[0.75em]">と</span>対策<span className="text-[0.75em]">を</span>説明<span className="text-[0.75em]">します</span>
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {/* Complication 1 */}
            <div className="border-b border-gray-200 pb-2">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-2 md:mb-0">
                  神経損傷（下歯槽神経麻痺）
                </h3>
                <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">0.4～0.6%</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                下顎の親知らずの根が<span className="font-bold bg-yellow-100">神経に近い場合</span>、抜歯時に神経が傷つき、<span className="text-[#1B6B3D]">唇や舌のしびれ</span>が生じる可能性があります。
              </p>
              <div className="bg-blue-50 border-l-4 border-[#8B7355] p-6 rounded-r-lg">
                <p className="text-sm font-semibold text-[#8B7355] mb-2">対策</p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold bg-yellow-100">CT撮影で神経の位置を正確に把握</span>し、リスクが高い場合は<span className="text-[#1B6B3D]">歯冠分割など安全な術式を選択</span>。万一発生しても、多くは数週間～数ヶ月で改善します。
                </p>
                <p className="text-xs text-gray-500 italic mt-2">Renton T, Br J Oral Maxillofac Surg 2001</p>
              </div>
            </div>

            {/* Complication 2 */}
            <div className="border-b border-gray-200 pb-2">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-2 md:mb-0">
                  ドライソケット（抜歯窩治癒不全）
                </h3>
                <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">1～4%</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                抜歯後の<span className="font-bold bg-yellow-100">血餅（かさぶた）が剥がれ、骨が露出</span>して強い痛みが続く状態。特に<span className="text-[#1B6B3D]">下顎の埋伏歯で起こりやすい</span>です。
              </p>
              <div className="bg-blue-50 border-l-4 border-[#8B7355] p-6 rounded-r-lg">
                <p className="text-sm font-semibold text-[#8B7355] mb-2">対策</p>
                <p className="text-gray-700 leading-relaxed">
                  術後の<span className="font-bold bg-yellow-100">うがいや喫煙を控えるよう指導</span>。発生した場合は、<span className="text-[#1B6B3D]">抜歯窩の洗浄と鎮痛剤処方で対応</span>。通常1～2週間で改善します。
                </p>
                <p className="text-xs text-gray-500 italic mt-2">Blum IR, Br Dent J 2002</p>
              </div>
            </div>

            {/* Complication 3 */}
            <div className="border-b border-gray-200 pb-2">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-2 md:mb-0">
                  腫<span className="text-[0.75em]">れや</span>痛<span className="text-[0.75em]">み</span>
                </h3>
                <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">ほぼすべてのケース</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                抜歯は外科処置のため、<span className="font-bold bg-yellow-100">術後2～3日は腫れや痛みが出る</span>のが一般的です。<span className="text-[#1B6B3D]">埋伏が深いほど症状は強くなります</span>。
              </p>
              <div className="bg-blue-50 border-l-4 border-[#8B7355] p-6 rounded-r-lg">
                <p className="text-sm font-semibold text-[#8B7355] mb-2">対策</p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold bg-yellow-100">丁寧な術式で組織への侵襲を最小化</span>。術後は<span className="text-[#1B6B3D]">適切な鎮痛剤と抗生剤を処方し、冷却指導も実施</span>。多くは3～5日でピークを越え、1週間程度で落ち着きます。
                </p>
                <p className="text-xs text-gray-500 italic mt-2">Bui CH, J Oral Maxillofac Surg 2003</p>
              </div>
            </div>

            {/* Complication 4 */}
            <div className="border-b border-gray-200 pb-2">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-2 md:mb-0">
                  上顎洞穿孔（じょうがくどうせんこう）
                </h3>
                <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">0.5～3%</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                上顎の親知らずの根が<span className="font-bold bg-yellow-100">上顎洞（鼻の奥の空洞）に近い</span>場合、<span className="text-[#1B6B3D]">抜歯時に穴が開く</span>可能性があります。
              </p>
              <div className="bg-blue-50 border-l-4 border-[#8B7355] p-6 rounded-r-lg">
                <p className="text-sm font-semibold text-[#8B7355] mb-2">対策</p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold bg-yellow-100">CTで事前に上顎洞との距離を確認</span>。小さな穿孔は自然閉鎖することが多く、<span className="text-[#1B6B3D]">必要に応じて縫合や投薬で対応</span>します。
                </p>
                <p className="text-xs text-gray-500 italic mt-2">Rothamel D, Oral Surg Oral Med Oral Pathol 2007</p>
              </div>
            </div>

            {/* Complication 5 */}
            <div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-2 md:mb-0">
                  出血
                </h3>
                <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">1～2%（持続的な出血）</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                抜歯当日は<span className="font-bold bg-yellow-100">じわじわとした出血が続く</span>のが普通です。まれに<span className="text-[#1B6B3D]">血が止まりにくい場合</span>があります。
              </p>
              <div className="bg-blue-50 border-l-4 border-[#8B7355] p-6 rounded-r-lg">
                <p className="text-sm font-semibold text-[#8B7355] mb-2">対策</p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold bg-yellow-100">術前に服薬歴（抗凝固薬など）を確認</span>。止血が不十分な場合は、<span className="text-[#1B6B3D]">圧迫止血や止血剤の追加、必要に応じて縫合で対応</span>します。
                </p>
                <p className="text-xs text-gray-500 italic mt-2">Lockhart PB, J Am Dent Assoc 2003</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg border-2 border-blue-200 max-w-4xl mx-auto">
            <p className="text-gray-800 leading-relaxed text-center">
              これらの合併症は、適切な術前診断と丁寧な施術により、<br className="md:hidden" />
              リスクを大幅に軽減できます。<br />
              当院では、すべての患者様に十分な説明を行い、<br className="md:hidden" />
              納得いただいた上で治療を進めます。
            </p>
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-6 md:py-6 bg-[#FAF5F0]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#8B7355] font-bold tracking-[0.2em] text-sm block mb-2">COST</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif mb-4">
              <span className="text-[#8B7355]">費用</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              親知らず<span className="text-[0.75em]">の</span>抜歯<span className="text-[0.75em]">は</span>保険診療<span className="text-[0.75em]">で</span>行<span className="text-[0.75em]">えます</span>
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border-t-4 border-[#8B7355]">
            <div className="space-y-8">
              {/* 保険診療 */}
              <div>
                <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 font-serif flex items-center gap-3">
                  <span className="bg-[#8B7355] text-white px-4 py-2 rounded-lg text-lg">保険診療</span>
                </h3>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-[#5A4D41]">通常の抜歯（まっすぐ生えている親知らず）</h4>
                      <div className="bg-[#FAF5F0] px-4 py-2 rounded-lg">
                        <span className="text-[#8B7355] font-bold text-xl">約1,000〜2,000円</span>
                        <span className="text-sm text-gray-600 ml-2">（3割負担の場合）</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      まっすぐ生えていて、特別な処置を必要としない親知らずの抜歯費用です。
                    </p>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-[#5A4D41]">難抜歯（埋まっている・横向きの親知らず）</h4>
                      <div className="bg-[#FAF5F0] px-4 py-2 rounded-lg">
                        <span className="text-[#8B7355] font-bold text-xl">約3,000〜5,000円</span>
                        <span className="text-sm text-gray-600 ml-2">（3割負担の場合）</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      歯茎を切開したり、歯を分割して取り出す必要がある場合の費用です。CT撮影や投薬費用を含みます。
                    </p>
                  </div>

                  <div className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-[#5A4D41]">CT撮影（精密検査が必要な場合）</h4>
                      <div className="bg-[#FAF5F0] px-4 py-2 rounded-lg">
                        <span className="text-[#8B7355] font-bold text-xl">約3,500円</span>
                        <span className="text-sm text-gray-600 ml-2">（3割負担の場合）</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      神経や血管の位置を正確に把握するためのCT撮影費用です。難症例の場合に実施します。
                    </p>
                  </div>
                </div>
              </div>

              {/* 注意事項 */}
              <div className="bg-blue-50 border-l-4 border-[#8B7355] p-6 rounded-r-lg">
                <h4 className="text-sm font-semibold text-[#8B7355] mb-3">費用についての補足</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B7355] mt-1">●</span>
                    <span>上記は目安の金額です。抜歯の難易度や必要な処置により変動します。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B7355] mt-1">●</span>
                    <span>初診料・再診料、投薬費用（鎮痛剤・抗生剤）も別途かかります。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B7355] mt-1">●</span>
                    <span>詳しい費用は、診察・検査後にご説明いたします。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B7355] mt-1">●</span>
                    <span>保険証を必ずお持ちください。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Flow */}
      <section className="py-6 md:py-6 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">治療の流れ</h3>
              <div className="w-16 h-0.5 bg-[#8B7355] mx-auto mt-4"></div>
            </div>
            <div className="space-y-12">
              {[
                { num: "01", title: "初診・カウンセリング", desc: "現在の症状や不安なことをお聞きし、お口の中を確認します。治療への不安や疑問点など、何でもお話しください。", imageId: "step1" },
                { num: "02", title: "CT撮影・精密検査", desc: "3次元CT画像で、親知らずの位置、神経や血管との距離、骨の状態を正確に把握します。この情報が安全な抜歯の鍵となります。", imageId: "step2" },
                { num: "03", title: "診断・治療計画の説明", desc: "CT画像を見ながら、抜歯の必要性、リスク、術式について詳しく説明します。抜歯しない選択肢も含め、一緒に最適な方法を決めていきます。", imageId: "step3" },
                { num: "04", title: "抜歯処置", desc: "表面麻酔後、痛みの少ない麻酔を実施。CTで確認した計画に基づき、丁寧かつ迅速に抜歯を行います。処置時間は通常20～40分程度です。", imageId: "step4" },
                { num: "05", title: "術後の説明・投薬", desc: "抜歯後の注意事項（うがい、食事、運動など）を詳しく説明し、鎮痛剤と抗生剤を処方します。緊急時の連絡先もお伝えします。", imageId: "step5" },
                { num: "06", title: "経過観察・抜糸", desc: "1週間後に来院いただき、傷口の治癒状態を確認し、抜糸を行います（縫合した場合）。問題なければ、これで治療完了です。", imageId: "step6" }
              ].map((step, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2 mb-6 border-b border-[#8B7355]/30 pb-3">
                    <div className="relative">
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#8B7355]/30 rotate-45"></div>
                      <span className="text-3xl md:text-4xl font-light text-[#8B7355] tracking-wider relative z-10">{step.num}</span>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-[#5A4D41] font-serif">{step.title}</h4>
                  </div>
                  <div className="mb-6 rounded-2xl overflow-hidden shadow-md">
                    <PageImage path="/wisdom" imageId={step.imageId} alt={step.title} className="w-full h-56 md:h-72 object-cover" />
                  </div>
                  <p className="text-[#5A4D41] leading-loose text-sm md:text-base">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Features */}
      <section className="pt-2 md:pt-2 pb-2 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#8B7355] font-bold tracking-[0.2em] text-sm block mb-2">OUR FEATURES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif mb-4">
              当院<span className="text-[0.75em]">の</span><span className="text-[#8B7355]">特徴</span>
            </h2>
            <p className="text-gray-600">
              安全性<span className="text-[0.75em]">と</span>快適性<span className="text-[0.75em]">を</span>追求<span className="text-[0.75em]">した</span>治療体制
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔬",
                title: "CTによる精密診断",
                description: "<span class='font-bold bg-yellow-100'>3次元CT画像で神経や血管の位置をミリ単位で把握</span>。<span class='text-[#395b45] font-bold'>安全な抜歯計画を立て、リスクを最小化</span>します。"
              },
              {
                icon: "💉",
                title: "痛みへの配慮",
                description: "<span class='font-bold bg-yellow-100'>表面麻酔、極細針の使用、麻酔液の温度管理</span>など、<span class='text-[#395b45] font-bold'>麻酔から痛みを軽減する工夫</span>を徹底しています。"
              },
              {
                icon: "👨‍⚕️",
                title: "経験豊富な医師による安全な抜歯",
                description: "多くの抜歯経験を持つ医師が、<span class='text-[#395b45] font-bold'>丁寧かつ迅速に処置</span>。<span class='text-[#395b45] font-bold'>難症例にも対応できる技術と経験</span>があります。"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100 hover:border-[#8B7355]"
              >
                <div className="text-5xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center" dangerouslySetInnerHTML={{ __html: feature.title }}></h3>
                <p className="text-gray-700 leading-relaxed text-center" dangerouslySetInnerHTML={{ __html: feature.description }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-8 pb-2 md:pb-2 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#8B7355] font-bold tracking-[0.2em] text-sm block mb-2">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif mb-4">
              よくある<span className="text-[#8B7355]">質問</span>
            </h2>
            <p className="text-gray-600">
              患者様<span className="text-[0.75em]">から</span>多<span className="text-[0.75em]">く</span>寄<span className="text-[0.75em]">せられる</span>質問<span className="text-[0.75em]">に</span>、<br className="md:hidden" />
              エビデンス<span className="text-[0.75em]">に</span>基<span className="text-[0.75em]">づいて</span>お答<span className="text-[0.75em]">えします</span>
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "親知らずは全部抜いた方が良いですか？",
                answer: "いいえ、すべてを抜く必要はありません。正常に機能している場合や、将来的な歯の移植に使える可能性がある場合は、残すことも選択肢です。症状のない無症候性埋伏智歯の予防的抜歯については、賛否両論があります。",
                citation: "Cochrane Review 2020では、無症候性智歯の予防的抜歯の明確なエビデンスは不十分としています"
              },
              {
                question: "抜歯は痛いですか？",
                answer: "麻酔が効いている間は痛みを感じません。術後は2～3日痛みがありますが、処方された鎮痛剤でコントロール可能です。研究によれば、適切な鎮痛剤使用により、約80%の患者が術後疼痛を許容範囲内と評価しています。",
                citation: "Bouloux GF, J Oral Maxillofac Surg 2007"
              },
              {
                question: "抜歯後、何日くらいで普通の生活に戻れますか？",
                answer: "個人差はありますが、軽い作業なら翌日から可能です。腫れのピークは術後2～3日で、1週間程度でかなり落ち着きます。抜糸が終われば（7～10日後）、ほぼ通常通りの生活が可能です。",
                citation: "Colorado-Bonnin M, Med Oral Patol Oral Cir Bucal 2006"
              },
              {
                question: "上と下では、どちらが抜くのが大変ですか？",
                answer: "一般的に下顎の親知らずの方が、骨が硬く、神経が近いため、抜歯に時間がかかり、術後の腫れも強い傾向があります。ただし、CTによる事前診断で難易度を正確に評価できます。",
                citation: "Akadiri OA, Br J Oral Maxillofac Surg 2009"
              },
              {
                question: "抜歯後、食事はいつからできますか？",
                answer: "麻酔が切れてから（2～3時間後）、柔らかい食事なら可能です。抜歯した側での咀嚼は避け、反対側で噛むようにしてください。熱いもの、硬いもの、刺激物は2～3日避けましょう。",
                citation: "術後の食事制限は創傷治癒を促進し、合併症リスクを低減します（Osunde OD, J Maxillofac Oral Surg 2011）"
              },
              {
                question: "抜歯後の腫れを最小限にする方法は？",
                answer: "術後24時間は冷却が効果的です（氷嚢を頬に当てる）。また、処方された薬を指示通り服用し、当日は安静に過ごし、飲酒や激しい運動を控えることが重要です。研究では、術後冷却により腫脹が約30%軽減されると報告されています。",
                citation: "van der Westhuijzen AJ, Int J Oral Maxillofac Surg 1987"
              },
              {
                question: "親知らずを抜かないと、歯並びが悪くなりますか？",
                answer: "親知らずが前方の歯を圧迫して歯並びに影響する可能性は指摘されていますが、科学的な証拠は限定的です。歯並びの悪化は、親知らず以外にも多くの要因が関わります。ただし、矯正治療中や治療後の場合は、歯科医師と相談が必要です。",
                citation: "Karasawa LH, Angle Orthod 2013では、智歯と前歯部叢生の直接的因果関係は証明されていないとしています"
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="px-6 py-4 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4" dangerouslySetInnerHTML={{ __html: faq.question }}></h3>
                </div>
                <div className="px-6 py-4">
                  <p className="text-gray-700 leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                  <p className="text-xs text-gray-500 italic border-l-2 border-gray-300 pl-3">{faq.citation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 md:py-6 px-4 bg-gradient-to-r from-[#8B7355] to-[#A0826D]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div>
            <span className="text-white/90 font-bold tracking-[0.2em] text-sm block mb-3">CONTACT US</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              親知らず<span className="text-[0.75em]">でお</span>悩<span className="text-[0.75em]">みの</span>方<span className="text-[0.75em]">は</span>、<br className="md:hidden" />
              まずご相談<span className="text-[0.75em]">ください</span>
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              CT検査<span className="text-[0.75em]">と</span>丁寧<span className="text-[0.75em]">な</span>説明<span className="text-[0.75em]">で</span>、<br className="md:hidden" />
              不安<span className="text-[0.75em]">を</span>安心<span className="text-[0.75em]">に</span>変<span className="text-[0.75em]">えます</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-[#8B7355] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                ご予約・お問い合わせ
              </Link>
              <Link
                href="/treatments"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#8B7355] transition-colors duration-300"
              >
                その他の診療内容
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WisdomToothPage;
