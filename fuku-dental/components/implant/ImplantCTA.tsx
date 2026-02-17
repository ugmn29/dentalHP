import React from 'react';
import { Phone, Calendar } from 'lucide-react';

interface ImplantCTAProps {
  title?: string;
  subtitle?: string;
  variant?: 'blue' | 'lightblue';
}

export function ImplantCTA({
  title = 'まずは無料カウンセリングから',
  subtitle = 'インプラント治療に関するご不安やご質問、お気軽にご相談ください。',
  variant = 'blue',
}: ImplantCTAProps) {
  const isBlue = variant === 'blue';

  return (
    <section
      className={`py-14 px-4 ${
        isBlue
          ? 'bg-gradient-to-br from-[#248cc4] to-[#1f7aa8] text-white'
          : 'bg-gradient-to-br from-[#ebf5fa] to-[#d4ebf5] text-[#1e1e1e]'
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h3
          className={`text-2xl md:text-3xl font-bold mb-3 ${
            isBlue ? 'text-white' : 'text-[#1e1e1e]'
          }`}
        >
          {title}
        </h3>
        <p
          className={`mb-8 text-sm md:text-base leading-relaxed ${
            isBlue ? 'text-white/85' : 'text-[#1e1e1e]/70'
          }`}
        >
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:03-1234-5678"
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all ${
              isBlue
                ? 'bg-white text-[#248cc4] hover:bg-gray-100 shadow-lg'
                : 'bg-white text-[#248cc4] border-2 border-[#248cc4] hover:bg-[#248cc4] hover:text-white shadow-md'
            }`}
          >
            <Phone size={20} />
            03-1234-5678
          </a>
          <a
            href="#"
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all ${
              isBlue
                ? 'bg-[#FF9F43] text-white hover:bg-[#e8903c] shadow-lg'
                : 'bg-[#248cc4] text-white hover:bg-[#1f7aa8] shadow-md'
            }`}
          >
            <Calendar size={20} />
            24時間WEB予約
          </a>
        </div>
      </div>
    </section>
  );
}
