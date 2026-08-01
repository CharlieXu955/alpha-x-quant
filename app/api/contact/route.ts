import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

type ContactPayload = {
  formType?: unknown;
  name?: unknown;
  email?: unknown;
  company?: unknown;
  background?: unknown;
  purpose?: unknown;
  interestArea?: unknown;
  message?: unknown;
  website?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function value(input: unknown, maxLength: number) {
  return typeof input === "string" ? input.trim().slice(0, maxLength) : "";
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20_000) {
    return NextResponse.json({ message: "Message is too large." }, { status: 413 });
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ message: "Unsupported request format." }, { status: 415 });
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  if (value(payload.website, 200)) {
    return NextResponse.json({ message: "Message received." });
  }

  const formType = value(payload.formType, 20);
  const name = value(payload.name, 100);
  const email = value(payload.email, 160);
  const company = value(payload.company, 120);
  const background = value(payload.background, 180);
  const purpose = value(payload.purpose, 120);
  const interestArea = value(payload.interestArea, 120);
  const message = value(payload.message, 5_000);

  const isBusiness = formType === "business";
  const isJoin = formType === "join";
  const subjectArea = isBusiness ? purpose : interestArea;

  if (
    (!isBusiness && !isJoin) ||
    name.length < 2 ||
    !emailPattern.test(email) ||
    !subjectArea ||
    message.length < 20 ||
    (isJoin && !background)
  ) {
    return NextResponse.json(
      { message: "Please complete all required fields with valid information." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !recipient || !from) {
    return NextResponse.json(
      { message: "Email delivery is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  const category = isBusiness ? "Business Collaboration" : "Join Alpha X Quant";
  const rows = [
    ["Inquiry", category],
    ["Name", name],
    ["Email", email],
    ...(company ? [["Company", company]] : []),
    ...(background ? [["Background", background]] : []),
    [isBusiness ? "Purpose" : "Interest area", subjectArea],
  ];

  const emailHtml = `
    <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#071522">
      <div style="border-bottom:3px solid #0b2239;padding:24px 0 18px">
        <div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#516170">Alpha X Quant</div>
        <h1 style="font-size:24px;margin:8px 0 0">${escapeHtml(category)}</h1>
      </div>
      <table style="width:100%;border-collapse:collapse;margin:24px 0">
        ${rows
          .map(
            ([label, entry]) => `<tr><td style="width:140px;padding:10px 0;border-bottom:1px solid #e8eef2;color:#516170;font-size:13px">${escapeHtml(label)}</td><td style="padding:10px 0;border-bottom:1px solid #e8eef2;font-size:14px">${escapeHtml(entry)}</td></tr>`,
          )
          .join("")}
      </table>
      <h2 style="font-size:14px;letter-spacing:.08em;text-transform:uppercase">Message</h2>
      <p style="font-size:15px;line-height:1.7;white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `[Alpha X Quant] ${category}: ${subjectArea}`,
        html: emailHtml,
      }),
    });

    if (!response.ok) {
      console.error("Resend delivery failed", response.status);
      return NextResponse.json(
        { message: "Your message could not be delivered. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Message sent." });
  } catch {
    return NextResponse.json(
      { message: "Your message could not be delivered. Please try again later." },
      { status: 502 },
    );
  }
}
