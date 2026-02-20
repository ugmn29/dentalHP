import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '虫歯治療なら豊洲駅2分のF歯科｜痛みの少ない治療｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲駅徒歩2分のF歯科で虫歯治療。痛みの少ないレーザー治療やマイクロスコープを活用した精密治療で、できるだけ歯を残す治療を行います。保険診療から審美的な自費治療まで対応。まずはお気軽にご相談ください。',
  keywords: '豊洲 虫歯治療,豊洲 歯医者 虫歯,虫歯 痛くない治療,虫歯 歯医者 豊洲,江東区 虫歯',
  openGraph: {
    title: '虫歯治療なら豊洲駅2分のF歯科｜痛みの少ない治療｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲駅徒歩2分のF歯科で虫歯治療。痛みの少ないレーザー治療やマイクロスコープを活用した精密治療で、できるだけ歯を残す治療を行います。保険診療から審美的な自費治療まで対応。まずはお気軽にご相談ください。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/cavity',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function CavityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
