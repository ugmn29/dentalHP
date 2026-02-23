'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { PageImage } from '@/components/PageImage';

const treatmentMethods = [
  {
    badge: '治療期間を短縮',
    subtitle: '抜歯と同時にインプラントを埋入',
    title: '抜歯即時埋入',
    description: [
      '歯を抜いたその日にインプラントを埋め込む方法です。治療期間を短縮でき、抜歯後の骨吸収も抑えやすくなります。',
      '周囲の歯や歯茎に負担をかけず、自然な見た目と噛み心地を保ちながら治療できます。',
    ],
    imageId: 'treatment-method1',
    href: '/implant/immediate-placement',
  },
  {
    badge: 'インプラントを支える',
    subtitle: '骨の量を増やす治療',
    title: '骨造成治療',
    description: [
      '骨が不足している場合に、骨を増やしてインプラントを埋入できるようにする治療法です。',
      'サイナスリフトやGBR法など様々な方法があり、骨量が少ない方でもインプラント治療が可能になります。',
    ],
    imageId: 'treatment-method2',
    href: '/implant/bone-augmentation',
  },
  {
    badge: '入れ歯の悩みを解決',
    subtitle: 'インプラントで入れ歯を固定',
    title: 'オーバーデンチャー',
    description: [
      'インプラントで入れ歯を固定する方法です。通常の入れ歯よりも安定性が高く、しっかりと噛めるようになります。',
      '取り外しも可能なので、お手入れも簡単です。',
    ],
    imageId: 'treatment-method3',
    href: '/implant/overdenture',
  },
];

export function TreatmentMethodsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % treatmentMethods.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + treatmentMethods.length) % treatmentMethods.length);
  };

  return (
    <section className="relative bg-gradient-to-b from-[#248cc4] to-[#1a6a8f] py-[40px] pb-[50px] overflow-hidden" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
      {/* モバイル版 - Figmaデザイン完全一致 */}
      <div className="md:hidden">
        {/* タイトル */}
        <div className="max-w-[370px] mx-auto px-[10px] mb-[28.8px]">
          <div className="text-white text-[24px] font-medium leading-[36px] tracking-[1.92px]">
            <p className="mb-0">目的に合わせた</p>
            <p>インプラント治療法</p>
          </div>
        </div>

        {/* カルーセル */}
        <div className="relative mb-[10px]">
          <div className="overflow-hidden px-[20px]">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 360}px)` }}
            >
              {treatmentMethods.map((method, index) => (
                <div key={index} className="flex-shrink-0 w-[350px] pr-[10px]">
                  <div className="bg-white rounded-[20px] overflow-hidden shadow-[0px_0px_30px_0px_rgba(0,0,0,0.2)]">
                    {/* 画像 */}
                    <div className="relative h-[167.53px]">
                      <PageImage
                        path="/implant"
                        imageId={method.imageId}
                        alt={method.title}
                        className="w-full h-full object-cover"
                      />
                      {/* 青い円形バッジ */}
                      <div className="absolute top-4 left-4 w-[100px] h-[100px] rounded-full bg-[#5B9BD5] flex items-center justify-center text-white text-[13px] font-medium text-center leading-tight p-2">
                        {method.badge}
                      </div>
                    </div>

                    {/* コンテンツ */}
                    <div className="p-[15px] pb-[20px]">
                      {/* サブタイトル */}
                      <div
                        className="inline-block mb-[15.51px] py-[3.8px] px-[12.8px]"
                        style={{
                          background: 'linear-gradient(to left, rgba(183, 221, 242, 0) 0%, rgba(183, 221, 242, 0.02) 1%, #b7ddf2 30%)',
                        }}
                      >
                        <p className="text-[#1e1e1e] text-[16px] font-medium leading-[22.4px]">
                          {method.subtitle}
                        </p>
                      </div>

                      {/* タイトル */}
                      <div className="text-[#248cc4] text-[40px] font-medium leading-[41.43px] mb-[20px]">
                        {method.title}
                      </div>

                      {/* 説明文 */}
                      <div className="text-[#1e1e1e] text-[16px] font-medium leading-[32px] tracking-[1.28px] mb-[20px]">
                        {method.description.map((line, i) => (
                          <p key={i} className={i === method.description.length - 1 ? '' : 'mb-0'}>{line}</p>
                        ))}
                      </div>

                      {/* MOREボタン */}
                      <div className="flex justify-center px-[20px]">
                        <Link
                          href={method.href}
                          className="relative flex items-center justify-center bg-[#248cc4] text-white border border-[#248cc4] rounded-[195px] px-[22px] py-[12.375px] max-w-[280px] w-full hover:bg-[#1f7aa8] transition-colors"
                        >
                          <span className="text-[16px] font-medium tracking-[1.28px] leading-[24px]">
                            {method.title}
                          </span>
                          <ArrowRight className="absolute right-[12.5px] w-[14px] h-[14px]" strokeWidth={2.5} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 前/次ボタン */}
          <div className="flex gap-[10px] justify-end pr-[20px] mt-[10px]">
            <button
              onClick={prevSlide}
              className="w-[46px] h-[46px] rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="前へ"
            >
              <ChevronLeft className="w-6 h-6 text-white" strokeWidth={2.5} />
            </button>
            <button
              onClick={nextSlide}
              className="w-[46px] h-[46px] rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="次へ"
            >
              <ChevronRight className="w-6 h-6 text-white" strokeWidth={2.5} />
            </button>
          </div>

          {/* インジケーター */}
          <div className="flex gap-[5px] justify-center mt-4">
            {treatmentMethods.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-[12px] h-[12px] rounded-[6px] transition-colors ${
                  index === currentSlide ? 'bg-[#248cc4]' : 'bg-white'
                }`}
                aria-label={`スライド ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 静脈内鎮静法カード */}
        <div className="max-w-[370px] mx-auto px-[10px] mt-[31.2px] mb-[30px]">
          <Link
            href="/implant/iv-sedation"
            className="relative block rounded-xl overflow-hidden"
            style={{
              background: 'linear-gradient(to right, #aa912d, #8f7a26)',
            }}
          >
            {/* 白い円形バッジ */}
            <div
              className="absolute right-[10px] top-[-30px] w-[181.19px] h-[181.19px] rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(214.99deg, rgba(255, 255, 255, 0.7) 0%, rgb(255, 255, 255) 100%)',
              }}
            >
              <div className="text-[#544737] text-[13px] font-medium text-center leading-[17.88px] tracking-[1.3px]">
                <p className="mb-0">点滴麻酔で</p>
                <p className="mb-0">不安や恐怖心を</p>
                <p className="mb-0">やわらげ、</p>
                <p className="mb-0">眠っているような感覚で</p>
                <p>治療を受けられる</p>
              </div>
            </div>

            <div className="pt-[180px] pb-[30.5px] px-4 text-center text-white">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-px h-[20px] bg-white -rotate-[25deg]" />
                <p className="text-[13.6px] font-medium tracking-[1.2px] leading-[23px]">
                  手術が怖い・不安な方へ
                </p>
                <div className="w-px h-[20px] bg-white rotate-[25deg]" />
              </div>
              <div className="text-[24px] font-medium tracking-[1.2px] leading-[40.8px]">
                静脈内鎮静法（セデーション）
              </div>
            </div>

            <ArrowRight className="absolute bottom-[20px] right-[18px] w-[28px] h-[28px] text-white" strokeWidth={2} />
          </Link>
        </div>

        {/* 3つのリンクカード */}
        <div className="max-w-[370px] mx-auto px-[10px] space-y-[18.5px]">
          <Link
            href="/implant/cost"
            className="relative block h-[116.66px] bg-white/70 flex flex-col items-center justify-center rounded-lg hover:bg-white/80 transition-colors"
          >
            <div className="text-[#174180] text-[20px] font-medium tracking-[1.28px] leading-[30px]">
              料金表
            </div>
            <div className="text-[#248cc4] text-[16px] font-medium tracking-[1.28px] leading-[24px]">
              Fee
            </div>
            <ArrowRight className="absolute bottom-[14px] right-[12px] w-[24px] h-[24px] text-[#174180]" strokeWidth={2} />
          </Link>

          <Link
            href="/implant/maintenance"
            className="relative block h-[116.66px] bg-white/70 flex flex-col items-center justify-center rounded-lg hover:bg-white/80 transition-colors"
          >
            <div className="text-[#174180] text-[20px] font-medium tracking-[1.28px] leading-[30px]">
              治療後のメンテナンス
            </div>
            <div className="text-[#248cc4] text-[14.8px] font-medium tracking-[1.28px] leading-[24px]">
              Maintenance
            </div>
            <ArrowRight className="absolute bottom-[14px] right-[12px] w-[24px] h-[24px] text-[#174180]" strokeWidth={2} />
          </Link>

          <Link
            href="/implant/qa"
            className="relative block h-[116.66px] bg-white/70 flex flex-col items-center justify-center rounded-lg hover:bg-white/80 transition-colors"
          >
            <div className="text-[#174180] text-[20px] font-medium tracking-[1.28px] leading-[30px]">
              インプラント治療のＱ＆Ａ
            </div>
            <div className="text-[#248cc4] text-[16px] font-medium tracking-[1.28px] leading-[24px]">
              Q&A
            </div>
            <ArrowRight className="absolute bottom-[14px] right-[12px] w-[24px] h-[24px] text-[#174180]" strokeWidth={2} />
          </Link>
        </div>
      </div>

      {/* デスクトップ版 - 後で実装 */}
      <div className="hidden md:block px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-4xl font-bold text-center mb-12">
            目的に合わせたインプラント治療法
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {treatmentMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-[200px]">
                  <PageImage
                    path="/implant"
                    imageId={method.imageId}
                    alt={method.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 w-[120px] h-[120px] rounded-full bg-[#5B9BD5] flex items-center justify-center text-white text-sm font-medium text-center p-3">
                    {method.badge}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[#248cc4] text-3xl font-bold mb-4">{method.title}</h3>
                  <div className="text-[#1e1e1e] leading-relaxed mb-6">
                    {method.description.map((line, i) => (
                      <p key={i} className={i === method.description.length - 1 ? '' : 'mb-0'}>{line}</p>
                    ))}
                  </div>
                  <Link
                    href={method.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#248cc4] text-white rounded-full font-medium hover:bg-[#1f7aa8] transition-colors"
                  >
                    詳しく見る
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
