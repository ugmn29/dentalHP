"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { WaveBottom } from '../../components/Wave';
import { CreditCard, AlertCircle, ChevronRight, Check } from 'lucide-react';
import { priceCategories } from '../../data/price-list';

const categories = priceCategories;
const paymentBrands = ['VISA', 'Mastercard', 'Amex', 'JCB', 'Diners Club', 'DISCOVER'];
const categoryLinks: Record<string, { label: string; href: string }[]> = {
    'lab-work': [{ label: 'セラミック治療について見る', href: '/ceramic' }],
    'anterior-prosthetics': [{ label: 'セラミックの種類を見る', href: '/ceramic/types' }],
    'posterior-prosthetics': [{ label: 'セラミックの種類を見る', href: '/ceramic/types' }],
    'inlay-onlay': [{ label: 'セラミックの種類を見る', href: '/ceramic/types' }],
    cr: [{ label: '修復治療の説明を見る', href: '/cavity/treatment-methods' }],
    'kids-ortho': [{ label: '小児矯正の装置を見る', href: '/kidsortho/appliances' }],
    'adult-ortho': [{ label: '矯正装置の種類を見る', href: '/orthodontics/types' }],
    implant: [{ label: 'インプラントの説明を見る', href: '/implant/about' }],
    'root-canal': [{ label: '根管治療の種類を見る', href: '/root-canal/types' }],
    surgery: [
        { label: '虫歯治療で歯を残す方法を見る', href: '/cavity/treatment-methods' },
        { label: '歯周病で歯を残す治療を見る', href: '/periodontal/treatment-methods' },
    ],
    whitening: [{ label: 'ホワイトニングの種類を見る', href: '/whitening/types' }],
    cleaning: [{ label: 'クリーニングについて見る', href: '/preventive/cleaning' }],
    'iv-sedation': [{ label: '静脈内鎮静について見る', href: '/implant/iv-sedation' }],
    'metal-denture': [{ label: '入れ歯・ブリッジとの比較を見る', href: '/implant/comparison' }],
};

export default function PricePage() {
    const [activeSection, setActiveSection] = useState("");

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
        <div className="min-h-screen bg-[#FAFAF7] text-[#2C2C2A] selection:bg-[#0a8a85] selection:text-white overflow-x-hidden" style={{ fontFamily: '"Hiragino Mincho ProN", "YuMincho", "Yu Mincho", "游明朝体", "Noto Serif JP", serif', lineHeight: '1.8', wordBreak: 'normal', overflowWrap: 'anywhere' }}>
            <Header />

            <main>
                {/* Page Header */}
                <section className="relative bg-[#F5F2EE] py-2 md:py-2 overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2A] mb-4 tracking-tight">料金表</h1>
                        <p className="text-[#0a8a85] font-bold tracking-widest text-sm uppercase">Price List</p>
                        <div className="w-16 h-1 bg-[#0abab5] mx-auto rounded-full mt-6"></div>
                    </div>
                    <WaveBottom color="fill-[#FAFAF7]" />
                </section>

                <div className="container mx-auto px-4 py-8 md:py-2 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12 relative">

                        {/* Sidebar Navigation (Sticky on Desktop) */}
                        <aside className="lg:w-64 flex-shrink-0">
                            <div className="sticky top-24 space-y-2 hidden lg:block">
                                <p className="font-bold text-[#6B6B68] text-xs uppercase tracking-wider mb-4 px-4">Menu</p>
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => scrollToSection(cat.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-between group ${activeSection === cat.id
                                            ? 'bg-[#0a8a85] text-white shadow-md'
                                            : 'hover:bg-[#F5F2EE] hover:shadow-sm text-[#6B6B68]'
                                            }`}
                                    >
                                        {cat.title}
                                        {activeSection === cat.id && <ChevronRight size={16} />}
                                    </button>
                                ))}
                                <div className="h-px bg-[#E6E3DC] my-4 mx-4"></div>
                                <button
                                    onClick={() => scrollToSection('payment')}
                                    className="w-full text-left px-4 py-3 rounded-lg font-bold transition-all duration-300 hover:bg-[#F5F2EE] hover:shadow-sm text-[#6B6B68]"
                                >
                                    お支払い方法
                                </button>
                                <button
                                    onClick={() => scrollToSection('cancel')}
                                    className="w-full text-left px-4 py-3 rounded-lg font-bold transition-all duration-300 hover:bg-[#F5F2EE] hover:shadow-sm text-[#6B6B68]"
                                >
                                    キャンセルポリシー
                                </button>
                            </div>

                            {/* Mobile Navigation (Horizontal Scroll) */}
                            <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide flex gap-2 sticky top-[60px] z-40 bg-[#FAFAF7]/95 backdrop-blur-sm py-2 border-b border-[#E6E3DC]">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => scrollToSection(cat.id)}
                                        className={`whitespace-nowrap px-4 py-2 rounded-full font-bold text-sm border transition-colors ${activeSection === cat.id
                                            ? 'bg-[#0a8a85] text-white border-[#0a8a85]'
                                            : 'bg-white text-[#6B6B68] border-[#E6E3DC]'
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
                            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-[#E6E3DC]">
                                <h2 className="text-xl font-bold mb-4 text-[#2C2C2A]">治療費について</h2>
                                <p className="text-[#6B6B68] leading-relaxed text-sm md:text-base">
                                    当院の料金一覧です。<span className="font-bold text-[#2C2C2A]">※表示価格はすべて税込です</span><br />
                                    患者様一人ひとりのお口の状態やご希望に合わせて、最適な治療プランをご提案させていただきます。<br />
                                    費用についてご不明な点がございましたら、カウンセリング時にご遠慮なくご相談ください。
                                </p>
                            </div>

                            {/* Categories */}
                            {categories.map((cat) => (
                                <section key={cat.id} id={cat.id} className="scroll-mt-28">
                                    <div className="mb-6 text-center md:text-left">
                                        <h2 className="text-2xl md:text-3xl font-bold text-[#2C2C2A]">
                                            {cat.title}
                                        </h2>
                                    </div>

                                    <div className="bg-white rounded-3xl shadow-sm border border-[#E6E3DC] overflow-hidden">
                                        <div>
                                            {/* Header (Desktop only) */}
                                            <div className="hidden md:flex bg-[#F5F2EE] text-left text-xs text-[#6B6B68] font-bold uppercase tracking-wider border-b border-[#E6E3DC]">
                                                <div className="px-6 py-4 w-[70%]">治療内容</div>
                                                <div className="px-6 py-4 w-[30%] text-right">費用（税込）</div>
                                            </div>

                                            {/* Items */}
                                            <div className="divide-y divide-[#E6E3DC]">
                                                {cat.items.map((item, i) => (
                                                    <div key={i} className="flex flex-col md:flex-row md:items-center hover:bg-[#F5F2EE] transition-colors group px-6 py-6">
                                                        <div className="w-full md:w-[70%] mb-2 md:mb-0">
                                                            <div className="font-bold text-[#2C2C2A] text-base">{item.name}</div>
                                                        </div>
                                                        <div className="w-full md:w-[30%] text-left md:text-right">
                                                            <span className="font-bold text-lg text-[#0a8a85]">
                                                                {item.price}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {cat.id === 'kids-ortho' && (
                                        <div className="mt-4 rounded-2xl border border-[#0abab5]/20 bg-[#0abab5]/10 p-4 text-sm leading-relaxed text-[#6B6B68]">
                                            これらの費用はいずれかの装置・治療で使用します。例えば、プレオルソから拡大床へ移行する場合、拡大床治療は差額で対応可能です。
                                        </div>
                                    )}
                                    {categoryLinks[cat.id] && (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {categoryLinks[cat.id].map((link) => (
                                                <Link
                                                    key={`${cat.id}-${link.href}`}
                                                    href={link.href}
                                                    className="inline-flex items-center gap-1.5 rounded-full border border-[#0a8a85]/25 bg-white px-4 py-2 text-sm font-bold text-[#0a8a85] transition-colors hover:bg-[#0abab5]/10"
                                                >
                                                    {link.label}
                                                    <ChevronRight size={14} />
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </section>
                            ))}

                            {/* Payment Methods */}
                            <section id="payment" className="scroll-mt-28">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-[#0abab5]/10 p-2 rounded-full">
                                        <CreditCard className="text-[#0a8a85]" size={24} />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#2C2C2A]">お支払い方法</h2>
                                </div>

                                <div className="bg-white rounded-3xl shadow-sm border border-[#E6E3DC] p-8 md:p-10">
                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div>
                                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                                <span className="w-2 h-2 bg-[#0abab5] rounded-full"></span>
                                                各種クレジットカード
                                            </h3>
                                            <p className="text-sm text-[#6B6B68] mb-4 leading-relaxed">
                                                保険診療・自費診療ともに、各種クレジットカードがご利用いただけます。<br />
                                                ID・QUICPay・交通系などの使用はできません。
                                            </p>
                                            <div className="flex gap-3 flex-wrap">
                                                {paymentBrands.map(card => (
                                                    <span key={card} className="px-3 py-1 bg-[#F5F2EE] rounded text-xs font-bold text-[#6B6B68] border border-[#E6E3DC]">
                                                        {card}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                                <span className="w-2 h-2 bg-[#0abab5] rounded-full"></span>
                                                お支払いのタイミング
                                            </h3>
                                            <p className="text-sm text-[#6B6B68] mb-4 leading-relaxed">
                                                自費診療のお支払いは、初回に半額、半年後に残りの半額をお支払いいただく形です。<br />
                                                高額支払いの場合は、銀行振り込みでのお支払いも可能です。
                                            </p>
                                            <div className="flex items-center gap-2 text-xs text-[#0a8a85] font-bold bg-[#0abab5]/10 px-3 py-2 rounded-lg inline-block">
                                                <Check size={14} /> 初回に半額・半年後に半額
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-[#E6E3DC]">
                                        <div className="flex items-start gap-3 bg-[#0abab5]/10 p-4 rounded-xl border border-[#0abab5]/20">
                                            <AlertCircle className="text-[#0a8a85] flex-shrink-0 mt-0.5" size={20} />
                                            <div>
                                                <h4 className="font-bold text-[#2C2C2A] text-sm mb-1">医療費控除について</h4>
                                                <p className="text-xs text-[#6B6B68] leading-relaxed">
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
                                    <div className="bg-[#F5F2EE] p-2 rounded-full">
                                        <AlertCircle className="text-[#0a8a85]" size={24} />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#2C2C2A]">キャンセルポリシー</h2>
                                </div>

                                <div className="bg-white rounded-3xl shadow-sm border border-[#E6E3DC] p-8 md:p-10">
                                    <p className="text-sm text-[#6B6B68] leading-relaxed mb-6">
                                        当院では、一人ひとりの患者様に十分な時間を確保し、丁寧な治療を行うために「完全予約制」をとっております。<br />
                                        直前のキャンセルや無断キャンセルは、他の患者様のご迷惑となりますので、以下の通りキャンセルポリシーを定めております。
                                        ご理解とご協力をお願いいたします。
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex gap-4 items-start">
                                            <div className="w-6 h-6 rounded-full bg-[#F5F2EE] text-[#0a8a85] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">1</div>
                                            <div>
                                                <h4 className="font-bold text-[#2C2C2A] text-sm mb-1">ご予約の変更・キャンセルについて</h4>
                                                <p className="text-xs text-[#6B6B68] leading-relaxed">
                                                    ご予約の変更・キャンセルは、<span className="font-bold text-[#0a8a85]">前日の診療終了時まで</span>にお電話にてご連絡ください。<br />
                                                    Web予約の場合は、マイページより前日まで変更可能です。
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 items-start">
                                            <div className="w-6 h-6 rounded-full bg-[#F5F2EE] text-[#0a8a85] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">2</div>
                                            <div>
                                                <h4 className="font-bold text-[#2C2C2A] text-sm mb-1">当日のキャンセルについて</h4>
                                                <p className="text-xs text-[#6B6B68] leading-relaxed">
                                                    やむを得ない事情（急病、事故、交通機関の遅延など）を除き、当日のキャンセルはご遠慮ください。<br />
                                                    度重なる当日キャンセルがある場合、次回以降のご予約をお断りさせていただくことがございます。
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 items-start">
                                            <div className="w-6 h-6 rounded-full bg-[#F5F2EE] text-[#0a8a85] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">3</div>
                                            <div>
                                                <h4 className="font-bold text-[#2C2C2A] text-sm mb-1">遅刻について</h4>
                                                <p className="text-xs text-[#6B6B68] leading-relaxed">
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
