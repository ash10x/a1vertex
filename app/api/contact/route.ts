import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';
import { sendContactEmails } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    await db.insert(contactSubmissions).values({ name, email, subject: subject || null, message });

    await sendContactEmails({ name, email, subject, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact/route]', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
