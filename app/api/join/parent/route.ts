import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { parentRegistrations } from '@/db/schema';
import { sendParentRegistrationEmails } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { parentName, relationship, athleteName, emergencyContact, email, phone, notes } = body;

    if (!parentName || !email) {
      return NextResponse.json({ error: 'Parent name and email are required.' }, { status: 400 });
    }

    await db.insert(parentRegistrations).values({
      parentName,
      relationship: relationship || null,
      athleteName: athleteName || null,
      emergencyContact: emergencyContact || null,
      email,
      phone: phone || null,
      notes: notes || null,
    });

    await sendParentRegistrationEmails({ parentName, relationship, athleteName, emergencyContact, email, phone, notes });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[join/parent/route]', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
