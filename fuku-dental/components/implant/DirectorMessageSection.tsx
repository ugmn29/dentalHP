'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function DirectorMessageSection() {
  return (
    <section className="relative bg-white">
      {/* モバイル版 - Figmaデザイン完全一致 */}
      <div className="md:hidden">
        <div className="relative h-[950px]">
          {/* 背景画像 */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800"
              alt="インプラント治療"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#2c4a7c]/85" />
          </div>

          {/* コンテンツ */}
          <div className="relative max-w-[370px] mx-auto px-[10px] pt-[40px]">
            <div className="relative h-[950px]">
              {/* タイトル */}
              <div className="absolute left-0 right-0 top-0">
                <div className="text-white text-[24px] font-medium leading-[36px]">
                  <p className="mb-0">インプラントで、</p>
                  <p>これからの人生をもっと快適に</p>
                </div>
              </div>

              {/* 第1段落 */}
              <div className="absolute left-0 right-0 top-[100.79px]">
                <div className="text-white text-[16px] font-medium leading-[32px] tracking-[1.28px]" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
                  <p className="mb-4">インプラント治療は、単に歯を補うだけの治療ではありません。</p>
                  <p>噛む、話す、笑う——人が自然に過ごすための「生活の質」を取り戻す治療です。</p>
                </div>
              </div>

              {/* メイン本文 */}
              <div className="absolute left-0 right-0 top-[249.79px]">
                <div className="text-white text-[16px] tracking-[1.28px] leading-[32px] space-y-4" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
                  {/* 第2段落 */}
                  <div className="font-medium">
                    <p>私はこれまで500症例以上のインプラント治療に携わってきました。その中で常に大切にしているのは、</p>
                  </div>

                  {/* 強調部分 */}
                  <div className="font-bold">
                    <p>"患者様にとって最も安心できる治療"を提供すること。</p>
                  </div>

                  {/* 第3段落 */}
                  <div className="font-medium space-y-4">
                    <p>一つひとつの症例に丁寧に向き合い、事前の診断・シミュレーションを徹底することで、より安全で確実な結果を目指しています。</p>
                    <p>インプラントは一度埋めれば終わりではなく、長く安定して使えることが何より重要です。そのため、治療後のメインテナンスや生活面でのサポートも含め、"生涯を見据えたインプラント治療"を提供しています。</p>
                    <p>F歯科・矯正歯科 豊洲プライムスクエア院では、患者様の笑顔と自信を取り戻し、これからの人生をより豊かに過ごせるよう、真摯に寄り添ってまいります。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* デスクトップ版 - 後で実装 */}
      <div className="hidden md:block">
        <div className="relative py-20 overflow-hidden">
          {/* 背景画像 */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1600"
              alt="インプラント治療"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#2c4a7c]/85" />
          </div>

          {/* コンテンツ */}
          <div className="relative max-w-4xl mx-auto px-8">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
              インプラントで、これからの人生をもっと快適に
            </h2>

            <div className="text-white text-lg leading-relaxed space-y-6" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
              <p>
                インプラント治療は、単に歯を補うだけの治療ではありません。
                噛む、話す、笑う——人が自然に過ごすための「生活の質」を取り戻す治療です。
              </p>

              <p>
                私はこれまで500症例以上のインプラント治療に携わってきました。その中で常に大切にしているのは、
                <strong className="font-bold">"患者様にとって最も安心できる治療"を提供すること。</strong>
              </p>

              <p>
                一つひとつの症例に丁寧に向き合い、事前の診断・シミュレーションを徹底することで、より安全で確実な結果を目指しています。
                インプラントは一度埋めれば終わりではなく、長く安定して使えることが何より重要です。
                そのため、治療後のメインテナンスや生活面でのサポートも含め、"生涯を見据えたインプラント治療"を提供しています。
              </p>

              <p>
                F歯科・矯正歯科 豊洲プライムスクエア院では、患者様の笑顔と自信を取り戻し、
                これからの人生をより豊かに過ごせるよう、真摯に寄り添ってまいります。
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/about/director"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#248cc4] text-white rounded-full font-bold text-lg hover:bg-[#1f7aa8] transition-colors"
              >
                院長挨拶
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
