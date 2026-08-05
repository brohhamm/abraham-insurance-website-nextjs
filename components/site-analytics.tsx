"use client";

import { useEffect } from "react";
import {
  Analytics,
  type BeforeSendEvent,
} from "@vercel/analytics/next";
import {
  isProductionAnalyticsHost,
  sanitizeAnalyticsUrl,
  trackEvent,
  type AnalyticsEventName,
} from "@/lib/analytics";

type PendingEvent = {
  name: AnalyticsEventName;
  properties?: Record<string, string>;
};

function placementFor(anchor: HTMLAnchorElement) {
  if (anchor.closest(".site-header")) return "header";
  if (anchor.closest(".footer")) return "footer";
  if (anchor.closest(".mobile-contact-bar")) return "mobile_contact_bar";
  if (anchor.closest(".hero")) return "hero";
  if (anchor.closest(".contact-action-panel")) return "form_confirmation";
  return "page_content";
}

function officeFor(url: URL, anchor: HTMLAnchorElement) {
  const target = `${url.pathname} ${url.search} ${anchor.textContent || ""}`.toLowerCase();
  const digits = url.pathname.replace(/\D/g, "");

  if (
    target.includes("moreno-valley") ||
    target.includes("moreno+valley") ||
    target.includes("moreno%20valley") ||
    digits === "19516538888" ||
    digits === "9516538888"
  ) {
    return "moreno_valley";
  }

  if (
    target.includes("yorba-linda") ||
    target.includes("yorba+linda") ||
    target.includes("yorba%20linda") ||
    ["17147016411", "7147016411", "17147016412", "7147016412"].includes(digits)
  ) {
    return "yorba_linda";
  }

  return null;
}

function externalDestinationType(url: URL) {
  const host = url.hostname.toLowerCase();
  if (host === "mail.google.com") return "email_service";
  if (host.includes("maps.google.")) return "directions";
  if (host === "find.griefshare.org") return "grief_support";
  if (host.includes("linkedin.com")) return "professional_profile";
  if (host.endsWith(".gov")) return "government_resource";
  if (host.includes("farmers.com") || host.includes("farmersagent.com")) return "carrier";
  return "external_website";
}

function classifyLink(anchor: HTMLAnchorElement): PendingEvent[] {
  const rawHref = anchor.getAttribute("href");
  if (!rawHref) return [];

  let url: URL;
  try {
    url = new URL(rawHref, window.location.origin);
  } catch {
    return [];
  }

  const events = new Map<AnalyticsEventName, PendingEvent>();
  const add = (event: PendingEvent) => events.set(event.name, event);
  const placement = placementFor(anchor);
  const office = officeFor(url, anchor);

  if (url.protocol === "tel:") {
    add({ name: "phone_clicked", properties: { placement, destination_type: "phone" } });
  } else if (url.protocol === "sms:") {
    add({ name: "text_clicked", properties: { placement, destination_type: "text" } });
  } else if (url.protocol === "mailto:") {
    add({ name: "email_clicked", properties: { placement, destination_type: "email" } });
  }

  if (["/contact", "/es/contacto"].includes(url.pathname)) {
    add({ name: "quote_cta_clicked", properties: { placement, destination_type: "quote_form" } });
  }

  const languageTarget = anchor.getAttribute("hreflang") || anchor.getAttribute("lang");
  if (languageTarget === "en-US" || languageTarget === "en") {
    add({ name: "language_changed", properties: { target_language: "en", placement } });
  } else if (languageTarget === "es-US" || languageTarget === "es") {
    add({ name: "language_changed", properties: { target_language: "es", placement } });
  }

  if (office) {
    add({ name: "office_engagement", properties: { office, placement } });
  }

  if (
    (url.protocol === "http:" || url.protocol === "https:") &&
    url.hostname !== window.location.hostname &&
    !isProductionAnalyticsHost(url.hostname)
  ) {
    add({
      name: "external_service_clicked",
      properties: {
        destination_type: externalDestinationType(url),
        placement,
      },
    });
  }

  return [...events.values()];
}

export function SiteAnalytics() {
  useEffect(() => {
    const startedForms = new WeakSet<HTMLFormElement>();

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      for (const analyticsEvent of classifyLink(anchor)) {
        trackEvent(analyticsEvent.name, analyticsEvent.properties);
      }
    };

    const handleFormEngagement = (event: Event) => {
      if (!(event.target instanceof Element)) return;
      const form = event.target.closest("form.easy-quote-form");
      if (!(form instanceof HTMLFormElement) || startedForms.has(form)) return;

      startedForms.add(form);
      trackEvent("quote_form_started", {
        form_type: form.dataset.analyticsForm || "quote",
      });
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("focusin", handleFormEngagement);
    document.addEventListener("input", handleFormEngagement);
    document.addEventListener("change", handleFormEngagement);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("focusin", handleFormEngagement);
      document.removeEventListener("input", handleFormEngagement);
      document.removeEventListener("change", handleFormEngagement);
    };
  }, []);

  return (
    <Analytics
      mode="production"
      beforeSend={(event: BeforeSendEvent) => {
        try {
          const url = new URL(event.url);
          if (!isProductionAnalyticsHost(url.hostname)) return null;
          return { ...event, url: sanitizeAnalyticsUrl(event.url) };
        } catch {
          return null;
        }
      }}
    />
  );
}
