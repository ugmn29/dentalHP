import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '豊洲のホワイトニング｜歯を白く美しく｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲駅徒歩2分のF歯科でホワイトニング。オフィスホワイトニング・ホームホワイトニング・デュアルホワイトニングに対応。安全な薬剤で自然な白さを実現。結婚式やイベント前にもおすすめです。',
  keywords: '豊洲 ホワイトニング,歯 白く 豊洲,ホワイトニング 歯医者 豊洲,オフィスホワイトニング 豊洲,江東区 ホワイトニング',
  openGraph: {
    title: '豊洲のホワイトニング｜歯を白く美しく｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲駅徒歩2分のF歯科でホワイトニング。オフィスホワイトニング・ホームホワイトニング・デュアルホワイトニングに対応。安全な薬剤で自然な白さを実現。結婚式やイベント前にもおすすめです。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/whitening',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function WhiteningLayout({ children }: { children: React.ReactNode }) {
  return children;
}
