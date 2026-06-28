import type { ReactNode } from 'react';
import { ArrowRight, CalendarDays, Phone, ShieldCheck } from 'lucide-react';
import { WEB_RESERVATION_URL } from '@/lib/reservation';

export type ReservationCtaTone = 'default' | 'kids' | 'urgent' | 'aesthetic';

interface ReservationCtaProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  note?: string;
  tone?: ReservationCtaTone;
  className?: string;
}

function CtaButton({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const isExternal = href.startsWith('http');
  const base =
    'inline-flex min-h-[58px] w-full items-center justify-center gap-3 rounded-full px-6 text-sm font-bold tracking-wide transition md:w-auto md:min-w-[220px]';
  const styles =
    variant === 'primary'
      ? 'bg-[#0a8a85] text-white shadow-[0_14px_30px_rgba(10,138,133,0.18)] hover:bg-[#066b67]'
      : 'border border-[#C5A572] bg-white text-[#5A4D41] hover:bg-[#F8F3E8]';

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}

export function ReservationCta({
  eyebrow = 'RESERVATION',
  title = 'まずは一度、ご相談ください',
  body = '治療が必要かどうか、費用や期間も含めて、わかりやすくご説明します。無理に治療をすすめることはありません。',
  note = 'お急ぎの場合はお電話ください。診療内容に合わせてご案内します。',
  tone = 'default',
  className = '',
}: ReservationCtaProps) {
  const accent =
    tone === 'urgent'
      ? '#B96A4B'
      : tone === 'kids'
        ? '#395b45'
        : tone === 'aesthetic'
          ? '#C5A572'
          : '#0a8a85';

  return (
    <section className={`px-5 py-10 ${className}`}>
      <div className="mx-auto max-w-5xl rounded-[28px] border border-[#E8E0D4] bg-white p-6 shadow-[0_20px_60px_rgba(90,77,65,0.08)] md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8E0D4] bg-[#FDFBF7] px-4 py-2">
              <ShieldCheck size={15} style={{ color: accent }} />
              <span className="text-[11px] font-semibold tracking-[0.28em] text-[#C5A572]">
                {eyebrow}
              </span>
            </div>
            <h2 className="whitespace-pre-line break-keep font-serif text-3xl font-light leading-[1.55] text-[#5A4D41] md:text-4xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-[2] text-[#8D8070] md:text-base">
              {body}
            </p>
          </div>

          <div className="rounded-[22px] bg-[#FDFBF7] p-5 md:p-6">
            <div className="flex flex-col gap-3">
              <CtaButton href={WEB_RESERVATION_URL}>
                <CalendarDays size={20} />
                <span className="whitespace-nowrap">24時間 WEB予約</span>
                <ArrowRight size={16} />
              </CtaButton>
              <CtaButton href="tel:03-6204-2876" variant="secondary">
                <Phone size={19} />
                <span className="whitespace-nowrap">電話で相談</span>
              </CtaButton>
            </div>
            <p className="mt-4 text-center text-xs leading-relaxed text-[#8D8070]">
              {note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
