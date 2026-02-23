'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageImage } from '@/components/PageImage';

interface ReasonItem {
  title: string;
  verticalTitle: string;
  verticalTitleSmall?: string; // 上部の小さいテキスト
  isGoldColor?: boolean; // 上部テキストをゴールド色にするか
  description: string[];
  imageId: string;
  href: string;
  verticalBandHeight?: string; // 縦書きタイトルの白い帯の高さ（カードごとに異なる）
  verticalTitleSize?: string; // 縦書きタイトルのカスタムサイズ
  swapBands?: boolean; // 左右の帯を入れ替えるか
}

const reasons: ReasonItem[] = [
  {
    title: '500症例以上の豊富なインプラント症例',
    verticalTitle: '豊富なインプラント症例',
    verticalTitleSmall: '500症例以上の',
    isGoldColor: true,
    verticalBandHeight: 'h-[153.75px]',
    description: [
      '当院の院長は、これまでに500症例以上のインプラント治療に携わってきた経験をもとに、あらゆる症例にも的確に対応しております。骨量が少ない方や難症例にも、精密な診断とシミュレーションを行い、安全で確実な治療を実現。経験に裏づけられた確かな技術で、長期的に安定した結果を目指しています。',
    ],
    imageId: 'reason1',
    href: '/implant/reason',
  },
  {
    title: '顔全体を撮影できる高精度な低線量CT',
    verticalTitle: '顔全体を撮影できる',
    verticalTitleSmall: '低線量CT',
    isGoldColor: true,
    verticalBandHeight: 'h-[113.91px]',
    swapBands: true,
    description: [
      '当院では、顔全体を鮮明に撮影できる高精度な低線量CTを導入しています。上顎洞の詳細な状態や自然孔の位置まで正確に把握できるため、サイナスリフト（上顎洞底挙上術）などの高度な治療においても、より安全で確実な施術が可能です。このような先進的な設備を導入している歯科医院でのインプラント治療をお勧めします。',
    ],
    imageId: 'reason2',
    href: '/implant/safety',
  },
  {
    title: '信頼できる高品質なインプラントメーカーの採用',
    verticalTitle: 'インプラントメーカーの採用',
    verticalTitleSmall: '信頼できる高品質な',
    isGoldColor: true,
    verticalBandHeight: 'h-[109.16px]',
    verticalTitleSize: 'text-[18px]',
    description: [
      '当院では、世界で最も信頼されているストローマンインプラントを採用しています。ストローマンは世界シェアNo.1の最もメジャーなインプラントメーカーであり、国内外のほとんどの歯科医院で採用されています。そのため、引っ越しや転勤などで当院に通えなくなった場合でも、転居先の歯科医院で継続的なメンテナンスやトラブル対応が可能です。生涯にわたって安心してご使用いただけます。',
    ],
    imageId: 'reason3',
    href: '/implant/safety',
  },
  {
    title: '一つの医院で全ての治療が完結',
    verticalTitle: '全ての治療が完結',
    verticalTitleSmall: '一つの医院で',
    isGoldColor: true,
    verticalBandHeight: 'h-[173.8px]',
    description: [
      '当院では、これまでの豊富な全顎的な治療経験により、矯正治療をはじめとする様々な治療と同時にインプラント治療を提案することができます。複数の歯科医院を転々とする必要がなく、すべての治療を一つの医院で完結できるため、患者様の負担を大幅に軽減。治療計画も一貫して管理できるため、より効率的で質の高い治療を実現できます。',
    ],
    imageId: 'reason4',
    href: '/implant/safety',
  },
  {
    title: 'ガイデント認定医が在籍',
    verticalTitle: '認定医が在籍',
    verticalTitleSmall: 'ガイデント',
    isGoldColor: true,
    verticalBandHeight: 'h-[193.59px]',
    description: [
      '当院の院長はガイデント認定医です。ガイデントは、インプラント治療の品質と安全性を保証する第三者認証機関であり、厳しい基準をクリアした歯科医院のみが認定されます。この保証制度の大きな特徴は、万が一引っ越しや転勤などで当院に通えなくなった場合でも、全国のガイデント認定医院で保証が引き続き有効となる点です。どこに行っても安心して長期的にインプラントをお使いいただけます。',
    ],
    imageId: 'reason5',
    href: '/implant/safety',
  },
  {
    title: '麻酔専門医が在籍',
    verticalTitle: '専門医が在籍',
    verticalTitleSmall: '麻酔',
    isGoldColor: true,
    verticalBandHeight: 'h-[133.7px]',
    description: [
      '当院には麻酔専門医が在籍しているため、静脈内鎮静法を用いたインプラント手術を行うことができます。静脈内鎮静法は、点滴から鎮静剤を投与することで、うとうとした状態で治療を受けられる方法です。痛みや恐怖心を感じることなく、リラックスした状態で手術を受けていただけるため、歯科治療に不安を感じる方にも安心して治療を受けていただけます。',
    ],
    imageId: 'reason6',
    href: '/implant/safety',
  },
];

export function SixReasons() {
  return (
    <section className="bg-[#ebf5fa] py-[20px] pb-[60px] md:pb-[40px]">
      {/* モバイル版 - Figmaデザイン完全一致 */}
      <div className="md:hidden px-[10px]">
        {/* タイトル部分 */}
        <div className="relative w-full h-[130px] mb-[10px]" style={{ fontFamily: 'YuMincho, "Yu Mincho", serif' }}>
          <div className="absolute left-0 top-[20px] text-[#1e1e1e] text-[19.4px] font-medium tracking-[2.88px] leading-[29px]">
            当院が選ばれる
          </div>
          <div
            className="absolute left-0 top-[60px] text-[112.5px] font-medium leading-[90px]"
            style={{
              background: 'linear-gradient(to top, #a0d5f2, #248cc4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            6
          </div>
          <div className="absolute left-[59.14px] top-[86px] text-[#1e1e1e] text-[36px] font-medium tracking-[2.88px] leading-[54px]">
            つの
          </div>
          <div className="absolute left-[138.59px] top-[83px] text-[#aa912d] text-[45px] font-medium tracking-[2.88px] leading-[67.5px]">
            理由
          </div>
        </div>

        {/* 6つのカード */}
        <div className="space-y-[10px]">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} index={index} />
          ))}
        </div>
      </div>

      {/* デスクトップ版 - Figmaデザイン完全一致 */}
      <div className="hidden md:block">
        <div className="max-w-[1200px] mx-auto px-8">
          {/* タイトルセクション */}
          <div className="relative h-[200px] mb-16" style={{ fontFamily: 'YuMincho, "Yu Mincho", serif' }}>
            {/* 「当院が選ばれる」テキスト */}
            <div className="absolute left-0 top-[20px] text-[#1e1e1e] text-[28px] font-medium tracking-[3px] leading-[42px]">
              当院が選ばれる
            </div>

            {/* 「6」のグラデーション数字 */}
            <div
              className="absolute left-0 top-[80px] text-[150px] font-medium leading-none"
              style={{
                background: 'linear-gradient(to top, #a0d5f2, #248cc4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              6
            </div>

            {/* 「つの」テキスト */}
            <div className="absolute left-[100px] top-[130px] text-[#1e1e1e] text-[52px] font-medium tracking-[3px] leading-none">
              つの
            </div>

            {/* 「理由」テキスト */}
            <div className="absolute left-[230px] top-[127px] text-[#aa912d] text-[64px] font-medium tracking-[3px] leading-none">
              理由
            </div>
          </div>

          {/* カードリスト */}
          <div className="space-y-24">
            {reasons.map((reason, index) => (
              <DesktopReasonCard key={index} reason={reason} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DesktopReasonCard({ reason, index }: { reason: ReasonItem; index: number }) {
  const numberStr = String(index + 1).padStart(2, '0');

  return (
    <div className="relative">
      {/* 画像とタイトルコンテナ */}
      <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
        {/* 背景画像 */}
        <PageImage
          path="/implant"
          imageId={reason.imageId}
          alt={reason.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 左上の番号 */}
        <div
          className="absolute left-12 top-12 text-[120px] font-bold leading-none z-10"
          style={{
            background: 'linear-gradient(to bottom, #a0d5f2, #248cc4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {numberStr}
        </div>

        {/* 右側の縦書きタイトル（2つの帯） */}
        <div
          className="absolute right-0 top-16 flex items-start gap-[6px]"
          style={{ fontFamily: 'YuMincho, "Yu Mincho", serif' }}
        >
          {reason.swapBands ? (
            <>
              {/* swapBands=true: 左に小さいテキスト（ゴールド）、右に大きいテキスト（黒） */}
              {reason.verticalTitleSmall && (
                <div className="bg-white relative shrink-0 w-[48px] flex items-start justify-center pt-[24px] pb-[24px] shadow-lg">
                  <p className={`text-[24px] font-medium [writing-mode:vertical-rl] [text-orientation:upright] whitespace-nowrap ${reason.isGoldColor ? 'text-[#aa912d]' : 'text-[#1e1e1e]'}`}>
                    {reason.verticalTitleSmall}
                  </p>
                </div>
              )}
              <div className="bg-white relative shrink-0 w-[48px] flex items-start justify-center pt-[24px] pb-[24px] shadow-lg">
                <p className={`${reason.verticalTitleSize || 'text-[24px]'} font-medium text-[#1e1e1e] [writing-mode:vertical-rl] whitespace-nowrap`}>
                  {reason.verticalTitle}
                </p>
              </div>
            </>
          ) : (
            <>
              {/* swapBands=false(デフォルト): 左に大きいテキスト（黒）、右に小さいテキスト（ゴールド） */}
              <div className="bg-white relative shrink-0 w-[48px] flex items-start justify-center pt-[24px] pb-[24px] shadow-lg">
                <p className={`${reason.verticalTitleSize || 'text-[24px]'} font-medium text-[#1e1e1e] [writing-mode:vertical-rl] whitespace-nowrap`}>
                  {reason.verticalTitle}
                </p>
              </div>
              {reason.verticalTitleSmall && (
                <div className="bg-white relative shrink-0 w-[48px] flex items-start justify-center pt-[24px] pb-[24px] shadow-lg">
                  <p className={`text-[24px] font-medium [writing-mode:vertical-rl] [text-orientation:upright] whitespace-nowrap ${reason.isGoldColor ? 'text-[#aa912d]' : 'text-[#1e1e1e]'}`}>
                    {reason.verticalTitleSmall}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* 説明文 */}
      <div className="mt-8 px-4">
        <p
          className="text-lg text-[#1e1e1e] leading-relaxed"
          style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}
        >
          {reason.description[0]}
        </p>
      </div>
    </div>
  );
}

function ReasonCard({ reason, index }: { reason: ReasonItem; index: number }) {
  const numberStr = String(index + 1).padStart(2, '0');

  return (
    <div className="flex flex-col gap-[12px] items-start pt-[40px] px-[10px] relative shrink-0 w-full">
      {/* グラデーションフェードの区切り線 - 上部に absolute 配置 */}
      <div className="absolute h-[50px] left-0 right-0 top-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 30%, rgba(235, 245, 250, 0.9) 70%, rgba(235, 245, 250, 1) 100%)',
          }}
        />
      </div>

      {/* Figure: 画像 + 縦書きタイトル */}
      <div className="flex flex-col items-center pl-[20px] pt-[32px] relative shrink-0 w-full">
        <div className="h-[231.69px] relative shrink-0 w-[350px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <PageImage
              path="/implant"
              imageId={reason.imageId}
              alt=""
              className="absolute h-[99.99%] left-0 max-w-none top-[0.01%] w-full object-cover"
            />
          </div>

          {/* 左上の番号 */}
          <div
            className="absolute left-[-15px] top-[-40px] text-[117px] font-medium leading-none z-10"
            style={{
              background: 'linear-gradient(to bottom, #a0d5f2, #248cc4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {numberStr}
          </div>
        </div>

        {/* 縦書きタイトル - 右上（2つの帯） */}
        <div className="absolute flex items-start gap-[4px] right-0 top-0" style={{ fontFamily: 'YuMincho, "Yu Mincho", serif' }}>
          {reason.swapBands ? (
            <>
              {/* swapBands=true: 左に小さいテキスト（ゴールド）、右に大きいテキスト（黒） */}
              {reason.verticalTitleSmall && (
                <div className="bg-white relative shrink-0 w-[32px] flex items-start justify-center pt-[16px] pb-[16px]">
                  <p className={`text-[20px] font-medium [writing-mode:vertical-rl] [text-orientation:upright] whitespace-nowrap ${reason.isGoldColor ? 'text-[#aa912d]' : 'text-[#1e1e1e]'}`}>
                    {reason.verticalTitleSmall}
                  </p>
                </div>
              )}
              <div className="bg-white relative shrink-0 w-[32px] flex items-start justify-center pt-[16px] pb-[16px]">
                <p className={`${reason.verticalTitleSize || 'text-[20px]'} font-medium text-[#1e1e1e] [writing-mode:vertical-rl] whitespace-nowrap`}>
                  {reason.verticalTitle}
                </p>
              </div>
            </>
          ) : (
            <>
              {/* swapBands=false(デフォルト): 左に大きいテキスト（黒）、右に小さいテキスト（ゴールド） */}
              <div className="bg-white relative shrink-0 w-[32px] flex items-start justify-center pt-[16px] pb-[16px]">
                <p className={`${reason.verticalTitleSize || 'text-[20px]'} font-medium text-[#1e1e1e] [writing-mode:vertical-rl] whitespace-nowrap`}>
                  {reason.verticalTitle}
                </p>
              </div>
              {reason.verticalTitleSmall && (
                <div className="bg-white relative shrink-0 w-[32px] flex items-start justify-center pt-[16px] pb-[16px]">
                  <p className={`text-[20px] font-medium [writing-mode:vertical-rl] [text-orientation:upright] whitespace-nowrap ${reason.isGoldColor ? 'text-[#aa912d]' : 'text-[#1e1e1e]'}`}>
                    {reason.verticalTitleSmall}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* 説明文コンテナ */}
      <div className="flex flex-col items-start relative shrink-0 w-full">
        <div
          className="flex flex-col font-medium justify-center leading-[32px] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] tracking-[1.28px] w-full whitespace-pre-wrap"
          style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}
        >
          {reason.description.map((line, i) => (
            <p key={i} className="mb-0">{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
