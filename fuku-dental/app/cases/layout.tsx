import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '症例紹介・治療実績｜ビフォーアフター｜Fデンタルオフィス 豊洲プライムスクエア院',
  description: '豊洲のFデンタルオフィス 豊洲プライムスクエア院の症例紹介・治療実績ページ。矯正治療・インプラント・セラミック・ホワイトニングなど各治療のビフォーアフター写真と治療内容をご紹介。実際の仕上がりをご確認ください。',
  keywords: '歯科 症例,治療実績 歯医者,ビフォーアフター 歯科,矯正 症例,セラミック 症例,豊洲 歯医者 症例',
  openGraph: {
    title: '症例紹介・治療実績｜ビフォーアフター｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: '豊洲のFデンタルオフィス 豊洲プライムスクエア院の症例紹介・治療実績ページ。矯正治療・インプラント・セラミック・ホワイトニングなど各治療のビフォーアフター写真と治療内容をご紹介。実際の仕上がりをご確認ください。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/cases',
    siteName: 'Fデンタルオフィス 豊洲プライムスクエア院',
  },
};

export default function CasesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
