"use client";

import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Smile, Sparkles, ChevronRight, Shield, Baby, Gem, Wind, Search, Activity, Layers, Scissors, AlertCircle, Zap, Stethoscope, ShieldCheck, ArrowDownToLine, Moon, MonitorPlay, Sprout, HeartPulse } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PageImage } from '@/components/PageImage';
import { WaveTop, WaveBottom } from '../components/Wave';

export default function Home() {
  const [isFading, setIsFading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // Hero slider images
  const heroImages = [
    { imageId: "hero-slide1", alt: "豊洲の歯医者 Fデンタルオフィス 院内写真" },
    { imageId: "hero-slide2", alt: "豊洲の歯科医院 Fデンタルオフィス 診療室" },
    { imageId: "hero-slide3", alt: "豊洲駅徒歩2分の歯医者 Fデンタルオフィス 受付" },
  ];

  // Hero image slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Facility Carousel Logic
  const facilityImages = [
    { imageId: "facility1", title: "リラックスできる広々とした待合室" },
    { imageId: "facility2", title: "プライバシーに配慮した診療室" },
    { imageId: "facility3", title: "正確な診断を可能にする歯科用CT" },
    { imageId: "facility4", title: "お子様も退屈しないキッズスペース" },
  ];

  const [currentFacilitySlide, setCurrentFacilitySlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFacilitySlide((prev) => (prev + 1) % facilityImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [facilityImages.length]);

  // Case Studies Logic
  const caseStudies = [
    {
      id: 1,
      title: "前歯の隙間改善",
      beforeId: "case1-before",
      afterId: "case1-after",
      description: "マウスピース矯正で、目立たずに短期間で隙間を改善しました。",
      patient: "20代 女性"
    },
    {
      id: 2,
      title: "銀歯をセラミックに",
      beforeId: "case2-before",
      afterId: "case2-after",
      description: "古い銀歯をセラミックに置き換え、自然な見た目を取り戻しました。",
      patient: "30代 男性"
    },
    {
      id: 3,
      title: "ホワイトニング",
      beforeId: "case3-before",
      afterId: "case3-after",
      description: "オフィスホワイトニングで、1回の施術で透明感のある白さに。",
      patient: "20代 女性"
    },
    {
      id: 4,
      title: "インプラント治療",
      beforeId: "case4-before",
      afterId: "case4-after",
      description: "失った歯をインプラントで復元し、しっかり噛めるようになりました。",
      patient: "50代 男性"
    }
  ];

  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCaseIndex((prev) => (prev + 1) % caseStudies.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [caseStudies.length]);

  const menuItems = [
    { name: "こども矯正", cat: "kids", link: "/kidsortho", icon: Smile, iconImage: "/images/icons/05_矯正歯科.png" },
    { name: "０歳からの口育", cat: "kids", link: "/kids/oral-education", icon: Baby, iconImage: "/images/icons/12_小児歯科.png" },
    { name: "こども歯科・予防", cat: "kids", link: "/kids/preventive", icon: ShieldCheck, iconImage: "/images/icons/12_小児歯科.png" },
    { name: "セラミック治療", cat: "aesthetic", link: "/aesthetic/ceramic", icon: Gem, iconImage: "/images/icons/14_審美歯科.png" },
    { name: "マウスピース矯正", cat: "ortho", link: "/mouthpiece", icon: Smile, iconImage: "/images/icons/06_マウスピース矯正.png" },
    { name: "矯正歯科", cat: "ortho", link: "/orthodontics", icon: Sparkles, iconImage: "/images/icons/05_矯正歯科.png" },
    { name: "インプラント", cat: "general", link: "/implant", icon: ArrowDownToLine, iconImage: "/images/icons/07_インプラント.png" },
    { name: "ホワイトニング", cat: "aesthetic", link: "/whitening", icon: Sparkles, iconImage: "/images/icons/15_ホワイトニング.png" },
    { name: "予防歯科", cat: "general", link: "/preventive", icon: Shield, iconImage: "/images/icons/13_予防歯科.png" },
    { name: "口臭治療", cat: "general", link: "/general/bad-breath", icon: Wind, iconImage: "/images/icons/10_口腔外科.png" },
    { name: "むしば治療", cat: "general", link: "/cavity", icon: Search, iconImage: "/images/icons/01_虫歯治療.png" },
    { name: "根管治療", cat: "general", link: "/root-canal", icon: Activity, iconImage: "/images/icons/03_根管治療.png" },
    { name: "歯周病治療", cat: "general", link: "/periodontal", icon: Layers, iconImage: "/images/icons/02_歯周病治療.png" },
    { name: "親知らず抜歯", cat: "surgery", link: "/wisdom", icon: Scissors, iconImage: "/images/icons/04_親知らず.png" },
    { name: "歯の外傷・急患", cat: "concerns", link: "/concerns/trauma", icon: AlertCircle, iconImage: "/images/icons/10_口腔外科.png" },
    { name: "歯ぎしり・食いしばり", cat: "concerns", link: "/concerns/bruxism", icon: Moon, iconImage: "/images/icons/09_歯ぎしり.png" },
    { name: "顎関節症", cat: "concerns", link: "/concerns/tmj", icon: Zap, iconImage: "/images/icons/11_噛み合わせ.png" },
    { name: "口腔外科・トラブル", cat: "concerns", link: "/concerns/oral-surgery", icon: Stethoscope, iconImage: "/images/icons/10_口腔外科.png" },
  ];

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'kids': return 'bg-[#EDEEF3] border-[#D0D3DE] text-[#8B92AB] hover:bg-[#E0E2EB]';
      case 'aesthetic': return 'bg-[#F3F0F7] border-[#E0D6EA] text-[#9B89B3] hover:bg-[#EBE5F2]';
      case 'ortho': return 'bg-[#EDEEF3] border-[#D0D3DE] text-[#8B92AB] hover:bg-[#E0E2EB]';
      case 'surgery': return 'bg-[#FFF0F0] border-[#FFD6D6] text-[#FF6B6B] hover:bg-[#FFE5E5]';
      case 'concerns': return 'bg-[#FFF4E6] border-[#FFE0B2] text-[#E89B4D] hover:bg-[#FFE9CC]';
      default: return 'bg-gray-50 border-gray-100 text-gray-600 hover:bg-gray-100';
    }
  };

  const featureHighlights = [
    {
      id: "01",
      title: "歯を「最大限残す」",
      highlight: "保存治療",
      summary: "できる限り削らない・抜かない治療",
      details: [
        "歯を細かく見れる<span class='font-bold marker-yellow'>拡大鏡</span>、より精密に治療できる<span class='font-bold marker-yellow'>マイクロスコープ</span>、精密診断を可能にする<span class='font-bold marker-yellow'>３Dスキャナー・CT</span>。これらの最新設備と診断力で、<span class='text-[#8B92AB] font-bold'>できる限り削らない・抜かない治療</span>を実現します。"
      ],
      imageId: "feature5",
      imageAlt: "豊洲 歯科 保存治療 削らない治療",
      icon: HeartPulse,
      color: "from-red-100 to-rose-200",
      iconColor: "text-rose-500"
    },
    {
      id: "02",
      title: "すべて見せる、わかりやすい",
      highlight: "最新<span style='font-size: 0.8em;'>の</span>透明<span style='font-size: 0.8em;'>な</span>治療",
      summary: "<strong>豊洲の歯医者</strong>として、納得して治療を受けていただくために",
      details: [
        "治療前には必ず<span class='font-bold marker-yellow'>口の中の写真</span>を撮影し、現在の状態を一緒に確認します。さらに<span class='font-bold marker-yellow'>３Dスキャナー</span>で歯並びを立体的にデータ化し、<span class='font-bold marker-yellow'>ペン型カメラ</span>で細部まで拡大して見ることができます。これらの最新機器を使って、<span class='text-[#8B92AB] font-bold'>お口の状態や治療内容を丁寧にわかりやすく説明</span>します。"
      ],
      imageId: "feature1",
      imageAlt: "豊洲 歯科 透明性のある治療説明",
      icon: MonitorPlay,
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600"
    },
    {
      id: "03",
      title: "「お顔」も育てる",
      highlight: "こども矯正",
      summary: "歯並びの教科書（冊子）",
      details: [
        "歯並びだけでなく、<span class='text-[#8B92AB] font-bold'>お顔全体の成長</span>を考えた治療を行います。それを補助するために、<span class='font-bold marker-yellow'>当院独自の歯ならびの教科書</span>を、来院した子ども患者さん全員にお渡しします。"
      ],
      imageId: "feature2",
      imageAlt: "豊洲 Fデンタルオフィス こども矯正 歯並びの教科書",
      icon: Sprout,
      color: "from-green-100 to-green-200",
      iconColor: "text-green-600"
    },
    {
      id: "04",
      title: "天井テレビ付き",
      highlight: "個室の診療室",
      summary: "リラックスして治療を受けられる空間",
      details: [
        "<span class='font-bold marker-yellow'>個室</span>でプライバシーを確保。<span class='font-bold marker-yellow'>天井テレビ</span>があるため、<span class='text-[#8B92AB] font-bold'>子供が通いやすい環境</span>を整備しています。"
      ],
      imageId: "feature3",
      imageAlt: "豊洲 歯医者 個室診療室 天井テレビ",
      icon: Smile,
      color: "from-yellow-100 to-orange-100",
      iconColor: "text-orange-500"
    },
    {
      id: "05",
      title: "「後悔しない」ための",
      highlight: "審美歯科",
      summary: "美しさと機能性を両立した治療",
      details: [
        "審美歯科で大事なのは、<span class='font-bold marker-yellow'>見た目と機能の両立</span>です。それを実現するために、当院では<span class='text-[#8B92AB] font-bold'>精密診療を行える環境</span>を整備しています。"
      ],
      imageId: "feature4",
      imageAlt: "豊洲 審美歯科 セラミック治療 ホワイトニング",
      icon: Sparkles,
      color: "from-purple-100 to-pink-100",
      iconColor: "text-purple-500"
    },
  ];



  return (
    <div className="min-h-screen bg-[#FAFAF8] font-serif font-light text-[15px] leading-relaxed text-[#5A4D41] selection:bg-[#8B92AB] selection:text-white relative">
      <Header />

      <main className="w-full overflow-hidden">
        {/* --- Hero Section (v4 Nordic Style) --- */}
        <section className="relative pt-48 pb-32 flex flex-col items-center justify-center min-h-[90vh] text-center px-4">

          <span className="inline-block bg-[#D8DBE6]/50 text-[#5A4D41] border border-[#D8DBE6] font-sans text-xs px-6 py-2 rounded-full tracking-widest mb-12 shadow-sm">
            新規開業のお知らせ
          </span>

          <h2 className="text-lg md:text-xl text-[#5A4D41]/80 mb-6 tracking-widest">
            0歳から通える歯科医院
          </h2>

          <h1 className="text-5xl md:text-8xl font-sans font-medium text-[#5A4D41] mb-6 tracking-tight flex items-baseline justify-center gap-2">
            2026<span className="text-2xl md:text-4xl font-serif font-light opacity-80">年</span>7<span className="text-2xl md:text-4xl font-serif font-light opacity-80">月</span>1<span className="text-2xl md:text-4xl font-serif font-light opacity-80">日</span>
          </h1>

          <p className="text-2xl md:text-4xl tracking-[0.2em] mb-24 text-[#8B92AB] font-medium">新規開業</p>

          <div className="max-w-4xl mx-auto space-y-8 relative z-10 w-full flex flex-col items-center">
            {/* Decorative vertical line */}
            <div className="w-[1px] h-32 bg-[#D8DBE6] text-center mx-auto mb-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-[#8B92AB]"></div>
            </div>

            <p className="text-3xl md:text-5xl font-medium leading-[1.6]">
              <span className="relative inline-block z-[1] text-4xl md:text-6xl font-bold after:content-[''] after:absolute after:bottom-0 after:left-[-2%] after:w-[104%] after:h-[40%] after:bg-[#D8DBE6] after:opacity-60 after:rounded-sm after:-z-[1]">豊洲駅</span>から<span className="relative inline-block z-[1] text-4xl md:text-6xl font-bold ml-2 after:content-[''] after:absolute after:bottom-0 after:left-[-2%] after:w-[104%] after:h-[40%] after:bg-[#D8DBE6] after:opacity-60 after:rounded-sm after:-z-[1]">徒歩2分</span> の歯医者
            </p>
            <p className="text-2xl md:text-3xl tracking-widest mt-8 text-[#5A4D41]/80">
              豊洲で0歳から通える歯科・歯医者
            </p>
          </div>

        </section>

        {/* --- Building & Schedule Section (v4 Style) --- */}
        <section className="py-24 relative">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Building Card - Glass Panel */}
            <div className="bg-white/85 backdrop-blur-[16px] border border-[#D8DBE6] p-4 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(90,77,65,0.05)] flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden group">
              <div className="w-full sm:w-1/2 rounded-[1.5rem] overflow-hidden aspect-[4/3] relative border border-[#D8DBE6]/30">
                <img
                  src="/images/building.avif"
                  alt="豊洲プライムスクエア"
                  className="w-full h-full object-cover grayscale-[30%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="w-full sm:w-1/2 p-4">
                <h3 className="text-2xl font-medium mb-4 tracking-wider">豊洲プライムスクエア1階</h3>
                <p className="text-[#5A4D41]/80 flex items-center gap-2 font-sans">
                  📍 「豊洲駅6a出口」徒歩2分
                </p>
              </div>
            </div>

            {/* Schedule Table */}
            <div className="w-full overflow-x-auto">
              <table className="w-full text-center border-collapse text-sm font-sans tracking-wide">
                <thead>
                  <tr className="border-b border-[#D8DBE6] text-[#5A4D41]/70">
                    <th className="py-4 font-normal">診療時間</th>
                    <th className="py-4 font-normal">月</th>
                    <th className="py-4 font-normal">火</th>
                    <th className="py-4 font-normal">水</th>
                    <th className="py-4 font-normal">木</th>
                    <th className="py-4 font-normal">金</th>
                    <th className="py-4 font-normal text-[#8B92AB]">土</th>
                    <th className="py-4 font-normal text-[#8B92AB]">日</th>
                  </tr>
                </thead>
                <tbody className="text-[#5A4D41]/90">
                  <tr className="border-b border-[#D8DBE6]/50 transition-colors hover:bg-[#D8DBE6]/20">
                    <td className="py-5 font-medium">10:00-13:00</td>
                    <td>●</td><td className="text-[#8B92AB]/30">−</td><td>●</td><td>●</td><td>●</td>
                    <td className="text-[#8B92AB] font-bold">★</td><td className="text-[#8B92AB] font-bold">★</td>
                  </tr>
                  <tr className="transition-colors hover:bg-[#D8DBE6]/20">
                    <td className="py-5 font-medium">14:00-19:00</td>
                    <td>●</td><td className="text-[#8B92AB]/30">−</td><td>●</td><td>●</td><td>●</td>
                    <td className="text-[#8B92AB] font-bold">★</td><td className="text-[#8B92AB] font-bold">★</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6 text-[11px] text-[#5A4D41]/60 flex flex-col items-end space-y-1 font-sans">
                <p>★ 土日：9:00-12:00 / 13:00-17:00</p>
                <p>休診日：火曜日</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Doctor Section (v4 Style) --- */}
        <section className="py-32 bg-[#F5F2EE] relative border-y border-[#D8DBE6]/30 w-full overflow-hidden">
          {/* Decorative accent line */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#D8DBE6]/50"></div>

          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-24 space-y-4">
              <span className="font-sans text-xs tracking-[0.3em] text-[#8B92AB] uppercase">Doctor</span>
              <h2 className="text-4xl font-light tracking-widest">ドクター紹介</h2>
            </div>

            {/* --- Profile Grid (v4) --- */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
              {/* Photo Left */}
              <div className="relative">
                {/* Accent Bar Decoration */}
                <div className="absolute -right-6 top-12 w-[2px] h-32 bg-[#D8DBE6]"></div>
                <div className="absolute -left-2 -bottom-2 w-full h-full border border-[#D8DBE6] rounded-t-full rounded-b-[4rem] z-0"></div>

                <div className="rounded-t-full rounded-b-[4rem] overflow-hidden aspect-[3/4] relative z-10 shadow-[0_20px_40px_-15px_rgba(90,77,65,0.05)] border border-[#D8DBE6]/50 group">
                  <PageImage
                    path="/homepage"
                    imageId="doctor"
                    alt="院長 福永真大"
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    />
                </div>
              </div>

              {/* Info Right */}
              <div className="flex flex-col justify-center space-y-12">
                <div>
                  <p className="text-xs text-[#5A4D41]/60 mb-3 tracking-widest font-sans">院長</p>
                  <h3 className="text-4xl lg:text-5xl mb-4 font-medium flex flex-col sm:flex-row sm:items-end gap-4 border-b border-[#D8DBE6] pb-6">
                    福永　真大
                    <span className="text-sm font-sans font-light text-[#5A4D41]/70 pb-1">Masahiro Fukunaga / 院長・歯科医師</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-10 text-sm">
                  <div>
                    <h4 className="font-medium mb-4 flex items-center gap-3 text-lg">
                      <span className="w-8 h-8 rounded-full bg-[#D8DBE6]/40 flex items-center justify-center text-[#8B92AB]">🎓</span>
                      経歴
                    </h4>
                    <ul className="space-y-4 text-[#5A4D41]/80 leading-relaxed font-sans mt-6 ml-4 border-l border-[#D8DBE6] pl-6">
                      <li className="relative before:content-[''] before:w-2 before:h-2 before:bg-[#D8DBE6] before:rounded-full before:absolute before:-left-[29px] before:top-2">大阪大学歯学部 卒業</li>
                      <li className="relative before:content-[''] before:w-2 before:h-2 before:bg-[#D8DBE6] before:rounded-full before:absolute before:-left-[29px] before:top-2">大手医療法人にて研修医指導医・診療主任を歴任</li>
                      <li className="relative before:content-[''] before:w-2 before:h-2 before:bg-[#D8DBE6] before:rounded-full before:absolute before:-left-[29px] before:top-2">都内歯科医院 副院長</li>
                      <li className="relative before:content-[''] before:w-2 before:h-2 before:bg-[#D8DBE6] before:rounded-full before:absolute before:-left-[29px] before:top-2">Fデンタルオフィス 豊洲プライムスクエア院 開業</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-4 flex items-center gap-3 text-lg">
                      <span className="w-8 h-8 rounded-full bg-[#D8DBE6]/40 flex items-center justify-center text-[#8B92AB]">📜</span>
                      所属学会
                    </h4>
                    <p className="text-[#5A4D41]/80 leading-[2.5] font-sans text-sm bg-white/70 p-6 rounded-[1.5rem] border border-[#D8DBE6]/50 shadow-sm mt-4">
                      日本小児歯科学会 / 日本矯正歯科学会 / 日本歯周病学会 / 日本口腔インプラント学会 / 日本審美歯科学会
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Message Card - Glass Panel */}
            <div className="mt-24 bg-white/85 backdrop-blur-[16px] border border-[#D8DBE6] p-8 md:p-16 rounded-[2.5rem] shadow-[0_30px_60px_-20px_rgba(90,77,65,0.08)] relative">
              <span className="text-[120px] absolute -top-4 -left-4 text-[#D8DBE6]/30 z-0 leading-none font-serif">&ldquo;</span>
              <h4 className="text-2xl font-medium mb-12 text-center relative z-10 border-b border-[#D8DBE6] pb-4 max-w-sm mx-auto tracking-wider">
                当院が大切にしていること
              </h4>
              <div className="space-y-8 text-sm md:text-base leading-[2.2] relative z-10 md:px-12 text-[#5A4D41]/90 text-justify">
                <p>
                  私の父は、30年近く小児矯正に携わってきた歯科医師です。幼い頃からその背中を見て育ち、歯並びや噛み合わせが日々の習慣で大きく変わることを学んできました。当院のコンセプトは「未来のいいお顔を育てる」。これはお子様だけに向けた言葉ではありません。矯正後の後戻り、顔の歪み — その多くは呼吸・姿勢・噛み癖といった習慣に原因があります。お子様の口腔育成から大人の矯正・審美治療まで、習慣へのアプローチを軸に、年齢を問わずお口と表情の健康を整えていく歯科医院です。
                </p>
                <p>
                  大阪大学歯学部を卒業後、大規模医療法人にて一般歯科・インプラント・矯正・審美治療など幅広い症例を経験し、研修医指導医も務めました。その中で強く感じたのは、良い治療が患者様に正しく届いていないという現実です。私自身は大学まで野球に打ち込み、噛み合わせや口呼吸がパフォーマンスに直結することも実感してきました。歯並びと全身の健康の関係を、スポーツを頑張るお子様や保護者の方にも届けたいと考えています。
                </p>
                <p>
                  父から受け継いだ口腔育成への想い、臨床で培った技術、そして患者様に「伝わる」情報発信力。この3つを軸に、「もっと早く知りたかった」「あの時聞けてよかった」— そう感じていただける歯科医院を目指しています。
                </p>
              </div>
            </div>

            {/* Kids Site Banner */}
            <div className="mt-20 text-center max-w-4xl mx-auto rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(90,77,65,0.05)] hover:shadow-[0_30px_60px_-20px_rgba(90,77,65,0.08)] transition-all duration-500 border border-[#D8DBE6] bg-white group">
              <a href="/kidsortho" className="block w-full">
                <img
                  src="/kids-orthodontics-banner.png"
                  alt="豊洲 Fデンタルオフィス こども矯正 小児矯正"
                  className="w-full h-auto transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
              </a>
            </div>
          </div>
        </section>

        {/* --- Problem / Reservation Section (v4 Dark Overlay) --- */}
        <section className="relative py-32 overflow-hidden flex flex-col items-center justify-center min-h-[60vh] border-b border-[#D8DBE6]/50">
          {/* Background Image with overlay */}
          <div className="absolute inset-0 z-0">
            <img src="/images/problem-bg-v2.jpg" alt="豊洲 歯科 歯医者 お悩み相談" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#5A4D41]/85 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#5A4D41]/90 to-[#5A4D41]/70"></div>
          </div>

          <div className="relative z-10 text-[#FAFAF8] text-center max-w-4xl mx-auto px-6 space-y-12 w-full">
            <h2 className="text-3xl md:text-5xl font-light tracking-widest mb-16 leading-relaxed">こんなお悩み<br />ありませんか？</h2>

            {/* Glass panel problem list */}
            <div className="bg-white/85 backdrop-blur-[16px] border border-[#D8DBE6]/30 bg-opacity-5 p-10 md:p-14 rounded-[2.5rem] inline-block text-left relative overflow-hidden shadow-2xl" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B92AB]/20 blur-3xl rounded-full"></div>
              {[
                "子供の歯並びが気になる...",
                "銀歯を白くしたい...",
                "痛くない治療を受けたい...",
                "インプラントに興味がある..."
              ].map((problem, i) => (
                <div key={i} className={`flex items-center gap-6 text-lg md:text-xl font-medium tracking-wider relative z-10 ${i < 3 ? 'border-b border-[#D8DBE6]/20 pb-4 mb-8' : ''}`}>
                  <span className="text-[#D8DBE6] text-2xl">&#10004;</span>
                  <p className="text-[#FAFAF8]">
                    {problem}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-16 pb-8 space-y-6">
              <p className="text-xl mb-6 text-[#D8DBE6] tracking-widest">こんなお悩み全て...</p>
              <p className="text-lg tracking-widest text-[#8B92AB] bg-white/90 px-6 py-2 rounded-full inline-block font-medium">豊洲駅から徒歩2分の歯医者</p>
              <h3 className="text-4xl md:text-6xl font-serif mb-4 tracking-wider leading-tight mt-10 text-[#FAFAF8]">
                Fデンタルオフィス<br />
                <span className="text-2xl md:text-4xl mt-6 inline-block font-light text-[#D8DBE6]">豊洲プライムスクエア院</span>
              </h3>
              <p className="text-2xl mt-12 tracking-widest text-[#D8DBE6]">で解決！</p>
            </div>

            {/* CTA Banners */}
            <div className="max-w-2xl mx-auto rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-20px_rgba(90,77,65,0.08)] mt-12 border border-[#D8DBE6]/30 transition-transform duration-500 hover:-translate-y-2">
              <a href="#" className="block relative w-full pt-[25%] bg-white group hover:bg-[#D8DBE6]/5 transition-colors">
                <img src="/images/web-reserve-banner-v3.png" alt="豊洲 歯医者 24時間WEB予約受付中 Fデンタルオフィス" className="absolute inset-0 w-full h-full object-cover" />
              </a>
            </div>

            <a href="tel:03-1234-5678" className="inline-flex items-center justify-center gap-6 border border-[#D8DBE6]/50 bg-[#5A4D41]/50 backdrop-blur-xl text-white px-10 py-6 rounded-full mx-auto mt-10 hover:bg-[#5A4D41]/80 transition-colors shadow-[0_20px_40px_-15px_rgba(90,77,65,0.05)]">
              <Phone size={28} className="text-[#D8DBE6]" />
              <div className="text-left font-sans">
                <p className="text-3xl font-light tracking-wider">03-1234-5678</p>
                <p className="text-[11px] text-[#D8DBE6] mt-1">受付時間：平日 10:00-18:30 / 土日 9:00-16:00</p>
              </div>
            </a>
          </div>
        </section>

        {/* --- Features Section (v4 Premium Interlocking Cards) --- */}
        <section className="py-40 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-32 space-y-4">
              <span className="font-sans text-xs tracking-[0.3em] text-[#8B92AB] uppercase">Features</span>
              <h2 className="text-4xl font-light tracking-widest">当院の5つの特徴</h2>
              <div className="w-16 h-px bg-[#D8DBE6] mx-auto mt-6"></div>
            </div>

            <div className="space-y-0">
              {featureHighlights.map((feature, index) => (
                <div
                  key={feature.id}
                  className="relative w-full mb-32 lg:mb-40 last:mb-0 group/feat"
                >
                  {/* Floating Watermark Number */}
                  <div className={`hidden md:block absolute -top-16 ${index % 2 === 0 ? '-left-8' : '-right-8 text-right w-full'} text-[200px] leading-none font-black text-[#D8DBE6]/30 font-sans z-0 select-none transition-transform duration-1000 ${index % 2 === 0 ? 'group-hover/feat:translate-x-4' : 'group-hover/feat:-translate-x-4'}`}>
                    {feature.id}
                  </div>

                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center relative z-10 w-full`}>
                    {/* Image Side - 65% width */}
                    <div className="w-full lg:w-[65%] rounded-[2vw] overflow-hidden shadow-[0_20px_40px_-15px_rgba(90,77,65,0.05)] border border-[#D8DBE6] bg-white aspect-[4/3] shrink-0 group">
                      <PageImage
                        path="/homepage"
                        imageId={feature.imageId}
                        alt={feature.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* Text Card overlapping image */}
                    <div className={`w-[92%] lg:w-[45%] ${index % 2 === 0 ? 'lg:-ml-[10%]' : 'lg:-mr-[10%]'} bg-white/95 backdrop-blur-xl border border-[#D8DBE6] p-10 lg:p-16 rounded-[2rem] shadow-[0_30px_60px_-20px_rgba(90,77,65,0.08)] relative z-20 -mt-16 lg:mt-0 group-hover/feat:-translate-y-2 transition-transform duration-700`}>
                      {/* Mobile watermark */}
                      <span className={`md:hidden text-6xl font-black text-[#D8DBE6]/40 font-sans absolute top-4 ${index % 2 === 0 ? 'right-8' : 'left-8'} z-0`}>
                        {feature.id}
                      </span>
                      <div className="relative z-10">
                        <h3 className="text-2xl lg:text-[28px] font-medium text-[#5A4D41] mb-6 leading-[1.6]">
                          {feature.title}<br />
                          <span dangerouslySetInnerHTML={{ __html: feature.highlight }}></span>
                        </h3>
                        <div className="w-12 h-px bg-[#D8DBE6] mb-8"></div>

                        {/* Details Section */}
                        {feature.details.map((detail, i) => (
                          <p key={i} className="text-[13px] lg:text-sm text-[#5A4D41]/80 leading-[2.2] mb-8" dangerouslySetInnerHTML={{ __html: detail }}>
                          </p>
                        ))}

                        {feature.id === "02" && (
                          <a
                            href="/kidsortho"
                            className="inline-flex items-center gap-3 bg-[#8B92AB] text-white font-sans text-xs hover:bg-[#8B92AB]/90 transition-colors px-6 py-3 rounded-full shadow-sm"
                          >
                            詳細
                          </a>
                        )}
                        {feature.id === "04" && (
                          <a
                            href="/ceramic"
                            className="inline-flex items-center gap-3 bg-[#8B92AB] text-white font-sans text-xs hover:bg-[#8B92AB]/90 transition-colors px-6 py-3 rounded-full shadow-sm"
                          >
                            詳細
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Case Studies Section (v4 Grid) --- */}
        <section className="py-32 bg-[#F5F2EE] border-y border-[#D8DBE6]/30 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20 space-y-4">
              <span className="font-sans text-xs tracking-[0.3em] text-[#8B92AB] uppercase">Case Studies</span>
              <h2 className="text-4xl font-light tracking-widest">症例紹介</h2>
              <div className="w-16 h-px bg-[#D8DBE6] mx-auto mt-6"></div>
            </div>

            {/* Case Study Grid - 2x2 on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
              {caseStudies.map((caseStudy, index) => (
                <div
                  key={caseStudy.id}
                  className="bg-white border border-[#D8DBE6] p-8 lg:p-10 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(90,77,65,0.05)] transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(90,77,65,0.08)]"
                >
                  {/* Title Section */}
                  <div className="flex items-center gap-4 mb-8">
                    <span className="bg-[#F5F2EE] border border-[#D8DBE6] text-[#5A4D41] font-sans text-[11px] font-medium px-4 py-1.5 rounded-full tracking-widest">{caseStudy.patient}</span>
                    <h3 className="text-xl font-medium tracking-wide">
                      {caseStudy.title}
                    </h3>
                  </div>

                  {/* Before/After Images */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* Before */}
                    <div className="space-y-3">
                      <span className="text-[10px] font-sans text-[#D8DBE6] uppercase tracking-[0.2em] font-medium border-b border-[#D8DBE6]/50 pb-1 block">Before</span>
                      <div className="rounded-[1.5rem] overflow-hidden aspect-[4/3] border border-[#D8DBE6]/30">
                        <PageImage
                          path="/homepage"
                          imageId={caseStudy.beforeId}
                          alt={`${caseStudy.title} - Before`}
                          className="w-full h-full object-cover opacity-80 mix-blend-multiply grayscale-[50%]"
                        />
                      </div>
                    </div>

                    {/* After */}
                    <div className="space-y-3">
                      <span className="text-[10px] font-sans text-[#8B92AB] uppercase tracking-[0.2em] font-bold border-b border-[#D8DBE6] pb-1 block">After</span>
                      <div className="rounded-[1.5rem] overflow-hidden aspect-[4/3] border border-[#D8DBE6]/50 shadow-inner">
                        <PageImage
                          path="/homepage"
                          imageId={caseStudy.afterId}
                          alt={`${caseStudy.title} - After`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-20">
              <a
                href="/case-studies"
                className="inline-flex items-center gap-3 bg-[#8B92AB] text-white font-sans px-10 py-5 rounded-full shadow-[0_20px_40px_-15px_rgba(90,77,65,0.05)] hover:bg-[#8B92AB]/90 hover:scale-105 transition-all tracking-widest text-[13px]"
              >
                <span>すべての症例を見る</span>
                <ChevronRight size={16} />
              </a>
            </div>

            {/* Mid-page CTA Banner Grid */}
            <div className="mt-32 max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
              <a href="#" className="flex-1 block relative rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(90,77,65,0.05)] hover:-translate-y-1 transition-transform group border border-[#D8DBE6]">
                <img src="/images/web-reserve-banner-v3.png" alt="豊洲 歯医者 24時間WEB予約受付中 Fデンタルオフィス" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </a>
              <a href="tel:03-1234-5678" className="flex-1 bg-white/85 backdrop-blur-[16px] border border-[#D8DBE6] flex flex-col items-center justify-center p-10 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(90,77,65,0.05)] hover:-translate-y-1 transition-transform group">
                <Phone size={36} className="text-[#8B92AB] mb-6 group-hover:rotate-[15deg] transition-transform" />
                <span className="text-4xl font-sans font-light tracking-wider mb-3 text-[#5A4D41]">03-1234-5678</span>
                <span className="text-[13px] font-sans text-[#D8DBE6] uppercase tracking-widest">お気軽にお電話ください</span>
              </a>
            </div>
          </div>
        </section>

        {/* --- Facilities Section (v4 Grid with Overlay) --- */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24 space-y-4">
              <span className="font-sans text-xs tracking-[0.3em] text-[#8B92AB] uppercase">Facilities</span>
              <h2 className="text-4xl font-light tracking-widest">院内設備</h2>
              <div className="w-16 h-px bg-[#D8DBE6] mx-auto mt-6"></div>
            </div>

            {/* Facility Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {facilityImages.map((img, index) => (
                <div key={index} className="rounded-[2.5rem] border border-[#D8DBE6] overflow-hidden aspect-[4/3] group relative shadow-[0_20px_40px_-15px_rgba(90,77,65,0.05)]">
                  <PageImage
                    path="/homepage"
                    imageId={img.imageId}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[10%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5A4D41]/70 via-transparent to-transparent flex items-end p-8 md:p-12">
                    <p className="text-[#FAFAF8] tracking-widest text-lg font-medium">{img.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-20">
              <a
                href="/facilities"
                className="inline-flex items-center gap-3 bg-white border border-[#D8DBE6] text-[#5A4D41] px-10 py-5 rounded-full shadow-sm hover:bg-[#F5F2EE] hover:shadow-md transition-all tracking-widest text-[13px] font-sans"
              >
                <span>院内設備を見る</span>
                <ChevronRight size={16} className="text-[#8B92AB]" />
              </a>
            </div>
          </div>
        </section>


        {/* --- Flow Section (v4 Timeline) --- */}
        <section className="py-32 bg-[#F5F2EE] border-y border-[#D8DBE6]/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-24 space-y-4">
              <h2 className="text-4xl font-light tracking-widest pb-4">診療の流れ</h2>
              <div className="w-16 h-px bg-[#D8DBE6] mx-auto mt-6"></div>
            </div>

            <div className="relative pl-14 md:pl-24 space-y-28">
              {/* Timeline vertical line */}
              <div className="hidden md:block absolute left-[51px] top-0 bottom-0 w-[1px] bg-[#D8DBE6] z-0"></div>
              <div className="md:hidden absolute left-[31px] top-0 bottom-0 w-[1px] bg-[#D8DBE6] z-0"></div>

              {[
                {
                    num: "01",
                    title: "ご予約・ご来院",
                    desc: "WEBまたはお電話にてご予約ください。初診の方は問診票の記入がありますので、10分前にお越しください。",
                    imageId: "スマホで予約する人"
                  },
                  {
                    num: "02",
                    title: "症状のカウンセリング",
                    desc: "現在のお悩みや症状について詳しくお伺いします。不安なことや気になることは何でもご相談ください。",
                    imageId: "受付で挨拶している場面"
                  },
                  {
                    num: "03",
                    title: "レントゲン撮影",
                    desc: "お口の状態を正確に把握するため、レントゲン撮影を行います。必要に応じて歯科用CTでの撮影も実施します。",
                    imageId: "カウンセリングで医師と患者が話している場面"
                  },
                  {
                    num: "04",
                    title: "歯周病検査、口腔内写真の撮影",
                    desc: "歯周ポケットの深さを測定し、口腔内写真を撮影します。現在の状態を視覚的に確認いただけます。",
                    imageId: "治療中の場面"
                  },
                  {
                    num: "05",
                    title: "治療計画の説明",
                    desc: "検査結果に基づき、最適な治療プランをご提案します。費用や期間についても詳しくご説明します。",
                    imageId: "次回予約をしている場面"
                  },
                  {
                    num: "06",
                    title: "治療開始",
                    desc: "同意いただいたプランに沿って治療を進めます。痛みに配慮し、丁寧な処置を心がけます。",
                    imageId: "step6"
                  }
                ].map((step, index, arr) => (
                  <div key={index} className="relative z-10 group">
                    {/* Timeline dot */}
                    <div className={`absolute -left-14 md:-left-[4.5rem] top-0 w-14 h-14 rounded-full border flex items-center justify-center font-sans text-lg tracking-wider font-light shadow-sm transition-all duration-300 ${index === arr.length - 1 ? 'bg-[#8B92AB] text-white border-[#8B92AB] shadow-md shadow-[#8B92AB]/20 scale-110' : 'bg-white border-[#D8DBE6] text-[#8B92AB] group-hover:scale-110 group-hover:bg-[#8B92AB] group-hover:text-white'}`}>
                      {step.num}
                    </div>
                    <h4 className={`text-2xl font-medium mb-8 pt-3 tracking-wide ${index === arr.length - 1 ? 'text-[#8B92AB]' : ''}`}>{step.title}</h4>
                    {/* Image */}
                    <div className={`bg-white border border-[#D8DBE6] p-3 rounded-[2.5rem] inline-block mb-8 shadow-sm ${index === arr.length - 1 ? 'ring-2 ring-[#8B92AB]/20' : ''}`}>
                      <PageImage
                        path="/homepage"
                        imageId={step.imageId}
                        alt={step.title}
                        className={`rounded-[2rem] w-full max-w-md object-cover ${index === arr.length - 1 ? '' : 'grayscale-[20%]'}`}
                      />
                    </div>
                    {/* Description */}
                    <p className="text-[#5A4D41]/80 leading-loose max-w-2xl bg-white p-8 rounded-3xl border border-[#D8DBE6] shadow-sm text-sm">{step.desc}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* --- Treatment Menu (v4 Circle Icons) --- */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl font-light tracking-widest mb-6 border-b border-[#D8DBE6] inline-block pb-4">診療メニュー</h2>
              <p className="text-[#5A4D41]/60 text-sm mt-4 tracking-widest">あらゆるお口のお悩みに対応いたします</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {menuItems.map((menu, i) => (
                <a key={i} href={menu.link} className="group flex flex-col items-center bg-white p-6 rounded-[2rem] border border-[#D8DBE6] shadow-sm hover:shadow-[0_30px_60px_-20px_rgba(90,77,65,0.08)] transition-all duration-300 hover:-translate-y-2">
                  <div className="w-[80px] h-[80px] bg-[#D8DBE6] rounded-full flex items-center justify-center mb-5 group-hover:bg-[#8B92AB] transition-colors duration-300">
                    {/* @ts-ignore */}
                    {menu.iconImage ? (
                      <img src={menu.iconImage} alt={menu.name} className="w-10 opacity-70 mix-blend-multiply group-hover:grayscale group-hover:brightness-200 group-hover:contrast-100 transition-all" />
                    ) : (
                      <menu.icon strokeWidth={1.5} className="w-10 h-10 text-[#5A4D41] opacity-70 group-hover:text-white transition-colors" />
                    )}
                  </div>
                  <strong className="text-[13px] font-medium tracking-wider text-center text-[#5A4D41] group-hover:text-[#8B92AB] transition-colors">{menu.name}</strong>
                </a>
              ))}
            </div>
            <div className="text-center mt-12 text-[11px] text-[#5A4D41]/50 font-sans tracking-[0.2em] uppercase border-t border-[#D8DBE6] pt-6">
              <p>※ 症例により適切な専門医が担当します</p>
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}
