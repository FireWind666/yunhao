"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function SiteAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_ID || typeof window === "undefined" || typeof window.gtag !== "function") return;
    const pagePath = `${pathname}${window.location.search}`;

    window.gtag("config", GA_ID, {
      page_path: pagePath
    });
  }, [pathname]);

  if (!GA_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
