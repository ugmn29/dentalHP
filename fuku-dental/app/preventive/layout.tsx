import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '豊洲の予防歯科｜定期検診・クリーニング｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲駅徒歩2分のF歯科で予防歯科。定期検診・歯のクリーニング・フッ素塗布で虫歯や歯周病を未然に防ぎます。プロによる歯石除去とブラッシング指導で、お口の健康を長く守ります。',
  keywords: '豊洲 予防歯科,豊洲 歯科検診,歯 クリーニング 豊洲,定期検診 歯医者 豊洲,江東区 予防歯科',
  openGraph: {
    title: '豊洲の予防歯科｜定期検診・クリーニング｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲駅徒歩2分のF歯科で予防歯科。定期検診・歯のクリーニング・フッ素塗布で虫歯や歯周病を未然に防ぎます。プロによる歯石除去とブラッシング指導で、お口の健康を長く守ります。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/preventive',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function PreventiveLayout({ children }: { children: React.ReactNode }) {
  return children;
}
