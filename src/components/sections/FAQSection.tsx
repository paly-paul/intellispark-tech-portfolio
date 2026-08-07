'use client'

import { useState, type ReactNode } from 'react'
import { Plus } from '@phosphor-icons/react'

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: 'How much does it cost to set up a GCC through Intellispark?',
    answer: 'The honest answer is: it depends on your model, team size, and the roles you&apos;re hiring for. We don&apos;t have a one-size-fits-all price because we don&apos;t think that&apos;s the right approach.',
  },
  {
    question: 'How long does it realistically take to get a team up and running?',
    answer: 'For staff augmentation — placing individuals into your existing team — we can typically make first placements within 2–4 weeks of agreeing the brief.',
  },
  {
    question: 'We&apos;ve had bad experiences with offshore teams before. How is this different?',
    answer: 'This is the most common thing we hear — and we take it seriously, because the concern is usually valid. Most offshore failures come down to three things: misaligned expectations upfront, poor candidate matching, and a vendor who disappears after placement.',
  },
  {
    question: 'How do you ensure the quality of candidates you place?',
    answer: 'Every candidate goes through a multi-stage process: technical assessment, communication evaluation, a structured interview with our internal team, and reference checks. We only present candidates we&apos;d personally be comfortable hiring.',
  },
  {
    question: 'Will we have direct control over our team, or does everything go through Intellispark?',
    answer: 'Your team works directly for you — on your tools, in your workflows, reporting to your managers. Intellispark handles the employment infrastructure (payroll, HR, compliance, facilities), but the day-to-day direction of the team is entirely yours.',
  },
  {
    question: 'What are the legal and compliance requirements for setting up in India?',
    answer: 'Setting up in India involves entity registration, tax compliance (GST, TDS), local labour law adherence, and depending on your sector, potential regulatory considerations. It&apos;s manageable — but it requires knowing what you&apos;re doing.',
  },
  {
    question: 'What&apos;s the difference between a GCC, BOT, and staff augmentation — and how do I know which is right for us?',
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
    question: 'What happens if things don&apos;t go as planned — can we exit or change direction?',
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
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 aos text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-sm font-600 text-teal uppercase tracking-wider">Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-700 text-navy">Frequently asked questions.</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="aos bg-white rounded-lg border border-gray-200 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-start justify-between hover:bg-gray-50 transition-colors text-left"
              >
                <span className="font-600 text-gray-900 text-base leading-relaxed">{faq.question}</span>
                <Plus
                  weight="bold"
                  size={20}
                  className={`flex-shrink-0 mt-0.5 transition-transform ${openIdx === idx ? 'rotate-45' : ''}`}
                />
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-4 pt-0 text-gray-600 text-base leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
