import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '親知らずの基礎知識｜生え方・症状・治療法｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '親知らずの生え方・症状・治療法を歯科医師が詳しく解説。抜くべきか残すべきか、痛みが出た時の対処法、抜歯の流れや費用について。豊洲のF歯科で安心の親知らず治療を。',
  keywords: '親知らず,親知らず 症状,親知らず 抜くべきか,親知らず 痛い,親知らず 生え方,親知らず 治療',
  openGraph: {
    title: '親知らずの基礎知識｜生え方・症状・治療法｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '親知らずの生え方・症状・治療法を歯科医師が詳しく解説。抜くべきか残すべきか、痛みが出た時の対処法、抜歯の流れや費用について。豊洲のF歯科で安心の親知らず治療を。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/wisdom',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function WisdomLayout({ children }: { children: React.ReactNode }) {
  return children;
}
