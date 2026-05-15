import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '院内設備・設備紹介｜最新の歯科機器完備｜Fデンタルオフィス 豊洲プライムスクエア院',
  description: '豊洲のFデンタルオフィス 豊洲プライムスクエア院の院内設備をご紹介。歯科用CT・マイクロスコープ・3Dスキャナー・口腔内カメラ・滅菌設備など、精密な診断とわかりやすい説明のための診療環境を整えています。',
  keywords: '豊洲 歯医者 設備,歯科CT,マイクロスコープ 歯科,3Dスキャナー,口腔内カメラ,滅菌設備,豊洲',
  openGraph: {
    title: '院内設備・設備紹介｜最新の歯科機器完備｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: '豊洲のFデンタルオフィス 豊洲プライムスクエア院の院内設備をご紹介。歯科用CT・マイクロスコープ・3Dスキャナー・口腔内カメラ・滅菌設備など、精密な診断とわかりやすい説明のための診療環境を整えています。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/facilities',
    siteName: 'Fデンタルオフィス 豊洲プライムスクエア院',
  },
};

export default function FacilitiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
