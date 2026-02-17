'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';

export function ConsultationSection() {
  return (
    <section className="bg-white py-[50px] pb-[40px]">
      {/* モバイル版 - Figmaデザイン完全一致 */}
      <div className="md:hidden flex justify-center px-[10px]">
        <div className="w-[370px] max-w-[370px] space-y-[30px]">
          {/* メインボックス - ライトブルー背景 */}
          <div className="relative w-[350px] h-[692.23px] bg-[#ebf5fa] rounded-tl-[20px]">
            {/* 青いグラデーション円形バッジ - 左上 */}
            <div
              className="absolute left-[25px] top-[-20px] w-[143px] h-[143px] rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(214.99deg, rgba(36, 140, 196, 0.4) 0%, rgb(36, 140, 196) 100%)',
              }}
            >
              <div className="text-white text-[13px] font-medium tracking-[1.28px] leading-[20px] text-center">
                <p className="mb-0">院長が直接</p>
                <p>お答えいたします</p>
              </div>
            </div>

            {/* タイトル部分 */}
            <div className="absolute left-[20px] top-[140.59px] w-[298.66px] border-b border-[#248cc4]">
              {/* Small text */}
              <div className="text-[#1e1e1e] text-[13.2px] font-medium leading-[19.77px] tracking-[1.713px] mb-3">
                <p>インプラントを検討されている方、治療に迷われている方へ</p>
              </div>
              {/* Main title */}
              <div className="text-[#248cc4] text-[27.3px] font-medium tracking-[2.184px] leading-[40.95px] pb-2">
                インプラント無料相談
              </div>
            </div>

            {/* 説明文 */}
            <div className="absolute left-[20px] right-[20px] top-[243.86px]">
              <div className="text-[#1e1e1e] text-[16px] font-medium leading-[32px] tracking-[1.28px] space-y-4" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
                <p>インプラントに興味はあるけれど、不安や疑問を抱えている方のために、当院では無料相談を行っています。</p>
                <p>治療内容や費用、期間などをわかりやすく丁寧にご説明し、ご自身に最適な治療を納得して選んでいただけるようしっかりサポートいたします。安心して治療を始められる環境をご用意しています。</p>
              </div>
            </div>

            {/* CTAボタン */}
            <div className="absolute left-[20px] right-[20px] top-[547.86px] space-y-[10px] flex flex-col items-center">
              {/* 電話ボタン */}
              <Link
                href="tel:045-370-7222"
                className="w-[195px] h-[57.19px] flex flex-col items-center justify-center rounded-sm"
                style={{
                  background: 'linear-gradient(to top, #8f7a26, #aa912d)',
                }}
              >
                <div className="text-white text-[11.7px] font-extrabold tracking-[1.28px] leading-[17.55px] text-center mb-1">
                  ご予約・お問い合わせ
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-[16px] h-[16px] text-white" fill="white" />
                  <div className="text-white text-[21.5px] font-bold tracking-[1.28px] leading-[32.17px]" style={{ fontFamily: 'Times New Roman, serif' }}>
                    045-370-7222
                  </div>
                </div>
              </Link>

              {/* WEB予約ボタン */}
              <Link
                href="/contact"
                className="w-[195px] h-[57.19px] flex flex-col items-center justify-center rounded-sm relative"
                style={{
                  background: 'linear-gradient(to top, #113161, #174180)',
                }}
              >
                <div className="text-white text-[11.7px] font-extrabold tracking-[1.28px] leading-[17.55px] text-center mb-1">
                  インプラントのご相談
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-white text-[9.8px] font-bold tracking-[1.28px] leading-[9.75px] border-r border-white/40 pr-3">
                    <p className="mb-0">24h</p>
                    <p>受付</p>
                  </div>
                  <Calendar className="w-[16px] h-[16px] text-white" />
                  <div className="text-white text-[19.5px] font-extrabold tracking-[1.28px] leading-[29.25px]">
                    WEB
                  </div>
                  <div className="text-white text-[17.6px] font-extrabold tracking-[1.28px] leading-[26.33px]">
                    予約
                  </div>
                </div>
              </Link>
            </div>

            {/* Consultation 装飾テキスト */}
            <div className="absolute left-[-18.59px] bottom-0 py-[54.85px]">
              <div className="text-[#248cc4] text-[21px] tracking-[1.28px] leading-[12.6px]" style={{ fontFamily: 'Times New Roman, serif' }}>
                Consultation
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* デスクトップ版 - 後で実装 */}
      <div className="hidden md:block px-4" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#ebf5fa] rounded-xl p-12 text-center">
            <div className="inline-block bg-gradient-to-br from-[#248cc4] to-[#1f7aa8] text-white rounded-full px-6 py-3 mb-6">
              <p className="text-sm font-medium">院長が直接お答えいたします</p>
            </div>
            <h2 className="text-3xl font-bold text-[#248cc4] mb-4">インプラント無料相談</h2>
            <p className="text-[#1e1e1e] leading-relaxed mb-8 max-w-2xl mx-auto">
              インプラントに興味はあるけれど、不安や疑問を抱えている方のために、当院では無料相談を行っています。
              治療内容や費用、期間などをわかりやすく丁寧にご説明し、ご自身に最適な治療を納得して選んでいただけるよう
              しっかりサポートいたします。安心して治療を始められる環境をご用意しています。
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="tel:045-370-7222"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-b from-[#aa912d] to-[#8f7a26] text-white rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                045-370-7222
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-b from-[#174180] to-[#113161] text-white rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
              >
                <Calendar className="w-5 h-5" />
                WEB予約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
