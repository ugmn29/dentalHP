import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "豊洲 歯医者｜駅徒歩2分 F歯科・矯正歯科",
  description: "豊洲駅6a出口から徒歩2分、豊洲プライムスクエア1階の歯医者「F歯科・矯正歯科」。こども矯正・セラミック治療・インプラント・マウスピース矯正など幅広く対応。豊洲の地域密着型歯科医院として、丁寧なカウンセリングと最新の治療技術をご提供します。",
  keywords: "豊洲 歯医者,豊洲 矯正歯科,豊洲 歯科,豊洲駅 歯医者,豊洲プライムスクエア,こども矯正,インプラント,セラミック,ホワイトニング,江東区 歯医者",
  openGraph: {
    title: "豊洲 歯医者｜駅徒歩2分 F歯科・矯正歯科",
    description: "豊洲駅6a出口から徒歩2分、豊洲プライムスクエア1階。こども矯正・インプラント・セラミック治療など幅広く対応。豊洲の地域密着型歯科医院。",
    url: "https://fshika.com",
    siteName: "F歯科・矯正歯科 豊洲",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://fshika.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "F歯科・矯正歯科",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "豊洲 歯医者｜駅徒歩2分 F歯科・矯正歯科",
    description: "豊洲駅6a出口から徒歩2分、豊洲プライムスクエア1階。こども矯正・インプラント・セラミック治療など幅広く対応。",
    images: ["https://fshika.com/images/og-image.jpg"],
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
  alternates: {
    canonical: "https://fshika.com",
  },
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
  verification: {
    google: 'your-google-verification-code', // Google Search Consoleで取得したコードに置き換えてください
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
    "@type": "Dentist",
    "name": "F歯科・矯正歯科 豊洲プライムスクエア院",
    "image": "https://fshika.com/images/clinic-photo.jpg",
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
    "url": "https://fshika.com",
    "telephone": "+81-3-XXXX-XXXX", // 実際の電話番号に変更してください
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
    "description": "F歯科・矯正歯科では、科学的根拠に基づいた精密治療を提供。インプラント、矯正歯科、歯周病治療、根管治療など、幅広い診療に対応しています。",
    "founder": {
      "@type": "Person",
      "name": "福永 真大",
      "jobTitle": "院長・歯科医師",
      "image": "https://fshika.com/images/doctor-profile.jpg",
      "description": "矯正歯科専門医。東京歯科大学歯学部卒業。日本矯正歯科学会認定医として、科学的根拠に基づいた精密な矯正治療を提供。",
      "credential": "歯科医師免許",
      "memberOf": [
        {
          "@type": "Organization",
          "name": "日本矯正歯科学会"
        },
        {
          "@type": "Organization",
          "name": "日本小児歯科学会"
        },
        {
          "@type": "Organization",
          "name": "日本歯周病学会"
        },
        {
          "@type": "Organization",
          "name": "日本口腔インプラント学会"
        }
      ]
    },
    "employee": [
      {
        "@type": "Person",
        "name": "福永 真大",
        "jobTitle": "院長・歯科医師",
        "credential": "歯科医師免許",
        "knowsAbout": ["矯正歯科", "小児歯科", "予防歯科", "審美歯科"]
      }
    ],
    "sameAs": [
      "https://www.facebook.com/fuku-dental", // 実際のSNSリンクに変更してください
      "https://www.instagram.com/fuku-dental",
      "https://twitter.com/fuku-dental"
    ]
  };

  return (
    <html lang="ja">
      <head>
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
