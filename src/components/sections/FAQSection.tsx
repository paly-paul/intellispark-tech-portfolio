'use client'

import { useState } from 'react'
import { Plus } from '@phosphor-icons/react'

const faqs = [
  {
    question: 'How long does it take to set up a GCC?',
    answer: 'Our fastest GCC setup takes 90 days from kickoff to first hire. That includes entity formation, compliance, office infrastructure, and team onboarding. Every engagement is different, but we focus on speed without cutting corners.',
  },
  {
    question: 'Do we own the GCC, or is it staffed by contractors?',
    answer: 'You own the GCC completely. Your India team is your employees — hired, managed and developed by you. We handle the setup and initial hiring; you own the governance and strategic direction.',
  },
  {
    question: 'What if we want to bring existing India team under a GCC structure?',
    answer: 'That&apos;s a GCC optimisation engagement. We audit the existing operation, rebuild governance, refresh the team if needed, and often consolidate costs by 20-30%. Most companies realise they&apos;re paying significant premiums for a fractured setup.',
  },
  {
    question: 'Can we scale the team up or down quickly?',
    answer: 'Yes — that&apos;s one of the key advantages of a GCC. Hiring cycles are typically 4-6 weeks; attrition rates in Kochi are significantly lower than other Indian cities. If you need to reduce headcount, we help manage transitions transparently.',
  },
  {
    question: 'What happens if things don&apos;t go as planned — can we exit or change direction?',
    answer: 'Yes — and we think it&apos;s important to be clear about this upfront. For staff augmentation, notice periods are straightforward and specified in your agreement. For GCC and BOT engagements, we build exit and transition provisions into every contract so you&apos;re never locked in without a clear path forward.',
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
