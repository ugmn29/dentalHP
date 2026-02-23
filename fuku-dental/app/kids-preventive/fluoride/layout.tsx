import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '子供のフッ素塗布｜効果・安全性・費用｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲のF歯科で子供のフッ素塗布。虫歯予防に効果的なフッ素の作用メカニズム、安全性、推奨頻度、費用について歯科医師が詳しく解説。お子様の歯を守る予防ケアをご提案します。',
  keywords: 'フッ素塗布 子供,フッ素 効果,フッ素 安全性,子供 虫歯予防 フッ素,フッ素塗布 豊洲',
  openGraph: {
    title: '子供のフッ素塗布｜効果・安全性・費用｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲のF歯科で子供のフッ素塗布。虫歯予防に効果的なフッ素の作用メカニズム、安全性、推奨頻度、費用について歯科医師が詳しく解説。お子様の歯を守る予防ケアをご提案します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/kids-preventive/fluoride',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function FluorideLayout({ children }: { children: React.ReactNode }) {
  return children;
}
