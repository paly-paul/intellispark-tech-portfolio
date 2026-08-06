'use client'

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-navy text-white">
      <div className="max-w-4xl mx-auto text-center aos">
        <h2 className="text-3xl md:text-4xl font-700 mb-6">Ready to build your India team?</h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
          Let&apos;s talk through your goals and explore the right path forward. No pressure, no pitch — just a conversation.
        </p>
        <Link
          href="/book-a-call"
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue text-white font-600 rounded-lg hover:bg-blue-light transition-colors"
        >
          Book a Call
          <span>→</span>
        </Link>
      </div>
    </section>
  )
}
