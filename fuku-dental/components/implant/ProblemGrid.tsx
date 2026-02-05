'use client';

import React from 'react';
import Link from 'next/link';
import {
  Frown,
  AlertTriangle,
  Eye,
  Scissors,
  MessageCircle,
  RefreshCw,
  UtensilsCrossed,
  Sparkles,
} from 'lucide-react';

const problems = [
  {
    icon: Frown,
    label: '\u5165\u308C\u6B6F\u304C\u75DB\u3044\u30FB\u5408\u308F\u306A\u3044',
    href: '/implant/overdenture',
  },
  {
    icon: AlertTriangle,
    label: '\u786C\u3044\u3082\u306E\u304C\u564C\u3081\u306A\u3044',
    href: '/implant/merit-demerit',
  },
  {
    icon: Eye,
    label: '\u898B\u305F\u76EE\u304C\u6C17\u306B\u306A\u308B',
    href: '/implant/comparison',
  },
  {
    icon: Scissors,
    label: '\u5065\u5EB7\u306A\u6B6F\u3092\u524A\u308A\u305F\u304F\u306A\u3044',
    href: '/implant/comparison',
  },
  {
    icon: MessageCircle,
    label: '\u767A\u97F3\u304C\u3057\u3065\u3089\u3044',
    href: '/implant/merit-demerit',
  },
  {
    icon: RefreshCw,
    label: '\u4F55\u5EA6\u3082\u4F5C\u308A\u76F4\u3057\u3066\u3044\u308B',
    href: '/implant/overdenture',
  },
  {
    icon: UtensilsCrossed,
    label: '\u98DF\u4E8B\u3092\u697D\u3057\u3081\u306A\u3044',
    href: '/implant/merit-demerit',
  },
  {
    icon: Sparkles,
    label: '\u82E5\u3005\u3057\u3055\u3092\u4FDD\u3061\u305F\u3044',
    href: '/implant/merit-demerit',
  },
];

export function ProblemGrid() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2d4835] mb-3">
          \u3053\u3093\u306A\u304A\u60A9\u307F\u3042\u308A\u307E\u305B\u3093\u304B\uFF1F
        </h2>
        <p className="text-center text-gray-500 mb-10 text-sm">
          \u4E00\u3064\u3067\u3082\u5F53\u3066\u306F\u307E\u308B\u65B9\u306F\u3001\u30A4\u30F3\u30D7\u30E9\u30F3\u30C8\u6CBB\u7642\u304C\u89E3\u6C7A\u7B56\u306B\u306A\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {problems.map((p, i) => (
            <Link
              key={i}
              href={p.href}
              className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-100 bg-[#FDFBF7] hover:border-[#395b45]/30 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-[#395b45]/10 flex items-center justify-center group-hover:bg-[#395b45]/20 transition">
                <p.icon className="w-6 h-6 text-[#395b45]" />
              </div>
              <span className="text-sm font-semibold text-[#5A4D41] text-center leading-snug">
                {p.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
