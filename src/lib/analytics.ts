/**
 * Analytics wrapper for Plausible
 * Safe no-op if analytics not configured
 */

declare global {
  interface Window {
    plausible?: {
      (event: string, options?: { props?: Record<string, string | number> }): void;
      q?: IArguments[];
    };
  }
}

export type EventName =
  | 'cta_enterprise_pilot'
  | 'cta_basic_demo'
  | 'cta_view_samples'
  | 'enterprise_form_submit';

/**
 * Track a custom event
 * Queues events before Plausible script loads
 */
export function track(event: EventName, props?: Record<string, string | number>): void {
  if (typeof window === 'undefined') return;

  // Queue events before script loads (per Plausible docs)
  window.plausible =
    window.plausible ||
    function () {
      // eslint-disable-next-line prefer-rest-params
      (window.plausible!.q = window.plausible!.q || []).push(arguments);
    };

  window.plausible(event, props ? { props } : undefined);
}