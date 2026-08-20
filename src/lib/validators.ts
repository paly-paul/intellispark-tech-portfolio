// Same pattern used server-side in the /api/contact and /api/newsletter routes —
// kept in sync so client-side validation never disagrees with what the API accepts.
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidEmail(value: string) {
  return EMAIL_RE.test(value.trim())
}
