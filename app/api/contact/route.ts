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
    if (typeof email !== 'string' || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        typeof phone !== 'string' || phone.length > 40 || typeof message !== 'string' ||
        message.trim().length < 5 || message.length > 5000) {
      return NextResponse.json({ error: 'Invalid email or message' }, { status: 400 });
    }
    if (!resend) return NextResponse.json({ error: 'Contact is not configured' }, { status: 503 });
    const cleanEmail = escapeHtml(email);
    const cleanPhone = escapeHtml(phone);
    const cleanMessage = escapeHtml(message).replace(/\n/g, '<br/>');

    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Contact Form <onboarding@resend.dev>',
      to: 'nasroallah.elidrissi@gmail.com',
      subject: 'New Portfolio Contact Request',
      replyTo: email,
      html: `<div style="font-family:sans-serif;line-height:1.6">
        <h2>New portfolio inquiry</h2>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Phone:</strong> ${cleanPhone || 'Not provided'}</p>
        <p><strong>Message:</strong></p><p style="white-space:pre-wrap">${cleanMessage}</p>
      </div>`,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Unable to send. Please email directly.' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Detailed API Route error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
