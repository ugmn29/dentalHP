import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '歯並びが悪くなる原因と予防法｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '歯並びが悪くなる原因を歯科医師が徹底解説。遺伝・口呼吸・指しゃぶり・舌の癖など、歯並びに影響する要因と、お子様のうちからできる予防法をわかりやすくご紹介します。',
  keywords: '歯並び 悪い 原因,歯並び 予防,歯並び 遺伝,歯並び 悪くなる 習慣,子供 歯並び 予防',
  openGraph: {
    title: '歯並びが悪くなる原因と予防法｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '歯並びが悪くなる原因を歯科医師が徹底解説。遺伝・口呼吸・指しゃぶり・舌の癖など、歯並びに影響する要因と、お子様のうちからできる予防法をわかりやすくご紹介します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/oral-education/bad-alignment',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function BadAlignmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
