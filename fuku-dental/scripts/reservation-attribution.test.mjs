import assert from 'node:assert/strict';
import test from 'node:test';

import {
  decorateHubDentReservationUrl,
  extractAttributionParams,
  hasAttributionParams,
  isHubDentReservationUrl,
  parseStoredAttribution,
} from '../lib/reservation-attribution.ts';

const bookingUrl =
  'https://hubdent.net/web-booking?clinic_id=441da3dc-7bda-4bef-95d5-58d00638a0bf';

test('extracts only allowed UTM parameters', () => {
  const params = extractAttributionParams(
    '?utm_source=google&utm_medium=cpc&utm_campaign=123&gclid=secret&fbclid=also-secret',
  );

  assert.deepEqual(params, {
    utm_source: 'google',
    utm_medium: 'cpc',
    utm_campaign: '123',
  });
  assert.equal(hasAttributionParams(params), true);
});

test('sanitizes stored values and rejects malformed storage', () => {
  assert.deepEqual(
    parseStoredAttribution(
      JSON.stringify({
        utm_source: ' meta ',
        utm_medium: 'paid_social',
        gclid: 'must-not-survive',
      }),
    ),
    { utm_source: 'meta', utm_medium: 'paid_social' },
  );
  assert.deepEqual(parseStoredAttribution('{broken'), {});
});

test('decorates HubDent booking URL without forwarding click identifiers', () => {
  const decorated = new URL(
    decorateHubDentReservationUrl(bookingUrl, {
      utm_source: 'google',
      utm_medium: 'cpc',
      utm_campaign: '456',
      utm_content: '789_1011',
    }),
  );

  assert.equal(decorated.searchParams.get('clinic_id'), '441da3dc-7bda-4bef-95d5-58d00638a0bf');
  assert.equal(decorated.searchParams.get('utm_source'), 'google');
  assert.equal(decorated.searchParams.get('utm_content'), '789_1011');
  assert.equal(decorated.searchParams.has('gclid'), false);
});

test('decorates a bare HubDent booking URL after a client-side route change', () => {
  const decorated = new URL(
    decorateHubDentReservationUrl('https://hubdent.net/web-booking', {
      utm_source: 'google',
      utm_medium: 'cpc',
      utm_campaign: '456',
    }),
  );

  assert.equal(decorated.searchParams.get('utm_source'), 'google');
  assert.equal(decorated.searchParams.get('utm_medium'), 'cpc');
  assert.equal(decorated.searchParams.get('utm_campaign'), '456');
});

test('leaves unrelated URLs unchanged', () => {
  const externalUrl = 'https://example.com/?utm_source=google';
  assert.equal(isHubDentReservationUrl(externalUrl), false);
  assert.equal(decorateHubDentReservationUrl(externalUrl, { utm_source: 'meta' }), externalUrl);
});
