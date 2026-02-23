import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '歯の外傷・けがの緊急治療｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '歯をぶつけた・折れた・抜けた等の歯の外傷に対応。豊洲のF歯科では、お子様の転倒やスポーツ中のけがによる歯の外傷を迅速に治療します。応急処置の方法もご紹介。',
  keywords: '歯 外傷,歯 ぶつけた,歯 折れた,歯 抜けた 事故,スポーツ 歯 けが,豊洲 歯科 緊急',
  openGraph: {
    title: '歯の外傷・けがの緊急治療｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '歯をぶつけた・折れた・抜けた等の歯の外傷に対応。豊洲のF歯科では、お子様の転倒やスポーツ中のけがによる歯の外傷を迅速に治療します。応急処置の方法もご紹介。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/concerns/trauma',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function TraumaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
