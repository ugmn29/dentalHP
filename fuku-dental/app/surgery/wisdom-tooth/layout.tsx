import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '親知らずの抜歯｜痛みの少ない安全な治療｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲のF歯科で親知らずの抜歯。歯科用CTで精密に診断し、痛みの少ない安全な抜歯を行います。横向き・埋伏した難しい親知らずにも対応。抜歯後のケアも丁寧に説明します。',
  keywords: '親知らず 抜歯 豊洲,親知らず 痛くない,親知らず 抜歯 費用,横向き 親知らず,埋伏 親知らず,豊洲 口腔外科',
  openGraph: {
    title: '親知らずの抜歯｜痛みの少ない安全な治療｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲のF歯科で親知らずの抜歯。歯科用CTで精密に診断し、痛みの少ない安全な抜歯を行います。横向き・埋伏した難しい親知らずにも対応。抜歯後のケアも丁寧に説明します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/surgery/wisdom-tooth',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function WisdomToothLayout({ children }: { children: React.ReactNode }) {
  return children;
}
