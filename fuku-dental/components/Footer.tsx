"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { WaveTop } from './Wave';
import { GiTooth } from 'react-icons/gi';
import { FaBaby, FaChild, FaShieldAlt, FaStar, FaSmile, FaSun } from 'react-icons/fa';
import { MdBuild, MdLocalHospital } from 'react-icons/md';
import { BiWind } from 'react-icons/bi';

export const Footer = () => {
    const [isTreatmentMenuOpen, setIsTreatmentMenuOpen] = useState(true);
    const [isConcernsMenuOpen, setIsConcernsMenuOpen] = useState(false);

    const treatmentMenuItems = [
        { name: "こども矯正", link: "/kidsortho", icon: FaChild },
        { name: "０歳からの口育", link: "/kids/oral-education", icon: FaBaby },
        { name: "こども歯科・予防", link: "/kids/preventive", icon: FaShieldAlt },
        { name: "セラミック治療", link: "/ceramic", icon: FaStar },
        { name: "マウスピース矯正", link: "/mouthpiece", icon: FaSmile },
        { name: "矯正歯科", link: "/orthodontics", icon: MdBuild },
        { name: "インプラント", link: "/implant", icon: GiTooth },
        { name: "ホワイトニング", link: "/whitening", icon: FaSun },
        { name: "予防歯科", link: "/preventive", icon: FaShieldAlt },
        { name: "口臭治療", link: "/general/bad-breath", icon: BiWind },
        { name: "むしば治療", link: "/cavity", icon: MdLocalHospital },
        { name: "根管治療", link: "/root-canal", icon: GiTooth },
        { name: "歯周病治療", link: "/periodontal", icon: MdLocalHospital },
        { name: "親知らず抜歯", link: "/wisdom", icon: GiTooth },
    ];

    const concernsItems = [
        { name: "歯の外傷・急患", link: "/concerns/trauma" },
        { name: "歯ぎしり・食いしばり", link: "/concerns/bruxism" },
        { name: "顎関節症", link: "/concerns/tmj" },
        { name: "口腔外科・トラブル", link: "/concerns/oral-surgery" },
    ];

    return (
        <>
            {/* --- Footer --- */}
            <footer className="bg-[#F5F1ED] text-[#5A4D41] pt-8 pb-20 md:pb-8 relative font-sans" style={{ fontFamily: 'sans-serif' }}>
                <div className="container mx-auto px-4">
                    {/* Access & Hours Section */}
                    <div className="mb-16">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-2">アクセス・診療時間</h2>
                            <p className="text-sm text-[#8D8070]">Access & Office Hours</p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
                            {/* Map Section */}
                            <div className="w-full lg:w-1/2 space-y-4">
                                <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg relative border-2 border-[#E0D5C7]">
                                    <iframe
                                        src="https://www.google.com/maps?q=東京都江東区豊洲5-6-36&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                                <div className="px-2">
                                    <p className="font-bold text-[#5A4D41] text-lg mb-1" style={{ fontFamily: 'Georgia, "Yu Mincho", "Hiragino Mincho ProN", serif' }}>F歯科・矯正歯科 豊洲プライムスクエア院</p>
                                    <p className="text-sm text-[#8D8070]">
                                        〒135-0061 東京都江東区豊洲5-6-36 豊洲プライムスクエア1階<br />
                                        豊洲駅 徒歩2分 / 提携駐車場あり
                                    </p>
                                </div>
                            </div>

                            {/* Hours Table */}
                            <div className="w-full lg:w-1/2 font-sans">
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse text-base md:text-lg font-sans" style={{ fontWeight: '300' }}>
                                        <thead>
                                            <tr className="bg-white">
                                                <th className="py-4 px-3 text-left font-medium border-b border-gray-200 text-[#2d4835] w-[30%]">診療時間</th>
                                                <th className="py-4 px-2 text-center font-medium border-b border-gray-200 text-[#2d4835] w-[10%]">月</th>
                                                <th className="py-4 px-2 text-center font-medium border-b border-gray-200 text-[#2d4835] w-[10%]">火</th>
                                                <th className="py-4 px-2 text-center font-medium border-b border-gray-200 text-[#2d4835] w-[10%]">水</th>
                                                <th className="py-4 px-2 text-center font-medium border-b border-gray-200 text-[#2d4835] w-[10%]">木</th>
                                                <th className="py-4 px-2 text-center font-medium border-b border-gray-200 text-[#2d4835] w-[10%]">金</th>
                                                <th className="py-4 px-2 text-center font-medium border-b border-gray-200 text-[#2d4835] w-[10%]">土</th>
                                                <th className="py-4 px-2 pr-3 text-center font-medium border-b border-gray-200 text-[#2d4835] w-[10%]">日</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            <tr className="border-b border-gray-200">
                                                <td className="py-5 px-3 text-left font-normal text-[#2d4835] text-base md:text-lg whitespace-nowrap" style={{ fontStyle: 'normal', fontFamily: 'sans-serif', fontWeight: '400' }}>10:00-13:00</td>
                                                <td className="py-5 px-2 text-center text-[#2d4835] text-lg font-light">●</td>
                                                <td className="py-5 px-2 text-center text-gray-300 text-lg font-light">−</td>
                                                <td className="py-5 px-2 text-center text-[#2d4835] text-lg font-light">●</td>
                                                <td className="py-5 px-2 text-center text-[#2d4835] text-lg font-light">●</td>
                                                <td className="py-5 px-2 text-center text-[#2d4835] text-lg font-light">●</td>
                                                <td className="py-5 px-2 text-center text-[#2d4835] font-medium">★</td>
                                                <td className="py-5 px-2 pr-3 text-center text-[#2d4835] font-medium">★</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="py-5 px-3 text-left font-normal text-[#2d4835] text-base md:text-lg whitespace-nowrap" style={{ fontStyle: 'normal', fontFamily: 'sans-serif', fontWeight: '400' }}>14:00-19:00</td>
                                                <td className="py-5 px-2 text-center text-[#2d4835] text-lg font-light">●</td>
                                                <td className="py-5 px-2 text-center text-gray-300 text-lg font-light">−</td>
                                                <td className="py-5 px-2 text-center text-[#2d4835] text-lg font-light">●</td>
                                                <td className="py-5 px-2 text-center text-[#2d4835] text-lg font-light">●</td>
                                                <td className="py-5 px-2 text-center text-[#2d4835] text-lg font-light">●</td>
                                                <td className="py-5 px-2 text-center text-[#2d4835] font-medium">★</td>
                                                <td className="py-5 px-2 pr-3 text-center text-[#2d4835] font-medium">★</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 space-y-1 text-sm md:text-base text-[#2d4835] text-center font-sans font-light">
                                    <p style={{ fontStyle: 'normal', fontFamily: 'sans-serif', fontWeight: '300' }}><span className="text-[#2d4835] font-medium text-xl">★</span> 土日：9:00-12:00 / 13:00-17:00</p>
                                    <p className="font-medium text-[#2d4835] mt-3" style={{ fontFamily: 'sans-serif', fontWeight: '500' }}>休診日：火曜日</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links Section */}
                    <div className="border-t border-[#E0D5C7] pt-4 pb-8">
                        <div className="max-w-md mx-auto">
                            {/* SNS Buttons */}
                            <div className="flex gap-4 justify-center mb-8">
                                <a href="#" className="w-12 h-12 bg-[#E0D5C7] hover:bg-[#395b45] hover:text-white text-[#5A4D41] rounded-full flex items-center justify-center transition shadow-md">
                                    <span className="font-bold text-sm">IG</span>
                                </a>
                                <a href="#" className="w-12 h-12 bg-[#E0D5C7] hover:bg-[#395b45] hover:text-white text-[#5A4D41] rounded-full flex items-center justify-center transition shadow-md">
                                    <span className="font-bold text-sm">LN</span>
                                </a>
                            </div>

                            {/* Quick Links */}
                            <p className="font-bold mb-6 text-[#5A4D41] text-left md:text-center">Quick Links</p>
                            <ul className="space-y-3 text-sm text-[#8D8070] font-medium text-left md:text-center">
                                <li><a href="/" className="hover:text-[#395b45] transition block">ホーム</a></li>
                                <li className="pt-2">
                                    <p className="text-xs text-[#B0A69A] mb-2">専門サイト</p>
                                    <ul className="space-y-2 pl-3">
                                        <li><a href="/kidsortho" className="hover:text-[#395b45] transition block">こども矯正サイト</a></li>
                                        <li><a href="/ceramic" className="hover:text-[#395b45] transition block">審美歯科サイト</a></li>
                                    </ul>
                                </li>
                                <li className="pt-2">
                                    <div
                                        onClick={() => setIsTreatmentMenuOpen(!isTreatmentMenuOpen)}
                                        className="flex items-center justify-between cursor-pointer hover:text-[#395b45] transition"
                                    >
                                        <span>診療メニュー一覧</span>
                                        {isTreatmentMenuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                    </div>
                                    <div className={`grid grid-cols-2 gap-x-3 gap-y-2 mt-2 pl-3 overflow-hidden transition-all duration-300 ${isTreatmentMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        {treatmentMenuItems.map((item, i) => {
                                            const Icon = item.icon;
                                            return (
                                                <a key={i} href={item.link} className="text-xs hover:text-[#395b45] transition flex items-center gap-1.5">
                                                    <Icon className="text-[#395b45] flex-shrink-0" size={12} />
                                                    <span>{item.name}</span>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </li>
                                <li className="pt-2">
                                    <div
                                        onClick={() => setIsConcernsMenuOpen(!isConcernsMenuOpen)}
                                        className="flex items-center justify-between cursor-pointer hover:text-[#E67A2E] transition"
                                    >
                                        <span>お悩み相談</span>
                                        {isConcernsMenuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                    </div>
                                    <div className={`grid grid-cols-2 gap-x-3 gap-y-2 mt-2 pl-3 overflow-hidden transition-all duration-300 ${isConcernsMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        {concernsItems.map((item, i) => (
                                            <a key={i} href={item.link} className="text-xs hover:text-[#E67A2E] transition block">
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </li>
                                <li><a href="/case-studies" className="hover:text-[#395b45] transition block">症例紹介</a></li>
                                <li><a href="#" className="hover:text-[#395b45] transition block">ドクター紹介</a></li>
                                <li><a href="/price" className="hover:text-[#395b45] transition block">料金表</a></li>
                                <li><a href="/blog" className="hover:text-[#395b45] transition block">ブログ・お知らせ</a></li>
                                <li><a href="/facilities" className="hover:text-[#395b45] transition block">院内設備</a></li>
                                <li><a href="#" className="hover:text-[#395b45] transition block">アクセス・診療時間</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-[#E0D5C7] pt-8 text-center text-xs text-[#B0A69A]">
                        © Fuku Dental Clinic All Rights Reserved.
                    </div>
                </div>
            </footer>

            {/* --- Sticky Bottom Tabs (Mobile & Tablet) --- */}
            <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden h-[70px] shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
                {/* Phone Tab */}
                <a href="tel:03-1234-5678" className="flex-1 bg-white/95 backdrop-blur-sm text-[#8D8070] flex flex-col items-center justify-center gap-1 border-t border-gray-200 hover:bg-gray-50 transition group">
                    <Phone size={20} className="group-hover:scale-110 transition text-[#5A4D41]" />
                    <span className="text-[10px] font-bold">電話予約</span>
                </a>
                {/* Web Reserve Tab */}
                <a href="#" className="flex-[1.5] bg-[#A03F2B] text-white flex items-center justify-center hover:opacity-95 transition group">
                    <span className="text-lg font-bold">24時間WEB予約</span>
                </a>
            </div>
        </>
    );
};
