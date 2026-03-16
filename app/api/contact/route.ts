import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: Number(env.SMTP_PORT) || 587,
    secure: env.SMTP_SECURE === "true",
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

    await transporter.sendMail({
      from: `"Swiftcode Contact Form" <${env.SMTP_USER}>`,
      to: env.SMTP_TO,
      replyTo: email,
      subject: `New Enquiry from ${name}${service ? ` — ${service}` : ""}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #111;">
          <div style="background: #0d2535; padding: 32px 40px;">
            <h1 style="color: #ffffff; font-size: 22px; margin: 0;">
              Swiftc<span style="color: #DE4B21;">O</span>de.
            </h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 13px; margin: 6px 0 0;">
              New contact form submission
            </p>
          </div>

          <div style="padding: 36px 40px; background: #ffffff; border: 1px solid #f0f0f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; font-size: 13px; color: #888; width: 120px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; font-size: 14px; font-weight: bold; color: #0d2535;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; font-size: 13px; color: #888;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; font-size: 14px; color: #0d2535;">
                  <a href="mailto:${email}" style="color: #DE4B21; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; font-size: 13px; color: #888;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; font-size: 14px; color: #0d2535;">${phone}</td>
              </tr>` : ""}
              ${service ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; font-size: 13px; color: #888;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; font-size: 14px; color: #0d2535;">${service}</td>
              </tr>` : ""}
            </table>

            <div style="margin-top: 24px;">
              <p style="font-size: 13px; color: #888; margin-bottom: 8px;">Message</p>
              <div style="background: #f9f9f9; border-left: 3px solid #DE4B21; padding: 16px 20px; font-size: 14px; color: #333; line-height: 1.7; white-space: pre-wrap;">${message}</div>
            </div>

            <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #f0f0f0;">
              <a href="mailto:${email}"
                style="display: inline-block; background: #DE4B21; color: white; font-size: 13px; font-weight: bold; padding: 12px 24px; text-decoration: none;">
                Reply to ${name} →
              </a>
            </div>
          </div>

          <div style="padding: 20px 40px; background: #f9f9f9; font-size: 12px; color: #aaa; text-align: center;">
            This email was sent from the contact form at consoel.com
          </div>
        </div>
      `,
      text: `
New contact form submission

Name:    ${name}
Email:   ${email}
${phone ? `Phone:   ${phone}\n` : ""}${service ? `Service: ${service}\n` : ""}
Message:
${message}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}