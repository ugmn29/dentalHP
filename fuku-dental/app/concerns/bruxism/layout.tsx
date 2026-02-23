import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '歯ぎしり・食いしばりの治療｜ナイトガード対応｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '歯ぎしり・食いしばりでお悩みの方へ。豊洲のF歯科で原因の特定とナイトガード（マウスピース）・ボトックス治療等で改善。歯の摩耗・顎の痛み・頭痛の緩和に対応します。',
  keywords: '歯ぎしり 治療,食いしばり 治療,ナイトガード,マウスピース 歯ぎしり,歯ぎしり 歯医者,食いしばり 豊洲',
  openGraph: {
    title: '歯ぎしり・食いしばりの治療｜ナイトガード対応｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '歯ぎしり・食いしばりでお悩みの方へ。豊洲のF歯科で原因の特定とナイトガード（マウスピース）・ボトックス治療等で改善。歯の摩耗・顎の痛み・頭痛の緩和に対応します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/concerns/bruxism',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function BruxismLayout({ children }: { children: React.ReactNode }) {
  return children;
}
