import { NextRequest, NextResponse } from 'next/server'
import { getTransporter, getFromAddress } from '@/lib/mailer'
import { newsletterAdminEmail, newsletterAckEmail } from '@/lib/email-templates'
import { getDb, subscribers } from '@/lib/db'

export const runtime = 'nodejs'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  const transporter = getTransporter()
  const fromEmail = getFromAddress()
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL

  if (!transporter || !fromEmail || !adminEmail) {
    console.error('Newsletter API misconfigured: missing GMAIL_USER, GMAIL_APP_PASSWORD, or ADMIN_NOTIFICATION_EMAIL')
    return NextResponse.json({ error: 'Newsletter signup is temporarily unavailable.' }, { status: 503 })
  }

  let body: { email?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const email = body.email?.trim()
  if (!email || !EMAIL_RE.test(email) || email.length > 320) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
  }

  // Persist the subscriber — best-effort, so a DB hiccup (or no TURSO_DATABASE_URL
  // configured yet) doesn't block the notification emails. `alreadySubscribed` stays
  // false (treating the signup as new) whenever we can't actually tell — no DB
  // configured, or the write itself failed.
  let alreadySubscribed = false
  const db = getDb()
  if (db) {
    try {
      const inserted = await db.insert(subscribers).values({ email }).onConflictDoNothing().returning({ id: subscribers.id })
      alreadySubscribed = inserted.length === 0
    } catch (dbError) {
      console.error('Failed to save subscriber to database:', dbError)
    }
  } else {
    console.warn('TURSO_DATABASE_URL not set — subscriber was not saved to the database.')
  }

  if (alreadySubscribed) {
    return NextResponse.json({ ok: true, alreadySubscribed: true })
  }

  try {
    // Gmail SMTP has no mailing-list/audience concept — this just notifies the admin
    // inbox per signup. Subscribers need to be tracked manually (or added to a real
    // mailing list tool later) from these notification emails.
    const admin = newsletterAdminEmail(email)
    await transporter.sendMail({
      from: fromEmail,
      to: adminEmail,
      replyTo: email,
      subject: admin.subject,
      html: admin.html,
    })
  } catch (error) {
    console.error('Failed to send newsletter admin notification:', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 502 })
  }

  // Confirmation to the subscriber — best-effort, doesn't fail the request if it errors.
  try {
    const ack = newsletterAckEmail(email)
    await transporter.sendMail({
      from: fromEmail,
      to: email,
      replyTo: adminEmail,
      subject: ack.subject,
      html: ack.html,
    })
  } catch (ackError) {
    console.error('Failed to send newsletter confirmation email:', ackError)
  }

  return NextResponse.json({ ok: true, alreadySubscribed: false })
}
