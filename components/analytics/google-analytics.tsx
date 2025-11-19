'use client';

import Script from 'next/script';

// TODO: Replace GA_MEASUREMENT_ID with your actual Google Analytics measurement ID
// You can find this in your Google Analytics account under Admin > Data Streams > Web > Measurement ID
const GA_MEASUREMENT_ID = 'G-4HFT3K9DEB';

export default function GoogleAnalytics() {
  return (
    <>
    
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}