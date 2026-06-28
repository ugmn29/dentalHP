"use client";

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AuthorBio } from '../../components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import { RelatedPagesSection } from '@/components/RelatedPagesSection';
import { ceramicRelatedPages } from '@/data/related-pages';
import { ArrowRight, Calendar, Phone, ChevronRight } from 'lucide-react';
import { FaqSection } from '@/components/FaqSection';
import { WEB_RESERVATION_URL } from '@/lib/reservation';

export default function CeramicPage() {
    const caseStudies = [
        {
            title: "前歯のセラミック",
            label: "Case.01",
            patient: "セラミック修復",
            beforeId: "ceramic-before",
            afterId: "ceramic-after",
            desc: "前歯をセラミックで修復し、自然で美しい見た目を取り戻しました。",
        },
        {
            title: "全顎的な補綴治療",
            label: "Case.02",
            patient: "補綴治療",
            beforeId: "zengaku-before",
            afterId: "zengaku-after",
            desc: "お口全体の見た目と噛み合わせのバランスを整え、自然な口元へ改善しました。",
        },
    ];

    return (
        <div className="min-h-screen bg-white font-serif text-[#4A4A4A] overflow-x-hidden" style={{ wordBreak: 'normal', overflowWrap: 'anywhere' }}>
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative isolate min-h-[680px] overflow-hidden bg-[#FDFBF7] md:min-h-[760px] lg:min-h-[820px]">
                    <picture className="absolute inset-0 -z-10 block h-full w-full">
                        <source media="(max-width: 767px)" srcSet="/images/pages/ceramic/generated/hero-ceramic-05-baked-mobile-v2.webp" />
                        <img
                            src="/images/pages/ceramic/generated/hero-ceramic-05-baked-desktop.webp"
                            alt="精密な技術で理想の白さを目指すセラミック治療"
                            className="h-full w-full object-cover object-top md:object-center"
                            loading="eager"
                            decoding="async"
                            fetchPriority="high"
                        />
                    </picture>
                    <h1 className="sr-only">精密な技術で、理想の白さを。セラミック治療</h1>
                    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#FDFBF7]/95 via-[#FDFBF7]/60 to-transparent md:h-56" />
                    <div className="relative z-10 mx-auto flex min-h-[680px] w-full max-w-7xl items-end justify-center px-5 pb-8 md:min-h-[760px] md:justify-start md:px-8 md:pb-40 lg:min-h-[820px] lg:pb-44">
                        <div className="w-full max-w-xl">
                            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row md:justify-start">
                                <a
                                    href={WEB_RESERVATION_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex min-h-14 w-full max-w-[320px] items-center justify-center gap-3 rounded-full bg-[#0a8a85] px-7 py-4 text-white shadow-xl shadow-[#0a8a85]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#087a76] sm:w-auto"
                                >
                                    <Calendar size={22} className="flex-shrink-0" />
                                    <span className="whitespace-nowrap text-base font-bold">24時間 WEB予約</span>
                                    <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
                                </a>
                                <a
                                    href="tel:03-6204-2876"
                                    className="inline-flex min-h-14 w-full max-w-[320px] items-center justify-center gap-2 rounded-full border border-[#C5A572]/40 bg-white/80 px-6 py-4 text-[#5A4D41] shadow-sm backdrop-blur transition-colors hover:bg-white sm:w-auto"
                                >
                                    <Phone size={20} className="flex-shrink-0 text-[#C5A572]" />
                                    <span className="whitespace-nowrap text-base font-bold">電話で相談</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Concept Message Section */}
                <section className="bg-[#FDFBF7] px-4 py-10 md:py-14">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="mb-3 text-xs font-bold tracking-[0.18em] text-[#C5A572] md:text-sm">
                            CERAMIC TREATMENT
                        </p>
                        <h2 className="font-serif text-2xl font-semibold leading-relaxed text-[#5A4D41] md:text-3xl">
                            精密に仕上げるセラミック治療
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[#8D8070] md:text-base">
                            見た目の美しさと噛み合わせまで考え、自然に長く使える歯を目指します。
                        </p>
                    </div>
                </section>

                {/* Case Studies Section */}
                <section className="pt-8 pb-8 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-8">
                            <p className="text-[#C5A572] tracking-[0.2em] font-bold mb-2">CASE STUDIES</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">症例紹介</h2>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            {caseStudies.map((item) => (
                                <div key={item.label} className="rounded-2xl border border-[#E6E3DC] bg-[#FAFAF7] p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg md:p-6">
                                    <div className="mb-5 border-b border-[#E6E3DC] pb-4 text-center">
                                        <p className="mb-1 text-xs font-bold tracking-[0.22em] text-[#C5A572]">{item.label}</p>
                                        <h3 className="font-serif text-xl font-bold text-[#5A4D41] md:text-2xl">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1 text-xs text-[#8D8070]">{item.patient}</p>
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div>
                                            <span className="mb-2 inline-block rounded bg-[#F0F0EE] px-3 py-1 text-xs font-medium text-[#8D8070]">
                                                Before
                                            </span>
                                            <PageImage
                                                path="/homepage"
                                                imageId={item.beforeId}
                                                alt={`${item.title} - Before`}
                                                className="w-full aspect-[3/2] object-contain bg-[#F7F2EA] rounded-xl"
                                            />
                                        </div>

                                        <div>
                                            <span className="mb-2 inline-block rounded bg-[#C5A572] px-3 py-1 text-xs font-medium text-white">
                                                After
                                            </span>
                                            <PageImage
                                                path="/homepage"
                                                imageId={item.afterId}
                                                alt={`${item.title} - After`}
                                                className="w-full aspect-[3/2] object-contain bg-[#F7F2EA] rounded-xl"
                                            />
                                        </div>
                                    </div>

                                    <p className="mt-5 text-sm leading-relaxed text-[#8D8070]">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <a href="/case-studies#ceramic" className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium">
                                もっと症例を見る <ArrowRight size={16} />
                            </a>
                        </div>

                        {/* Web予約バナー */}
                        <div className="mt-12">
                            <a href={WEB_RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="block">
                                <img
                                    src="/images/web-reservation-banner.webp"
                                    alt="Web予約" loading="lazy" decoding="async" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Features Section - top page layout */}
                <section className="relative overflow-hidden px-5 py-24 md:py-32 bg-[#FDFBF7]">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16 md:mb-20">
                            <p className="text-[11px] tracking-[0.3em] mb-4 text-[#C5A572]">FEATURES</p>
                            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#5A4D41]">
                                当院の特徴
                            </h2>
                        </div>

                        <div className="space-y-20 md:space-y-28">
	                            {[
	                                {
	                                    no: "01",
	                                    label: "Comprehensive Care",
	                                    title: "あらゆる症例に対応",
	                                    highlight: "総合的な審美治療",
	                                    body: "矯正治療・ホワイトニング・虫歯治療などを当院で一貫して行えるため、歯並び・色・形・噛み合わせまで総合的に整え、より自然で美しい仕上がりを目指せます。",
	                                    imageId: "feature4",
	                                    imageAlt: "セラミック治療 矯正治療 ホワイトニング 虫歯治療まで総合対応",
	                                },
	                                {
	                                    no: "02",
	                                    label: "Expert Technician",
	                                    title: "熟練技工士との連携",
	                                    highlight: "精密な仕上がり",
	                                    body: "審美歯科に精通した熟練の歯科技工士と連携し、色・形・透明感まで細かく共有して、精密で美しいセラミックを製作します。歯科医師と技工士が密に連携し、オーダーメイドの高品質な仕上がりを目指します。",
	                                    imageId: "feature5",
	                                    imageAlt: "セラミック治療 熟練技工士との連携",
	                                },
                                {
                                    no: "03",
                                    label: "Digital Impression",
                                    title: "デジタル印象で負担軽減",
                                    highlight: "快適な型取り",
	                                    body: "従来のシリコン材料による歯型取りを大幅に削減し、口腔内スキャナーで快適に型取りを行います。不快な時間を短縮し、高精度なデジタルデータで精密な被せ物を製作できます。",
	                                    imageId: "feature1",
	                                    imageAlt: "セラミック治療 デジタル印象",
	                                },
	                            ].map((feature, index) => (
                                <div
                                    key={feature.no}
                                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-start group`}
                                >
                                    <div className="hidden lg:block lg:w-1/2 relative">
                                        <div className="relative rounded-[32px] overflow-hidden aspect-[16/10] transition-transform duration-700 ease-out group-hover:scale-[1.02] border border-[#E6E3DC]">
                                            <PageImage path="/homepage" imageId={feature.imageId} alt={feature.imageAlt} className="w-full h-full object-cover" />
                                        </div>
                                        <div className={`absolute -bottom-8 ${index % 2 === 0 ? '-left-8' : '-right-8'} w-32 h-32 rounded-full blur-2xl -z-10 bg-[#C5A572]/20`} />
                                    </div>

                                    <div className="w-full lg:w-1/2 flex flex-col gap-6 relative">
                                        <div className="relative">
                                            <span className="font-serif absolute -top-12 -left-2 select-none pointer-events-none text-[7rem] text-[#C5A572]/10 font-semibold leading-none tracking-[-0.05em]">
                                                {feature.no}
                                            </span>
                                            <p className="text-[11px] tracking-[0.25em] mb-3 relative text-[#C5A572]">{feature.label}</p>
                                            <h3 className="font-serif relative text-[#5A4D41]">
                                                <span className="block text-base font-medium mb-2 tracking-widest text-[#8D8070]">{feature.highlight}</span>
                                                <span className="block text-3xl md:text-4xl lg:text-5xl leading-[1.3]">{feature.title}</span>
                                                <span className="block w-16 h-px mt-5 bg-[#C5A572]" />
                                            </h3>
                                        </div>

                                        <div className="w-full lg:hidden">
                                            <div className="rounded-[24px] overflow-hidden aspect-[16/10] border border-[#E6E3DC]">
                                                <PageImage path="/homepage" imageId={feature.imageId} alt={feature.imageAlt} className="w-full h-full object-cover" />
                                            </div>
                                        </div>

                                        <p className="text-sm md:text-base leading-[2.1] text-[#8D8070]">{feature.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Lead & Recommended Section */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif">
                                あなたの笑顔を<br className="md:hidden" />もっと魅力的に
                            </h2>
                            <p className="text-lg leading-loose text-[#8D8070] max-w-3xl mx-auto">
                                セラミック治療は、単に歯を白くするだけではありません。<br />
                                当院では、見た目の美しさ（審美性）はもちろん、<br />
                                <strong>「噛み合わせ」</strong>や<strong>「耐久性」</strong>（機能性）も重視した治療を行っています。
                            </p>
                        </div>

                        {/* セラミック治療とは */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">セラミック治療とは</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    セラミック治療とは、虫歯治療後の詰め物や被せ物、または審美的な目的で、セラミック（陶器）素材を使用する治療法です。
                                    従来の銀歯（金属）と比べて、<span className="font-bold bg-yellow-100">天然歯に近い透明感と色調を再現</span>できるため、見た目が自然で美しい仕上がりになります。
                                </p>
                                <p>
                                    また、<span className="text-[#2E8B57] font-bold">金属を使用しないため金属アレルギーの心配がなく</span>、プラーク（歯垢）が付きにくい表面性状により、<span className="text-[#2E8B57] font-bold">虫歯や歯周病の再発リスクを軽減</span>できます。
                                </p>
                                <p>
                                    当院では、患者様一人ひとりのご希望や口腔内の状態に合わせて、<span className="font-bold bg-yellow-100">最適なセラミック素材をご提案</span>いたします。
                                </p>
                            </div>
                        </div>

                        {/* セラミックの種類 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">セラミックの種類</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-8">
                                {/* e-max */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">e-max（イーマックス）</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        ニケイ酸リチウムガラスを主成分とした、<span className="font-bold bg-yellow-100">透明感に優れたセラミック</span>です。
                                        天然歯に最も近い透明感と色調を再現でき、<span className="text-[#2E8B57] font-bold">特に前歯など審美性が求められる部位に適しています</span>。
                                        強度も十分にあり、単体で使用できます。
                                    </p>
                                </div>
                                {/* ジルコニア */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">ジルコニア</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        人工ダイヤモンドとも呼ばれる、<span className="font-bold bg-yellow-100">非常に強度の高いセラミック</span>です。
                                        <span className="text-[#2E8B57] font-bold">噛む力が強くかかる奥歯やブリッジに適しています</span>。
                                        近年は透明感も向上し、審美性と耐久性を兼ね備えた素材として幅広く使用されています。
                                    </p>
                                </div>
                                {/* ジルコニアセラミック */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">ジルコニアセラミック</h4>
                                    <p className="text-[#5A4D41] leading-loose">
                                        ジルコニアの土台（フレーム）の上に、セラミックを焼き付けた素材です。
                                        <span className="font-bold bg-yellow-100">ジルコニアの強度とセラミックの審美性を兼ね備えて</span>おり、<span className="text-[#2E8B57] font-bold">前歯から奥歯まで幅広く対応</span>できます。
                                        より自然な色調のグラデーションを表現できます。
                                    </p>
                                </div>
                            </div>
                            <div className="text-center mt-6">
                                <a
                                    href="/ceramic/types"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    セラミックの種類について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 料金・費用について */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">料金・費用について</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    セラミック治療の料金は、<span className="font-bold bg-yellow-100">選択する種類（インレー、クラウン、ベニア）や材料（e.max、ジルコニアなど）</span>によって異なります。
                                    当院では、事前に明確な費用をお伝えし、追加料金の心配なく治療を受けていただけます。
                                    また、<span className="text-[#2E8B57] font-bold">各種クレジットカードや銀行振り込み</span>もご利用いただけます。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/ceramic/cost"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    料金について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* セラミックvs銀歯 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">セラミックvs銀歯</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    セラミックと銀歯では、<span className="font-bold bg-yellow-100">見た目、寿命、費用、健康面</span>など、あらゆる点で違いがあります。
                                    初期費用は銀歯の方が安いですが、<span className="text-[#2E8B57] font-bold">セラミックは銀歯の2〜3倍長持ち</span>し、虫歯の再発リスクも低いため、
                                    長期的にはセラミックの方が経済的です。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/ceramic/vs-metal"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    セラミックvs銀歯を詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 寿命・耐久性 */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">寿命・耐久性</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                                <p>
                                    セラミック治療の平均寿命は<span className="font-bold bg-yellow-100">7〜10年</span>です。
                                    ただし、適切なケアとメンテナンスを行えば<span className="text-[#2E8B57] font-bold">15年以上</span>使い続けることも珍しくありません。
                                    特にジルコニアは耐久性が高く、定期検診とナイトガード（マウスピース）の使用で、さらに長持ちさせることができます。
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="/ceramic/longevity"
                                    className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                                >
                                    寿命・耐久性について詳しく見る <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* 治療の流れ */}
                        <div className="mb-16 bg-white rounded-2xl shadow-lg p-6 md:p-10">
                            <div className="text-center mb-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">治療の流れ</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-12">
                                {[
                                    {
                                        num: "01",
                                        title: "カウンセリング・診査診断",
                                        desc: "まずはお悩みやご希望をお聞かせください。レントゲン撮影、口腔内写真撮影、噛み合わせの検査などを行い、現在の状態を詳しく確認します。",
                                        imageId: "step1"
                                    },
                                    {
                                        num: "02",
                                        title: "治療計画のご説明",
                                        desc: "検査結果をもとに、最適な治療法や素材、費用、治療期間について詳しくご説明します。保険診療と自費診療の違いもお伝えし、ご納得いただいてから治療を開始します。",
                                        imageId: "step2"
                                    },
                                    {
                                        num: "03",
                                        title: "歯の形成・型取り",
                                        desc: "虫歯がある場合は除去し、セラミックを装着するために歯の形を整えます。口腔内スキャナーまたは精密な型取りを行い、技工所へデータを送ります。治療中は仮歯を装着します。",
                                        imageId: "step3"
                                    },
                                    {
                                        num: "04",
                                        title: "セラミック装着・調整",
                                        desc: "完成したセラミックを装着します。色調や形態、噛み合わせを細かく確認・調整し、問題がなければ接着して完了です。",
                                        imageId: "step4"
                                    },
                                    {
                                        num: "05",
                                        title: "メンテナンス",
                                        desc: "セラミックを長持ちさせるために、定期的な検診とクリーニングをお勧めします。噛み合わせのチェックや、歯ぎしり対策のマウスピースのご提案も行います。",
                                        imageId: "step5"
                                    }
                                ].map((step, index) => (
                                    <div key={index}>
                                        {/* 番号 + タイトル */}
                                        <div className="flex items-center gap-2 mb-6 border-b border-[#C5A572]/30 pb-3">
                                            <div className="relative">
                                                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#C5A572]/30 rotate-45"></div>
                                                <span className="text-3xl md:text-4xl font-light text-[#C5A572] tracking-wider relative z-10">{step.num}</span>
                                            </div>
                                            <h4 className="text-lg md:text-xl font-bold text-[#5A4D41] font-serif">{step.title}</h4>
                                        </div>
                                        {/* 画像 */}
                                        <div className="mb-6 rounded-2xl overflow-hidden shadow-md">
                                            <PageImage
                                                path="/ceramic"
                                                imageId={step.imageId}
                                                alt={step.title}
                                                className="w-full h-56 md:h-72 object-cover"
                                            />
                                        </div>
                                        {/* 説明文 */}
                                        <p className="text-[#5A4D41] leading-loose text-sm md:text-base">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Price List Section */}
                <section className="py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <p className="text-[#C5A572] tracking-[0.2em] font-bold mb-2">PRICE</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">料金表</h2>
                        </div>

                        <div className="bg-white rounded-3xl shadow-sm border border-[#C5A572]/20 overflow-hidden">
                            <div className="p-8 md:p-12">
                                {/* Inlay */}
                                <div className="mb-12 last:mb-0">
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                                        <span className="w-1.5 h-6 bg-[#C5A572]"></span>
                                        インレー・アンレー
                                    </h3>
                                    <div className="space-y-4">
                                        {[
                                            { name: "e-max", price: "¥77,000" },
                                            { name: "ゴールド", price: "¥132,000" }
                                        ].map((item, index) => (
                                            <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0">
                                                <span className="font-medium text-[#5A4D41]">{item.name}</span>
                                                <span className="font-bold text-[#C5A572]">{item.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Crown */}
                                <div>
                                    <h3 className="text-xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                                        <span className="w-1.5 h-6 bg-[#C5A572]"></span>
                                        補綴
                                    </h3>
                                    <div className="space-y-4">
                                        {[
                                            { name: "ジルコニアセラミック", price: "¥176,000" },
                                            { name: "ジルコニア", price: "¥143,000" },
                                            { name: "ハイブリッド", price: "¥143,000" },
                                            { name: "ゴールド", price: "¥220,000" }
                                        ].map((item, index) => (
                                            <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0">
                                                <span className="font-medium text-[#5A4D41]">{item.name}</span>
                                                <span className="font-bold text-[#C5A572]">{item.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#FAF9F6] p-4 text-center text-xs text-[#8D8070]">
                                ※価格は全て税込表示です。
                            </div>
                        </div>
                    </div>
                </section>

                {/* Risks Section */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100">
                            <h3 className="text-lg font-bold text-[#5A4D41] mb-6 text-center">リスク・副作用について</h3>
                            <ul className="space-y-3 mb-6">
                                {[
                                    "過度な力が加わると、欠けたり割れたりすることがあります。",
                                    "知覚過敏が一時的に出ることがあります。",
                                    "歯ぎしりがある場合は、就寝時にマウスピースの装着が必要になることがあります。"
                                ].map((item, i) => (
                                    <li key={i} className="text-sm text-[#8D8070] flex items-start gap-2">
                                        <span className="text-[#C5A572] mt-1">●</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-gray-400 text-center">
                                ※全ての方に必ず起こるわけではありませんが、医療行為にはリスクが伴います。<br />
                                当院では、事前に十分なご説明を行い、納得していただいてから治療を開始します。
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <FaqSection
                  title="よくあるご質問"
                  items={[
                                {
                                    q: "保険の白い歯（CAD/CAM冠）と何が違いますか？",
                                    a: "保険の白い歯はプラスチックを含んでいるため、経年劣化で変色したり、強度が低く割れやすかったりします。セラミックは変色せず、汚れも付きにくく、美しさと耐久性に優れています。"
                                },
                                {
                                    q: "治療期間はどのくらいですか？",
                                    a: "本数や内容によりますが、型取りから装着まで通常1〜2週間程度です。お急ぎの場合はご相談ください。"
                                },
                                {
                                    q: "保証はありますか？",
                                    a: "当院では、自費診療の詰め物・被せ物に保証期間を設けています（定期検診を受けていただくことが条件となります）。詳しくはスタッフにお尋ねください。"
                                }
                            ]}
                />

                {/* セラミック治療について詳しく知る */}
                <RelatedPagesSection
                    title="セラミック治療について詳しく知る"
                    description="各トピックの詳細ページで、より深く理解していただけます"
                    items={ceramicRelatedPages}
                    currentPath="/ceramic"
                />

                {/* 監修者情報 */}
                <div className="container mx-auto px-4 pt-2 pb-16">
                    <AuthorBio />
                </div>


            </main>

            <Footer />
        </div>
    );
}
