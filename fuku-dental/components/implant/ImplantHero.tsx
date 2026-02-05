import React from 'react';

interface ImplantHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
}

export function ImplantHero({
  title,
  subtitle,
  description,
  backgroundImage,
}: ImplantHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#395b45] via-[#2d4835] to-[#1e3327] text-white overflow-hidden">
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1e3327]/60 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        {subtitle && (
          <p className="text-sm md:text-base tracking-widest text-white/70 mb-3 uppercase">
            {subtitle}
          </p>
        )}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
