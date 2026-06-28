type AnalyticsValue = string | number | boolean | null | undefined;

type AnalyticsParams = Record<string, AnalyticsValue>;

const GA_MEASUREMENT_ID = 'G-Z0SLHGM3JF';

function getAnalyticsWindow() {
  if (typeof window === 'undefined') {
    return null;
  }

  return window as Window & {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  };
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  const analyticsWindow = getAnalyticsWindow();

  if (!analyticsWindow) {
    return;
  }

  analyticsWindow.gtag?.('event', eventName, params);
  analyticsWindow.clarity?.('event', eventName);
}

export function trackPageView(path: string) {
  const analyticsWindow = getAnalyticsWindow();

  if (!analyticsWindow) {
    return;
  }

  analyticsWindow.gtag?.('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
  });
}

export function trackContactClick({
  method,
  linkUrl,
  ctaText,
  ctaLocation,
}: {
  method: 'web_reservation' | 'phone';
  linkUrl: string;
  ctaText: string;
  ctaLocation: string;
}) {
  const eventName = method === 'web_reservation' ? 'web_reservation_click' : 'phone_click';

  trackEvent(eventName, {
    contact_method: method,
    link_url: linkUrl,
    cta_text: ctaText,
    cta_location: ctaLocation,
    page_path: typeof window === 'undefined' ? undefined : window.location.pathname,
  });
}

