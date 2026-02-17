'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  ToothPainIcon,
  WorriedFaceIcon,
  ExtractionToolIcon,
  DentistIcon,
  ToothQuestionIcon,
  DentureIcon,
  ToothShieldIcon,
  WalletIcon,
} from './ProblemIcons';

const problems = [
  {
    icon: ToothPainIcon,
    label: (
      <>
        手術による<br />
        <span className="text-[#1c87bd]">腫れ</span>や<span className="text-[#1c87bd]">痛み</span>が心配
      </>
    ),
    href: '/implant/iv-sedation',
  },
  {
    icon: WorriedFaceIcon,
    label: (
      <>
        <span className="text-[#1c87bd]">骨が足りない・少ない</span><br />
        と言われた
      </>
    ),
    href: '/implant/bone-augmentation',
  },
  {
    icon: ExtractionToolIcon,
    label: (
      <>
        <span className="text-[#1c87bd]">抜歯をしたほうが</span><br />
        いいと言われた
      </>
    ),
    href: '/implant/immediate-placement',
  },
  {
    icon: DentistIcon,
    label: (
      <>
        他院で<span className="text-[#1c87bd]">インプラントは</span><br />
        <span className="text-[#1c87bd]">できない</span>と言われた
      </>
    ),
    href: '/implant/reason',
  },
  {
    icon: ToothQuestionIcon,
    label: (
      <>
        <span className="text-[#1c87bd]">どの治療法がいい</span>のか<br />
        分からない
      </>
    ),
    href: '/implant/comparison',
  },
  {
    icon: DentureIcon,
    label: (
      <>
        入れ歯がよく<span className="text-[#1c87bd]">外れて</span><br />
        <span className="text-[#1c87bd]">安定しない</span>
      </>
    ),
    href: '/implant/overdenture',
  },
  {
    icon: ToothShieldIcon,
    label: (
      <>
        インプラントって<br />
        本当に<span className="text-[#1c87bd]">安全</span>なの？
      </>
    ),
    href: '/implant/safety',
  },
  {
    icon: WalletIcon,
    label: (
      <>
        <span className="text-[#1c87bd]">治療費</span>は<br />
        どれくらいかかるの？
      </>
    ),
    href: '/implant/cost',
  },
];

export function ProblemGrid() {
  return (
    <section className="relative py-7 md:py-12 overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1600"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      </div>

      {/* モバイル版 - Figmaと完全一致 */}
      <div className="md:hidden px-[10px] relative" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
        <div className="w-full max-w-[370px] mx-auto">
          {/* タイトル部分 */}
          <div className="relative mb-[28.8px]">
            {/* Small text */}
            <p className="text-center text-white text-[14px] font-medium leading-[21px] mb-3">
              インプラントをご検討されてる方、<br />歯を失ってしまった方
            </p>

            {/* ゴールドの角丸背景 */}
            <div
              className="relative w-full h-[141.8px] rounded-[195px] flex flex-col items-center justify-center overflow-hidden px-4"
              style={{ backgroundColor: '#aa912d' }}
            >
              {/* タイトルテキスト - simplified */}
              <div className="text-center font-serif">
                <div className="text-white font-bold mb-1">
                  <span className="text-[24px] leading-[29px]">こんな</span>
                  <span className="text-[28px] leading-[33px] mx-1" style={{ textEmphasis: 'filled dot', textEmphasisPosition: 'over' }}>お悩み</span>
                  <span className="text-[24px] leading-[29px]">や</span>
                </div>
                <div className="text-white font-bold">
                  <span className="text-[28px] leading-[33px]" style={{ textEmphasis: 'filled dot', textEmphasisPosition: 'over' }}>ご不安</span>
                  <span className="text-[24px] leading-[29px]">ございませんか？</span>
                </div>
              </div>
            </div>
          </div>

          {/* カードグリッド - 2列×4行 */}
          <div className="grid grid-cols-2 gap-[15px]">
            {problems.map((problem, i) => (
              <Link
                key={i}
                href={problem.href}
                className="group relative bg-white rounded-[20px] shadow-sm hover:shadow-md transition-shadow"
                style={{
                  width: '177.5px',
                  height: '180px',
                }}
              >
                {/* アイコン */}
                <div className="absolute flex items-center justify-center" style={{ left: '62.125px', top: '35.015px', width: '53.25px', height: '53.97px' }}>
                  <problem.icon className="w-full h-full text-[#1c87bd]" />
                </div>

                {/* テキスト */}
                <div className="absolute flex items-center justify-center text-center" style={{ top: '102.985px', height: '42px', left: 0, right: 0 }}>
                  <span className="text-[#1e1e1e] text-[14px] font-medium leading-[21px] px-3">
                    {problem.label}
                  </span>
                </div>

                {/* 矢印ボタン */}
                <div
                  className="absolute rounded-full flex items-center justify-center group-hover:bg-[#926f1e] transition-colors"
                  style={{
                    left: '147.5px',
                    top: '150px',
                    width: '35px',
                    height: '35px',
                    backgroundColor: '#aa912d',
                  }}
                >
                  <ArrowRight className="w-[16px] h-[16px] text-white" strokeWidth={2.5} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* デスクトップ版 - 後で実装 */}
      <div className="hidden md:block px-4 relative" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-3 font-serif">
            こんな<span style={{ textEmphasis: 'filled dot', textEmphasisPosition: 'over' }}>お悩み</span>や<span style={{ textEmphasis: 'filled dot', textEmphasisPosition: 'over' }}>ご不安</span>ございませんか？
          </h2>
          <p className="text-center text-white/90 mb-10 text-sm">
            一つでも当てはまる方は、インプラント治療が解決策になるかもしれません。
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((p, i) => (
              <Link
                key={i}
                href={p.href}
                className="group flex flex-col items-center gap-4 p-6 rounded-xl border border-gray-100 bg-white hover:border-[#248cc4]/30 hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-[#248cc4]/10 flex items-center justify-center group-hover:bg-[#248cc4]/20 transition">
                  <p.icon className="w-8 h-8 text-[#248cc4]" />
                </div>
                <span className="text-sm font-semibold text-[#1e1e1e] text-center leading-snug">
                  {p.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
