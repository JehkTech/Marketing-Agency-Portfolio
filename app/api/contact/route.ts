import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
  website?: string;
  submittedAt?: number;
};

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_PAYLOAD_BYTES = 16 * 1024;
const MIN_FORM_FILL_MS = 1500;
const TEST_MODE = process.env.CONTACT_EMAIL_TEST_MODE === "1";

const ipHits = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const existing = ipHits.get(ip);
  if (!existing || existing.resetAt <= now) {
    ipHits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (existing.count >= MAX_REQUESTS) {
    return true;
  }
  existing.count += 1;
  ipHits.set(ip, existing);
  return false;
}

function validatePayload(input: Partial<ContactPayload>) {
  const name = input.name?.trim() ?? "";
  const email = input.email?.trim() ?? "";
  const company = input.company?.trim() ?? "";
  const message = input.message?.trim() ?? "";
  const website = input.website?.trim() ?? "";
  const submittedAt = Number(input.submittedAt ?? 0);

  if (website) {
    return { ok: false, status: 400, message: "Submission rejected." };
  }
  if (!name || name.length < 2) {
    return { ok: false, status: 400, message: "Please provide a valid name." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, status: 400, message: "Please provide a valid email." };
  }
  if (!message || message.length < 10) {
    return { ok: false, status: 400, message: "Message must be at least 10 characters." };
  }
  if (submittedAt && Date.now() - submittedAt < MIN_FORM_FILL_MS) {
    return { ok: false, status: 400, message: "Submission rejected." };
  }

  return { ok: true, data: { name, email, company, message } };
}

export async function POST(request: NextRequest) {
  try {
    const length = Number(request.headers.get("content-length") || "0");
    if (length > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        { success: false, message: "Request payload too large." },
        { status: 413 }
      );
    }

    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const payload = (await request.json()) as Partial<ContactPayload>;
    const validated = validatePayload(payload);

    if (!validated.ok) {
      return NextResponse.json(
        { success: false, message: validated.message },
        { status: validated.status }
      );
    }

    if (TEST_MODE) {
      return NextResponse.json(
        { success: true, message: "Message sent successfully." },
        { status: 200 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    const contactFrom = process.env.CONTACT_FROM;

    if (!apiKey || !contactEmail || !contactFrom) {
      return NextResponse.json(
        { success: false, message: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const data = validated.data!;
    const { name, email, company, message } = data;

    await resend.emails.send({
      from: contactFrom,
      to: contactEmail,
      replyTo: email,
      subject: `New website inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "N/A"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    await resend.emails.send({
      from: contactFrom,
      to: email,
      subject: "We received your message",
      text: `Hi ${name},\n\nThanks for reaching out to Kinertic Media Arts. We received your message and will reply shortly.\n\nBest,\nKinertic Media Arts`,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to send message right now. Please try again." },
      { status: 500 }
    );
  }
}
