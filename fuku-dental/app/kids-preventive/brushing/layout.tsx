import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '子供の歯磨き指導｜正しいブラッシング方法｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲のF歯科で子供の歯磨き指導。年齢に合わせたブラッシング方法、仕上げ磨きのコツ、歯ブラシの選び方を歯科衛生士がやさしく指導します。正しい歯磨き習慣で虫歯ゼロを目指しましょう。',
  keywords: '子供 歯磨き 指導,仕上げ磨き やり方,子供 歯磨き 嫌がる,ブラッシング指導 豊洲,子供 歯ブラシ 選び方',
  openGraph: {
    title: '子供の歯磨き指導｜正しいブラッシング方法｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲のF歯科で子供の歯磨き指導。年齢に合わせたブラッシング方法、仕上げ磨きのコツ、歯ブラシの選び方を歯科衛生士がやさしく指導します。正しい歯磨き習慣で虫歯ゼロを目指しましょう。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/kids-preventive/brushing',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function BrushingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
