"use client";

import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { WaveBottom } from '../../components/Wave';
import { CreditCard, Banknote, AlertCircle, ChevronRight, Check } from 'lucide-react';

export default function PricePage() {
    const [activeSection, setActiveSection] = useState("");

    const categories = [
        {
            id: "inlay",
            title: "インレー",
            subtitle: "Inlay",
            description: "詰め物（インレー）の料金です。",
            color: "bg-[#F3F0F7]",
            iconColor: "text-[#9B89B3]",
            items: [
                { name: "emax In", taxPrice: "¥66,000" },
                { name: "Gold In", taxPrice: "¥99,000" },
            ]
        },
        {
            id: "crown",
            title: "クラウン",
            subtitle: "Crown",
            description: "被せ物（クラウン）の料金です。",
            color: "bg-[#F3F0F7]",
            iconColor: "text-[#9B89B3]",
            items: [
                { name: "ジルコニアクラウン", taxPrice: "¥143,000" },
                { name: "プレミアムセラミッククラウン", taxPrice: "¥176,000" },
                { name: "ゴールドクラウン", taxPrice: "¥250,000" },
            ]
        },
        {
            id: "whitening",
            title: "ホワイトニング",
            subtitle: "Whitening",
            description: "歯を削らずに白くしたい方に。",
            color: "bg-[#F0F7FF]",
            iconColor: "text-[#70A1FF]",
            items: [
                { name: "デイリープラン（ホームホワイトニング）", taxPrice: "¥36,300", note: "ご自宅で、ご自身のペースで白くしたい方に。" },
                { name: "パーフェクトプラン（デュアルホワイトニング）", taxPrice: "¥66,000", note: "早く白くして、その白さを長持ちさせたい方に。当院一番人気！" },
                { name: "グロウプラン（オフィスホワイトニング 3回）", taxPrice: "¥110,000", note: "結婚式など、イベントに向けて短期間で白くしたい方に。" },
            ]
        },
        {
            id: "implant",
            title: "インプラント",
            subtitle: "Implant",
            description: "失った歯を自然な見た目と噛み心地で取り戻したい方に。",
            color: "bg-[#FFF5EB]",
            iconColor: "text-[#FF9F43]",
            items: [
                { name: "インプラント埋入（1本）", price: "¥250,000", taxPrice: "¥275,000", note: "手術費用を含みます。" },
                { name: "上部構造（セラミック）", price: "¥150,000", taxPrice: "¥165,000", note: "被せ物の費用です。" },
                { name: "上部構造（ジルコニア）", price: "¥120,000", taxPrice: "¥132,000", note: "被せ物の費用です。" },
                { name: "骨造成（GBR）", price: "¥50,000〜", taxPrice: "¥55,000〜", note: "骨が少ない場合の処置です。範囲により異なります。" },
                { name: "ソケットリフト", price: "¥50,000", taxPrice: "¥55,000", note: "上顎の骨を増やす処置です。" },
                { name: "サイナスリフト", price: "¥150,000", taxPrice: "¥165,000", note: "上顎の骨を大幅に増やす処置です。" },
            ]
        },
        {
            id: "kids-ortho",
            title: "子どもの矯正",
            subtitle: "Kids Orthodontics",
            description: "お子様の歯並びや噛み合わせを整えます。",
            color: "bg-[#FFF0F0]",
            iconColor: "text-[#FF6B6B]",
            items: [
                { name: "相談料", taxPrice: "¥0", note: "矯正相談は無料です。" },
                { name: "検査代", taxPrice: "¥0", note: "初回検査は無料です。" },
                { name: "プレオルソ", taxPrice: "¥77,000", note: "取り外し可能なマウスピース型矯正装置です。" },
                { name: "拡大床", taxPrice: "¥440,000", note: "顎を広げて歯が並ぶスペースを作る装置です。" },
                { name: "マウスピース矯正", taxPrice: "¥660,000", note: "透明なマウスピースで目立たず矯正できます。" },
            ]
        },
        {
            id: "adult-ortho",
            title: "大人の矯正",
            subtitle: "Adult Orthodontics",
            description: "成人の方の歯並びや噛み合わせを整えます。",
            color: "bg-[#FFF0F0]",
            iconColor: "text-[#FF6B6B]",
            items: [
                { name: "相談料", taxPrice: "¥0", note: "矯正相談は無料です。" },
                { name: "検査代", taxPrice: "¥22,000", note: "レントゲン・口腔内写真などの検査費用です。" },
                { name: "マウスピース矯正（軽度）", taxPrice: "¥550,000", note: "軽度の歯並びの乱れに対応します。" },
                { name: "マウスピース矯正（中等度）", taxPrice: "¥660,000", note: "中等度の歯並びの乱れに対応します。" },
                { name: "マウスピース矯正（重度）", taxPrice: "¥880,000", note: "重度の歯並びの乱れに対応します。" },
                { name: "ワイヤー矯正", taxPrice: "¥990,000", note: "一般的なブラケット矯正です。" },
            ]
        },
        {
            id: "other",
            title: "その他・自費診療",
            subtitle: "Others",
            description: "予防や特別な処置など。",
            color: "bg-[#FAFAFA]",
            iconColor: "text-[#5A4D41]",
            items: [
                { name: "PMTC（自費クリーニング）", price: "¥8,000", taxPrice: "¥8,800", note: "プロによる徹底的な歯のクリーニングです。" },
                { name: "フッ素塗布", price: "¥1,000", taxPrice: "¥1,100", note: "高濃度のフッ素で歯質を強化します。" },
                { name: "スポーツマウスガード", price: "¥15,000", taxPrice: "¥16,500", note: "スポーツ時の怪我を予防します。" },
                { name: "精密根管治療（前歯）", price: "¥50,000", taxPrice: "¥55,000", note: "マイクロスコープを使用した精密な根の治療です。" },
                { name: "精密根管治療（臼歯）", price: "¥80,000", taxPrice: "¥88,000", note: "マイクロスコープを使用した精密な根の治療です。" },
            ]
        }
    ];

    // Scroll spy effect
    useEffect(() => {
        const handleScroll = () => {
            const sections = categories.map(cat => document.getElementById(cat.id));
            const scrollPosition = window.scrollY + 200; // Offset

            sections.forEach(section => {
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Header height + padding
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFBF7] text-[#5A4D41] selection:bg-[#FF9F43] selection:text-white" style={{ fontFamily: '"Hiragino Mincho ProN", "YuMincho", "Yu Mincho", "游明朝体", "Noto Serif JP", serif', lineHeight: '1.8' }}>
            <Header />

            <main>
                {/* Page Header */}
                <section className="relative bg-[#FFF9F0] py-2 md:py-2 overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#5A4D41] mb-4 tracking-tight">料金表</h1>
                        <p className="text-[#FF9F43] font-bold tracking-widest text-sm uppercase">Price List</p>
                        <div className="w-16 h-1 bg-[#FF9F43] mx-auto rounded-full mt-6"></div>
                    </div>
                    <WaveBottom color="fill-[#FDFBF7]" />
                </section>

                <div className="container mx-auto px-4 py-8 md:py-2 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12 relative">

                        {/* Sidebar Navigation (Sticky on Desktop) */}
                        <aside className="lg:w-64 flex-shrink-0">
                            <div className="sticky top-24 space-y-2 hidden lg:block">
                                <p className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-4 px-4">Menu</p>
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => scrollToSection(cat.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-between group ${activeSection === cat.id
                                            ? 'bg-[#FF9F43] text-white shadow-md'
                                            : 'hover:bg-white hover:shadow-sm text-[#8D8070]'
                                            }`}
                                    >
                                        {cat.title}
                                        {activeSection === cat.id && <ChevronRight size={16} />}
                                    </button>
                                ))}
                                <div className="h-px bg-gray-200 my-4 mx-4"></div>
                                <button
                                    onClick={() => scrollToSection('payment')}
                                    className="w-full text-left px-4 py-3 rounded-lg font-bold transition-all duration-300 hover:bg-white hover:shadow-sm text-[#8D8070]"
                                >
                                    お支払い方法
                                </button>
                                <button
                                    onClick={() => scrollToSection('cancel')}
                                    className="w-full text-left px-4 py-3 rounded-lg font-bold transition-all duration-300 hover:bg-white hover:shadow-sm text-[#8D8070]"
                                >
                                    キャンセルポリシー
                                </button>
                            </div>

                            {/* Mobile Navigation (Horizontal Scroll) */}
                            <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide flex gap-2 sticky top-[60px] z-40 bg-[#FDFBF7]/95 backdrop-blur-sm py-2 border-b border-gray-100">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => scrollToSection(cat.id)}
                                        className={`whitespace-nowrap px-4 py-2 rounded-full font-bold text-sm border transition-colors ${activeSection === cat.id
                                            ? 'bg-[#FF9F43] text-white border-[#FF9F43]'
                                            : 'bg-white text-[#8D8070] border-gray-200'
                                            }`}
                                    >
                                        {cat.title}
                                    </button>
                                ))}
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div className="flex-1 space-y-6">

                            {/* Introduction */}
                            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                                <h2 className="text-xl font-bold mb-4 text-[#5A4D41]">治療費について</h2>
                                <p className="text-[#8D8070] leading-relaxed text-sm md:text-base">
                                    当院の自費診療（保険適用外）の料金一覧です。<br />
                                    患者様一人ひとりのお口の状態やご希望に合わせて、最適な治療プランをご提案させていただきます。<br />
                                    費用についてご不明な点がございましたら、カウンセリング時にご遠慮なくご相談ください。
                                </p>
                            </div>

                            {/* Categories */}
                            {categories.map((cat) => (
                                <section key={cat.id} id={cat.id} className="scroll-mt-28">
                                    <div className="mb-6 text-center md:text-left">
                                        <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41]">
                                            {cat.title}
                                        </h2>
                                    </div>

                                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                                        <div>
                                            {/* Header (Desktop only) */}
                                            <div className="hidden md:flex bg-gray-50 text-left text-xs text-gray-400 font-bold uppercase tracking-wider border-b border-gray-100">
                                                <div className="px-6 py-4 w-[70%]">治療内容</div>
                                                <div className="px-6 py-4 w-[30%] text-right">費用（税込）</div>
                                            </div>

                                            {/* Items */}
                                            <div className="divide-y divide-gray-200">
                                                {cat.items.map((item, i) => (
                                                    <div key={i} className="flex flex-col md:flex-row md:items-center hover:bg-[#FAFAFA] transition-colors group px-6 py-6">
                                                        <div className="w-full md:w-[70%] mb-2 md:mb-0">
                                                            <div className="font-bold text-black text-base">{item.name}</div>
                                                        </div>
                                                        <div className="w-full md:w-[30%] text-left md:text-right">
                                                            <span className="font-bold text-lg text-[#008000]">
                                                                {item.taxPrice}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            ))}

                            {/* Payment Methods */}
                            <section id="payment" className="scroll-mt-28">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-[#FFF5EB] p-2 rounded-full">
                                        <CreditCard className="text-[#FF9F43]" size={24} />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41]">お支払い方法</h2>
                                </div>

                                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div>
                                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                                <span className="w-2 h-2 bg-[#FF9F43] rounded-full"></span>
                                                各種クレジットカード
                                            </h3>
                                            <p className="text-sm text-[#8D8070] mb-4 leading-relaxed">
                                                自費診療のお支払いには、各種クレジットカードがご利用いただけます。<br />
                                                一括払い・分割払い・リボ払いに対応しております。
                                            </p>
                                            <div className="flex gap-3 flex-wrap">
                                                {['VISA', 'Master', 'JCB', 'AMEX', 'Diners'].map(card => (
                                                    <span key={card} className="px-3 py-1 bg-gray-100 rounded text-xs font-bold text-gray-500 border border-gray-200">
                                                        {card}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                                <span className="w-2 h-2 bg-[#FF9F43] rounded-full"></span>
                                                デンタルローン
                                            </h3>
                                            <p className="text-sm text-[#8D8070] mb-4 leading-relaxed">
                                                高額な治療費を分割でお支払いいただけるデンタルローンをご用意しております。<br />
                                                月々のご予算に合わせて、無理のないお支払い計画をご提案いたします。
                                            </p>
                                            <div className="flex items-center gap-2 text-xs text-[#FF9F43] font-bold bg-[#FFF5EB] px-3 py-2 rounded-lg inline-block">
                                                <Check size={14} /> 最大84回払いまで可能
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-gray-100">
                                        <div className="flex items-start gap-3 bg-[#F8F9FF] p-4 rounded-xl border border-[#E0E7FF]">
                                            <AlertCircle className="text-[#70A1FF] flex-shrink-0 mt-0.5" size={20} />
                                            <div>
                                                <h4 className="font-bold text-[#5A4D41] text-sm mb-1">医療費控除について</h4>
                                                <p className="text-xs text-[#8D8070] leading-relaxed">
                                                    1年間（1月1日〜12月31日）に支払った医療費の合計が10万円（所得が200万円未満の方は所得の5%）を超えた場合、確定申告を行うことで税金の一部が還付される制度です。<br />
                                                    矯正治療やインプラント治療なども対象となります。領収書は大切に保管してください。
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Cancellation Policy */}
                            <section id="cancel" className="scroll-mt-28">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-[#FFF0F0] p-2 rounded-full">
                                        <AlertCircle className="text-[#FF6B6B]" size={24} />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41]">キャンセルポリシー</h2>
                                </div>

                                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
                                    <p className="text-sm text-[#8D8070] leading-relaxed mb-6">
                                        当院では、一人ひとりの患者様に十分な時間を確保し、丁寧な治療を行うために「完全予約制」をとっております。<br />
                                        直前のキャンセルや無断キャンセルは、他の患者様のご迷惑となりますので、以下の通りキャンセルポリシーを定めております。
                                        ご理解とご協力をお願いいたします。
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex gap-4 items-start">
                                            <div className="w-6 h-6 rounded-full bg-[#FFF0F0] text-[#FF6B6B] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">1</div>
                                            <div>
                                                <h4 className="font-bold text-[#5A4D41] text-sm mb-1">ご予約の変更・キャンセルについて</h4>
                                                <p className="text-xs text-[#8D8070] leading-relaxed">
                                                    ご予約の変更・キャンセルは、<span className="font-bold text-[#FF6B6B]">前日の診療終了時まで</span>にお電話にてご連絡ください。<br />
                                                    Web予約の場合は、マイページより前日まで変更可能です。
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 items-start">
                                            <div className="w-6 h-6 rounded-full bg-[#FFF0F0] text-[#FF6B6B] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">2</div>
                                            <div>
                                                <h4 className="font-bold text-[#5A4D41] text-sm mb-1">当日のキャンセルについて</h4>
                                                <p className="text-xs text-[#8D8070] leading-relaxed">
                                                    やむを得ない事情（急病、事故、交通機関の遅延など）を除き、当日のキャンセルはご遠慮ください。<br />
                                                    度重なる当日キャンセルがある場合、次回以降のご予約をお断りさせていただくことがございます。
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 items-start">
                                            <div className="w-6 h-6 rounded-full bg-[#FFF0F0] text-[#FF6B6B] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">3</div>
                                            <div>
                                                <h4 className="font-bold text-[#5A4D41] text-sm mb-1">遅刻について</h4>
                                                <p className="text-xs text-[#8D8070] leading-relaxed">
                                                    ご予約時間に遅れる場合は、必ずお電話にてご連絡ください。<br />
                                                    15分以上遅刻された場合、治療内容の変更や、別の日への変更をお願いすることがございます。
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </main >

            <Footer />
        </div >
    );
}
