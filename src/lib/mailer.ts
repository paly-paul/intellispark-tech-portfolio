import nodemailer from 'nodemailer'

/**
 * Shared Gmail SMTP transporter, built lazily so a missing env var surfaces as a
 * normal API error instead of crashing the module at import time.
 */
let transporter: ReturnType<typeof nodemailer.createTransport> | null = null

export function getTransporter() {
  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_APP_PASSWORD

  if (!user || !pass) {
    return null
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    })
  }

  return transporter
}

export function getFromAddress() {
  const user = process.env.GMAIL_USER
  return user ? `Intellispark Technologies <${user}>` : undefined
}
