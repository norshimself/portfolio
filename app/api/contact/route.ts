import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch] ?? ch));
const recent = new Map<string, number[]>();


export async function POST(request: Request) {
  try {
    if (Number(request.headers.get('content-length') || 0) > 12000) return NextResponse.json({ error: 'Too large' }, { status: 413 });
    const input = await request.json();
    if (!input || typeof input !== 'object' || Array.isArray(input)) return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    const { email, phone = '', message, website } = input;
    if (website) return NextResponse.json({ success: true });
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const now = Date.now();
    if (recent.size > 2000) recent.clear();
    const hits = (recent.get(ip) || []).filter(t => now - t < 60000);
    if (hits.length >= 3) return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    recent.set(ip, [...hits, now]);
    if (typeof email !== 'string' || email.length > 254 || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email) ||
        typeof phone !== 'string' || phone.length > 40 || typeof message !== 'string' ||
        message.trim().length < 5 || message.length > 5000) {
      return NextResponse.json({ error: 'Invalid email or message' }, { status: 400 });
    }
    if (!resend) return NextResponse.json({ error: 'Contact is not configured' }, { status: 503 });
    const cleanEmail = escapeHtml(email);
    const cleanPhone = escapeHtml(phone);
    const cleanMessage = escapeHtml(message).replace(/\\n/g, '<br/>');

    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Contact Form <onboarding@resend.dev>',
      to: 'nasroallah.elidrissi@gmail.com',
      subject: 'New Portfolio Contact Request',
      replyTo: email,
      html: `
        <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #000000; padding: 40px 20px; color: #ffffff;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #141414; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08);">
            
            <div style="background-color: #F34F11; padding: 32px 40px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1);">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.02em;">New Work Inquiry</h1>
            </div>
            
            <div style="padding: 40px;">
              <div style="margin-bottom: 32px;">
                <p style="margin: 0 0 12px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.4); font-weight: 600; display: flex; align-items: center; gap: 8px;">
                  <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background-color: #F34F11;"></span>
                  Contact Details
                </p>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.08); width: 30%; color: rgba(255,255,255,0.6); font-weight: 500;">Email</td>
                    <td style="padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff;"><a href="mailto:${cleanEmail}" style="color: #F34F11; text-decoration: none; font-weight: 500;">${cleanEmail}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.6); font-weight: 500;">Phone</td>
                    <td style="padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff;" >${cleanPhone || '<span style="color: rgba(255,255,255,0.3); font-style: italic;">Not provided</span>'}</td>
                  </tr>
                </table>
              </div>
              
              <div>
                <p style="margin: 0 0 12px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.4); font-weight: 600; display: flex; align-items: center; gap: 8px;">
                  <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background-color: #F34F11;"></span>
                  Message
                </p>
                <div style="background-color: #1c1c1c; padding: 24px; border-radius: 12px; border-left: 4px solid #F34F11; color: rgba(255,255,255,0.8); font-size: 16px; line-height: 1.6; white-space: pre-wrap; border-top: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05);">${cleanMessage}</div>
              </div>
            </div>
            
            <div style="background-color: #0a0a0a; padding: 24px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
              <p style="margin: 0; font-size: 13px; color: rgba(255,255,255,0.4);">Sent from your portfolio contact form.</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Detailed API Route error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
