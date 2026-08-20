import { NextRequest, NextResponse } from 'next/server'
import { getTransporter, getFromAddress } from '@/lib/mailer'
import { contactAdminEmail, contactAckEmail } from '@/lib/email-templates'
import { getDb, leads } from '@/lib/db'

export const runtime = 'nodejs'

interface ContactPayload {
  name: string
  company: string
  email: string
  companySize?: string
  message: string
}

interface ValidatedContact {
  name: string
  company: string
  email: string
  companySize: string
  message: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(body: Partial<ContactPayload>): { ok: true; data: ValidatedContact } | { ok: false; error: string } {
  const name = body.name?.trim()
  const company = body.company?.trim()
  const email = body.email?.trim()
  const message = body.message?.trim()
  const companySize = body.companySize?.trim() ?? ''

  if (!name || !company || !email || !message) {
    return { ok: false, error: 'Name, company, email, and message are required.' }
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: 'Please provide a valid email address.' }
  }
  if (name.length > 200 || company.length > 200 || message.length > 5000 || email.length > 320) {
    return { ok: false, error: 'One or more fields exceed the maximum allowed length.' }
  }

  return { ok: true, data: { name, company, email, companySize, message } }
}

export async function POST(request: NextRequest) {
  const transporter = getTransporter()
  const fromEmail = getFromAddress()
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL

  if (!transporter || !fromEmail || !adminEmail) {
    console.error('Contact API misconfigured: missing GMAIL_USER, GMAIL_APP_PASSWORD, or ADMIN_NOTIFICATION_EMAIL')
    return NextResponse.json({ error: 'The form is temporarily unavailable. Please email us directly.' }, { status: 503 })
  }

  let body: Partial<ContactPayload>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const result = validate(body)
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 })
  }
  const { name, company, email, companySize, message } = result.data

  // Persist the lead — best-effort, so a DB hiccup (or no TURSO_DATABASE_URL configured
  // yet) doesn't block the notification emails, which remain the source of truth.
  const db = getDb()
  if (db) {
    try {
      await db.insert(leads).values({ name, company, email, companySize, message })
    } catch (dbError) {
      console.error('Failed to save lead to database:', dbError)
    }
  } else {
    console.warn('TURSO_DATABASE_URL not set — lead was not saved to the database.')
  }

  try {
    // Admin notification — sent first so a failure here (not the ack email) fails the request.
    const admin = contactAdminEmail({ name, company, email, companySize, message })
    await transporter.sendMail({
      from: fromEmail,
      to: adminEmail,
      replyTo: email,
      subject: admin.subject,
      html: admin.html,
    })

    // Acknowledgement to the submitter — best-effort, doesn't fail the request if it errors.
    try {
      const ack = contactAckEmail({ name })
      await transporter.sendMail({
        from: fromEmail,
        to: email,
        replyTo: adminEmail,
        subject: ack.subject,
        html: ack.html,
      })
    } catch (ackError) {
      console.error('Failed to send acknowledgement email:', ackError)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Failed to send admin notification email:', error)
    return NextResponse.json({ error: 'Something went wrong sending your message. Please try again or email us directly.' }, { status: 502 })
  }
}
