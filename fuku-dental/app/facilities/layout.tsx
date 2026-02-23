import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '院内設備・設備紹介｜最新の歯科機器完備｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲のF歯科の院内設備をご紹介。歯科用CT・マイクロスコープ・口腔内スキャナー・完全個室診療室など、最新の歯科機器を完備。安全で精密な治療環境を整えています。',
  keywords: '豊洲 歯医者 設備,歯科CT,マイクロスコープ 歯科,口腔内スキャナー,完全個室 歯医者 豊洲',
  openGraph: {
    title: '院内設備・設備紹介｜最新の歯科機器完備｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲のF歯科の院内設備をご紹介。歯科用CT・マイクロスコープ・口腔内スキャナー・完全個室診療室など、最新の歯科機器を完備。安全で精密な治療環境を整えています。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/facilities',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function FacilitiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
