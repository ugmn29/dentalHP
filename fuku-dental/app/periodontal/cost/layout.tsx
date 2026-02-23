import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '歯周病治療の費用｜保険診療・自費診療の料金｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲の歯医者 F歯科が歯周病治療にかかる費用を詳しく解説。保険診療と自費診療の違い、各治療ごとの料金目安、医療費控除についてご案内します。',
  keywords: '歯周病,治療費用,料金,保険診療,自費診療,医療費控除,F歯科・矯正歯科 豊洲プライムスクエア院',
  openGraph: {
    title: '歯周病治療の費用｜保険診療・自費診療の料金｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲のF歯科が歯周病治療の費用を解説。保険診療と自費診療の違い、料金目安、医療費控除をご案内。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/periodontal/cost',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function PeriodontalCostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
