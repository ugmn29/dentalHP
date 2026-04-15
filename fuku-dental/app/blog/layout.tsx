import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '歯科ブログ・お知らせ｜Fデンタルオフィス 豊洲プライムスクエア院',
  description: '豊洲のFデンタルオフィス 豊洲プライムスクエア院の歯科ブログ・お知らせ。歯の健康に関する最新情報、治療に関するお役立ち記事、医院からのお知らせを配信しています。',
  keywords: '歯科ブログ,歯医者 お知らせ,歯 健康 情報,豊洲 歯医者 ブログ',
  openGraph: {
    title: '歯科ブログ・お知らせ｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: '豊洲のFデンタルオフィス 豊洲プライムスクエア院の歯科ブログ・お知らせ。歯の健康に関する最新情報、治療に関するお役立ち記事、医院からのお知らせを配信しています。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/blog',
    siteName: 'Fデンタルオフィス 豊洲プライムスクエア院',
  },
  twitter: {
    card: 'summary_large_image',
    title: '歯科ブログ・お知らせ｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: '豊洲の歯医者Fデンタルオフィス 豊洲プライムスクエア院の歯科ブログ。歯の健康に関する最新情報やお役立ち記事を配信。',
  },
  alternates: {
    canonical: 'https://fshika.com/blog',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
