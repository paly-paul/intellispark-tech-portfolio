'use client'

import { Leaf, XCircle, Buildings, Users, OfficeChair, CurrencyCircleDollar, Handshake, ChartBar } from '@phosphor-icons/react'
import ConsolePage from '@/components/templates/ConsolePage'

export default function MidMarket() {
  return (
    <ConsolePage
      eyebrow="FOR · MID-MARKET COMPANIES"
      icon={<Leaf weight="bold" size={16} />}
      h1="Exploring India for the first time?"
      h1ClassName="text-3xl md:text-[44px] font-900 leading-[1.1] mb-6 font-bold"
      intro="You've probably heard the case for an India team. You may have even looked at it before and walked away. We work with mid-market companies at exactly this stage — and we take the uncertainty seriously, because it's usually warranted."
      accent="#2D5BFF"
      badges={['Kochi, India', 'First GCC specialists']}
      navSections={[
        { id: 'the-reality', label: 'The reality' },
        { id: 'what-goes-wrong', label: 'What goes wrong' },
        { id: 'how-we-help', label: 'How we help' },
        { id: 'timeline', label: 'Timeline' },
      ]}
      related={[
        { label: 'GCC Setup', href: '/gcc-setup' },
        { label: 'BOT / COPO', href: '/bot-copo' },
        { label: 'Kochi advantage', href: '/kochi-advantage' },
      ]}
    >
      {/* Section: The reality */}
      <section id="the-reality" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-blue uppercase tracking-wider">The reality</span>
          <h2 className="text-2xl md:text-3xl font-900 font-bold text-navy mt-3">The first one is the hardest. Here&apos;s why.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-2xl">
          Companies that have successfully built India teams will tell you the first one is harder than they expected. Not because India is uniquely complicated — but because you&apos;re making decisions without the benefit of having made them before. Entity structure, compensation benchmarks, management bandwidth, cultural integration. Each one has a right answer. None of them are obvious the first time.
        </p>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Our job is to surface those decisions early, give you clear options, and carry the operational load so your internal team isn&apos;t consumed by the build.
        </p>
      </section>

      {/* Section: What goes wrong */}
      <section id="what-goes-wrong" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-blue uppercase tracking-wider">What goes wrong</span>
          <h2 className="text-2xl md:text-3xl font-900 font-bold text-navy mt-3">The patterns we see — and how we avoid them.</h2>
        </div>
        <div className="space-y-4">
          <div className="flex gap-3">
            <XCircle weight="fill" className="text-red-500 mt-1 flex-shrink-0" size={20} />
            <p className="text-gray-600 text-base leading-relaxed">
              <span className="font-700 text-gray-900">Rushing the hiring process</span> to meet an artificial deadline. We build in the time to get it right — typically 12–16 weeks from brief to first hire.
            </p>
          </div>
          <div className="flex gap-3">
            <XCircle weight="fill" className="text-red-500 mt-1 flex-shrink-0" size={20} />
            <p className="text-gray-600 text-base leading-relaxed">
              <span className="font-700 text-gray-900">Choosing a location based on cost alone</span> without assessing talent density and retention risk. Kochi has a meaningful cost advantage and better retention than Bengaluru — we&apos;ll show you the data.
            </p>
          </div>
          <div className="flex gap-3">
            <XCircle weight="fill" className="text-red-500 mt-1 flex-shrink-0" size={20} />
            <p className="text-gray-600 text-base leading-relaxed">
              <span className="font-700 text-gray-900">Underinvesting in management integration.</span> The India team and the parent org need to work well together from week one. We facilitate that, not just the operational side.
            </p>
          </div>
          <div className="flex gap-3">
            <XCircle weight="fill" className="text-red-500 mt-1 flex-shrink-0" size={20} />
            <p className="text-gray-600 text-base leading-relaxed">
              <span className="font-700 text-gray-900">Using a vendor who wins the pitch then disappears.</span> We stay involved after the handshake — because our reputation depends on your team&apos;s performance, not the contract signing.
            </p>
          </div>
        </div>
      </section>

      {/* Section: How we help */}
      <section id="how-we-help" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-blue uppercase tracking-wider">How we help</span>
          <h2 className="text-2xl md:text-3xl font-900 font-bold text-navy mt-3">We carry the operational burden. You stay focused on your business.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          We manage everything from entity formation to your first hire&apos;s first day — so your internal team is involved at the decisions that matter, not buried in the ones that don&apos;t.
        </p>
        <div className="flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <Buildings weight="bold" className="text-blue" size={16} />
            <span className="text-gray-900 text-sm font-500">Entity & legal setup</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <Users weight="bold" className="text-blue" size={16} />
            <span className="text-gray-900 text-sm font-500">Talent sourcing & screening</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <OfficeChair weight="bold" className="text-blue" size={16} />
            <span className="text-gray-900 text-sm font-500">Office infrastructure</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <CurrencyCircleDollar weight="bold" className="text-blue" size={16} />
            <span className="text-gray-900 text-sm font-500">Payroll & HR policy</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <Handshake weight="bold" className="text-blue" size={16} />
            <span className="text-gray-900 text-sm font-500">Culture integration</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <ChartBar weight="bold" className="text-blue" size={16} />
            <span className="text-gray-900 text-sm font-500">Governance framework</span>
          </div>
        </div>
      </section>

      {/* Section: Timeline */}
      <section id="timeline" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-blue uppercase tracking-wider">Timeline</span>
          <h2 className="text-2xl md:text-3xl font-900 font-bold text-navy mt-3">What a well-run first GCC looks like, week by week.</h2>
        </div>
        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white mb-6 flex flex-col">
          <div className="flex flex-row border-b border-gray-100 last:border-0">
            <div className="w-16 md:w-24 flex-shrink-0 bg-[#2D5BFF]/5 p-2.5 md:p-3 border-r border-gray-100 flex items-start justify-center">
              <span className="text-[#2D5BFF] font-700 text-sm md:text-base mt-0.5 font-bold">W1–2</span>
            </div>
            <div className="p-2.5 md:p-3 flex-1">
              <h3 className="text-base md:text-lg font-900 font-bold text-gray-900 mb-0.5 md:mb-1 font-bold">Discovery & planning</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Deep-dive sessions with your stakeholders. We map the engagement model, roles, timelines and success metrics — and deliver a costed proposal.
              </p>
            </div>
          </div>

          <div className="flex flex-row border-b border-gray-100 last:border-0">
            <div className="w-16 md:w-24 flex-shrink-0 bg-[#2D5BFF]/5 p-2.5 md:p-3 border-r border-gray-100 flex items-start justify-center">
              <span className="text-[#2D5BFF] font-700 text-sm md:text-base mt-0.5 font-bold">W3–8</span>
            </div>
            <div className="p-2.5 md:p-3 flex-1">
              <h3 className="text-base md:text-lg font-900 font-bold text-gray-900 mb-0.5 md:mb-1 font-bold">Entity & infrastructure</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Legal entity formation, office setup and IT infrastructure run in parallel with the talent pipeline. You&apos;re kept informed at every decision point.
              </p>
            </div>
          </div>

          <div className="flex flex-row border-b border-gray-100 last:border-0">
            <div className="w-16 md:w-24 flex-shrink-0 bg-[#2D5BFF]/5 p-2.5 md:p-3 border-r border-gray-100 flex items-start justify-center">
              <span className="text-[#2D5BFF] font-700 text-sm md:text-base mt-0.5 font-bold">W6–12</span>
            </div>
            <div className="p-2.5 md:p-3 flex-1">
              <h3 className="text-base md:text-lg font-900 font-bold text-gray-900 mb-0.5 md:mb-1 font-bold">Hiring & onboarding</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Shortlists presented for your approval. Offers, onboarding and first-week integration managed by us. Your first hire is operational before week 12.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ConsolePage>
  )
}
