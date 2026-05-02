import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '採用応募プライバシーポリシー｜Fデンタルオフィス 豊洲プライムスクエア院',
  description: 'Fデンタルオフィス 豊洲プライムスクエア院の採用応募フォームを通じて取得する個人情報の取扱方針。',
  openGraph: {
    title: '採用応募プライバシーポリシー｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: 'Fデンタルオフィス 豊洲プライムスクエア院の採用応募フォームを通じて取得する個人情報の取扱方針。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/recruit/privacy',
    siteName: 'Fデンタルオフィス 豊洲プライムスクエア院',
  },
  alternates: {
    canonical: 'https://fshika.com/recruit/privacy',
  },
};

export default function RecruitPrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
