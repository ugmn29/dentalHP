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
    <div className="min-h-screen bg-[#FAFAF8] font-sans text-[#5A4D41] selection:bg-[#8B92AB] selection:text-white">
      <Header />

      <main>
        {/* --- Hero Section (v7 Nordic Style) --- */}
        <section className="relative w-full min-h-[70vh] overflow-hidden bg-[#FAFAF8] flex flex-col items-center justify-center text-center px-4 pt-24 pb-12 sm:pt-32 sm:pb-20">

          <div className="inline-block bg-[#D8DBE6]/40 text-[#5A4D41] text-xs px-6 py-2 rounded-full tracking-widest mb-4 border border-[#D8DBE6]">
            新規開業のお知らせ
          </div>

          <p className="text-base sm:text-xl font-serif text-[#5A4D41]/80 mb-4 tracking-widest">
            0歳から通える歯科医院
          </p>

          <h2 className="hero-heading font-serif font-bold text-[#5A4D41] mb-4 tracking-tight w-full">
            2026年7月1日<br className="block sm:hidden" />新規開業
          </h2>

          <div className="mt-6 sm:mt-10 w-full max-w-4xl mx-auto space-y-4">
            <p className="hero-subtitle font-sans font-bold text-center w-full whitespace-nowrap">
              豊洲駅から<span className="marker-50 font-black">徒歩2分</span>の歯医者
            </p>
            <h1 className="text-base sm:text-2xl mt-4 font-serif tracking-widest text-[#5A4D41]/80 w-full">
              0歳から通える歯科・矯正歯科
            </h1>
          </div>

        </section>

        {/* --- Building & Schedule Section (v7 Style) --- */}
        <section className="py-12 bg-white relative border-y border-[#D8DBE6]/30 w-full overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Building Card */}
            <div className="w-full lg:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <img
                src="/images/building.avif"
                alt="豊洲プライムスクエア"
                className="w-full max-w-[300px] h-auto rounded-3xl object-cover shadow-sm mb-4"
              />
              <h3 className="text-xl font-bold font-serif mb-2">豊洲プライムスクエア1階</h3>
              <p className="text-[#5A4D41]/70 flex items-center justify-center sm:justify-start gap-2 font-sans text-sm">
                📍 「豊洲駅6a出口」徒歩2分
              </p>
            </div>

            {/* Schedule Table */}
            <div className="w-full lg:w-3/5 bg-[#FAFAF8] rounded-2xl p-4 sm:p-6 text-sm font-sans shadow-inner">
              <table className="w-full text-center table-fixed border-collapse">
                <thead>
                  <tr className="border-b border-[#D8DBE6]">
                    <th className="py-3 font-normal text-[10px] sm:text-xs text-[#5A4D41] bg-white rounded-tl-lg">診療時間</th>
                    <th className="py-3 font-medium text-xs sm:text-sm">月</th>
                    <th className="py-3 font-medium text-xs sm:text-sm">火</th>
                    <th className="py-3 font-medium text-xs sm:text-sm">水</th>
                    <th className="py-3 font-medium text-xs sm:text-sm">木</th>
                    <th className="py-3 font-medium text-xs sm:text-sm">金</th>
                    <th className="py-3 font-medium text-xs sm:text-sm text-[#8B92AB]">土</th>
                    <th className="py-3 font-medium text-xs sm:text-sm text-[#8B92AB] rounded-tr-lg">日</th>
                  </tr>
                </thead>
                <tbody className="text-base sm:text-lg">
                  <tr className="border-b border-[#D8DBE6]/50 bg-white">
                    <td className="py-3 font-medium text-[10px] sm:text-xs">10:00-13:00</td>
                    <td>●</td><td className="text-[#5A4D41]/20">−</td><td>●</td><td>●</td><td>●</td>
                    <td className="text-[#8B92AB] text-sm">★</td><td className="text-[#8B92AB] text-sm">★</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 font-medium text-[10px] sm:text-xs rounded-bl-lg">14:00-19:00</td>
                    <td>●</td><td className="text-[#5A4D41]/20">−</td><td>●</td><td>●</td><td>●</td>
                    <td className="text-[#8B92AB] text-sm">★</td><td className="text-[#8B92AB] text-sm rounded-br-lg">★</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4 text-[10px] sm:text-xs text-[#5A4D41]/70 text-right space-y-1 bg-white p-3 rounded-lg">
                <p>★ 土日：9:00-12:00 / 13:00-17:00</p>
                <p className="font-bold text-[#8B92AB]">休診日：火曜日</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Doctor Section (v7 Style) --- */}
        <section className="py-16 md:py-24 bg-[#F5F2EE] relative border-y border-[#D8DBE6]/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#D8DBE6]/50"></div>
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <span className="font-sans text-xs tracking-[0.3em] text-[#8B92AB] uppercase">Doctor</span>
              <h2 className="text-4xl font-light tracking-widest">ドクター紹介</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
              {/* Photo */}
              <div className="relative">
                <div className="absolute -left-2 -bottom-2 w-full h-full border border-[#D8DBE6] rounded-t-full rounded-b-[4rem] z-0"></div>
                <div className="rounded-t-full rounded-b-[4rem] overflow-hidden aspect-[3/4] relative z-10 shadow-card border border-[#D8DBE6]/50">
                  <PageImage
                    path="/homepage"
                    imageId="doctor"
                    alt="院長 福永真大"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <p className="text-xs text-[#5A4D41]/60 mb-3 tracking-widest font-sans">院長</p>
                  <h3 className="text-4xl lg:text-5xl mb-4 font-medium flex flex-col sm:flex-row sm:items-end gap-4 border-b border-[#D8DBE6] pb-6">
                    福永　真大
                    <span className="text-sm font-sans font-light text-[#5A4D41]/70 pb-1">Masahiro Fukunaga / 院長・歯科医師</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-8 text-sm">
                  <div>
                    <h4 className="font-medium mb-4 flex items-center gap-3 text-lg">
                      <span className="w-8 h-8 rounded-full bg-[#D8DBE6]/40 flex items-center justify-center text-[#8B92AB] text-sm">🎓</span>
                      経歴
                    </h4>
                    <ul className="space-y-4 text-[#5A4D41]/80 leading-relaxed font-sans mt-4 ml-4 border-l border-[#D8DBE6] pl-6">
                      <li className="relative before:content-[''] before:w-2 before:h-2 before:bg-[#D8DBE6] before:rounded-full before:absolute before:-left-[29px] before:top-2">大阪大学歯学部 卒業</li>
                      <li className="relative before:content-[''] before:w-2 before:h-2 before:bg-[#D8DBE6] before:rounded-full before:absolute before:-left-[29px] before:top-2">大手医療法人にて研修医指導医・診療主任を歴任</li>
                      <li className="relative before:content-[''] before:w-2 before:h-2 before:bg-[#D8DBE6] before:rounded-full before:absolute before:-left-[29px] before:top-2">都内歯科医院 副院長</li>
                      <li className="relative before:content-[''] before:w-2 before:h-2 before:bg-[#D8DBE6] before:rounded-full before:absolute before:-left-[29px] before:top-2">Fデンタルオフィス 豊洲プライムスクエア院 開業</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-4 flex items-center gap-3 text-lg">
                      <span className="w-8 h-8 rounded-full bg-[#D8DBE6]/40 flex items-center justify-center text-[#8B92AB] text-sm">📜</span>
                      所属学会
                    </h4>
                    <p className="text-[#5A4D41]/80 leading-[2.5] font-sans text-sm bg-white/70 p-6 rounded-[1.5rem] border border-[#D8DBE6]/50 shadow-sm mt-4">
                      日本小児歯科学会 / 日本矯正歯科学会 / 日本歯周病学会 / 日本口腔インプラント学会 / 日本審美歯科学会
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Message */}
            <div className="mt-16 glass-bright p-8 md:p-16 rounded-[2.5rem] shadow-glass relative border border-[#D8DBE6]">
              <h4 className="text-2xl font-medium mb-8 text-center relative z-10 border-b border-[#D8DBE6] pb-4 max-w-sm mx-auto tracking-wider">当院が大切にしていること</h4>
              <div className="space-y-6 text-sm md:text-base leading-[2.2] relative z-10 md:px-12 text-[#5A4D41]/90 text-justify">
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
            <div className="mt-16 text-center max-w-4xl mx-auto rounded-[2rem] overflow-hidden shadow-card hover:-translate-y-1 transition-transform duration-500 border border-[#D8DBE6]/30">
              <a href="/kidsortho" className="block">
                <img
                  src="/kids-orthodontics-banner.png"
                  alt="豊洲 Fデンタルオフィス こども矯正 小児矯正"
                  className="w-full h-auto"
                />
              </a>
            </div>
          </div>
        </section>

        {/* --- Problem Section (Modern Light Design) --- */}
        <section className="relative overflow-hidden py-12 md:py-16 bg-gradient-to-b from-[#F5F2EE] to-white">
          {/* Decorative background shapes */}
          <div className="absolute top-10 left-0 w-64 h-64 bg-[#D8DBE6]/20 rounded-full blur-3xl -translate-x-1/2"></div>
          <div className="absolute bottom-10 right-0 w-48 h-48 bg-[#D8DBE6]/15 rounded-full blur-3xl translate-x-1/3"></div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Title */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">
                こんなお悩み<br className="md:hidden" />ありませんか？
              </h2>
              <div className="w-12 h-0.5 bg-[#D8DBE6] mx-auto mt-4"></div>
            </div>

            {/* Problem Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
              {[
                "子供の歯並びが気になる...",
                "銀歯を白くしたい...",
                "痛くない治療を受けたい...",
                "インプラントに興味がある..."
              ].map((problem, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-[#D8DBE6]/50 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#8B92AB] flex-shrink-0"></div>
                    <p className="text-[#5A4D41] text-sm md:text-base font-medium">
                      {problem}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrow */}
            <div className="flex justify-center mb-8">
              <div className="flex flex-col items-center gap-1">
                <div className="w-0.5 h-8 bg-gradient-to-b from-[#D8DBE6] to-[#8B92AB]"></div>
                <svg width="24" height="12" viewBox="0 0 24 12"><polygon points="2,0 22,0 12,10" fill="#8B92AB" /></svg>
              </div>
            </div>

            {/* Solution */}
            <div className="text-center">
              <p className="text-[#8D8070] text-xs md:text-sm font-bold mb-1">
                <strong>豊洲駅から徒歩2分の歯医者</strong>
              </p>
              <h2 className="font-black text-[#5A4D41] text-center mb-2" style={{ fontFamily: 'Georgia, "Yu Mincho", "Hiragino Mincho ProN", serif' }}>
                <div className="text-[9vw] sm:text-5xl md:text-7xl">Fデンタルオフィス</div>
                <div className="text-[7vw] sm:text-4xl md:text-5xl mt-1">豊洲プライムスクエア院</div>
              </h2>
              <p className="text-[#5A4D41] text-2xl md:text-3xl font-bold mb-8">
                で解決！
              </p>
          </div>
          </div>

          {/* CTA in light section */}
          <div className="bg-white py-8 -mt-1">
            <div className="container mx-auto px-4">
              {/* Solution Message */}
              <div className="text-center">
                <p className="text-[#5A4D41] text-xl md:text-2xl font-bold mb-4">
                  こんなお悩み全て...
                </p>
                <div className="relative inline-block mb-2">
                  <p className="text-[#8D8070] text-xs md:text-sm font-bold mb-1">
                    <strong>豊洲駅から徒歩2分の歯医者</strong>
                  </p>
                  <h2 className="font-black text-[#5A4D41] text-center" style={{ fontFamily: 'Georgia, "Yu Mincho", "Hiragino Mincho ProN", serif' }}>
                    <div className="text-[9vw] sm:text-5xl md:text-7xl">Fデンタルオフィス</div>
                    <div className="text-[7vw] sm:text-4xl md:text-5xl mt-1">豊洲プライムスクエア院</div>
                  </h2>
                </div>
                <p className="text-[#5A4D41] text-2xl md:text-3xl font-bold mb-8">
                  で解決！
                </p>

                {/* CTA Button */}
                <button className="bg-gradient-to-r from-[#8B92AB] to-[#6B7394] hover:from-[#6B7394] hover:to-[#5A6080] text-white px-8 md:px-12 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 2 L8 6 M16 2 L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M3 10 L21 10" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  WEB予約はこちら
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 4 L13 10 L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA Section (Between Problem & Features) --- */}
        <section className="py-12 bg-[#FAFAF8]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
              {/* Web Reservation */}
              <button className="flex-1 shadow-lg transform hover:-translate-y-1 transition-all duration-300 group">
                <img
                  src="/images/web-reserve-banner-v3.png"
                  alt="豊洲 歯医者 24時間WEB予約受付中 Fデンタルオフィス"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </button>

              {/* Phone Reservation */}
              <a href="tel:03-1234-5678" className="flex-1 bg-white border-2 border-[#D0D3DE] text-[#5A4D41] hover:bg-[#EDEEF3] py-6 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-2 group">
                <div className="flex items-center gap-3">
                  <Phone size={32} className="group-hover:scale-110 transition-transform" />
                  <span className="text-2xl font-bold">03-1234-5678</span>
                </div>
                <p className="text-xs text-[#8D8070]">受付時間：平日 10:00-18:30 / 土日 9:00-16:00</p>
              </a>
            </div>
          </div>
        </section>

        {/* --- Features Section (Refined Zig-Zag) --- */}
        <section className="pt-8 pb-8 bg-[#FAFAFA] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-8">
              <div className="inline-block relative">
                <span className="text-[#8B92AB] font-bold tracking-[0.3em] text-xs md:text-sm block mb-3 uppercase opacity-70" style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}>FEATURES</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif relative">
                  当院の<span className="text-[#8B92AB]">5つの特徴</span>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#8B92AB] to-transparent"></div>
                </h2>
              </div>
            </div>

            <div className="space-y-16 max-w-6xl mx-auto">
              {featureHighlights.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-start group`}
                >
                  {/* Image Side - Hidden on mobile, shown on desktop */}
                  <div className="hidden lg:block lg:w-1/2 relative">
                    <div className="relative rounded-[40px] overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700 ease-out aspect-[16/9]">
                      <PageImage
                        path="/homepage"
                        imageId={feature.imageId}
                        alt={feature.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative Circle */}
                    <div className={`absolute -bottom-10 ${index % 2 === 0 ? '-left-10' : '-right-10'} w-40 h-40 bg-[#D0D3DE]/30 rounded-full blur-2xl -z-10`}></div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 flex flex-col gap-6 relative">
                    {/* Title Section */}
                    <div className="relative">
                      <span className="text-8xl font-serif text-[#EDEEF3] absolute -top-16 -left-8 -z-10 select-none font-bold" style={{ letterSpacing: '-0.05em' }}>
                        {feature.id}
                      </span>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] leading-tight flex-1">
                          <span className="block text-base text-[#8B92AB] font-bold mb-2 tracking-widest">{feature.title}</span>
                          <span className="inline-block relative text-3xl md:text-4xl lg:text-5xl" dangerouslySetInnerHTML={{ __html: feature.highlight }}>
                          </span>
                          <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8B92AB] to-transparent"></div>
                        </h3>
                        {feature.id === "02" && (
                          <a
                            href="/kidsortho"
                            className="flex-shrink-0 mt-8 px-4 py-2 bg-[#8B92AB] text-white text-sm font-bold rounded-full hover:bg-[#6B7394] transition-colors shadow-md"
                          >
                            詳細
                          </a>
                        )}
                        {feature.id === "04" && (
                          <a
                            href="/ceramic"
                            className="flex-shrink-0 mt-8 px-4 py-2 bg-[#9B89B3] text-white text-sm font-bold rounded-full hover:bg-[#8B79A3] transition-colors shadow-md"
                          >
                            詳細
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Image on Mobile - shown here between title and details */}
                    <div className="w-full lg:hidden">
                      <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[16/9]">
                        <PageImage
                          path="/homepage"
                          imageId={feature.imageId}
                          alt={feature.imageAlt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-4">
                      {feature.details.map((detail, i) => (
                        <div key={i} className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:border-[#D0D3DE] transition-colors duration-300">
                          <p className="text-[#5A4D41] leading-loose text-sm md:text-base font-sans" dangerouslySetInnerHTML={{ __html: detail }}>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Case Studies Section --- */}
        <section className="pt-6 pb-8 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-8">
              <div className="inline-block relative">
                <span className="text-[#8B92AB] font-bold tracking-[0.3em] text-xs md:text-sm block mb-3 uppercase opacity-70" style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}>Case Studies</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif relative">
                  症例紹介
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#8B92AB] to-transparent"></div>
                </h2>
              </div>
            </div>

            {/* Case Study Slider */}
            <div className="max-w-6xl mx-auto">
              <div className="relative overflow-visible min-h-[600px] md:min-h-[550px]">
                {caseStudies.map((caseStudy, index) => (
                  <div
                    key={caseStudy.id}
                    className={`transition-all duration-700 ${index === currentCaseIndex ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'
                      }`}
                  >
                    <div className="bg-[#FAFAFA] rounded-3xl p-6 md:p-10 shadow-xl border border-[#f0f0f0]">
                      {/* Title Section - Centered */}
                      <div className="text-center mb-8 pb-6 border-b border-gray-200">
                        <p className="text-[#8D8070] text-sm mb-2">{caseStudy.patient}</p>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41]">
                          {caseStudy.title}
                        </h3>
                      </div>

                      {/* Before/After Images */}
                      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
                        {/* Before */}
                        <div className="w-full md:w-[47%]">
                          <div className="mb-2">
                            <span className="inline-block bg-gray-600 text-white px-3 py-1 rounded-md font-bold text-xs">
                              Before
                            </span>
                          </div>
                          <PageImage
                            path="/homepage"
                            imageId={caseStudy.beforeId}
                            alt={`${caseStudy.title} - Before`}
                            className="w-full aspect-[16/9] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all"
                          />
                        </div>

                        {/* After */}
                        <div className="w-full md:w-[47%]">
                          <div className="mb-2">
                            <span className="inline-block bg-[#8B92AB] text-white px-3 py-1 rounded-md font-bold text-xs">
                              After
                            </span>
                          </div>
                          <PageImage
                            path="/homepage"
                            imageId={caseStudy.afterId}
                            alt={`${caseStudy.title} - After`}
                            className="w-full aspect-[16/9] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-[#8B92AB]/30"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCaseIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentCaseIndex === index
                      ? 'bg-[#8B92AB] scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                  />
                ))}
              </div>

              {/* View All Button */}
              <div className="text-center mt-6">
                <a
                  href="/case-studies"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8B92AB] to-[#6B7394] hover:from-[#9BA2B8] hover:to-[#8B92AB] text-white px-10 py-5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <span>すべての症例を見る</span>
                  <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                    <ChevronRight size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA Section (Between Case Studies & Facilities) --- */}
        <section className="py-12 bg-[#FAFAF8]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
              {/* Web Reservation */}
              <button className="flex-1 shadow-lg transform hover:-translate-y-1 transition-all duration-300 group">
                <img
                  src="/images/web-reserve-banner-v3.png"
                  alt="豊洲 歯医者 24時間WEB予約受付中 Fデンタルオフィス"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </button>

              {/* Phone Reservation */}
              <a href="tel:03-1234-5678" className="flex-1 bg-white border-2 border-[#D0D3DE] text-[#5A4D41] hover:bg-[#EDEEF3] py-6 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-2 group">
                <div className="flex items-center gap-3">
                  <Phone size={32} className="group-hover:scale-110 transition-transform" />
                  <span className="text-2xl font-bold">03-1234-5678</span>
                </div>
                <span className="text-sm font-bold">お気軽にお電話ください</span>
              </a>
            </div>
          </div>
        </section>

        {/* --- Facilities Section (New) --- */}
        <section className="pt-4 pb-8 bg-[#FAFAFA] overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Title */}
            <div className="text-center mb-6">
              <div className="inline-block relative">
                <span className="text-[#8B92AB] font-bold tracking-[0.3em] text-xs md:text-sm block mb-3 uppercase opacity-70" style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}>Facilities</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif relative">
                  院内設備
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#8B92AB] to-transparent"></div>
                </h2>
              </div>
            </div>

            {/* Carousel */}
            <div className="relative max-w-2xl mx-auto mb-4 group">
              <div className="overflow-hidden rounded-[40px] shadow-2xl border-4 border-white aspect-square">
                <div
                  className="flex transition-transform duration-1000 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentFacilitySlide * 100}%)` }}
                >
                  {facilityImages.map((img, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-full relative">
                      <PageImage
                        path="/homepage"
                        imageId={img.imageId}
                        alt={img.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                {facilityImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFacilitySlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentFacilitySlide === index
                      ? 'bg-white scale-125 shadow-lg'
                      : 'bg-white/50 hover:bg-white/80'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Current Slide Title */}
            <div className="text-center mb-10 h-8">
              <p className="text-xl md:text-2xl font-bold text-[#5A4D41] transition-opacity duration-500" key={currentFacilitySlide}>
                {facilityImages[currentFacilitySlide].title}
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href="/facilities"
                className="inline-flex items-center gap-3 bg-[#8B92AB] hover:bg-[#9BA2B8] text-white px-10 py-5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span>院内設備を見る</span>
                <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ChevronRight size={20} />
                </div>
              </a>
            </div>
          </div>
        </section>


        {/* --- Flow Section --- */}
        <section className="pt-12 pb-8 bg-[#FAFAFA] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">診療の流れ</h2>
              <div className="w-16 h-0.5 bg-[#8B92AB] mx-auto mt-4"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <div className="space-y-12">
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
                ].map((step, index) => (
                  <div key={index}>
                    {/* 番号 + タイトル */}
                    <div className="flex items-center gap-2 mb-6 border-b border-[#D0D3DE] pb-3">
                      <div className="relative">
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#8B92AB]/20 rotate-45"></div>
                        <span className="text-3xl md:text-4xl font-light text-[#8B92AB] tracking-wider relative z-10">{step.num}</span>
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-[#5A4D41] font-serif">{step.title}</h4>
                    </div>
                    {/* 画像 */}
                    <div className="mb-6 rounded-2xl overflow-hidden shadow-md">
                      <PageImage
                        path="/homepage"
                        imageId={step.imageId}
                        alt={step.title}
                        className="w-full h-56 md:h-72 object-cover"
                      />
                    </div>
                    {/* 説明文 */}
                    <p className="text-[#5A4D41] leading-loose text-sm md:text-base" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Treatment Menu (Redesigned) --- */}
        <section className="pt-2 pb-16 bg-[#F9FAFB] w-full max-w-full overflow-x-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41]">診療メニュー</h2>
              <p className="text-sm text-[#8D8070] mt-2">あらゆるお口のお悩みに対応いたします</p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-4 max-w-6xl mx-auto">
              {menuItems.map((menu, i) => (
                <a key={i} href={menu.link} className="flex flex-col items-center group">
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center mb-4 group-hover:shadow-md group-hover:border-[#8B92AB]/30 transition-all duration-300 group-hover:-translate-y-1 overflow-hidden p-4">
                    {/* @ts-ignore */}
                    {menu.iconImage ? (
                      <img src={menu.iconImage} alt={menu.name} className="w-full h-full object-contain" style={{ backgroundColor: 'white' }} />
                    ) : (
                      <menu.icon strokeWidth={1.5} className="w-8 h-8 md:w-12 md:h-12 text-[#5A4D41] group-hover:text-[#8B92AB] transition-colors" />
                    )}
                  </div>
                  <h4 className="font-bold text-xs md:text-sm text-[#5A4D41] text-center leading-tight group-hover:text-[#8B92AB] transition-colors">{menu.name}</h4>
                </a>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-xs text-[#8D8070]">※ 症例により適切な専門医が担当します</p>
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}
