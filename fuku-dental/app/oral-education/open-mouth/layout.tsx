import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お口ぽかんの原因と対策｜口呼吸の治し方｜Fデンタルオフィス 豊洲プライムスクエア院',
  description: 'お子様のお口ぽかん（口唇閉鎖不全）の原因と対策を歯科医師が解説。口呼吸が引き起こす歯並びや健康への影響、自宅でできるトレーニング方法をご紹介。早めの対策が大切です。',
  keywords: 'お口ぽかん 原因,お口ぽかん 治し方,口呼吸 子供,口唇閉鎖不全,口呼吸 トレーニング',
  alternates: {
    canonical: 'https://fshika.com/oral-education/open-mouth',
  },
  openGraph: {
    title: 'お口ぽかんの原因と対策｜口呼吸の治し方｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: 'お子様のお口ぽかん（口唇閉鎖不全）の原因と対策を歯科医師が解説。口呼吸が引き起こす歯並びや健康への影響、自宅でできるトレーニング方法をご紹介。早めの対策が大切です。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/oral-education/open-mouth',
    siteName: 'Fデンタルオフィス 豊洲プライムスクエア院',
  },
};

export default function OpenMouthLayout({ children }: { children: React.ReactNode }) {
  return children;
}
