import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Phone, Train } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ClinicHoursTable } from '@/components/ClinicHoursTable';

export const metadata: Metadata = {
  title: 'アクセス・診療時間｜豊洲駅徒歩2分｜Fデンタルオフィス 豊洲プライムスクエア院',
  description: 'Fデンタルオフィス 豊洲プライムスクエア院のアクセス・診療時間ページです。豊洲駅6a出口から徒歩2分、豊洲プライムスクエア1階にあります。',
  keywords: '豊洲 歯医者 アクセス,豊洲 歯科 診療時間,Fデンタルオフィス 豊洲プライムスクエア院',
  openGraph: {
    title: 'アクセス・診療時間｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: '豊洲駅6a出口から徒歩2分。住所、地図、診療時間をご案内します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/access',
    siteName: 'Fデンタルオフィス 豊洲プライムスクエア院',
  },
  alternates: {
    canonical: 'https://fshika.com/access',
  },
};

const accessRouteImages = [
  {
    src: '/images/pages/homepage/access-route/route-step-1.webp',
    alt: '豊洲プライムスクエアへ進みます',
    height: 1000,
  },
  {
    src: '/images/pages/homepage/access-route/route-step-2.webp',
    alt: 'VOLVO横を進み、入口へ向かいます',
    height: 1065,
  },
  {
    src: '/images/pages/homepage/access-route/route-step-3.webp',
    alt: '豊洲プライムスクエアの入口から館内へ入ります',
    height: 985,
  },
  {
    src: '/images/pages/homepage/access-route/route-step-4.webp',
    alt: '館内に入り、そのまま通路を進みます',
    height: 1035,
  },
  {
    src: '/images/pages/homepage/access-route/route-step-5.webp',
    alt: 'セブン-イレブンの右奥にFデンタルオフィスがあります',
    height: 1060,
  },
] as const;

export default function AccessPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://fshika.com' },
      { '@type': 'ListItem', position: 2, name: 'アクセス・診療時間', item: 'https://fshika.com/access' },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans text-[#2C2C2A] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main>
        <section className="px-5 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <p className="mb-4 text-[11px] tracking-[0.3em] text-[#0a8a85]">ACCESS</p>
              <h1 className="font-serif text-4xl font-light text-[#2C2C2A] md:text-5xl">
                アクセス・診療時間
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-[2.1] text-[#6B6B68] md:text-base">
                豊洲駅6a出口から徒歩2分。豊洲プライムスクエア1階の歯科医院です。
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
              <section className="rounded-2xl border border-[#E6E3DC] bg-white p-5 shadow-sm md:p-6">
                <div className="aspect-video overflow-hidden rounded-2xl border border-[#E6E3DC]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.010249888901!2d139.798077!3d35.6521191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018895bd480af87%3A0x46a0d1583ceadde6!2zRuODh-ODs-OCv-ODq-OCquODleOCo-OCuSDosYrmtLLjg5fjg6njgqTjg6Djgrnjgq_jgqjjgqLpmaI!5e0!3m2!1sja!2sjp!4v1778288265882!5m2!1sja!2sjp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Fデンタルオフィス 豊洲プライムスクエア院 Google Map"
                  />
                </div>

                <div className="mt-8 space-y-5">
                  <div className="flex gap-3">
                    <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#0a8a85]" />
                    <div>
                      <h2 className="font-serif text-xl text-[#2C2C2A]">所在地</h2>
                      <p className="mt-2 text-sm leading-[2] text-[#6B6B68]">
                        〒135-0061 東京都江東区豊洲5-6-36
                        <br />
                        豊洲プライムスクエア1階
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Train className="mt-1 h-5 w-5 flex-shrink-0 text-[#0a8a85]" />
                    <div>
                      <h2 className="font-serif text-xl text-[#2C2C2A]">最寄り駅</h2>
                      <p className="mt-2 text-sm leading-[2] text-[#6B6B68]">
                        豊洲駅 6a出口 徒歩2分 / 提携駐車場あり
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-[#0a8a85]" />
                    <div>
                      <h2 className="font-serif text-xl text-[#2C2C2A]">電話番号</h2>
                      <a href="tel:03-6204-2876" className="mt-2 inline-block text-sm font-bold text-[#0a8a85]">
                        03-6204-2876
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-[#E6E3DC] bg-white p-5 shadow-sm md:p-8">
                <ClinicHoursTable />
                <div className="mt-8 rounded-2xl border border-[#0abab5]/20 bg-[#0abab5]/10 p-5 text-sm leading-[2] text-[#6B6B68]">
                  祝日・臨時休診などは変更になる場合があります。最新情報はお知らせまたはお電話でご確認ください。
                </div>
              </section>
            </div>

            <section className="mt-12">
              <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 lg:items-start">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative mb-5 aspect-[4/3] w-full max-w-[320px] overflow-hidden rounded-2xl border border-[#E6E3DC] bg-white">
                    <Image
                      src="/images/building.avif"
                      alt="豊洲プライムスクエア"
                      fill
                      sizes="(min-width: 1024px) 320px, min(320px, calc(100vw - 2.5rem))"
                      className="object-contain object-center p-2"
                      loading="lazy"
                    />
                  </div>
                  <div className="inline-flex rounded-full bg-[#0a8a85] px-5 py-2 text-sm font-bold text-white shadow-sm">
                    豊洲プライムスクエア1階
                  </div>
                  <p className="mt-4 text-sm leading-[2] text-[#6B6B68]">
                    豊洲駅6a出口から徒歩2分。建物に入ってから院内までの道順を写真でご確認いただけます。
                  </p>
                </div>

                <div>
                  <div className="mb-5">
                    <p className="mb-2 text-[11px] tracking-[0.3em] text-[#0a8a85]">ACCESS GUIDE</p>
                    <h2 className="font-serif text-2xl font-light text-[#2C2C2A] md:text-3xl">
                      写真で見るアクセス
                    </h2>
                  </div>

                  <div className="w-full md:overflow-x-auto md:pb-3" style={{ scrollbarWidth: 'none' }}>
                    <div className="grid gap-4 md:flex md:snap-x md:snap-mandatory md:items-start">
                      {accessRouteImages.map((image) => (
                        <figure
                          key={image.src}
                          className="w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#E6E3DC] md:w-[390px] md:shrink-0 md:snap-center"
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={1122}
                            height={image.height}
                            sizes="(min-width: 768px) 390px, calc(100vw - 2.5rem)"
                            className="block h-auto w-full"
                            loading="lazy"
                          />
                        </figure>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
