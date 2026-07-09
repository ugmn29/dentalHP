"use client";

import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AuthorBio } from '../../components/AuthorBio';
import { CheckCircle2, ChevronDown, ChevronUp, Calendar, Phone, ArrowRight, ChevronRight, Smile, Home, Coins, Tv, Sparkles } from 'lucide-react';
import { PageImage } from '@/components/PageImage';
import { ClinicHoursTable } from '@/components/ClinicHoursTable';
import { getPriceCategory } from '@/data/price-list';
import { FaqSection } from '@/components/FaqSection';
import { WEB_RESERVATION_URL } from '@/lib/reservation';

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://fshika.com' },
        { '@type': 'ListItem', position: 2, name: '小児矯正', item: 'https://fshika.com/kidsortho' },
    ],
};

const kidsOrthoPrices = getPriceCategory('kids-ortho');
const kidsOrthoPriceDescriptions: Record<string, string> = {
    '検査': '初回検査は無料です。',
    '相談': '矯正相談は無料です。',
    '調整料': '毎回の調整料は無料です。',
    'プレオルソ+付加装置': 'プレオルソと必要な付加装置を含みます。',
    '拡大床': '顎を広げて歯が並ぶスペースを作る装置です。',
    'マウスピース': 'マウスピース型の装置です。',
    'ワイヤー矯正': '固定式のワイヤー矯正です。',
};

export default function KidsOrthoPage() {
    const [isMessageExpanded, setIsMessageExpanded] = useState(false);

    const features = [
        {
            id: "01",
            title: "Home-based Treatment",
            highlight: "家でのみ行う矯正",
            summary: "基本的に<span class='font-bold bg-yellow-100'>取り外し可能な装置</span>を使用し、ご家庭で装着していただく治療法です。<span class='font-bold bg-yellow-100'>学校では外せる</span>ため、<span class='text-[#395b45] font-bold'>お子様の心理的負担が少なく</span>、食事、歯磨きの際も取り外せるので、虫歯のリスクを減らせます。<span class='text-[#395b45] font-bold'>普段通りの学校生活を送りながら治療可能</span>です。",
            details: [],
            imageId: "feature02-mouth-expander-close",
            icon: Home,
            color: "from-orange-100 to-amber-100",
            iconColor: "text-orange-500"
        },
        {
            id: "02",
            title: "Painless Treatment",
            highlight: "痛みの少ない治療法",
            summary: "<span class='font-bold bg-yellow-100'>成長期の顎の成長を利用</span>した優しい力で歯並びを整えるため、<span class='text-[#395b45] font-bold'>痛みはほとんどありません</span>。ワイヤー矯正のような強い力で歯を動かさず、お子様の<span class='font-bold bg-yellow-100'>自然な成長に合わせて無理なく治療</span>するため、<span class='text-[#395b45] font-bold'>お子様が嫌がらずに続けられる治療</span>です。",
            details: [],
            imageId: "feature02-painless-smile-close",
            icon: Sparkles,
            color: "from-blue-100 to-cyan-100",
            iconColor: "text-sky-500"
        },
        {
            id: "03",
            title: "MFT (Myofunctional Therapy)",
            highlight: "根本改善のMFT",
            summary: "<span class='font-bold bg-yellow-100'>口呼吸や舌の癖</span>など、歯並びが悪くなる<span class='font-bold bg-yellow-100'>根本原因を改善</span>するトレーニング（MFT）を行います。このトレーニングを行わないと必ず後戻りしてしまいます。<span class='text-[#395b45] font-bold'>悪習癖を直すことで治療後の後戻りを防ぎ、長期的に美しい歯並びを維持</span>できます。",
            details: [],
            imageId: "feature03-mouth-training-close",
            icon: Smile,
            color: "from-pink-100 to-rose-100",
            iconColor: "text-pink-500"
        },
        {
            id: "04",
            title: "Kid-friendly Environment",
            highlight: "お子様に優しい環境",
            summary: "診療台には<span class='font-bold bg-yellow-100'>天井テレビを完備</span>し、<span class='text-[#395b45] font-bold'>お子様が楽しく通院できる環境</span>を整えています。<span class='font-bold bg-yellow-100'>土日診療も行っており通いやすく</span>、お忙しい保護者の方にも配慮したスケジュールで、<span class='text-[#395b45] font-bold'>お子様がリラックスして治療を受けられる環境</span>です。",
            details: [],
            imageId: "ceiling-tv",
            icon: Tv,
            color: "from-green-100 to-teal-100",
            iconColor: "text-teal-600"
        },
        {
            id: "05",
            title: "Clear Pricing",
            highlight: "明確な費用設計",
            summary: "当院では<span class='font-bold bg-yellow-100'>トータルフィー制度</span>を導入しており、<span class='text-[#395b45] font-bold'>最初にご提示した金額から費用が変わらない安心の費用設計</span>です。治療開始前に総額を明確に提示し、<span class='font-bold bg-yellow-100'>治療途中での追加費用は一切なし</span>。<span class='text-[#395b45] font-bold'>予算を立てやすく、安心して治療を続けられます</span>。",
            details: [],
            imageId: "clear-pricing-real-03",
            icon: Coins,
            color: "from-yellow-100 to-orange-100",
            iconColor: "text-yellow-600"
        }
    ];

    const faqs = [
        {
            q: "いつから始めるのが良いですか？",
            a: (
                <>
                    <span className="border-b-2 border-[#FFD700]">今すぐ始めた方がいいです</span>。ただ、この「今すぐ」というのは装置を開始するということよりは、<span className="border-b-2 border-[#FFD700]">お子様には必ず何かしらの悪い習慣があるからです</span>。歯並びが悪い場合には、そういった意味で<span className="border-b-2 border-[#FFD700]">日ごろの習慣を改善させる</span>という一種の矯正を行うのも良いと思います。
                </>
            )
        },
        {
            q: "痛みはありますか？",
            a: (
                <>
                    装置を調整した直後は、歯が浮くような違和感や痛みを感じることがありますが、<span className="border-b-2 border-[#FFD700]">数日で慣れることがほとんどです</span>。子供の骨は柔らかいため、<span className="border-b-2 border-[#FFD700]">大人よりも痛みは少ない</span>と言われています。
                </>
            )
        },
        {
            q: "費用はどのくらいかかりますか？",
            a: (
                <>
                    こども矯正の費用は<span className="border-b-2 border-[#FFD700]">¥132,000〜¥660,000</span>です。詳しくは料金表をご覧ください。<span className="border-b-2 border-[#FFD700]">デンタルローンもご利用いただけます</span>。
                </>
            )
        },
        {
            q: "学校に装置をつけていく必要はありますか？",
            a: (
                <>
                    使用する装置にもよりますが、取り外し可能なマウスピース型や拡大床の場合、基本的には<span className="border-b-2 border-[#FFD700]">「家にいる時」と「寝ている時」の装着だけ</span>になります。<span className="border-b-2 border-[#FFD700]">学校生活への影響はほとんどありません</span>。
                </>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-white text-[#5A4D41] overflow-x-hidden" style={{ fontFamily: '"游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", sans-serif', wordBreak: 'normal', overflowWrap: 'break-word' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative isolate overflow-hidden bg-[#FDFBF7]">
                    <h1 className="sr-only">いま必要かを知る こども矯正</h1>
                    <div className="mx-auto max-w-[430px] px-4 py-5 md:max-w-7xl md:px-8 md:py-12 lg:py-14">
                        <div className="grid gap-6 md:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(430px,1.1fr)] lg:items-center lg:gap-14">
                            <div className="order-2 lg:order-1">
                                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8DCCB] bg-white/86 px-4 py-2 text-sm font-bold text-[#8D6F2F] shadow-sm backdrop-blur md:px-5 md:py-2.5">
                                    <CheckCircle2 size={17} className="text-[#C5A572]" />
                                    相談無料 / 豊洲駅徒歩2分
                                </div>
                                <p className="mb-4 hidden font-serif text-sm font-semibold tracking-[0.28em] text-[#C5A572] lg:block">
                                    KIDS ORTHODONTICS
                                </p>
                                <h2 className="hidden font-serif text-6xl font-bold leading-[1.34] text-[#5A4D41] lg:block xl:text-7xl">
                                    いま必要かを
                                    <br />
                                    知る
                                    <br />
                                    <span className="text-[#C5A572]">こども矯正</span>
                                </h2>
                                <p className="mt-0 max-w-md text-sm leading-8 text-[#5A4D41] md:mt-7 md:text-base md:leading-9 md:text-[#7E7469]">
                                    治療を決める前に、歯並び・噛み合わせ・お口の癖を一緒に整理します。
                                </p>

                                <div className="mt-6 flex flex-col gap-3 md:mt-8 md:grid md:max-w-xl md:grid-cols-2 md:gap-4">
                                    <a
                                        href={WEB_RESERVATION_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#0a8a85] px-7 py-4 text-white shadow-xl shadow-[#0a8a85]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#087a76] md:min-h-16"
                                    >
                                        <Calendar size={22} className="flex-shrink-0" />
                                        <span className="whitespace-nowrap text-base font-bold md:text-lg">24時間 WEB予約</span>
                                        <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
                                    </a>
                                    <a
                                        href="tel:03-6204-2876"
                                        className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#C5A572]/45 bg-white/88 px-7 py-4 text-[#5A4D41] shadow-sm backdrop-blur transition-colors hover:bg-white md:min-h-16"
                                    >
                                        <Phone size={21} className="flex-shrink-0 text-[#C5A572]" />
                                        <span className="whitespace-nowrap text-base font-bold md:text-lg">電話で相談</span>
                                        <ChevronRight size={20} className="text-[#C5A572]" />
                                    </a>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2">
                                <div className="relative overflow-hidden rounded-[26px] border border-[#E6D8C5] bg-white p-2 shadow-xl shadow-[#C5A572]/12 md:rounded-[34px] md:p-3">
                                    <picture className="block h-full w-full overflow-hidden rounded-[20px] md:rounded-[26px]">
                                        <source
                                            srcSet="/images/pages/kidsortho/hero-consultation-enhanced.webp"
                                            type="image/webp"
                                        />
                                        <img
                                            src="/images/pages/kidsortho/hero-consultation-enhanced.jpg"
                                            alt="親子が歯科医師とこども矯正について相談している様子"
                                            className="aspect-[390/520] h-full w-full object-cover object-[30%_center] sm:aspect-[4/5] md:aspect-[16/11] lg:aspect-[4/3]"
                                            style={{ width: '100%', height: '100%' }}
                                            loading="eager"
                                            decoding="async"
                                            fetchPriority="high"
                                        />
                                    </picture>
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FDFBF7]/85 to-transparent md:hidden" />
                                    <div className="absolute right-4 top-4 flex gap-2 md:hidden">
                                        {['こども矯正', 'いま必要かを知る'].map((label) => (
                                            <div
                                                key={label}
                                                className="rounded-lg border border-[#E8DCCB] bg-white/92 px-3.5 py-5 text-center font-serif text-[1.78rem] font-bold leading-[1.12] text-[#B8935A] shadow-lg backdrop-blur"
                                                style={{ writingMode: 'vertical-rl' }}
                                            >
                                                {label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Spacer for overlapping CTA */}
                <div className="pt-0 bg-white"></div>

                {/* --- Information Section --- */}
                <section className="py-4 md:py-6 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        {/* Title with underline */}
                        <div className="mb-12 text-center pt-4">
                            <h2 className="text-[1.5rem] md:text-3xl font-bold text-[#5A4D41] mb-0 px-1">
                                まずはお気軽にご相談ください
                            </h2>
                            <div className="w-full h-2 bg-[#FFE44D] rounded-full -mt-2"></div>
                            <p className="text-sm text-[#8D8070] mt-4">豊洲駅徒歩2分のFデンタルオフィス 豊洲プライムスクエア院では、こども矯正の無料相談を実施しています</p>
                        </div>

                        {/* Check items */}
                        <div className="space-y-6 mb-12">
                            {/* Item 1 */}
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-8 h-8">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#C5A572]">
                                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                                        <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-base md:text-lg text-[#5A4D41]">
                                    お子様の歯並びや噛み合わせが気になる
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-8 h-8">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#C5A572]">
                                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                                        <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-base md:text-lg text-[#5A4D41]">
                                    顔の成長やバランスが心配
                                </p>
                            </div>

                            {/* Item 3 */}
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-8 h-8">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#C5A572]">
                                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                                        <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-base md:text-lg text-[#5A4D41]">
                                    いつから矯正を始めればいいか分からない
                                </p>
                            </div>
                        </div>

                        {/* Dental condition illustrations */}
                        <div className="flex justify-center items-start gap-6 md:gap-10 mt-8">
                            {/* 反対咬合 */}
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border-4 border-[#C5A572] flex items-center justify-center bg-white overflow-hidden">
                                    <img
                                        src="/images/kidsortho/underbite-illustration.webp"
                                        alt="反対咬合"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <p className="text-[#C5A572] font-bold text-sm md:text-base text-center">反対咬合</p>
                            </div>

                            {/* ガタガタ */}
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border-4 border-[#C5A572] flex items-center justify-center bg-white overflow-hidden">
                                    <img
                                        src="/images/kidsortho/crowding-illustration.webp"
                                        alt="ガタガタ"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <p className="text-[#C5A572] font-bold text-sm md:text-base text-center">ガタガタ</p>
                            </div>

                            {/* 開咬 */}
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border-4 border-[#C5A572] flex items-center justify-center bg-white overflow-hidden">
                                    <img
                                        src="/images/kidsortho/openbite-illustration.webp"
                                        alt="開咬"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <p className="text-[#C5A572] font-bold text-sm md:text-base text-center">開咬</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Clinic Information Section --- */}
                <section className="py-2 md:py-2 bg-[#FFF9F0]">
                    <div className="container mx-auto px-4 max-w-4xl">
                        {/* Wavy Title Banner */}
                        <div className="mb-8">
                            <div className="relative bg-[#C5A572] py-6 px-8 shadow-lg overflow-hidden" style={{ borderRadius: '60px 60px 50px 50px' }}>
                                <h2 className="text-2xl md:text-3xl font-bold text-white text-center relative z-10">
                                    クリニック案内
                                </h2>
                                {/* Wave decoration - bottom */}
                                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1400 60" preserveAspectRatio="none" style={{ height: '30px' }}>
                                    <path d="M0,10 Q100,35 200,15 T400,20 Q500,40 600,15 T800,25 Q900,45 1000,20 T1200,15 Q1300,35 1400,20 L1400,60 L0,60 Z"
                                        fill="#B8935A"
                                        opacity="0.7" />
                                </svg>
                            </div>
                        </div>

                        {/* Clinic Name with Brackets */}
                        <div className="flex items-center justify-center mb-8 gap-1 sm:gap-2 md:gap-4 px-2">
                            <div className="text-2xl sm:text-3xl md:text-5xl text-[#C5A572] font-bold flex-shrink-0">【</div>
                            <h3 className="text-[13px] sm:text-base md:text-2xl font-bold text-[#C5A572] text-center break-keep">
                                Fデンタルオフィス 豊洲プライムスクエア院
                            </h3>
                            <div className="text-2xl sm:text-3xl md:text-5xl text-[#C5A572] font-bold flex-shrink-0">】</div>
                        </div>

                        {/* Images Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-10">
                            {/* Clinic Photo */}
                            <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                                <PageImage
                                    path="/kidsortho"
                                    imageId="clinic-room"
                                    alt="Fデンタルオフィス 豊洲プライムスクエア院の診療室"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Map */}
                            <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.010249888901!2d139.798077!3d35.6521191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018895bd480af87%3A0x46a0d1583ceadde6!2zRuODh-ODs-OCv-ODq-OCquODleOCo-OCuSDosYrmtLLjg5fjg6njgqTjg6Djgrnjgq_jgqjjgqLpmaI!5e0!3m2!1sja!2sjp!4v1778288265882!5m2!1sja!2sjp"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Fデンタルオフィス 豊洲プライムスクエア院 地図"
                                ></iframe>
                            </div>
                        </div>

                        {/* Access Section */}
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <h4 className="text-xl md:text-2xl font-bold text-[#C5A572]">アクセス</h4>
                                <div className="flex-1 border-t-2 border-dotted border-[#C5A572]"></div>
                            </div>
                            <div className="space-y-3 text-[#5A4D41]">
                                <p className="text-base md:text-lg">〒135-0061</p>
                                <p className="text-base md:text-lg">東京都江東区豊洲5-6-36 豊洲プライムスクエア1階</p>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <div className="flex items-center gap-2">
                                        <span className="bg-[#8B6F47] text-white px-3 py-1 rounded font-bold text-sm">豊洲駅6a出口から</span>
                                        <span className="text-sm md:text-base">徒歩2分</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hours Section */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <h4 className="text-xl md:text-2xl font-bold text-[#C5A572]">診療時間</h4>
                                <div className="flex-1 border-t-2 border-dotted border-[#C5A572]"></div>
                            </div>
                            <ClinicHoursTable />
                        </div>
                    </div>
                </section>

                {/* --- Concerns Section --- */}
                <section className="py-2 md:py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        {/* Title Banner */}
                        <div className="mb-10">
                            <div className="relative bg-[#C5A572] py-6 px-4 md:px-8 shadow-lg overflow-hidden" style={{ borderRadius: '60px 60px 50px 50px' }}>
                                <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-white text-center relative z-10">
                                    こんな不安はありませんか？
                                </h2>
                                <p className="text-white/80 text-xs md:text-sm text-center relative z-10 mt-2">豊洲の歯医者として多くのお子さまを診てきた当院に寄せられるご不安です</p>
                                {/* Wave decoration - bottom */}
                                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1400 60" preserveAspectRatio="none" style={{ height: '30px' }}>
                                    <path d="M0,10 Q100,35 200,15 T400,20 Q500,40 600,15 T800,25 Q900,45 1000,20 T1200,15 Q1300,35 1400,20 L1400,60 L0,60 Z"
                                        fill="#B8935A"
                                        opacity="0.7" />
                                </svg>
                            </div>
                        </div>

                        {/* Concern 1 */}
                        <div className="mb-8">
                            <div className="bg-[#8B6F47] text-white py-2 px-6 inline-block mb-4" style={{ clipPath: 'polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)' }}>
                                <h3 className="text-lg md:text-xl font-bold">不安の声 1</h3>
                            </div>
                            <div className="space-y-4">
                                <p className="text-base md:text-lg text-[#8B6F47] font-bold border-b-2 border-dotted border-[#C5A572] pb-3">
                                    初診料がいくらかかるのか心配です。
                                </p>
                                <p className="text-lg md:text-xl text-[#C5A572] font-bold">
                                    相談料は、保険治療の範囲内のみです。
                                </p>
                                <p className="text-sm md:text-base text-[#5A4D41]">
                                    お子様のお口の検査、レントゲン撮影（必要に応じて）、ドクターとの相談などが<span className="border-b-2 border-[#FFD700]">保険診療で受けられます</span>。矯正治療が必要かどうか、どのような治療法があるかなど、まずはお気軽にご相談ください。
                                </p>
                                <p className="text-xs md:text-sm text-[#5A4D41]">
                                    ※保険診療の場合、3割負担で<span className="border-b-2 border-[#FFD700]">1,000〜2,000円程度</span>です。
                                </p>
                            </div>
                        </div>

                        {/* Concern 2 */}
                        <div className="mb-8">
                            <div className="bg-[#8B6F47] text-white py-2 px-6 inline-block mb-4" style={{ clipPath: 'polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)' }}>
                                <h3 className="text-lg md:text-xl font-bold">不安の声 2</h3>
                            </div>
                            <div className="space-y-4">
                                <p className="text-base md:text-lg text-[#8B6F47] font-bold border-b-2 border-dotted border-[#C5A572] pb-3">
                                    こどもの矯正治療を必ずやらなくてはいけないのか心配です。
                                </p>
                                <p className="text-lg md:text-xl text-[#C5A572] font-bold">
                                    必ず治療しなくてはいけないということは一切ありません。
                                </p>
                                <p className="text-sm md:text-base text-[#5A4D41]">
                                    検査の結果、<span className="border-b-2 border-[#FFD700]">治療が不要な場合ははっきりとお伝えします</span>。また、治療が必要な場合でも、お子様の成長段階や歯並びの状態に応じて最適な時期をご提案いたします。<span className="border-b-2 border-[#FFD700]">無理に治療を勧めることはございません</span>ので、ご安心ください。
                                </p>
                            </div>
                        </div>

                        {/* Concern 3 */}
                        <div className="mb-8">
                            <div className="bg-[#8B6F47] text-white py-2 px-6 inline-block mb-4" style={{ clipPath: 'polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)' }}>
                                <h3 className="text-lg md:text-xl font-bold">不安の声 3</h3>
                            </div>
                            <div className="space-y-3">
                                <p className="text-base md:text-lg text-[#8B6F47] font-bold border-b-2 border-dotted border-[#C5A572] pb-3">
                                    矯正治療で痛みがないか心配です。
                                </p>
                                <p className="text-lg md:text-xl text-[#C5A572] font-bold">
                                    痛みはほとんどありません。
                                </p>
                                <p className="text-sm md:text-base text-[#5A4D41]">
                                    当院では原則として、ご家庭で<span className="border-b-2 border-[#FFD700]">取り外しができる矯正装置</span>を採用しているため、お子様への負担が少なく、<span className="border-b-2 border-[#FFD700]">痛みもほとんどありません</span>。食事や歯磨きの際には取り外すことができるので、普段通りの生活を送りながら矯正治療を進めることができます。
                                </p>
                                <p className="text-sm md:text-base text-[#5A4D41]">
                                    ※症例によっては、取り外しできないワイヤータイプを提案させていただく場合もあります。
                                </p>
                            </div>
                        </div>

                        {/* Concern 4 */}
                        <div className="mb-0">
                            <div className="bg-[#8B6F47] text-white py-2 px-6 inline-block mb-4" style={{ clipPath: 'polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)' }}>
                                <h3 className="text-lg md:text-xl font-bold">不安の声 4</h3>
                            </div>
                            <div className="space-y-1">
                                <p className="text-base md:text-lg text-[#8B6F47] font-bold border-b-2 border-dotted border-[#C5A572] pb-3">
                                    矯正治療の来院回数と費用が気になります。
                                </p>
                                <p className="text-lg md:text-xl text-[#C5A572] font-bold mt-4">
                                    来院回数は多くて月に1回30分未満、費用は、¥132,000〜となります。
                                </p>
                                <p className="text-sm md:text-base text-[#5A4D41] mb-0 mt-4">
                                    こどもの矯正治療は、お子様の年齢や歯並びの状態によって治療期間や費用が異なります。<span className="border-b-2 border-[#FFD700]">初回相談時に、お子様の状態を診査した上で、詳しい治療計画と費用についてご説明いたします</span>。また、お支払い方法についてもご相談を承ります。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Memo Section --- */}
                <section className="py-8 md:py-12 bg-[#FFF9F0]">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 relative">
                            {/* Memo bubble */}
                            <div className="absolute -top-6 left-8 md:left-12">
                                <div className="bg-white border-2 border-[#C5A572] rounded-full px-6 py-3 shadow-md">
                                    <p className="text-2xl md:text-3xl font-bold text-[#C5A572]">memo</p>
                                </div>
                            </div>

                            {/* Pin icon */}
                            <div className="absolute -top-4 right-8 md:right-12">
                                <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
                                    <ellipse cx="20" cy="15" rx="12" ry="15" fill="#C5A572" opacity="0.6" />
                                    <line x1="20" y1="15" x2="20" y2="45" stroke="#C5A572" strokeWidth="3" />
                                    <circle cx="20" cy="15" r="8" fill="#C5A572" />
                                </svg>
                            </div>

                            <div className="mt-8 space-y-6 text-center">
                                <p className="text-lg md:text-xl text-[#5A4D41]">
                                    お子様の歯並びやかみ合わせの
                                </p>
                                <div className="bg-[#FFE44D] py-3 px-6 inline-block">
                                    <p className="text-xl md:text-2xl font-bold text-[#5A4D41]">
                                        治療に最適な期間は、<br className="md:hidden" />限られています。
                                    </p>
                                </div>
                                <p className="text-base md:text-lg text-[#5A4D41]">
                                    （6歳〜12歳が理想）
                                </p>
                                <p className="text-sm md:text-base text-[#5A4D41]">
                                    ※年齢に関わらずお気軽にご相談ください。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Features Section --- */}
                <section className="py-20 md:py-28 bg-[#FDFBF7] relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                        <div className="text-center mb-16 md:mb-20">
                            <span className="font-sans text-[11px] tracking-[0.3em] text-[#C5A572] uppercase mb-4 block">FEATURES</span>
                            <h2 className="text-3xl md:text-4xl font-light tracking-widest text-[#5A4D41] font-serif">当院の特徴</h2>
                            <p className="text-[#8D8070] mt-6 leading-loose">豊洲の矯正歯科として、お子さまに寄り添った治療を提供します</p>
                        </div>

                        <div className="space-y-16 md:space-y-24">
                            {features.map((feature, index) => (
                                <article
                                    key={feature.id}
                                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-14 items-start group`}
                                >
                                    <div className="hidden lg:block lg:w-1/2 relative">
                                        <div className="relative rounded-[32px] overflow-hidden aspect-[16/10] border border-[#E6E0D6] transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                                            <PageImage
                                                path="/kidsortho"
                                                imageId={feature.imageId}
                                                alt={feature.highlight}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className={`absolute -bottom-8 ${index % 2 === 0 ? '-left-8' : '-right-8'} w-32 h-32 rounded-full blur-2xl -z-10 bg-[#C5A572]/20`} />
                                    </div>

                                    <div className="w-full lg:w-1/2 flex flex-col gap-6 relative">
                                        <div className="relative">
                                            <span className="font-serif absolute -top-10 -left-2 select-none pointer-events-none text-[6rem] md:text-[7rem] font-semibold tracking-[-0.05em] leading-none text-[#C5A572]/15">
                                                {feature.id}
                                            </span>
                                            <p className="text-[11px] tracking-[0.25em] mb-3 relative text-[#C5A572]">{feature.title}</p>
                                            <h3 className="font-serif relative text-[#5A4D41]">
                                                <span className="block text-base font-medium mb-2 tracking-widest text-[#8D8070]">FEATURE {feature.id}</span>
                                                <span className="block text-3xl md:text-4xl lg:text-5xl leading-[1.3]">{feature.highlight}</span>
                                                <span className="block w-16 h-px mt-5 bg-[#C5A572]" />
                                            </h3>
                                        </div>

                                        <div className="w-full lg:hidden">
                                            <div className="rounded-[24px] overflow-hidden aspect-[16/10] border border-[#E6E0D6]">
                                                <PageImage
                                                    path="/kidsortho"
                                                    imageId={feature.imageId}
                                                    alt={feature.highlight}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        <p className="text-sm md:text-base leading-[2.1] text-[#6B6258]" dangerouslySetInnerHTML={{ __html: feature.summary }} />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Case Studies Section --- */}
                <section className="py-12 md:py-16 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-12 space-y-4">
                            <span className="font-sans text-xs tracking-[0.3em] text-[#C5A572] uppercase">Case Studies</span>
                            <h2 className="text-4xl font-light tracking-widest text-[#5A4D41]">症例紹介</h2>
                        </div>

                        <div className="max-w-4xl mx-auto space-y-8">
                            {[
                                {
                                    id: 1,
                                    title: "反対咬合の改善",
                                    beforeId: "case-hanntaikougou-before",
                                    afterId: "case-hanntaikougou-after",
                                    description: "早期の小児矯正により、反対咬合を改善しました。",
                                    patient: "小児",
                                    treatment: "小児矯正（第1期治療）",
                                    cost: "132,000円（税込）",
                                    duration: "約1〜2年（治療期間）／月1回の通院",
                                    risks: "装置による痛み・違和感、発音のしづらさ、むし歯・歯肉炎リスク、まれに後戻りの可能性",
                                    insurance: "自由診療（保険適用外）"
                                },
                                {
                                    id: 2,
                                    title: "出っ歯からの改善",
                                    beforeId: "case-deppa-before",
                                    afterId: "case-deppa-after",
                                    description: "小児矯正により、出っ歯（上顎前突）を改善しました。",
                                    patient: "小児",
                                    treatment: "小児矯正（第1期治療）",
                                    cost: "132,000円（税込）",
                                    duration: "約1〜2年（治療期間）／月1回の通院",
                                    risks: "装置による痛み・違和感、発音のしづらさ、むし歯・歯肉炎リスク、まれに後戻りの可能性",
                                    insurance: "自由診療（保険適用外）"
                                },
                                {
                                    id: 3,
                                    title: "歯並びと噛み合わせの深さの改善",
                                    beforeId: "case-kamiaase-before",
                                    afterId: "case-kamiaase-after",
                                    description: "矯正治療で歯並びと深い噛み合わせをバランスよく整えました。",
                                    patient: "小児",
                                    treatment: "小児矯正（第1期・第2期治療）",
                                    cost: "132,000円〜660,000円（税込）",
                                    duration: "約2〜3年（治療期間）／月1回の通院",
                                    risks: "装置による痛み・違和感、発音のしづらさ、むし歯・歯肉炎リスク、歯根吸収、まれに後戻りの可能性",
                                    insurance: "自由診療（保険適用外）"
                                }
                            ].map((caseStudy) => (
                                <div key={caseStudy.id} className="bg-[#FFF9F0] rounded-3xl p-6 md:p-10 shadow-xl border border-[#FFE5CC]">
                                    {/* Title Section */}
                                    <div className="text-center mb-8 pb-6 border-b border-[#FFE5CC]">
                                        <p className="text-[#8D8070] text-sm mb-2">{caseStudy.patient}</p>
                                        <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41]">
                                            {caseStudy.title}
                                        </h3>
                                    </div>

                                    {/* Before / Arrow / After */}
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
                                        {/* Before */}
                                        <div className="w-full md:w-[44%]">
                                            <div className="mb-2">
                                                <span className="inline-block bg-gray-600 text-white px-3 py-1 rounded-md font-bold text-xs">
                                                    Before
                                                </span>
                                            </div>
                                            <PageImage
                                                path="/kidsortho"
                                                imageId={caseStudy.beforeId}
                                                alt={`${caseStudy.title} - Before`}
                                                className="w-full aspect-[3/2] object-contain bg-[#F7F2EA] rounded-2xl shadow-lg"
                                            />
                                        </div>

                                        {/* Arrow */}
                                        <div className="flex-shrink-0 flex items-center justify-center">
                                            <svg width="32" height="32" viewBox="0 0 32 32" className="text-[#C5A572] hidden md:block">
                                                <line x1="4" y1="16" x2="24" y2="16" stroke="currentColor" strokeWidth="2" />
                                                <polygon points="22,10 30,16 22,22" fill="currentColor" />
                                            </svg>
                                            <svg width="32" height="32" viewBox="0 0 32 32" className="text-[#C5A572] md:hidden">
                                                <line x1="16" y1="4" x2="16" y2="24" stroke="currentColor" strokeWidth="2" />
                                                <polygon points="10,22 22,22 16,30" fill="currentColor" />
                                            </svg>
                                        </div>

                                        {/* After */}
                                        <div className="w-full md:w-[44%]">
                                            <div className="mb-2">
                                                <span className="inline-block bg-[#C5A572] text-white px-3 py-1 rounded-md font-bold text-xs">
                                                    After
                                                </span>
                                            </div>
                                            <PageImage
                                                path="/kidsortho"
                                                imageId={caseStudy.afterId}
                                                alt={`${caseStudy.title} - After`}
                                                className="w-full aspect-[3/2] object-contain bg-[#F7F2EA] rounded-2xl shadow-lg border-2 border-[#C5A572]/30"
                                            />
                                        </div>
                                    </div>

                                    <p className="text-sm text-[#5A4D41] text-center mt-6 mb-6 leading-relaxed">
                                        {caseStudy.description}
                                    </p>

                                    {/* 医療広告ガイドライン情報 */}
                                    <div className="bg-white rounded-2xl p-5 md:p-6 border border-[#FFE5CC]">
                                        <dl className="space-y-3 text-xs md:text-sm text-[#5A4D41]">
                                            <div className="flex flex-col md:flex-row md:gap-4">
                                                <dt className="font-bold text-[#8B6F47] md:w-28 flex-shrink-0">治療内容</dt>
                                                <dd>{caseStudy.treatment}</dd>
                                            </div>
                                            <div className="flex flex-col md:flex-row md:gap-4">
                                                <dt className="font-bold text-[#8B6F47] md:w-28 flex-shrink-0">費用</dt>
                                                <dd>{caseStudy.cost}</dd>
                                            </div>
                                            <div className="flex flex-col md:flex-row md:gap-4">
                                                <dt className="font-bold text-[#8B6F47] md:w-28 flex-shrink-0">治療期間・回数</dt>
                                                <dd>{caseStudy.duration}</dd>
                                            </div>
                                            <div className="flex flex-col md:flex-row md:gap-4">
                                                <dt className="font-bold text-[#8B6F47] md:w-28 flex-shrink-0">保険適用</dt>
                                                <dd>{caseStudy.insurance}</dd>
                                            </div>
                                            <div className="flex flex-col md:flex-row md:gap-4">
                                                <dt className="font-bold text-[#8B6F47] md:w-28 flex-shrink-0">主なリスク・副作用</dt>
                                                <dd className="leading-relaxed">{caseStudy.risks}</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-[#8D8070] text-center mt-6 max-w-3xl mx-auto leading-relaxed">
                            ※ 掲載している症例は一例です。治療効果・期間・費用は患者様の症状により異なります。詳細はカウンセリングでご説明いたします。
                        </p>
                    </div>
                </section>

                {/* --- Doctor Introduction Section --- */}
                <section className="py-20 md:py-28 bg-[#FFF9F0]">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-12">
                            <span className="font-sans text-[11px] tracking-[0.3em] text-[#8D8070] uppercase mb-4 block">DOCTOR</span>
                            <h2 className="text-3xl md:text-4xl font-light text-[#5A4D41] font-serif">医師紹介</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-start">
                            <div className="mx-auto md:mx-0 w-full max-w-[280px]">
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-[#E6E0D6] bg-white">
                                    <PageImage
                                        path="/homepage"
                                        imageId="doctor"
                                        alt="院長 福永真大"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-center mt-4 text-sm text-[#8D8070]">
                                    <span className="block text-xs mb-1">院長</span>
                                    <span className="font-serif text-lg text-[#5A4D41]">福永 真大</span>
                                </p>
                            </div>

                            <div>
                                <div className="mb-7 pb-6 border-b border-[#E6E0D6]">
                                    <p className="text-xs tracking-[0.22em] mb-2 text-[#8D8070]">DIRECTOR / DENTIST</p>
                                    <h3 className="font-serif text-2xl md:text-3xl text-[#5A4D41]">
                                        福永 真大
                                    </h3>
                                    <p className="text-xs md:text-sm mt-2 text-[#8D8070]">
                                        Masahiro Fukunaga / 院長・歯科医師
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-5 mb-8">
                                    <div className="rounded-2xl p-5 md:p-6 bg-white border border-[#E6E0D6]">
                                        <p className="text-xs tracking-[0.22em] font-medium mb-4 text-[#C5A572]">CAREER</p>
                                        <ul className="space-y-2.5 text-sm md:text-[15px] leading-[1.9] text-[#6B6258]">
                                            {[
                                                '大阪大学歯学部 卒業',
                                                '医療法人同仁会ワタナベ歯科医院にて研修医指導医・診療主任を歴任',
                                                '駒沢公園通り西垣歯科・矯正歯科 副院長',
                                                '小児歯科部門の立ち上げ',
                                                'Fデンタルオフィス 豊洲プライムスクエア院 開業',
                                                '咬合育成研究会監修 生活習慣改善アプリの開発',
                                            ].map((item) => (
                                                <li key={item} className="flex gap-2.5">
                                                    <span className="mt-[0.7em] h-1.5 w-1.5 rounded-full flex-shrink-0 bg-[#C5A572]" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="rounded-2xl p-5 md:p-6 bg-white border border-[#E6E0D6]">
                                        <p className="text-xs tracking-[0.22em] font-medium mb-4 text-[#C5A572]">所属学会・資格</p>
                                        <p className="text-sm md:text-[15px] leading-[2] text-[#6B6258]">
                                            日本小児歯科学会 / 日本矯正歯科学会 / 日本審美歯科学会 / 歯科医師免許
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-2xl p-6 md:p-8 bg-[#FAF8F5] border border-[#E6E0D6]">
                                    <h3 className="font-serif text-2xl md:text-3xl leading-[1.7] mb-5 text-[#5A4D41]">
                                        当院が大切にしていること
                                    </h3>
                                    <div className="space-y-5 text-sm md:text-base leading-[2.1] text-[#6B6258]">
                                        <p>
                                            私の父は、30年近く小児矯正に携わってきた歯科医師です。幼い頃からその背中を見て育ち、歯並びや噛み合わせが日々の習慣で大きく変わることを学んできました。当院のコンセプトは「未来のいいお顔を育てる」。
                                        </p>
                                        {isMessageExpanded && (
                                            <>
                                                <p>
                                                    これはお子様だけに向けた言葉ではありません。矯正後の後戻り、顔の歪み — その多くは呼吸・姿勢・噛み癖といった習慣に原因があります。ただ、多くの医院ではこれを伝えていない、あるいは軽視しているケースが多いのが現状です。そのため、先にお伝えしたような後戻りが起きたり、大人になってから「やはり駄目だった」という事態が起きてしまいます。お子様の口腔育成から大人の矯正・審美治療まで、習慣へのアプローチを軸に、年齢を問わずお口と表情の健康を整えていく歯科医院です。
                                                </p>
                                                <p>
                                                    大阪大学歯学部を卒業後、医療法人同仁会ワタナベ歯科医院にて一般歯科・インプラント・矯正・審美治療など幅広い症例を経験し、研修医指導医も務めました。その中で強く感じたのは、良い治療が患者様に正しく届いていないという現実です。私自身は大学まで野球に打ち込み、噛み合わせや口呼吸がパフォーマンスに直結することも実感してきました。歯並びと全身の健康の関係を、スポーツを頑張るお子様や保護者の方にも届けたいと考えています。
                                                </p>
                                                <p>
                                                    父から受け継いだ口腔育成への想い、臨床で培った技術、そして患者様に「伝わる」情報発信力。この3つを軸に、「もっと早く知りたかった」「あの時聞けてよかった」— そう感じていただける歯科医院を目指しています。
                                                </p>
                                            </>
                                        )}
                                    </div>
                                    <div className="mt-6">
                                        <button
                                            onClick={() => setIsMessageExpanded(!isMessageExpanded)}
                                            className="inline-flex items-center gap-2 rounded-full bg-[#8B6F47] hover:bg-[#6D5E52] text-white px-7 py-3 font-bold text-sm md:text-base shadow-sm transition-all"
                                        >
                                            {isMessageExpanded ? (
                                                <>閉じる <ChevronUp size={18} /></>
                                            ) : (
                                                <>続きを読む <ChevronDown size={18} /></>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Clinic Selection Section --- */}
                <section className="py-2 md:py-2 bg-[#FFF9F0]">
                    <div className="container mx-auto px-4 max-w-3xl">
                        {/* Title Banner with hand-drawn style */}
                        <div className="mb-10">
                            <div className="relative bg-[#C5A572] py-6 px-8 shadow-lg" style={{ borderRadius: '40px' }}>
                                <h2 className="text-2xl md:text-3xl font-bold text-white text-center relative z-10">
                                    クリニックの選び方
                                </h2>
                                <p className="text-white/80 text-xs md:text-sm text-center relative z-10 mt-2">豊洲エリアで歯医者・矯正歯科をお探しの方へ</p>
                            </div>
                        </div>

                        {/* Content Card */}
                        <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 border border-[#FFE5CC]">
                            <p className="text-base md:text-lg text-[#5A4D41] mb-2">
                                都内には多くのクリニックがありますが、
                            </p>
                            <p className="text-base md:text-lg text-[#5A4D41] mb-8">
                                <span className="font-bold" style={{ textDecoration: 'underline', textDecorationColor: '#FFE44D', textDecorationThickness: '4px', textUnderlineOffset: '3px' }}>下記条件を意識して選ぶ</span>とよいでしょう。
                            </p>

                            {/* Checklist Items */}
                            <div className="space-y-5">
                                {/* Item 1 */}
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-7 h-7">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#C5A572]">
                                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
                                            <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-base md:text-lg text-[#5A4D41] flex-1 leading-7 min-w-0" style={{ wordBreak: 'normal', overflowWrap: 'anywhere' }}>
                                        <span className="font-bold" style={{ textDecoration: 'underline', textDecorationColor: '#FFE44D', textDecorationThickness: '4px', textUnderlineOffset: '3px' }}>こども矯正の実績と専門知識のある医師が診る</span>こと
                                    </p>
                                </div>

                                {/* Item 2 */}
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-7 h-7">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#C5A572]">
                                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
                                            <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-base md:text-lg text-[#5A4D41] flex-1 leading-7 min-w-0" style={{ wordBreak: 'normal', overflowWrap: 'anywhere' }}>
                                        <span className="font-bold" style={{ textDecoration: 'underline', textDecorationColor: '#FFE44D', textDecorationThickness: '4px', textUnderlineOffset: '3px' }}>お子様の成長段階に応じた治療時期の提案</span>があること
                                    </p>
                                </div>

                                {/* Item 3 */}
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-7 h-7">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#C5A572]">
                                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
                                            <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-base md:text-lg text-[#5A4D41] flex-1 leading-7 min-w-0" style={{ wordBreak: 'normal', overflowWrap: 'anywhere' }}>
                                        <span className="font-bold" style={{ textDecoration: 'underline', textDecorationColor: '#FFE44D', textDecorationThickness: '4px', textUnderlineOffset: '3px' }}>歯を並べるだけではなく、歯並びが悪くなった原因にもアプローチする</span>こと
                                    </p>
                                </div>

                                {/* Item 4 */}
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-7 h-7">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#C5A572]">
                                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
                                            <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-base md:text-lg text-[#5A4D41] flex-1 leading-7 min-w-0" style={{ wordBreak: 'normal', overflowWrap: 'anywhere' }}>
                                        <span className="font-bold" style={{ textDecoration: 'underline', textDecorationColor: '#FFE44D', textDecorationThickness: '4px', textUnderlineOffset: '3px' }}>治療費用や支払い方法について丁寧に説明</span>してくれること
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Trust Section --- */}
                <section className="py-6 md:py-8 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        {/* Title */}
                        <div className="mb-8">
                            <div className="relative bg-[#C5A572] py-6 px-8 shadow-lg overflow-hidden" style={{ borderRadius: '60px 60px 50px 50px' }}>
                                <h2 className="text-2xl md:text-3xl font-bold text-white text-center relative z-10">
                                    当院にお任せください！
                                </h2>
                                {/* Wave decoration - bottom */}
                                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1400 60" preserveAspectRatio="none" style={{ height: '30px' }}>
                                    <path d="M0,10 Q100,35 200,15 T400,20 Q500,40 600,15 T800,25 Q900,45 1000,20 T1200,15 Q1300,35 1400,20 L1400,60 L0,60 Z"
                                        fill="#B8935A"
                                        opacity="0.7" />
                                </svg>
                            </div>
                        </div>

                        {/* Content Card */}
                        <div className="bg-[#FFF9F0] rounded-3xl shadow-sm p-8 md:p-12">
                            {/* Image */}
                            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                                <PageImage
                                    path="/kidsortho"
                                    imageId="director-xray"
                                    alt="レントゲンを見ながら治療内容を説明する院長"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Description */}
                            <div className="text-base md:text-lg text-[#5A4D41] leading-relaxed text-left space-y-4">
                                <p>
                                    当院はお子様に負担の少ない<span className="font-bold text-[#C5A572]">取り外し可能な矯正装置</span>を採用しており、こども矯正の<span className="font-bold text-[#C5A572]">豊富な実績を持つ医師</span>が最後まで患者さまに寄り添います。
                                </p>
                                <p>
                                    お子様の<span className="font-bold text-[#C5A572]">成長段階に合わせた最適な治療プラン</span>をご提案し、歯並びだけでなく<span className="font-bold text-[#C5A572]">口腔機能全体の改善</span>を目指します。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Price Section --- */}
                <section className="py-8 md:py-12 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-4xl">
                        {/* Title */}
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif mb-4">
                                料金について
                            </h2>
                            <p className="text-[#8D8070]">豊洲の歯科 Fデンタルオフィス 豊洲プライムスクエア院の小児矯正料金 ※表示価格はすべて税込です</p>
                        </div>

                        <div className="mb-8 rounded-3xl bg-white border border-[#C5A572]/30 shadow-sm p-6 md:p-8">
                            <div className="flex flex-col md:flex-row gap-4 md:gap-5">
                                <div className="w-12 h-12 rounded-full bg-[#C5A572]/15 flex items-center justify-center flex-shrink-0">
                                    <Coins className="text-[#C5A572]" size={26} />
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#5A4D41] font-serif mb-3 leading-snug">
                                        トータルフィー制度で、治療前に総額を明確にご提示します
                                    </h3>
                                    <p className="text-sm md:text-base leading-loose text-[#5A4D41]">
                                        当院では、こども矯正にトータルフィー制度を導入しています。治療開始前に必要な費用を総額でお伝えするため、「思っていたより費用が高くなった」ということが起こらないようにしています。表示している金額には、調整料など治療に必要な費用も含まれています。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Price Table */}
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                            {/* Header (Desktop only) */}
                            <div className="hidden md:flex bg-gray-50 text-left text-xs text-gray-400 font-bold uppercase tracking-wider border-b border-gray-100">
                                <div className="px-6 py-4 w-[70%]">治療内容</div>
                                <div className="px-6 py-4 w-[30%] text-right">費用（税込）</div>
                            </div>

                            {/* Items */}
                            <div className="divide-y divide-gray-200">
                                {kidsOrthoPrices?.items.map((item) => (
                                    <div key={item.name} className="flex flex-col md:flex-row md:items-center hover:bg-[#FAFAFA] transition-colors group px-6 py-6">
                                        <div className="w-full md:w-[70%] mb-2 md:mb-0">
                                            <div className="font-bold text-black text-base">{item.name}</div>
                                            <div className="text-sm text-gray-500 mt-1">{kidsOrthoPriceDescriptions[item.name]}</div>
                                        </div>
                                        <div className="w-full md:w-[30%] text-left md:text-right">
                                            <span className="font-bold text-lg text-[#008000]">{item.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <a
                            href="/kidsortho/appliances"
                            className="group mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-3xl bg-white border border-[#C5A572]/30 p-6 md:p-7 shadow-sm hover:shadow-lg hover:border-[#C5A572] transition-all"
                        >
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-[#5A4D41] font-serif mb-2">
                                    装置の選び方について
                                </h3>
                                <p className="text-sm md:text-base text-[#8D8070] leading-loose">
                                    プレオルソ、拡大床、マウスピース、ワイヤー矯正など、装置ごとの特徴と選び方を詳しくご覧いただけます。
                                </p>
                            </div>
                            <span className="inline-flex items-center gap-2 text-[#C5A572] font-bold text-sm md:text-base whitespace-nowrap group-hover:gap-3 transition-all">
                                詳しく見る
                                <ArrowRight size={18} />
                            </span>
                        </a>
                    </div>
                </section>

                {/* --- FAQ Section --- */}
                <FaqSection title="よくあるご質問" items={faqs} />

                {/* --- 小児矯正をもっと深く知る Section --- */}
                <section className="py-2 md:py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-5xl">
                        {/* セクションタイトル */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif mb-4">小児矯正をもっと深く知る</h2>
                            <p className="text-[#8D8070]">豊洲の矯正歯科が解説する、お子様の歯並び治療に関する各テーマごとの詳しい情報です</p>
                        </div>

                        {/* クラスター1: 緊急性・時期 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">いつ始める？緊急性と時期</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">こども矯正はいつから？3〜7歳が最適な開始時期｜「様子を見ましょう」のリスク</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        <span className="font-bold bg-yellow-100">受け口は3歳から、デコボコは6歳から</span>。最適な開始時期は3〜7歳（混合歯列期）です。
                                        早期治療により<span className="text-[#C5A572] font-bold">2期治療が不要になる可能性</span>が高まります。
                                    </p>
                                    <a href="/kidsortho/timing" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">受け口は自然に治る？確率14%の真実</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        「放置して治った」はレアケース。<span className="font-bold bg-yellow-100">自然治癒率14%のエビデンス</span>と、
                                        <span className="text-[#C5A572] font-bold">3歳から始める早期治療</span>（ムーシールド・プレオルソ）を紹介します。
                                    </p>
                                    <a href="/kidsortho/underbite-natural-cure" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">ただの「癖」だと思っていませんか？口呼吸の病気リスク</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        お口ポカン、いびき、クチャクチャ食べ...。<span className="font-bold bg-yellow-100">見た目より健康被害（病気）</span>が深刻です。
                                        <span className="text-[#C5A572] font-bold">セルフチェックリスト</span>で今すぐ確認を。
                                    </p>
                                    <a href="/kidsortho/mouth-breathing-risks" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* クラスター2: 実践・MFT */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">家庭でできるトレーニング</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">1日3分！あいうべ体操とボタンプルの正しいやり方</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        専門用語（MFT）を噛み砕き、<span className="font-bold bg-yellow-100">ゲーム感覚でできる手順</span>を紹介。
                                        <span className="text-[#C5A572] font-bold">口唇閉鎖力が向上し顔貌が改善</span>した論文データも解説します。
                                    </p>
                                    <a href="/kidsortho/mft-training" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">市販のガムでOK！ガムトレーニング完全手順</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        特別な道具不要。<span className="font-bold bg-yellow-100">舌で丸める→上顎に貼り付ける（ポッピング）→正しく飲み込む</span>の3ステップで、
                                        <span className="text-[#C5A572] font-bold">正しい嚥下を獲得</span>します。
                                    </p>
                                    <a href="/kidsortho/gum-training" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">猫背や浮き指が歯並びを悪くする？姿勢改善マニュアル</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        <span className="font-bold bg-yellow-100">足指（浮き指）→重心後退→猫背→下顎後退</span>の負の連鎖を図解。
                                        家庭でできる<span className="text-[#C5A572] font-bold">ひろのば体操</span>や足指チェックを紹介します。
                                    </p>
                                    <a href="/kidsortho/posture-improvement" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">顎を育てる食育レシピと調理の工夫</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        「硬いもの」より<span className="font-bold bg-yellow-100">前歯で噛みちぎる形状</span>（スティック野菜、骨付き肉）が正解。
                                        <span className="text-[#C5A572] font-bold">咀嚼が骨細胞を活性化</span>し、顎骨形成を促進します。
                                    </p>
                                    <a href="/kidsortho/food-education" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* クラスター3: お金・期間 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">費用と期間の不安を解消</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">小児矯正はいつ終わる？「長い」と感じる理由</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        期間が長いのは<span className="font-bold bg-yellow-100">成長を待つ時間（経過観察）が含まれる</span>から。
                                        <span className="text-[#C5A572] font-bold">I期治療とII期治療のタイムライン</span>を詳しく解説します。
                                    </p>
                                    <a href="/kidsortho/duration" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">医療費控除でいくら戻る？申請書の書き方</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        子供の矯正は<span className="font-bold bg-yellow-100">審美ではなく発育に必要な治療</span>なので控除対象。
                                        <span className="text-[#C5A572] font-bold">年収別の還付金シミュレーション</span>と申請方法を詳しく解説します。
                                    </p>
                                    <a href="/kidsortho/cost" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">「やらなきゃよかった」と後悔しないために</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        失敗の最大原因は<span className="font-bold bg-yellow-100">装着時間を守れない（コンプライアンス）と後戻り</span>。
                                        <span className="text-[#C5A572] font-bold">5つの失敗パターンと親の心構え</span>を紹介します。
                                    </p>
                                    <a href="/kidsortho/avoid-regret" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* クラスター4: 生活・Q&A */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">学校生活への影響</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">矯正中の部活はどうする？スポーツや楽器への影響</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        <span className="font-bold bg-yellow-100">金管楽器（トランペット等）は唇に当たるため影響</span>が出やすい。
                                        コンタクトスポーツ時の<span className="text-[#C5A572] font-bold">マウスガード活用法</span>も解説します。
                                    </p>
                                    <a href="/kidsortho/sports-and-music" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">子供が矯正を嫌がったら？痛みの対処法</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        痛みは<span className="font-bold bg-yellow-100">最初の数日で慣れる</span>。ワックスでの対処法と、
                                        モチベーション維持のための<span className="text-[#C5A572] font-bold">ご褒美シート活用術</span>を紹介します。
                                    </p>
                                    <a href="/kidsortho/pain-management" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* クラスター5: 装置の種類 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">使用する装置について</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">装置一覧・比較表</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        各装置の<span className="font-bold bg-yellow-100">特徴・費用・適応症例</span>を比較表で分かりやすく解説。
                                        お子様に<span className="text-[#C5A572] font-bold">最適な装置選び</span>をサポートします。
                                    </p>
                                    <a href="/kidsortho/appliances" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">プレオルソ（マウスピース型）</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        マウスピース型の装置で、<span className="font-bold bg-yellow-100">お口の周りの筋肉を正しく使えるようトレーニング</span>します。
                                        <span className="text-[#C5A572] font-bold">就寝時と日中2時間の装着</span>で効果を発揮します。
                                    </p>
                                    <a href="/kidsortho/appliances/functional-mouthpiece" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">拡大床</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        <span className="font-bold bg-yellow-100">取り外しできる装置</span>で、顎を広げて<span className="font-bold bg-yellow-100">歯が生えるスペースを確保</span>します。
                                        <span className="text-[#C5A572] font-bold">永久歯を抜かずに治療できる可能性</span>が高まります。
                                    </p>
                                    <a href="/kidsortho/appliances/expander" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">機能的矯正装置</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        <span className="font-bold bg-yellow-100">顎の成長を誘導する装置</span>で、受け口や出っ歯の改善に効果的。
                                        <span className="text-[#C5A572] font-bold">骨格的な問題にアプローチ</span>します。
                                    </p>
                                    <a href="/kidsortho/appliances/functional" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">チンキャップ</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        <span className="font-bold bg-yellow-100">下顎の成長を抑制する装置</span>で、受け口（反対咬合）の治療に使用。
                                        <span className="text-[#C5A572] font-bold">骨格的な受け口の改善</span>に効果的です。
                                    </p>
                                    <a href="/kidsortho/appliances/chin-cap" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 4. 費用について */}
                        <div className="mb-0">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">費用について</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">1期治療</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        使用する装置により、<span className="font-bold bg-yellow-100">プレオルソ+付加装置 ¥132,000、拡大床 ¥495,000、マウスピース ¥595,000、ワイヤー矯正 ¥660,000</span>です。
                                        検査・相談・調整料は<span className="text-[#C5A572] font-bold">¥0</span>です。
                                    </p>
                                    <a href="/kidsortho/cost" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">2期治療（仕上げの矯正）</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        全ての歯を動かす治療へ移行する場合は、<span className="font-bold bg-yellow-100">ワイヤー矯正 ¥935,000＋調整料、マウスピース矯正 ¥440,000〜¥880,000（調整料込み）</span>です。
                                        装置の種類により費用が異なります。デンタルローンもご利用いただけます。
                                    </p>
                                    <a href="/kidsortho/cost" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>





                {/* 監修者情報 */}
                <div className="container mx-auto px-4 pt-2 pb-16">
                    <AuthorBio />
                </div>
            </main>

            <Footer />
        </div>
    );
}
