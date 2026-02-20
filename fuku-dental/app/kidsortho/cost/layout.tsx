import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '小児矯正の費用・料金表｜分割払い対応｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲のF歯科の小児矯正の費用・料金をご案内。1期治療・2期治療の料金目安、装置ごとの費用比較、分割払い・デンタルローン・医療費控除について詳しく解説します。',
  keywords: '小児矯正 費用,子供 矯正 値段,小児矯正 料金,子供 矯正 費用 豊洲,矯正 分割払い',
  openGraph: {
    title: '小児矯正の費用・料金表｜分割払い対応｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲のF歯科の小児矯正の費用・料金をご案内。1期治療・2期治療の料金目安、装置ごとの費用比較、分割払い・デンタルローン・医療費控除について詳しく解説します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/kidsortho/cost',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function KidsorthoCostLayout({ children }: { children: React.ReactNode }) {
  return children;
}
