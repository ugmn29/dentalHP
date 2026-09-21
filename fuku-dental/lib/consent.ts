export const CONSENT_STORAGE_KEY = 'fshika-cookie-consent';
export const CONSENT_SETTINGS_EVENT = 'fshika:open-cookie-settings';
export const CONSENT_VERSION = 1;

export type ConsentPreferences = {
  version: typeof CONSENT_VERSION;
  analytics: boolean;
  externalContent: boolean;
  marketing: boolean;
};

export const DEFAULT_CONSENT: ConsentPreferences = {
  version: CONSENT_VERSION,
  analytics: false,
  externalContent: false,
  marketing: false,
};

export function parseConsent(value: string | null): ConsentPreferences | null {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(value) as Partial<ConsentPreferences>;

    if (
      parsed.version !== CONSENT_VERSION ||
      typeof parsed.analytics !== 'boolean' ||
      typeof parsed.externalContent !== 'boolean' ||
      typeof parsed.marketing !== 'boolean'
    ) {
      return null;
    }

    return {
      version: CONSENT_VERSION,
      analytics: parsed.analytics,
      externalContent: parsed.externalContent,
      marketing: parsed.marketing,
    };
  } catch {
    return null;
  }
}

export function readConsent() {
  if (typeof window === 'undefined') {
    return null;
  }

  return parseConsent(window.localStorage.getItem(CONSENT_STORAGE_KEY));
}

export function writeConsent(preferences: ConsentPreferences) {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferences));
}
