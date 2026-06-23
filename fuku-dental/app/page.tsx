import type { Metadata } from 'next';
export { default } from './HomeClient';

export const metadata: Metadata = {
  title: '豊洲の歯科・歯医者｜豊洲駅徒歩2分・0歳から対応｜Fデンタルオフィス 豊洲プライムスクエア院',
  description: '豊洲駅6a出口から徒歩2分、豊洲プライムスクエア1階の歯科医院・歯医者。Fデンタルオフィス 豊洲プライムスクエア院は、0歳からの小児歯科・こども矯正、予防歯科、セラミック、インプラント、マウスピース矯正まで幅広く対応します。豊洲で歯科をお探しの方へ、丁寧な説明と精密診断を大切にしています。',
  keywords: '豊洲 歯科,豊洲 歯医者,歯科 豊洲,歯医者 豊洲,豊洲 矯正歯科,豊洲駅 歯科,豊洲駅 歯医者,豊洲プライムスクエア,こども矯正,インプラント,セラミック,ホワイトニング,江東区 歯科',
  openGraph: {
    title: '豊洲の歯科・歯医者｜豊洲駅徒歩2分・0歳から対応｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: '豊洲駅6a出口から徒歩2分、豊洲プライムスクエア1階の歯科医院。小児歯科・こども矯正・予防歯科・インプラント・セラミック治療など幅広く対応。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com',
    siteName: 'Fデンタルオフィス 豊洲プライムスクエア院',
    images: [
      {
        url: 'https://fshika.com/images/og/homepage.png',
        width: 1200,
        height: 630,
        alt: 'Fデンタルオフィス 豊洲プライムスクエア院の精密診断と治療説明',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '豊洲の歯科・歯医者｜豊洲駅徒歩2分・0歳から対応｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: '豊洲駅6a出口から徒歩2分。小児歯科・こども矯正・予防歯科・インプラント・セラミック治療など幅広く対応。',
    images: ['https://fshika.com/images/og/homepage.png'],
  },
  alternates: {
    canonical: 'https://fshika.com',
  },
};
