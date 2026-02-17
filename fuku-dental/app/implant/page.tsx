import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { ImplantCTA } from '@/components/implant/ImplantCTA';
import { ProblemGrid } from '@/components/implant/ProblemGrid';
import { TreatmentSteps } from '@/components/implant/TreatmentSteps';
import { SixReasons } from '@/components/implant/SixReasons';
import { IntroSection } from '@/components/implant/IntroSection';
import { ConsultationSection } from '@/components/implant/ConsultationSection';
import { ImplantAboutSection } from '@/components/implant/ImplantAboutSection';
import { ImplantLinksSection } from '@/components/implant/ImplantLinksSection';
import { TreatmentMethodsSection } from '@/components/implant/TreatmentMethodsSection';
import { BeforeImplantCards } from '@/components/implant/BeforeImplantCards';
import { DirectorMessageSection } from '@/components/implant/DirectorMessageSection';
import { HeroCarousel } from '@/components/implant/HeroCarousel';
import { FAQSection } from '@/components/implant/FAQSection';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '豊洲のインプラント治療｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲駅徒歩2分、F歯科・矯正歯科 豊洲プライムスクエア院のインプラント治療。500症例以上の経験を持つ院長が、歯科用CTと綿密な計画で安全なインプラント治療を提供。完全個室で静脈内鎮静法にも対応。無料相談実施中。',
  keywords: '豊洲,歯医者,インプラント,歯科,デンタルクリニック,インプラント治療,CT診断,静脈内鎮静法,無料相談,豊洲駅,江東区,豊洲 歯医者,豊洲 インプラント,豊洲 歯科',
  openGraph: {
    title: '豊洲のインプラント治療｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲駅徒歩2分。500症例以上の経験を持つ院長が、歯科用CTと綿密な計画で安全なインプラント治療を提供。完全個室・静脈内鎮静法対応。無料相談実施中。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/implant',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
  twitter: {
    card: 'summary_large_image',
    title: '豊洲のインプラント治療｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲駅徒歩2分。500症例以上の経験、CT診断、静脈内鎮静法対応。無料相談実施中。',
  },
  alternates: {
    canonical: 'https://fuku-dental.jp/implant',
  },
};

/* ─── About Implants ─── */
function AboutSection() {
  return (
    <section className="py-16 px-4 bg-[#FDFBF7]" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2d4835] mb-3 font-serif">
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
                  <h4 className="font-bold text-[#2d4835] font-serif">インプラント体（人工歯根）</h4>
                  <p className="text-sm text-gray-600">顎の骨に埋め込むチタン製のネジ。天然歯の根の役割を果たします。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#395b45] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-[#2d4835] font-serif">アバットメント（土台）</h4>
                  <p className="text-sm text-gray-600">インプラント体と人工歯を連結する部品です。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#395b45] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-[#2d4835] font-serif">上部構造（人工歯）</h4>
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
    <section className="py-16 px-4 bg-white" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2d4835] mb-3 font-serif">
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
                <h3 className="font-bold text-[#2d4835] mb-2 font-serif">{t.title}</h3>
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
    <section className="py-16 px-4 bg-white" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2d4835] mb-3 font-serif">
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
    <section className="py-16 px-4 bg-[#FDFBF7]" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835] mb-3 font-serif">費用の目安</h2>
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
    <section className="py-16 px-4 bg-[#FDFBF7]" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2d4835] mb-10 font-serif">
          インプラント治療について詳しく知る
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pages.map((p, i) => (
            <Link
              key={i}
              href={p.href}
              className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-[#395b45]/20 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-[#2d4835] mb-1 group-hover:text-[#395b45] transition-colors font-serif">
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲駅徒歩2分のインプラント治療専門。500症例以上の経験を持つ院長が、歯科用CTと綿密な計画で安全なインプラント治療を提供。',
    url: 'https://fuku-dental.jp/implant',
    telephone: '+81-3-XXXX-XXXX',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '豊洲',
      addressLocality: '江東区',
      addressRegion: '東京都',
      postalCode: '135-XXXX',
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.6654,
      longitude: 139.7964,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '10:00',
        closes: '18:00',
      },
    ],
    priceRange: '¥¥¥',
    medicalSpecialty: 'Dentistry',
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'インプラント治療',
        description: '歯科用CTを使用した精密診断による安全なインプラント埋入',
      },
      {
        '@type': 'MedicalProcedure',
        name: '静脈内鎮静法',
        description: '痛みや恐怖心を軽減する鎮静法によるインプラント手術',
      },
      {
        '@type': 'MedicalProcedure',
        name: '骨造成治療',
        description: '骨が不足している場合の骨増生治療',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <HeroCarousel />
        <IntroSection />
        <ProblemGrid />
        <ConsultationSection />
        <BeforeImplantCards />
        <SixReasons />
        <DirectorMessageSection />
        <ImplantAboutSection />
        <ImplantLinksSection />
        <TreatmentMethodsSection />
        <FlowOverview />
        <PriceOverview />
        <FAQSection />
        <RelatedPages />
        <ImplantCTA variant="lightblue" />
        <div className="max-w-4xl mx-auto px-4">
          <AuthorBio />
        </div>
      </main>
      <Footer />
    </>
  );
}
