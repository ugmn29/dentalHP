import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import { getPriceCategory } from '@/data/price-list';
import { Home, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '根管治療の費用・料金｜Fデンタルオフィス 豊洲プライムスクエア院',
  description: '豊洲の歯医者 Fデンタルオフィス 豊洲プライムスクエア院の根管治療の料金表です。前歯、小臼歯、大臼歯の費用を掲載しています。',
  keywords: '根管治療,費用,料金,値段,前歯,小臼歯,大臼歯,Fデンタルオフィス 豊洲プライムスクエア院',
  alternates: {
    canonical: 'https://fshika.com/root-canal/cost',
  },
  openGraph: {
    title: '根管治療の費用・料金｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: '根管治療の料金表。前歯、小臼歯、大臼歯の費用を掲載しています。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/root-canal/cost',
    siteName: 'Fデンタルオフィス 豊洲プライムスクエア院',
  },
};

const rootCanalPrices = getPriceCategory('root-canal');

export default function RootCanalCostPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF7]">
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#C5A572] flex items-center">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/root-canal" className="hover:text-[#C5A572]">
                根管治療
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#C5A572]">費用・料金</span>
            </div>
          </div>
        </div>

        <section className="py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                根管治療の費用・料金
              </h1>
              <PageImage path="/root-canal/cost" imageId="根管治療の保険と自費の費用比較表" alt="根管治療の費用・料金" />
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
                  {rootCanalPrices?.items.map((item, index) => (
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
