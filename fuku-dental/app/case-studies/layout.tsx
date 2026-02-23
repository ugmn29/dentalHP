import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '詳細症例集｜治療の流れと結果｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲のF歯科の詳細症例集。各治療の診断・治療計画・経過・結果を詳しくご紹介。患者様一人ひとりに合わせた治療アプローチと実際の治療結果をご覧いただけます。',
  keywords: '歯科 症例集,治療 症例 詳細,歯科 ビフォーアフター,治療実績 詳細',
  openGraph: {
    title: '詳細症例集｜治療の流れと結果｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲のF歯科の詳細症例集。各治療の診断・治療計画・経過・結果を詳しくご紹介。患者様一人ひとりに合わせた治療アプローチと実際の治療結果をご覧いただけます。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/case-studies',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
