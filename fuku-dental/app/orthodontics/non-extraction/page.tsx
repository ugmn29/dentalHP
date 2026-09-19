import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  FileText,
  Phone,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { AuthorBio } from '@/components/AuthorBio';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { RelatedPagesSection } from '@/components/RelatedPagesSection';
import { WEB_RESERVATION_URL } from '@/lib/reservation';
import { orthodonticsRelatedPages } from '@/data/related-pages';

export const metadata: Metadata = {
  title: '歯を抜かない矯正治療｜子ども・大人の非抜歯矯正｜豊洲のFデンタルオフィス',
  description:
    '矯正治療で永久歯の抜歯を提案された方へ。Fデンタルオフィスでは20代前半まで健康な永久歯を抜かず、特殊なワイヤー・マウスピース・付加装置・アンカースクリューを組み合わせて治療します。豊洲駅徒歩2分。',
  keywords:
    '歯を抜かない矯正,非抜歯矯正,抜歯矯正 セカンドオピニオン,豊洲 矯正歯科,大人 非抜歯矯正,こども 非抜歯矯正',
  alternates: {
    canonical: 'https://fshika.com/orthodontics/non-extraction',
  },
  openGraph: {
    title: '歯を抜かない矯正治療｜子ども・大人の非抜歯矯正｜豊洲のFデンタルオフィス',
    description:
      '抜歯を決める前に、歯を残せる治療方法をもう一度検討しませんか。ワイヤー矯正・マウスピース矯正の両方から方法を検討します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/orthodontics/non-extraction',
    siteName: 'Fデンタルオフィス 豊洲プライムスクエア院',
  },
  twitter: {
    card: 'summary_large_image',
    title: '歯を抜かない矯正治療｜豊洲のFデンタルオフィス',
    description:
      '矯正治療で抜歯を提案された方へ。健康な歯を残せる可能性を、抜歯前に一度確認します。',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://fshika.com' },
    { '@type': 'ListItem', position: 2, name: '矯正歯科', item: 'https://fshika.com/orthodontics' },
    {
      '@type': 'ListItem',
      position: 3,
      name: '歯を抜かない矯正治療',
      item: 'https://fshika.com/orthodontics/non-extraction',
    },
  ],
};

const concerns = {
  young: [
    'まだ成長途中なのに、永久歯を抜くと言われた',
    '小臼歯を抜く必要があると言われた',
    '健康な歯をできるだけ残したい',
    '顎の成長を利用した方法がないか知りたい',
    '将来の顔立ちや噛み合わせまで考えてほしい',
  ],
  adult: [
    '矯正相談で2本または4本の抜歯を提案された',
    '非抜歯では口元が出ると言われた',
    '抜歯によって口元が下がりすぎないか不安',
    'マウスピース矯正では難しいと言われた',
    'ワイヤーとマウスピースの両方を比較したい',
  ],
};

const treatmentMethods = [
  {
    title: '成長と歯の生え変わりを利用する',
    image: '/images/pages/orthodontics/non-extraction/front-teeth-position.png',
    alt: '前歯を前へ出す方法と歯列全体を整える方法の違いを示す図',
    body:
      '成長期のお子さまでは、顎の成長や永久歯の生え変わりを確認しながら、歯が並ぶための環境を整えます。大切なのは、早く装置を付けることではなく、早く状態を知ることです。',
    points: ['顎の成長', '永久歯の生え変わり', '前歯の位置', '口元のバランス'],
  },
  {
    title: '奥歯を移動させてスペースをつくる',
    image: '/images/pages/orthodontics/non-extraction/molar-distalization.png',
    alt: '奥歯を後方へ動かしてスペースをつくる模式図',
    body:
      '奥歯の位置を段階的に調整し、前方の歯が並ぶためのスペースを確保できる場合があります。前歯だけに負担をかけず、歯列全体でスペースを考えます。',
    points: ['奥歯の位置', '歯列全体の形', '前歯の負担軽減', 'アンカースクリュー併用'],
  },
  {
    title: '歯列の幅と上下の前後関係を整える',
    image: '/images/pages/orthodontics/non-extraction/arch-width-bite.png',
    alt: '歯列幅と上下の前後関係を整える模式図',
    body:
      '歯を支える骨や歯ぐきの状態を確認しながら、歯列の幅、歯列全体の形、上下の前後関係、噛み合わせの深さを整えます。',
    points: ['歯列幅', '上下の前後関係', '噛み合わせの深さ', '顎の位置'],
  },
  {
    title: '欠損部のスペースと噛み合わせを利用する',
    image: '/images/pages/orthodontics/non-extraction/missing-space-movement.png',
    alt: '歯を失った部分のスペースへ周囲の歯を移動させる模式図',
    body:
      'すでに歯を失っている部分がある場合、そのスペースへ周囲の歯を移動させ、矯正治療に利用できることがあります。治療後にどこで噛むのかまで考えて計画します。',
    points: ['欠損部のスペース', '奥歯の接触', '歯の高さ', '噛み合わせの安定'],
  },
];

const deviceOptions = [
  {
    title: '特殊なワイヤーとブラケット',
    titleLines: ['特殊なワイヤーと', 'ブラケット'],
    lead: 'ただ並べるのではなく、口元に調和する位置へ。',
    body:
      '前歯の位置と傾き、歯の高さ、根の向き、奥歯の前後的位置、噛み合わせの深さを細かく調整します。前歯を無理に前方へ押し出してスペースをつくる方法に偏りません。',
    points: ['前歯の位置と傾き', '歯の高さ', '奥歯の前後的位置', '上下の歯の接触関係'],
  },
  {
    title: 'マウスピース＋付加装置・アンカースクリュー',
    titleLines: ['マウスピース＋', '付加装置・アンカースクリュー'],
    lead: 'マウスピースだけに頼らない、非抜歯矯正。',
    body:
      '透明なマウスピースに、アタッチメント、顎間ゴム、付加装置、歯科矯正用アンカースクリューなどを組み合わせ、歯列全体の移動を計画します。',
    points: ['歯列幅と形の調整', '奥歯の位置調整', '前歯の位置コントロール', '欠損部への移動'],
  },
];

const steps = [
  {
    title: '矯正相談',
    body: '現在のお悩みや、他院で受けた説明を確認します。他院のレントゲン、口腔内写真、治療計画書などをお持ちの場合はご持参ください。',
  },
  {
    title: '精密検査・診断',
    body: '顔貌、口元、レントゲン、口腔内スキャン、歯列の幅、噛み合わせ、顎の位置、歯を支える骨と歯ぐきなどを確認します。',
  },
  {
    title: '治療方法のご説明',
    body: 'ワイヤー矯正、マウスピース矯正、付加装置、アンカースクリューをどのように組み合わせるかをご説明します。その場で治療を始める必要はありません。',
  },
];

const faqItems = [
  {
    q: '20代前半では、本当に健康な歯を抜きませんか？',
    a: '当院では、20代前半までの方に対し、歯を並べるスペースをつくる目的で健康な永久歯を抜く矯正治療は行いません。診断の結果、非抜歯で無理なく治療することが難しい場合は、20代後半以降に改めて治療を検討することをご提案します。',
  },
  {
    q: '大人でも非抜歯で治療できますか？',
    a: '大人でも、歯列の幅、奥歯の位置、上下の前後関係、欠損部のスペースなどを利用し、非抜歯で治療できる場合があります。歯を支える骨や歯ぐきの状態も含めて診断します。',
  },
  {
    q: '非抜歯では口元が出ませんか？',
    a: '非抜歯だから必ず口元が出るわけではありません。口元の変化は、前歯をどの位置に仕上げるか、どこからスペースを確保するかによって変わります。',
  },
  {
    q: 'マウスピースでも難しい歯並びを治療できますか？',
    a: 'マウスピース単独では難しい場合でも、付加装置、顎間ゴム、アンカースクリューなどを併用することで対応できる場合があります。症例によってはワイヤー矯正をご提案します。',
  },
  {
    q: '他院で抜歯を提案されています。相談だけでもよいですか？',
    a: '相談だけでも構いません。他院の診断を否定することが目的ではなく、健康な歯を残せる別の治療方法があるかを確認します。',
  },
];

const heroHighlights = [
  {
    no: '01',
    label: '健康な歯を残す',
    body: '歯を抜く前に、歯列全体でスペースを検討します。',
  },
  {
    no: '02',
    label: '方法を決めつけない',
    body: 'ワイヤーとマウスピースの両方から必要な方法を選びます。',
  },
  {
    no: '03',
    label: '噛み合わせまで診る',
    body: '前歯だけでなく、奥歯・顎の位置まで確認します。',
  },
];

function HeroButton({
  href,
  variant = 'primary',
  children,
}: {
  href: string;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}) {
  const isExternal = href.startsWith('http');
  const styles =
    variant === 'primary'
      ? 'bg-[#0a8a85] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#066b67]'
      : 'border border-[#5A4D41] bg-white text-[#5A4D41] hover:-translate-y-0.5 hover:bg-[#FDFBF7]';

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full px-6 text-sm font-bold tracking-wide transition md:w-auto md:min-w-[220px] ${styles}`}
    >
      {children}
    </a>
  );
}

function ConsultationCta({
  eyebrow,
  title,
  body,
  note,
  className = '',
}: {
  eyebrow: string;
  title: string;
  body: string;
  note: string;
  className?: string;
}) {
  return (
    <section className={`px-5 py-12 ${className}`}>
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-[#E6E3DC] bg-white shadow-[0_18px_54px_rgba(90,77,65,0.07)]">
        <div className="relative grid gap-8 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.28em] text-[#0a8a85]">
              {eyebrow}
            </p>
            <h2 className="whitespace-pre-line font-serif text-3xl font-light leading-[1.55] text-[#5A4D41] md:text-4xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-[2] text-[#6B6B68] md:text-base">
              {body}
            </p>
          </div>
          <div className="relative rounded-[24px] border border-[#E6E3DC] bg-[#FDFBF7] p-5 md:p-6">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <HeroButton href={WEB_RESERVATION_URL}>
                <CalendarDays className="h-5 w-5" />
                ネット予約をする
                <ArrowRight className="h-4 w-4" />
              </HeroButton>
              <HeroButton href="tel:03-6204-2876" variant="secondary">
                <Phone className="h-5 w-5 text-[#0a8a85]" />
                電話で相談
              </HeroButton>
            </div>
            <p className="mt-4 text-center text-xs leading-relaxed text-[#8D8070]">
              {note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <div className="mb-4 flex items-center justify-center gap-4">
        <span className="h-px w-10 bg-[#C5A572]" />
        <p className="text-[11px] font-semibold tracking-[0.28em] text-[#0a8a85]">{eyebrow}</p>
        <span className="h-px w-10 bg-[#C5A572]" />
      </div>
      <h2 className="whitespace-pre-line font-serif text-3xl font-light leading-[1.55] text-[#5A4D41] md:text-4xl">
        {title}
      </h2>
      {body && <p className="mt-5 text-sm leading-[2] text-[#8D8070] md:text-base">{body}</p>}
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-[1.9] text-[#5A4D41] md:text-base">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#0a8a85]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function NonExtractionOrthodonticsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAFAF7] text-[#2C2C2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main>
        <div className="border-b border-[#E6E3DC] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <nav className="flex flex-wrap items-center gap-2 text-sm text-[#8D8070]" aria-label="Breadcrumb">
              <Link href="/" className="transition hover:text-[#0a8a85]">
                ホーム
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/orthodontics" className="transition hover:text-[#0a8a85]">
                矯正歯科
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="font-medium text-[#0a8a85]">歯を抜かない矯正治療</span>
            </nav>
          </div>
        </div>

        <section className="relative isolate overflow-hidden bg-[#FDFBF7] px-5 py-12 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DDEEEB] bg-[#EEF8F7] px-4 py-2 text-xs font-bold tracking-[0.16em] text-[#0a8a85] shadow-sm">
                <ShieldCheck className="h-4 w-4" />
                抜歯前の矯正相談・セカンドオピニオン
              </div>
              <p className="mb-4 font-serif text-sm tracking-[0.28em] text-[#0a8a85]">
                NON-EXTRACTION ORTHODONTICS
              </p>
              <h1 className="font-serif text-[3rem] font-light leading-[1.24] text-[#4F473E] md:text-7xl">
                その歯、
                <br />
                <span className="text-[#0a8a85]">抜く前に。</span>
              </h1>
              <p className="mt-7 max-w-xl font-serif text-2xl font-light leading-[1.7] text-[#4F473E] md:text-3xl">
                子どもも大人も、
                <br />
                歯を残せる可能性を
                <br />
                もう一度考えませんか。
              </p>
              <p className="mt-7 max-w-2xl text-sm leading-[2.1] text-[#6B6B68] md:text-base">
                Fデンタルオフィスでは、歯並びだけを見るのではなく、前歯の位置、口元、歯列の幅、奥歯の位置、噛み合わせ、顎の位置まで詳しく確認します。
                ワイヤー矯正とマウスピース矯正の両方から、できる限り健康な歯を残せる治療方法を検討します。
              </p>
              <div className="mt-8 flex flex-col gap-3 md:flex-row md:flex-wrap">
                <HeroButton href={WEB_RESERVATION_URL}>
                  <CalendarDays className="h-5 w-5" />
                  ネット予約をする
                  <ArrowRight className="h-4 w-4" />
                </HeroButton>
                <HeroButton href="tel:03-6204-2876" variant="secondary">
                  <Phone className="h-5 w-5 text-[#0a8a85]" />
                  電話で相談
                </HeroButton>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-[#8D8070]">
                相談だけでも構いません。他院のレントゲンや治療計画書もお持ちいただけます。
              </p>
            </div>

            <div className="rounded-[28px] border border-[#E6E3DC] bg-white p-3 shadow-sm ring-1 ring-[#E6E3DC]/60 md:p-4">
              <div className="overflow-hidden rounded-[22px] bg-[#FAFAF7] text-[#5A4D41]">
                <div className="relative border-b border-[#D9D0C1] bg-white p-4">
                  <Image
                    src="/images/pages/orthodontics/non-extraction/front-teeth-position.png"
                    alt="抜歯前に歯列全体を確認する模式図"
                    width={1672}
                    height={941}
                    priority
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="aspect-[16/9] w-full rounded-[20px] object-cover"
                  />
                  <div className="absolute left-7 top-7 rounded-full border border-[#DDEEEB] bg-white/90 px-4 py-2 text-xs font-bold tracking-[0.18em] text-[#0a8a85] shadow-sm backdrop-blur">
                    PRE-EXTRACTION REVIEW
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="font-serif text-3xl font-light leading-[1.5] text-[#4F473E] md:text-4xl">
                    20代前半までは、
                    <br />
                    健康な永久歯を
                    <br />
                    抜かない。
                  </p>
                  <div className="mt-5 h-px w-16 bg-[#C5A572]" />
                  <p className="mt-5 text-sm leading-[2] text-[#6B6B68]">
                    それが、当院の矯正治療における方針です。
                  </p>
                </div>
              </div>
              <div className="mt-5 border-t border-[#E6E3DC] pt-5">
                <p className="mb-4 text-[11px] font-semibold tracking-[0.28em] text-[#0a8a85]">
                  TREATMENT VIEW
                </p>
                <div className="grid gap-0 divide-y divide-[#E6E3DC] md:grid-cols-3 md:divide-x md:divide-y-0">
                  {heroHighlights.map((item) => (
                    <div key={item.no} className="py-4 first:pt-0 md:px-5 md:py-0 md:first:pl-0 md:last:pr-0">
                      <p className="font-serif text-2xl font-light leading-none text-[#C5A572]">
                        {item.no}
                      </p>
                      <p className="mt-3 font-serif text-xl font-light leading-[1.55] text-[#5A4D41]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-xs leading-[1.9] text-[#8D8070]">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="WORRIES"
              title="このようなお悩みはありませんか？"
              body="一つでも当てはまる場合は、歯を抜く前に一度ご相談ください。"
            />
            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-[28px] border border-[#E6E3DC] bg-[#FDFBF7] p-6 shadow-[0_18px_54px_rgba(90,77,65,0.06)] md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF8F7] text-[#0a8a85]">
                    <Users className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-2xl font-light text-[#5A4D41]">子ども・若年者の方</h3>
                </div>
                <CheckList items={concerns.young} />
              </article>
              <article className="rounded-[28px] border border-[#E6E3DC] bg-white p-6 shadow-[0_18px_54px_rgba(90,77,65,0.06)] md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7F3E8] text-[#C5A572]">
                    <FileText className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-2xl font-light text-[#5A4D41]">大人の方</h3>
                </div>
                <CheckList items={concerns.adult} />
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#FAFAF7] px-5 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-[28px] border border-[#E6E3DC] bg-white shadow-[0_18px_54px_rgba(90,77,65,0.07)]">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                <div className="border-b border-[#E6E3DC] bg-[#FDFBF7] p-7 md:p-10 lg:border-b-0 lg:border-r">
                  <p className="mb-5 text-[11px] font-semibold tracking-[0.28em] text-[#0a8a85]">POLICY</p>
                  <h2 className="font-serif text-3xl font-light leading-[1.6] text-[#5A4D41] md:text-5xl">
                    20代前半までは、
                    <br />
                    健康な永久歯を抜かない。
                  </h2>
                  <div className="mt-7 h-px w-20 bg-[#C5A572]" />
                  <p className="mt-6 text-sm leading-[2] text-[#6B6B68]">
                    方針は強く、診断は丁寧に。歯を残す選択肢が本当にないか、検査結果をもとに見直します。
                  </p>
                </div>
                <div className="bg-white p-6 md:p-10">
                  <div className="space-y-5 text-sm leading-[2.1] text-[#5A4D41] md:text-base">
                    <p>
                      当院では、20代前半までの方に対して、歯を並べるスペースをつくる目的で、小臼歯などの健康な永久歯を抜く矯正治療は行いません。
                    </p>
                    <p>
                      顎や歯列の成長、上下の前後関係、歯列の幅、奥歯の位置、噛み合わせなどを確認し、特殊なワイヤーとブラケット、マウスピース、付加装置、歯科矯正用アンカースクリューを組み合わせながら、歯を抜かずに並べる方法をご提案します。
                    </p>
                    <p>
                      20代後半以降も最初から抜歯を前提にするのではなく、あらためてお口の状態を確認し、非抜歯治療を含めて治療方法を検討します。
                    </p>
                  </div>
                  <p className="mt-7 rounded-2xl border border-[#E7D29C] bg-[#FFF8E6] px-5 py-4 text-xs leading-[1.9] text-[#7A6337] md:text-sm">
                    ※むし歯や歯周病などで保存が難しい歯、親知らずなど、歯を並べるスペースの確保以外を目的とした抜歯は対象外です。診断結果により、治療方針は患者さまごとに異なります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="METHOD"
              title="歯を抜かずに並べるための4つの方法"
              body="単に前歯を外へ押し出すのではなく、歯列全体、噛み合わせ、顎の位置まで含めてスペースを検討します。"
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {treatmentMethods.map((method, index) => (
                <article
                  key={method.title}
                  className="group overflow-hidden rounded-[28px] border border-[#E6E3DC] bg-white shadow-[0_18px_54px_rgba(90,77,65,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_58px_rgba(90,77,65,0.10)]"
                >
                  <div className="bg-[#FAFAF7] p-3">
                    <Image
                      src={method.image}
                      alt={method.alt}
                      width={1672}
                      height={941}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      loading="lazy"
                      className="aspect-[16/9] w-full rounded-[22px] object-cover transition duration-500 group-hover:scale-[1.018]"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#DDEEEB] bg-[#EEF8F7] font-serif text-sm text-[#0a8a85]">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-serif text-2xl font-light leading-[1.55] text-[#5A4D41]">
                      {method.title}
                    </h3>
                    <p className="mt-4 text-sm leading-[2] text-[#8D8070]">{method.body}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {method.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-[#D9D0C1] bg-[#FDFBF7] px-3 py-1.5 text-xs font-semibold text-[#0a8a85]"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ConsultationCta
          eyebrow="SECOND OPINION"
          title={'抜歯を決める前に、\n一度ご相談ください'}
          body="他院の治療計画書やレントゲンをお持ちの場合は、相談時に確認できます。治療を始めるかどうかは、診断内容を理解してから決めていただけます。"
          note="相談だけでも構いません。お急ぎの場合はお電話ください。"
          className="bg-[#FAFAF7]"
        />

        <section className="bg-white px-5 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="DEVICE SELECTION"
              title={'ワイヤーか、マウスピースか。\nではなく、歯を残すために何が必要か。'}
              body="一つの装置だけに限定せず、必要な歯の移動や患者さまの状態に合わせて治療方法を選択します。"
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {deviceOptions.map((option, index) => (
                <article key={option.title} className="rounded-[28px] border border-[#E6E3DC] bg-[#FDFBF7] p-6 shadow-[0_18px_54px_rgba(90,77,65,0.06)] md:p-8">
                  <div className="mb-7 flex items-center justify-between gap-4 border-b border-[#E6E3DC] pb-5">
                    <span className="font-serif text-3xl font-light leading-none text-[#C5A572]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] font-semibold tracking-[0.28em] text-[#0a8a85]">
                      DEVICE
                    </span>
                  </div>
                  <h3 className="font-serif text-[1.7rem] font-light leading-[1.55] text-[#5A4D41] md:text-3xl">
                    {option.titleLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                  <p className="mt-3 font-serif text-xl leading-[1.7] text-[#0a8a85]">{option.lead}</p>
                  <p className="mt-5 text-sm leading-[2] text-[#8D8070]">{option.body}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {option.points.map((point) => (
                      <div key={point} className="rounded-2xl border border-[#D9D0C1] bg-white px-4 py-3 text-sm font-semibold text-[#5A4D41]">
                        {point}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-[28px] border border-[#DDEEEB] bg-[#EEF8F7] p-6 text-center shadow-[0_18px_54px_rgba(90,77,65,0.06)] md:p-8">
              <p className="font-serif text-2xl font-light leading-[1.6] text-[#5A4D41]">
                歯を抜かないために、前歯を前へ出すのではありません。
              </p>
              <p className="mt-4 text-sm leading-[2] text-[#6B6B68]">
                口元のバランスに合わせて、より自然な位置へ歯を並べることを目指します。
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#FDFBF7] px-5 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <SectionHeading eyebrow="FLOW" title="相談から治療まで" />
            <div className="grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <article key={step.title} className="rounded-[28px] border border-[#E6E3DC] bg-white p-6 shadow-[0_18px_54px_rgba(90,77,65,0.06)]">
                  <p className="mb-4 font-serif text-4xl font-light text-[#0a8a85]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <div className="mb-5 h-px w-12 bg-[#C5A572]" />
                  <h3 className="font-serif text-xl font-light leading-[1.55] text-[#5A4D41]">{step.title}</h3>
                  <p className="mt-4 text-sm leading-[2] text-[#8D8070]">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FaqSection
          title="よくある質問"
          subtitle="抜歯を提案された方からよくいただく質問をまとめました。"
          items={faqItems}
          className="bg-white"
        />

        <section className="bg-[#FDFBF7] px-5 py-16 md:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.28em] text-[#0a8a85]">MESSAGE</p>
            <h2 className="font-serif text-3xl font-light leading-[1.6] text-[#5A4D41] md:text-5xl">
              私たちが目指すのは、
              <br />
              単に「抜かないこと」ではありません。
            </h2>
            <div className="mx-auto mt-7 max-w-3xl space-y-4 text-sm leading-[2.1] text-[#8D8070] md:text-base">
              <p>健康な永久歯を、できる限り残すこと。</p>
              <p>前歯を無理に外側へ押し出さず、口元のバランスに合わせること。</p>
              <p>歯並びだけでなく、噛み合わせと顎の位置まで整えること。</p>
            </div>
            <div className="mx-auto mt-8 max-w-2xl rounded-[28px] border border-[#E6E3DC] bg-white p-6 shadow-[0_18px_54px_rgba(90,77,65,0.06)]">
              <p className="font-serif text-2xl font-light leading-[1.7] text-[#0a8a85]">
                20代前半までは、健康な永久歯を抜かない。
              </p>
              <p className="mt-4 text-sm leading-[2] text-[#8D8070]">
                抜歯を決める前に、ご自身やお子さまに別の選択肢がないか、一度確認してみませんか。
              </p>
            </div>
          </div>
        </section>

        <ConsultationCta
          eyebrow="RESERVATION"
          title={'ネット予約をする'}
          body="相談だけでも構いません。他院の資料をお持ちいただけます。診断結果に応じて、非抜歯治療を含めた選択肢をご説明します。"
          note="ネット予約は24時間受付しています。お電話でのご相談も可能です。"
          className="bg-white"
        />

        <RelatedPagesSection
          title="矯正治療の関連ページ"
          description="ワイヤー矯正、マウスピース矯正、費用や期間もあわせて確認できます。"
          items={orthodonticsRelatedPages}
          currentPath="/orthodontics/non-extraction"
        />

        <section className="bg-white px-4 pt-2 pb-16">
          <AuthorBio />
        </section>
      </main>

      <Footer />
    </div>
  );
}
