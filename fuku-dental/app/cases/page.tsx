import type { Metadata } from 'next';
export { default } from './CasesClient';

export const metadata: Metadata = {
  title: '治療症例集・ビフォーアフター｜Fデンタルオフィス 豊洲プライムスクエア院',
  description: '豊洲のFデンタルオフィス 豊洲プライムスクエア院の実際の治療症例。インプラント・矯正・セラミック・ホワイトニングなどの治療前後（ビフォーアフター）をご覧いただけます。治療のイメージをつかむのに最適。',
  keywords: '歯科 症例,ビフォーアフター,豊洲 歯医者 症例,治療実績,インプラント 症例,矯正 症例',
  openGraph: {
    title: '治療症例集・ビフォーアフター｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: '豊洲のFデンタルオフィス 豊洲プライムスクエア院の実際の治療症例。インプラント・矯正・セラミックなどのビフォーアフター。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/cases',
    siteName: 'Fデンタルオフィス 豊洲プライムスクエア院',
  },
  twitter: {
    card: 'summary_large_image',
    title: '治療症例集｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: '実際の治療症例のビフォーアフターをご覧ください。',
  },
  alternates: {
    canonical: 'https://fshika.com/cases',
  },
};
