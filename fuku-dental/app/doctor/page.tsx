import type { Metadata } from 'next';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageImage } from '@/components/PageImage';

export const metadata: Metadata = {
  title: 'ドクター紹介｜院長 福永真大｜Fデンタルオフィス 豊洲プライムスクエア院',
  description: '豊洲のFデンタルオフィス 豊洲プライムスクエア院の院長・福永真大をご紹介します。経歴、専門分野、診療への想いを掲載しています。',
  keywords: '豊洲 歯医者 院長,ドクター紹介,福永真大,Fデンタルオフィス 豊洲プライムスクエア院',
  openGraph: {
    title: 'ドクター紹介｜院長 福永真大｜Fデンタルオフィス 豊洲プライムスクエア院',
    description: '院長・福永真大の経歴、専門分野、診療への想いをご紹介します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/doctor',
    siteName: 'Fデンタルオフィス 豊洲プライムスクエア院',
  },
  alternates: {
    canonical: 'https://fshika.com/doctor',
  },
};

const careerItems = [
  '大阪大学歯学部 卒業',
  '医療法人同仁会ワタナベ歯科医院にて研修医指導医・診療主任を歴任',
  '駒沢公園通り西垣歯科・矯正歯科 副院長',
  '小児歯科部門の立ち上げ',
  'Fデンタルオフィス 豊洲プライムスクエア院 開業',
  '咬合育成研究会監修 生活習慣改善アプリの開発',
] as const;

const profileCards = [
  {
    label: '専門分野',
    body: '矯正歯科、小児歯科、予防歯科、審美歯科',
  },
  {
    label: '所属学会・資格',
    body: '日本小児歯科学会 / 日本矯正歯科学会 / 日本審美歯科学会 / 歯科医師免許',
  },
] as const;

export default function DoctorPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://fshika.com' },
      { '@type': 'ListItem', position: 2, name: 'ドクター紹介', item: 'https://fshika.com/doctor' },
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
              <p className="mb-4 text-[11px] tracking-[0.3em] text-[#0a8a85]">DOCTOR</p>
              <h1 className="font-serif text-4xl font-light text-[#2C2C2A] md:text-5xl">
                ドクター紹介
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-[320px_1fr] md:gap-14 lg:gap-16">
              <div>
                <div className="mx-auto max-w-[320px] overflow-hidden rounded-2xl border border-[#E6E3DC] bg-white">
                  <PageImage
                    path="/homepage"
                    imageId="doctor"
                    alt="院長 福永真大"
                    className="aspect-[3/4] w-full object-cover"
                    priority
                  />
                </div>
                <div className="mt-5 text-center">
                  <p className="text-xs tracking-[0.22em] text-[#6B6B68]">DIRECTOR / DENTIST</p>
                  <p className="mt-2 font-serif text-2xl text-[#2C2C2A]">福永 真大</p>
                  <p className="mt-1 text-sm text-[#6B6B68]">Masahiro Fukunaga</p>
                </div>
              </div>

              <div>
                <div className="mb-8 border-b border-[#E6E3DC] pb-8">
                  <h2 className="font-serif text-3xl leading-[1.6] text-[#2C2C2A] md:text-4xl">
                    対症療法ではなく、
                    <br />
                    <span className="italic text-[#0a8a85]">原因療法</span>を。
                  </h2>
                  <p className="mt-6 text-sm leading-[2.1] text-[#6B6B68] md:text-base">
                    父から受け継いだ口腔育成への想い、臨床で培った技術、そして患者様に伝わる情報発信力。
                    この3つを軸に、お子様の口腔育成から大人の矯正・審美治療まで、原因にアプローチする根本治療を提供します。
                  </p>
                </div>

                <div className="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-[1.35fr_1fr]">
                  <section className="rounded-2xl border border-[#E6E3DC] bg-white p-6 md:p-7">
                    <p className="mb-5 text-xs font-medium tracking-[0.22em] text-[#0a8a85]">CAREER</p>
                    <ul className="space-y-2.5 text-sm leading-[1.9] text-[#6B6B68] md:text-[15px]">
                      {careerItems.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span className="mt-[0.7em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0a8a85]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <div className="space-y-5">
                    {profileCards.map((card) => (
                      <section key={card.label} className="rounded-2xl border border-[#E6E3DC] bg-white p-6 md:p-7">
                        <p className="mb-4 text-xs font-medium tracking-[0.22em] text-[#0a8a85]">{card.label}</p>
                        <p className="text-sm leading-[2] text-[#6B6B68] md:text-[15px]">{card.body}</p>
                      </section>
                    ))}
                  </div>
                </div>

                <section className="rounded-2xl border border-[#E6E3DC] bg-[#F5F2EE] p-6 md:p-8">
                  <h2 className="font-serif text-2xl leading-[1.7] text-[#2C2C2A] md:text-3xl">
                    患者様に納得していただける診療を
                  </h2>
                  <div className="mt-5 space-y-5 text-sm leading-[2.1] text-[#6B6B68] md:text-base">
                    <p>
                      私が大切にしているのは、「症状を治す」のではなく「原因を取り除く」という考え方です。
                      呼吸、姿勢、食習慣、噛み癖など、症状の奥にある原因まで確認し、再発しにくいお口づくりを目指します。
                    </p>
                    <p>
                      大阪大学歯学部を卒業後、一般歯科・インプラント・矯正・審美治療など幅広い症例を経験してきました。
                      その経験をもとに、患者様一人ひとりに合った治療計画をわかりやすくご説明します。
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
