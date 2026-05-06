type RateLimitRecord = {
  count: number;
  resetAt: number;
};

declare const process: {
  env: Record<string, string | undefined>;
};

const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_REQUESTS = 4;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

function sanitize(value: string): string {
  return value.replace(/<[^>]*>/g, '').trim();
}

function validateEmail(value: string): boolean {
  return /\S+@\S+\.\S+/.test(value);
}

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (record.count >= RATE_LIMIT_REQUESTS) {
    return { allowed: false, retryAfter: Math.ceil((record.resetAt - now) / 1000) };
  }

  record.count += 1;
  return { allowed: true };
}

async function sendWithResend(payload: {
  name: string;
  email: string;
  company?: string;
  message: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL || 'kinerticmedia97@gmail.com';
  const fromEmail = process.env.CONTACT_FROM || 'noreply@kinerticmediaarts.com';

  if (!apiKey) {
    throw new Error('RESEND_API_KEY not configured');
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `New inquiry from ${payload.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Company:</strong> ${payload.company || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${payload.message.replace(/\n/g, '<br/>')}</p>
      `,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send via Resend');
  }
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    'unknown';

  const rateLimitResult = checkRateLimit(ip);
  if (!rateLimitResult.allowed) {
    res.setHeader('Retry-After', String(rateLimitResult.retryAfter || 0));
    res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again shortly.',
    });
    return;
  }

  const rawName = String(req.body?.name || '');
  const rawEmail = String(req.body?.email || '');
  const rawCompany = String(req.body?.company || '');
  const rawMessage = String(req.body?.message || '');

  const name = sanitize(rawName);
  const email = sanitize(rawEmail);
  const company = sanitize(rawCompany);
  const message = sanitize(rawMessage);

  if (!name || name.length < 2) {
    res.status(400).json({ success: false, message: 'Please provide a valid name.' });
    return;
  }

  if (!validateEmail(email)) {
    res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
    return;
  }

  if (!message || message.length < 10 || message.length > 2500) {
    res.status(400).json({ success: false, message: 'Message must be between 10 and 2500 characters.' });
    return;
  }

  try {
    await sendWithResend({ name, email, company, message });
    res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch {
    res.status(500).json({
      success: false,
      message: 'Email service unavailable. Please contact us via WhatsApp.',
    });
  }
}
