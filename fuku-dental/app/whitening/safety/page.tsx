import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { ArrowRight, CheckCircle, Shield, X, AlertCircle, Info, Home, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ホワイトニングの安全性・副作用｜知覚過敏などのリスクと対策｜F歯科・矯正歯科',
  description: 'ホワイトニングは安全？知覚過敏などの副作用やリスクについて詳しく解説。歯科医師が安全性を最優先に施術する理由と、副作用を最小限に抑える方法をご紹介します。',
  keywords: 'ホワイトニング,安全性,副作用,知覚過敏,リスク,痛い,しみる,危険性',
  openGraph: {
    title: 'ホワイトニングの安全性・副作用｜知覚過敏などのリスクと対策｜F歯科・矯正歯科',
    description: 'ホワイトニングの安全性と副作用について、歯科医師が詳しく解説します。',
    type: 'website',
  },
};

export default function WhiteningSafetyPage() {
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
            <a href="/whitening" className="hover:text-[#C5A572]">ホワイトニング</a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[#C5A572]">安全性・副作用</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-6 md:py-6 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
              ホワイトニングの安全性・副作用
            </h1>
            <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
              知覚過敏などのリスクと対策
            </p>
            <p className="text-lg text-[#8D8070] leading-relaxed">
              副作用について正直にお伝えします。<br />
              安全性を最優先に、リスクを最小限に抑える方法を解説。
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
              結論
            </h2>
            <div className="space-y-4 text-[#5A4D41] leading-loose max-w-3xl mx-auto">
              <p>
                <span className="font-bold bg-yellow-100">歯科医師の管理下で適切に行われるホワイトニングは、基本的に安全</span>です。
                世界中で何十年も行われており、数多くの研究で安全性が確認されています。
              </p>
              <p>
                ただし、<span className="text-[#2E8B57] font-bold">一時的な副作用（知覚過敏など）が起こる可能性</span>はあります。
                当院では安全性を最優先に、リスクを最小限に抑える対策を行っています。
              </p>
              <p className="font-bold bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                <span className="text-[#C5A572]">重要：</span>
                海外製の違法なホワイトニング剤や、エステサロンでの無資格者によるホワイトニングは安全性が保証されていません。
                必ず歯科医院で、歯科医師の管理下で行うことをおすすめします。
              </p>
            </div>
          </div>

          {/* 安全性のポイント */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">安全性のポイント</h3>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-[#C5A572]/10">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4 text-[#2E8B57]" />
                  <h4 className="font-bold text-[#5A4D41] mb-2">厚生労働省認可</h4>
                  <p className="text-sm text-[#8D8070]">安全性が確認された薬剤のみ使用</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-[#C5A572]/10">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4 text-[#2E8B57]" />
                  <h4 className="font-bold text-[#5A4D41] mb-2">豊富な実績</h4>
                  <p className="text-sm text-[#8D8070]">世界中で数十年の使用実績</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-[#C5A572]/10">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4 text-[#2E8B57]" />
                  <h4 className="font-bold text-[#5A4D41] mb-2">専門家による施術</h4>
                  <p className="text-sm text-[#8D8070]">歯科医師・衛生士が管理</p>
                </div>
              </div>
            </div>
          </div>

          {/* 起こりうる副作用 */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">起こりうる副作用とその対策</h3>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>

            <div className="space-y-8">
              {/* 副作用1: 知覚過敏 */}
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  1. 知覚過敏（歯がしみる）
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p className="bg-yellow-100 p-4 rounded-xl">
                    <span className="font-bold">最もよくある副作用</span>
                  </p>
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-[#C5A572]/10">
                    <h5 className="font-bold text-[#5A4D41] mb-3">症状</h5>
                    <ul className="space-y-2 text-[#5A4D41]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>冷たいものや熱いものがしみる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>歯ブラシが当たると痛い</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>空気を吸うとしみる</span>
                      </li>
                    </ul>
                    <div className="mt-4 bg-yellow-100 p-3 rounded-xl">
                      <p className="text-sm text-[#5A4D41]">
                        <strong>発生率：</strong>オフィスホワイトニングで約30〜50%、ホームホワイトニングで約10〜20%
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-[#C5A572]/10">
                    <h5 className="font-bold text-[#2E8B57] mb-3">対策</h5>
                    <ul className="space-y-2 text-[#5A4D41]">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                        <span><strong className="bg-yellow-100">24〜48時間で自然に治まる</strong>（ほとんどの場合）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                        <span>知覚過敏用歯磨き粉の使用</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                        <span>フッ素塗布（当院では施術後に実施）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                        <span>薬剤の濃度を下げる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                        <span>施術時間を短くする</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 副作用2: 歯茎の刺激 */}
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  2. 歯茎の刺激・白化
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p className="bg-yellow-100 p-4 rounded-xl">
                    <span className="font-bold">オフィスホワイトニングで稀に発生</span>
                  </p>
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-[#C5A572]/10">
                    <h5 className="font-bold text-[#5A4D41] mb-3">症状</h5>
                    <ul className="space-y-2 text-[#5A4D41]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>歯茎が一時的に白くなる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>歯茎がヒリヒリする</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>歯茎が軽く腫れる</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-[#C5A572]/10">
                    <h5 className="font-bold text-[#2E8B57] mb-3">対策</h5>
                    <ul className="space-y-2 text-[#5A4D41]">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                        <span><strong className="bg-yellow-100">数時間〜1日で自然に治まる</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                        <span>保護ジェルで歯茎をカバー（当院では必ず実施）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                        <span>薬剤が歯茎に付着しないよう注意</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 副作用3: 効果のムラ */}
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  3. 効果のムラ（白浮き）
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p className="bg-yellow-100 p-4 rounded-xl">
                    <span className="font-bold">一時的な現象</span>
                  </p>
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-[#C5A572]/10">
                    <h5 className="font-bold text-[#5A4D41] mb-3">症状</h5>
                    <ul className="space-y-2 text-[#5A4D41]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>歯の一部だけが白くなる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>白い斑点が現れる</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-[#C5A572]/10">
                    <h5 className="font-bold text-[#2E8B57] mb-3">対策</h5>
                    <ul className="space-y-2 text-[#5A4D41]">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                        <span><strong className="bg-yellow-100">数日〜2週間で自然に馴染む</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                        <span>気になる場合は追加施術で調整</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white p-6 rounded-2xl shadow-md border border-[#C5A572]/10">
              <h4 className="font-bold text-lg mb-4 text-[#5A4D41] flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#2E8B57]" />
                当院の安全対策
              </h4>
              <ul className="space-y-2 text-[#5A4D41]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                  <span>事前のカウンセリングと検査で、リスクのある方は施術をお断りします</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                  <span>知覚過敏を軽減する薬剤を使用</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                  <span>施術後にフッ素塗布を必ず実施</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                  <span>歯茎を保護ジェルでしっかりカバー</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                  <span>施術後のアフターケア指導を徹底</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ホワイトニングができない方・注意が必要な方 */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">ホワイトニングができない方・注意が必要な方</h3>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-[#C5A572]/10 mb-8">
              <h4 className="text-xl font-bold mb-6 text-[#5A4D41] flex items-center gap-2">
                <X className="w-6 h-6 text-[#C5A572]" />
                ホワイトニングができない方
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "妊娠中・授乳中の方",
                    reason: "胎児や乳児への影響が完全には解明されていないため、安全のため避けるべきです。",
                  },
                  {
                    title: "18歳未満の方",
                    reason: "歯の成長が完了していないため、ホワイトニングは推奨されません。",
                  },
                  {
                    title: "重度の知覚過敏がある方",
                    reason: "ホワイトニングで症状が悪化する可能性があります。",
                  },
                  {
                    title: "エナメル質形成不全の方",
                    reason: "歯のエナメル質が正常に形成されていない場合、効果が出にくく、副作用のリスクが高まります。",
                  },
                  {
                    title: "無カタラーゼ症の方",
                    reason: "過酸化水素を分解する酵素がないため、ホワイトニングは禁忌です。",
                  },
                  {
                    title: "テトラサイクリン歯の方",
                    reason: "抗生物質による着色は、ホワイトニングで改善しにくい場合があります。（程度による）",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-[#FDFBF7] p-4 rounded-xl">
                    <h5 className="font-bold text-[#5A4D41] mb-2">{item.title}</h5>
                    <p className="text-sm text-[#8D8070] leading-relaxed">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-[#C5A572]/10">
              <h4 className="text-xl font-bold mb-6 text-[#5A4D41] flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-[#C5A572]" />
                注意が必要な方（要相談）
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "虫歯や歯周病がある方",
                    note: "先に治療を行ってからホワイトニングします。",
                  },
                  {
                    title: "詰め物・被せ物が多い方",
                    note: "人工物は白くならないため、色の調整が必要な場合があります。",
                  },
                  {
                    title: "神経のない歯がある方",
                    note: "神経のない歯は通常のホワイトニングでは白くなりません。別の方法（ウォーキングブリーチ）が必要です。",
                  },
                  {
                    title: "知覚過敏がある方",
                    note: "症状が悪化する可能性があります。低濃度の薬剤を使用するなど対策が必要です。",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-[#FDFBF7] p-4 rounded-xl">
                    <h5 className="font-bold text-[#5A4D41] mb-2">{item.title}</h5>
                    <p className="text-sm text-[#8D8070] leading-relaxed">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 安全なホワイトニングのために */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">安全なホワイトニングのために</h3>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-[#C5A572]/10">
                <h4 className="text-xl font-bold mb-4 text-[#5A4D41]">歯科医院で行う</h4>
                <p className="text-[#5A4D41] leading-relaxed mb-4">
                  エステサロンや自宅での市販品ではなく、<span className="font-bold bg-yellow-100">必ず歯科医院で、歯科医師の管理下</span>で行いましょう。
                </p>
                <ul className="space-y-2 text-sm text-[#5A4D41]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>適切な濃度の薬剤を使用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>歯や歯茎の状態を事前に確認</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>トラブル時の迅速な対応</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-[#C5A572]/10">
                <h4 className="text-xl font-bold mb-4 text-[#5A4D41]">事前カウンセリングを受ける</h4>
                <p className="text-[#5A4D41] leading-relaxed mb-4">
                  歯の状態、体質、生活習慣などを確認し、<span className="font-bold bg-yellow-100">あなたに最適で安全な方法</span>をご提案します。
                </p>
                <ul className="space-y-2 text-sm text-[#5A4D41]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>リスクの有無を確認</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>疑問や不安を解消</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>期待できる効果を明確化</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-[#C5A572]/10">
                <h4 className="text-xl font-bold mb-4 text-[#5A4D41]">使用方法を守る</h4>
                <p className="text-[#5A4D41] leading-relaxed mb-4">
                  ホームホワイトニングの場合、<span className="font-bold bg-yellow-100">指示された使用時間・頻度</span>を必ず守りましょう。
                </p>
                <ul className="space-y-2 text-sm text-[#5A4D41]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>長時間の使用は副作用のリスク増</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>自己判断で濃度を上げない</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>痛みがあれば中断して相談</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-[#C5A572]/10">
                <h4 className="text-xl font-bold mb-4 text-[#5A4D41]">定期的なメンテナンス</h4>
                <p className="text-[#5A4D41] leading-relaxed mb-4">
                  定期的に歯科医院でチェックを受けることで、<span className="font-bold bg-yellow-100">問題を早期発見</span>できます。
                </p>
                <ul className="space-y-2 text-sm text-[#5A4D41]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>歯や歯茎の状態をチェック</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>効果的なタッチアップのタイミング提案</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>プロフェッショナルクリーニングで白さ維持</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 md:py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">よくある質問</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>

            <div className="space-y-6">
              {/* Q1 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">ホワイトニングで歯が溶けたり、弱くなったりしませんか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> いいえ、適切に行われるホワイトニングで歯が溶けたり弱くなることはありません。多くの研究で、ホワイトニングが歯のエナメル質や象牙質を損傷しないことが確認されています。
                  </p>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    ただし、過度な使用や不適切な方法は避けるべきです。歯科医師の指示に従い、適切な頻度・方法で行いましょう。
                  </p>
                </div>
              </div>

              {/* Q2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">知覚過敏はどれくらいで治まりますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> ほとんどの場合、24〜48時間以内に自然に治まります。長くても1週間程度です。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span>知覚過敏用歯磨き粉の使用</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span>フッ素塗布で症状を軽減</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    1週間以上続く場合は、すぐに歯科医院にご相談ください。
                  </p>
                </div>
              </div>

              {/* Q3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">市販のホワイトニング剤は安全ですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 日本で販売されている市販品は、薬剤の濃度が低く設定されているため、比較的安全です。ただし、効果も限定的です。
                  </p>
                  <p className="mb-3">
                    一方、海外製品の中には日本の基準を満たさない高濃度のものもあり、自己判断での使用は危険です。
                  </p>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    確実な効果と安全性を求めるなら、<strong>歯科医院でのホワイトニング</strong>をおすすめします。
                  </p>
                </div>
              </div>

              {/* Q4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">エステサロンのホワイトニングは安全ですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> エステサロンでのホワイトニングは、歯科医師法により厳しく制限されています。無資格者が高濃度の薬剤を使用すると違法であり、トラブルのリスクも高まります。
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-sm text-[#5A4D41]">
                      安全性と効果を考えると、<strong>必ず歯科医院で受けること</strong>をおすすめします。
                    </p>
                  </div>
                </div>
              </div>

              {/* Q5 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">ホワイトニングで歯がもろくなりませんか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 適切に行われるホワイトニングで歯がもろくなることはありません。ホワイトニング剤は歯の表面のエナメル質を通過して内部の着色物質を分解しますが、歯の構造自体には影響を与えません。
                  </p>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    世界中の研究でこの安全性が確認されています。ご安心ください。
                  </p>
                </div>
              </div>

              {/* Q6 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q6</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">何回までホワイトニングできますか？回数制限はありますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 明確な回数制限はありませんが、過度なホワイトニングは知覚過敏のリスクを高めます。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span><strong>オフィスホワイトニング：</strong>年に2〜4回</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span><strong>ホームホワイトニング：</strong>月に1〜2回のタッチアップ</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    歯科医師と相談しながら、<strong>適切な頻度で行う</strong>ことが大切です。
                  </p>
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

              <a href="/whitening/types" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">ホワイトニングの種類</h3>
                <p className="text-[#8D8070] mb-4">
                  3つの方法を徹底比較
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
              安全性を最優先に<br />
              あなたに最適なホワイトニングを
            </h2>
            <p className="text-xl mb-8 text-white/90">
              無料カウンセリングで、リスクや不安を解消してから施術できます
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-[#C5A572] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                無料相談を予約する
                <ArrowRight className="w-6 h-6 ml-2" />
              </a>
              <a
                href="tel:0312345678"
                className="inline-flex items-center justify-center bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors border-2 border-white"
              >
                電話で相談する
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
