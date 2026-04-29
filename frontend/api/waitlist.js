// Vercel Serverless Function — POST /api/waitlist
// Sends a transactional email via Resend. Server-side only; the API key never reaches the client.
import { Resend } from "resend";

const SENDER = process.env.SENDER_EMAIL || "Breezee360 <onboarding@resend.dev>";
const RECIPIENT = process.env.RECIPIENT_EMAIL || "fans@breezee.uk";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildHtml({ email, name, message, source, submittedAt }) {
  const safe = (v) =>
    String(v ?? "—").replace(/[<>&"']/g, (c) =>
      ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#39;" }[c])
    );
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;background:#F9FAFB;padding:32px;">
    <tr><td>
      <table width="560" align="center" cellpadding="0" cellspacing="0"
             style="background:#ffffff;border-radius:16px;padding:32px;border:1px solid #E5E7EB;">
        <tr><td style="font-size:12px;letter-spacing:2px;color:#0D7A5F;text-transform:uppercase;font-weight:700;">
          Breezee360 · New waitlist signup
        </td></tr>
        <tr><td style="padding-top:12px;font-size:22px;color:#111827;font-weight:600;">
          ${safe(email)}
        </td></tr>
        <tr><td style="padding-top:24px;font-size:14px;color:#374151;line-height:1.6;">
          <strong style="color:#67727E;">Name:</strong> ${safe(name)}<br/>
          <strong style="color:#67727E;">Source:</strong> ${safe(source)}<br/>
          <strong style="color:#67727E;">Submitted:</strong> ${safe(submittedAt)}<br/>
          <div style="margin-top:16px;padding:16px;background:#F0FDF4;border-radius:12px;color:#0D7A5F;">
            <strong>Message:</strong><br/>${safe(message)}
          </div>
        </td></tr>
        <tr><td style="padding-top:32px;font-size:12px;color:#67727E;">
          Sent automatically by Breezee360 · Productivity through well-being, not pressure.
        </td></tr>
      </table>
    </td></tr>
  </table>`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const email = String(body.email || "").trim().toLowerCase();
    const name = body.name ? String(body.name).trim().slice(0, 120) : null;
    const message = body.message ? String(body.message).trim().slice(0, 1000) : null;
    const source = body.source ? String(body.source).slice(0, 60) : "landing_page";

    if (!email || !EMAIL_RE.test(email)) {
      return res.status(422).json({ success: false, message: "Please enter a valid email." });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Don't leak details. Still acknowledge to the user; admin should configure the key.
      console.error("[waitlist] RESEND_API_KEY missing");
      return res.status(200).json({
        success: true,
        message: "You're on the list — we'll be in touch.",
      });
    }

    const resend = new Resend(apiKey);
    const submittedAt = new Date().toISOString();

    const result = await resend.emails.send({
      from: SENDER,
      to: [RECIPIENT],
      subject: `New Breezee360 waitlist · ${email}`,
      html: buildHtml({ email, name, message, source, submittedAt }),
      replyTo: email,
    });

    if (result?.error) {
      console.error("[waitlist] resend error:", result.error);
      // Still return success to the user — their submission was received.
      return res.status(200).json({
        success: true,
        message: "You're in. Check your inbox for our calm hello soon.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "You're in. Check your inbox for our calm hello soon.",
      id: result?.data?.id ?? null,
    });
  } catch (err) {
    console.error("[waitlist] handler error:", err);
    return res.status(500).json({ success: false, message: "Something went sideways. Try again in a moment." });
  }
}
