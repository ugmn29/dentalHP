"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Phone, Calendar, ChevronDown, ChevronRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ClinicHoursTable } from '@/components/ClinicHoursTable';
import { PageImage } from '@/components/PageImage';
import { WEB_RESERVATION_URL } from '@/lib/reservation';

// 診療メニュー（SEO内部リンク維持用）
const menuItems = [
  { name: "こども矯正", link: "/kidsortho", iconImage: "/images/icons-transparent/05_矯正歯科.png" },
  { name: "0歳からのこども歯科・予防", link: "/oral-education", iconImage: "/images/icons-transparent/12_小児歯科.png" },
  { name: "セラミック治療", link: "/ceramic", iconImage: "/images/icons-transparent/14_審美歯科.png" },
  { name: "マウスピース矯正", link: "/mouthpiece", iconImage: "/images/icons-transparent/06_マウスピース矯正.png" },
  { name: "ワイヤー矯正", link: "/orthodontics", iconImage: "/images/icons-transparent/05_矯正歯科.png" },
  { name: "インプラント", link: "/implant", iconImage: "/images/icons-transparent/07_インプラント.png" },
  { name: "ホワイトニング", link: "/whitening", iconImage: "/images/icons-transparent/15_ホワイトニング.png" },
  { name: "予防歯科", link: "/preventive", iconImage: "/images/icons-transparent/13_予防歯科.png" },
  { name: "口臭治療", link: "/general/bad-breath", iconImage: "/images/icons-transparent/10_口腔外科.png" },
  { name: "むしば治療", link: "/cavity", iconImage: "/images/icons-transparent/01_虫歯治療.png" },
  { name: "精密根管治療", link: "/root-canal", iconImage: "/images/icons-transparent/03_根管治療.png" },
  { name: "歯の外傷・急患", link: "/concerns/trauma", iconImage: "/images/icons-transparent/10_口腔外科.png" },
  { name: "顎関節症", link: "/concerns/tmj", iconImage: "/images/icons-transparent/11_噛み合わせ.png" },
];


// ===== Homepage-only color tokens (does not affect other pages) =====
const ACCENT = '#0abab5';        // Bright Tiffany blue (decorative use: text/icons/lines)
const ACCENT_DARK = '#0a8a85';   // Button/section background (white text contrast safe)
const ACCENT_DEEP = '#066b67';   // Hover/deeper (button hover state)
const ACCENT_BG = '#F5F2EE';     // Warm beige (section panel bg, matches Nordic palette)
const PAGE_BG = '#FAFAF7';       // warm off-white
const SURFACE = '#FFFFFF';
const TEXT = '#2C2C2A';          // primary text (not pure black)
const TEXT_MUTED = '#6B6B68';    // secondary text
const LINE = '#E6E3DC';          // hairline divider

const approachItems = [
  {
    title: "虫歯になりやすい。",
    description: "何度治しても、繰り返してしまう。",
    image: "/images/pages/homepage/approach-cavity.webp",
    alt: "虫歯になりやすい歯のイラスト",
  },
  {
    title: "歯並びが悪い。",
    description: "矯正しても、いつの間にか戻ってしまう。",
    image: "/images/pages/homepage/approach-alignment.webp",
    alt: "歯並びが悪い状態のイラスト",
  },
  {
    title: "歯が変色してきた。",
    description: "ホワイトニングしても、また色が戻ってしまう。",
    image: "/images/pages/homepage/approach-discoloration.webp",
    alt: "歯の変色を示すイラスト",
  },
] as const;

const accessRouteImages = [
  {
    src: "/images/pages/homepage/access-route/route-step-1.webp",
    alt: "豊洲プライムスクエアへ進みます",
    height: 1000,
  },
  {
    src: "/images/pages/homepage/access-route/route-step-2.webp",
    alt: "VOLVO横を進み、入口へ向かいます",
    height: 1065,
  },
  {
    src: "/images/pages/homepage/access-route/route-step-3.webp",
    alt: "こちらの入口から館内へ入ります",
    height: 985,
  },
  {
    src: "/images/pages/homepage/access-route/route-step-4.webp",
    alt: "館内に入り、そのまま通路を進みます",
    height: 1035,
  },
  {
    src: "/images/pages/homepage/access-route/route-step-5.webp",
    alt: "セブン-イレブンの右奥に当院があります",
    height: 1060,
  },
] as const;

const homepageImages = {
  director: "/images/pages/homepage/豊洲-歯科-院長-福永真大.webp",
  rootCause: "/images/pages/homepage/豊洲-歯科-原因から考える-根本治療.webp",
  preservation: "/images/pages/homepage/豊洲-歯科-削らない-保存治療.webp",
  explanation: "/images/pages/homepage/豊洲-歯科-伝わる-治療説明.webp",
  kidsAlignment: "/images/pages/homepage/豊洲-小児歯科-こども矯正-歯並び-口腔内チェック.webp",
  adultPrecision: "/images/pages/homepage/豊洲-歯科-自分の歯を大切に-精密治療.webp",
} as const;

const heroImages = {
  director: "/images/pages/homepage/hero-square/豊洲-歯科-ヒーロー-院長-福永真大-正方形.webp",
  examRoom: "/images/pages/homepage/hero-square/豊洲-歯科-ヒーロー-診療室-レントゲン説明-正方形.webp",
  hallway: "/images/pages/homepage/hero-square/豊洲-歯科-ヒーロー-診療室廊下-正方形.webp",
  receptionMonitor: "/images/pages/homepage/hero-square/豊洲-歯科-ヒーロー-受付モニター-正方形.webp",
  preservation: "/images/pages/homepage/hero-square/豊洲-歯科-ヒーロー-削らない-保存治療-正方形.webp",
  kidsCheck: "/images/pages/homepage/hero-square/豊洲-小児歯科-ヒーロー-こども矯正-口腔内チェック-正方形.webp",
} as const;

const heroSlides = [
  {
    src: heroImages.director,
    alt: "豊洲の歯科 Fデンタルオフィス 豊洲プライムスクエア院 院長 福永真大",
    position: "50% 50%",
  },
  {
    src: heroImages.examRoom,
    alt: "豊洲の歯科 Fデンタルオフィスの診療室とレントゲン説明設備",
    position: "50% 50%",
  },
  {
    src: heroImages.hallway,
    alt: "豊洲プライムスクエア院の清潔感ある診療室前通路",
    position: "50% 50%",
  },
  {
    src: heroImages.receptionMonitor,
    alt: "Fデンタルオフィス 豊洲プライムスクエア院の受付モニターと院内",
    position: "50% 50%",
  },
  {
    src: heroImages.preservation,
    alt: "豊洲で削らない保存治療を行う歯科医師",
    position: "50% 50%",
  },
  {
    src: heroImages.kidsCheck,
    alt: "豊洲の小児歯科でこどもの口腔内を確認する歯科医師",
    position: "50% 50%",
  },
] as const;

export default function Home() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  // 症例3点（厳選）
  const caseStudies = [
    {
      id: 1,
      title: "反対咬合の改善",
      beforeId: "hanntaikougou-before",
      afterId: "hanntaikougou-after",
      patient: "小児",
      description: "早期の小児矯正により、反対咬合を改善しました。",
    },
    {
      id: 4,
      title: "前歯のセラミック",
      beforeId: "ceramic-before",
      afterId: "ceramic-after",
      patient: "30代 女性",
      description: "前歯をセラミックで修復し、自然で美しい見た目を取り戻しました。",
    },
    {
      id: 5,
      title: "インプラント治療",
      beforeId: "implant-before",
      afterId: "implant-after",
      patient: "50代 男性",
      description: "失った歯をインプラントで復元し、しっかり噛めるようになりました。",
    },
  ];

  // 院内設備（設備・説明環境を中心に掲載）
  const facilityImages = [
    { imageId: "facility3", title: "正確な診断を可能にする歯科用CT" },
    { imageId: "feature5", title: "削らない保存治療を支える拡大視野" },
    { imageId: "feature1", title: "お口の状態を共有する3Dスキャナー・口腔内カメラ" },
    { imageId: "feature3", title: "お子様にも配慮した天井テレビ付き診療室" },
  ];

  // 3つの約束（旧6特徴のジグザグ画像+テキストデザインを踏襲）
  const promises = [
    {
      no: "01",
      label: "Root-Cause Approach",
      title: "原因から考える",
      highlight: "根本解決",
      body: "症状ではなく、その奥にある原因に目を向けます。呼吸・姿勢・食習慣・噛み癖など、歯並びや噛み合わせの根本原因にアプローチする、豊洲の歯科医院です。",
      image: homepageImages.rootCause,
      imageAlt: "豊洲の歯科で原因から考える根本治療を説明する歯科医師",
    },
    {
      no: "02",
      label: "Minimally Invasive",
      title: "削らない保存治療",
      highlight: "精密診断",
      body: "拡大鏡・マイクロスコープ・3Dスキャナー・歯科用CTで精密診断。豊洲の歯医者として、できる限り削らない・抜かない治療を実現します。",
      image: homepageImages.preservation,
      imageAlt: "豊洲で削らない保存治療を行う歯科医師",
    },
    {
      no: "03",
      label: "Transparent Explanation",
      title: "伝わる治療説明",
      highlight: "見える治療",
      body: "口腔内写真・3Dスキャナー・ペン型カメラで、お口の状態を一緒に確認。ご納得いただいてから治療を開始する、豊洲の歯科医院の方針です。",
      image: homepageImages.explanation,
      imageAlt: "豊洲の歯科で口腔内カメラを使った伝わる治療説明",
    },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-[#0F6E56] selection:text-white" style={{ background: PAGE_BG, color: TEXT }}>
      <Header />

      <main>
        {/* ============ Section 1: Hero（写真フェード切り替え） ============ */}
        <section
          className="overflow-hidden bg-[#FDFBF7] px-3 py-4 md:px-8 md:py-10"
          aria-label="豊洲の歯医者 ヒーローセクション"
        >
          <div className="mx-auto max-w-6xl">
            <div className="relative aspect-square overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-[#E6E3DC] sm:aspect-[16/10] lg:aspect-[16/7]">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.src}
                  className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                  style={{ opacity: activeHeroSlide === index ? 1 : 0 }}
                  aria-hidden={activeHeroSlide !== index}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1024px) 1152px, 100vw"
                    className="object-cover"
                    style={{ objectPosition: slide.position }}
                  />
                </div>
              ))}
            </div>

            <div className="mx-auto max-w-3xl px-1 pb-6 pt-7 text-center md:pb-8 md:pt-9">
              <p className="mb-4 text-[11px] font-bold tracking-[0.32em]" style={{ color: ACCENT_DARK }}>
                F DENTAL OFFICE TOYOSU
              </p>
              <h1 className="font-serif text-3xl font-medium leading-[1.45] text-[#4F473E] whitespace-nowrap sm:text-5xl md:text-6xl">
                豊洲の歯医者
              </h1>
              <p className="mt-4">
                <span className="inline-flex max-w-full items-center justify-center whitespace-nowrap rounded-full border border-[#B9DFDC] bg-[#EEF8F7] px-6 py-2.5 text-base font-bold tracking-[0.08em] text-[#0a8a85] shadow-sm md:px-8 md:py-3 md:text-lg">
                  豊洲プライムスクエア１階
                </span>
              </p>
              <p className="mt-5 font-serif text-xl leading-[1.85] text-[#4F473E] md:text-3xl">
                未来の美しいお顔を、<br />
                ここから<span style={{ color: ACCENT_DARK }}>育てる</span>。
              </p>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-[2] md:text-base" style={{ color: TEXT_MUTED }}>
                豊洲駅徒歩２分。豊洲で歯医者をお探しなら、<br className="hidden sm:block" />
                豊洲プライムスクエア１階にある、土日診療している<br className="hidden sm:block" />
                Fデンタルオフィスまでご相談ください。<br className="hidden sm:block" />
                0歳からの小児歯科・こども矯正から、<br className="sm:hidden" />
                大人の保存治療・審美治療まで。<br className="sm:hidden" />
                精密診断とわかりやすい説明を大切にしています。
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2.5" aria-label="医院の特徴">
                {['豊洲駅徒歩2分', '土日診療', '0歳から対応'].map((item) => (
                  <span
                    key={item}
                    className="inline-flex min-h-9 items-center rounded-full px-4 text-xs font-bold tracking-wide md:min-h-10 md:px-5 md:text-sm"
                    style={{ background: '#EEF8F7', color: ACCENT_DARK }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:flex sm:justify-center">
                <a
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-8 text-sm font-bold tracking-widest text-white shadow-sm transition hover:-translate-y-0.5"
                  style={{ background: ACCENT_DARK }}
                  href={WEB_RESERVATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar size={18} />
                  <span>WEB予約はこちら</span>
                </a>
                <a
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border bg-white px-8 text-sm font-bold tracking-widest transition hover:-translate-y-0.5"
                  style={{ borderColor: TEXT, color: TEXT }}
                  href="tel:03-6204-2876"
                >
                  <Phone size={18} />
                  <span>03-6204-2876</span>
                </a>
              </div>

              <div className="mt-7 flex items-center justify-center gap-2" aria-hidden="true">
                {heroSlides.map((slide, index) => (
	                  <span
	                    key={`${slide.src}-indicator`}
	                    className="h-1.5 w-8 rounded-full bg-[#0a8a85]/25"
	                    style={{ opacity: activeHeroSlide === index ? 0.9 : 0.45 }}
	                  />
	                ))}
	              </div>
	            </div>
	          </div>
	        </section>

        {/* ============ Section 2: 建物・診療時間（フル） ============ */}
        <section className="py-16 md:py-20" style={{ background: SURFACE, borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}>
          <div className="max-w-5xl mx-auto px-5">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 lg:items-start">
              <div className="w-full flex flex-col items-center sm:items-start text-center sm:text-left">
                <div
                  className="relative mb-5 aspect-[4/3] w-full max-w-[320px] overflow-hidden rounded-2xl bg-white"
                  style={{ border: `1px solid ${LINE}` }}
                >
                  <Image
                    src="/images/building.avif"
                    alt="豊洲プライムスクエア"
                    fill
                    sizes="(min-width: 1024px) 320px, min(320px, calc(100vw - 2.5rem))"
                    className="object-contain object-center p-2"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2" style={{ color: TEXT }}>豊洲プライムスクエア1階</h3>
                <p className="text-sm flex items-center gap-2" style={{ color: TEXT_MUTED }}>
                  <span style={{ color: ACCENT_DARK }}>●</span>
                  豊洲駅 6a出口 徒歩2分
                </p>
              </div>

              <div className="order-3 w-full lg:order-2">
                <ClinicHoursTable />
              </div>

              <div className="order-2 lg:order-3 lg:col-span-2">
                <div className="mb-5 text-center sm:text-left">
                  <p className="text-[11px] tracking-[0.3em] mb-2" style={{ color: ACCENT_DARK }}>ACCESS GUIDE</p>
                  <h3 className="font-serif text-2xl md:text-3xl font-light" style={{ color: TEXT }}>
                    写真で見るアクセス
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
                    豊洲プライムスクエア入口から院内までの位置を、写真でご確認いただけます。
                  </p>
                </div>

                <div className="w-full md:overflow-x-auto md:pb-3" style={{ scrollbarWidth: 'none' }}>
                  <div className="grid gap-4 md:flex md:snap-x md:snap-mandatory md:items-start">
                    {accessRouteImages.map((image) => (
                      <figure
                        key={image.src}
                        className="w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 md:w-[390px] md:shrink-0 md:snap-center"
                        style={{ '--tw-ring-color': LINE } as React.CSSProperties}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={1122}
                          height={image.height}
                          sizes="(min-width: 768px) 390px, calc(100vw - 2.5rem)"
                          className="block h-auto w-full"
                          loading="lazy"
                        />
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ Section 2.5: Narrative Bridge（理念→根本治療への接続） ============ */}
        {false && (
        <section className="py-24 md:py-32 px-5" style={{ background: PAGE_BG }}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.3em] mb-6" style={{ color: TEXT_MUTED }}>OUR APPROACH</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.5] font-light mb-14 md:mb-16" style={{ color: TEXT, letterSpacing: '-0.01em' }}>
              美しいお顔を、<br className="sm:hidden" />
              <span style={{ color: ACCENT_DARK, fontStyle: 'italic' }}>どう育てる</span>のか。
            </h2>

            <div className="grid gap-9 md:grid-cols-3 md:gap-6 mb-14 md:mb-16" style={{ color: TEXT }}>
              {approachItems.map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center">
                  <div className="mb-4 h-32 w-32 md:h-40 md:w-40 overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-[#E6E3DC]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <p className="font-serif text-lg md:text-xl leading-[1.8]">{item.title}</p>
                  <p className="text-sm md:text-[15px] mt-1 leading-relaxed" style={{ color: TEXT_MUTED }}>{item.description}</p>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base leading-[2.2] max-w-xl mx-auto mb-8" style={{ color: TEXT_MUTED }}>
              これらはすべて「結果」にすぎません。<br />
              本当の<span style={{ color: TEXT, fontWeight: 600 }}>《原因》</span>を取り除かない限り、<br />
              何度治療しても、繰り返してしまいます。
            </p>

            <p className="text-sm md:text-base leading-[2.2] max-w-xl mx-auto" style={{ color: TEXT }}>
              豊洲で歯科医院をお探しの方へ。<br />
              私たちは、対症療法ではなく、原因にアプローチする<span style={{ color: ACCENT_DARK, fontWeight: 600 }}>根本治療</span>を行う、豊洲の歯医者です。
            </p>

            <div className="mt-14 flex flex-col items-center gap-3">
              <span className="block w-px h-12" style={{ background: ACCENT }} />
              <ChevronDown size={20} style={{ color: ACCENT_DARK }} />
            </div>
          </div>
        </section>
        )}

        {/* ============ Section 4: ターゲット別入口 ============ */}
        <section className="py-24 md:py-32 px-5" style={{ background: SURFACE }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[11px] tracking-[0.3em] mb-4" style={{ color: ACCENT_DARK }}>FOR YOU</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light" style={{ color: TEXT }}>
                あなたに合った診療を、ここから。
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <a href="/kidsortho" className="group block rounded-2xl overflow-hidden transition" style={{ background: PAGE_BG, border: `1px solid ${LINE}` }}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={homepageImages.kidsAlignment}
                    alt="豊洲の小児歯科で0歳から高校生までのこども矯正と歯並びを相談する様子"
                    fill
                    sizes="(min-width: 768px) 480px, calc(100vw - 2.5rem)"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-7 md:p-9">
                  <p className="text-[10px] tracking-[0.3em] mb-3" style={{ color: ACCENT_DARK }}>FOR PARENTS</p>
                  <h3 className="font-serif text-[1.45rem] leading-[1.65] md:text-2xl md:leading-[1.7] mb-4" style={{ color: TEXT }}>
                    <span className="block">0歳から高校生までの、</span>
                    <span className="block">お子様の歯並びを</span>
                    <span className="block">案じる保護者の方へ</span>
                  </h3>
                  <p className="text-sm leading-[2.05] mb-5" style={{ color: TEXT_MUTED }}>
                    <span className="block">豊洲の小児歯科として、</span>
                    <span className="block">0歳からのこども歯科・予防・</span>
                    <span className="block">こども矯正・MFTに対応。</span>
                    <span className="block mt-2">成長期のお顔とお口の土台を、</span>
                    <span className="block">一緒に育てます。</span>
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: ACCENT_DARK }}>
                    こども矯正・口育を見る
                    <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>

              <a href="/ceramic" className="group block rounded-2xl overflow-hidden transition" style={{ background: PAGE_BG, border: `1px solid ${LINE}` }}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={homepageImages.adultPrecision}
                    alt="豊洲の歯科で自分の歯を大切にする精密治療を行う歯科医師"
                    fill
                    sizes="(min-width: 768px) 480px, calc(100vw - 2.5rem)"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-7 md:p-9">
                  <p className="text-[10px] tracking-[0.3em] mb-3" style={{ color: ACCENT_DARK }}>FOR ADULTS</p>
                  <h3 className="font-serif text-[1.45rem] leading-[1.65] md:text-2xl md:leading-[1.7] mb-4" style={{ color: TEXT }}>
                    <span className="block">ご自身の歯を</span>
                    <span className="block">大切にしたい</span>
                    <span className="block">大人の方へ</span>
                  </h3>
                  <p className="text-sm leading-[2.05] mb-5" style={{ color: TEXT_MUTED }}>
                    <span className="block">豊洲の審美歯科として、</span>
                    <span className="block">削らない保存治療・セラミック・</span>
                    <span className="block">矯正歯科・インプラントに対応。</span>
                    <span className="block mt-2">見た目と機能の両立を、</span>
                    <span className="block">精密診断で実現します。</span>
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: ACCENT_DARK }}>
                    審美・大人の治療を見る
                    <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ============ Section 5: 院長メッセージ（圧縮） ============ */}
        <section className="py-24 md:py-32 px-5" style={{ background: PAGE_BG }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[11px] tracking-[0.3em] mb-4" style={{ color: TEXT_MUTED }}>DOCTOR</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light" style={{ color: TEXT }}>ドクター紹介</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-start">
              <div className="mx-auto md:mx-0 w-full max-w-[280px]">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden" style={{ border: `1px solid ${LINE}` }}>
                  <Image
                    src={homepageImages.director}
                    alt="豊洲の歯科 Fデンタルオフィス 院長 福永真大"
                    fill
                    sizes="280px"
                    className="object-cover"
                    style={{ objectPosition: '50% 42%' }}
                    loading="lazy"
                  />
                </div>
                <p className="text-center mt-4 text-sm" style={{ color: TEXT_MUTED }}>
                  <span className="block text-xs mb-1" style={{ color: TEXT_MUTED }}>院長</span>
                  <span className="font-serif text-lg" style={{ color: TEXT }}>福永 真大</span>
                </p>
              </div>

              <div>
                <div className="mb-7 pb-6" style={{ borderBottom: `1px solid ${LINE}` }}>
                  <p className="text-xs tracking-[0.22em] mb-2" style={{ color: TEXT_MUTED }}>DIRECTOR / DENTIST</p>
                  <h3 className="font-serif text-2xl md:text-3xl" style={{ color: TEXT }}>
                    福永 真大
                  </h3>
                  <p className="text-xs md:text-sm mt-2" style={{ color: TEXT_MUTED }}>
                    Masahiro Fukunaga / 院長・歯科医師
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-5 mb-8">
                  <div className="rounded-2xl p-5 md:p-6" style={{ background: SURFACE, border: `1px solid ${LINE}` }}>
                    <p className="text-xs tracking-[0.22em] font-medium mb-4" style={{ color: ACCENT_DARK }}>CAREER</p>
                    <ul className="space-y-2.5 text-sm md:text-[15px] leading-[1.9]" style={{ color: TEXT_MUTED }}>
                      {[
                        '大阪大学歯学部 卒業',
                        '医療法人同仁会ワタナベ歯科医院にて研修医指導医・診療主任を歴任',
                        '駒沢公園通り西垣歯科・矯正歯科 副院長',
                        '小児歯科部門の立ち上げ',
                        'Fデンタルオフィス 豊洲プライムスクエア院 開業',
                        '咬合育成研究会監修 生活習慣改善アプリの開発',
                      ].map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span className="mt-[0.7em] h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT_DARK }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl p-5 md:p-6" style={{ background: SURFACE, border: `1px solid ${LINE}` }}>
                    <p className="text-xs tracking-[0.22em] font-medium mb-4" style={{ color: ACCENT_DARK }}>所属学会・資格</p>
                    <p className="text-sm md:text-[15px] leading-[2]" style={{ color: TEXT_MUTED }}>
                      日本小児歯科学会 / 日本矯正歯科学会 / 日本審美歯科学会 / 歯科医師免許
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl p-6 md:p-8" style={{ background: ACCENT_BG, border: `1px solid ${LINE}` }}>
                  <h3 className="font-serif text-2xl md:text-3xl leading-[1.7] mb-5" style={{ color: TEXT }}>
                    対症療法ではなく、<br />
                    <span style={{ color: ACCENT_DARK, fontStyle: 'italic' }}>原因療法</span>を。
                  </h3>
                  <div className="space-y-5 text-[13px] leading-[2] sm:text-sm md:text-base md:leading-[2.05]" style={{ color: TEXT_MUTED }}>
                    <p>
                      <span className="block">私が大切にしているのは、</span>
                      <strong className="my-1 block text-base leading-[1.9] md:text-lg" style={{ color: TEXT }}>
                        「症状を治す」のではなく、<br />
                        「原因を取り除く」
                      </strong>
                      <span className="block">という考え方です。</span>
                    </p>
                    <p>
                      <span className="block">父は30年近く、</span>
                      <span className="block">小児矯正に携わってきた歯科医師です。</span>
                      <span className="mt-2 block">その背中から、</span>
                      <span className="block">症状の奥にある根本原因に</span>
                      <span className="block">向き合う大切さを学びました。</span>
                    </p>
                    <p>
                      <span className="block">大阪大学歯学部を卒業後、</span>
                      <span className="block">医療法人同仁会ワタナベ歯科医院にて、</span>
                      <span className="block">一般歯科・インプラント・矯正・</span>
                      <span className="block">審美治療まで幅広く経験し、</span>
                      <span className="block">研修医指導医も務めました。</span>
                    </p>
                    <p>
                      <span className="block">私自身は大学まで野球に打ち込み、</span>
                      <span className="block">噛み合わせや口呼吸が</span>
                      <span className="block">パフォーマンスに直結することも</span>
                      <span className="block">実感してきました。</span>
                    </p>
                    <p>
                      <span className="block">父から受け継いだ口腔育成への想い、</span>
                      <span className="block">臨床で培った技術、</span>
                      <span className="block">そして患者様に「伝わる」情報発信力。</span>
                      <span className="mt-2 block">この3つを軸に、</span>
                      <span className="block">お子様の口腔育成から</span>
                      <span className="block">大人の矯正・審美治療まで、</span>
                      <span className="block">
                        原因にアプローチする<strong style={{ color: TEXT }}>根本治療</strong>を提供します。
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ Section 6: 当院の3つの約束（旧6特徴ジグザグデザイン踏襲） ============ */}
        <section className="py-24 md:py-32 px-5 relative overflow-hidden" style={{ background: ACCENT_BG }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <p className="text-[11px] tracking-[0.3em] mb-4" style={{ color: ACCENT_DARK }}>OUR PROMISE</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light" style={{ color: TEXT }}>当院の3つの約束</h2>
            </div>

            <div className="space-y-20 md:space-y-28">
              {promises.map((p, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-start group`}
                >
                  {/* Image side (desktop) */}
                  <div className="hidden lg:block lg:w-1/2 relative">
                    <div className="relative rounded-[32px] overflow-hidden aspect-[16/10] transition-transform duration-700 ease-out group-hover:scale-[1.02]" style={{ border: `1px solid ${LINE}` }}>
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        sizes="50vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className={`absolute -bottom-8 ${i % 2 === 0 ? '-left-8' : '-right-8'} w-32 h-32 rounded-full blur-2xl -z-10`} style={{ background: `${ACCENT}20` }} />
                  </div>

                  {/* Content side */}
                  <div className="w-full lg:w-1/2 flex flex-col gap-6 relative">
                    <div className="relative">
                      <span className="font-serif absolute -top-12 -left-2 select-none pointer-events-none" style={{ fontSize: '7rem', color: `${ACCENT}12`, fontWeight: 600, letterSpacing: '-0.05em', lineHeight: 1 }}>
                        {p.no}
                      </span>
                      <p className="text-[11px] tracking-[0.25em] mb-3 relative" style={{ color: ACCENT_DARK }}>{p.label}</p>
                      <h3 className="font-serif relative" style={{ color: TEXT }}>
                        <span className="block text-base font-medium mb-2 tracking-widest" style={{ color: TEXT_MUTED }}>{p.highlight}</span>
                        <span className="block text-3xl md:text-4xl lg:text-5xl leading-[1.3]">{p.title}</span>
                        <span className="block w-16 h-px mt-5" style={{ background: ACCENT }} />
                      </h3>
                    </div>

                    {/* Image (mobile, between title and body) */}
                    <div className="w-full lg:hidden">
                      <div className="relative rounded-[24px] overflow-hidden aspect-[16/10]" style={{ border: `1px solid ${LINE}` }}>
                        <Image
                          src={p.image}
                          alt={p.imageAlt}
                          fill
                          sizes="calc(100vw - 2.5rem)"
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <p className="text-sm md:text-base leading-[2.1]" style={{ color: TEXT_MUTED }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 7: 症例紹介（3点） ============ */}
        <section className="py-24 md:py-32 px-5" style={{ background: PAGE_BG }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[11px] tracking-[0.3em] mb-4" style={{ color: TEXT_MUTED }}>CASE STUDIES</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light" style={{ color: TEXT }}>症例紹介</h2>
            </div>

            <div className="space-y-6 md:space-y-8">
              {caseStudies.map(cs => (
                <div key={cs.id} className="rounded-2xl p-6 md:p-10" style={{ background: SURFACE, border: `1px solid ${LINE}` }}>
                  <div className="text-center mb-6 pb-5" style={{ borderBottom: `1px solid ${LINE}` }}>
                    <p className="text-xs mb-2" style={{ color: TEXT_MUTED }}>{cs.patient}</p>
                    <h3 className="font-serif text-xl md:text-2xl" style={{ color: TEXT }}>{cs.title}</h3>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
                    <div className="w-full md:w-[44%]">
                      <span className="inline-block px-3 py-1 rounded text-xs font-medium mb-2" style={{ background: '#F0F0EE', color: TEXT_MUTED }}>Before</span>
                      <PageImage path="/homepage" imageId={cs.beforeId} alt={`${cs.title} - Before`} className="w-full aspect-[3/2] object-contain bg-[#F7F2EA] rounded-xl" />
                    </div>
                    <div className="flex-shrink-0">
                      <ChevronRight size={28} style={{ color: ACCENT_DARK }} className="hidden md:block" />
                      <ChevronDown size={28} style={{ color: ACCENT_DARK }} className="md:hidden" />
                    </div>
                    <div className="w-full md:w-[44%]">
                      <span className="inline-block px-3 py-1 rounded text-xs font-medium mb-2" style={{ background: ACCENT_DARK, color: '#fff' }}>After</span>
                      <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${ACCENT}33` }}>
                        <PageImage path="/homepage" imageId={cs.afterId} alt={`${cs.title} - After`} className="w-full aspect-[3/2] object-contain bg-[#F7F2EA]" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="/case-studies" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-widest rounded-full transition" style={{ border: `1px solid ${TEXT}`, color: TEXT }}>
                すべての症例を見る
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ============ Section 8: 院内設備 ============ */}
        <section className="py-24 md:py-32 px-5" style={{ background: SURFACE }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[11px] tracking-[0.3em] mb-4" style={{ color: TEXT_MUTED }}>FACILITIES</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light" style={{ color: TEXT }}>院内設備</h2>
              <p className="text-sm leading-[2.1] mt-6 max-w-xl mx-auto" style={{ color: TEXT_MUTED }}>
                豊洲駅徒歩2分の歯科医院。<br />
                歯科用CT・マイクロスコープ・3Dスキャナーなどを活用し、精密な診断とわかりやすい説明を大切にしています
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {facilityImages.map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-2xl" style={{ border: `1px solid ${LINE}` }}>
                  <PageImage path="/homepage" imageId={img.imageId} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute inset-0 flex items-end p-5 md:p-7" style={{ background: 'linear-gradient(to top, rgba(44,44,42,0.58) 0%, rgba(44,44,42,0.28) 32%, transparent 54%)' }}>
                    <p className="text-white text-sm md:text-base tracking-wide">{img.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="/facilities" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-widest rounded-full transition" style={{ border: `1px solid ${TEXT}`, color: TEXT }}>
                院内設備をもっと見る
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ============ Section 9: 診療メニュー ============ */}
        <section className="py-24 md:py-32 px-5" style={{ background: SURFACE }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[11px] tracking-[0.3em] mb-4" style={{ color: ACCENT_DARK }}>MENU</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light" style={{ color: TEXT }}>診療メニュー</h2>
              <p className="text-sm leading-[2.1] mt-6 max-w-xl mx-auto" style={{ color: TEXT_MUTED }}>
                豊洲駅徒歩2分の歯科医院として、<br className="sm:hidden" />
                小児歯科・矯正歯科・審美歯科・インプラントなど、<br className="hidden sm:block" />
                あらゆるお口のお悩みに対応いたします。
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-y-8 gap-x-3">
              {menuItems.map((m) => (
                <a key={m.link} href={m.link} className="flex flex-col items-center group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 overflow-hidden p-3 transition" style={{ background: PAGE_BG, border: `1px solid ${LINE}` }}>
                    <img src={m.iconImage} alt={m.name} className="w-full h-full object-contain" loading="lazy" decoding="async" />
                  </div>
                  <h3 className="text-[11px] md:text-xs font-medium text-center leading-tight transition" style={{ color: TEXT }}>{m.name}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 12: 最終CTA ============ */}
        <section id="contact" className="py-24 md:py-32 px-5" style={{ background: ACCENT_DARK, color: '#fff' }}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.3em] mb-4" style={{ color: '#FFFFFF99' }}>RESERVATION</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.6] mb-6">
              内覧会、近日開催。<br />
              <span style={{ fontStyle: 'italic' }}>まずはお気軽に、お問い合わせください。</span>
            </h2>
            {/* 内覧会日程確定後にコメント解除：
            <p className="text-sm mb-8" style={{ color: '#FFFFFFCC' }}>
              2026年7月1日 開院予定 / 開院前相談 受付準備中
            </p>
            */}
            <p className="text-sm leading-[2] mb-10" style={{ color: '#FFFFFFCC' }}>
              豊洲プライムスクエア1階の歯医者として、開業に先立ち院内見学・初診カウンセリングを承っております。<br />
              WEBまたはお電話にて、お気軽にご予約ください。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href={WEB_RESERVATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 text-sm font-medium tracking-widest rounded-full transition"
                style={{ background: '#fff', color: ACCENT_DARK }}
              >
                <Calendar size={16} />
                24時間 WEB予約
              </a>
              <a
                href="tel:03-6204-2876"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 text-sm font-medium tracking-widest rounded-full transition"
                style={{ background: 'transparent', color: '#fff', border: '1px solid #fff' }}
              >
                <Phone size={16} />
                03-6204-2876
              </a>
            </div>
            <p className="text-xs mt-8" style={{ color: '#FFFFFFAA' }}>
              受付時間：平日 10:00–18:30 / 土日 9:00–16:00
            </p>
          </div>
        </section>
      </main>

      {/* ============ 固定CTA（右下浮きボタン）— デスクトップのみ ============ */}
      <a
        href={WEB_RESERVATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex fixed right-6 bottom-6 z-50 items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full transition"
        style={{ background: ACCENT_DARK, color: '#fff', boxShadow: '0 10px 28px rgba(10,138,133,0.35), 0 2px 6px rgba(0,0,0,0.12)' }}
        onMouseOver={e => (e.currentTarget.style.background = ACCENT_DEEP)}
        onMouseOut={e => (e.currentTarget.style.background = ACCENT_DARK)}
      >
        <Calendar size={16} />
        WEB予約
      </a>

      <Footer />
    </div>
  );
}
