'use client';

import { Suspense, useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackContactClick, trackPageView } from '@/lib/analytics';
import {
  ATTRIBUTION_STORAGE_KEY,
  decorateHubDentReservationUrl,
  extractAttributionParams,
  hasAttributionParams,
  isHubDentReservationUrl,
  parseStoredAttribution,
  type AttributionParams,
} from '@/lib/reservation-attribution';

function readStoredAttribution(): AttributionParams {
  try {
    return parseStoredAttribution(window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY));
  } catch {
    return {};
  }
}

function captureAttribution(search: string): AttributionParams {
  const incoming = extractAttributionParams(search);

  if (!hasAttributionParams(incoming)) {
    return readStoredAttribution();
  }

  try {
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(incoming));
  } catch {
    // Storage can be unavailable in private browsing; links still work for this page.
  }

  return incoming;
}

function decorateReservationAnchors(attribution: AttributionParams) {
  document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((anchor) => {
    const href = anchor.href;
    if (!isHubDentReservationUrl(href)) {
      return;
    }

    const decoratedHref = decorateHubDentReservationUrl(href, attribution);
    if (decoratedHref !== href) {
      anchor.href = decoratedHref;
    }
  });
}

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
      let resolvedHref = anchor.href || rawHref;
      const isPhone = rawHref.startsWith('tel:') || resolvedHref.startsWith('tel:');
      const isWebReservation =
        rawHref.includes('hubdent.net/web-booking') || resolvedHref.includes('hubdent.net/web-booking');

      if (!isPhone && !isWebReservation) {
        return;
      }

      if (isWebReservation) {
        const attribution = captureAttribution(window.location.search);
        const decoratedHref = decorateHubDentReservationUrl(resolvedHref, attribution);

        if (decoratedHref !== resolvedHref) {
          anchor.href = decoratedHref;
          resolvedHref = decoratedHref;
        }
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

function ReservationAttributionTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams.toString();
    const attribution = captureAttribution(search ? `?${search}` : '');

    decorateReservationAnchors(attribution);

    const observer = new MutationObserver(() => {
      decorateReservationAnchors(attribution);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['href'],
    });

    return () => observer.disconnect();
  }, [pathname, searchParams]);

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
        <ReservationAttributionTracker />
        <RouteChangeTracker />
      </Suspense>
    </>
  );
}
