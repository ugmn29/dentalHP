import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー｜Fデンタルオフィス 豊洲プライムスクエア院',
  description: 'Fデンタルオフィス 豊洲プライムスクエア院のプライバシーポリシー。当院における個人情報の取り扱いについてご説明します。患者様の個人情報保護に努めてまいります。',
  keywords: 'プライバシーポリシー,個人情報保護,Fデンタルオフィス',
  openGraph: {
    title: 'プライバシーポリシー｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: 'Fデンタルオフィス 豊洲プライムスクエア院のプライバシーポリシー。当院における個人情報の取り扱いについてご説明します。患者様の個人情報保護に努めてまいります。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/privacy',
    siteName: 'Fデンタルオフィス 豊洲プライムスクエア院',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'プライバシーポリシー｜豊洲の歯医者Fデンタルオフィス',
    description: '豊洲の歯科Fデンタルオフィス 豊洲プライムスクエア院のプライバシーポリシー。個人情報の取り扱いについて。',
  },
  alternates: {
    canonical: 'https://fshika.com/privacy',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
