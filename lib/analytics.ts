import { track } from "@vercel/analytics";

export type AnalyticsEventName =
  | "quote_cta_clicked"
  | "quote_form_started"
  | "quote_form_submitted"
  | "phone_clicked"
  | "text_clicked"
  | "email_clicked"
  | "language_changed"
  | "office_engagement"
  | "external_service_clicked";

type AnalyticsProperties = Record<string, string | number | boolean>;

export const productionAnalyticsHosts = new Set([
  "abrahamvalleyinsurance.com",
  "www.abrahamvalleyinsurance.com",
  "abraham-insurance-website-nextjs.vercel.app",
]);

export const allowedUtmParameters = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
]);

export function isProductionAnalyticsHost(hostname: string) {
  return productionAnalyticsHosts.has(hostname.toLowerCase());
}

export function sanitizeAnalyticsUrl(rawUrl: string) {
  const url = new URL(rawUrl);
  const retainedParameters = new URLSearchParams();

  for (const [key, value] of url.searchParams) {
    if (allowedUtmParameters.has(key.toLowerCase())) {
      const trimmedValue = value.trim().slice(0, 100);
      const resemblesEmail = /\S+@\S+\.\S+/.test(trimmedValue);
      const resemblesPhone = /(?:\+?\d[\s().-]*){7,}/.test(trimmedValue);
      const resemblesZipCode = /(^|\D)\d{5}(?:-\d{4})?(\D|$)/.test(trimmedValue);
      if (trimmedValue && !resemblesEmail && !resemblesPhone && !resemblesZipCode) {
        retainedParameters.append(key.toLowerCase(), trimmedValue);
      }
    }
  }

  url.search = retainedParameters.toString();
  url.hash = "";
  return url.toString();
}

export function trackEvent(
  name: AnalyticsEventName,
  properties: AnalyticsProperties = {},
) {
  if (typeof window === "undefined" || !isProductionAnalyticsHost(window.location.hostname)) {
    return;
  }

  try {
    track(name, {
      page_path: window.location.pathname,
      page_language: window.location.pathname.startsWith("/es") ? "es" : "en",
      ...properties,
    });
  } catch {
    // Analytics must never interrupt navigation, form handling, or contact actions.
  }
}
