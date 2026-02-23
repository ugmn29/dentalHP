import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '豊洲のマウスピース矯正｜透明で目立たない歯列矯正｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲駅徒歩2分のF歯科でマウスピース矯正。透明で目立たず、取り外し可能な矯正装置で快適に歯並びを改善。食事や歯磨きもストレスフリー。無料相談・シミュレーション実施中。',
  keywords: '豊洲 マウスピース矯正,マウスピース矯正 豊洲,インビザライン 豊洲,透明 矯正 豊洲,目立たない矯正 豊洲',
  openGraph: {
    title: '豊洲のマウスピース矯正｜透明で目立たない歯列矯正｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲駅徒歩2分のF歯科でマウスピース矯正。透明で目立たず、取り外し可能な矯正装置で快適に歯並びを改善。食事や歯磨きもストレスフリー。無料相談・シミュレーション実施中。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/mouthpiece',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function MouthpieceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
