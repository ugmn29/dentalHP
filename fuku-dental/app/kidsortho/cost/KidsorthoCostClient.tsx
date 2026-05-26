"use client";

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageImage } from '@/components/PageImage';
import { AuthorBio } from '@/components/AuthorBio';
import { getPriceCategory } from '@/data/price-list';
import { Home, ChevronRight } from 'lucide-react';

const kidsOrthoPrices = getPriceCategory('kids-ortho');

export default function KidsOrthoCostPage() {
    return (
        <div className="min-h-screen bg-[#FDFBF7] text-[#5A4D41]" style={{ fontFamily: '"游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", sans-serif' }}>
            <Header />

            <main>
                <div className="bg-[#FDFBF7] border-b">
                    <div className="container mx-auto px-4 py-3">
                        <div className="flex items-center text-sm text-[#8D8070] font-sans">
                            <Link href="/" className="hover:text-[#C5A572] transition-colors flex items-center">
                                <Home className="w-4 h-4 mr-1" />
                                ホーム
                            </Link>
                            <ChevronRight className="w-4 h-4 mx-2" />
                            <Link href="/kidsortho" className="hover:text-[#C5A572] transition-colors">
                                こども矯正
                            </Link>
                            <ChevronRight className="w-4 h-4 mx-2" />
                            <span className="text-[#C5A572] font-bold">費用・料金</span>
                        </div>
                    </div>
                </div>

                <section className="py-6 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#5A4D41]">
                                こども矯正の費用
                            </h1>
                            <PageImage path="/kidsortho/cost" imageId="こども矯正の費用内訳円グラフ" alt="こども矯正の費用" />
                            <div className="w-16 h-0.5 bg-[#C5A572] mx-auto my-8"></div>
                            <p className="text-lg text-[#8D8070] leading-relaxed font-sans">
                                表示価格はすべて税込です。
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-8 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="bg-white rounded-3xl shadow-sm border border-[#C5A572]/20 overflow-hidden">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-[#C5A572] text-white">
                                        <th className="px-5 py-4 text-left font-bold font-serif">項目</th>
                                        <th className="px-5 py-4 text-right font-bold font-serif">料金（税込）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {kidsOrthoPrices?.items.map((item, index) => (
                                        <tr key={item.name} className={index % 2 === 1 ? 'bg-[#FDFBF7]' : 'bg-white'}>
                                            <td className="px-5 py-4 font-bold text-[#5A4D41]">{item.name}</td>
                                            <td className="px-5 py-4 text-right font-bold text-[#008000]">{item.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 rounded-2xl border border-[#C5A572]/20 bg-white p-4 text-sm leading-relaxed text-[#8D8070]">
                            これらの費用はいずれかの装置・治療で使用します。例えば、プレオルソから拡大床へ移行する場合、拡大床治療は差額で対応可能です。
                        </div>
                    </div>
                </section>

                <AuthorBio />
            </main>

            <Footer />
        </div>
    );
}
