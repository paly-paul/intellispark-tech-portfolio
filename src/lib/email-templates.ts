/**
 * Branded HTML email templates for transactional mail (contact form + newsletter).
 * Built as table-based layouts with inline styles for cross-client reliability
 * (Outlook's Word rendering engine ignores most modern CSS, including flexbox,
 * grid, and background gradients on inline styles — a solid background-color is
 * always set first as a fallback, with a gradient layered on top for clients
 * that support it).
 */

const COLORS = {
  navy: '#0A0F1E',
  navyMid: '#0F1628',
  teal: '#00B8A9',
  tealLight: '#E6FBF9',
  blue: '#2D5BFF',
  blueLight: '#5B82FF',
  bg: '#F1F3F5',
  card: '#F8F9FA',
  border: '#E9ECEF',
  gray600: '#6C757D',
  gray900: '#212529',
} as const

const FONT_STACK = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Wraps body content in the shared header/footer shell. */
function shell(bodyHtml: string, preheader: string) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light" />
    <title>Intellispark Technologies</title>
  </head>
  <body style="margin:0; padding:0; background-color:${COLORS.bg}; font-family:${FONT_STACK};">
    <div style="display:none; max-height:0; overflow:hidden; opacity:0;">${escapeHtml(preheader)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLORS.bg}; padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%; max-width:600px; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 1px 3px rgba(10,15,30,0.08);">
            <!-- Header -->
            <tr>
              <td style="background-color:${COLORS.navy}; background-image:linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyMid} 100%); padding:32px 32px 28px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="font-size:19px; font-weight:800; color:#ffffff; letter-spacing:-0.3px; font-family:${FONT_STACK};">
                      Intellispark <span style="color:${COLORS.teal};">Technologies</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top:8px;">
                      <span style="display:inline-block; background-color:rgba(255,255,255,0.10); border:1px solid rgba(255,255,255,0.14); border-radius:100px; padding:5px 12px; font-size:11px; font-weight:600; color:${COLORS.teal}; letter-spacing:0.3px; font-family:${FONT_STACK};">
                        &#9679;&nbsp; GCC &amp; Talent Solutions · Kochi, India
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Accent bar -->
            <tr>
              <td style="height:3px; line-height:3px; font-size:0; background-color:${COLORS.teal}; background-image:linear-gradient(90deg, ${COLORS.teal} 0%, ${COLORS.blueLight} 100%);">&nbsp;</td>
            </tr>
            <!-- Body -->
            <tr>
              <td style="padding:36px 32px; font-family:${FONT_STACK};">
                ${bodyHtml}
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="padding:24px 32px 32px; border-top:1px solid ${COLORS.border};">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="font-size:13px; color:${COLORS.gray600}; font-family:${FONT_STACK}; line-height:1.6;">
                      <strong style="color:${COLORS.gray900};">Intellispark Technologies</strong><br />
                      Kochi, Kerala, India<br />
                      <a href="mailto:talkto@intellispark.tech" style="color:${COLORS.blue}; text-decoration:none;">talkto@intellispark.tech</a>
                      &nbsp;·&nbsp;
                      <a href="tel:+919846517517" style="color:${COLORS.blue}; text-decoration:none;">+91-9846-517-517</a>
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
</html>`
}

function detailRow(label: string, value: string) {
  return `<tr>
    <td style="padding:12px 16px; border-bottom:1px solid ${COLORS.border}; font-family:${FONT_STACK};">
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.6px; color:${COLORS.teal}; margin-bottom:3px;">${escapeHtml(label)}</div>
      <div style="font-size:14.5px; font-weight:600; color:${COLORS.gray900};">${value}</div>
    </td>
  </tr>`
}

function ctaButton(label: string, href: string) {
  return `<table role="presentation" cellpadding="0" cellspacing="0">
    <tr>
      <td style="background-color:${COLORS.blue}; border-radius:10px;">
        <a href="${href}" style="display:inline-block; padding:12px 24px; font-size:14px; font-weight:600; color:#ffffff; text-decoration:none; font-family:${FONT_STACK};">${escapeHtml(label)} &rarr;</a>
      </td>
    </tr>
  </table>`
}

interface ContactSubmission {
  name: string
  company: string
  email: string
  companySize: string
  message: string
}

export function contactAdminEmail(data: ContactSubmission) {
  const { name, company, email, companySize, message } = data
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

  const body = `
    <h1 style="margin:0 0 6px; font-size:22px; font-weight:800; color:${COLORS.gray900}; letter-spacing:-0.3px;">New Book a Call request</h1>
    <p style="margin:0 0 24px; font-size:14.5px; color:${COLORS.gray600}; line-height:1.6;">Someone just submitted the "Book a Call" form on intellispark.tech.</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLORS.card}; border:1px solid ${COLORS.border}; border-radius:14px; overflow:hidden; margin-bottom:24px;">
      ${detailRow('Name', escapeHtml(name))}
      ${detailRow('Company', escapeHtml(company))}
      ${detailRow('Email', `<a href="mailto:${escapeHtml(email)}" style="color:${COLORS.blue}; text-decoration:none;">${escapeHtml(email)}</a>`)}
      ${detailRow('Company size', escapeHtml(companySize || 'Not specified'))}
    </table>

    <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.6px; color:${COLORS.teal}; margin-bottom:8px;">Message</div>
    <div style="background-color:#ffffff; border-left:3px solid ${COLORS.teal}; padding:14px 18px; margin-bottom:28px; font-size:14.5px; color:${COLORS.gray900}; line-height:1.7;">${safeMessage}</div>

    ${ctaButton(`Reply to ${name}`, `mailto:${email}`)}
  `

  return {
    subject: `New Book a Call request — ${company}`,
    html: shell(body, `New lead: ${name} from ${company}`),
  }
}

export function contactAckEmail(data: Pick<ContactSubmission, 'name'>) {
  const safeName = escapeHtml(data.name)

  const body = `
    <h1 style="margin:0 0 6px; font-size:22px; font-weight:800; color:${COLORS.gray900}; letter-spacing:-0.3px;">Thanks for reaching out, ${safeName}.</h1>
    <p style="margin:0 0 24px; font-size:15px; color:${COLORS.gray600}; line-height:1.7;">
      We've received your message and someone from our team will get back to you within
      <span style="display:inline-block; background-color:${COLORS.tealLight}; color:#007A72; font-weight:700; padding:2px 10px; border-radius:100px; font-size:13.5px;">24 hours</span>.
    </p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLORS.card}; border:1px solid ${COLORS.border}; border-radius:14px; margin-bottom:28px;">
      <tr>
        <td style="padding:20px 22px;">
          <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.6px; color:${COLORS.teal}; margin-bottom:14px;">What happens next</div>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding-bottom:12px; font-size:14px; color:${COLORS.gray900}; font-family:${FONT_STACK};">
                <span style="color:${COLORS.teal}; font-weight:800;">1.</span>&nbsp; We review your goals and timeline
              </td>
            </tr>
            <tr>
              <td style="padding-bottom:12px; font-size:14px; color:${COLORS.gray900}; font-family:${FONT_STACK};">
                <span style="color:${COLORS.teal}; font-weight:800;">2.</span>&nbsp; We reply with a few times for a 30-minute call
              </td>
            </tr>
            <tr>
              <td style="font-size:14px; color:${COLORS.gray900}; font-family:${FONT_STACK};">
                <span style="color:${COLORS.teal}; font-weight:800;">3.</span>&nbsp; An honest conversation — no pitch deck, no pressure
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <p style="margin:0 0 28px; font-size:14.5px; color:${COLORS.gray600}; line-height:1.7;">
      In the meantime, feel free to reply directly to this email if you'd like to add anything.
    </p>

    ${ctaButton('Visit intellispark.tech', 'https://intellispark.tech')}

    <p style="margin:28px 0 0; font-size:14px; color:${COLORS.gray900};">— The Intellispark team</p>
  `

  return {
    subject: 'We received your message — Intellispark Technologies',
    html: shell(body, "We've received your message and will be in touch within 24 hours."),
  }
}

export function newsletterAdminEmail(email: string) {
  const safeEmail = escapeHtml(email)
  const body = `
    <h1 style="margin:0 0 6px; font-size:22px; font-weight:800; color:${COLORS.gray900}; letter-spacing:-0.3px;">New newsletter subscriber</h1>
    <p style="margin:0 0 24px; font-size:14.5px; color:${COLORS.gray600}; line-height:1.6;">Someone subscribed to updates from the footer of intellispark.tech.</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLORS.card}; border:1px solid ${COLORS.border}; border-radius:14px; overflow:hidden;">
      ${detailRow('Email', `<a href="mailto:${safeEmail}" style="color:${COLORS.blue}; text-decoration:none;">${safeEmail}</a>`)}
    </table>
  `

  return {
    subject: 'New newsletter subscriber',
    html: shell(body, `New subscriber: ${email}`),
  }
}

export function newsletterAckEmail(email: string) {
  const body = `
    <h1 style="margin:0 0 6px; font-size:22px; font-weight:800; color:${COLORS.gray900}; letter-spacing:-0.3px;">You're subscribed.</h1>
    <p style="margin:0 0 28px; font-size:15px; color:${COLORS.gray600}; line-height:1.7;">
      Thanks for signing up. You'll get occasional insights on talent, GCC operations, and what's changing in the India market — nothing more, no spam.
    </p>

    ${ctaButton('Explore our work', 'https://intellispark.tech/case-studies')}

    <p style="margin:28px 0 0; font-size:14px; color:${COLORS.gray900};">— The Intellispark team</p>
    <p style="margin:16px 0 0; font-size:12.5px; color:${COLORS.gray600};">Didn't sign up for this? You can ignore this email or let us know at <a href="mailto:talkto@intellispark.tech" style="color:${COLORS.blue};">talkto@intellispark.tech</a>.</p>
  `

  return {
    subject: "You're subscribed — Intellispark Technologies",
    html: shell(body, `Confirmed: ${email} is subscribed to Intellispark updates.`),
  }
}
