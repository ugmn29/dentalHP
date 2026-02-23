import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '顎関節症の治療｜顎の痛み・口が開かない方へ｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '顎の痛み・口が開かない・カクカク音がする方へ。豊洲のF歯科で顎関節症の治療。マウスピース療法・運動療法・噛み合わせ調整で症状を改善します。お気軽にご相談ください。',
  keywords: '顎関節症 治療,顎 痛い,口 開かない,顎 カクカク,顎関節症 歯医者,顎関節症 豊洲',
  openGraph: {
    title: '顎関節症の治療｜顎の痛み・口が開かない方へ｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '顎の痛み・口が開かない・カクカク音がする方へ。豊洲のF歯科で顎関節症の治療。マウスピース療法・運動療法・噛み合わせ調整で症状を改善します。お気軽にご相談ください。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/concerns/tmj',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function TmjLayout({ children }: { children: React.ReactNode }) {
  return children;
}
