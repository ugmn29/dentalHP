'use client';

import React from 'react';
import { PageImage } from '@/components/PageImage';

export function ImplantAboutSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#248cc4] to-[#1a6a8f] py-[40px] overflow-hidden">
      {/* モバイル版 - Figmaデザイン完全一致 */}
      <div className="md:hidden flex justify-center px-[10px]">
        <div className="w-[370px] max-w-[370px] space-y-[13.1px]">
          {/* インプラント図解画像 */}
          <div className="flex justify-center">
            <div className="w-[296px] h-[157.48px]">
              <PageImage
                path="/implant"
                imageId="about-structure"
                alt="インプラント構造図"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* タイトル */}
          <div className="text-center">
            <div className="text-white text-[23.4px] font-medium leading-[35.1px] tracking-[1.872px]">
              <p className="mb-0">インプラント治療は、</p>
              <p>失った歯を補う"第二の永久歯"</p>
            </div>
          </div>

          {/* 説明文 */}
          <div className="pt-[0.93px]">
            <div className="text-white text-[16px] font-medium leading-[32px] tracking-[1.28px] space-y-4" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
              <p>インプラント治療は、失った歯を人工の歯根で支え、噛む力や見た目を取り戻せます。</p>
              <p>顎の骨に固定されたインプラントに人工歯を装着することで、まるで自分の歯のような自然な噛み心地と美しい見た目を再現できます。</p>
              <p>周囲の歯に負担をかけず、会話や食事も快適に楽しめます。</p>
            </div>
          </div>
        </div>
      </div>

      {/* デスクトップ版 */}
      <div className="hidden md:block px-4" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 左側: 画像 */}
            <div className="flex justify-center">
              <PageImage
                path="/implant"
                imageId="about-structure"
                alt="インプラント構造図"
                className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* 右側: テキスト */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                インプラント治療は、<br />
                失った歯を補う"第二の永久歯"
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  インプラント治療は、失った歯を人工の歯根で支え、噛む力や見た目を取り戻せます。
                </p>
                <p>
                  顎の骨に固定されたインプラントに人工歯を装着することで、
                  まるで自分の歯のような自然な噛み心地と美しい見た目を再現できます。
                </p>
                <p>
                  周囲の歯に負担をかけず、会話や食事も快適に楽しめます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
