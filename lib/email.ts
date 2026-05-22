import nodemailer from 'nodemailer';
import type { AthleteEntry } from '@/db/schema';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const FROM = `A1 Vertex Athletics <${process.env.SMTP_FROM}>`;
const ADMIN = process.env.ADMIN_EMAIL!;

function baseTemplate(content: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>A1 Vertex Athletics</title>
    </head>
    <body style="margin:0;padding:0;background:#050505;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#ffffff;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#050505;padding:40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
              <!-- Header -->
              <tr>
                <td style="background:linear-gradient(135deg,#22d3ee,#ec4899);padding:2px;border-radius:16px 16px 0 0;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="background:#0a0a0a;border-radius:14px 14px 0 0;padding:32px 40px;text-align:center;">
                        <p style="margin:0;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#22d3ee;font-weight:600;">A1 Vertex Athletics</p>
                        <h1 style="margin:8px 0 0;font-size:28px;font-weight:900;color:#ffffff;">Elite Athlete Development</h1>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- Body -->
              <tr>
                <td style="background:#0f0f0f;border:1px solid rgba(255,255,255,0.08);border-top:none;border-radius:0 0 16px 16px;padding:40px;">
                  ${content}
                  <!-- Footer -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:40px;border-top:1px solid rgba(255,255,255,0.08);padding-top:24px;">
                    <tr>
                      <td style="text-align:center;">
                        <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.4);">A1 Vertex Athletics</p>
                        <p style="margin:4px 0 0;font-size:12px;color:rgba(255,255,255,0.3);">9170 Glades Road, STE 121, Boca Raton, Florida 33434</p>
                        <p style="margin:4px 0 0;font-size:12px;color:rgba(255,255,255,0.3);">contact@a1vertexathletics.com · +1 (754) 213-3650</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
        <span style="font-size:11px;text-transform:uppercase;letter-spacing:0.15em;color:rgba(255,255,255,0.4);">${label}</span>
        <p style="margin:4px 0 0;font-size:15px;color:#ffffff;">${value || '—'}</p>
      </td>
    </tr>
  `;
}

// ─────────────────── CONTACT ───────────────────

export async function sendContactEmails(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  const userHtml = baseTemplate(`
    <p style="font-size:16px;color:rgba(255,255,255,0.7);line-height:1.6;">Hi <strong style="color:#ffffff;">${data.name}</strong>,</p>
    <p style="font-size:16px;color:rgba(255,255,255,0.7);line-height:1.6;">Thanks for reaching out to A1 Vertex Athletics. We've received your message and will get back to you within 24 hours.</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;">
      <tbody>
        ${data.subject ? row('Subject', data.subject) : ''}
        ${row('Message', data.message.replace(/\n/g, '<br />'))}
      </tbody>
    </table>
    <p style="font-size:15px;color:rgba(255,255,255,0.5);line-height:1.6;">For urgent matters, contact us directly at <a href="mailto:contact@a1vertexathletics.com" style="color:#22d3ee;">contact@a1vertexathletics.com</a> or call <a href="tel:+17542133650" style="color:#22d3ee;">+1 (754) 213-3650</a>.</p>
  `);

  const adminHtml = baseTemplate(`
    <p style="font-size:18px;font-weight:900;color:#22d3ee;margin:0 0 24px;">New Contact Form Submission</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;">
      <tbody>
        ${row('Name', data.name)}
        ${row('Email', `<a href="mailto:${data.email}" style="color:#22d3ee;">${data.email}</a>`)}
        ${data.subject ? row('Subject', data.subject) : ''}
        ${row('Message', data.message.replace(/\n/g, '<br />'))}
      </tbody>
    </table>
  `);

  await Promise.all([
    transporter.sendMail({
      from: FROM,
      to: data.email,
      subject: 'We received your message – A1 Vertex Athletics',
      html: userHtml,
    }),
    transporter.sendMail({
      from: FROM,
      to: ADMIN,
      subject: `Contact Form: ${data.name}${data.subject ? ` — ${data.subject}` : ''}`,
      html: adminHtml,
    }),
  ]);
}

// ─────────────────── ATHLETE APPLICATION (JOIN) ───────────────────

export async function sendAthleteApplicationEmails(data: {
  fullName: string;
  dateOfBirth?: string;
  school?: string;
  primaryEvents?: string;
  personalBests?: string;
  phone?: string;
  email: string;
  goals?: string;
}) {
  const userHtml = baseTemplate(`
    <p style="font-size:16px;color:rgba(255,255,255,0.7);line-height:1.6;">Hi <strong style="color:#ffffff;">${data.fullName}</strong>,</p>
    <p style="font-size:16px;color:rgba(255,255,255,0.7);line-height:1.6;">Your athlete application to A1 Vertex Athletics has been received. Our coaching staff will review your application and reach out within 2–3 business days.</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;">
      <tbody>
        ${data.dateOfBirth ? row('Date of Birth', data.dateOfBirth) : ''}
        ${data.school ? row('School', data.school) : ''}
        ${data.primaryEvents ? row('Primary Events', data.primaryEvents) : ''}
        ${data.personalBests ? row('Personal Bests', data.personalBests) : ''}
        ${data.phone ? row('Phone', data.phone) : ''}
        ${data.goals ? row('Goals & Experience', data.goals.replace(/\n/g, '<br />')) : ''}
      </tbody>
    </table>
    <div style="background:linear-gradient(135deg,rgba(34,211,238,0.08),rgba(236,72,153,0.08));border:1px solid rgba(34,211,238,0.2);border-radius:12px;padding:20px;margin-top:8px;">
      <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.6);line-height:1.6;">The 2026–2027 program accepts only <strong style="color:#ffffff;">12 athletes</strong> (6 boys, 6 girls). We'll be in touch soon.</p>
    </div>
  `);

  const adminHtml = baseTemplate(`
    <p style="font-size:18px;font-weight:900;color:#22d3ee;margin:0 0 24px;">New Athlete Application</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;">
      <tbody>
        ${row('Full Name', data.fullName)}
        ${row('Email', `<a href="mailto:${data.email}" style="color:#22d3ee;">${data.email}</a>`)}
        ${data.dateOfBirth ? row('Date of Birth', data.dateOfBirth) : ''}
        ${data.school ? row('School', data.school) : ''}
        ${data.primaryEvents ? row('Primary Events', data.primaryEvents) : ''}
        ${data.personalBests ? row('Personal Bests', data.personalBests) : ''}
        ${data.phone ? row('Phone', data.phone) : ''}
        ${data.goals ? row('Goals & Experience', data.goals.replace(/\n/g, '<br />')) : ''}
      </tbody>
    </table>
  `);

  await Promise.all([
    transporter.sendMail({
      from: FROM,
      to: data.email,
      subject: 'Athlete Application Received – A1 Vertex Athletics',
      html: userHtml,
    }),
    transporter.sendMail({
      from: FROM,
      to: ADMIN,
      subject: `New Athlete Application: ${data.fullName}`,
      html: adminHtml,
    }),
  ]);
}

// ─────────────────── PARENT REGISTRATION ───────────────────

export async function sendParentRegistrationEmails(data: {
  parentName: string;
  relationship?: string;
  athleteName?: string;
  emergencyContact?: string;
  email: string;
  phone?: string;
  notes?: string;
}) {
  const userHtml = baseTemplate(`
    <p style="font-size:16px;color:rgba(255,255,255,0.7);line-height:1.6;">Hi <strong style="color:#ffffff;">${data.parentName}</strong>,</p>
    <p style="font-size:16px;color:rgba(255,255,255,0.7);line-height:1.6;">Thank you for registering with A1 Vertex Athletics. We've received your parent registration and will be in touch shortly.</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;">
      <tbody>
        ${data.relationship ? row('Relationship to Athlete', data.relationship) : ''}
        ${data.athleteName ? row('Athlete Name', data.athleteName) : ''}
        ${data.emergencyContact ? row('Emergency Contact', data.emergencyContact) : ''}
        ${data.phone ? row('Phone', data.phone) : ''}
        ${data.notes ? row('Additional Notes', data.notes.replace(/\n/g, '<br />')) : ''}
      </tbody>
    </table>
    <p style="font-size:15px;color:rgba(255,255,255,0.5);line-height:1.6;">Questions? Reach us at <a href="mailto:contact@a1vertexathletics.com" style="color:#ec4899;">contact@a1vertexathletics.com</a>.</p>
  `);

  const adminHtml = baseTemplate(`
    <p style="font-size:18px;font-weight:900;color:#ec4899;margin:0 0 24px;">New Parent Registration</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;">
      <tbody>
        ${row('Parent / Guardian', data.parentName)}
        ${row('Email', `<a href="mailto:${data.email}" style="color:#ec4899;">${data.email}</a>`)}
        ${data.relationship ? row('Relationship', data.relationship) : ''}
        ${data.athleteName ? row('Athlete Name', data.athleteName) : ''}
        ${data.emergencyContact ? row('Emergency Contact', data.emergencyContact) : ''}
        ${data.phone ? row('Phone', data.phone) : ''}
        ${data.notes ? row('Additional Notes', data.notes.replace(/\n/g, '<br />')) : ''}
      </tbody>
    </table>
  `);

  await Promise.all([
    transporter.sendMail({
      from: FROM,
      to: data.email,
      subject: 'Parent Registration Received – A1 Vertex Athletics',
      html: userHtml,
    }),
    transporter.sendMail({
      from: FROM,
      to: ADMIN,
      subject: `New Parent Registration: ${data.parentName}`,
      html: adminHtml,
    }),
  ]);
}

// ─────────────────── GENERAL REGISTRATION ───────────────────

export async function sendRegistrationEmails(data: {
  name: string;
  age?: string;
  primaryEvent?: string;
  email: string;
  phone?: string;
  experience?: string;
}) {
  const userHtml = baseTemplate(`
    <p style="font-size:16px;color:rgba(255,255,255,0.7);line-height:1.6;">Hi <strong style="color:#ffffff;">${data.name}</strong>,</p>
    <p style="font-size:16px;color:rgba(255,255,255,0.7);line-height:1.6;">Your registration for the A1 Vertex Athletics 2026–2027 Elite Athlete Development Program has been received. We'll contact you within 2–3 business days to discuss next steps.</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;">
      <tbody>
        ${data.age ? row('Age', data.age) : ''}
        ${data.primaryEvent ? row('Primary Event', data.primaryEvent) : ''}
        ${data.phone ? row('Phone', data.phone) : ''}
        ${data.experience ? row('Athletic Background', data.experience.replace(/\n/g, '<br />')) : ''}
      </tbody>
    </table>
    <div style="background:linear-gradient(135deg,rgba(34,211,238,0.08),rgba(236,72,153,0.08));border:1px solid rgba(34,211,238,0.2);border-radius:12px;padding:20px;margin-top:8px;">
      <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#22d3ee;">What Happens Next</p>
      <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.6);line-height:1.6;">Performance testing · Movement analysis · Event placement · Program onboarding</p>
    </div>
  `);

  const adminHtml = baseTemplate(`
    <p style="font-size:18px;font-weight:900;color:#22d3ee;margin:0 0 24px;">New Athlete Registration</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;">
      <tbody>
        ${row('Name', data.name)}
        ${row('Email', `<a href="mailto:${data.email}" style="color:#22d3ee;">${data.email}</a>`)}
        ${data.age ? row('Age', data.age) : ''}
        ${data.primaryEvent ? row('Primary Event', data.primaryEvent) : ''}
        ${data.phone ? row('Phone', data.phone) : ''}
        ${data.experience ? row('Athletic Background', data.experience.replace(/\n/g, '<br />')) : ''}
      </tbody>
    </table>
  `);

  await Promise.all([
    transporter.sendMail({
      from: FROM,
      to: data.email,
      subject: 'Registration Received – A1 Vertex Athletics',
      html: userHtml,
    }),
    transporter.sendMail({
      from: FROM,
      to: ADMIN,
      subject: `New Registration: ${data.name}`,
      html: adminHtml,
    }),
  ]);
}

// ─────────────────── GROUP REGISTRATION ───────────────────

export async function sendGroupRegistrationEmails(data: {
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
  athletes: AthleteEntry[];
  boysCount: number;
  girlsCount: number;
}) {
  const athleteRows = data.athletes
    .map((a, i) => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
          <span style="font-size:11px;text-transform:uppercase;letter-spacing:0.15em;color:rgba(255,255,255,0.4);">Athlete ${i + 1}</span>
          <p style="margin:4px 0 0;font-size:15px;color:#ffffff;">${a.name || '—'}</p>
          <p style="margin:2px 0 0;font-size:13px;color:rgba(255,255,255,0.5);">Age: ${a.age || '—'} &nbsp;·&nbsp; ${a.gender === 'male' ? 'Boy' : a.gender === 'female' ? 'Girl' : '—'} &nbsp;·&nbsp; ${a.event || '—'}</p>
        </td>
      </tr>
    `)
    .join('');

  const userHtml = baseTemplate(`
    <p style="font-size:16px;color:rgba(255,255,255,0.7);line-height:1.6;">Hi <strong style="color:#ffffff;">${data.contactName}</strong>,</p>
    <p style="font-size:16px;color:rgba(255,255,255,0.7);line-height:1.6;">Your group registration for A1 Vertex Athletics has been received. Our coaching staff will review your submission and reach out within 2–3 business days.</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:16px;">
      <tbody>
        ${row('Total Athletes', String(data.athletes.length))}
        ${row('Boys', `${data.boysCount} / 6`)}
        ${row('Girls', `${data.girlsCount} / 6`)}
      </tbody>
    </table>
    <p style="font-size:13px;font-weight:700;color:#22d3ee;margin:24px 0 8px;">Athlete Roster</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:16px;">
      <tbody>${athleteRows}</tbody>
    </table>
    <div style="background:linear-gradient(135deg,rgba(34,211,238,0.08),rgba(236,72,153,0.08));border:1px solid rgba(34,211,238,0.2);border-radius:12px;padding:20px;margin-top:16px;">
      <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.6);line-height:1.6;">The program accepts a maximum of <strong style="color:#ffffff;">12 athletes</strong> (6 boys, 6 girls). We'll be in touch to confirm placement.</p>
    </div>
  `);

  const adminHtml = baseTemplate(`
    <p style="font-size:18px;font-weight:900;color:#22d3ee;margin:0 0 24px;">New Group Registration — ${data.athletes.length} Athletes</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;margin-bottom:20px;">
      <tbody>
        ${row('Contact Name', data.contactName)}
        ${row('Email', `<a href="mailto:${data.contactEmail}" style="color:#22d3ee;">${data.contactEmail}</a>`)}
        ${data.contactPhone ? row('Phone', data.contactPhone) : ''}
        ${row('Total Athletes', `${data.athletes.length} (${data.boysCount} boys · ${data.girlsCount} girls)`)}
      </tbody>
    </table>
    <p style="font-size:13px;font-weight:700;color:#22d3ee;margin:0 0 8px;">Athlete Roster</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:16px;">
      <tbody>${athleteRows}</tbody>
    </table>
  `);

  await Promise.all([
    transporter.sendMail({
      from: FROM,
      to: data.contactEmail,
      subject: `Group Registration Received (${data.athletes.length} athletes) – A1 Vertex Athletics`,
      html: userHtml,
    }),
    transporter.sendMail({
      from: FROM,
      to: ADMIN,
      subject: `New Group Registration: ${data.contactName} — ${data.athletes.length} athletes`,
      html: adminHtml,
    }),
  ]);
}
