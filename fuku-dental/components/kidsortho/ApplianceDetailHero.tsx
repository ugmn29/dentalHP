import Link from 'next/link';
import { ArrowRight, CheckCircle, ChevronRight, Clock, Home, TrendingUp, Wrench } from 'lucide-react';
import { PageImage } from '@/components/PageImage';

type HeroFact = {
  label: string;
  value: string;
};

type ApplianceDetailHeroProps = {
  label: string;
  title: string;
  accent: string;
  lead: string;
  imagePath: string;
  imageAlt: string;
  facts: HeroFact[];
  point: string;
  current: string;
  showBreadcrumb?: boolean;
};

const factIcons = [Wrench, TrendingUp, Clock, CheckCircle];

export function ApplianceDetailHero({
  label,
  title,
  accent,
  lead,
  imagePath,
  imageAlt,
  facts,
  point,
  current,
  showBreadcrumb = false,
}: ApplianceDetailHeroProps) {
  return (
    <section className="bg-[#FDFBF7] py-8 md:py-12">
      <div className="container mx-auto px-4">
        {showBreadcrumb && (
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#8D8070]">
            <Link href="/" className="flex items-center transition-colors hover:text-[#C5A572]">
              <Home className="mr-1 h-4 w-4" />
              ホーム
            </Link>
            <ChevronRight size={14} />
            <Link href="/kidsortho" className="transition-colors hover:text-[#C5A572]">こども矯正</Link>
            <ChevronRight size={14} />
            <Link href="/kidsortho/appliances" className="transition-colors hover:text-[#C5A572]">装置一覧</Link>
            <ChevronRight size={14} />
            <span className="font-bold text-[#C5A572]">{current}</span>
          </div>
        )}

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(420px,520px)] lg:grid-rows-[auto_1fr] lg:items-start">
          <div className="lg:col-start-1 lg:row-start-1">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E6D8C5] bg-white/80 px-4 py-2 text-sm font-bold text-[#8B6F47] shadow-sm">
              <Wrench className="h-4 w-4 text-[#C5A572]" />
              {label}
            </div>
            <h1 className="font-serif text-3xl font-bold leading-[1.35] text-[#5A4D41] md:text-5xl">
              {title}
              <span className="mt-3 block text-2xl text-[#C5A572] md:text-4xl">
                {accent}
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#7E7469] md:text-lg">
              {lead}
            </p>
          </div>

          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:pl-4">
            <div className="overflow-hidden rounded-[28px] border border-[#E6D8C5] bg-white p-3 shadow-xl shadow-[#C5A572]/10">
              <PageImage
                path={imagePath}
                alt={imageAlt}
                className="aspect-[16/11] w-full rounded-[20px] object-cover"
                priority
              />
            </div>
            <div className="mt-4 rounded-2xl border border-[#E6D8C5] bg-white/80 px-5 py-4 text-sm leading-7 text-[#7E7469]">
              <span className="font-bold text-[#5A4D41]">ポイント：</span>
              {point}
            </div>
          </div>

          <div className="lg:col-start-1 lg:row-start-2">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-2xl">
              {facts.map((item, index) => {
                const Icon = factIcons[index] || CheckCircle;
                return (
                  <div key={item.label} className="rounded-2xl border border-[#E6D8C5] bg-white px-4 py-4 shadow-sm">
                    <Icon className="mb-3 h-5 w-5 text-[#C5A572]" />
                    <p className="text-xs font-bold text-[#A68A61]">{item.label}</p>
                    <p className="mt-1 text-sm font-bold text-[#5A4D41]">{item.value}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kidsortho"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0a8a85] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#0a8a85]/15 transition hover:bg-[#087a76]"
              >
                こども矯正の相談へ
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/kidsortho/appliances"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#C5A572]/50 bg-white px-6 py-3 text-sm font-bold text-[#8B6F47] transition hover:bg-[#FFF9F0]"
              >
                装置一覧に戻る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
