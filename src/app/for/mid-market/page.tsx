'use client'

import { ArrowUpRight } from '@phosphor-icons/react'
import ConsolePage from '@/components/templates/ConsolePage'

export default function MidMarket() {
  return (
    <ConsolePage
      eyebrow="Audience · Mid-Market"
      icon={<ArrowUpRight weight="bold" size={16} />}
      h1="You know you need India. You&apos;re not sure how to do it right."
      intro="Mid-market companies want to scale engineering, reduce costs, and enter the Indian market — but the risk feels high. We de-risk it. We help you build a centre that actually works."
      accent="#059669"
      badges={['Strategic scaling', 'Risk management']}
      navSections={[
        { id: 'the-reality', label: 'The reality' },
        { id: 'what-goes-wrong', label: 'What goes wrong' },
        { id: 'how-we-help', label: 'How we help' },
        { id: 'timeline', label: 'Timeline' },
      ]}
      related={[
        { label: 'GCC Setup', href: '/gcc-setup' },
        { label: 'BOT / COPO', href: '/bot-copo' },
        { label: 'For Enterprise', href: '/for/enterprise' },
      ]}
    >
      {/* Section: The reality */}
      <section id="the-reality" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-emerald-600 uppercase tracking-wider">The reality</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">You can save XX% on engineering costs. But it&apos;s not as simple as everyone says.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          India is real cost-savings. But it&apos;s not just hiring cheap. You need to think about:
        </p>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-emerald-600 font-700 flex-shrink-0">→</span>
              <span className="text-gray-700 text-sm">Setting up an entity in a foreign country with tax, legal, and HR implications.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-700 flex-shrink-0">→</span>
              <span className="text-gray-700 text-sm">Finding people who speak your language, understand your culture, and can deliver quality.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-700 flex-shrink-0">→</span>
              <span className="text-gray-700 text-sm">Managing people across 12 time zones and 10,000 miles away.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-700 flex-shrink-0">→</span>
              <span className="text-gray-700 text-sm">Building systems and processes that actually work with that distance.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section: What goes wrong */}
      <section id="what-goes-wrong" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-emerald-600 uppercase tracking-wider">What goes wrong</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">How mid-market India initiatives usually fail.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          We&apos;ve seen this pattern a hundred times:
        </p>
        <div className="space-y-3">
          {[
            'Hire fast, build culture slow. Attrition hits XX% by month 6.',
            'Poor vetting. You end up with people who talk a good game but can&apos;t deliver.',
            'Communication breakdown. Time zones + distance + poor processes = miscaligned expectations.',
            'No leadership in place. You end up micromanaging or ignoring the centre.',
            'Technology and process gaps. Your India team isn&apos;t integrated into your systems.',
            'Cost control failure. You budgeted for XX people but end up spending XX% more.',
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <span className="text-red-600 font-700 flex-shrink-0">✗</span>
              <span className="text-gray-900 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section: How we help */}
      <section id="how-we-help" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-emerald-600 uppercase tracking-wider">How we help</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">We&apos;ve built enough centres to avoid these traps.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          We help you build a centre that works — efficiently, at scale, with real people who stay.
        </p>
        <div className="space-y-4">
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Design from day one</h3>
            <p className="text-sm text-gray-600">
              We help you design the team structure, hiring strategy, and operations model before you hire a single person. This prevents chaos later.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Smart hiring</h3>
            <p className="text-sm text-gray-600">
              We source and vet candidates heavily. We don&apos;t just find people — we find people who fit your culture and can actually deliver.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Leadership embedded</h3>
            <p className="text-sm text-gray-600">
              We help you place or build the director/manager of the centre. That person is your cultural bridge, not a vendor rep.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Process and integration</h3>
            <p className="text-sm text-gray-600">
              We set up systems, communication cadences, and tools that make distance irrelevant. Your India centre feels like part of the company.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Ongoing coaching</h3>
            <p className="text-sm text-gray-600">
              We stay engaged through month XX. We help you adjust as you learn. We flag problems early.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Timeline */}
      <section id="timeline" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-emerald-600 uppercase tracking-wider">Timeline</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">From decision to first hire — XX days. From first hire to productive centre — XX months.</h2>
        </div>
        <div className="space-y-4">
          <div className="border-l-4 border-emerald-500 pl-6 py-3">
            <h3 className="font-700 text-gray-900 mb-2">Month 1: Design and setup</h3>
            <p className="text-gray-600 text-sm">Define team structure, roles, hiring profile. Set up entity, systems, processes. Get ready to hire.</p>
          </div>
          <div className="border-l-4 border-emerald-500 pl-6 py-3">
            <h3 className="font-700 text-gray-900 mb-2">Month 2–3: Hiring</h3>
            <p className="text-gray-600 text-sm">Source, interview, and onboard your first batch of XX people. Build culture from day one.</p>
          </div>
          <div className="border-l-4 border-emerald-500 pl-6 py-3">
            <h3 className="font-700 text-gray-900 mb-2">Month 4–6: Integration and ramping</h3>
            <p className="text-gray-600 text-sm">Your team is onboarded. They&apos;re productive. You&apos;re learning what works and what doesn&apos;t.</p>
          </div>
          <div className="border-l-4 border-emerald-500 pl-6 py-3">
            <h3 className="font-700 text-gray-900 mb-2">Month 6+: Scale on demand</h3>
            <p className="text-gray-600 text-sm">Ready to grow to XX people? Keep your centre lean? Pivot the team? We help you do it efficiently.</p>
          </div>
        </div>
      </section>
    </ConsolePage>
  )
}
