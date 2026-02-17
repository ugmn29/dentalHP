"use client";

import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Smile, Sparkles, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileTreatmentOpen, setIsMobileTreatmentOpen] = useState(false);
    const [isMobileConcernsOpen, setIsMobileConcernsOpen] = useState(false);

    const treatmentMenuItems = [
        { name: "こども矯正", cat: "kids", link: "/kidsortho" },
        { name: "０歳からの口育", cat: "kids", link: "/oral-education" },
        { name: "こども歯科・予防", cat: "kids", link: "/kids-preventive" },
        { name: "セラミック治療", cat: "aesthetic", link: "/ceramic" },
        { name: "マウスピース矯正", cat: "ortho", link: "/mouthpiece" },
        { name: "矯正歯科", cat: "ortho", link: "/orthodontics" },
        { name: "インプラント", cat: "general", link: "/implant" },
        { name: "ホワイトニング", cat: "aesthetic", link: "/whitening" },
        { name: "予防歯科", cat: "general", link: "/preventive" },
        { name: "口臭治療", cat: "general", link: "/general/bad-breath" },
        { name: "むしば治療", cat: "general", link: "/cavity" },
        { name: "根管治療", cat: "general", link: "/root-canal" },
        { name: "歯周病治療", cat: "general", link: "/periodontal" },
        { name: "親知らず抜歯", cat: "surgery", link: "/wisdom" },
    ];

    const concernsItems = [
        { name: "歯が折れた", cat: "concerns", link: "/concerns/trauma" },
        { name: "歯ぎしり・食いしばりが気になる", cat: "concerns", link: "/concerns/bruxism" },
        { name: "顎が痛い", cat: "concerns", link: "/concerns/tmj" },
    ];

    const getCategoryDotColor = (cat: string) => {
        switch (cat) {
            case 'kids': return 'bg-[#395b45]';
            case 'aesthetic': return 'bg-[#9B89B3]';
            case 'ortho': return 'bg-[#395b45]';
            case 'concerns': return 'bg-[#E89B4D]';
            default: return 'bg-gray-400';
        }
    }

    return (
        <>
            <header className="bg-white/95 backdrop-blur-sm shadow-sm z-40 border-b border-[#c8ddd0] w-full overflow-x-hidden">
                <div className="container mx-auto px-4 py-2 md:py-3 flex justify-between items-center max-w-full">
                    {/* Logo Area */}
                    <div className="flex items-center gap-2 md:gap-3">
                        <a href="/" className="flex items-center gap-2 md:gap-3">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#395b45] rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-md border-2 border-white cursor-pointer">
                                ☺︎
                            </div>
                            <div>
                                <p className="text-[10px] md:text-xs text-[#395b45] font-bold leading-none mb-0.5">豊洲の歯医者</p>
                                <h1 className="text-sm md:text-lg font-bold text-[#5A4D41] leading-none tracking-wide whitespace-nowrap" style={{ fontFamily: 'Georgia, "Yu Mincho", "Hiragino Mincho ProN", serif' }}>
                                    F歯科・矯正歯科 豊洲プライムスクエア院
                                </h1>
                            </div>
                        </a>
                    </div>

                    {/* Desktop Nav (Hidden in Mobile) */}
                    <nav className="hidden lg:flex items-center gap-5 text-xs xl:text-sm font-bold text-[#8D8070]">
                        <a href="/" className="hover:text-[#395b45] transition relative group py-2">ホーム</a>
                        <a href="#" className="hover:text-[#395b45] transition relative group py-2">初めての方へ</a>
                        <a href="/case-studies" className="hover:text-[#395b45] transition relative group py-2">症例紹介</a>
                        <a href="/blog" className="hover:text-[#395b45] transition relative group py-2">ブログ・お知らせ</a>
                        <a href="/facilities" className="hover:text-[#395b45] transition relative group py-2">院内設備</a>
                        <a href="#" className="hover:text-[#395b45] transition relative group py-2">ドクター紹介</a>
                        <a href="/price" className="hover:text-[#395b45] transition relative group py-2">料金表</a>

                        <div className="h-4 w-[1px] bg-gray-300 mx-1"></div>

                        <a href="/kidsortho" className="text-[#395b45] flex items-center gap-1 px-4 py-2 bg-[#e8f2ed] rounded-full transition hover:bg-[#d4e8dc] border border-[#c8ddd0] shadow-sm transform hover:-translate-y-0.5">
                            <Smile size={16} strokeWidth={2.5} /> こども矯正
                        </a>
                        <a href="/ceramic" className="text-[#9B89B3] flex items-center gap-1 px-4 py-2 bg-[#F3F0F7] rounded-full transition hover:bg-[#EBE5F2] border border-[#E0D6EA] shadow-sm transform hover:-translate-y-0.5">
                            <Sparkles size={16} strokeWidth={2.5} /> 審美歯科
                        </a>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu Button (Fixed) */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="メニュー"
                aria-expanded={isMenuOpen}
                className="lg:hidden fixed top-2 right-2 z-[60] p-2 text-[#5A4D41] bg-white/95 backdrop-blur-sm rounded-full shadow-md border border-[#c8ddd0]"
            >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Mobile Nav Drawer (Moved outside header to avoid clipping) */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white/95 backdrop-blur-md px-4 py-6 space-y-4 shadow-xl fixed top-0 left-0 w-full h-screen z-50 animate-fade-in-down overflow-y-auto pt-20">
                    <a href="/" className="flex items-center justify-between py-3 border-b border-dashed border-gray-200 font-bold text-[#5A4D41]">ホーム <ChevronRight size={16} className="text-gray-300" /></a>

                    <div className="py-2">
                        <p className="text-xs font-bold text-gray-400 mb-2">専門サイト</p>
                        <a href="/kidsortho" className="flex items-center gap-3 py-3 px-4 bg-[#e8f2ed] rounded-xl text-[#395b45] font-bold border border-[#c8ddd0] shadow-sm mb-2">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm"><Smile size={18} /></div>
                            こども矯正サイト
                            <ChevronRight size={18} className="ml-auto" />
                        </a>
                        <a href="/ceramic" className="flex items-center gap-3 py-3 px-4 bg-[#F3F0F7] rounded-xl text-[#9B89B3] font-bold border border-[#E0D6EA] shadow-sm">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm"><Sparkles size={18} /></div>
                            審美歯科サイト
                            <ChevronRight size={18} className="ml-auto" />
                        </a>
                    </div>

                    {/* --- 診療メニュー（開閉式） --- */}
                    <div className="py-2 border-t border-dashed border-gray-200">
                        <button
                            onClick={() => setIsMobileTreatmentOpen(!isMobileTreatmentOpen)}
                            aria-expanded={isMobileTreatmentOpen}
                            className="w-full flex items-center justify-between py-2 font-bold text-[#5A4D41] cursor-pointer select-none"
                        >
                            <div className="flex items-center gap-2">
                                <span className="w-1 h-4 bg-[#395b45] rounded-full"></span>
                                診療メニュー一覧
                            </div>
                            {isMobileTreatmentOpen ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                        </button>

                        <div className={`grid grid-cols-2 gap-2 mt-2 overflow-hidden transition-all duration-300 ${isMobileTreatmentOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            {treatmentMenuItems.map((item, i) => (
                                <a key={i} href={item.link} className="flex items-center gap-2 p-2.5 bg-gray-50 hover:bg-[#e8f2ed] rounded-lg border border-gray-100 text-xs font-bold text-[#5A4D41] transition-colors">
                                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${getCategoryDotColor(item.cat)}`}></span>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* --- お悩み相談（開閉式） --- */}
                    <div className="py-2 border-t border-dashed border-gray-200">
                        <button
                            onClick={() => setIsMobileConcernsOpen(!isMobileConcernsOpen)}
                            aria-expanded={isMobileConcernsOpen}
                            className="w-full flex items-center justify-between py-2 font-bold text-[#5A4D41] cursor-pointer select-none"
                        >
                            <div className="flex items-center gap-2">
                                <span className="w-1 h-4 bg-[#E89B4D] rounded-full"></span>
                                お悩み相談
                            </div>
                            {isMobileConcernsOpen ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                        </button>

                        <div className={`grid grid-cols-1 gap-2 mt-2 overflow-hidden transition-all duration-300 ${isMobileConcernsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            {concernsItems.map((item, i) => (
                                <a key={i} href={item.link} className="flex items-center gap-2 p-2.5 bg-[#FFF4E6] hover:bg-[#FFE9CC] rounded-lg border border-[#FFE0B2] text-xs font-bold text-[#E89B4D] transition-colors">
                                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${getCategoryDotColor(item.cat)}`}></span>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <a href="/case-studies" className="flex items-center justify-between py-3 border-b border-dashed border-gray-200 font-bold text-[#5A4D41]">症例紹介 <ChevronRight size={16} className="text-gray-300" /></a>
                    <a href="#" className="flex items-center justify-between py-3 border-b border-dashed border-gray-200 font-bold text-[#5A4D41]">ドクター紹介 <ChevronRight size={16} className="text-gray-300" /></a>
                    <a href="/price" className="flex items-center justify-between py-3 border-b border-dashed border-gray-200 font-bold text-[#5A4D41]">料金表 <ChevronRight size={16} className="text-gray-300" /></a>
                    <a href="/blog" className="flex items-center justify-between py-3 border-b border-dashed border-gray-200 font-bold text-[#5A4D41]">ブログ・お知らせ <ChevronRight size={16} className="text-gray-300" /></a>
                    <a href="/facilities" className="flex items-center justify-between py-3 border-b border-dashed border-gray-200 font-bold text-[#5A4D41]">院内設備 <ChevronRight size={16} className="text-gray-300" /></a>
                    <a href="#" className="flex items-center justify-between py-3 border-b border-dashed border-gray-200 font-bold text-[#5A4D41]">アクセス・診療時間 <ChevronRight size={16} className="text-gray-300" /></a>

                    <div className="pt-4 space-y-3 pb-20">
                        <button className="w-full bg-[#395b45] text-white py-4 rounded-full font-bold shadow-[0_4px_0_#2d4835] active:shadow-none active:translate-y-[4px] transition-all flex justify-center items-center gap-2 text-lg">
                            <Calendar size={22} /> 24時間 WEB予約
                        </button>
                        <button className="w-full bg-white border-2 border-[#395b45] text-[#395b45] py-4 rounded-full font-bold shadow-sm flex justify-center items-center gap-2 text-lg">
                            <Phone size={22} /> 03-1234-5678
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
