"use client";

import React, { useState } from 'react';
import { Phone, Calendar, ChevronDown, ChevronRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PageImage } from '@/components/PageImage';
import './hero.css';

// 診療メニュー（14リンク・SEO内部リンク維持用）
const menuItems = [
  { name: "こども矯正", link: "/kidsortho", iconImage: "/images/icons/05_矯正歯科.png" },
  { name: "０歳からの口育", link: "/oral-education", iconImage: "/images/icons/12_小児歯科.png" },
  { name: "こども歯科・予防", link: "/kids-preventive", iconImage: "/images/icons/12_小児歯科.png" },
  { name: "セラミック治療", link: "/ceramic", iconImage: "/images/icons/14_審美歯科.png" },
  { name: "マウスピース矯正", link: "/mouthpiece", iconImage: "/images/icons/06_マウスピース矯正.png" },
  { name: "矯正歯科", link: "/orthodontics", iconImage: "/images/icons/05_矯正歯科.png" },
  { name: "インプラント", link: "/implant", iconImage: "/images/icons/07_インプラント.png" },
  { name: "ホワイトニング", link: "/whitening", iconImage: "/images/icons/15_ホワイトニング.png" },
  { name: "予防歯科", link: "/preventive", iconImage: "/images/icons/13_予防歯科.png" },
  { name: "口臭治療", link: "/general/bad-breath", iconImage: "/images/icons/10_口腔外科.png" },
  { name: "むしば治療", link: "/cavity", iconImage: "/images/icons/01_虫歯治療.png" },
  { name: "根管治療", link: "/root-canal", iconImage: "/images/icons/03_根管治療.png" },
  { name: "歯の外傷・急患", link: "/concerns/trauma", iconImage: "/images/icons/10_口腔外科.png" },
  { name: "顎関節症", link: "/concerns/tmj", iconImage: "/images/icons/11_噛み合わせ.png" },
];


// ===== 外部予約システムURL =====
// TODO: 外部予約サービスのURLが決定したら、ここに記入する
// （例: const WEB_RESERVATION_URL = "https://example.com/booking";）
const WEB_RESERVATION_URL = "";

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

export default function Home() {
  const [isMessageOpen, setIsMessageOpen] = useState(false);

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

  // 院内設備（4枚 + 個室・天井テレビ統合）
  const facilityImages = [
    { imageId: "facility1", title: "リラックスできる広々とした待合室" },
    { imageId: "facility2", title: "プライバシーに配慮した全室個室診療室" },
    { imageId: "feature3", title: "お子様も安心の天井テレビ付き診療室" },
    { imageId: "facility3", title: "正確な診断を可能にする歯科用CT" },
    { imageId: "facility4", title: "お子様も退屈しないキッズスペース" },
  ];

  // 3つの約束（旧6特徴のジグザグ画像+テキストデザインを踏襲）
  const promises = [
    {
      no: "01",
      label: "Root-Cause Approach",
      title: "原因から考える",
      highlight: "根本解決",
      body: "症状ではなく、その奥にある原因に目を向けます。呼吸・姿勢・食習慣・噛み癖など、歯並びや噛み合わせの根本原因にアプローチする、豊洲の歯科医院です。",
      imageId: "feature6",
      imageAlt: "豊洲 歯科 生活習慣指導 口腔育成",
    },
    {
      no: "02",
      label: "Minimally Invasive",
      title: "削らない保存治療",
      highlight: "精密診断",
      body: "拡大鏡・マイクロスコープ・3Dスキャナー・歯科用CTで精密診断。豊洲の歯医者として、できる限り削らない・抜かない治療を実現します。",
      imageId: "feature5",
      imageAlt: "豊洲 歯科 保存治療 削らない治療",
    },
    {
      no: "03",
      label: "Transparent Explanation",
      title: "伝わる治療説明",
      highlight: "見える治療",
      body: "口腔内写真・3Dスキャナー・ペン型カメラで、お口の状態を一緒に確認。ご納得いただいてから治療を開始する、豊洲の歯科医院の方針です。",
      imageId: "feature1",
      imageAlt: "豊洲 歯科 透明性のある治療説明",
    },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-[#0F6E56] selection:text-white" style={{ background: PAGE_BG, color: TEXT }}>
      <Header />

      <main>
        {/* ============ Section 1: Hero — Pattern B（画像と文字を分離） ============ */}
        <section className="hero" aria-label="豊洲の歯医者 ヒーローセクション">
          {/* === 画像エリア === */}
          <div className="hero__image-area">
            <div className="hero__bg" role="img" aria-label="新しい歯科医院の内装" />
            <div className="hero__scroll" aria-hidden="true">
              SCROLL
              <span className="hero__scroll-line" />
            </div>
          </div>

          {/* === コンテンツエリア === */}
          <div className="hero__content-area">
            <div className="hero__content">
              <p className="hero__overline">豊洲の歯医者</p>

              {/* H1: SEOキーワード入り（視覚的に小さく、意味的にh1） */}
              <h1 className="hero__seo">
                豊洲駅徒歩2分の歯科・矯正歯科<br />
                0歳から通える歯医者・小児歯科
              </h1>

              {/* 視覚的タグライン（h2扱い、ビジュアル重視） */}
              <p className="hero__title">
                <span className="hero__title-line">未来の美しいお顔を、</span>
                <span className="hero__title-line">ここから<span className="hero__title-accent">《育てる》</span>。</span>
              </p>

              <p className="hero__date">2026.07.01 開院予定</p>

              <div className="hero__ctas">
                <a className="hero__cta" href={WEB_RESERVATION_URL || '#'} target={WEB_RESERVATION_URL ? '_blank' : undefined} rel={WEB_RESERVATION_URL ? 'noopener noreferrer' : undefined}>
                  <Calendar size={16} />
                  <span>WEB予約はこちら</span>
                  <span className="hero__cta-arrow" aria-hidden="true">→</span>
                </a>
                <a className="hero__cta hero__cta--ghost" href="tel:03-6204-2876">
                  <Phone size={16} />
                  <span>03-6204-2876</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ Section 2: 建物・診療時間（フル） ============ */}
        <section className="py-16 md:py-20" style={{ background: SURFACE, borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}>
          <div className="max-w-5xl mx-auto px-5 flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
            <div className="w-full lg:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <img
                src="/images/building.avif"
                alt="豊洲プライムスクエア"
                className="w-full max-w-[320px] h-auto rounded-2xl object-cover mb-5"
                style={{ border: `1px solid ${LINE}` }}
              />
              <h3 className="text-xl font-serif mb-2" style={{ color: TEXT }}>豊洲プライムスクエア1階</h3>
              <p className="text-sm flex items-center gap-2" style={{ color: TEXT_MUTED }}>
                <span style={{ color: ACCENT_DARK }}>●</span>
                豊洲駅 6a出口 徒歩2分
              </p>
            </div>

            <div className="w-full lg:w-3/5 rounded-2xl p-5 sm:p-6 text-sm" style={{ background: PAGE_BG, border: `1px solid ${LINE}` }}>
              <table className="w-full text-center table-fixed border-collapse">
                <thead>
                  <tr style={{ borderBottom: `1px solid ${LINE}` }}>
                    <th className="py-3 font-normal text-[10px] sm:text-xs" style={{ color: TEXT_MUTED }}>診療時間</th>
                    <th className="py-3 font-medium text-xs sm:text-sm" style={{ color: TEXT }}>月</th>
                    <th className="py-3 font-medium text-xs sm:text-sm" style={{ color: TEXT }}>火</th>
                    <th className="py-3 font-medium text-xs sm:text-sm" style={{ color: TEXT }}>水</th>
                    <th className="py-3 font-medium text-xs sm:text-sm" style={{ color: TEXT }}>木</th>
                    <th className="py-3 font-medium text-xs sm:text-sm" style={{ color: TEXT }}>金</th>
                    <th className="py-3 font-medium text-xs sm:text-sm" style={{ color: ACCENT_DARK }}>土</th>
                    <th className="py-3 font-medium text-xs sm:text-sm" style={{ color: ACCENT_DARK }}>日</th>
                  </tr>
                </thead>
                <tbody className="text-base sm:text-lg">
                  <tr style={{ borderBottom: `1px solid ${LINE}` }}>
                    <td className="py-3 text-[10px] sm:text-xs" style={{ color: TEXT_MUTED }}>10:00–13:00</td>
                    <td>●</td><td style={{ opacity: 0.2 }}>−</td><td>●</td><td>●</td><td>●</td>
                    <td className="text-sm" style={{ color: ACCENT_DARK }}>★</td>
                    <td className="text-sm" style={{ color: ACCENT_DARK }}>★</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-[10px] sm:text-xs" style={{ color: TEXT_MUTED }}>14:00–19:00</td>
                    <td>●</td><td style={{ opacity: 0.2 }}>−</td><td>●</td><td>●</td><td>●</td>
                    <td className="text-sm" style={{ color: ACCENT_DARK }}>★</td>
                    <td className="text-sm" style={{ color: ACCENT_DARK }}>★</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4 text-[11px] text-center space-y-1" style={{ color: TEXT_MUTED }}>
                <p>★ 土日：9:00–12:00 / 13:00–17:00</p>
                <p style={{ color: ACCENT_DARK, fontWeight: 600 }}>休診日：火曜日</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ Section 2.5: Narrative Bridge（理念→根本治療への接続） ============ */}
        <section className="py-24 md:py-32 px-5" style={{ background: PAGE_BG }}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.3em] mb-6" style={{ color: TEXT_MUTED }}>OUR APPROACH</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.5] font-light mb-14 md:mb-16" style={{ color: TEXT, letterSpacing: '-0.01em' }}>
              美しいお顔を、<br className="sm:hidden" />
              <span style={{ color: ACCENT_DARK, fontStyle: 'italic' }}>どう育てる</span>のか。
            </h2>

            <div className="space-y-7 mb-14 md:mb-16" style={{ color: TEXT }}>
              <div>
                <p className="font-serif text-lg md:text-2xl leading-[1.9]">虫歯になりやすい。</p>
                <p className="text-sm md:text-base mt-1" style={{ color: TEXT_MUTED }}>何度治しても、繰り返してしまう。</p>
              </div>
              <div>
                <p className="font-serif text-lg md:text-2xl leading-[1.9]">歯並びが悪い。</p>
                <p className="text-sm md:text-base mt-1" style={{ color: TEXT_MUTED }}>矯正しても、いつの間にか戻ってしまう。</p>
              </div>
              <div>
                <p className="font-serif text-lg md:text-2xl leading-[1.9]">歯が折れた・欠けた。</p>
                <p className="text-sm md:text-base mt-1" style={{ color: TEXT_MUTED }}>噛み合わせが、少しずつ歪んでいく。</p>
              </div>
              <div>
                <p className="font-serif text-lg md:text-2xl leading-[1.9]">歯が変色してきた。</p>
                <p className="text-sm md:text-base mt-1" style={{ color: TEXT_MUTED }}>ホワイトニングしても、また色が戻ってしまう。</p>
              </div>
            </div>

            <p className="text-sm md:text-base leading-[2.2] max-w-xl mx-auto mb-8" style={{ color: TEXT_MUTED }}>
              これらはすべて「結果」にすぎません。<br />
              本当の<span style={{ color: TEXT, fontWeight: 600 }}>《原因》</span>を取り除かない限り、<br />
              何度治療しても、繰り返してしまいます。
            </p>

            <p className="text-sm md:text-base leading-[2.2] max-w-xl mx-auto" style={{ color: TEXT }}>
              私たちは、対症療法ではなく、<br />
              原因にアプローチする<span style={{ color: ACCENT_DARK, fontWeight: 600 }}>根本治療</span>を行う、豊洲の歯科医院です。
            </p>

            <div className="mt-14 flex flex-col items-center gap-3">
              <span className="block w-px h-12" style={{ background: ACCENT }} />
              <ChevronDown size={20} style={{ color: ACCENT_DARK }} />
            </div>
          </div>
        </section>

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
                <div className="aspect-[4/3] overflow-hidden">
                  <PageImage path="/homepage" imageId="feature2" alt="お子様の歯並びを案じる保護者の方へ" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-7 md:p-9">
                  <p className="text-[10px] tracking-[0.3em] mb-3" style={{ color: ACCENT_DARK }}>FOR PARENTS</p>
                  <h3 className="font-serif text-xl md:text-2xl mb-3" style={{ color: TEXT }}>
                    お子様の歯並びを案じる<br className="hidden sm:block" />保護者の方へ
                  </h3>
                  <p className="text-sm leading-[2] mb-5" style={{ color: TEXT_MUTED }}>
                    豊洲の小児歯科として、0歳からの口育・こども矯正・MFTに対応。<br className="hidden md:block" />お顔の成長期に、一生もののお口の土台を一緒に育てます。
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: ACCENT_DARK }}>
                    こども矯正・口育を見る
                    <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>

              <a href="/ceramic" className="group block rounded-2xl overflow-hidden transition" style={{ background: PAGE_BG, border: `1px solid ${LINE}` }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <PageImage path="/homepage" imageId="feature4" alt="ご自身の歯を大切にしたい大人の方へ" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-7 md:p-9">
                  <p className="text-[10px] tracking-[0.3em] mb-3" style={{ color: ACCENT_DARK }}>FOR ADULTS</p>
                  <h3 className="font-serif text-xl md:text-2xl mb-3" style={{ color: TEXT }}>
                    ご自身の歯を大切にしたい<br className="hidden sm:block" />大人の方へ
                  </h3>
                  <p className="text-sm leading-[2] mb-5" style={{ color: TEXT_MUTED }}>
                    豊洲の審美歯科として、削らない保存治療・セラミック・矯正歯科・インプラントに対応。<br className="hidden md:block" />見た目と機能の両立を、精密診断で実現します。
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
                <div className="aspect-[3/4] rounded-2xl overflow-hidden" style={{ border: `1px solid ${LINE}` }}>
                  <PageImage path="/homepage" imageId="doctor" alt="院長 福永真大" className="w-full h-full object-cover" />
                </div>
                <p className="text-center mt-4 text-sm" style={{ color: TEXT_MUTED }}>
                  <span className="block text-xs mb-1" style={{ color: TEXT_MUTED }}>院長</span>
                  <span className="font-serif text-lg" style={{ color: TEXT }}>福永 真大</span>
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl md:text-3xl leading-[1.7] mb-6" style={{ color: TEXT }}>
                  対症療法ではなく、<br />
                  <span style={{ color: ACCENT_DARK, fontStyle: 'italic' }}>原因療法</span>を。
                </h3>
                <p className="text-sm md:text-base leading-[2.1]" style={{ color: TEXT_MUTED }}>
                  私が大切にしているのは、<strong style={{ color: TEXT }}>「症状を治す」のではなく「原因を取り除く」</strong>という考え方です。<br />
                  父は30年近く小児矯正に携わってきた歯科医師で、その背中から、症状の奥にある根本原因に向き合うことの大切さを学びました。<br />
                  お子様の口腔育成から大人の矯正・審美治療まで、原因にアプローチする<strong style={{ color: TEXT }}>根本治療</strong>を軸に、年齢を問わずお口と表情の健康を整えていく豊洲の歯科医院です。
                </p>

                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${isMessageOpen ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}
                >
                  <div className="space-y-5 text-sm md:text-base leading-[2.1]" style={{ color: TEXT_MUTED }}>
                    <p>
                      大阪大学歯学部を卒業後、医療法人同仁会ワタナベ歯科医院にて一般歯科・インプラント・矯正・審美治療など幅広い症例を経験し、研修医指導医も務めました。私自身は大学まで野球に打ち込み、噛み合わせや口呼吸がパフォーマンスに直結することも実感してきました。
                    </p>
                    <p>
                      父から受け継いだ口腔育成への想い、臨床で培った技術、そして患者様に「伝わる」情報発信力。この3つを軸に、「もっと早く知りたかった」と思っていただける歯科医院を目指しています。
                    </p>
                    <div className="pt-2">
                      <p className="text-xs mb-2" style={{ color: TEXT_MUTED }}>所属学会・資格</p>
                      <p className="text-sm" style={{ color: TEXT_MUTED }}>
                        日本小児歯科学会 / 日本矯正歯科学会 / 日本歯周病学会 / 日本口腔インプラント学会 / 日本審美歯科学会
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsMessageOpen(v => !v)}
                  aria-expanded={isMessageOpen}
                  className="inline-flex items-center gap-2 mt-6 text-sm font-medium transition"
                  style={{ color: ACCENT_DARK }}
                >
                  {isMessageOpen ? '閉じる' : '続きを読む（経歴・所属学会）'}
                  <ChevronDown size={16} className={`transition-transform duration-300 ${isMessageOpen ? 'rotate-180' : ''}`} />
                </button>
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
                      <PageImage path="/homepage" imageId={p.imageId} alt={p.imageAlt} className="w-full h-full object-cover" />
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
                      <div className="rounded-[24px] overflow-hidden aspect-[16/10]" style={{ border: `1px solid ${LINE}` }}>
                        <PageImage path="/homepage" imageId={p.imageId} alt={p.imageAlt} className="w-full h-full object-cover" />
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
                      <PageImage path="/homepage" imageId={cs.beforeId} alt={`${cs.title} - Before`} className="w-full aspect-[16/9] object-cover rounded-xl" />
                    </div>
                    <div className="flex-shrink-0">
                      <ChevronRight size={28} style={{ color: ACCENT_DARK }} className="hidden md:block" />
                      <ChevronDown size={28} style={{ color: ACCENT_DARK }} className="md:hidden" />
                    </div>
                    <div className="w-full md:w-[44%]">
                      <span className="inline-block px-3 py-1 rounded text-xs font-medium mb-2" style={{ background: ACCENT_DARK, color: '#fff' }}>After</span>
                      <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${ACCENT}33` }}>
                        <PageImage path="/homepage" imageId={cs.afterId} alt={`${cs.title} - After`} className="w-full aspect-[16/9] object-cover" />
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
                広々とした待合室・全室個室・歯科用CT・キッズスペース完備
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {facilityImages.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3] relative" style={{ border: `1px solid ${LINE}` }}>
                  <PageImage path="/homepage" imageId={img.imageId} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute inset-0 flex items-end p-5 md:p-7" style={{ background: 'linear-gradient(to top, rgba(44,44,42,0.7) 0%, transparent 60%)' }}>
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
                    <img src={m.iconImage} alt={m.name} className="w-full h-full object-contain" />
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
              豊洲の歯医者・歯科・矯正歯科として、開業に先立ち院内見学・初診カウンセリングを承っております。<br />
              WEBまたはお電話にて、お気軽にご予約ください。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href={WEB_RESERVATION_URL || '#'}
                target={WEB_RESERVATION_URL ? '_blank' : undefined}
                rel={WEB_RESERVATION_URL ? 'noopener noreferrer' : undefined}
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
        href={WEB_RESERVATION_URL || '#'}
        target={WEB_RESERVATION_URL ? '_blank' : undefined}
        rel={WEB_RESERVATION_URL ? 'noopener noreferrer' : undefined}
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
