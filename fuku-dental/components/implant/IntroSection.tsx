'use client';

import React from 'react';
import { PageImage } from '@/components/PageImage';

export function IntroSection() {
  return (
    <section className="relative py-10 flex flex-col items-center justify-center bg-gradient-to-r from-[#1A4E92] to-[#4A8FD8] overflow-hidden">
      {/* Background image from Figma */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='50' cy='50' r='40' stroke='%23FFFFFF' stroke-width='2'/%3E%3Cpath d='M50 10v80M10 50h80' stroke='%23FFFFFF' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '110.24% 110.24%',
        }}
      />

      <div className="relative flex flex-col items-start max-w-[370px] w-[370px] gap-[18.51px]">
        {/* Image */}
        <div className="flex flex-col items-start pl-[18.5px] w-full">
          <PageImage
            path="/implant"
            imageId="intro"
            alt="安全性と精度を高める先進インプラント技術"
            className="w-[246.05px] h-[287.14px] max-w-[259px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[20.79px] items-start w-full">
          {/* Heading */}
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col font-medium not-italic leading-[39px] text-[26px] text-white tracking-[2.08px] w-full whitespace-pre-wrap">
              <p className="mb-0">毎日をもっと快適に</p>
              <p className="mb-0">美しさと機能性を両立した</p>
              <p>インプラント</p>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col items-start w-full">
            <div className="font-medium not-italic leading-[32px] text-[16px] text-white tracking-[1.28px] w-full space-y-4" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
              <p>歯を失うと、噛みにくさや発音のしづらさだけでなく、食事や笑顔にも影響が出てきます。</p>
              <p>豊洲駅徒歩2分のF歯科・矯正歯科 豊洲プライムスクエア院では、患者様が自然で美しい口元と快適な生活を取り戻せるよう、安全性と精度にこだわったインプラント治療を行っています。</p>
              <p>CTによる正確な診断と綿密な治療計画のもと、神経や周囲組織への負担を最小限に抑えた手術を実現。</p>
              <p>見た目の美しさと機能性を両立し、自信の持てる笑顔をサポートいたします。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
