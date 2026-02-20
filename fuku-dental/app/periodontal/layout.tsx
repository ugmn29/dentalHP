import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '豊洲の歯周病治療｜歯ぐきの腫れ・出血に｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲駅徒歩2分のF歯科で歯周病治療。歯ぐきの腫れ・出血・口臭が気になる方へ。歯周ポケット検査から歯石除去、再生療法まで段階に応じた治療を行います。早期発見・治療で大切な歯を守ります。',
  keywords: '豊洲 歯周病,歯周病 治療 豊洲,歯ぐき 腫れ 歯医者,歯周病 歯医者 豊洲,江東区 歯周病',
  openGraph: {
    title: '豊洲の歯周病治療｜歯ぐきの腫れ・出血に｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲駅徒歩2分のF歯科で歯周病治療。歯ぐきの腫れ・出血・口臭が気になる方へ。歯周ポケット検査から歯石除去、再生療法まで段階に応じた治療を行います。早期発見・治療で大切な歯を守ります。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/periodontal',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function PeriodontalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
