export type LeadEventName =
  | "lead_submit_success"
  | "lead_submit_error"
  | "contact_click_phone"
  | "contact_click_email"
  | "contact_click_wechat";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: LeadEventName, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, {
    event_category: "conversion",
    ...params
  });
}
