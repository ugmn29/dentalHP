import type { Metadata } from 'next';
import './recruit.css';

export const metadata: Metadata = {
  title: '採用情報 ｜ Fデンタルオフィス 豊洲プライムスクエア院',
  description: '2026年7月、豊洲駅徒歩2分に新規開業する歯科医院の採用情報。歯科衛生士・歯科助手・受付を募集。口腔育成・SNSマーケティング・テクノロジー・ブランディングの4領域で、一般的な歯科医院では経験できないキャリアを。年間休日120日、セミナー補助50%、LINEで気軽に応募可能。',
  keywords: '豊洲 歯科 求人,豊洲 歯医者 採用,歯科衛生士 求人 豊洲,歯科助手 求人 豊洲,歯科受付 求人 豊洲,Fデンタルオフィス 採用',
  openGraph: {
    title: '採用情報 ｜ Fデンタルオフィス 豊洲プライムスクエア院',
    description: '2026年7月開業。口腔育成・SNS・テクノロジー・ブランディングの4領域で、ここでしか学べないキャリアを。',
    url: 'https://fshika.com/recruit',
    siteName: 'Fデンタルオフィス 豊洲プライムスクエア院',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: {
    canonical: 'https://fshika.com/recruit',
  },
};

export default function RecruitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
