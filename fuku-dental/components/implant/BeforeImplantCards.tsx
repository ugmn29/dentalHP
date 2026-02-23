'use client';

import React from 'react';
import Link from 'next/link';
import { PageImage } from '@/components/PageImage';

export function BeforeImplantCards() {
  return (
    <section className="bg-white py-[0.01px]">
      {/* モバイル版 - Figmaデザイン完全一致 */}
      <div className="md:hidden">
        {/* 抜歯を勧められた方へ */}
        <Link
          href="/implant/immediate-placement"
          className="relative block w-full overflow-hidden"
        >
          {/* 背景画像 */}
          <div className="absolute inset-0">
            <PageImage
              path="/implant"
              imageId="before-extraction"
              alt="抜歯を勧められた方へ"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#248cc4]/40" />
          </div>

          {/* コンテンツ */}
          <div className="relative flex flex-col items-center justify-center p-[20px]">
            {/* タイトル */}
            <div className="mb-[4.68px]">
              <p className="text-white text-[23.4px] font-medium tracking-[1.28px] leading-[46.8px] text-center whitespace-nowrap">
                抜歯を勧められた方へ
              </p>
            </div>

            {/* 右下の円形マスクオーバーレイ */}
            <div className="absolute bottom-[-0.01px] right-0 w-[90px] h-[90px] rounded-full bg-white/20" />

            {/* 白いオーバーレイボックス */}
            <div className="relative bg-white/85 p-[20px] w-full">
              <div className="absolute inset-[5px] border border-[#248cc4]" />

              <div className="relative z-10 flex flex-col gap-[15.5px]">
                {/* タイトル */}
                <div className="px-[69.17px]">
                  <div className="text-[#248cc4] text-[20px] font-medium tracking-[1.28px] leading-[29px] text-center">
                    <p className="mb-0">抜歯の前に、</p>
                    <p>歯を残す選択肢を</p>
                  </div>
                </div>

                {/* 説明文 */}
                <div className="text-[#1e1e1e] text-[16px] font-medium leading-[32px] tracking-[1.28px]" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
                  <p>当院では、重度のむし歯や歯周病でも、まずは歯を残せるかどうかを検討いたします。歯根端切除術や歯周組織再生療法など、できる限り歯を残す治療を優先的に行います。</p>
                </div>
              </div>
            </div>

            {/* 右下の斜め装飾線 */}
            <div className="absolute bottom-[19.99px] right-[17px] flex h-[6.003px] w-[146.003px] items-center justify-center">
              <div className="flex-none scale-y-[0.71] skew-x-[45deg]">
                <div className="border-b border-r border-white h-[8.49px] w-[140px]" />
              </div>
            </div>
          </div>
        </Link>

        {/* インプラントを断られた方へ */}
        <Link
          href="/implant/bone-augmentation"
          className="relative block w-full overflow-hidden"
        >
          {/* 背景画像 */}
          <div className="absolute inset-0">
            <PageImage
              path="/implant"
              imageId="before-bone"
              alt="インプラントを断られた方へ"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#137d9e]/50" />
          </div>

          {/* コンテンツ */}
          <div className="relative flex flex-col items-center justify-center pt-[20px] pb-[20.01px] px-[20px]">
            {/* タイトル */}
            <div className="mb-[4.67px]">
              <p className="text-white text-[23.4px] font-medium tracking-[1.28px] leading-[46.8px] text-center whitespace-nowrap">
                インプラントを断られた方へ
              </p>
            </div>

            {/* 右下の円形マスクオーバーレイ */}
            <div className="absolute bottom-0 right-0 w-[90px] h-[90px] rounded-full bg-white/20" />

            {/* 白いオーバーレイボックス */}
            <div className="relative bg-white/85 p-[20px] w-full mb-[-0.01px]">
              <div className="absolute inset-[5px] border border-[#137d9e]" />

              <div className="relative z-10 flex flex-col gap-[15.5px]">
                {/* タイトル */}
                <div className="px-[25.92px]">
                  <div className="text-[#137d9e] text-[20px] font-medium tracking-[1.28px] leading-[29px] text-center">
                    <p className="mb-0">"できない"と諦める前に、</p>
                    <p>もう一度ご相談ください</p>
                  </div>
                </div>

                {/* 説明文 */}
                <div className="text-[#1e1e1e] text-[16px] font-medium leading-[32px] tracking-[1.28px]" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
                  <p>他院で「骨が足りない」「全身疾患がある」「重度の歯周病」などの理由でインプラントを断られた方も、当院では治療できる可能性があります。精密検査をもとに、安全で最適な治療法をご提案します。</p>
                </div>
              </div>
            </div>

            {/* 右下の斜め装飾線 */}
            <div className="absolute bottom-[20px] right-[17px] flex h-[6.003px] w-[146.003px] items-center justify-center">
              <div className="flex-none scale-y-[0.71] skew-x-[45deg]">
                <div className="border-b border-r border-white h-[8.49px] w-[140px]" />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* デスクトップ版 - 後で実装 */}
      <div className="hidden md:block px-4 py-12" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {/* 抜歯を勧められた方へ */}
          <Link
            href="/implant/immediate-placement"
            className="group relative block overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="absolute inset-0">
              <PageImage
                path="/implant"
                imageId="before-extraction"
                alt="抜歯を勧められた方へ"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#248cc4]/40" />
            </div>
            <div className="relative p-8 min-h-[400px] flex flex-col justify-between">
              <h3 className="text-white text-2xl font-bold mb-4">抜歯を勧められた方へ</h3>
              <div className="bg-white/90 p-6 rounded-lg">
                <h4 className="text-[#248cc4] text-xl font-bold mb-3">抜歯の前に、歯を残す選択肢を</h4>
                <p className="text-[#1e1e1e] leading-relaxed">
                  当院では、重度のむし歯や歯周病でも、まずは歯を残せるかどうかを検討いたします。歯根端切除術や歯周組織再生療法など、できる限り歯を残す治療を優先的に行います。
                </p>
              </div>
            </div>
          </Link>

          {/* インプラントを断られた方へ */}
          <Link
            href="/implant/bone-augmentation"
            className="group relative block overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="absolute inset-0">
              <PageImage
                path="/implant"
                imageId="before-bone"
                alt="インプラントを断られた方へ"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#137d9e]/50" />
            </div>
            <div className="relative p-8 min-h-[400px] flex flex-col justify-between">
              <h3 className="text-white text-2xl font-bold mb-4">インプラントを断られた方へ</h3>
              <div className="bg-white/90 p-6 rounded-lg">
                <h4 className="text-[#137d9e] text-xl font-bold mb-3">"できない"と諦める前に、もう一度ご相談ください</h4>
                <p className="text-[#1e1e1e] leading-relaxed">
                  他院で「骨が足りない」「全身疾患がある」「重度の歯周病」などの理由でインプラントを断られた方も、当院では治療できる可能性があります。精密検査をもとに、安全で最適な治療法をご提案します。
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
