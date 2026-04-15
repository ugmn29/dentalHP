import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '虫歯治療なら豊洲駅2分のFデンタルオフィス 豊洲プライムスクエア院｜痛みの少ない治療｜Fデンタルオフィス 豊洲プライムスクエア院',
  description: '豊洲駅徒歩2分のFデンタルオフィス 豊洲プライムスクエア院で虫歯治療。痛みの少ないレーザー治療やマイクロスコープを活用した精密治療で、できるだけ歯を残す治療を行います。保険診療から審美的な自費治療まで対応。まずはお気軽にご相談ください。',
  keywords: '豊洲 虫歯治療,豊洲 歯医者 虫歯,虫歯 痛くない治療,虫歯 歯医者 豊洲,江東区 虫歯',
  openGraph: {
    title: '虫歯治療なら豊洲駅2分のFデンタルオフィス 豊洲プライムスクエア院｜痛みの少ない治療｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: '豊洲駅徒歩2分のFデンタルオフィス 豊洲プライムスクエア院で虫歯治療。痛みの少ないレーザー治療やマイクロスコープを活用した精密治療で、できるだけ歯を残す治療を行います。保険診療から審美的な自費治療まで対応。まずはお気軽にご相談ください。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/cavity',
    siteName: 'Fデンタルオフィス 豊洲プライムスクエア院',
  },
};

export default function CavityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
