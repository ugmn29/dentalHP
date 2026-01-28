import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '歯周病の予防・メンテナンス｜再発を防ぐための定期ケア｜F歯科・矯正歯科',
  description: '歯周病の予防とメンテナンスについて詳しく解説。定期検診の重要性、PMTC、セルフケアのコツ、メンテナンス間隔など、再発を防ぐための方法をご紹介します。',
  keywords: '歯周病,予防,メンテナンス,定期検診,PMTC,セルフケア,ブラッシング,F歯科・矯正歯科',
};

export default function PeriodontalPreventionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
