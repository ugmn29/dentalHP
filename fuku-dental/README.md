# F Dental Office website

Static Next.js site for F Dental Office Toyosu Prime Square.

## Local development

```bash
npm ci
npm run dev
```

The application directory is `fuku-dental`. Production validation is:

```bash
npm run lint
npm run build
```

The static export is written to `out`. Do not deploy that directory directly
to production.

## Content

Blog content is read from microCMS during the static build. Local and Cloudflare
builds require the configured microCMS service domain and API key environment
variables. Never commit their values.

## Deployment

GitHub `main` is the only production source. Cloudflare Pages builds from the
repository root with:

```bash
npm --prefix fuku-dental ci && npm --prefix fuku-dental run build
```

See [`../DEPLOYMENT.md`](../DEPLOYMENT.md) for branch protection, preview,
publication, verification, and recovery steps.

## Analytics

GA4 and Microsoft Clarity run without analytics or advertising cookie storage.
Microsoft Clarity also uses strict masking in the project settings. Embedded
Google Maps load only after the visitor selects the contextual map button; that
choice is stored locally on the visitor's device. Reservation and phone links
emit `web_reservation_click` and `phone_click` events through
`components/AnalyticsTracker.tsx`. Meta Pixel and other advertising tags are
not loaded.
