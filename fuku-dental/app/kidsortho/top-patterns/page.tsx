import type { Metadata } from 'next';
import {
  Activity,
  ArrowRight,
  CalendarDays,
  Clock3,
  HeartHandshake,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageImage } from '@/components/PageImage';
import { WEB_RESERVATION_URL } from '@/lib/reservation';

export const metadata: Metadata = {
  title: 'こども矯正トップページ案｜Fデンタルオフィス',
  description: 'こども矯正トップページのデザイン比較用プレビューです。',
  robots: {
    index: false,
    follow: false,
  },
};

const navItems = [
  {
    href: '#pattern-a',
    label: 'A 相談安心型',
    body: '初回相談の心理的ハードルを下げる案',
  },
  {
    href: '#pattern-b',
    label: 'B 成長育成型',
    body: '口呼吸・舌癖・姿勢まで伝える案',
  },
  {
    href: '#pattern-c',
    label: 'C 症例信頼型',
    body: 'Before/Afterと専門性を前面に出す案',
  },
];

const assuranceItems = [
  {
    icon: MessageCircle,
    title: '相談だけでもOK',
    body: '矯正が必要か、いつ始めるべきかを先に整理します。',
  },
  {
    icon: ShieldCheck,
    title: '無理にすすめない',
    body: '今は様子を見るべき場合も、理由を含めてお伝えします。',
  },
  {
    icon: Clock3,
    title: '学校生活に配慮',
    body: '取り外し式装置を中心に、続けやすさを大切にします。',
  },
];

const growthItems = [
  {
    title: '呼吸',
    body: '口呼吸から鼻呼吸へ。お口の閉じ方も確認します。',
  },
  {
    title: '舌',
    body: '舌の位置や飲み込み方を整え、後戻りを防ぎます。',
  },
  {
    title: '姿勢',
    body: '姿勢や噛み癖も見ながら、顎の成長を支えます。',
  },
];

const featureLinks = [
  { href: '/kidsortho/timing', label: '始める時期' },
  { href: '/kidsortho/mft-training', label: 'MFT' },
  { href: '/kidsortho/cost', label: '費用' },
  { href: '/kidsortho/types', label: '歯並びの種類' },
];

const caseStudies = [
  {
    title: '反対咬合の改善',
    beforeId: 'case-hanntaikougou-before',
    afterId: 'case-hanntaikougou-after',
    treatment: '小児矯正（第1期治療）',
    cost: '132,000円（税込）',
    duration: '約1〜2年 / 月1回の通院',
    risks: '装置による痛み・違和感、発音のしづらさ、むし歯・歯肉炎、後戻りの可能性',
  },
  {
    title: '出っ歯からの改善',
    beforeId: 'case-deppa-before',
    afterId: 'case-deppa-after',
    treatment: '小児矯正（第1期治療）',
    cost: '132,000円（税込）',
    duration: '約1〜2年 / 月1回の通院',
    risks: '装置による痛み・違和感、発音のしづらさ、むし歯・歯肉炎、後戻りの可能性',
  },
];

function CtaButtons({ dark = false }: { dark?: boolean }) {
  const secondaryClass = dark
    ? 'border-white/45 bg-white/10 text-white hover:bg-white/20'
    : 'border-[#C5A572]/50 bg-white text-[#5A4D41] hover:bg-[#F8F3E8]';

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={WEB_RESERVATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full bg-[#0a8a85] px-7 py-4 text-sm font-bold text-white shadow-[0_16px_34px_rgba(10,138,133,0.22)] transition hover:bg-[#087571] sm:min-w-[230px]"
      >
        <CalendarDays size={20} />
        <span className="whitespace-nowrap">24時間 WEB予約</span>
        <ArrowRight size={16} />
      </a>
      <a
        href="tel:03-6204-2876"
        className={`inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full border px-7 py-4 text-sm font-bold transition sm:min-w-[190px] ${secondaryClass}`}
      >
        <Phone size={19} />
        <span className="whitespace-nowrap">電話で相談</span>
      </a>
    </div>
  );
}

function PatternLabel({
  children,
  tone = 'gold',
}: {
  children: React.ReactNode;
  tone?: 'gold' | 'teal';
}) {
  return (
    <p
      className={`mb-5 inline-flex rounded-full border px-4 py-2 text-[11px] font-bold tracking-[0.24em] ${
        tone === 'teal'
          ? 'border-[#0a8a85]/25 bg-[#0a8a85]/10 text-[#0a8a85]'
          : 'border-white/30 bg-white/15 text-white'
      }`}
    >
      {children}
    </p>
  );
}

function SectionTitle({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-[11px] font-bold tracking-[0.28em] text-[#C5A572]">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl font-light leading-[1.45] text-[#5A4D41] md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[#7E7469] md:text-base">
        {body}
      </p>
    </div>
  );
}

function HeroMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-l border-white/35 pl-4">
      <p className="text-2xl font-semibold text-white md:text-3xl">{value}</p>
      <p className="mt-1 text-xs leading-relaxed text-white/78">{label}</p>
    </div>
  );
}

function CaseCard({ item }: { item: (typeof caseStudies)[number] }) {
  return (
    <article className="rounded-lg border border-[#E7E0D4] bg-white p-4 shadow-sm md:p-5">
      <div className="mb-4 flex items-center justify-between gap-4 border-b border-[#E7E0D4] pb-3">
        <h3 className="font-serif text-xl text-[#5A4D41]">{item.title}</h3>
        <span className="rounded bg-[#F4EFE7] px-3 py-1 text-xs font-bold text-[#8B6F47]">
          自由診療
        </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <div>
          <span className="mb-2 inline-block rounded bg-[#5A4D41] px-3 py-1 text-xs font-bold text-white">
            Before
          </span>
          <PageImage
            path="/kidsortho"
            imageId={item.beforeId}
            alt={`${item.title} Before`}
            className="aspect-[3/2] w-full rounded-lg bg-[#F7F2EA] object-contain"
          />
        </div>
        <ArrowRight className="mx-auto hidden text-[#C5A572] sm:block" size={24} />
        <div>
          <span className="mb-2 inline-block rounded bg-[#C5A572] px-3 py-1 text-xs font-bold text-white">
            After
          </span>
          <PageImage
            path="/kidsortho"
            imageId={item.afterId}
            alt={`${item.title} After`}
            className="aspect-[3/2] w-full rounded-lg bg-[#F7F2EA] object-contain"
          />
        </div>
      </div>
      <dl className="mt-5 grid gap-2 text-xs leading-relaxed text-[#6B6258] md:text-sm">
        <div className="grid gap-1 sm:grid-cols-[86px_1fr]">
          <dt className="font-bold text-[#8B6F47]">治療内容</dt>
          <dd>{item.treatment}</dd>
        </div>
        <div className="grid gap-1 sm:grid-cols-[86px_1fr]">
          <dt className="font-bold text-[#8B6F47]">費用</dt>
          <dd>{item.cost}</dd>
        </div>
        <div className="grid gap-1 sm:grid-cols-[86px_1fr]">
          <dt className="font-bold text-[#8B6F47]">期間</dt>
          <dd>{item.duration}</dd>
        </div>
        <div className="grid gap-1 sm:grid-cols-[86px_1fr]">
          <dt className="font-bold text-[#8B6F47]">リスク</dt>
          <dd>{item.risks}</dd>
        </div>
      </dl>
    </article>
  );
}

export default function KidsorthoTopPatternsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#5A4D41]">
      <Header />

      <main>
        <section className="border-b border-[#E7E0D4] bg-white px-5 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-[11px] font-bold tracking-[0.32em] text-[#0a8a85]">
              KIDS ORTHODONTICS TOP PATTERNS
            </p>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <h1 className="font-serif text-4xl font-light leading-[1.35] text-[#5A4D41] md:text-5xl">
                  こども矯正ページ
                  <br />
                  トップ案 3パターン
                </h1>
                <p className="mt-5 text-sm leading-8 text-[#7E7469] md:text-base">
                  他の診療ページで使っているヒーロー、コンセプト、症例、特徴の流れを参考にしながら、
                  保護者の意思決定ポイントが異なる3つの見せ方に分けています。
                </p>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg border border-[#E7E0D4] bg-[#FDFBF7] p-4 transition hover:-translate-y-0.5 hover:border-[#0a8a85]/40 hover:bg-white"
                  >
                    <span className="text-sm font-bold text-[#0a8a85]">{item.label}</span>
                    <span className="mt-2 block text-xs leading-relaxed text-[#7E7469]">
                      {item.body}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pattern-a" className="bg-white">
          <div className="relative isolate min-h-[700px] overflow-hidden md:min-h-[780px]">
            <picture className="absolute inset-0 -z-10 h-full w-full">
              <source
                media="(max-width: 767px)"
                srcSet="/images/pages/kidsortho/hero-consultation-generated.jpg"
              />
              <img
                src="/images/pages/kidsortho/hero-consultation-generated.jpg"
                alt="親子が歯科医師とこども矯正について相談している様子"
                className="h-full w-full object-cover object-center"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(34,29,24,0.78)_0%,rgba(34,29,24,0.48)_42%,rgba(34,29,24,0.10)_100%)]" />
            <div className="mx-auto flex min-h-[700px] max-w-7xl items-center px-5 py-24 md:min-h-[780px]">
              <div className="max-w-2xl">
                <PatternLabel>Pattern A / CONSULT FIRST</PatternLabel>
                <h2 className="font-serif text-3xl font-light leading-[1.45] text-white sm:text-4xl md:text-6xl md:leading-[1.35]">
                  まずは相談から始める
                  <br />
                  こども矯正
                </h2>
                <p className="mt-6 max-w-xl text-base leading-9 text-white/88 md:text-lg">
                  「今すぐ治療が必要？」「費用は？」「学校で困らない？」。
                  保護者の不安に先に答え、来院のハードルを下げるトップ案です。
                </p>
                <div className="mt-8">
                  <CtaButtons dark />
                </div>
                <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                  <HeroMetric label="豊洲駅6a出口から" value="徒歩2分" />
                  <HeroMetric label="相談・検査" value="無料" />
                  <HeroMetric label="土日も診療" value="通いやすい" />
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 py-14 md:py-18">
            <div className="mx-auto max-w-6xl">
              <SectionTitle
                eyebrow="FIRST MESSAGE"
                title="治療するか決める前に、状態を知る"
                body="こども矯正は、始める時期も装置もお子さまによって違います。まずは歯並び・噛み合わせ・口の癖を見て、必要性と選択肢を整理します。"
              />
              <div className="grid gap-4 md:grid-cols-3">
                {assuranceItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={item.title}
                      className="rounded-lg border border-[#E7E0D4] bg-[#FDFBF7] p-6"
                    >
                      <Icon size={28} className="mb-5 text-[#0a8a85]" />
                      <h3 className="font-serif text-xl text-[#5A4D41]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#7E7469]">{item.body}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="pattern-b" className="bg-[#F4F8F5]">
          <div className="relative isolate overflow-hidden">
            <div className="mx-auto grid min-h-[760px] max-w-7xl gap-8 px-5 py-16 md:grid-cols-[0.82fr_1.18fr] md:items-center md:py-24">
              <div className="relative z-10">
                <PatternLabel tone="teal">Pattern B / GROWTH DESIGN</PatternLabel>
                <h2 className="font-serif text-3xl font-light leading-[1.45] text-[#2F4E3A] sm:text-4xl md:text-6xl md:leading-[1.38]">
                  歯並びだけでなく、
                  <br />
                  未来のいいお顔を育てる
                </h2>
                <p className="mt-6 max-w-xl text-base leading-9 text-[#5F6F62] md:text-lg">
                  口呼吸、舌の位置、姿勢など、歯並びが悪くなる原因まで伝える案です。
                  「成長期だからできること」を一番の価値として見せます。
                </p>
                <div className="mt-8">
                  <CtaButtons />
                </div>
              </div>
              <div className="relative min-h-[460px] overflow-hidden rounded-lg border border-[#DCE8DD] bg-white shadow-sm md:min-h-[620px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/pages/kidsortho/hero-face-growth-generated.jpg"
                  alt="成長期のこどもの顔立ちと歯並びを説明するビジュアル"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(244,248,245,0.96)_80%)] p-6 pt-24">
                  <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
                    {growthItems.map((item) => (
                      <div key={item.title} className="rounded-lg bg-white/90 p-4 shadow-sm">
                        <p className="text-sm font-bold text-[#0a8a85]">{item.title}</p>
                        <p className="mt-2 text-xs leading-relaxed text-[#5F6F62]">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#DCE8DD] bg-white px-5 py-14">
            <div className="mx-auto max-w-6xl">
              <SectionTitle
                eyebrow="ORAL DEVELOPMENT"
                title="原因から見て、後戻りしにくい歯並びへ"
                body="装置だけで歯を並べるのではなく、MFTや生活習慣の見直しも含めて、成長期のお口を整えます。"
              />
              <div className="grid gap-4 md:grid-cols-4">
                {featureLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group flex min-h-[92px] items-center justify-between rounded-lg border border-[#E7E0D4] bg-[#FAFAF7] px-5 py-4 transition hover:border-[#0a8a85]/45 hover:bg-white"
                  >
                    <span className="font-bold text-[#5A4D41]">{item.label}</span>
                    <ArrowRight
                      size={17}
                      className="text-[#C5A572] transition group-hover:translate-x-1 group-hover:text-[#0a8a85]"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pattern-c" className="bg-[#FDFBF7]">
          <div className="relative isolate min-h-[720px] overflow-hidden md:min-h-[780px]">
            <picture className="absolute inset-0 -z-10 h-full w-full">
              <source
                media="(max-width: 767px)"
                srcSet="/images/pages/kidsortho/hero-consultation-generated.jpg"
              />
              <img
                src="/images/pages/kidsortho/hero-baked-desktop-a.jpg"
                alt="こども矯正の治療説明と笑顔のイメージ"
                className="h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,41,37,0.86)_0%,rgba(16,41,37,0.54)_45%,rgba(16,41,37,0.08)_100%)]" />
            <div className="mx-auto flex min-h-[720px] max-w-7xl items-center px-5 py-24 md:min-h-[780px]">
              <div className="max-w-2xl">
                <PatternLabel>Pattern C / CASE & TRUST</PatternLabel>
                <h2 className="font-serif text-3xl font-light leading-[1.45] text-white sm:text-4xl md:text-6xl md:leading-[1.35]">
                  症例でわかる
                  <br />
                  こども矯正
                </h2>
                <p className="mt-6 max-w-xl text-base leading-9 text-white/88 md:text-lg">
                  変化のイメージ、治療費、期間、リスクまで先に見せる案です。
                  比較検討中の保護者に、納得感と透明性を届けます。
                </p>
                <div className="mt-8">
                  <CtaButtons dark />
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 py-14 md:py-18">
            <div className="mx-auto max-w-6xl">
              <SectionTitle
                eyebrow="CASE STUDIES"
                title="治療後のイメージを、費用・期間と一緒に確認"
                body="既存の症例紹介セクションをトップ近くへ移動し、信頼性と透明性を早い段階で伝える構成です。"
              />
              <div className="grid gap-5 lg:grid-cols-2">
                {caseStudies.map((item) => (
                  <CaseCard key={item.title} item={item} />
                ))}
              </div>
              <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-6 text-[#7E7469]">
                ※掲載症例は一例です。治療効果・期間・費用には個人差があります。詳細は診査診断後にご説明します。
              </p>

              <div className="mt-12 grid gap-4 md:grid-cols-3">
                {[
                  {
                    icon: Sparkles,
                    title: '成長期を活かす',
                    body: '顎の成長を見ながら、無理の少ない治療計画を立てます。',
                  },
                  {
                    icon: Activity,
                    title: '原因にも向き合う',
                    body: '口呼吸・舌癖・姿勢など、歯並びに関わる習慣を確認します。',
                  },
                  {
                    icon: HeartHandshake,
                    title: '親子で続けやすい',
                    body: '通院頻度や学校生活、費用面まで具体的に相談できます。',
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="rounded-lg bg-white p-6 shadow-sm">
                      <Icon size={27} className="mb-4 text-[#C5A572]" />
                      <h3 className="font-serif text-xl text-[#5A4D41]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#7E7469]">{item.body}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-14">
          <div className="mx-auto max-w-5xl rounded-lg border border-[#E7E0D4] bg-[#FAFAF7] p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-center">
              <div>
                <p className="mb-3 text-[11px] font-bold tracking-[0.28em] text-[#0a8a85]">
                  RECOMMENDATION
                </p>
                <h2 className="font-serif text-2xl font-light leading-relaxed text-[#5A4D41] md:text-3xl">
                  まず推すなら A、差別化なら B
                </h2>
              </div>
              <div className="grid gap-3 text-sm leading-7 text-[#7E7469]">
                <p>
                  初回CVを優先するなら、相談ハードルを下げるPattern Aが最も強いです。
                  現行ページの「まずはお気軽にご相談ください」と相性がよく、既存のCTA導線にも自然につながります。
                </p>
                <p>
                  他院との差別化を強めるならPattern Bです。「お顔を育てる」「MFT」「口腔機能育成」という、このページ独自の思想が一番伝わります。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
