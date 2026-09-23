'use client';

import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-Z0SLHGM3JF';
const CLARITY_PROJECT_ID = 'va333eq6a7';

export function AnalyticsScripts() {
  return (
    <>
      <Script id="ga4-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
          gtag('set', 'ads_data_redaction', true);
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}
      </Script>
      <Script
        id="ga4-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            c[a]('consentv2', {
              ad_Storage: 'denied',
              analytics_Storage: 'denied'
            });
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
        `}
      </Script>
    </>
  );
}
