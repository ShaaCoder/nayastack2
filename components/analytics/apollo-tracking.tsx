'use client';

import Script from 'next/script';

export default function ApolloTracking() {
  return (
    <Script
      id="apollo-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          function initApollo() {
            var n = Math.random().toString(36).substring(7);
            var o = document.createElement("script");
            o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n;
            o.async = true;
            o.defer = true;
            o.onload = function() {
              window.trackingFunctions.onLoad({appId: "6892ff6406b1db001d8c00a1"})
            };
            document.head.appendChild(o);
          }
          initApollo();
        `,
      }}
    />
  );
}