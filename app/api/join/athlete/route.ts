import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { athleteApplications } from '@/db/schema';
import { sendAthleteApplicationEmails } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, dateOfBirth, school, primaryEvents, personalBests, phone, email, goals } = body;

    if (!fullName || !email) {
      return NextResponse.json({ error: 'Full name and email are required.' }, { status: 400 });
    }

    await db.insert(athleteApplications).values({
      fullName,
      dateOfBirth: dateOfBirth || null,
      school: school || null,
      primaryEvents: primaryEvents || null,
      personalBests: personalBests || null,
      phone: phone || null,
      email,
      goals: goals || null,
    });

    await sendAthleteApplicationEmails({ fullName, dateOfBirth, school, primaryEvents, personalBests, phone, email, goals });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[join/athlete/route]', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
