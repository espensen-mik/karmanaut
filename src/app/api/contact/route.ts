import { Resend } from "resend";
import { NextResponse } from "next/server";

import { siteConfig } from "@/lib/constants/site";

type ContactPayload = {
  name?: string;
  organization?: string;
  email?: string;
  message?: string;
  website?: string;
  source?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const fromEmail = process.env.RESEND_FROM_EMAIL?.trim();
  const toEmail = (process.env.CONTACT_TO_EMAIL ?? siteConfig.email).trim();

  if (!apiKey || !fromEmail) {
    console.error("Missing RESEND_API_KEY or RESEND_FROM_EMAIL", {
      hasApiKey: Boolean(apiKey),
      hasFromEmail: Boolean(fromEmail),
    });
    return NextResponse.json(
      { error: "E-mail er ikke konfigureret endnu." },
      { status: 500 },
    );
  }

  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Ugyldig forespørgsel." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const organization = body.organization?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const website = body.website?.trim() ?? "";
  const source = body.source?.trim() ?? "kontakt";

  if (website) {
    return NextResponse.json({ success: true });
  }

  if (!name) {
    return NextResponse.json({ error: "Navn er påkrævet." }, { status: 400 });
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "En gyldig e-mail er påkrævet." },
      { status: 400 },
    );
  }

  if (!message || message.length < 10) {
    return NextResponse.json(
      { error: "Beskeden skal være mindst 10 tegn." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: email,
    subject: `[${source}] Ny forespørgsel fra ${name}${organization ? ` (${organization})` : ""}`,
    text: [
      `Kilde: ${source}`,
      `Navn: ${name}`,
      organization ? `Kommer fra: ${organization}` : null,
      `E-mail: ${email}`,
      "",
      "Besked:",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
    html: `
      <p><strong>Kilde:</strong> ${escapeHtml(source)}</p>
      <p><strong>Navn:</strong> ${escapeHtml(name)}</p>
      ${organization ? `<p><strong>Kommer fra:</strong> ${escapeHtml(organization)}</p>` : ""}
      <p><strong>E-mail:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <p><strong>Besked:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Kunne ikke sende beskeden. Prøv igen senere." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
