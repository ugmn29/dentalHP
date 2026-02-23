import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '歯医者嫌いを克服｜お子様が安心して通える工夫｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: 'お子様の歯医者嫌い・歯科恐怖症を克服するためのF歯科の取り組み。Tell-Show-Do法やアニメーション、ご褒美など、お子様が笑顔で通える工夫をご紹介。豊洲駅徒歩2分。',
  keywords: '子供 歯医者 怖い,歯科恐怖症 子供,歯医者嫌い 克服,子供 歯医者 泣く,豊洲 小児歯科',
  openGraph: {
    title: '歯医者嫌いを克服｜お子様が安心して通える工夫｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: 'お子様の歯医者嫌い・歯科恐怖症を克服するためのF歯科の取り組み。Tell-Show-Do法やアニメーション、ご褒美など、お子様が笑顔で通える工夫をご紹介。豊洲駅徒歩2分。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/kids-preventive/overcoming-fear',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function OvercomingFearLayout({ children }: { children: React.ReactNode }) {
  return children;
}
