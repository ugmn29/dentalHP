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
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
