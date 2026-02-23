import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '顎関節症の専門治療｜原因から改善まで｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲のF歯科で顎関節症の専門治療。精密検査で原因を特定し、スプリント療法・理学療法・噛み合わせ治療で根本から改善。顎の痛み・開口障害・関節音でお悩みの方はご相談ください。',
  keywords: '顎関節症 専門,顎関節症 原因,顎関節症 改善,スプリント療法,噛み合わせ治療,顎関節 豊洲',
  openGraph: {
    title: '顎関節症の専門治療｜原因から改善まで｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲のF歯科で顎関節症の専門治療。精密検査で原因を特定し、スプリント療法・理学療法・噛み合わせ治療で根本から改善。顎の痛み・開口障害・関節音でお悩みの方はご相談ください。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/surgery/tmj',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function SurgeryTmjLayout({ children }: { children: React.ReactNode }) {
  return children;
}
