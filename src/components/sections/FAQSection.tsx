'use client'

import { useState, type ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight, Plus } from '@phosphor-icons/react'

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: 'How much does it cost to set up a GCC through Intellispark?',
    answer: (
      <div className="space-y-3">
        <p>The honest answer is: it depends on your model, team size, and the roles you&apos;re hiring for. We don&apos;t have a one-size-fits-all price because we don&apos;t think that&apos;s the right approach.</p>
        <p>What we can tell you is that a typical GCC setup through Intellispark — including entity formation, initial hires, and first 90 days of operations — is structured so that the total investment is recovered within the first 12–18 months through the cost differential versus onshore hiring.</p>
        <p>We&apos;ll give you a detailed, itemised cost estimate after our first discovery call — before you make any commitment. <Link href="/book-a-call" className="text-blue font-600 hover:underline">Book a call</Link> to get started.</p>
      </div>
    ),
  },
  {
    question: 'How long does it realistically take to get a team up and running?',
    answer: 'For staff augmentation — placing individuals into your existing team — we can typically make first placements within 2–4 weeks of agreeing the brief.',
  },
  {
    question: 'We\'ve had bad experiences with offshore teams before. How is this different?',
    answer: 'This is the most common thing we hear — and we take it seriously, because the concern is usually valid. Most offshore failures come down to three things: misaligned expectations upfront, poor candidate matching, and a vendor who disappears after placement.',
  },
  {
    question: 'How do you ensure the quality of candidates you place?',
    answer: 'Every candidate goes through a multi-stage process: technical assessment, communication evaluation, a structured interview with our internal team, and reference checks. We only present candidates we\'d personally be comfortable hiring.',
  },
  {
    question: 'Will we have direct control over our team, or does everything go through Intellispark?',
    answer: 'Your team works directly for you — on your tools, in your workflows, reporting to your managers. Intellispark handles the employment infrastructure (payroll, HR, compliance, facilities), but the day-to-day direction of the team is entirely yours.',
  },
  {
    question: 'What are the legal and compliance requirements for setting up in India?',
    answer: 'Setting up in India involves entity registration, tax compliance (GST, TDS), local labour law adherence, and depending on your sector, potential regulatory considerations. It\'s manageable — but it requires knowing what you\'re doing.',
  },
  {
    question: 'What\'s the difference between a GCC, BOT, and staff augmentation — and how do I know which is right for us?',
    answer: (
      <div className="space-y-3">
        <p><strong className="text-gray-900">GCC (Global Capability Centre)</strong> — You own the entity and the team directly. Higher upfront investment, but full control and maximum long-term cost efficiency. Best for companies committed to India as a strategic location.</p>
        <p><strong className="text-gray-900">BOT (Build-Operate-Transfer)</strong> — We build and run the operation, then hand it over to you on a pre-agreed schedule. Lower initial risk, structured path to ownership. Good for companies who want to validate before committing fully.</p>
        <p><strong className="text-gray-900">Staff Augmentation</strong> — We place individual professionals into your existing team. Fastest to start, most flexible, no long-term infrastructure commitment. Best for specific role gaps or teams that aren&apos;t ready for a full GCC yet.</p>
        <p>We&apos;ll help you figure out the right model on a discovery call — most companies land somewhere along this spectrum rather than at one fixed point.</p>
      </div>
    ),
  },
  {
    question: 'What happens if things don\'t go as planned — can we exit or change direction?',
    answer: (
      <div className="space-y-3">
        <p>Yes — and we think it&apos;s important to be clear about this upfront. For staff augmentation, notice periods are straightforward and specified in your agreement. For GCC and BOT engagements, we build exit and transition provisions into every contract so you&apos;re never locked in without a clear path forward.</p>
        <p>We&apos;d rather design flexibility in from the start than have a difficult conversation later. If your situation changes — business priorities shift, the engagement isn&apos;t working — we&apos;ll work with you to find the right resolution, not hold you to something that no longer makes sense.</p>
      </div>
    ),
  },
]

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto faq__inner">
        <div className="faq__left aos">
          <span className="faq__eyebrow">FAQ</span>
          <h2 className="faq__title font-bold font-900">Questions we hear most often.</h2>
          <p className="faq__sub">
            Honest answers to the things companies actually want to know before getting started.
          </p>
          <div className="faq__nudge">
            <p>
              Still have questions? We&apos;re happy to talk through your specific situation — no obligation, no pressure.
            </p>
            <a href="/book-a-call" className="btn-primary">
              Book a Call <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="faq__accordion aos">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openIdx === idx ? 'open' : ''}`}>
              <button
                type="button"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="faq-item__btn"
                aria-expanded={openIdx === idx}
              >
                <span className="faq-item__question">{faq.question}</span>
                <span className="faq-item__icon">
                  <Plus weight="bold" size={12} />
                </span>
              </button>

              <div className="faq-item__body">
                <div className="faq-item__answer">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
