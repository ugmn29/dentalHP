"use client";

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { ClinicHoursTable } from './ClinicHoursTable';
import { WEB_RESERVATION_URL } from '@/lib/reservation';

// 新デザイン用カラートークン（HomeClientと同期）
const ACCENT_DARK = '#0a8a85';   // Button/CTA bg (white text safe)
const PAGE_BG = '#FAFAF7';
const SURFACE = '#FFFFFF';
const TEXT = '#2C2C2A';
const TEXT_MUTED = '#6B6B68';
const LINE = '#E6E3DC';

const treatmentLinks = [
    { name: "こども矯正", link: "/kidsortho" },
    { name: "0歳からのこども歯科・予防", link: "/oral-education" },
    { name: "セラミック治療", link: "/ceramic" },
    { name: "マウスピース矯正", link: "/mouthpiece" },
    { name: "ワイヤー矯正", link: "/orthodontics" },
    { name: "インプラント", link: "/implant" },
    { name: "ホワイトニング", link: "/whitening" },
    { name: "予防歯科", link: "/preventive" },
    { name: "口臭治療", link: "/general/bad-breath" },
    { name: "むしば治療", link: "/cavity" },
    { name: "精密根管治療", link: "/root-canal" },
];

const aboutLinks = [
    { name: "症例紹介", link: "/case-studies" },
    { name: "ドクター紹介", link: "/doctor" },
    { name: "院内設備", link: "/facilities" },
    { name: "アクセス・診療時間", link: "/access" },
    { name: "料金表", link: "/price" },
    { name: "ブログ・お知らせ", link: "/blog" },
    { name: "採用情報", link: "/recruit" },
];

export const Footer = () => {
    return (
        <>
            <footer className="font-sans" style={{ background: PAGE_BG, color: TEXT, borderTop: `1px solid ${LINE}` }}>
                {/* ===== Section 1: Access & Schedule ===== */}
                <div className="max-w-6xl mx-auto px-5 pt-20 md:pt-24 pb-16">
                    <div className="text-center mb-12">
                        <p className="text-[11px] tracking-[0.3em] mb-4" style={{ color: ACCENT_DARK }}>ACCESS</p>
                        <h2 className="font-serif text-3xl md:text-4xl font-light" style={{ color: TEXT }}>アクセス・診療時間</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Map + NAP */}
                        <div>
                            <div className="aspect-video rounded-2xl overflow-hidden" style={{ border: `1px solid ${LINE}` }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.010249888901!2d139.798077!3d35.6521191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018895bd480af87%3A0x46a0d1583ceadde6!2zRuODh-ODs-OCv-ODq-OCquODleOCo-OCuSDosYrmtLLjg5fjg6njgqTjg6Djgrnjgq_jgqjjgqLpmaI!5e0!3m2!1sja!2sjp!4v1778288265882!5m2!1sja!2sjp"
                                    width="100%" height="100%" style={{ border: 0 }}
                                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                            <div className="mt-6">
                                <p className="font-serif text-lg mb-2" style={{ color: TEXT }}>Fデンタルオフィス 豊洲プライムスクエア院</p>
                                <p className="text-sm leading-[2]" style={{ color: TEXT_MUTED }}>
                                    〒135-0061 東京都江東区豊洲5-6-36<br />
                                    豊洲プライムスクエア1階<br />
                                    <span style={{ color: ACCENT_DARK }}>●</span> 豊洲駅 6a出口 徒歩2分 / 提携駐車場あり
                                </p>
                                <a href="tel:03-6204-2876" className="inline-flex items-center gap-2 mt-4 text-sm font-medium" style={{ color: ACCENT_DARK }}>
                                    <Phone size={16} />
                                    03-6204-2876
                                </a>
                            </div>
                        </div>

                        {/* Schedule */}
                        <ClinicHoursTable />
                    </div>
                </div>

                {/* ===== Section 2: Site Links ===== */}
                <div style={{ borderTop: `1px solid ${LINE}` }}>
                    <div className="max-w-6xl mx-auto px-5 py-14 md:py-16">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
                            <div>
                                <p className="text-[11px] tracking-[0.3em] mb-5" style={{ color: ACCENT_DARK }}>TREATMENT</p>
                                <ul className="space-y-3">
                                    {treatmentLinks.map((item) => (
                                        <li key={item.link}>
                                            <Link href={item.link} className="text-sm transition" style={{ color: TEXT_MUTED }} onMouseOver={e => (e.currentTarget.style.color = ACCENT_DARK)} onMouseOut={e => (e.currentTarget.style.color = TEXT_MUTED)}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <p className="text-[11px] tracking-[0.3em] mb-5" style={{ color: TEXT_MUTED }}>ABOUT</p>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/" className="text-sm transition" style={{ color: TEXT_MUTED }} onMouseOver={e => (e.currentTarget.style.color = ACCENT_DARK)} onMouseOut={e => (e.currentTarget.style.color = TEXT_MUTED)}>ホーム</Link>
                                    </li>
                                    {aboutLinks.map((item) => (
                                        <li key={item.link}>
                                            <Link href={item.link} className="text-sm transition" style={{ color: TEXT_MUTED }} onMouseOver={e => (e.currentTarget.style.color = ACCENT_DARK)} onMouseOut={e => (e.currentTarget.style.color = TEXT_MUTED)}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <p className="text-[11px] tracking-[0.3em] mb-5" style={{ color: TEXT_MUTED }}>FOLLOW</p>
                                <div className="flex gap-3 mb-6">
                                    <a href="https://www.instagram.com/f.dentaloffice.toyosu" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                                        className="w-10 h-10 rounded-full flex items-center justify-center transition" style={{ border: `1px solid ${LINE}`, color: TEXT }}
                                        onMouseOver={e => { e.currentTarget.style.background = ACCENT_DARK; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = ACCENT_DARK; }}
                                        onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = TEXT; e.currentTarget.style.borderColor = LINE; }}>
                                        <FaInstagram size={16} />
                                    </a>
                                    <a href="https://www.youtube.com/@tadanodentist" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                                        className="w-10 h-10 rounded-full flex items-center justify-center transition" style={{ border: `1px solid ${LINE}`, color: TEXT }}
                                        onMouseOver={e => { e.currentTarget.style.background = ACCENT_DARK; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = ACCENT_DARK; }}
                                        onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = TEXT; e.currentTarget.style.borderColor = LINE; }}>
                                        <FaYoutube size={16} />
                                    </a>
                                    <a href="https://www.tiktok.com/@subtadanodentist" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                                        className="w-10 h-10 rounded-full flex items-center justify-center transition" style={{ border: `1px solid ${LINE}`, color: TEXT }}
                                        onMouseOver={e => { e.currentTarget.style.background = ACCENT_DARK; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = ACCENT_DARK; }}
                                        onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = TEXT; e.currentTarget.style.borderColor = LINE; }}>
                                        <FaTiktok size={14} />
                                    </a>
                                </div>
                                <p className="text-xs leading-[2]" style={{ color: TEXT_MUTED }}>
                                    最新情報・症例・院内の様子は<br />SNSで発信しています。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===== Bottom: Copyright ===== */}
                <div style={{ borderTop: `1px solid ${LINE}` }}>
                    <div className="max-w-6xl mx-auto px-5 py-6 text-center text-xs" style={{ color: TEXT_MUTED }}>
                        © Fuku Dental Clinic All Rights Reserved.
                    </div>
                </div>
            </footer>

            {/* ===== Sticky Bottom Tabs (Mobile) ===== */}
            <div className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden h-[64px] max-w-full overflow-hidden" style={{ borderTop: `1px solid ${LINE}` }}>
                <a href="tel:03-6204-2876" className="min-w-0 flex-1 flex flex-col items-center justify-center gap-1 transition" style={{ background: SURFACE, color: TEXT }}>
                    <Phone size={18} />
                    <span className="text-[10px] font-medium tracking-wider">電話予約</span>
                </a>
                <a
                    href={WEB_RESERVATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0 flex-[1.5] flex items-center justify-center px-2 transition"
                    style={{ background: ACCENT_DARK, color: '#fff' }}
                >
                    <span className="whitespace-nowrap text-[15px] font-semibold tracking-[0.08em] sm:text-base">24時間 WEB予約</span>
                </a>
            </div>
        </>
    );
};
