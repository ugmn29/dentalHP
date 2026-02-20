import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '豊洲の審美歯科・セラミック治療｜白く美しい歯に｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲駅徒歩2分のF歯科で審美歯科・セラミック治療。銀歯を白いセラミックに交換、オールセラミッククラウン・ジルコニア・e-maxなど豊富な素材から最適な治療をご提案。自然で美しい仕上がりを実現します。',
  keywords: '豊洲 審美歯科,豊洲 セラミック,銀歯 白く,セラミック治療 豊洲,審美歯科 江東区,セラミッククラウン',
  openGraph: {
    title: '豊洲の審美歯科・セラミック治療｜白く美しい歯に｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲駅徒歩2分のF歯科で審美歯科・セラミック治療。銀歯を白いセラミックに交換、オールセラミッククラウン・ジルコニア・e-maxなど豊富な素材から最適な治療をご提案。自然で美しい仕上がりを実現します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/ceramic',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function CeramicLayout({ children }: { children: React.ReactNode }) {
  return children;
}
