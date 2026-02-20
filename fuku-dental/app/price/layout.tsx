import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '料金表・治療費一覧｜保険診療・自費診療｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲のF歯科の料金表・治療費一覧。保険診療・自費診療それぞれの費用目安を明確に掲載。矯正・インプラント・セラミック・ホワイトニングなど各治療の料金をご確認いただけます。',
  keywords: '豊洲 歯医者 料金,歯科 料金表,歯医者 費用,自費診療 料金,豊洲 歯科 値段',
  openGraph: {
    title: '料金表・治療費一覧｜保険診療・自費診療｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲のF歯科の料金表・治療費一覧。保険診療・自費診療それぞれの費用目安を明確に掲載。矯正・インプラント・セラミック・ホワイトニングなど各治療の料金をご確認いただけます。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/price',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function PriceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
