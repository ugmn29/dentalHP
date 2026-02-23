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
    { imageId: "hero-slide1", alt: "F歯科・こども歯科・矯正 院内写真1" },
    { imageId: "hero-slide2", alt: "F歯科・こども歯科・矯正 院内写真2" },
    { imageId: "hero-slide3", alt: "F歯科・こども歯科・矯正 院内写真3" },
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
      case 'kids': return 'bg-[#e8f2ed] border-[#c8ddd0] text-[#395b45] hover:bg-[#d4e8dc]';
      case 'aesthetic': return 'bg-[#F3F0F7] border-[#E0D6EA] text-[#9B89B3] hover:bg-[#EBE5F2]';
      case 'ortho': return 'bg-[#e8f2ed] border-[#c8ddd0] text-[#395b45] hover:bg-[#d4e8dc]';
      case 'surgery': return 'bg-[#FFF0F0] border-[#FFD6D6] text-[#FF6B6B] hover:bg-[#FFE5E5]';
      case 'concerns': return 'bg-[#FFF4E6] border-[#FFE0B2] text-[#E89B4D] hover:bg-[#FFE9CC]';
      default: return 'bg-gray-50 border-gray-100 text-gray-600 hover:bg-gray-100';
    }
  };

  const featureHighlights = [
    {
      id: "01",
      title: "すべて見せる、わかりやすい",
      highlight: "最新<span style='font-size: 0.8em;'>の</span>透明<span style='font-size: 0.8em;'>な</span>治療",
      summary: "<strong>豊洲の歯医者</strong>として、納得して治療を受けていただくために",
      details: [
        "治療前には必ず<span class='font-bold bg-yellow-100'>口の中の写真</span>を撮影し、現在の状態を一緒に確認します。さらに<span class='font-bold bg-yellow-100'>３Dスキャナー</span>で歯並びを立体的にデータ化し、<span class='font-bold bg-yellow-100'>ペン型カメラ</span>で細部まで拡大して見ることができます。これらの最新機器を使って、<span class='text-[#395b45] font-bold'>お口の状態や治療内容を丁寧にわかりやすく説明</span>します。"
      ],
      imageId: "feature1",
      imageAlt: "豊洲 歯科 透明性のある治療説明",
      icon: MonitorPlay,
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600"
    },
    {
      id: "02",
      title: "「お顔」も育てる",
      highlight: "こども矯正",
      summary: "歯並びの教科書（冊子）",
      details: [
        "歯並びだけでなく、<span class='text-[#395b45] font-bold'>お顔全体の成長</span>を考えた治療を行います。それを補助するために、<span class='font-bold bg-yellow-100'>当院独自の歯ならびの教科書</span>を、来院した子ども患者さん全員にお渡しします。"
      ],
      imageId: "feature2",
      imageAlt: "豊洲 F歯科・こども歯科・矯正 こども矯正 歯並びの教科書",
      icon: Sprout,
      color: "from-green-100 to-green-200",
      iconColor: "text-green-600"
    },
    {
      id: "03",
      title: "天井テレビ付き",
      highlight: "個室の診療室",
      summary: "リラックスして治療を受けられる空間",
      details: [
        "<span class='font-bold bg-yellow-100'>個室</span>でプライバシーを確保。<span class='font-bold bg-yellow-100'>天井テレビ</span>があるため、<span class='text-[#395b45] font-bold'>子供が通いやすい環境</span>を整備しています。"
      ],
      imageId: "feature3",
      imageAlt: "豊洲 歯医者 個室診療室 天井テレビ",
      icon: Smile,
      color: "from-yellow-100 to-orange-100",
      iconColor: "text-orange-500"
    },
    {
      id: "04",
      title: "「後悔しない」ための",
      highlight: "審美歯科",
      summary: "美しさと機能性を両立した治療",
      details: [
        "審美歯科で大事なのは、<span class='font-bold bg-yellow-100'>見た目と機能の両立</span>です。それを実現するために、当院では<span class='text-[#395b45] font-bold'>精密診療を行える環境</span>を整備しています。"
      ],
      imageId: "feature4",
      imageAlt: "豊洲 審美歯科 セラミック治療 ホワイトニング",
      icon: Sparkles,
      color: "from-purple-100 to-pink-100",
      iconColor: "text-purple-500"
    },
    {
      id: "05",
      title: "歯を「最大限残す」",
      highlight: "保存治療",
      summary: "できる限り削らない・抜かない治療",
      details: [
        "歯を細かく見れる<span class='font-bold bg-yellow-100'>拡大鏡</span>、より精密に治療できる<span class='font-bold bg-yellow-100'>マイクロスコープ</span>、精密診断を可能にする<span class='font-bold bg-yellow-100'>３Dスキャナー・CT</span>。これらの最新設備と診断力で、<span class='text-[#395b45] font-bold'>できる限り削らない・抜かない治療</span>を実現します。"
      ],
      imageId: "feature5",
      imageAlt: "豊洲 歯科 保存治療 削らない治療",
      icon: HeartPulse,
      color: "from-red-100 to-rose-200",
      iconColor: "text-rose-500"
    },
  ];



  return (
    <div className="min-h-screen bg-[#f7f9ee] font-serif text-[#5A4D41] selection:bg-[#395b45] selection:text-white">
      <Header />

      <main>
        {/* --- Hero Section (Image Slider + Text) --- */}
        <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#f7f9ee]">
          {/* Opening Announcement - Reduced height */}
          <div className="relative w-full bg-gradient-to-br from-[#e8f2ed] via-white to-[#e8f2ed] flex items-center justify-center" style={{ height: '50vh' }}>
            <div className="text-center px-4">
              <div className="inline-block mb-8">
                <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#2d4835] px-10 py-4 rounded-full text-base md:text-lg font-black shadow-xl" style={{ fontFamily: 'sans-serif' }}>
                  新規開業のお知らせ
                </div>
              </div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#5A4D41] mb-4" style={{ fontFamily: 'sans-serif' }}>
                0歳から通える歯科医院
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6" style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif',
                background: 'linear-gradient(135deg, #1a5738 0%, #395b45 50%, #2d4835 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 4px 20px rgba(57, 91, 69, 0.3)'
              }}>
                2026年7月1日
              </h2>
              <p className="text-3xl md:text-4xl lg:text-5xl font-black text-[#395b45]" style={{ fontFamily: 'sans-serif' }}>
                新規開業
              </p>
            </div>

            {/* CTA Button - Bottom Right */}
            <div className="absolute -bottom-8 right-4 md:-bottom-10 md:right-8 z-20 animate-bounce-slow">
              <a
                href="#"
                className="group relative flex items-center gap-3 bg-gradient-to-r from-[#A03F2B] to-[#8B3626] hover:from-[#C04D35] hover:to-[#A03F2B] text-white px-6 py-4 md:px-8 md:py-5 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(160,63,43,0.6)] transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <Calendar size={24} className="group-hover:rotate-12 transition-transform" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-medium opacity-90">24時間受付</span>
                    <span className="text-base md:text-lg font-bold whitespace-nowrap">WEB予約</span>
                  </div>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ChevronRight size={20} />
                </div>

                {/* Pulsing ring effect */}
                <div className="absolute inset-0 rounded-full bg-[#A03F2B] opacity-0 group-hover:opacity-20 group-hover:scale-110 transition-all duration-300"></div>
              </a>
            </div>
          </div>

          {/* Text Area - Closer to image */}
          <div className="relative bg-white flex flex-col items-center justify-center px-4 py-8 md:py-12">
            <div className="max-w-7xl w-full text-center flex items-center justify-center">
              <h1 className="font-bold leading-tight" style={{ fontFamily: 'serif' }}>
                <div className="relative inline-block mb-4 md:mb-6 px-4 md:px-8">
                  <div className="relative z-10 py-4 md:py-6 whitespace-nowrap overflow-x-auto">
                    <span className="inline-flex items-center justify-center gap-1 md:gap-3 text-[6vw] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                      style={{
                        fontWeight: '900',
                        letterSpacing: '0.05em'
                      }}>
                      <span className="inline-block bg-gradient-to-br from-[#1a5738] via-[#395b45] to-[#2d4835] bg-clip-text text-transparent drop-shadow-lg transform hover:scale-105 transition-all duration-300"
                        style={{
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}>
                        <strong><span className="text-[110%]">豊洲駅</span></strong><span className="text-[85%]">から</span>
                      </span>
                      <span className="inline-flex items-center justify-center px-3 md:px-6 py-2 md:py-3 bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#FFD700] rounded-2xl shadow-2xl transform hover:scale-110 hover:rotate-2 transition-all duration-300 relative overflow-hidden"
                        style={{
                          boxShadow: '0 8px 32px rgba(255, 193, 7, 0.5), inset 0 2px 8px rgba(255,255,255,0.6)'
                        }}>
                        <span className="relative z-10 font-black"
                          style={{
                            color: '#2d4835',
                            textShadow: '0 2px 4px rgba(255,255,255,0.3)'
                          }}>
                          徒歩2分
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </span>
                      <span className="inline-block bg-gradient-to-br from-[#1a5738] via-[#395b45] to-[#2d4835] bg-clip-text text-transparent drop-shadow-lg transform hover:scale-105 transition-all duration-300"
                        style={{
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}>
                        <span className="text-[85%]">の</span><strong><span className="text-[110%]">歯医者</span></strong>
                      </span>
                    </span>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/10 via-[#395b45]/20 to-yellow-400/10 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-[#395b45]/5 to-transparent rounded-2xl -z-10"></div>
                </div>
                <span className="block text-[5.5vw] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#5A4D41] -mt-4 md:-mt-6 font-semibold" style={{ fontStyle: 'normal' }}>
                  <strong>豊洲</strong>で0歳から通える<strong>歯医者</strong>
                </span>
              </h1>
            </div>

            {/* Building Location Card */}
            <div className="mt-6 md:mt-8 w-full md:px-4">
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center p-2 sm:p-3 md:p-4 border-2 border-[#c8ddd0] rounded-xl md:rounded-2xl m-1 md:m-2">
                  {/* Building Image */}
                  <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
                    <img
                      src="/images/building.avif"
                      alt="豊洲プライムスクエア"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 ml-4 md:ml-6">
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#5A4D41] mb-2 md:mb-3" style={{ fontStyle: 'normal' }}>
                      豊洲プライムスクエア1階
                    </h3>
                    <div className="flex items-center gap-2 text-[#5A4D41]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="flex-shrink-0"
                      >
                        <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
                      </svg>
                      <span className="text-sm md:text-base lg:text-lg font-medium" style={{ fontStyle: 'normal' }}>
                        「豊洲駅6a出口」徒歩2分
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <WaveBottom color="fill-[#FAFAFA]" />
        </section>

        {/* --- Special Sites (Limit-Breaking Redesign: Simple & High CTA) --- */}
        <section className="pt-0 pb-4 bg-[#f7f9ee] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            {/* Opening Hours Table */}
            <div className="w-full font-sans">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-base md:text-lg font-sans">
                  <thead>
                    <tr className="bg-white">
                      <th className="py-4 px-3 text-left font-bold border-b border-gray-200 text-[#2d4835] w-[30%]">診療時間</th>
                      <th className="py-4 px-2 text-center font-bold border-b border-gray-200 text-[#2d4835] w-[10%]">月</th>
                      <th className="py-4 px-2 text-center font-bold border-b border-gray-200 text-[#2d4835] w-[10%]">火</th>
                      <th className="py-4 px-2 text-center font-bold border-b border-gray-200 text-[#2d4835] w-[10%]">水</th>
                      <th className="py-4 px-2 text-center font-bold border-b border-gray-200 text-[#2d4835] w-[10%]">木</th>
                      <th className="py-4 px-2 text-center font-bold border-b border-gray-200 text-[#2d4835] w-[10%]">金</th>
                      <th className="py-4 px-2 text-center font-bold border-b border-gray-200 text-[#2d4835] w-[10%]">土</th>
                      <th className="py-4 px-2 pr-3 text-center font-bold border-b border-gray-200 text-[#2d4835] w-[10%]">日</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-b border-gray-200">
                      <td className="py-5 px-3 text-left font-semibold text-[#2d4835] text-base md:text-lg whitespace-nowrap" style={{ fontStyle: 'normal', fontFamily: 'sans-serif' }}>10:00-13:00</td>
                      <td className="py-5 px-2 text-center text-[#2d4835] text-lg">●</td>
                      <td className="py-5 px-2 text-center text-gray-300 text-lg">−</td>
                      <td className="py-5 px-2 text-center text-[#2d4835] text-lg">●</td>
                      <td className="py-5 px-2 text-center text-[#2d4835] text-lg">●</td>
                      <td className="py-5 px-2 text-center text-[#2d4835] text-lg">●</td>
                      <td className="py-5 px-2 text-center text-[#2d4835] font-bold">★</td>
                      <td className="py-5 px-2 pr-3 text-center text-[#2d4835] font-bold">★</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-5 px-3 text-left font-semibold text-[#2d4835] text-base md:text-lg whitespace-nowrap" style={{ fontStyle: 'normal', fontFamily: 'sans-serif' }}>14:00-19:00</td>
                      <td className="py-5 px-2 text-center text-[#2d4835] text-lg">●</td>
                      <td className="py-5 px-2 text-center text-gray-300 text-lg">−</td>
                      <td className="py-5 px-2 text-center text-[#2d4835] text-lg">●</td>
                      <td className="py-5 px-2 text-center text-[#2d4835] text-lg">●</td>
                      <td className="py-5 px-2 text-center text-[#2d4835] text-lg">●</td>
                      <td className="py-5 px-2 text-center text-[#2d4835] font-bold">★</td>
                      <td className="py-5 px-2 pr-3 text-center text-[#2d4835] font-bold">★</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 space-y-1 text-sm md:text-base text-[#2d4835] text-center font-sans">
                <p style={{ fontStyle: 'normal', fontFamily: 'sans-serif' }}><span className="text-[#2d4835] font-bold text-xl">★</span> 土日：9:00-12:00 / 13:00-17:00</p>
                <p className="font-bold text-[#2d4835] mt-3" style={{ fontFamily: 'sans-serif' }}>休診日：火曜日</p>
              </div>
            </div>

            <div className="flex justify-center max-w-6xl mx-auto mt-12 md:mt-16">
              {/* Kids Site Card */}
              <a href="/kidsortho" className="group relative block shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img
                  src="/kids-orthodontics-banner.png"
                  alt="豊洲 F歯科・こども歯科・矯正 こども矯正 小児矯正"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
              </a>
            </div>
          </div>
        </section>

        {/* --- Problem Section (Image Background Style) --- */}
        <section className="relative overflow-hidden pt-24 md:pt-32">
          {/* Cloud-shaped Speech Bubble with Title - Positioned above background */}
          <div className="relative z-20 flex justify-center mt-[-100px] md:mt-[-120px] mb-[-140px] md:mb-[-160px]">
            <div className="relative">
              {/* Cloud SVG Background - Original Shape & Centered */}
              <svg
                className="w-[120%] md:w-full max-w-4xl md:max-w-6xl flex-shrink-0 -ml-[10%] md:ml-0"
                viewBox="0 0 500 280"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main cloud shape */}
                <g transform="translate(50, 40)" id="cloudShape">
                  {/* Left puff */}
                  <circle cx="80" cy="120" r="70" fill="white" />
                  {/* Left-center puff */}
                  <circle cx="150" cy="90" r="75" fill="white" />
                  {/* Center-top puff */}
                  <circle cx="220" cy="70" r="65" fill="white" />
                  {/* Right-center puff */}
                  <circle cx="280" cy="90" r="70" fill="white" />
                  {/* Right puff */}
                  <circle cx="340" cy="115" r="65" fill="white" />
                  {/* Bottom fill */}
                  <rect x="80" y="120" width="260" height="50" fill="white" />
                  {/* Center large puff */}
                  <circle cx="210" cy="115" r="80" fill="white" />
                </g>

                {/* Drop shadow filter */}
                <defs>
                  <filter id="cloudShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
                    <feOffset dx="0" dy="10" result="offsetblur" />
                    <feComponentTransfer>
                      <feFuncA type="linear" slope="0.3" />
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <g filter="url(#cloudShadow)">
                  <use href="#cloudShape" />
                </g>

                {/* Speech bubble tail - two circles */}
                <circle cx="250" cy="230" r="16" fill="white" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))" />
                <circle cx="270" cy="250" r="10" fill="white" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))" />
              </svg>

              {/* Text overlay - Fixed size */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] text-center leading-relaxed px-12">
                  こんなお悩み<br />ありませんか？
                </h2>
              </div>
            </div>
          </div>

          {/* Upper Part: Background Image with Problems */}
          <div className="relative mt-12">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/problem-bg-v2.jpg"
                alt="豊洲 歯科 歯医者 お悩み相談"
                className="w-full h-full object-cover object-[50%_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
              {/* Bottom Gradient for Transition */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-transparent to-gray-100"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 pt-24 md:pt-32 pb-12 md:pb-16">

              {/* Problems List */}
              <div className="max-w-2xl mx-auto space-y-6 pb-2">
                {[
                  "子供の歯並びが気になる...",
                  "銀歯を白くしたい...",
                  "痛くない治療を受けたい...",
                  "インプラントに興味がある..."
                ].map((problem, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-white flex-shrink-0"></div>
                    <p className="text-white text-lg md:text-xl font-bold drop-shadow-lg">
                      {problem}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Green Triangle Arrows - positioned at bottom of background section */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-20 flex flex-col -space-y-2">
              <svg width="40" height="30" viewBox="0 0 40 30" className="mx-auto">
                <polygon points="5,5 35,5 20,25" fill="#c8ddd0" />
              </svg>
              <svg width="40" height="30" viewBox="0 0 40 30" className="mx-auto">
                <polygon points="5,5 35,5 20,25" fill="#c8ddd0" opacity="0.7" />
              </svg>
              <svg width="40" height="30" viewBox="0 0 40 30" className="mx-auto">
                <polygon points="5,5 35,5 20,25" fill="#c8ddd0" opacity="0.4" />
              </svg>
            </div>
          </div>

          {/* Lower Part: Light Gray Background with Solution */}
          <div className="bg-gray-100 py-12 md:py-16 -mt-1">
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
                  <h2 className="font-black text-[#395b45] text-center" style={{ fontFamily: 'Georgia, "Yu Mincho", "Hiragino Mincho ProN", serif' }}>
                    <div className="text-[9vw] sm:text-5xl md:text-7xl">F歯科・矯正歯科</div>
                    <div className="text-[7vw] sm:text-4xl md:text-5xl mt-1">豊洲プライムスクエア院</div>
                  </h2>
                </div>
                <p className="text-[#5A4D41] text-2xl md:text-3xl font-bold mb-8">
                  で解決！
                </p>

                {/* CTA Button */}
                <button className="bg-gradient-to-r from-[#395b45] to-[#2d4835] hover:from-[#2d4835] hover:to-[#1f3225] text-white px-8 md:px-12 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
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
        <section className="py-12 bg-[#f7f9ee]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
              {/* Web Reservation */}
              <button className="flex-1 shadow-lg transform hover:-translate-y-1 transition-all duration-300 group">
                <img
                  src="/images/web-reserve-banner-v3.png"
                  alt="豊洲 歯医者 24時間WEB予約受付中 F歯科・こども歯科・矯正"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </button>

              {/* Phone Reservation */}
              <a href="tel:03-1234-5678" className="flex-1 bg-white border-4 border-[#395b45] text-[#395b45] hover:bg-[#e8f2ed] py-6 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-2 group">
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
        <section className="pt-12 pb-8 bg-[#FAFAFA] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block relative">
                <span className="text-[#395b45] font-bold tracking-[0.3em] text-xs md:text-sm block mb-3 uppercase opacity-70" style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}>FEATURES</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif relative">
                  当院の<span className="text-[#395b45]">5つの特徴</span>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#395b45] to-transparent"></div>
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
                    <div className={`relative rounded-[40px] overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700 ease-out aspect-[16/9] bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                      {/* Abstract Background Shapes */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-2xl"></div>
                        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white blur-3xl"></div>
                      </div>

                      {/* Icon */}
                      <div className={`relative z-10 p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50 ${feature.iconColor}`}>
                        <feature.icon size={80} strokeWidth={1.5} />
                      </div>

                      {/* Label Overlay (optional, maybe not needed if icon is clear) */}
                      <div className="absolute bottom-4 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm">
                        <span className={`text-sm font-bold ${feature.iconColor}`}>F歯科・矯正歯科</span>
                      </div>
                    </div>
                    {/* Decorative Circle */}
                    <div className={`absolute -bottom-10 ${index % 2 === 0 ? '-left-10' : '-right-10'} w-40 h-40 bg-[#c8ddd0]/30 rounded-full blur-2xl -z-10`}></div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 flex flex-col gap-6 relative">
                    {/* Title Section */}
                    <div className="relative">
                      <span className="text-8xl font-serif text-[#e8f2ed] absolute -top-16 -left-8 -z-10 select-none font-bold" style={{ letterSpacing: '-0.05em' }}>
                        {feature.id}
                      </span>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] leading-tight flex-1">
                          <span className="block text-base text-[#395b45] font-bold mb-2 tracking-widest">{feature.title}</span>
                          <span className="inline-block relative text-3xl md:text-4xl lg:text-5xl" dangerouslySetInnerHTML={{ __html: feature.highlight }}>
                          </span>
                          <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#395b45] to-transparent"></div>
                        </h3>
                        {feature.id === "02" && (
                          <a
                            href="/kidsortho"
                            className="flex-shrink-0 mt-8 px-4 py-2 bg-[#395b45] text-white text-sm font-bold rounded-full hover:bg-[#2d4835] transition-colors shadow-md"
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
                      <div className={`relative rounded-[40px] overflow-hidden shadow-2xl aspect-[16/9] bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                        <div className={`relative z-10 p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50 ${feature.iconColor}`}>
                          <feature.icon size={60} strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-4">
                      {feature.details.map((detail, i) => (
                        <div key={i} className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:border-[#c8ddd0] transition-colors duration-300">
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
                <span className="text-[#395b45] font-bold tracking-[0.3em] text-xs md:text-sm block mb-3 uppercase opacity-70" style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}>Case Studies</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif relative">
                  症例紹介
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#395b45] to-transparent"></div>
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
                        <h3 className="text-2xl md:text-3xl font-bold text-[#395b45]">
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
                            <span className="inline-block bg-[#395b45] text-white px-3 py-1 rounded-md font-bold text-xs">
                              After
                            </span>
                          </div>
                          <PageImage
                            path="/homepage"
                            imageId={caseStudy.afterId}
                            alt={`${caseStudy.title} - After`}
                            className="w-full aspect-[16/9] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-[#395b45]/30"
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
                      ? 'bg-[#395b45] scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                  />
                ))}
              </div>

              {/* View All Button */}
              <div className="text-center mt-6">
                <a
                  href="/case-studies"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#395b45] to-[#2d4835] hover:from-[#4a6b55] hover:to-[#395b45] text-white px-10 py-5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 group"
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
        <section className="py-12 bg-[#f7f9ee]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
              {/* Web Reservation */}
              <button className="flex-1 shadow-lg transform hover:-translate-y-1 transition-all duration-300 group">
                <img
                  src="/images/web-reserve-banner-v3.png"
                  alt="豊洲 歯医者 24時間WEB予約受付中 F歯科・こども歯科・矯正"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </button>

              {/* Phone Reservation */}
              <a href="tel:03-1234-5678" className="flex-1 bg-white border-4 border-[#395b45] text-[#395b45] hover:bg-[#e8f2ed] py-6 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-2 group">
                <div className="flex items-center gap-3">
                  <Phone size={32} className="group-hover:scale-110 transition-transform" />
                  <span className="text-2xl font-bold">03-1234-5678</span>
                </div>
                <span className="text-sm font-bold">お気軽にお電話ください</span>
              </a>
            </div>
          </div>
        </section>

        {/* --- Doctor Introduction Section --- */}
        <section className="py-4 bg-[#FAFAFA] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-6">
              <div className="inline-block relative">
                <span className="text-[#395b45] font-bold tracking-[0.3em] text-xs md:text-sm block mb-3 uppercase opacity-70" style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}>Doctor</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif relative">
                  ドクター紹介
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#395b45] to-transparent"></div>
                </h2>
              </div>
            </div>

            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#e8f2ed] to-white rounded-3xl shadow-lg border border-[#c8ddd0] overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Doctor Image */}
                <div className="w-full md:w-2/5 relative">
                  <div className="aspect-square md:aspect-auto md:h-full bg-gradient-to-br from-[#395b45]/20 to-[#c8ddd0]/20 relative overflow-hidden flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-4xl md:text-5xl font-bold text-[#395b45]/40 mb-2">準備中</p>
                      <p className="text-sm text-[#8D8070]/60">Coming Soon</p>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <p className="text-sm font-bold text-[#5A4D41]">院長</p>
                    </div>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="w-full md:w-3/5 p-8 md:p-10">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-2">福永　真大</h3>
                    <p className="text-sm text-[#8D8070] font-medium">Masahiro Fukunaga / 院長・歯科医師</p>
                  </div>

                  <div className="space-y-4 text-[#5A4D41]">
                    <div>
                      <h4 className="font-bold text-[#395b45] mb-2 flex items-center gap-2">
                        <span className="w-1 h-4 bg-[#395b45] rounded-full"></span>
                        経歴
                      </h4>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• 大阪大学卒業</li>
                        <li>• 大手医療法人勤務・研修医指導医を歴任</li>
                        <li>• 都内歯科医院 副院長</li>
                        <li>• F歯科・矯正歯科 豊洲プライムスクエア院 開業</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#395b45] mb-2 flex items-center gap-2">
                        <span className="w-1 h-4 bg-[#395b45] rounded-full"></span>
                        メッセージ
                      </h4>
                      <p className="text-sm leading-relaxed ml-4">
                        患者様一人ひとりに寄り添い、お口の健康を通じて笑顔あふれる毎日をサポートいたします。
                        お子様から大人の方まで、安心して通っていただける医院づくりを心がけています。
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[#c8ddd0]">
                    <p className="text-xs text-[#8D8070]">
                      日本小児歯科学会 会員 / 日本審美歯科学会 会員
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Facilities Section (New) --- */}
        <section className="pt-4 pb-8 bg-[#FAFAFA] overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Title */}
            <div className="text-center mb-6">
              <div className="inline-block relative">
                <span className="text-[#395b45] font-bold tracking-[0.3em] text-xs md:text-sm block mb-3 uppercase opacity-70" style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}>Facilities</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif relative">
                  院内設備
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#395b45] to-transparent"></div>
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
                className="inline-flex items-center gap-3 bg-[#395b45] hover:bg-[#4a6b55] text-white px-10 py-5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 group"
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
              <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <div className="space-y-12">
                {[
                  {
                    num: "01",
                    title: "ご予約・ご来院",
                    desc: "WEBまたはお電話にてご予約ください。初診の方は問診票の記入がありますので、10分前にお越しください。",
                    imageId: "step1"
                  },
                  {
                    num: "02",
                    title: "症状のカウンセリング",
                    desc: "現在のお悩みや症状について詳しくお伺いします。不安なことや気になることは何でもご相談ください。",
                    imageId: "step2"
                  },
                  {
                    num: "03",
                    title: "レントゲン撮影",
                    desc: "お口の状態を正確に把握するため、レントゲン撮影を行います。必要に応じて歯科用CTでの撮影も実施します。",
                    imageId: "step3"
                  },
                  {
                    num: "04",
                    title: "歯周病検査、口腔内写真の撮影",
                    desc: "歯周ポケットの深さを測定し、口腔内写真を撮影します。現在の状態を視覚的に確認いただけます。",
                    imageId: "step4"
                  },
                  {
                    num: "05",
                    title: "治療計画の説明",
                    desc: "検査結果に基づき、最適な治療プランをご提案します。費用や期間についても詳しくご説明します。",
                    imageId: "step5"
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
                    <div className="flex items-center gap-2 mb-6 border-b border-[#395b45]/30 pb-3">
                      <div className="relative">
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#395b45]/30 rotate-45"></div>
                        <span className="text-3xl md:text-4xl font-light text-[#395b45] tracking-wider relative z-10">{step.num}</span>
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
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center mb-4 group-hover:shadow-md group-hover:border-[#395b45]/30 transition-all duration-300 group-hover:-translate-y-1 overflow-hidden p-4">
                    {/* @ts-ignore */}
                    {menu.iconImage ? (
                      <img src={menu.iconImage} alt={menu.name} className="w-full h-full object-contain" style={{ backgroundColor: 'white' }} />
                    ) : (
                      <menu.icon strokeWidth={1.5} className="w-8 h-8 md:w-12 md:h-12 text-[#5A4D41] group-hover:text-[#395b45] transition-colors" />
                    )}
                  </div>
                  <h4 className="font-bold text-xs md:text-sm text-[#5A4D41] text-center leading-tight group-hover:text-[#395b45] transition-colors">{menu.name}</h4>
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
