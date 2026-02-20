import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '豊洲の口腔外科｜親知らず・顎関節症・外傷｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲駅徒歩2分のF歯科で口腔外科治療。親知らずの抜歯・顎関節症・口内のできもの・外傷など幅広く対応。歯科用CTによる精密診断で安全な治療を提供します。',
  keywords: '豊洲 口腔外科,口腔外科 豊洲,親知らず 抜歯 豊洲,顎関節症 豊洲,江東区 口腔外科',
  openGraph: {
    title: '豊洲の口腔外科｜親知らず・顎関節症・外傷｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲駅徒歩2分のF歯科で口腔外科治療。親知らずの抜歯・顎関節症・口内のできもの・外傷など幅広く対応。歯科用CTによる精密診断で安全な治療を提供します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/concerns/oral-surgery',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function OralSurgeryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
