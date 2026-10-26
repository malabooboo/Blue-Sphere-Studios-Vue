declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends a GA4 page view for a route. The site uses hash routing, which gtag
 * doesn't track on its own, so the route path is reported as a regular URL
 * path (e.g. /#/work/qibla-finder -> /work/qibla-finder).
 * gtag is only loaded in production builds; elsewhere this is a no-op.
 */
export function trackPageView(path: string, title: string) {
  window.gtag?.('event', 'page_view', {
    page_location: window.location.origin + path,
    page_title: title,
  });
}
