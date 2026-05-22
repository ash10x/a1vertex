import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { registrations, groupRegistrations } from '@/db/schema';
import { sendRegistrationEmails, sendGroupRegistrationEmails } from '@/lib/email';
import type { AthleteEntry } from '@/db/schema';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body.type === 'group') {
      const { contactName, contactEmail, contactPhone, athletes } = body as {
        contactName: string;
        contactEmail: string;
        contactPhone?: string;
        athletes: AthleteEntry[];
      };

      if (!contactName || !contactEmail || !athletes?.length) {
        return NextResponse.json({ error: 'Contact name, email, and at least one athlete are required.' }, { status: 400 });
      }

      const boysCount = athletes.filter((a) => a.gender === 'male').length;
      const girlsCount = athletes.filter((a) => a.gender === 'female').length;
      const totalCount = athletes.length;

      if (totalCount > 12 || boysCount > 6 || girlsCount > 6) {
        return NextResponse.json({ error: 'Group exceeds capacity limits.' }, { status: 400 });
      }

      await db.insert(groupRegistrations).values({
        contactName,
        contactEmail,
        contactPhone: contactPhone || null,
        athletes,
        boysCount,
        girlsCount,
        totalCount,
      });

      await sendGroupRegistrationEmails({ contactName, contactEmail, contactPhone, athletes, boysCount, girlsCount });

      return NextResponse.json({ success: true });
    }

    // Single athlete
    const { name, age, primaryEvent, email, phone, experience } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    await db.insert(registrations).values({
      name,
      age: age ? Number(age) : null,
      primaryEvent: primaryEvent || null,
      email,
      phone: phone || null,
      experience: experience || null,
    });

    await sendRegistrationEmails({ name, age, primaryEvent, email, phone, experience });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[registration/route]', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
