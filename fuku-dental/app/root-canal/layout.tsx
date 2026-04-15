import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '豊洲の根管治療｜歯の神経の治療｜Fデンタルオフィス 豊洲プライムスクエア院',
  description: '豊洲駅徒歩2分のFデンタルオフィス 豊洲プライムスクエア院で根管治療。マイクロスコープを使用した精密な根管治療で、できるだけ歯を抜かずに残します。歯の激しい痛み・腫れでお悩みの方はご相談ください。',
  keywords: '豊洲 根管治療,歯 神経 治療 豊洲,根管治療 歯医者 豊洲,歯が痛い 豊洲,江東区 根管治療',
  openGraph: {
    title: '豊洲の根管治療｜歯の神経の治療｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: '豊洲駅徒歩2分のFデンタルオフィス 豊洲プライムスクエア院で根管治療。マイクロスコープを使用した精密な根管治療で、できるだけ歯を抜かずに残します。歯の激しい痛み・腫れでお悩みの方はご相談ください。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/root-canal',
    siteName: 'Fデンタルオフィス 豊洲プライムスクエア院',
  },
};

export default function RootCanalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
