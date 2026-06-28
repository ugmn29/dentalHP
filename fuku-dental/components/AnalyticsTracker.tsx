'use client';

import { Suspense, useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackContactClick, trackPageView } from '@/lib/analytics';

function normalizeLabel(anchor: HTMLAnchorElement) {
  const ariaLabel = anchor.getAttribute('aria-label');
  const visibleText = anchor.textContent?.replace(/\s+/g, ' ').trim();

  return (ariaLabel || visibleText || anchor.href).slice(0, 120);
}

function inferCtaLocation(anchor: HTMLAnchorElement) {
  const explicitLocation = anchor.dataset.analyticsLocation;

  if (explicitLocation) {
    return explicitLocation;
  }

  const section = anchor.closest<HTMLElement>('[data-analytics-section], section, header, footer, nav');
  const sectionLabel =
    section?.dataset.analyticsSection ||
    section?.getAttribute('aria-label') ||
    section?.tagName.toLowerCase();

  return sectionLabel || 'unknown';
}

function ContactClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const anchor = event.target.closest<HTMLAnchorElement>('a[href]');

      if (!anchor) {
        return;
      }

      const rawHref = anchor.getAttribute('href') || '';
      const resolvedHref = anchor.href || rawHref;
      const isPhone = rawHref.startsWith('tel:') || resolvedHref.startsWith('tel:');
      const isWebReservation =
        rawHref.includes('hubdent.net/web-booking') || resolvedHref.includes('hubdent.net/web-booking');

      if (!isPhone && !isWebReservation) {
        return;
      }

      trackContactClick({
        method: isWebReservation ? 'web_reservation' : 'phone',
        linkUrl: resolvedHref,
        ctaText: normalizeLabel(anchor),
        ctaLocation: inferCtaLocation(anchor),
      });
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  return null;
}

function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const search = searchParams.toString();
    const path = search ? `${pathname}?${search}` : pathname;

    trackPageView(path);
  }, [pathname, searchParams]);

  return null;
}

export function AnalyticsTracker() {
  return (
    <>
      <ContactClickTracker />
      <Suspense fallback={null}>
        <RouteChangeTracker />
      </Suspense>
    </>
  );
}

