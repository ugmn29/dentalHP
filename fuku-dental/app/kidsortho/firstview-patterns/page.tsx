import type { Metadata } from 'next';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  HeartHandshake,
  Home,
  Phone,
  ShieldCheck,
  Smile,
  Star,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { WEB_RESERVATION_URL } from '@/lib/reservation';

export const metadata: Metadata = {
  title: 'こども矯正ファーストビュー案｜Fデンタルオフィス',
  description: 'こども矯正ページのファーストビュー比較用プレビューです。',
  robots: {
    index: false,
    follow: false,
  },
};

const firstViewLinks = [
  { href: '#fv-a', label: 'A 相談CV' },
  { href: '#fv-b', label: 'B 成長育成' },
  { href: '#fv-c', label: 'C 始め時' },
  { href: '#fv-d', label: 'D 信頼透明' },
];

const softBg = 'bg-[#FFF8EC]';
const mintBg = 'bg-[#F2FAF7]';
const peachBg = 'bg-[#FFF4EA]';
const skyBg = 'bg-[#F3F8FF]';

const dentalIllustrations = [
  {
    src: '/images/kidsortho/underbite-illustration.webp',
    label: '反対咬合',
  },
  {
    src: '/images/kidsortho/crowding-illustration.webp',
    label: 'ガタガタ',
  },
  {
    src: '/images/kidsortho/openbite-illustration.webp',
    label: '開咬',
  },
];

function CtaButtons({ dark = false }: { dark?: boolean }) {
  const secondaryClass = dark
    ? 'border-white/50 bg-white/10 text-white hover:bg-white/20'
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

function PatternBadge({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`mb-5 inline-flex rounded-full border px-4 py-2 text-[11px] font-bold tracking-[0.24em] ${
        dark
          ? 'border-white/35 bg-white/15 text-white'
          : 'border-[#0a8a85]/25 bg-[#0a8a85]/10 text-[#0a8a85]'
      }`}
    >
      {children}
    </p>
  );
}

function Metric({
  label,
  value,
  dark = false,
}: {
  label: string;
  value: string;
  dark?: boolean;
}) {
  return (
    <div className={dark ? 'border-l border-white/35 pl-4' : 'border-l border-[#DCD5C9] pl-4'}>
      <p className={`text-2xl font-semibold md:text-3xl ${dark ? 'text-white' : 'text-[#5A4D41]'}`}>
        {value}
      </p>
      <p className={`mt-1 text-xs leading-relaxed ${dark ? 'text-white/78' : 'text-[#7E7469]'}`}>
        {label}
      </p>
    </div>
  );
}

function IllustrationStrip() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {dentalIllustrations.map((item) => (
        <div key={item.label} className="rounded-lg border border-white/70 bg-white/90 p-2 text-center shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt={item.label}
            className="mx-auto aspect-square w-full max-w-[74px] rounded-md object-cover"
            loading="lazy"
            decoding="async"
          />
          <p className="mt-1 text-[11px] font-bold text-[#8B6F47]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

function MobilePoster({
  label,
  title,
  body,
  imageSrc,
  imageAlt,
  bgClass,
  accentClass = 'text-[#0a8a85]',
  children,
}: {
  label: string;
  title: React.ReactNode;
  body: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  bgClass: string;
  accentClass?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative isolate min-h-[calc(100svh-72px)] overflow-hidden md:hidden ${bgClass}`}>
      <div className="absolute inset-x-0 top-0 -z-10 h-[58%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.38)_38%,rgba(255,248,236,0.96)_100%)]" />
      </div>

      <div className="relative z-10 flex min-h-[calc(100svh-72px)] flex-col px-5 pb-6 pt-10">
        <p className={`mb-4 inline-flex w-fit rounded-full border border-white/70 bg-white/85 px-4 py-2 text-[11px] font-bold tracking-[0.22em] shadow-sm ${accentClass}`}>
          {label}
        </p>
        <h2 className="font-serif text-[2.45rem] font-light leading-[1.22] text-[#5A4D41]">
          {title}
        </h2>
        <p className="mt-4 max-w-[19rem] text-[15px] leading-8 text-[#6B6258]">
          {body}
        </p>

        <div className="mt-8 space-y-4">
          {children}
          <CtaButtons />
        </div>
      </div>
    </div>
  );
}

function IntroNav() {
  return (
    <section className="border-b border-[#E7E0D4] bg-white px-5 py-12 md:py-14">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-[11px] font-bold tracking-[0.32em] text-[#0a8a85]">
          KIDS ORTHODONTICS FIRST VIEW
        </p>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <h1 className="font-serif text-3xl font-light leading-[1.45] text-[#5A4D41] md:text-5xl">
              こども矯正
              <br />
              ファーストビュー案
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#7E7469] md:text-base">
              既存ページの中身は活かす前提で、入口だけを比較できるようにしました。
              予約導線、医院の思想、開始時期、信頼性の4方向です。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {firstViewLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg border border-[#E7E0D4] bg-[#FDFBF7] px-4 py-4 text-sm font-bold text-[#0a8a85] transition hover:-translate-y-0.5 hover:border-[#0a8a85]/40 hover:bg-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FirstViewA() {
  return (
    <section id="fv-a" className={`overflow-hidden ${softBg}`}>
      <MobilePoster
        label="A / 相談CV重視"
        title={
          <>
            まずは相談から始める<br />
            こども矯正
          </>
        }
        body={
          <>
            「今すぐ必要？」「学校では外せる？」を
            <br />
            やさしく整理します。
          </>
        }
        imageSrc="/images/pages/kidsortho/hero-consultation-generated.jpg"
        imageAlt="親子が歯科医師とこども矯正について相談している様子"
        bgClass={softBg}
        accentClass="text-[#2F8E84]"
      >
        <IllustrationStrip />
      </MobilePoster>

      <div className="mx-auto hidden min-h-[calc(100svh-72px)] max-w-7xl gap-8 px-5 py-16 md:grid md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-20">
        <div>
          <PatternBadge>A / 相談CV重視</PatternBadge>
          <h2 className="font-serif text-3xl font-light leading-[1.45] text-[#5A4D41] sm:text-4xl md:text-6xl md:leading-[1.35]">
            まずは相談から始める
            <br />
            こども矯正
          </h2>
          <p className="mt-6 max-w-xl text-base leading-9 text-[#7E7469] md:text-lg">
            「今すぐ必要？」「学校では外せる？」「費用はどのくらい？」。
            治療を決める前の不安を、やさしく整理します。
          </p>
          <div className="mt-8">
            <CtaButtons />
          </div>
          <div className="mt-9 hidden max-w-xl gap-3 sm:grid sm:grid-cols-3">
            {[
              { icon: Smile, title: '相談だけでもOK', body: 'まず状態確認' },
              { icon: Home, title: '家で使える装置', body: '学校生活に配慮' },
              { icon: ShieldCheck, title: '無理にすすめない', body: '必要性から説明' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-lg border border-[#F2DFC5] bg-white p-4 shadow-sm">
                  <Icon size={21} className="mb-3 text-[#F2A766]" />
                  <p className="font-bold text-[#5A4D41]">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#8D8070]">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-[#F2DFC5] bg-white p-3 shadow-[0_20px_60px_rgba(199,148,88,0.16)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/pages/kidsortho/hero-consultation-generated.jpg"
              alt="親子が歯科医師とこども矯正について相談している様子"
              className="aspect-[4/3] w-full rounded-lg object-cover"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <Metric value="無料" label="相談・検査" />
            <Metric value="徒歩2分" label="豊洲駅6a出口" />
            <Metric value="土日" label="通院しやすい" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FirstViewB() {
  return (
    <section id="fv-b" className={`overflow-hidden ${mintBg}`}>
      <MobilePoster
        label="B / 成長育成"
        title={
          <>
            お顔の育ちまで<br />
            見る矯正
          </>
        }
        body={
          <>
            口呼吸・舌・姿勢も確認。
            <br />
            成長期の力を味方にします。
          </>
        }
        imageSrc="/images/pages/kidsortho/hero-face-growth-generated.jpg"
        imageAlt="成長期のお子さまの歯並びと顔立ちを説明するイメージ"
        bgClass={mintBg}
        accentClass="text-[#2F7D6A]"
      >
        <div className="grid grid-cols-3 gap-2">
          {[
            { title: '呼吸', body: 'お口ぽかん' },
            { title: '舌', body: '位置を確認' },
            { title: '姿勢', body: '育ちを支える' },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-[#BBDDD2] bg-white/92 p-3 shadow-sm">
              <p className="text-sm font-bold text-[#0a8a85]">{item.title}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-[#5F6F62]">{item.body}</p>
            </div>
          ))}
        </div>
      </MobilePoster>

      <div className="mx-auto hidden min-h-[calc(100svh-72px)] max-w-7xl gap-8 px-5 py-16 md:grid md:grid-cols-[0.86fr_1.14fr] md:items-center md:py-20">
        <div>
          <PatternBadge>B / 成長育成の差別化</PatternBadge>
          <h2 className="font-serif text-3xl font-light leading-[1.45] text-[#2F4E3A] sm:text-4xl md:text-6xl md:leading-[1.38]">
            歯並びだけでなく、
            <br />
            お顔の育ちまで見る
          </h2>
          <p className="mt-6 max-w-xl text-base leading-9 text-[#5F6F62] md:text-lg">
            口呼吸、舌の位置、姿勢まで見ながら、成長期のお口を整える。
            子どもの成長に寄り添うやさしい矯正として見せる案です。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {['鼻呼吸', '舌の位置', '姿勢', '噛む力'].map((label) => (
              <span key={label} className="rounded-full border border-[#BBDDD2] bg-white px-4 py-2 text-sm font-bold text-[#2F7D6A]">
                {label}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <CtaButtons />
          </div>
        </div>
        <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-[#DCE8DD] bg-white shadow-sm md:min-h-[620px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/pages/kidsortho/hero-face-growth-generated.jpg"
            alt="成長期のお子さまの歯並びと顔立ちを説明するイメージ"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(243,248,245,0.96)_70%)] p-5 pt-24 md:p-6 md:pt-28">
            <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
              {[
                { title: '呼吸', body: 'お口ぽかんを確認' },
                { title: '舌', body: '舌の癖まで見る' },
                { title: '姿勢', body: '体の使い方も確認' },
              ].map((item) => (
                <div key={item.title} className="rounded-lg bg-white/92 p-4 shadow-sm">
                  <p className="text-sm font-bold text-[#0a8a85]">{item.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-[#5F6F62]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FirstViewC() {
  return (
    <section id="fv-c" className={`overflow-hidden ${peachBg}`}>
      <MobilePoster
        label="C / 始め時"
        title={
          <>
            始める時期を<br />
            逃さない
          </>
        }
        body={
          <>
            「まだ早い？もう遅い？」
            <br />
            迷った時点で相談できます。
          </>
        }
        imageSrc="/images/pages/kidsortho/笑顔の子供が歯を見せている場面.jpg"
        imageAlt="笑顔で歯を見せるお子さま"
        bgClass={peachBg}
        accentClass="text-[#D18442]"
      >
        <div className="grid grid-cols-3 gap-2">
          {[
            { title: '6〜12歳', body: '相談目安' },
            { title: '不要なら', body: '様子見も' },
            { title: '習慣', body: '早めに確認' },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-[#F3D4B9] bg-white/92 p-3 shadow-sm">
              <p className="text-sm font-bold text-[#D18442]">{item.title}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-[#7E7469]">{item.body}</p>
            </div>
          ))}
        </div>
      </MobilePoster>

      <div className="mx-auto hidden min-h-[calc(100svh-72px)] max-w-7xl gap-8 px-5 py-16 md:grid md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20">
        <div>
          <PatternBadge>C / 始め時訴求</PatternBadge>
          <h2 className="font-serif text-3xl font-light leading-[1.45] text-[#5A4D41] sm:text-4xl md:text-6xl md:leading-[1.35]">
            こども矯正は、
            <br />
            始める時期が大切です
          </h2>
          <p className="mt-6 max-w-xl text-base leading-9 text-[#7E7469] md:text-lg">
            「まだ早い？」「もう遅い？」という保護者の迷いに寄り添い、
            まず現状を確認する理由を伝える案です。
          </p>
          <div className="mt-8">
            <CtaButtons />
          </div>
          <div className="mt-9 grid max-w-xl gap-3 sm:grid-cols-3">
            {[
              { icon: Clock3, title: '6〜12歳', body: '相談の目安' },
              { icon: ShieldCheck, title: '不要なら不要', body: '時期も説明' },
              { icon: Star, title: '成長を味方に', body: '顎の育ちを確認' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-lg border border-[#E7E0D4] bg-white p-4">
                  <Icon size={21} className="mb-3 text-[#C5A572]" />
                  <p className="font-bold text-[#5A4D41]">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#7E7469]">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border border-[#E7E0D4] bg-white shadow-sm">
          <div className="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-4 py-2 text-xs font-bold tracking-[0.18em] text-[#F2A766] shadow-sm">
            TIMING CHECK
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/pages/kidsortho/笑顔の子供が歯を見せている場面.jpg"
            alt="笑顔で歯を見せるお子さま"
            className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

function FirstViewD() {
  return (
    <section id="fv-d" className={`overflow-hidden ${skyBg}`}>
      <MobilePoster
        label="D / 説明と安心"
        title={
          <>
            親子で見て、<br />
            納得して相談
          </>
        }
        body={
          <>
            費用・期間・治療イメージを
            <br />
            画面で一緒に確認します。
          </>
        }
        imageSrc="/images/pages/kidsortho/モニターで治療計画を説明している場面.jpg"
        imageAlt="モニターを見ながら親子に治療計画を説明している様子"
        bgClass={skyBg}
        accentClass="text-[#4E86B8]"
      >
        <div className="grid grid-cols-3 gap-2">
          {[
            { title: '費用', body: '132,000円〜' },
            { title: '通院', body: '月1回目安' },
            { title: '説明', body: 'リスクも' },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-[#CFE0F5] bg-white/92 p-3 shadow-sm">
              <p className="text-sm font-bold text-[#4E86B8]">{item.title}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-[#6B6258]">{item.body}</p>
            </div>
          ))}
        </div>
      </MobilePoster>

      <div className="mx-auto hidden min-h-[calc(100svh-72px)] max-w-7xl gap-8 px-5 py-16 md:grid md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-20">
        <div>
          <PatternBadge>D / 信頼と透明性</PatternBadge>
          <h2 className="font-serif text-3xl font-light leading-[1.45] text-[#5A4D41] sm:text-4xl md:text-6xl md:leading-[1.35]">
            親子で見てから、
            <br />
            安心して相談できる
          </h2>
          <p className="mt-6 max-w-xl text-base leading-9 text-[#7E7469] md:text-lg">
            治療のイメージ、費用、期間を明るく整理。
            比較検討中の保護者にも、子どもにも怖く見えにくい信頼案です。
          </p>
          <div className="mt-8">
            <CtaButtons />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: FileText, label: '費用目安' },
              { icon: CheckCircle2, label: '治療期間' },
              { icon: HeartHandshake, label: 'リスク説明' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="inline-flex items-center gap-2 rounded-full border border-[#E7E0D4] bg-white px-4 py-2 text-sm font-bold text-[#5A4D41]">
                  <Icon size={16} className="text-[#0a8a85]" />
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid gap-4 rounded-lg border border-[#DCE7F5] bg-white p-4 shadow-sm md:p-5">
          <div className="overflow-hidden rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/pages/kidsortho/モニターで治療計画を説明している場面.jpg"
              alt="モニターを見ながら親子に治療計画を説明している様子"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { title: '費用', body: '132,000円〜' },
              { title: '通院', body: '月1回目安' },
              { title: '説明', body: 'リスクも確認' },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-[#F3F8FF] p-4">
                <p className="text-xs font-bold tracking-[0.16em] text-[#4E86B8]">{item.title}</p>
                <p className="mt-2 font-bold text-[#5A4D41]">{item.body}</p>
              </div>
            ))}
          </div>
          <dl className="grid gap-2 text-xs leading-relaxed text-[#6B6258] md:grid-cols-3 md:text-sm">
            <div>
              <dt className="font-bold text-[#8B6F47]">費用</dt>
              <dd className="mt-1">132,000円（税込）</dd>
            </div>
            <div>
              <dt className="font-bold text-[#8B6F47]">期間</dt>
              <dd className="mt-1">約1〜2年 / 月1回</dd>
            </div>
            <div>
              <dt className="font-bold text-[#8B6F47]">主なリスク</dt>
              <dd className="mt-1">違和感・後戻りなど</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default function KidsorthoFirstViewPatternsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#5A4D41]">
      <Header />
      <main>
        <IntroNav />
        <FirstViewA />
        <FirstViewB />
        <FirstViewC />
        <FirstViewD />
      </main>
      <div className="border-t border-[#E7E0D4] bg-white px-5 py-8 text-center text-xs leading-6 text-[#7E7469]">
        検討用プレビューです。検索避けのため noindex を設定しています。
      </div>
    </div>
  );
}
