import type { Metadata } from 'next';
export { default } from './FacilitiesClient';

export const metadata: Metadata = {
  title: '院内設備・施設紹介｜豊洲の歯医者 F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲プライムスクエア1階の歯科医院。完全個室の診療室・歯科用CT・マイクロスコープ・口腔内スキャナーなど最新設備を完備。天井テレビ付き個室で快適に治療を受けられます。',
  keywords: '豊洲 歯科 設備,歯科用CT,マイクロスコープ,個室 診療室,豊洲プライムスクエア,豊洲 歯医者',
  openGraph: {
    title: '院内設備・施設紹介｜豊洲の歯医者 F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲プライムスクエア1階。歯科用CT・マイクロスコープ・個室診療室など最新設備完備。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/facilities',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
  twitter: {
    card: 'summary_large_image',
    title: '院内設備・施設紹介｜豊洲 F歯科・矯正歯科',
    description: '豊洲プライムスクエア1階。最新設備完備の歯科医院。',
  },
  alternates: {
    canonical: 'https://fshika.com/facilities',
  },
};
