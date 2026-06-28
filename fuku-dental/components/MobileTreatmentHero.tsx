'use client';

import { WEB_RESERVATION_URL } from '@/lib/reservation';

type MobileTreatmentHeroProps = {
  imageSrc: string;
  tabletSrc?: string;
  desktopSrc?: string;
  title: string;
  alt: string;
};

export function MobileTreatmentHero({
  imageSrc,
  tabletSrc,
  desktopSrc,
  title,
  alt,
}: MobileTreatmentHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#FDFBF7]">
      <h1 className="sr-only">{title}</h1>
      <div className="relative mx-auto w-full max-w-[430px] overflow-hidden bg-[#FDFBF7] md:max-w-[900px] lg:max-w-none">
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktopSrc ?? tabletSrc ?? imageSrc} />
          <source media="(min-width: 768px)" srcSet={tabletSrc ?? desktopSrc ?? imageSrc} />
          <img
            src={imageSrc}
            alt={alt}
            className="block w-full"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-x-[7%] bottom-[4.6%] z-20 flex flex-col gap-3 md:left-auto md:right-[7%] md:w-[44%] md:grid md:grid-cols-2 md:gap-4 lg:w-[34%]">
          <a
            href={WEB_RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-14 rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0A8A85]/40 md:h-16 lg:h-20"
            aria-label={`${title}の24時間WEB予約`}
          >
            <span className="sr-only">24時間WEB予約</span>
          </a>
          <a
            href="tel:03-6204-2876"
            className="block h-14 rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-[#C5A572]/40 md:h-16 lg:h-20"
            aria-label={`${title}を電話で相談`}
          >
            <span className="sr-only">電話で相談</span>
          </a>
        </div>
      </div>
    </section>
  );
}
