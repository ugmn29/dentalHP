import React from 'react';
import { Phone, Calendar } from 'lucide-react';

interface ImplantCTAProps {
  title?: string;
  subtitle?: string;
  variant?: 'green' | 'cream';
}

export function ImplantCTA({
  title = 'まずは無料カウンセリングから',
  subtitle = 'インプラント治療に関するご不安やご質問、お気軽にご相談ください。',
  variant = 'green',
}: ImplantCTAProps) {
  const isGreen = variant === 'green';

  return (
    <section
      className={`py-14 px-4 ${
        isGreen
          ? 'bg-gradient-to-br from-[#395b45] to-[#2d4835] text-white'
          : 'bg-gradient-to-br from-[#f5f0e8] to-[#ebe4d8] text-[#5A4D41]'
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h3
          className={`text-2xl md:text-3xl font-bold mb-3 ${
            isGreen ? 'text-white' : 'text-[#2d4835]'
          }`}
        >
          {title}
        </h3>
        <p
          className={`mb-8 text-sm md:text-base leading-relaxed ${
            isGreen ? 'text-white/85' : 'text-[#5A4D41]/80'
          }`}
        >
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:03-1234-5678"
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all ${
              isGreen
                ? 'bg-white text-[#395b45] hover:bg-gray-100 shadow-lg'
                : 'bg-white text-[#395b45] border-2 border-[#395b45] hover:bg-[#395b45] hover:text-white shadow-md'
            }`}
          >
            <Phone size={20} />
            03-1234-5678
          </a>
          <a
            href="#"
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all ${
              isGreen
                ? 'bg-[#FF9F43] text-white hover:bg-[#e8903c] shadow-lg'
                : 'bg-[#395b45] text-white hover:bg-[#2d4835] shadow-md'
            }`}
          >
            <Calendar size={20} />
            24\u6642\u9593WEB\u4E88\u7D04
          </a>
        </div>
      </div>
    </section>
  );
}
