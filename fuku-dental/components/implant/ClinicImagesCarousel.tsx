'use client';

import React, { useState, useEffect } from 'react';

const clinicImages = [
  {
    url: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=600',
    alt: 'F歯科・矯正歯科 豊洲プライムスクエア院 診療室の内観', // 医院の実写真に差し替え予定
  },
  {
    url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
    alt: 'F歯科・矯正歯科 豊洲プライムスクエア院 CT機器の外観', // 医院の実写真に差し替え予定
  },
  {
    url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600',
    alt: 'F歯科・矯正歯科 豊洲プライムスクエア院 滅菌室・衛生管理設備', // 医院の実写真に差し替え予定
  },
  {
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600',
    alt: 'F歯科・矯正歯科 豊洲プライムスクエア院 オペ室の内観', // 医院の実写真に差し替え予定
  },
];

export function ClinicImagesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clinicImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white pt-[60px] md:pt-[80px]">
      {/* モバイル版 - Figmaデザイン完全一致 */}
      <div className="md:hidden overflow-hidden">
        <div className="relative w-full h-[165.83px]">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 205}px)`,
            }}
          >
            {clinicImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[205px] h-[165.83px] pr-[5px]"
              >
                <div
                  className={`w-[200px] h-[145.83px] overflow-hidden ${
                    index === 1 ? 'mt-[20px]' : ''
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
            {/* 無限ループ用の複製 */}
            {clinicImages.map((image, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-[205px] h-[165.83px] pr-[5px]"
              >
                <div
                  className={`w-[200px] h-[145.83px] overflow-hidden ${
                    index === 1 ? 'mt-[20px]' : ''
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* デスクトップ版 */}
      <div className="hidden md:block px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicImages.map((image, index) => (
              <div
                key={index}
                className="aspect-[4/3] overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
