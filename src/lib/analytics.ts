/**
 * Thin wrapper around gtag.js for firing GA4 custom events from client components.
 * Safe to call during SSR / before the GA script has loaded — it's a no-op until
 * `window.gtag` exists.
 */
export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}
