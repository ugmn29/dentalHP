import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '口呼吸が歯並びに与える影響と改善法｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '口呼吸が歯並び・顔の成長に与える影響を歯科医師が解説。口呼吸の原因、見分け方、鼻呼吸に改善するためのトレーニング法、矯正治療との関係についてわかりやすくご紹介します。',
  keywords: '口呼吸 歯並び,口呼吸 デメリット,口呼吸 改善,口呼吸 矯正,鼻呼吸 トレーニング',
  openGraph: {
    title: '口呼吸が歯並びに与える影響と改善法｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '口呼吸が歯並び・顔の成長に与える影響を歯科医師が解説。口呼吸の原因、見分け方、鼻呼吸に改善するためのトレーニング法、矯正治療との関係についてわかりやすくご紹介します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/oral-education/mouth-breathing',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function MouthBreathingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
