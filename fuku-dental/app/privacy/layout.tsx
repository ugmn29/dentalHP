import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: 'F歯科・矯正歯科 豊洲プライムスクエア院のプライバシーポリシー。当院における個人情報の取り扱いについてご説明します。患者様の個人情報保護に努めてまいります。',
  keywords: 'プライバシーポリシー,個人情報保護,F歯科',
  openGraph: {
    title: 'プライバシーポリシー｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: 'F歯科・矯正歯科 豊洲プライムスクエア院のプライバシーポリシー。当院における個人情報の取り扱いについてご説明します。患者様の個人情報保護に努めてまいります。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/privacy',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
