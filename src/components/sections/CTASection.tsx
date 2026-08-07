'use client'

import Link from 'next/link'
import { Check, FileText } from '@phosphor-icons/react'

const items = [
  "A 30-minute call — no longer unless you want it to be",
  "We'll ask about your goals, not pitch our services",
  "Honest advice — even if we're not the right fit",
  'A clear next step — never a vague follow-up',
]

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-navy text-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(ellipse at 20% 30%, rgba(45,91,255,0.15), transparent 60%)' }}
      />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: copy */}
        <div className="aos">
          <span className="text-sm font-600 text-teal uppercase tracking-wider">Let&apos;s talk</span>
          <h2 className="text-3xl md:text-4xl font-700 mt-3 mb-6 leading-tight">
            Thinking about building a team in India?<br />
            <em className="not-italic text-teal">Start with a conversation.</em>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
            There&apos;s no script, no sales deck on the first call. Just an honest conversation about where you are, what you&apos;re hoping to achieve, and whether we&apos;re the right fit for each other.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book-a-call"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue text-white font-600 rounded-lg hover:bg-blue-light transition-colors"
            >
              Book a Call →
            </Link>
            <Link
              href="/resources/gcc-guide"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-600 rounded-lg hover:bg-white/5 transition-colors"
            >
              <FileText weight="bold" size={16} />
              Download the GCC Guide
            </Link>
          </div>
        </div>

        {/* Right: reassurance card */}
        <div className="aos aos-delay-1 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
          <div className="text-xs font-700 text-white/50 uppercase tracking-wider mb-5">What to expect</div>
          <ul className="space-y-4 mb-6">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-white/85">
                <span className="w-5 h-5 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check weight="bold" size={12} className="text-teal" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-white/10 flex items-center gap-3">
            <div className="flex -space-x-2">
              {['A', 'R', 'S'].map((letter, idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 rounded-full bg-navy-mid border-2 border-navy flex items-center justify-center text-xs font-700 text-white/80"
                >
                  {letter}
                </div>
              ))}
            </div>
            <span className="text-sm text-white/60">Our team typically responds within 4 hours</span>
          </div>
        </div>
      </div>
    </section>
  )
}
