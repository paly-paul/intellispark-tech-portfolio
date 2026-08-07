'use client'

import Link from 'next/link'
import { Check, FileText } from '@phosphor-icons/react'
import ArrowRight from '@/components/icons/ArrowRight'

const items = [
  "A 30-minute call — no longer unless you want it to be",
  "We'll ask about your goals, not pitch our services",
  "Honest advice — even if we're not the right fit",
  'A clear next step — never a vague follow-up',
]

export default function CTASection() {
  return (
    <section className="cta-strip aos" aria-labelledby="cta-title">
      <div className="cta-strip__bg" aria-hidden="true" />
      <div className="cta-strip__inner">
        <div className="cta-strip__copy aos">
          <span className="cta-strip__eyebrow">Let&apos;s talk</span>
          <h2 id="cta-title" className="cta-strip__title">
            Thinking about building a team in India?<br />
            <em>Start with a conversation.</em>
          </h2>
          <p className="cta-strip__sub">
            There&apos;s no script, no sales deck on the first call. Just an honest conversation about where you are, what you&apos;re hoping to achieve, and whether we&apos;re the right fit for each other.
          </p>
          <div className="cta-strip__buttons">
            <Link href="/book-a-call" className="btn-primary">
              Book a Call <ArrowRight size={15} />
            </Link>
            <Link href="/resources/gcc-guide" className="btn-secondary">
              <FileText weight="bold" size={16} />
              Download the GCC Guide
            </Link>
          </div>
        </div>

        <div className="cta-strip__card aos aos-delay-1">
          <div className="cta-card__label">What to expect</div>
          <ul className="cta-card__items">
            {items.map((item, idx) => (
              <li key={idx} className="cta-card__item">
                <span className="cta-card__check" aria-hidden="true">
                  <Check weight="bold" size={12} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="cta-card__divider" aria-hidden="true" />
          <div className="cta-card__footer">
            <div className="cta-card__avatar-stack" aria-hidden="true">
              {['A', 'R', 'S'].map((letter, idx) => (
                <div key={idx} className={`avatar avatar--${idx + 1}`}>{letter}</div>
              ))}
            </div>
            <span>Our team typically responds within 4 hours</span>
          </div>
        </div>
      </div>
    </section>
  )
}
