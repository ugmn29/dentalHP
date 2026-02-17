'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const links = [
  {
    title: 'インプラントについて',
    href: '/implant/about',
  },
  {
    title: 'インプラントのメリット・デメリット',
    href: '/implant/merit-demerit',
  },
  {
    title: 'インプラント・入れ歯・ブリッジの違い',
    href: '/implant/comparison',
  },
  {
    title: '歯を失った本数と埋入部位',
    href: '/implant/number-position',
  },
  {
    title: 'インプラントの安全性',
    href: '/implant/safety',
  },
];

export function ImplantLinksSection() {
  return (
    <section className="bg-white">
      {/* モバイル版 - Figmaデザイン完全一致 */}
      <div className="md:hidden" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
        {/* 上部画像 */}
        <div className="w-full h-[253.23px]">
          <img
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800"
            alt="インプラント3D画像"
            className="w-full h-full object-cover"
          />
        </div>

        {/* リンクリスト */}
        <div className="bg-[#248cc4]">
          {links.map((link, index) => (
            <div key={index}>
              <Link
                href={link.href}
                className="relative block w-full py-[11px] px-[17.16px] text-white hover:bg-[#1f7aa8] transition-colors border-t border-white first:border-t-0 last:border-b last:border-white"
              >
                {/* テキスト */}
                <div className="text-[17.2px] font-medium tracking-[1.28px] leading-[34.32px]">
                  {link.title}
                </div>

                {/* 右側の白い円形ボタン */}
                <div className="absolute right-[8.57px] top-1/2 -translate-y-1/2 w-[22.88px] h-[22.88px] rounded-[11.44px] bg-white flex items-center justify-center">
                  <ChevronRight className="w-[7px] h-[8px] text-[#248cc4]" strokeWidth={3} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* デスクトップ版 */}
      <div className="hidden md:block py-16 px-4" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
        <div className="max-w-5xl mx-auto">
          {/* 上部画像 */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1200"
              alt="インプラント3D画像"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* リンクグリッド */}
          <div className="grid md:grid-cols-2 gap-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group flex items-center justify-between p-6 bg-[#248cc4] text-white rounded-xl hover:bg-[#1f7aa8] transition-colors"
              >
                <span className="text-lg font-medium">{link.title}</span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ChevronRight className="w-5 h-5 text-[#248cc4]" strokeWidth={2.5} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
