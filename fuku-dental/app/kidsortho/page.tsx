"use client";

import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AuthorBio } from '../../components/AuthorBio';
import { CheckCircle2, ChevronDown, ChevronUp, Calendar, Phone, ArrowRight, ChevronRight, Star, Heart, Shield, Smile, MapPin, Clock, AlertCircle } from 'lucide-react';

export default function KidsOrthoPage() {
    // Doctor Message State
    const [isDoctorMessageExpanded, setIsDoctorMessageExpanded] = useState(false);

    const toggleDoctorMessage = () => {
        setIsDoctorMessageExpanded(!isDoctorMessageExpanded);
    };

    const features = [
        {
            id: "01",
            title: "Home-based Treatment",
            highlight: "家でのみ行う矯正",
            summary: "基本的に<span class='font-bold bg-yellow-100'>取り外し可能な装置</span>を使用し、ご家庭で装着していただく治療法です。<span class='font-bold bg-yellow-100'>学校では外せる</span>ため、<span class='text-[#395b45] font-bold'>お子様の心理的負担が少なく</span>、食事、歯磨きの際も取り外せるので、虫歯のリスクを減らせます。<span class='text-[#395b45] font-bold'>普段通りの学校生活を送りながら治療可能</span>です。",
            details: [],
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
        },
        {
            id: "02",
            title: "Painless Treatment",
            highlight: "痛みの少ない治療法",
            summary: "<span class='font-bold bg-yellow-100'>成長期の顎の成長を利用</span>した優しい力で歯並びを整えるため、<span class='text-[#395b45] font-bold'>痛みはほとんどありません</span>。ワイヤー矯正のような強い力で歯を動かさず、お子様の<span class='font-bold bg-yellow-100'>自然な成長に合わせて無理なく治療</span>するため、<span class='text-[#395b45] font-bold'>お子様が嫌がらずに続けられる治療</span>です。",
            details: [],
            image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=800",
        },
        {
            id: "03",
            title: "MFT (Myofunctional Therapy)",
            highlight: "根本改善のMFT",
            summary: "<span class='font-bold bg-yellow-100'>口呼吸や舌の癖</span>など、歯並びが悪くなる<span class='font-bold bg-yellow-100'>根本原因を改善</span>するトレーニング（MFT）を行います。このトレーニングを行わないと必ず後戻りしてしまいます。<span class='text-[#395b45] font-bold'>悪習癖を直すことで治療後の後戻りを防ぎ、長期的に美しい歯並びを維持</span>できます。",
            details: [],
            image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
        },
        {
            id: "04",
            title: "Kid-friendly Environment",
            highlight: "お子様に優しい環境",
            summary: "診療台には<span class='font-bold bg-yellow-100'>天井テレビを完備</span>し、<span class='text-[#395b45] font-bold'>お子様が楽しく通院できる環境</span>を整えています。<span class='font-bold bg-yellow-100'>土日診療も行っており通いやすく</span>、お忙しい保護者の方にも配慮したスケジュールで、<span class='text-[#395b45] font-bold'>お子様がリラックスして治療を受けられる環境</span>です。",
            details: [],
            image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
        },
        {
            id: "05",
            title: "Clear Pricing",
            highlight: "明確な費用設計",
            summary: "当院では<span class='font-bold bg-yellow-100'>トータルフィー制度</span>を導入しており、<span class='text-[#395b45] font-bold'>最初にご提示した金額から費用が変わらない安心の費用設計</span>です。治療開始前に総額を明確に提示し、<span class='font-bold bg-yellow-100'>治療途中での追加費用は一切なし</span>。<span class='text-[#395b45] font-bold'>予算を立てやすく、安心して治療を続けられます</span>。",
            details: [],
            image: "https://images.unsplash.com/photo-1554224311-beee4ece8fe5?auto=format&fit=crop&q=80&w=800",
        }
    ];

    const steps = [
        {
            num: "01",
            title: "相談・カウンセリング",
            desc: "歯並びのお悩みやご希望を伺い、お口の中を拝見して、治療の必要性や時期についてお話しします。",
            image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
        },
        {
            num: "02",
            title: "精密検査",
            desc: "レントゲン（セファロ）、写真撮影、型取りなどを行い、骨格や歯の状態を詳しく調べます。",
            image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
        },
        {
            num: "03",
            title: "診断・治療計画",
            desc: "検査結果に基づき、最適な治療法、期間、費用について詳しくご説明します。",
            image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
        },
        {
            num: "04",
            title: "治療開始（1期治療）",
            desc: "装置を装着し、定期的に通院して調整を行います。MFT（口腔筋機能療法）も並行して行います。",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
        },
        {
            num: "05",
            title: "経過観察・保定",
            desc: "永久歯が生え揃うまで経過を観察します。必要に応じて2期治療へ移行します。",
            image: "https://images.unsplash.com/photo-1584036561566-b93a945c3cbc?auto=format&fit=crop&q=80&w=800"
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
                    1期治療の目安は<span className="border-b-2 border-[#FFD700]">11〜66万円程度</span>です。詳しくは料金表をご覧ください。<span className="border-b-2 border-[#FFD700]">デンタルローンもご利用いただけます</span>。
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
        <div className="min-h-screen bg-white text-[#5A4D41]" style={{ fontFamily: '"游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", sans-serif' }}>
            <style jsx global>{`
                .brush-underline {
                    background-image: linear-gradient(transparent 60%, rgba(230, 122, 46, 0.4) 60%, rgba(230, 122, 46, 0.6) 80%, transparent 80%);
                    padding: 0 0.2em;
                }
            `}</style>
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-screen md:h-[80vh] md:min-h-[600px] overflow-hidden bg-gradient-to-br from-[#FFF9F0] to-[#FFF3E0]">
                    {/* Mobile Layout */}
                    <div className="md:hidden h-screen relative">
                        {/* Full-screen Image with Overlay Text */}
                        <div className="absolute inset-0">
                            <div className="relative w-full h-[60vh]">
                                <img
                                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800&v=2"
                                    alt="お子様の笑顔"
                                    className="w-full h-full object-cover"
                                    style={{ objectPosition: 'center top' }}
                                />
                            </div>
                            <div className="w-full h-[40vh] bg-gradient-to-br from-[#FFF9F0] to-[#FFF3E0]"></div>

                            {/* Text Overlay on Image */}
                            <div className="absolute top-0 right-0 h-full flex items-start justify-end pr-4 gap-2 pt-2">
                                {/* Strip 1: こども矯正 */}
                                <div className="bg-white py-6 px-3 rounded shadow-lg flex items-center justify-center" style={{ width: 'auto', height: 'auto' }}>
                                    <h1 className="text-4xl font-bold text-[#C5A572]" style={{ fontFamily: '"Hiragino Maru Gothic ProN", "M PLUS Rounded 1c", sans-serif', writingMode: 'horizontal-tb', display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1.3', gap: '0.1rem' }}>
                                        <span>こ</span>
                                        <span>ど</span>
                                        <span>も</span>
                                        <span>矯</span>
                                        <span>正</span>
                                    </h1>
                                </div>

                                {/* Strip 2: お顔を育てる */}
                                <div className="bg-white py-6 px-2 rounded shadow-lg flex items-center justify-center" style={{ width: 'auto', height: 'auto' }}>
                                    <h1 className="text-3xl font-bold text-[#C5A572]" style={{ fontFamily: '"Hiragino Maru Gothic ProN", "M PLUS Rounded 1c", sans-serif', writingMode: 'horizontal-tb', display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1.3', gap: '0.1rem' }}>
                                        <span>お</span>
                                        <span>顔</span>
                                        <span>を</span>
                                        <span>育</span>
                                        <span>て</span>
                                        <span>る</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10 h-full">

                        {/* Desktop Layout */}
                        <div className="hidden md:grid grid-cols-2 gap-8 h-full items-center">
                            {/* Left Side - Image */}
                            <div className="relative h-full min-h-[500px] flex items-center justify-center">
                                <div className="relative w-full h-[70%] rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1200"
                                        alt="お子様の笑顔"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>

                            {/* Right Side - Vertical Text Strips */}
                            <div className="flex items-center justify-start gap-8 h-full">
                                <div className="flex flex-row-reverse items-center gap-8">
                                    {/* Strip 1: お子様の */}
                                    <div className="bg-white py-2 px-10 rounded-md shadow-lg transform -rotate-2 relative" style={{ writingMode: 'vertical-rl' }}>
                                        <h1 className="text-6xl font-bold text-[#C5A572] tracking-wider leading-relaxed" style={{ fontFamily: '"Hiragino Maru Gothic ProN", "M PLUS Rounded 1c", sans-serif' }}>
                                            お子様の
                                        </h1>
                                    </div>

                                    {/* Strip 2: 「顔のゆがみ」 */}
                                    <div className="bg-white py-2 px-10 rounded-md shadow-lg transform rotate-1 relative" style={{ writingMode: 'vertical-rl' }}>
                                        <h1 className="text-6xl font-bold text-[#C5A572] tracking-wider leading-relaxed" style={{ fontFamily: '"Hiragino Maru Gothic ProN", "M PLUS Rounded 1c", sans-serif' }}>
                                            「顔のゆがみ」
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block absolute bottom-48 left-1/2 transform -translate-x-1/2 z-20">
                        <a href="#contact" className="inline-flex items-center gap-2 bg-[#C5A572] hover:bg-[#B8935A] text-white px-10 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-xl">
                            無料相談を予約する <ArrowRight size={24} />
                        </a>
                    </div>

                    {/* CTA Section - Overlapping Hero */}
                    <div className="md:hidden absolute bottom-0 left-0 w-full z-20 transform -translate-y-4">
                        <div className="container mx-auto px-4 max-w-2xl">
                            <div className="bg-[#FFF9F0] rounded-3xl shadow-2xl p-8 md:p-12">
                                <div className="text-center">
                                    {/* Top Badge */}
                                    <div className="inline-block mb-6">
                                        <div className="bg-white px-8 py-4 rounded-full shadow-md">
                                            <p className="font-bold text-base md:text-lg text-[#C5A572]">
                                                安心の実績と経験
                                            </p>
                                        </div>
                                    </div>

                                    {/* Main Message */}
                                    <h2 className="text-xl md:text-2xl font-bold text-[#5A4D41] mb-6 leading-relaxed px-4">
                                        まずは現状の相談だけでも<br />
                                        してみませんか？
                                    </h2>

                                    {/* Notice Bubble */}
                                    <div className="bg-white px-4 py-1.5 rounded-full shadow-md mb-1 inline-block max-w-md relative z-10">
                                        <p className="text-[#5A4D41] text-[10px] md:text-xs">
                                            予約が混み合っておりますので、<br className="sm:hidden" />
                                            <span className="text-[#C5A572] font-bold">お早めのご予約をおすすめします。</span>
                                        </p>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="mb-4 -mt-2">
                                        <a href="#contact" className="inline-flex items-center justify-center gap-3 bg-[#C5A572] hover:bg-[#B8935A] text-white px-14 md:px-16 py-5 md:py-6 rounded-full font-bold text-xl md:text-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 w-full max-w-xl mx-auto border-4 border-white" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 4px white' }}>
                                            初診を予約する
                                            <span className="text-2xl">▸</span>
                                        </a>
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
                        </div>

                        {/* Check items */}
                        <div className="space-y-6 mb-12">
                            {/* Item 1 */}
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-8 h-8">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#C5A572]">
                                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                                        <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                                        <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                                        <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                                        src="/images/kidsortho/反対.png"
                                        alt="反対咬合"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-[#C5A572] font-bold text-sm md:text-base text-center">反対咬合</p>
                            </div>

                            {/* ガタガタ */}
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border-4 border-[#C5A572] flex items-center justify-center bg-white overflow-hidden">
                                    <img
                                        src="/images/kidsortho/乳歯段差.png"
                                        alt="ガタガタ"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-[#C5A572] font-bold text-sm md:text-base text-center">ガタガタ</p>
                            </div>

                            {/* 開咬 */}
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border-4 border-[#C5A572] flex items-center justify-center bg-white overflow-hidden">
                                    <img
                                        src="/images/kidsortho/開咬.png"
                                        alt="開咬"
                                        className="w-full h-full object-cover"
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
                                          opacity="0.7"/>
                                </svg>
                            </div>
                        </div>

                        {/* Clinic Name with Brackets */}
                        <div className="flex items-center justify-center mb-8 gap-2 md:gap-4">
                            <div className="text-3xl md:text-5xl text-[#C5A572] font-bold">【</div>
                            <h3 className="text-base md:text-2xl font-bold text-[#C5A572] whitespace-nowrap">
                                F歯科・矯正歯科 <span className="text-sm md:text-2xl">豊洲プライムスクエア院</span>
                            </h3>
                            <div className="text-3xl md:text-5xl text-[#C5A572] font-bold">】</div>
                        </div>

                        {/* Images Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-10">
                            {/* Clinic Photo */}
                            <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                                <img
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                                    alt="クリニック内観"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Map */}
                            <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0989654321!2d139.7941!3d35.6563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889f7b7c3a9a9%3A0x1234567890abcdef!2z6LGK5rSyIOODl-ODqeOCpOODoOOCueOCr-OCqOOCog!5e0!3m2!1sja!2sjp!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="豊洲プライムスクエア地図"
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
                    </div>
                </section>

                {/* --- Concerns Section --- */}
                <section className="py-2 md:py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        {/* Title Banner */}
                        <div className="mb-10">
                            <div className="relative bg-[#C5A572] py-6 px-4 md:px-8 shadow-lg overflow-hidden" style={{ borderRadius: '60px 60px 50px 50px' }}>
                                <h2 className="text-xl md:text-3xl font-bold text-white text-center relative z-10 whitespace-nowrap">
                                    こんな不安はありませんか？
                                </h2>
                                {/* Wave decoration - bottom */}
                                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1400 60" preserveAspectRatio="none" style={{ height: '30px' }}>
                                    <path d="M0,10 Q100,35 200,15 T400,20 Q500,40 600,15 T800,25 Q900,45 1000,20 T1200,15 Q1300,35 1400,20 L1400,60 L0,60 Z"
                                          fill="#B8935A"
                                          opacity="0.7"/>
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
                                    来院回数は多くて月に1回30分未満、費用は、¥110,000〜となります。
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
                                    <ellipse cx="20" cy="15" rx="12" ry="15" fill="#C5A572" opacity="0.6"/>
                                    <line x1="20" y1="15" x2="20" y2="45" stroke="#C5A572" strokeWidth="3"/>
                                    <circle cx="20" cy="15" r="8" fill="#C5A572"/>
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

                {/* --- CTA Section --- */}
                <section className="py-2 md:py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-2xl">
                        <div className="bg-[#FFF9F0] rounded-3xl shadow-2xl p-8 md:p-12">
                            <div className="text-center">
                                {/* Top Badge */}
                                <div className="inline-block mb-6">
                                    <div className="bg-white px-8 py-4 rounded-full shadow-md">
                                        <p className="font-bold text-base md:text-lg text-[#C5A572]">
                                            安心の実績と経験
                                        </p>
                                    </div>
                                </div>

                                {/* Main Message */}
                                <h2 className="text-xl md:text-2xl font-bold text-[#5A4D41] mb-6 leading-relaxed px-4">
                                    まずは現状の相談だけでも<br />
                                    してみませんか？
                                </h2>

                                {/* Notice Bubble */}
                                <div className="bg-white px-4 py-1.5 rounded-full shadow-md mb-1 inline-block max-w-md relative z-10">
                                    <p className="text-[#5A4D41] text-[10px] md:text-xs">
                                        予約が混み合っておりますので、<br className="sm:hidden" />
                                        <span className="text-[#C5A572] font-bold">お早めのご予約をおすすめします。</span>
                                    </p>
                                </div>

                                {/* CTA Button */}
                                <div className="mb-4 -mt-2">
                                    <a href="#contact" className="inline-flex items-center justify-center gap-3 bg-[#C5A572] hover:bg-[#B8935A] text-white px-14 md:px-16 py-5 md:py-6 rounded-full font-bold text-xl md:text-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 w-full max-w-xl mx-auto border-4 border-white" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 4px white' }}>
                                        初診を予約する
                                        <span className="text-2xl">▸</span>
                                    </a>
                                </div>

                                {/* Footer Note */}
                                <p className="text-[#C5A572] text-xs md:text-sm text-right px-4">
                                    *2025年2月 当院調べ
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Features Section --- */}
                <section className="pt-6 pb-8 bg-[#FAFAFA] relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-12">
                            <div className="inline-block relative">
                                <span className="text-[#C5A572] font-bold tracking-[0.3em] text-xs md:text-sm block mb-3 uppercase opacity-70" style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}>FEATURES</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif relative">
                                    当院の<span className="text-[#C5A572]">特徴</span>
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent"></div>
                                </h2>
                            </div>
                        </div>

                        <div className="space-y-12 max-w-5xl mx-auto">
                            {features.map((feature, index) => (
                                <div key={feature.id} className="flex flex-col group">
                                    {/* Title Area */}
                                    <div className="relative">
                                        {/* Large Gradient Number */}
                                        <span className="text-8xl font-serif text-[#C5A572]/15 absolute -top-16 -left-8 z-0 select-none font-bold" style={{ letterSpacing: '-0.05em' }}>
                                            {feature.id}
                                        </span>

                                        {/* Title */}
                                        <div className="flex items-start justify-between gap-4">
                                            <h3 className="text-3xl md:text-4xl font-bold text-[#5A4D41] leading-tight tracking-wide font-serif inline-block relative flex-1">
                                                <span dangerouslySetInnerHTML={{ __html: feature.highlight.replace(/(の|を|に|が|は|と|へ|から|より|で|や|でのみ|な)/g, '<span class="text-[0.75em]">$1</span>') }} />
                                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5A572] via-[#C5A572] to-transparent"></div>
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Image Area */}
                                    <div className="w-full mb-8 relative">
                                        <div className="relative rounded-[30px] overflow-hidden shadow-lg border-2 border-white">
                                            <img
                                                src={feature.image}
                                                alt={feature.highlight}
                                                className="w-full h-auto aspect-[16/9] object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#C5A572]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        </div>
                                    </div>

                                    {/* Text Area */}
                                    <div>
                                        <p className="text-base md:text-lg text-[#5A4D41] leading-loose font-sans" dangerouslySetInnerHTML={{ __html: feature.summary }}>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Doctor Introduction Section --- */}
                <section className="py-6 md:py-8 bg-[#FFF9F0]">
                    <div className="container mx-auto px-4 max-w-3xl">
                        {/* Title Banner */}
                        <div className="mb-12">
                            {/* Main banner */}
                            <div className="relative bg-[#C5A572] py-8 px-8 shadow-lg overflow-hidden" style={{ borderRadius: '60px 60px 50px 50px' }}>
                                <h2 className="text-3xl md:text-4xl font-bold text-white text-center relative z-10">
                                    医師紹介
                                </h2>
                                {/* Wave decoration - bottom */}
                                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1400 60" preserveAspectRatio="none" style={{ height: '30px' }}>
                                    <path d="M0,10 Q100,35 200,15 T400,20 Q500,40 600,15 T800,25 Q900,45 1000,20 T1200,15 Q1300,35 1400,20 L1400,60 L0,60 Z"
                                          fill="#B8935A"
                                          opacity="0.7"/>
                                </svg>
                            </div>
                        </div>

                        {/* Doctor Card */}
                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                            {/* Doctor Photo */}
                            <div className="flex justify-center mb-8">
                                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-lg border-4 border-[#C5A572]">
                                    <img
                                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"
                                        alt="医師"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Doctor Info */}
                            <div className="text-center mb-8">
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <span className="bg-[#8B6F47] text-white px-4 py-2 rounded font-bold text-sm md:text-base">
                                        院長
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#8B6F47]">
                                        福永　真大
                                    </h3>
                                </div>

                                <div className="space-y-2 text-[#5A4D41]">
                                    <p className="text-base md:text-lg">大阪大学卒業</p>
                                    <p className="text-base md:text-lg">大手医療法人勤務・研修医指導医を歴任</p>
                                    <p className="text-base md:text-lg">都内歯科医院 副院長</p>
                                </div>
                            </div>

                            {/* Dotted separator */}
                            <div className="border-t-2 border-dotted border-[#C5A572] mb-8"></div>

                            {/* Doctor Message */}
                            <div className="space-y-4 text-[#5A4D41] mb-8">
                                <p className="text-base md:text-lg leading-relaxed">
                                    患者様一人ひとりに寄り添い、お口の健康を通じて笑顔あふれる毎日をサポートいたします。
                                </p>
                                <p className="text-base md:text-lg leading-relaxed">
                                    お子様から大人の方まで、安心して通っていただける医院づくりを心がけています。
                                </p>

                                {isDoctorMessageExpanded && (
                                    <>
                                        <p className="text-base md:text-lg leading-relaxed">
                                            特にお子様の矯正治療においては、成長期を活かした最適なタイミングでの治療が重要です。お子様の将来のために、今できることを一緒に考えていきましょう。
                                        </p>
                                        <p className="text-base md:text-lg leading-relaxed">
                                            当院では、一人ひとりのお子様の成長段階に合わせた、最適な治療プランをご提案いたします。まずはお気軽にご相談ください。
                                        </p>
                                        <p className="text-base md:text-lg leading-relaxed">
                                            日本小児歯科学会会員、日本審美歯科学会会員として、常に最新の知識と技術を取り入れながら、お子様の笑顔あふれる未来のために全力でサポートいたします。
                                        </p>
                                    </>
                                )}
                            </div>

                            {/* Read More Button */}
                            <div className="text-center">
                                <button
                                    onClick={toggleDoctorMessage}
                                    className="bg-[#8B6F47] hover:bg-[#6D5E52] text-white px-8 py-3 rounded-full font-bold text-base md:text-lg shadow-lg transition-all"
                                >
                                    {isDoctorMessageExpanded ? '閉じる' : '続きを読む'}
                                </button>
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
                                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                                            <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <p className="text-base md:text-lg text-[#5A4D41] flex-1 leading-7">
                                        <span className="font-bold" style={{ textDecoration: 'underline', textDecorationColor: '#FFE44D', textDecorationThickness: '4px', textUnderlineOffset: '3px' }}>こども矯正の実績と専門知識のある医師が診る</span>こと
                                    </p>
                                </div>

                                {/* Item 2 */}
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-7 h-7">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#C5A572]">
                                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                                            <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <p className="text-base md:text-lg text-[#5A4D41] flex-1 leading-7">
                                        <span className="font-bold" style={{ textDecoration: 'underline', textDecorationColor: '#FFE44D', textDecorationThickness: '4px', textUnderlineOffset: '3px' }}>お子様の成長段階に応じた治療時期の提案</span>があること
                                    </p>
                                </div>

                                {/* Item 3 */}
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-7 h-7">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#C5A572]">
                                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                                            <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <p className="text-base md:text-lg text-[#5A4D41] flex-1 leading-7">
                                        <span className="font-bold" style={{ textDecoration: 'underline', textDecorationColor: '#FFE44D', textDecorationThickness: '4px', textUnderlineOffset: '3px' }}>歯を並べるだけではなく、歯並びが悪くなった原因にもアプローチする</span>こと
                                    </p>
                                </div>

                                {/* Item 4 */}
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-7 h-7">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#C5A572]">
                                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                                            <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <p className="text-base md:text-lg text-[#5A4D41] flex-1 leading-7">
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
                                          opacity="0.7"/>
                                </svg>
                            </div>
                        </div>

                        {/* Content Card */}
                        <div className="bg-[#FFF9F0] rounded-3xl shadow-sm p-8 md:p-12">
                            {/* Image */}
                            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=1200"
                                    alt="当院の診療風景"
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

                {/* --- CTA Section 2 --- */}
                <section className="py-2 md:py-2 bg-[#FFF9F0]">
                    <div className="container mx-auto px-4 max-w-2xl">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-[#C5A572]">
                            <div className="text-center">
                                {/* Top Badge */}
                                <div className="inline-block mb-6">
                                    <div className="bg-[#FFE44D] px-8 py-4 rounded-full shadow-md">
                                        <p className="font-bold text-base md:text-lg text-[#C5A572]">
                                            安心の実績と経験
                                        </p>
                                    </div>
                                </div>

                                {/* Main Message */}
                                <h2 className="text-xl md:text-2xl font-bold text-[#5A4D41] mb-6 leading-relaxed px-4">
                                    まずは現状の相談だけでも<br />
                                    してみませんか？
                                </h2>

                                {/* Notice Bubble */}
                                <div className="bg-[#FFF9F0] px-4 py-1.5 rounded-full shadow-md mb-1 inline-block max-w-md relative z-10 border border-[#C5A572]">
                                    <p className="text-[#5A4D41] text-[10px] md:text-xs">
                                        予約が混み合っておりますので、<br className="sm:hidden" />
                                        <span className="text-[#C5A572] font-bold">お早めのご予約をおすすめします。</span>
                                    </p>
                                </div>

                                {/* CTA Button */}
                                <div className="mb-4 -mt-2">
                                    <a href="#contact" className="inline-flex items-center justify-center gap-3 bg-[#C5A572] hover:bg-[#B8935A] text-white px-14 md:px-16 py-5 md:py-6 rounded-full font-bold text-xl md:text-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 w-full max-w-xl mx-auto border-4 border-white" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 4px white' }}>
                                        初診を予約する
                                        <span className="text-2xl">▸</span>
                                    </a>
                                </div>

                                {/* Footer Note */}
                                <p className="text-[#C5A572] text-xs md:text-sm text-right px-4">
                                    *2025年2月 当院調べ
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Flow Section --- */}
                <section className="py-8 md:py-2 bg-[#FFF9F0]">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
                            <div className="text-center mb-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">治療の流れ</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-12">
                                {steps.map((step, index) => (
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
                                            <img
                                                src={step.image}
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

                {/* --- Price Section --- */}
                <section className="py-8 md:py-12 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-4xl">
                        {/* Title */}
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif mb-4">
                                料金について
                            </h2>
                            <p className="text-[#8D8070]">※表示価格はすべて税込です</p>
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
                                <div className="flex flex-col md:flex-row md:items-center hover:bg-[#FAFAFA] transition-colors group px-6 py-6">
                                    <div className="w-full md:w-[70%] mb-2 md:mb-0">
                                        <div className="font-bold text-black text-base">相談料</div>
                                        <div className="text-sm text-gray-500 mt-1">矯正相談は無料です。</div>
                                    </div>
                                    <div className="w-full md:w-[30%] text-left md:text-right">
                                        <span className="font-bold text-lg text-[#008000]">¥0</span>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-center hover:bg-[#FAFAFA] transition-colors group px-6 py-6">
                                    <div className="w-full md:w-[70%] mb-2 md:mb-0">
                                        <div className="font-bold text-black text-base">検査代</div>
                                        <div className="text-sm text-gray-500 mt-1">初回検査は無料です。</div>
                                    </div>
                                    <div className="w-full md:w-[30%] text-left md:text-right">
                                        <span className="font-bold text-lg text-[#008000]">¥0</span>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-center hover:bg-[#FAFAFA] transition-colors group px-6 py-6">
                                    <div className="w-full md:w-[70%] mb-2 md:mb-0">
                                        <div className="font-bold text-black text-base">結果説明</div>
                                        <div className="text-sm text-gray-500 mt-1">検査結果の詳しい説明とカウンセリングです。</div>
                                    </div>
                                    <div className="w-full md:w-[30%] text-left md:text-right">
                                        <span className="font-bold text-lg text-[#008000]">¥11,000</span>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-center hover:bg-[#FAFAFA] transition-colors group px-6 py-6">
                                    <div className="w-full md:w-[70%] mb-2 md:mb-0">
                                        <div className="font-bold text-black text-base">プレオルソ、EFライン etc(他の付加的装置の全てを含む)</div>
                                        <div className="text-sm text-gray-500 mt-1">取り外し可能なマウスピース型矯正装置です。</div>
                                    </div>
                                    <div className="w-full md:w-[30%] text-left md:text-right">
                                        <span className="font-bold text-lg text-[#008000]">¥132,000</span>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-center hover:bg-[#FAFAFA] transition-colors group px-6 py-6">
                                    <div className="w-full md:w-[70%] mb-2 md:mb-0">
                                        <div className="font-bold text-black text-base">拡大床</div>
                                        <div className="text-sm text-gray-500 mt-1">顎を広げて歯が並ぶスペースを作る装置です。</div>
                                    </div>
                                    <div className="w-full md:w-[30%] text-left md:text-right">
                                        <span className="font-bold text-lg text-[#008000]">¥495,000</span>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-center hover:bg-[#FAFAFA] transition-colors group px-6 py-6">
                                    <div className="w-full md:w-[70%] mb-2 md:mb-0">
                                        <div className="font-bold text-black text-base">マウスピース矯正</div>
                                        <div className="text-sm text-gray-500 mt-1">透明なマウスピースで目立たず矯正できます。</div>
                                    </div>
                                    <div className="w-full md:w-[30%] text-left md:text-right">
                                        <span className="font-bold text-lg text-[#008000]">¥660,000</span>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-center hover:bg-[#FAFAFA] transition-colors group px-6 py-6">
                                    <div className="w-full md:w-[70%] mb-2 md:mb-0">
                                        <div className="font-bold text-black text-base">ワイヤー矯正</div>
                                        <div className="text-sm text-gray-500 mt-1">従来型のブラケット矯正です。</div>
                                    </div>
                                    <div className="w-full md:w-[30%] text-left md:text-right">
                                        <span className="font-bold text-lg text-[#008000]">¥660,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 小児矯正をもっと深く知る Section --- */}
                <section className="py-2 md:py-2 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-5xl">
                        {/* セクションタイトル */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif mb-4">小児矯正をもっと深く知る</h2>
                            <p className="text-[#8D8070]">お子様の歯並び治療について、各テーマごとに詳しく解説しています</p>
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
                                        <span className="font-bold bg-yellow-100">11〜66万円</span>が目安です。
                                        検査・診断料、装置代、調整費、保定装置まで<span className="text-[#C5A572] font-bold">すべて含まれたトータルフィー制</span>を採用しています。
                                    </p>
                                    <a href="/kidsortho/cost" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif bg-[#FAF8F5] border-l-4 border-[#C5A572] py-3 px-4 mb-4">2期治療（仕上げの矯正）</h4>
                                    <p className="text-[#5A4D41] leading-loose mb-3">
                                        <span className="font-bold bg-yellow-100">30〜80万円</span>が目安です。
                                        1期治療を受けた方は<span className="text-[#C5A572] font-bold">30〜60万円</span>で、未受診の方より費用を抑えられます。デンタルローンもご利用いただけます。
                                    </p>
                                    <a href="/kidsortho/cost" className="text-[#C5A572] font-bold hover:underline inline-flex items-center gap-1 text-sm">
                                        詳しくはこちら →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- CTA Section 3 --- */}
                <section className="py-2 md:py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-2xl">
                        <div className="bg-[#FFF9F0] rounded-3xl shadow-2xl p-8 md:p-12">
                            <div className="text-center">
                                {/* Top Badge */}
                                <div className="inline-block mb-6">
                                    <div className="bg-white px-8 py-4 rounded-full shadow-md">
                                        <p className="font-bold text-base md:text-lg text-[#C5A572]">
                                            安心の実績と経験
                                        </p>
                                    </div>
                                </div>

                                {/* Main Message */}
                                <h2 className="text-xl md:text-2xl font-bold text-[#5A4D41] mb-6 leading-relaxed px-4">
                                    まずは現状の相談だけでも<br />
                                    してみませんか？
                                </h2>

                                {/* Notice Bubble */}
                                <div className="bg-white px-4 py-1.5 rounded-full shadow-md mb-1 inline-block max-w-md relative z-10">
                                    <p className="text-[#5A4D41] text-[10px] md:text-xs">
                                        予約が混み合っておりますので、<br className="sm:hidden" />
                                        <span className="text-[#C5A572] font-bold">お早めのご予約をおすすめします。</span>
                                    </p>
                                </div>

                                {/* CTA Button */}
                                <div className="mb-0 -mt-2">
                                    <a href="#contact" className="inline-flex items-center justify-center gap-3 bg-[#C5A572] hover:bg-[#B8935A] text-white px-14 md:px-16 py-5 md:py-6 rounded-full font-bold text-xl md:text-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 w-full max-w-xl mx-auto border-4 border-white" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 4px white' }}>
                                        初診を予約する
                                        <span className="text-2xl">▸</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Related Pages Section (Internal Links) --- */}
                <section className="py-8 md:py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-10">
                            <p className="text-[#C5A572] tracking-[0.2em] font-bold mb-2 uppercase">MORE INFORMATION</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif mb-4">
                                関連ページ
                            </h2>
                            <p className="text-[#8D8070]">
                                各トピックの詳細ページで、より深く理解していただけます
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* 費用について */}
                            <a
                                href="/kidsortho/cost"
                                className="group bg-gradient-to-br from-[#FFF9F0] to-white rounded-3xl p-8 shadow-lg border-2 border-[#C5A572]/10 hover:border-[#C5A572] hover:shadow-xl transition-all transform hover:-translate-y-1"
                            >
                                <h3 className="text-xl font-bold text-[#5A4D41] mb-3 font-serif group-hover:text-[#C5A572] transition-colors">
                                    費用について
                                </h3>
                                <p className="text-[#8D8070] text-sm leading-relaxed mb-4">
                                    トータルフィー制度、医療費控除、デンタルローンなど、気になる費用を詳しく解説
                                </p>
                                <div className="flex items-center gap-2 text-[#C5A572] font-bold text-sm group-hover:gap-3 transition-all">
                                    <span>詳しく見る</span>
                                    <ArrowRight size={16} />
                                </div>
                            </a>

                            {/* いつから始めるべきか */}
                            <a
                                href="/kidsortho/timing"
                                className="group bg-gradient-to-br from-[#FFF9F0] to-white rounded-3xl p-8 shadow-lg border-2 border-[#C5A572]/10 hover:border-[#C5A572] hover:shadow-xl transition-all transform hover:-translate-y-1"
                            >
                                <h3 className="text-xl font-bold text-[#5A4D41] mb-3 font-serif group-hover:text-[#C5A572] transition-colors">
                                    いつから始めるべきか
                                </h3>
                                <p className="text-[#8D8070] text-sm leading-relaxed mb-4">
                                    最適な開始時期、年齢別ガイド、「様子を見る」ことのリスクを解説
                                </p>
                                <div className="flex items-center gap-2 text-[#C5A572] font-bold text-sm group-hover:gap-3 transition-all">
                                    <span>詳しく見る</span>
                                    <ArrowRight size={16} />
                                </div>
                            </a>

                            {/* 治療期間 */}
                            <a
                                href="/kidsortho/duration"
                                className="group bg-gradient-to-br from-[#FFF9F0] to-white rounded-3xl p-8 shadow-lg border-2 border-[#C5A572]/10 hover:border-[#C5A572] hover:shadow-xl transition-all transform hover:-translate-y-1"
                            >
                                <h3 className="text-xl font-bold text-[#5A4D41] mb-3 font-serif group-hover:text-[#C5A572] transition-colors">
                                    治療期間
                                </h3>
                                <p className="text-[#8D8070] text-sm leading-relaxed mb-4">
                                    1期治療・2期治療の期間、治療期間に影響する要因を詳しく解説
                                </p>
                                <div className="flex items-center gap-2 text-[#C5A572] font-bold text-sm group-hover:gap-3 transition-all">
                                    <span>詳しく見る</span>
                                    <ArrowRight size={16} />
                                </div>
                            </a>

                            {/* 不正咬合の種類 */}
                            <a
                                href="/kidsortho/types"
                                className="group bg-gradient-to-br from-[#FFF9F0] to-white rounded-3xl p-8 shadow-lg border-2 border-[#C5A572]/10 hover:border-[#C5A572] hover:shadow-xl transition-all transform hover:-translate-y-1"
                            >
                                <h3 className="text-xl font-bold text-[#5A4D41] mb-3 font-serif group-hover:text-[#C5A572] transition-colors">
                                    不正咬合の種類
                                </h3>
                                <p className="text-[#8D8070] text-sm leading-relaxed mb-4">
                                    出っ歯、受け口、ガタガタなど、7つの不正咬合タイプと最適な治療時期
                                </p>
                                <div className="flex items-center gap-2 text-[#C5A572] font-bold text-sm group-hover:gap-3 transition-all">
                                    <span>詳しく見る</span>
                                    <ArrowRight size={16} />
                                </div>
                            </a>

                            {/* 装置一覧 */}
                            <a
                                href="/kidsortho/appliances"
                                className="group bg-gradient-to-br from-[#FFF9F0] to-white rounded-3xl p-8 shadow-lg border-2 border-[#C5A572]/10 hover:border-[#C5A572] hover:shadow-xl transition-all transform hover:-translate-y-1"
                            >
                                <h3 className="text-xl font-bold text-[#5A4D41] mb-3 font-serif group-hover:text-[#C5A572] transition-colors">
                                    装置一覧
                                </h3>
                                <p className="text-[#8D8070] text-sm leading-relaxed mb-4">
                                    拡大床、機能的矯正装置、MFTトレーナーなど、使用する装置を詳しく紹介
                                </p>
                                <div className="flex items-center gap-2 text-[#C5A572] font-bold text-sm group-hover:gap-3 transition-all">
                                    <span>詳しく見る</span>
                                    <ArrowRight size={16} />
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                {/* --- FAQ Section --- */}
                <section className="py-2 md:py-2 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41]">
                                よくあるご質問
                            </h2>
                        </div>
                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white rounded-2xl border border-gray-100 p-6">
                                    <div className="mb-4">
                                        <div className="flex items-start gap-4">
                                            <span className="text-[#C5A572] text-xl font-bold">Q.</span>
                                            <p className="font-bold text-[#5A4D41] leading-relaxed pt-1">{faq.q}</p>
                                        </div>
                                    </div>
                                    <div className="border-t border-dashed border-gray-100 pt-4 bg-gray-50/50 -mx-6 -mb-6 px-6 pb-6 rounded-b-2xl">
                                        <div className="flex items-start gap-4">
                                            <span className="text-[#C5A572] text-xl font-bold">A.</span>
                                            <p className="text-[#8D8070] leading-relaxed text-sm pt-1">{faq.a}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- CTA Section --- */}
                <section id="contact" className="py-2 md:py-2 bg-[#FFF9F0]">
                    <div className="container mx-auto px-4 max-w-2xl">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-[#C5A572]">
                            <div className="text-center">
                                {/* Top Badge */}
                                <div className="inline-block mb-6">
                                    <div className="bg-[#FFE44D] px-8 py-4 rounded-full shadow-md">
                                        <p className="font-bold text-base md:text-lg text-[#C5A572]">
                                            安心の実績と経験
                                        </p>
                                    </div>
                                </div>

                                {/* Main Message */}
                                <h2 className="text-xl md:text-2xl font-bold text-[#5A4D41] mb-6 leading-relaxed px-4">
                                    まずは現状の相談だけでも<br />
                                    してみませんか？
                                </h2>

                                {/* Notice Bubble */}
                                <div className="bg-[#FFF9F0] px-4 py-1.5 rounded-full shadow-md mb-1 inline-block max-w-md relative z-10 border border-[#C5A572]">
                                    <p className="text-[#5A4D41] text-[10px] md:text-xs">
                                        予約が混み合っておりますので、<br className="sm:hidden" />
                                        <span className="text-[#C5A572] font-bold">お早めのご予約をおすすめします。</span>
                                    </p>
                                </div>

                                {/* CTA Button */}
                                <div className="mb-0 -mt-2">
                                    <a href="#contact" className="inline-flex items-center justify-center gap-3 bg-[#C5A572] hover:bg-[#B8935A] text-white px-14 md:px-16 py-5 md:py-6 rounded-full font-bold text-xl md:text-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 w-full max-w-xl mx-auto border-4 border-white" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 4px white' }}>
                                        初診を予約する
                                        <span className="text-2xl">▸</span>
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
