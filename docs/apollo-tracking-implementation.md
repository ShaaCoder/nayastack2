# Apollo Tracking Implementation Guide

## Implementation Options

The Apollo tracking script has been implemented in this project in two ways:

### 1. Direct Integration in Next.js

The script has been added as a React component using Next.js's Script component. This is already integrated in the application via:

- `components/analytics/apollo-tracking.tsx` - The Apollo tracking component
- Imported and used in `app/layout.tsx`

This implementation will automatically load on all pages of your Next.js application.

### 2. Google Tag Manager Implementation

If you prefer to use Google Tag Manager (GTM), follow these steps:

1. Copy the script from `public/apollo-tracking-gtm.js` or use the following code:

```javascript
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
```

2. In Google Tag Manager:
   - Create a new Custom HTML tag
   - Paste the script into the tag
   - Set the trigger to fire on All Pages
   - Save and publish your GTM container

3. Verify the script remains unaltered before publishing.

4. After implementation, inspect your website for any script errors using browser developer tools.

## Manual Implementation

If you're not using Next.js or GTM, you can manually include the script just before the closing `</head>` tag in your website's HTML:

```html
<script>
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
</script>
```

## Verification

To verify the Apollo tracking script is working correctly:

1. Open your website in a browser
2. Open the browser's developer tools (F12 or right-click > Inspect)
3. Go to the Network tab
4. Filter for "apollo" or "tracker.iife.js"
5. Reload the page
6. Confirm the script is loaded successfully

You should see the tracker.iife.js file being loaded and no errors in the console related to Apollo tracking.