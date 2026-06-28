"use client";

import { PageImage } from "@/components/PageImage";

export interface FeatureSectionItem {
  no?: string;
  id?: string;
  label?: string;
  title: string;
  heading?: string;
  highlight?: string;
  body?: string;
  bodyHtml?: string;
  summary?: string;
  details?: string[];
  imageId?: string;
  imageAlt?: string;
  imagePath?: string;
}

interface FeatureSectionProps {
  eyebrow?: string;
  title?: string;
  lead?: string;
  pagePath?: string;
  features: FeatureSectionItem[];
  className?: string;
}

export function FeatureSection({
  eyebrow = "FEATURES",
  title = "当院の特徴",
  lead,
  pagePath,
  features,
  className = "",
}: FeatureSectionProps) {
  return (
    <section className={`relative overflow-hidden bg-[#FDFBF7] px-5 py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center md:mb-20">
          <p className="mb-4 text-[11px] tracking-[0.3em] text-[#C5A572]">{eyebrow}</p>
          <h2 className="font-serif text-3xl font-light leading-[1.5] text-[#5A4D41] md:text-4xl">
            {title}
          </h2>
          {lead && (
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-[2] text-[#8D8070] md:text-base">
              {lead}
            </p>
          )}
        </div>

        <div className="space-y-20 md:space-y-28">
          {features.map((feature, index) => {
            const featureNo = feature.no || feature.id || String(index + 1).padStart(2, "0");
            const featureLabel = feature.label || (feature.id ? feature.title : undefined);
            const featureTitle = feature.heading || (feature.id ? feature.highlight || feature.title : feature.title);
            const featureHighlight = feature.id ? undefined : feature.highlight;
            const featureBodyHtml = feature.bodyHtml || `${feature.summary || ""}${(feature.details || []).join("")}`;
            const imagePath = feature.imagePath || pagePath;
            const imageAlt = feature.imageAlt || featureTitle;

            return (
              <div
                key={`${featureNo}-${featureTitle}`}
                className={`group flex flex-col items-start gap-10 lg:gap-16 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {imagePath && feature.imageId && (
                  <div className="hidden lg:block lg:w-1/2">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-[#E6E3DC] bg-white transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                      <PageImage
                        path={imagePath}
                        imageId={feature.imageId}
                        alt={imageAlt}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                )}

                <div className="relative flex w-full flex-col gap-6 lg:w-1/2">
                  <div className="relative">
                    <span className="pointer-events-none absolute -left-2 -top-12 select-none font-serif text-[7rem] font-semibold leading-none tracking-[-0.05em] text-[#C5A572]/10">
                      {featureNo}
                    </span>
                    {featureLabel && (
                      <p className="relative mb-3 text-[11px] tracking-[0.25em] text-[#C5A572]">
                        {featureLabel}
                      </p>
                    )}
                    <h3 className="relative font-serif text-[#5A4D41]">
                      {featureHighlight && (
                        <span className="mb-2 block text-base font-medium tracking-widest text-[#8D8070]">
                          {featureHighlight}
                        </span>
                      )}
                      <span className="block text-3xl leading-[1.35] md:text-4xl lg:text-5xl">
                        {featureTitle}
                      </span>
                      <span className="mt-5 block h-px w-16 bg-[#C5A572]" />
                    </h3>
                  </div>

                  {imagePath && feature.imageId && (
                    <div className="w-full lg:hidden">
                      <div className="aspect-[16/10] overflow-hidden rounded-[24px] border border-[#E6E3DC] bg-white">
                        <PageImage
                          path={imagePath}
                          imageId={feature.imageId}
                          alt={imageAlt}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {featureBodyHtml ? (
                    <p
                      className="text-sm leading-[2.1] text-[#8D8070] md:text-base"
                      dangerouslySetInnerHTML={{ __html: featureBodyHtml }}
                    />
                  ) : feature.body ? (
                    <p className="text-sm leading-[2.1] text-[#8D8070] md:text-base">
                      {feature.body}
                    </p>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
