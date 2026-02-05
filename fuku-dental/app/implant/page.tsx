'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { ImplantCTA } from '@/components/implant/ImplantCTA';
import { ProblemGrid } from '@/components/implant/ProblemGrid';
import { TreatmentSteps } from '@/components/implant/TreatmentSteps';
import { ReasonCard } from '@/components/implant/ReasonCard';
import {
  ChevronRight,
  Monitor,
  Award,
  UserCheck,
  Heart,
  ShieldCheck,
  Wrench,
  ArrowRight,
  Phone,
  Calendar,
} from 'lucide-react';

/* ─── Hero Carousel ─── */
const heroSlides = [
  {
    title: '失った歯を、\nもう一度取り戻す。',
    subtitle: '第2の永久歯「インプラント」',
    description: '天然歯のようにしっかり噛める喜びを、あなたに。',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1600',
  },
  {
    title: '精密な診断で、\n安全な治療を。',
    subtitle: 'CT・サージカルガイド完備',
    description: '3次元データに基づく正確な診断と手術計画で、安心の治療を実現します。',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1600',
  },
  {
    title: '痛みに配慮した\nやさしい治療',
    subtitle: '静脈内鎮静法に対応',
    description: '眠っているような状態で手術を受けられる、リラックスできるインプラント治療。',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1600',
  },
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-[#1e3327]">
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${s.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3327]/85 via-[#1e3327]/60 to-transparent" />
        </div>
      ))}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl text-white">
          <p className="text-sm md:text-base text-[#C5A572] font-semibold tracking-wider mb-3">
            {slide.subtitle}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 whitespace-pre-line">
            {slide.title}
          </h1>
          <p className="text-base md:text-lg text-white/80 mb-8">{slide.description}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#FF9F43] text-white rounded-full font-bold hover:bg-[#e8903c] transition shadow-lg"
            >
              <Calendar size={18} />
              無料カウンセリング予約
            </a>
            <a
              href="tel:03-1234-5678"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/15 backdrop-blur-sm text-white rounded-full font-bold hover:bg-white/25 transition border border-white/30"
            >
              <Phone size={18} />
              03-1234-5678
            </a>
          </div>
        </div>
      </div>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/* ─── About Implants ─── */
function AboutSection() {
  return (
    <section className="py-16 px-4 bg-[#FDFBF7]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2d4835] mb-3">
          インプラントとは？
        </h2>
        <p className="text-center text-gray-500 mb-10 text-sm max-w-2xl mx-auto">
          歯を失った部分の顎の骨にチタン製の人工歯根を埋め込み、その上に人工の歯を装着する治療法です。
        </p>

        {/* 3-Part Structure */}
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 mb-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600"
                alt="インプラントの構造"
                className="rounded-xl w-full"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#395b45] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-[#2d4835]">インプラント体（人工歯根）</h4>
                  <p className="text-sm text-gray-600">顎の骨に埋め込むチタン製のネジ。天然歯の根の役割を果たします。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#395b45] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-[#2d4835]">アバットメント（土台）</h4>
                  <p className="text-sm text-gray-600">インプラント体と人工歯を連結する部品です。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#395b45] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-[#2d4835]">上部構造（人工歯）</h4>
                  <p className="text-sm text-gray-600">セラミック等で作られた見た目も自然な人工の歯です。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Comparison */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: 'インプラント',
              points: ['天然歯のように噛める', '見た目が自然', '隣の歯を削らない'],
              highlight: true,
            },
            {
              title: '入れ歯',
              points: ['取り外しが必要', '違和感がある場合が多い', '保険適用あり'],
              highlight: false,
            },
            {
              title: 'ブリッジ',
              points: ['隣の歯を削る必要がある', '固定式で安定感あり', '保険適用あり'],
              highlight: false,
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`rounded-xl p-5 border ${
                item.highlight
                  ? 'border-[#395b45] bg-[#395b45]/5'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <h4
                className={`font-bold mb-3 text-center ${
                  item.highlight ? 'text-[#395b45]' : 'text-[#5A4D41]'
                }`}
              >
                {item.title}
              </h4>
              <ul className="space-y-2">
                {item.points.map((p, j) => (
                  <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      item.highlight ? 'bg-[#395b45]' : 'bg-gray-300'
                    }`} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            href="/implant/comparison"
            className="inline-flex items-center gap-1 text-[#395b45] font-semibold text-sm hover:underline"
          >
            詳しい比較を見る <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Treatment Types ─── */
function TreatmentTypes() {
  const types = [
    {
      title: '1本のインプラント',
      description: '1本の歯を失った場合。隣の歯を削らずに、失った歯だけを補います。',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=400',
      href: '/implant/number-position',
    },
    {
      title: '複数本のインプラント',
      description: '複数の歯を失った場合。インプラントを支えにブリッジを固定します。',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400',
      href: '/implant/number-position',
    },
    {
      title: '全顎インプラント',
      description: '多くの歯を失った場合。All-on-4など、少ないインプラントで全体を支えます。',
      image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=400',
      href: '/implant/overdenture',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2d4835] mb-3">
          治療法のご紹介
        </h2>
        <p className="text-center text-gray-500 mb-10 text-sm">
          失った歯の本数や部位に合わせて、最適な方法をご提案します。
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {types.map((t, i) => (
            <Link
              key={i}
              href={t.href}
              className="group bg-[#FDFBF7] rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-[#395b45]/20 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#2d4835] mb-2">{t.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t.description}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-sm text-[#395b45] font-semibold">
                  詳しく見る <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ─── */
function WhyChooseUs() {
  const reasons = [
    { icon: Monitor, title: 'CTによる精密診断', description: '3次元データで骨の状態・神経の位置を正確に把握。安全な手術計画を立案します。' },
    { icon: Award, title: '世界シェアNo.1インプラント', description: 'ストローマン社製を採用。50年以上の研究実績と高い長期安定性が証明されています。' },
    { icon: UserCheck, title: '経験豊富な歯科医師', description: '数多くのインプラント症例を手がけた院長が、難症例にも対応いたします。' },
    { icon: Heart, title: '痛みに配慮した治療', description: '表面麻酔と極細の針、静脈内鎮静法で、痛みや恐怖心を最小限に抑えます。' },
    { icon: ShieldCheck, title: '10年保証制度', description: 'インプラント体10年、上部構造5年の安心保証。定期メンテナンスで長期間サポートします。' },
    { icon: Wrench, title: '充実のメンテナンス体制', description: '専任衛生士による定期クリーニングで、インプラント周囲炎を予防。生涯にわたりケアします。' },
  ];

  return (
    <section className="py-16 px-4 bg-[#FDFBF7]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2d4835] mb-3">
          当院が選ばれる6つの理由
        </h2>
        <p className="text-center text-gray-500 mb-10 text-sm">
          安全・安心のインプラント治療のために、当院が大切にしていること
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <ReasonCard key={i} number={i + 1} title={r.title} description={r.description} icon={r.icon} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/implant/reason"
            className="inline-flex items-center gap-1 text-[#395b45] font-semibold text-sm hover:underline"
          >
            さらに詳しく見る <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Director Message ─── */
function DirectorMessage() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#f5f0e8] to-[#ebe4d8] rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
            <div className="text-center md:text-left">
              <div className="w-40 h-40 mx-auto md:mx-0 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://placehold.co/400x400/e8f2ed/2d4835?text=Doctor"
                  alt="院長 福永 真大"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-sm font-bold text-[#2d4835]">院長 福永 真大</p>
              <p className="text-xs text-gray-500">F歯科・矯正歯科</p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#2d4835] mb-4">
                院長メッセージ
              </h2>
              <div className="space-y-4 text-sm md:text-base text-[#5A4D41] leading-relaxed">
                <p>
                  「歯を失ってしまった」「入れ歯が合わなくてつらい」——
                  そんなお悩みを抱えている方に、もう一度しっかり噛める喜びをお届けしたい。
                  それが、当院がインプラント治療に力を入れている理由です。
                </p>
                <p>
                  インプラント治療は外科手術を伴うため、不安を感じるのは当然のことです。
                  当院では、CTによる精密な診断と、世界基準の信頼性の高いインプラントを使用し、
                  安全性を最優先にした治療を行っています。
                </p>
                <p>
                  患者様一人ひとりのお口の状態やライフスタイルに寄り添い、
                  最適な治療計画をご提案いたします。
                  まずはお気軽に無料カウンセリングにお越しください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Flow Overview ─── */
function FlowOverview() {
  const steps = [
    { number: 1, title: '無料カウンセリング', description: 'お悩みをお聞きし、治療の概要・費用・期間をご説明します。', duration: '30〜60分' },
    { number: 2, title: '精密検査・診断', description: 'CT撮影やレントゲンで骨の状態を詳しく調べ、治療計画を立てます。' },
    { number: 3, title: 'インプラント手術', description: '顎の骨にインプラント体を埋入します。手術時間は1〜2時間程度です。', duration: '1〜2時間' },
    { number: 4, title: '治癒期間', description: 'インプラントと骨が結合するまで待ちます。', duration: '3〜6ヶ月' },
    { number: 5, title: '人工歯の装着', description: '型取り後、セラミック製の人工歯を作製・装着して完成です。' },
    { number: 6, title: '定期メンテナンス', description: '3〜6ヶ月ごとの定期検診で、長期間の安定を維持します。' },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2d4835] mb-3">
          治療の流れ
        </h2>
        <p className="text-center text-gray-500 mb-10 text-sm">
          カウンセリングから完成まで、安心のステップ
        </p>
        <TreatmentSteps steps={steps} compact />
        <div className="text-center mt-4">
          <Link
            href="/implant/flow"
            className="inline-flex items-center gap-1 text-[#395b45] font-semibold text-sm hover:underline"
          >
            治療の流れを詳しく見る <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Price Overview ─── */
function PriceOverview() {
  return (
    <section className="py-16 px-4 bg-[#FDFBF7]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835] mb-3">費用の目安</h2>
        <p className="text-gray-500 mb-8 text-sm">
          インプラント治療は自費診療となります。医療費控除の対象です。
        </p>
        <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 shadow-sm">
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-[#5A4D41] font-medium">カウンセリング</span>
              <span className="text-[#395b45] font-bold text-lg">無料</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-[#5A4D41] font-medium">CT撮影・診断</span>
              <span className="text-[#5A4D41]">¥11,000〜</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-[#5A4D41] font-medium">インプラント1本（税込）</span>
              <span className="text-[#395b45] font-bold text-lg">¥330,000〜</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-[#5A4D41] font-medium">骨造成（必要な場合）</span>
              <span className="text-[#5A4D41]">¥55,000〜</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-[#5A4D41] font-medium">静脈内鎮静法</span>
              <span className="text-[#5A4D41]">¥77,000〜</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">※ 症例により費用は異なります。詳しくはカウンセリング時にご説明いたします。</p>
        </div>
        <div className="mt-6">
          <Link
            href="/implant/cost"
            className="inline-flex items-center gap-1 text-[#395b45] font-semibold text-sm hover:underline"
          >
            費用の詳細を見る <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQSection() {
  const faqs = [
    { q: '手術は痛いですか？', a: '局所麻酔を行うため、手術中の痛みはほとんどありません。ご不安な方には静脈内鎮静法もご用意しています。術後の痛みは痛み止めでコントロールできる範囲です。' },
    { q: 'インプラントはどれくらい持ちますか？', a: '適切なメンテナンスを行えば、10年以上お使いいただけます。10年生存率は90%以上と報告されています。長持ちの秘訣は定期検診とセルフケアです。' },
    { q: '治療期間はどのくらいですか？', a: '一般的に4〜6ヶ月程度です。骨造成が必要な場合はさらに数ヶ月かかることがあります。' },
    { q: '高齢でも手術できますか？', a: '全身の健康状態に問題がなければ、年齢制限はありません。骨粗鬆症のお薬を服用中の方は事前にご相談ください。' },
    { q: '保険は適用されますか？', a: 'インプラント治療は自費診療（保険適用外）です。ただし、医療費控除の対象となり、確定申告で還付を受けられます。' },
    { q: '金属アレルギーでも大丈夫ですか？', a: 'インプラント体に使用するチタンは生体親和性が非常に高く、金属アレルギーが起こりにくい素材です。ご心配な方はパッチテストも可能です。' },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2d4835] mb-3">
          よくあるご質問
        </h2>
        <p className="text-center text-gray-500 mb-10 text-sm">
          インプラント治療についてお寄せいただく代表的なご質問
        </p>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-[#2d4835] flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#395b45] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">Q</span>
                  {faq.q}
                </span>
                <ChevronRight
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-90' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 pl-14">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            href="/implant/qa"
            className="inline-flex items-center gap-1 text-[#395b45] font-semibold text-sm hover:underline"
          >
            すべてのQ&Aを見る <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Related Pages ─── */
function RelatedPages() {
  const pages = [
    { title: '治療の流れ', desc: '8ステップの治療プロセスを詳しく解説', href: '/implant/flow' },
    { title: '費用・料金', desc: '治療費の目安と支払い方法', href: '/implant/cost' },
    { title: '他の治療との比較', desc: '入れ歯・ブリッジとの違い', href: '/implant/comparison' },
    { title: '安全性へのこだわり', desc: 'CT診断・衛生管理体制', href: '/implant/safety' },
    { title: 'メリット・デメリット', desc: '正直に伝えるメリットとリスク', href: '/implant/merit-demerit' },
    { title: 'よくある質問', desc: '25問以上のQ&A集', href: '/implant/qa' },
    { title: '骨造成治療', desc: '骨が足りない方への対応', href: '/implant/bone-augmentation' },
    { title: '静脈内鎮静法', desc: '痛みや恐怖心への対策', href: '/implant/iv-sedation' },
  ];

  return (
    <section className="py-16 px-4 bg-[#FDFBF7]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2d4835] mb-10">
          インプラント治療について詳しく知る
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pages.map((p, i) => (
            <Link
              key={i}
              href={p.href}
              className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-[#395b45]/20 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-[#2d4835] mb-1 group-hover:text-[#395b45] transition-colors">
                {p.title}
              </h3>
              <p className="text-xs text-gray-500">{p.desc}</p>
              <span className="inline-flex items-center gap-1 mt-3 text-xs text-[#395b45] font-semibold">
                詳しく見る <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function ImplantMainPage() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <ProblemGrid />
        <ImplantCTA
          title="無料カウンセリング実施中"
          subtitle="インプラント治療に関するご不安やご質問、院長が直接お答えします。まずはお気軽にご相談ください。"
        />
        <AboutSection />
        <TreatmentTypes />
        <WhyChooseUs />
        <DirectorMessage />
        <FlowOverview />
        <PriceOverview />
        <FAQSection />
        <RelatedPages />
        <ImplantCTA variant="cream" />
        <div className="max-w-4xl mx-auto px-4">
          <AuthorBio />
        </div>
      </main>
      <Footer />
    </>
  );
}
