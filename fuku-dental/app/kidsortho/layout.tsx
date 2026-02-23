import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '豊洲の小児矯正｜子供の歯並び治療｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲駅徒歩2分のF歯科で小児矯正。お子様の成長を利用した負担の少ない矯正治療で、将来の歯並びを整えます。出っ歯・受け口・すきっ歯など各症例に対応。無料相談実施中。',
  keywords: '豊洲 小児矯正,豊洲 子供 矯正,小児矯正 豊洲,子供 歯並び 豊洲,江東区 小児矯正',
  openGraph: {
    title: '豊洲の小児矯正｜子供の歯並び治療｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲駅徒歩2分のF歯科で小児矯正。お子様の成長を利用した負担の少ない矯正治療で、将来の歯並びを整えます。出っ歯・受け口・すきっ歯など各症例に対応。無料相談実施中。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/kidsortho',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function KidsorthoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
