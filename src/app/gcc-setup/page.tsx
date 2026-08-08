'use client'

import { Buildings, Scales, MapPin, UsersThree, Coins, Desktop, ChartBar, Diamond, CheckCircle } from '@phosphor-icons/react'
import ConsolePage from '@/components/templates/ConsolePage'

export default function GCCSetup() {
  return (
    <ConsolePage
      eyebrow="Service · GCC Setup"
      icon={<Buildings weight="bold" size={16} />}
      h1="Build your Global Capability Centre — without the complexity."
      h1ClassName="text-3xl md:text-[44px] font-900 leading-[1.1] mb-6 font-bold"
      intro="A GCC done right becomes a core part of how your company operates. We manage every detail of the build — entity, team, infrastructure and governance — so your leadership stays focused on the business."
      accent="#2D5BFF"
      badges={['Kochi, India', 'End-to-end setup']}
      navSections={[
        { id: 'what-we-build', label: 'What we build' },
        { id: 'the-process', label: 'The process' },
        { id: 'what-you-own', label: 'What you own' },
        { id: 'why-kochi', label: 'Why Kochi' },
      ]}
      related={[
        { label: 'BOT / COPO', href: '/bot-copo' },
        { label: 'Kochi Advantage', href: '/kochi-advantage' },
        { label: 'For Mid-Market', href: '/for/mid-market' },
      ]}
    >
      {/* Section: What we build */}
      <section id="what-we-build" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-[#2D5BFF] uppercase tracking-wider">What we build</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Every dimension of your India operation — designed and delivered.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Setting up a GCC isn&apos;t a single project — it&apos;s five parallel workstreams that each require local expertise. We run all of them, with a named lead who owns the outcome.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { text: 'Legal entity formation', icon: Buildings },
            { text: 'Regulatory compliance', icon: Scales },
            { text: 'Office infrastructure', icon: MapPin },
            { text: 'Talent sourcing & onboarding', icon: UsersThree },
            { text: 'Payroll & HR policy', icon: Coins },
            { text: 'IT environment setup', icon: Desktop },
            { text: 'Governance framework', icon: ChartBar },
            { text: 'Culture integration', icon: Diamond },
          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
                <Icon className="text-[#2D5BFF]" size={16} />
                <span className="text-sm font-500 text-gray-800">{item.text}</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* Section: The process */}
      <section id="the-process" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-[#2D5BFF] uppercase tracking-wider">The process</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Three phases. Clear deliverables at each stage.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          No black boxes. At every stage you know what we&apos;re working on, what decisions need your input, and what the next milestone looks like.
        </p>

        <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6 flex flex-col">
          {/* Step 1 */}
          <div className="flex flex-row border-b border-gray-200 bg-white">
            <div className="w-14 md:w-28 flex-shrink-0 bg-gray-50 p-3 border-r border-gray-200 flex items-start md:items-center justify-center md:justify-start">
              <span className="text-[#2D5BFF] text-sm md:text-base font-700 font-bold mt-0.5 md:mt-0">01</span>
            </div>
            <div className="flex-1 p-3 md:p-4">
              <h3 className="font-700 font-bold text-gray-900 text-sm md:text-base mb-1">Understand & Plan — Weeks 1-2</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">Discovery call with stakeholders. Assess engagement model. Map roles, timelines and success metrics. Deliver a costed proposal with no ambiguity.</p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-row border-b border-gray-200 bg-white">
            <div className="w-14 md:w-28 flex-shrink-0 bg-gray-50 p-3 border-r border-gray-200 flex items-start md:items-center justify-center md:justify-start">
              <span className="text-[#2D5BFF] text-sm md:text-base font-700 font-bold mt-0.5 md:mt-0">02</span>
            </div>
            <div className="flex-1 p-3 md:p-4">
              <h3 className="font-700 font-bold text-gray-900 text-sm md:text-base mb-1">Build & Launch — Weeks 3-12</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">Legal entity. Office infrastructure. Hiring pipeline runs in parallel. First hires onboarded and integrated into your workflows before week 12.</p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-row bg-white">
            <div className="w-14 md:w-28 flex-shrink-0 bg-gray-50 p-3 border-r border-gray-200 flex items-start md:items-center justify-center md:justify-start">
              <span className="text-[#2D5BFF] text-sm md:text-base font-700 font-bold mt-0.5 md:mt-0">03</span>
            </div>
            <div className="flex-1 p-3 md:p-4">
              <h3 className="font-700 font-bold text-gray-900 text-sm md:text-base mb-1">Stabilise & Scale — Month 3 onwards</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">Ongoing HR, compliance and operational support. Retention programmes. Scale hiring as the team grows. Governance reviews on your cadence.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#2D5BFF]/5 rounded-xl p-6 md:p-8 flex gap-4 items-start border border-[#2D5BFF]/10">
          <div className="w-6 h-6 rounded-full bg-[#2D5BFF] flex items-center justify-center flex-shrink-0 mt-0.5">
            <CheckCircle className="text-white" size={16} weight="fill" />
          </div>
          <div>
            <h4 className="text-[#2D5BFF] font-700 mb-1 text-sm">Typical timeline to first hire on the ground</h4>
            <p className="text-[#2D5BFF]/80 text-sm leading-relaxed">12-16 weeks from signed agreement. We build in the time it takes to do this properly. Rushing the hiring process is where most early mistakes happen.</p>
          </div>
        </div>
      </section>

      {/* Section: What you own */}
      <section id="what-you-own" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-[#2D5BFF] uppercase tracking-wider">What you own</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Full ownership from day one. We&apos;re the operator, not the owner.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Your GCC is yours — the entity, the team, the IP, the culture. We build and operate on your behalf. The transition from our management to yours can happen at any point, on your timeline.
        </p>
        <div>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex gap-3 items-start">
              <CheckCircle className="text-[#2D5BFF] flex-shrink-0 mt-0.5" size={18} weight="fill" />
              <span>100% IP ownership remains with your organisation</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle className="text-[#2D5BFF] flex-shrink-0 mt-0.5" size={18} weight="fill" />
              <span>You make final decisions on every hire — we present shortlists</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle className="text-[#2D5BFF] flex-shrink-0 mt-0.5" size={18} weight="fill" />
              <span>Governance reporting is yours — weekly visibility into operations</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle className="text-[#2D5BFF] flex-shrink-0 mt-0.5" size={18} weight="fill" />
              <span>Handover to internal ownership is designed in from the start</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section: Why Kochi */}
      <section id="why-kochi" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-[#2D5BFF] uppercase tracking-wider">Why Kochi</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Deep talent pool. Lower cost. Higher retention.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Kochi offers a combination of engineering talent density, cost advantage over Bengaluru, and retention rates that consistently outperform other tier-1 locations — because the quality of life is genuinely better.
        </p>
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
            <div className="text-2xl md:text-3xl font-700 text-[#2D5BFF] mb-1">XX%</div>
            <p className="text-xs md:text-sm text-gray-500">Lower cost vs comparable Bengaluru team</p>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
            <div className="text-2xl md:text-3xl font-700 text-[#2D5BFF] mb-1">XX%</div>
            <p className="text-xs md:text-sm text-gray-500">Lower attrition vs national benchmark</p>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
            <div className="text-2xl md:text-3xl font-700 text-[#2D5BFF] mb-1">XX wks</div>
            <p className="text-xs md:text-sm text-gray-500">Average time to first hire from brief</p>
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          We&apos;re based in Kochi. We&apos;ve watched this market develop for a decade.{' '}
          <a href="/kochi-advantage" className="text-[#2D5BFF] font-600 hover:underline transition-colors">
            Read the full Kochi case →
          </a>
        </div>
      </section>
    </ConsolePage>
  )
}
