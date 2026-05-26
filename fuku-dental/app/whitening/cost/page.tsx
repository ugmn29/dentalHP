import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import { getPriceCategory } from '@/data/price-list';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ホワイトニングの料金・費用｜当院の料金表｜Fデンタルオフィス 豊洲プライムスクエア院',
  description: '豊洲の歯医者 Fデンタルオフィス 豊洲プライムスクエア院のホワイトニング料金表です。オフィスホワイトニング、ホームホワイトニング、オフィスホワイトニング＋ホームホワイトニング、ウォーキングブリーチの費用を掲載しています。',
  keywords: 'ホワイトニング,料金,費用,値段,価格,オフィスホワイトニング,ホームホワイトニング,豊洲,歯医者',
  alternates: {
    canonical: 'https://fshika.com/whitening/cost',
  },
  openGraph: {
    title: 'ホワイトニングの料金・費用｜当院の料金表｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: 'ホワイトニング料金表。オフィスホワイトニング、ホームホワイトニング、オフィスホワイトニング＋ホームホワイトニング、ウォーキングブリーチの費用をご確認いただけます。',
    type: 'website',
  },
};

const whiteningPrices = getPriceCategory('whitening');

export default function WhiteningCostPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF7]">
        <section className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#C5A572]">ホーム</Link>
              <span>/</span>
              <Link href="/whitening" className="hover:text-[#C5A572]">ホワイトニング</Link>
              <span>/</span>
              <span className="text-[#C5A572]">料金・費用</span>
            </div>
          </div>
        </section>

        <section className="py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                ホワイトニングの料金・費用
              </h1>
              <PageImage path="/whitening/cost" imageId="ホワイトニング各プランの料金比較表" alt="ホワイトニングの料金・費用" />
              <div className="w-24 h-1 bg-[#C5A572] mx-auto my-8"></div>
              <p className="text-lg text-[#8D8070] leading-relaxed">
                表示価格はすべて税込です。
              </p>
            </div>
          </div>
        </section>

        <section className="pt-8 pb-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-2xl shadow-sm border border-[#C5A572]/10 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#C5A572] text-white">
                    <th className="p-4 text-left font-bold font-serif">項目</th>
                    <th className="p-4 text-right font-bold font-serif">料金（税込）</th>
                  </tr>
                </thead>
                <tbody>
                  {whiteningPrices?.items.map((item, index) => (
                    <tr key={item.name} className={index % 2 === 1 ? 'bg-[#FDFBF7]' : 'bg-white'}>
                      <td className="p-4 font-bold text-[#5A4D41]">{item.name}</td>
                      <td className="p-4 text-right font-bold text-[#2E8B57]">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <AuthorBio />
      </main>
      <Footer />
    </>
  );
}
