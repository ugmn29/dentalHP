import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '豊洲の矯正歯科｜ワイヤー・マウスピース矯正｜Fデンタルオフィス 豊洲プライムスクエア院',
  description: '豊洲駅徒歩2分のFデンタルオフィス 豊洲プライムスクエア院で矯正治療。ワイヤー矯正・マウスピース矯正・裏側矯正に対応。精密検査に基づく最適な治療計画で美しい歯並びを実現。分割払い・デンタルローンも利用可能です。',
  keywords: '豊洲 矯正歯科,豊洲 歯列矯正,矯正 豊洲,マウスピース矯正 豊洲,ワイヤー矯正 豊洲,江東区 矯正',
  openGraph: {
    title: '豊洲の矯正歯科｜ワイヤー・マウスピース矯正｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: '豊洲駅徒歩2分のFデンタルオフィス 豊洲プライムスクエア院で矯正治療。ワイヤー矯正・マウスピース矯正・裏側矯正に対応。精密検査に基づく最適な治療計画で美しい歯並びを実現。分割払い・デンタルローンも利用可能です。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/orthodontics',
    siteName: 'Fデンタルオフィス 豊洲プライムスクエア院',
  },
};

export default function OrthodonticsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
