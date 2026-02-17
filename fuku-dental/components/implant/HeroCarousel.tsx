'use client';

import React, { useState, useEffect } from 'react';

const heroSlides = [
  {
    title: '"いつまでも\n自分の歯のように噛める"を\n追究したインプラント治療',
    features: ['完全個室\n完備', '難症例にも\n対応'],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: '正確な診断と緻密な計画で、\n安全な治療を実現',
    features: ['正確な診断を行うための\n歯科用CT', '治療の精度を上げる\nサージカルガイド'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: '眠ったような感覚で受けられる\n安心のインプラント治療',
    features: ['ウトウトしながら、', '緊張や痛みが和らぐ\n静脈内鎮静法対応'],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative h-[506.48px] md:h-[700px] w-full overflow-hidden">
      {/* Background slides */}
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={s.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-white" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
        {/* Title */}
        <h1 className="text-[20px] md:text-5xl font-medium leading-[1.6] text-center mb-6 md:mb-8 whitespace-pre-line drop-shadow-lg max-w-[350px] md:max-w-2xl font-serif">
          {slide.title}
        </h1>

        {/* Feature boxes - モバイルのみ */}
        <div className="md:hidden flex gap-3 mb-6">
          {slide.features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg min-w-[140px] text-center"
            >
              <p className="text-[#1e1e1e] text-[13px] font-medium leading-[1.5] whitespace-pre-line">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Circular badge - モバイル */}
        <div className="md:hidden">
          <div className="w-[140px] h-[140px] rounded-full bg-white shadow-2xl flex flex-col items-center justify-center">
            <p className="text-[14px] font-bold text-[#248cc4]">インプラント</p>
            <p className="text-[18px] font-bold text-[#248cc4] my-1">無料相談</p>
            <p className="text-[14px] font-semibold text-[#1e1e1e]">実施中</p>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex md:absolute md:right-12 md:top-1/2 md:-translate-y-1/2">
          <div className="w-48 h-48 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center text-center p-6">
            <p className="text-2xl font-bold text-[#248cc4] mb-1">インプラント</p>
            <p className="text-3xl font-bold text-[#248cc4] mb-1">無料相談</p>
            <p className="text-lg font-semibold text-[#1e1e1e]">実施中</p>
          </div>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/70'
            }`}
            aria-label={`スライド ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
