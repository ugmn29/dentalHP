import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import { getPriceCategories, type PriceCategory } from '@/data/price-list';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '矯正治療の費用・料金｜小児矯正・成人矯正の料金表｜Fデンタルオフィス 豊洲プライムスクエア院',
  description: '豊洲の歯医者 Fデンタルオフィス 豊洲プライムスクエア院の矯正治療の料金表です。小児矯正、成人矯正、ワイヤー矯正、マウスピース矯正の費用を掲載しています。',
  keywords: '矯正,費用,料金,値段,小児矯正,成人矯正,マウスピース矯正,ワイヤー矯正,Fデンタルオフィス 豊洲プライムスクエア院',
  alternates: {
    canonical: 'https://fshika.com/orthodontics/cost',
  },
  openGraph: {
    title: '矯正治療の費用・料金｜小児矯正・成人矯正の料金表｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: '小児矯正、成人矯正、ワイヤー矯正、マウスピース矯正の費用を掲載しています。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/orthodontics/cost',
    siteName: 'Fデンタルオフィス 豊洲プライムスクエア院',
  },
};

const orthoPriceCategories = getPriceCategories(['kids-ortho', 'adult-ortho']);

function PriceTable({ category }: { category: PriceCategory }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
        {category.title}
      </h2>
      <div className="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-amber-600 text-white">
              <th className="px-5 py-3 text-left text-sm font-bold">項目</th>
              <th className="px-5 py-3 text-right text-sm font-bold">料金（税込）</th>
            </tr>
          </thead>
          <tbody>
            {category.items.map((item, index) => (
              <tr key={item.name} className={index % 2 === 1 ? 'bg-amber-50/60' : 'bg-white'}>
                <td className="px-5 py-4">
                  <div className="font-bold text-gray-800">{item.name}</div>
                  {item.note && (
                    <p className="mt-1 text-xs leading-relaxed text-gray-600">{item.note}</p>
                  )}
                </td>
                <td className="px-5 py-4 text-right font-bold text-green-700">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {category.id === 'kids-ortho' && (
        <div className="mt-4 rounded-2xl border border-amber-100 bg-white p-4 text-sm leading-relaxed text-gray-700">
          これらの費用はいずれかの装置・治療で使用します。例えば、プレオルソから拡大床へ移行する場合、拡大床治療は差額で対応可能です。
        </div>
      )}
    </section>
  );
}

export default function OrthodonticsCostPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-amber-50">
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-amber-600 transition-colors">
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/orthodontics" className="hover:text-amber-600 transition-colors">
                矯正歯科
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-amber-600 font-medium">費用・料金</span>
            </nav>
          </div>
        </div>

        <section className="relative bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                矯正治療の費用・料金
              </h1>
              <PageImage path="/orthodontics/cost" imageId="矯正法別の費用比較棒グラフ" alt="矯正治療の費用・料金" />
              <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                表示価格はすべて税込です。
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent"></div>
        </section>

        <section className="py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {orthoPriceCategories.map((category) => (
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
