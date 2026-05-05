import { NextRequest, NextResponse } from "next/server";

const requiredFields = ["name", "phone", "market", "purpose", "quantity"] as const;

function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as Record<string, unknown>;

    for (const field of requiredFields) {
      if (!isNonEmpty(payload[field])) {
        return NextResponse.json({ ok: false, error: `missing_${field}` }, { status: 400 });
      }
    }

    const leadRecord = {
      ...payload,
      createdAt: new Date().toISOString(),
      source: "official_site"
    };

    const webhook = process.env.LEAD_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadRecord)
      });
    }

    console.log("[lead]", leadRecord);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
