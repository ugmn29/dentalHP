import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '歯周病の予防・メンテナンス｜再発を防ぐための定期ケア｜Fデンタルオフィス 豊洲プライムスクエア院',
  description: '豊洲の歯科 Fデンタルオフィス 豊洲プライムスクエア院が歯周病の予防とメンテナンスについて詳しく解説。定期検診の重要性、PMTC、セルフケアのコツ、メンテナンス間隔など、再発を防ぐための方法をご紹介します。',
  keywords: '歯周病,予防,メンテナンス,定期検診,PMTC,セルフケア,ブラッシング,Fデンタルオフィス 豊洲プライムスクエア院',
  openGraph: {
    title: '歯周病の予防・メンテナンス｜再発を防ぐための定期ケア｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: '歯周病の予防とメンテナンスについて解説。定期検診・PMTC・セルフケアで再発を防ぎます。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/periodontal/prevention',
    siteName: 'Fデンタルオフィス 豊洲プライムスクエア院',
  },
};

export default function PeriodontalPreventionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
