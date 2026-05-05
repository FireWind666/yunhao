"use client";

import { trackEvent } from "@/lib/analytics";

export function ContactQuickActions() {
  return (
    <div className="btn-row" style={{ marginTop: 16 }}>
      <a
        className="btn btn-light"
        href="tel:15589526622"
        onClick={() => trackEvent("contact_click_phone", { location: "contact_page" })}
      >
        电话联系
      </a>
      <a
        className="btn btn-light"
        href="mailto:471181620@qq.com"
        onClick={() => trackEvent("contact_click_email", { location: "contact_page" })}
      >
        邮件联系
      </a>
      <a
        className="btn btn-light"
        href="weixin://dl/chat?wxid=wxid_az62rt8sc38822"
        onClick={() => trackEvent("contact_click_wechat", { location: "contact_page" })}
      >
        微信联系
      </a>
    </div>
  );
}
