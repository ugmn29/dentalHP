"use client";

import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageImage } from '@/components/PageImage';

const ACCENT = '#0abab5';
const ACCENT_DARK = '#0a8a85';
const PAGE_BG = '#FAFAF7';
const SURFACE = '#FFFFFF';
const TEXT = '#2C2C2A';
const TEXT_MUTED = '#6B6B68';
const LINE = '#E6E3DC';

const facilities = [
  {
    id: "01",
    title: "プライバシーに配慮した",
    highlight: "完全個室を完備",
    summary: "周りを気にせず相談できる診療環境",
    details: [
      "診療室は個室空間として整え、周囲を気にせず治療やご相談を受けていただけます。",
      "お口のお悩みや治療内容など、話しにくいことも落ち着いて相談しやすい環境です。",
      "精密機器を備えながらも、患者様が安心して過ごせる清潔な空間づくりを大切にしています。"
    ],
    imageId: "private-room",
    imageAlt: "完全個室を完備した豊洲の歯科診療室"
  },
  {
    id: "02",
    title: "お子様にも配慮した",
    highlight: "天井テレビ付き診療室",
    summary: "親子で通いやすい診療環境",
    details: [
      "診療中もお子様がリラックスして過ごせるよう、天井テレビを備えた診療室をご用意しています。",
      "キッズスペースではなく、診療中の不安を和らげるための設備として活用します。",
      "保護者の方にも安心してご相談いただけるよう、親子で通いやすい環境づくりを心がけています。"
    ],
    imageId: "ceiling-tv",
    imageAlt: "お子様にも配慮した天井テレビ付き診療室"
  },
  {
    id: "03",
    title: "立体的に確認できる",
    highlight: "歯科用CT",
    summary: "精密な診断と治療計画のために",
    details: [
      "歯や顎の骨、神経の位置などを3次元で確認できる歯科用CTを導入しています。",
      "インプラント、親知らず、根管治療など、精密な診断が必要な治療で活用します。",
      "事前に状態を把握することで、より安全性に配慮した治療計画につなげます。"
    ],
    imageId: "dental-ct",
    imageAlt: "精密診断に用いる歯科用CT"
  },
  {
    id: "04",
    title: "細部まで確認する",
    highlight: "マイクロスコープ・拡大鏡",
    summary: "できるだけ精密な処置のために",
    details: [
      "肉眼では見えにくい細かな部分を拡大して確認しながら診療を行います。",
      "むし歯治療、根管治療、セラミック治療など、精度が求められる治療で役立ちます。",
      "歯をできるだけ残す治療を行うため、必要な部分を丁寧に見極めます。"
    ],
    imageId: "microscope",
    imageAlt: "マイクロスコープと拡大鏡による精密治療"
  },
  {
    id: "05",
    title: "負担の少ない型取りに役立つ",
    highlight: "3Dスキャナー",
    summary: "お口の状態をデジタルで記録",
    details: [
      "お口の中をデジタルで読み取り、歯並びや噛み合わせの状態を確認します。",
      "従来の型取りが苦手な方にも配慮し、治療説明や経過確認に活用します。",
      "矯正相談や補綴治療などで、患者様にも状態を見ていただきながら説明できます。"
    ],
    imageId: "3d-scanner",
    imageAlt: "口腔内3Dスキャナー"
  },
  {
    id: "06",
    title: "状態を一緒に確認できる",
    highlight: "口腔内写真・ペン型カメラ",
    summary: "見える説明で不安を減らす",
    details: [
      "むし歯や歯ぐきの状態などを写真やカメラで記録し、画面で共有します。",
      "治療前後の変化や、今後注意したいポイントを視覚的に説明します。",
      "患者様が納得して治療を選べるよう、わかりやすい説明を大切にしています。"
    ],
    imageId: "intraoral-camera",
    imageAlt: "口腔内写真とペン型カメラによる説明"
  },
  {
    id: "07",
    title: "衛生管理を徹底した",
    highlight: "滅菌室・衛生管理設備",
    summary: "安心・安全な治療環境",
    details: [
      "治療に使用する器具は、滅菌処理や衛生管理を徹底しています。",
      "使い捨て器具も適切に取り入れ、感染対策に配慮した診療環境を整えています。",
      "患者様に安心して治療を受けていただけるよう、院内の清潔管理を大切にしています。"
    ],
    imageId: "sterilization",
    imageAlt: "滅菌室と衛生管理設備"
  },
  {
    id: "08",
    title: "治療中の負担を抑える",
    highlight: "痛みに配慮した治療機器",
    summary: "歯科治療が苦手な方にも配慮",
    details: [
      "表面麻酔や電動麻酔器などを用い、麻酔時の痛みに配慮します。",
      "治療が苦手な方にも、できるだけ不安や負担を抑えた診療を心がけています。",
      "処置内容に応じて、患者様の状態を確認しながら丁寧に進めます。"
    ],
    imageId: "pain-care",
    imageAlt: "痛みに配慮した治療機器"
  },
  {
    id: "09",
    title: "じっくり相談できる",
    highlight: "カウンセリング環境",
    summary: "納得いただける治療のために",
    details: [
      "治療前にお悩みやご希望を伺い、必要な検査内容や治療方針を説明します。",
      "写真やデジタル資料を使いながら、治療の選択肢をできるだけわかりやすくお伝えします。",
      "疑問や不安を残したまま進めないよう、相談しやすい雰囲気づくりを大切にしています。"
    ],
    imageId: "counseling",
    imageAlt: "じっくり相談できるカウンセリング環境"
  }
] as const;

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#0F6E56] selection:text-white" style={{ background: PAGE_BG, color: TEXT }}>
      <Header />

      <main>
        <section className="px-5 py-16 md:py-24" style={{ background: PAGE_BG }}>
          <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-[11px] tracking-[0.3em]" style={{ color: ACCENT_DARK }}>FACILITIES</p>
              <h1 className="font-serif text-4xl font-light leading-[1.35] md:text-5xl" style={{ color: TEXT }}>
                院内設備
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-sm leading-[2.1] md:text-base" style={{ color: TEXT_MUTED }}>
                歯科用CT・マイクロスコープ・3Dスキャナーなどを活用し、
                精密な診断とわかりやすい説明を大切にしています。
              </p>
          </div>
        </section>

        <section className="px-5 pb-24 md:pb-32" style={{ background: PAGE_BG }}>
          <div className="mx-auto max-w-6xl">
            <div className="space-y-20 md:space-y-28">
              {facilities.map((facility, index) => (
                <article
                  key={facility.id}
                  className={`group flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-10 lg:gap-16`}
                >
                  <div className="hidden lg:block lg:w-1/2">
                    <div className="overflow-hidden rounded-[32px] transition-transform duration-700 ease-out group-hover:scale-[1.02]" style={{ border: `1px solid ${LINE}` }}>
                      <PageImage
                        path="/facilities"
                        imageId={facility.imageId}
                        alt={facility.imageAlt}
                        className="aspect-[16/10] w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="relative flex w-full flex-col gap-6 lg:w-1/2">
                    <div className="relative">
                      <span
                        className="pointer-events-none absolute -left-2 -top-12 select-none font-serif text-[7rem] font-semibold leading-none"
                        style={{ color: `${ACCENT}12`, letterSpacing: 0 }}
                      >
                        {facility.id}
                      </span>
                      <p className="relative mb-3 text-[11px] tracking-[0.25em]" style={{ color: ACCENT_DARK }}>
                        EQUIPMENT {facility.id}
                      </p>
                      <h2 className="relative font-serif" style={{ color: TEXT }}>
                        <span className="mb-2 block text-base font-medium tracking-widest" style={{ color: TEXT_MUTED }}>
                          {facility.title}
                        </span>
                        <span className="block text-3xl leading-[1.3] md:text-4xl lg:text-5xl">
                          {facility.highlight}
                        </span>
                        <span className="mt-5 block h-px w-16" style={{ background: ACCENT }} />
                      </h2>
                    </div>

                    <div className="w-full lg:hidden">
                      <div className="overflow-hidden rounded-[24px]" style={{ border: `1px solid ${LINE}` }}>
                        <PageImage
                          path="/facilities"
                          imageId={facility.imageId}
                          alt={facility.imageAlt}
                          className="aspect-[16/10] w-full object-cover"
                        />
                      </div>
                    </div>

                    <p className="font-serif text-lg leading-[1.9] md:text-xl" style={{ color: TEXT }}>
                      {facility.summary}
                    </p>

                    <div className="space-y-3 text-sm leading-[2] md:text-base" style={{ color: TEXT_MUTED }}>
                      {facility.details.map((detail) => (
                        <p key={detail} className="flex gap-3">
                          <span className="mt-[0.85em] h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: ACCENT_DARK }} />
                          <span>{detail}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:py-24" style={{ background: SURFACE, borderTop: `1px solid ${LINE}` }}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] tracking-[0.3em]" style={{ color: ACCENT_DARK }}>STERILIZATION</p>
            <h2 className="font-serif text-3xl font-light md:text-4xl" style={{ color: TEXT }}>
              清潔で安心できる診療環境を整えています
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-[2.1] md:text-base" style={{ color: TEXT_MUTED }}>
              器具の滅菌処理、使い捨て器具の活用、院内の衛生管理を徹底し、
              患者様が安心して治療を受けられる環境づくりを大切にしています。
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
