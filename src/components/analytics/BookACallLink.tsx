'use client'

import Link from 'next/link'
import { CSSProperties, ReactNode } from 'react'
import { trackEvent } from '@/lib/analytics'

interface BookACallLinkProps {
  /** Where on the site this CTA lives — shows up on the `location` param in GA4. */
  location: string
  className?: string
  style?: CSSProperties
  children: ReactNode
}

/**
 * Drop-in replacement for `<Link href="/book-a-call">` that fires the
 * `book_a_call` GA4 event (our primary conversion) before navigating.
 */
export default function BookACallLink({ location, className, style, children }: BookACallLinkProps) {
  return (
    <Link
      href="/book-a-call"
      className={className}
      style={style}
      onClick={() => trackEvent('book_a_call', { location })}
    >
      {children}
    </Link>
  )
}
