import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif_JP, Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "豊洲の歯科・歯医者｜豊洲駅徒歩2分・0歳から対応｜Fデンタルオフィス 豊洲プライムスクエア院",
  description: "豊洲駅6a出口から徒歩2分、豊洲プライムスクエア1階の歯科医院・歯医者「Fデンタルオフィス 豊洲プライムスクエア院」。小児歯科・こども矯正・予防歯科・セラミック治療・インプラント・マウスピース矯正など幅広く対応します。",
  keywords: "豊洲 歯科,豊洲 歯医者,歯科 豊洲,歯医者 豊洲,豊洲 矯正歯科,矯正歯科 豊洲,豊洲駅 歯科,豊洲駅 歯医者,豊洲プライムスクエア,こども矯正,インプラント,セラミック,ホワイトニング,江東区 歯科",
  openGraph: {
    title: "豊洲の歯科・歯医者｜豊洲駅徒歩2分・0歳から対応｜Fデンタルオフィス 豊洲プライムスクエア院",
    description: "豊洲駅6a出口から徒歩2分、豊洲プライムスクエア1階。小児歯科・こども矯正・予防歯科・インプラント・セラミック治療など幅広く対応。",
    url: "https://fshika.com",
    siteName: "Fデンタルオフィス 豊洲プライムスクエア院",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://fshika.com/images/og/homepage.png",
        width: 1200,
        height: 630,
        alt: "Fデンタルオフィス 豊洲プライムスクエア院の精密診断と治療説明",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "豊洲の歯科・歯医者｜豊洲駅徒歩2分・0歳から対応｜Fデンタルオフィス 豊洲プライムスクエア院",
    description: "豊洲駅6a出口から徒歩2分。小児歯科・こども矯正・予防歯科・インプラント・セラミック治療など幅広く対応。",
    images: ["https://fshika.com/images/og/homepage.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // alternates.canonical はルート(/)以外に継承されると下層ページが全てトップページの重複扱いになる。
  // ルートページのcanonicalはapp/page.tsxで個別に設定済み。下層ページは各自metadataで定義。
  icons: {
    icon: [
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness構造化データ（JSON-LD）
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://fshika.com/#website",
        "url": "https://fshika.com",
        "name": "Fデンタルオフィス 豊洲プライムスクエア院",
        "alternateName": [
          "Fデンタルオフィス",
          "Fデンタルオフィス豊洲",
          "豊洲の歯科 Fデンタルオフィス",
          "豊洲の歯医者 Fデンタルオフィス"
        ],
        "inLanguage": "ja"
      },
      {
        "@type": "Dentist",
        "@id": "https://fshika.com/#dentist",
        "name": "Fデンタルオフィス 豊洲プライムスクエア院",
        "url": "https://fshika.com",
        "telephone": "+81-3-6204-2876",
        "image": "https://fshika.com/images/building.avif",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "豊洲5-6-36 豊洲プライムスクエア1階",
          "addressLocality": "江東区",
          "addressRegion": "東京都",
          "postalCode": "135-0061",
          "addressCountry": "JP"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 35.652121,
          "longitude": 139.797686
        },
        "priceRange": "¥¥-¥¥¥",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Wednesday", "Thursday", "Friday"],
            "opens": "10:00",
            "closes": "19:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "17:00"
          }
        ],
        "areaServed": [
          {
            "@type": "City",
            "name": "江東区"
          },
          {
            "@type": "City",
            "name": "豊洲"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "診療メニュー",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "インプラント治療"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "矯正歯科・こども矯正"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "小児歯科"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "歯周病治療"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "根管治療"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ホワイトニング"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "セラミック治療"
              }
            }
          ]
        },
        "description": "豊洲駅徒歩2分の歯科医院・歯医者、Fデンタルオフィス 豊洲プライムスクエア院では、科学的根拠に基づいた精密治療を提供。インプラント、矯正歯科、小児歯科、予防歯科、歯周病治療、根管治療など、幅広い診療に対応しています。",
        "founder": {
          "@type": "Person",
          "name": "福永 真大",
          "jobTitle": "院長・歯科医師",
          "image": "https://fshika.com/images/pages/homepage/%E8%B1%8A%E6%B4%B2%20%E6%AD%AF%E5%8C%BB%E8%80%85.png",
          "description": "大阪大学歯学部卒業。一般歯科・インプラント・矯正・審美治療など幅広い症例経験をもとに、科学的根拠に基づいた診療を提供。",
          "credential": "歯科医師免許",
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "大阪大学歯学部"
          },
          "memberOf": [
            {
              "@type": "Organization",
              "name": "日本小児歯科学会"
            },
            {
              "@type": "Organization",
              "name": "日本矯正歯科学会"
            },
            {
              "@type": "Organization",
              "name": "日本審美歯科学会"
            }
          ]
        },
        "employee": [
          {
            "@type": "Person",
            "name": "福永 真大",
            "jobTitle": "院長・歯科医師",
            "credential": "歯科医師免許",
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "大阪大学歯学部"
            },
            "knowsAbout": ["矯正歯科", "小児歯科", "予防歯科", "審美歯科"]
          }
        ],
        "sameAs": []
      }
    ]
  };

  return (
    <html lang="ja">
      <head>
        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z0SLHGM3JF"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z0SLHGM3JF');
            `
          }}
        />
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "va333eq6a7");
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerifJP.variable} ${notoSansJP.variable} ${shipporiMincho.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
