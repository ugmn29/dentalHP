import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '豊洲の小児歯科・子供の予防歯科｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲駅徒歩2分のF歯科で小児歯科。お子様の虫歯予防・フッ素塗布・シーラント・歯磨き指導を行います。歯医者が苦手なお子様も安心して通えるよう、やさしく丁寧な対応を心がけています。',
  keywords: '豊洲 小児歯科,豊洲 子供 歯医者,子供 虫歯予防 豊洲,小児歯科 豊洲,江東区 小児歯科',
  openGraph: {
    title: '豊洲の小児歯科・子供の予防歯科｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲駅徒歩2分のF歯科で小児歯科。お子様の虫歯予防・フッ素塗布・シーラント・歯磨き指導を行います。歯医者が苦手なお子様も安心して通えるよう、やさしく丁寧な対応を心がけています。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/kids-preventive',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function KidsPreventiveLayout({ children }: { children: React.ReactNode }) {
  return children;
}
