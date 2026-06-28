import { ArrowRight } from 'lucide-react';

export interface RelatedPageItem {
  title: string;
  description?: string;
  desc?: string;
  href?: string;
  link?: string;
}

interface RelatedPagesSectionProps {
  title?: string;
  eyebrow?: string;
  description?: string;
  items: RelatedPageItem[];
  currentPath?: string;
  className?: string;
}

export function RelatedPagesSection({
  title = '関連ページ',
  eyebrow = 'MORE INFORMATION',
  description,
  items,
  currentPath,
  className = '',
}: RelatedPagesSectionProps) {
  const visibleItems = items.filter((item) => {
    const href = item.href || item.link || '#';
    return !currentPath || href !== currentPath;
  });

  if (visibleItems.length === 0) return null;

  return (
    <section className={`bg-[#FDFBF7] py-12 md:py-16 ${className}`}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-[#C5A572]">
            {eyebrow}
          </p>
          <h2 className="font-serif text-3xl font-light leading-[1.55] text-[#5A4D41] md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-[2] text-[#8D8070] md:text-base">
              {description}
            </p>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {visibleItems.map((item, index) => {
            const href = item.href || item.link || '#';
            const itemDescription = item.description || item.desc;

            return (
              <a
                key={`${href}-${item.title}`}
                href={href}
                className="group flex min-h-[148px] flex-col rounded-[22px] border border-[#E8E0D4] bg-white p-6 shadow-[0_16px_40px_rgba(90,77,65,0.06)] transition hover:-translate-y-1 hover:border-[#C5A572]/70 hover:shadow-[0_22px_50px_rgba(90,77,65,0.10)]"
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="text-[11px] font-semibold tracking-[0.28em] text-[#C5A572]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E0D4] bg-[#FDFBF7] text-[#0a8a85] transition group-hover:border-[#0a8a85]/40 group-hover:bg-[#0a8a85] group-hover:text-white">
                    <ArrowRight size={16} />
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold leading-[1.6] text-[#5A4D41] transition group-hover:text-[#0a8a85]">
                  {item.title}
                </h3>
                {itemDescription && (
                  <p className="mt-3 text-sm leading-[1.9] text-[#8D8070]">
                    {itemDescription}
                  </p>
                )}
                <div className="mt-auto pt-5 text-sm font-semibold tracking-wide text-[#C5A572]">
                  詳しく見る
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
