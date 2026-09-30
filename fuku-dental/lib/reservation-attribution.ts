export const ATTRIBUTION_STORAGE_KEY = 'f_dental_attribution_v1';

export const ATTRIBUTION_PARAM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
] as const;

export type AttributionParamKey = (typeof ATTRIBUTION_PARAM_KEYS)[number];
export type AttributionParams = Partial<Record<AttributionParamKey, string>>;

const MAX_ATTRIBUTION_VALUE_LENGTH = 200;
const HUBDENT_HOSTNAME = 'hubdent.net';
const HUBDENT_BOOKING_PATH = '/web-booking';

function sanitizeValue(value: unknown): string | null {
  if (typeof value !== 'string') {
    return null;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  return trimmed.slice(0, MAX_ATTRIBUTION_VALUE_LENGTH);
}

export function sanitizeAttributionParams(value: unknown): AttributionParams {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return {};
  }

  const source = value as Record<string, unknown>;
  const result: AttributionParams = {};

  for (const key of ATTRIBUTION_PARAM_KEYS) {
    const sanitized = sanitizeValue(source[key]);
    if (sanitized) {
      result[key] = sanitized;
    }
  }

  return result;
}

export function extractAttributionParams(search: string): AttributionParams {
  const searchParams = new URLSearchParams(search);
  const result: AttributionParams = {};

  for (const key of ATTRIBUTION_PARAM_KEYS) {
    const sanitized = sanitizeValue(searchParams.get(key));
    if (sanitized) {
      result[key] = sanitized;
    }
  }

  return result;
}

export function parseStoredAttribution(serialized: string | null): AttributionParams {
  if (!serialized) {
    return {};
  }

  try {
    return sanitizeAttributionParams(JSON.parse(serialized));
  } catch {
    return {};
  }
}

export function hasAttributionParams(params: AttributionParams): boolean {
  return ATTRIBUTION_PARAM_KEYS.some((key) => Boolean(params[key]));
}

export function isHubDentReservationUrl(href: string): boolean {
  try {
    const url = new URL(href);
    return url.hostname === HUBDENT_HOSTNAME && url.pathname.replace(/\/+$/, '') === HUBDENT_BOOKING_PATH;
  } catch {
    return false;
  }
}

export function decorateHubDentReservationUrl(
  href: string,
  attribution: AttributionParams,
): string {
  if (!isHubDentReservationUrl(href)) {
    return href;
  }

  const url = new URL(href);

  for (const key of ATTRIBUTION_PARAM_KEYS) {
    url.searchParams.delete(key);
    const value = attribution[key];
    if (value) {
      url.searchParams.set(key, value);
    }
  }

  return url.toString();
}
