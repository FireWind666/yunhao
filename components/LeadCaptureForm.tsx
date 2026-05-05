"use client";

import { FormEvent, useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type FormState = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  phone: "",
  wechatOrWhatsapp: "",
  email: "",
  market: "",
  purpose: "",
  model: "",
  quantity: "",
  budget: "",
  customization: "",
  certNeed: "",
  deliveryExpectation: "",
  notes: ""
};

export function LeadCaptureForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  const canSubmit = useMemo(() => {
    return Boolean(form.name && form.phone && form.market && form.purpose && form.quantity);
  }, [form]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit || status === "submitting") return;

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("submit_failed");
      }

      setStatus("success");
      setMessage("提交成功，我们会在工作时间内尽快与你联系。");
      setForm(initialForm);
      trackEvent("lead_submit_success", { source: "contact_form" });
    } catch {
      setStatus("error");
      setMessage("提交失败，请稍后重试，或直接电话/微信联系。\n电话：15589526622");
      trackEvent("lead_submit_error", { source: "contact_form" });
    }
  }

  return (
    <form className="card card-light" onSubmit={handleSubmit}>
      <p className="eyebrow">Lead Form</p>
      <h3 className="card-title">快速询价</h3>
      <p className="card-text">必填：姓名/公司、电话、地区、采购用途、预计数量。</p>

      <div className="grid grid-2" style={{ marginTop: 14 }}>
        {[
          ["name", "姓名 / 公司名称 *"],
          ["phone", "联系电话 *"],
          ["wechatOrWhatsapp", "微信 / WhatsApp"],
          ["email", "邮箱"],
          ["market", "所在地区 / 目标市场 *"],
          ["purpose", "采购用途 *"],
          ["model", "意向型号"],
          ["quantity", "预计数量 *"],
          ["budget", "预算区间"],
          ["customization", "是否需要定制"],
          ["certNeed", "是否需要认证资料"],
          ["deliveryExpectation", "期望交付时间"]
        ].map(([key, label]) => (
          <label key={key} className="footer-list" style={{ gap: 6 }}>
            <span>{label}</span>
            <input
              value={form[key as keyof typeof form]}
              onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
              style={{
                minHeight: 42,
                borderRadius: 10,
                border: "1px solid #cad7ea",
                padding: "0 12px",
                fontSize: 14
              }}
            />
          </label>
        ))}
      </div>

      <label className="footer-list" style={{ gap: 6, marginTop: 12 }}>
        <span>备注</span>
        <textarea
          value={form.notes}
          onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))}
          rows={4}
          style={{ borderRadius: 10, border: "1px solid #cad7ea", padding: 12, fontSize: 14, resize: "vertical" }}
        />
      </label>

      <div className="btn-row" style={{ marginTop: 16 }}>
        <button className="btn btn-primary" type="submit" disabled={!canSubmit || status === "submitting"}>
          {status === "submitting" ? "提交中..." : "提交询价"}
        </button>
      </div>

      {message ? (
        <p className="card-text" style={{ marginTop: 10, color: status === "error" ? "#b91c1c" : "#0f766e" }}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
