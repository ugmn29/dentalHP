import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '口臭治療・口臭の原因と対策｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '口臭でお悩みの方へ。豊洲のF歯科で口臭の原因を検査・特定し、適切な治療を行います。歯周病・虫歯・舌苔など口臭の原因別に対策をご提案。デリケートなお悩みも安心してご相談ください。',
  keywords: '口臭 治療,口臭 原因,口臭 対策,口臭 歯医者,口臭外来 豊洲,口臭 治療 豊洲',
  openGraph: {
    title: '口臭治療・口臭の原因と対策｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '口臭でお悩みの方へ。豊洲のF歯科で口臭の原因を検査・特定し、適切な治療を行います。歯周病・虫歯・舌苔など口臭の原因別に対策をご提案。デリケートなお悩みも安心してご相談ください。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/general/bad-breath',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function BadBreathLayout({ children }: { children: React.ReactNode }) {
  return children;
}
