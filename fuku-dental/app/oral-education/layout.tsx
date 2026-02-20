import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お口の豆知識・歯科コラム｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: 'F歯科がお届けする歯と口腔の健康に関する豆知識・コラム。口呼吸のリスク、歯並びが悪くなる原因、お口ぽかんの対策など、日常生活で役立つ歯科情報をわかりやすく解説します。',
  keywords: '歯科 豆知識,口腔ケア 情報,歯 健康,口呼吸 リスク,歯並び 原因',
  openGraph: {
    title: 'お口の豆知識・歯科コラム｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: 'F歯科がお届けする歯と口腔の健康に関する豆知識・コラム。口呼吸のリスク、歯並びが悪くなる原因、お口ぽかんの対策など、日常生活で役立つ歯科情報をわかりやすく解説します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/oral-education',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function OralEducationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
