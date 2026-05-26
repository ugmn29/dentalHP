import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import { getPriceCategories, type PriceCategory } from '@/data/price-list';
import { Home, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'セラミック治療の費用・値段｜当院の料金表｜Fデンタルオフィス 豊洲プライムスクエア院',
  description: '豊洲の歯医者 Fデンタルオフィス 豊洲プライムスクエア院のセラミック治療・補綴治療の料金表です。前歯補綴、大臼歯補綴、インレー・アンレー、修復の費用を掲載しています。',
  keywords: 'セラミック,歯,値段,費用,料金,価格,補綴,インレー,アンレー,修復',
  alternates: {
    canonical: 'https://fshika.com/ceramic/cost',
  },
  openGraph: {
    title: 'セラミック治療の費用・値段｜当院の料金表｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: 'セラミック治療・補綴治療の料金表。前歯補綴、大臼歯補綴、インレー・アンレー、修復の費用をご確認いただけます。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/ceramic/cost',
    siteName: 'Fデンタルオフィス 豊洲プライムスクエア院',
  },
};

const ceramicPriceCategories = getPriceCategories([
  'lab-work',
  'anterior-prosthetics',
  'posterior-prosthetics',
  'inlay-onlay',
  'cr',
]);

function PriceTable({ category }: { category: PriceCategory }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif mb-5">
        {category.title}
      </h2>
      <div className="bg-white rounded-2xl shadow-sm border border-[#C5A572]/10 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#C5A572] text-white">
              <th className="px-5 py-3 text-left text-sm font-bold">項目</th>
              <th className="px-5 py-3 text-right text-sm font-bold">料金（税込）</th>
            </tr>
          </thead>
          <tbody>
            {category.items.map((item, index) => (
              <tr key={item.name} className={index % 2 === 1 ? 'bg-[#FDFBF7]' : 'bg-white'}>
                <td className="px-5 py-4 font-bold text-[#5A4D41]">{item.name}</td>
                <td className="px-5 py-4 text-right font-bold text-[#2E8B57]">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function CeramicCostPage() {
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
              <Link href="/ceramic" className="hover:text-[#C5A572]">
                セラミック治療
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
                セラミック治療の費用・料金
              </h1>
              <PageImage path="/ceramic/cost" imageId="セラミック治療の料金比較表" alt="セラミック治療の費用・料金" />
              <div className="w-24 h-1 bg-[#C5A572] mx-auto my-8"></div>
              <p className="text-lg text-[#8D8070] leading-relaxed">
                表示価格はすべて税込です。
              </p>
            </div>
          </div>
        </section>

        <section className="pt-8 pb-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-5xl">
            {ceramicPriceCategories.map((category) => (
              <PriceTable key={category.id} category={category} />
            ))}
          </div>
        </section>

        <AuthorBio />
      </main>
      <Footer />
    </>
  );
}
