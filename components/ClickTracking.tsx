"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Pushes a dataLayer event for every click on a tel: or mailto: link, so
 * Google Tag Manager can fire the Google Ads conversion tag on a
 * Custom Event trigger ("phone_click" / "email_click").
 */
export default function ClickTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href^='tel:'], a[href^='mailto:']");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const isPhone = href.startsWith("tel:");
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: isPhone ? "phone_click" : "email_click",
        link_url: href,
        link_text: (link.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 100),
        page_path: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
