'use client'

import { MapPin, CheckCircle, ChartBar } from '@phosphor-icons/react'
import ConsolePage from '@/components/templates/ConsolePage'

export default function ServiceDelivery() {
  return (
    <ConsolePage
      eyebrow="Service · Service Delivery Centres"
      icon={<MapPin weight="bold" size={16} />}
      h1="Dedicated centres for high-volume, ongoing operations."
      h1ClassName="text-[clamp(26px,3.5vw,44px)] font-900 leading-[1.12] tracking-[-0.8px] mb-[18px] max-w-[800px] font-bold"
      intro="For companies that need a permanent, high-volume operational presence in India — not a project team — our Service Delivery Centre model gives you full-managed, dedicated facilities with SLA-backed governance."
      accent="#2D5BFF"
      badges={['Kochi, India', '10 to 200+ seats']}
      navSections={[
        { id: 'what-you-get', label: 'What you get' },
        { id: 'functions', label: 'Functions we support' },
        { id: 'scale', label: 'Scaling' },
        { id: 'governance', label: 'Governance' },
      ]}
      related={[
        { label: 'GCC Setup', href: '/gcc-setup' },
        { label: 'BOT / COPO', href: '/bot-copo' },
        { label: 'For Enterprise', href: '/for/enterprise' },
      ]}
    >
      {/* Section: What you get */}
      <section id="what-you-get" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-[#2D5BFF] uppercase tracking-wider">What you get</span>
          <h2 className="text-2xl md:text-3xl font-900 font-bold text-navy mt-3">Your brand, your team, your culture — operated by us.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          A dedicated centre is not a shared services arrangement. It&apos;s a facility and team built specifically for your organisation — managed by us so you don&apos;t carry the operational overhead. Your branding, your policies, your processes.
        </p>
        <div>
          <ul className="space-y-4 text-sm text-gray-600">
            {[
              'Dedicated facility — not a shared floor with other clients',
              'Full HR, payroll, compliance and facilities management included',
              'IT infrastructure and security to your specifications',
              'Branded environment — your identity, not ours',
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <CheckCircle className="text-[#2D5BFF] flex-shrink-0 mt-0.5" size={18} weight="fill" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section: Functions we support */}
      <section id="functions" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-[#2D5BFF] uppercase tracking-wider">Functions we support</span>
          <h2 className="text-2xl md:text-3xl font-900 font-bold text-navy mt-3">Best suited to high-volume, process-documented functions.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Service Delivery Centres work best for functions that require consistent, high-volume output with clearly documented processes. These are typically not the functions you&apos;d build a GCC for — they&apos;re the steady-state operations that need a different model.
        </p>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {['Customer Support (L1 / L2)', 'Technical Support', 'Finance & Accounting', 'Claims Processing', 'Data Operations', 'Compliance & KYC', 'HR Operations', 'Content Operations', 'Back-office Processing'].map((tag) => (
            <div key={tag} className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gray-50 border border-gray-200 text-xs md:text-sm text-gray-700 font-500">
              {tag}
            </div>
          ))}
        </div>
      </section>

      {/* Section: Scaling */}
      <section id="scale" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-[#2D5BFF] uppercase tracking-wider">Scaling</span>
          <h2 className="text-2xl md:text-3xl font-900 font-bold text-navy mt-3">Start with a 10-seat pilot. Scale to 200+ when you&apos;re ready.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Many of our clients begin with a small pilot to validate the model before committing to a larger footprint. We design the pilot so it&apos;s a genuine proof of concept — not a scaled-down version that won&apos;t tell you anything useful.
        </p>
        <div className="flex flex-wrap gap-3 md:gap-4 max-w-xl">
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg w-full md:w-[260px] flex-shrink-0">
            <div className="text-2xl md:text-3xl font-900 font-bold text-[#2D5BFF] mb-1">10</div>
            <p className="text-xs md:text-sm text-gray-500 leading-snug">Minimum pilot size</p>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg w-full md:w-[260px] flex-shrink-0">
            <div className="text-2xl md:text-3xl font-900 font-bold text-[#2D5BFF] mb-1">200+</div>
            <p className="text-xs md:text-sm text-gray-500 leading-snug">Maximum current capacity</p>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg w-full md:w-[260px] flex-shrink-0">
            <div className="text-2xl md:text-3xl font-900 font-bold text-[#2D5BFF] mb-1">XX wks</div>
            <p className="text-xs md:text-sm text-gray-500 leading-snug">Typical pilot-to-operational timeline</p>
          </div>
        </div>
      </section>

      {/* Section: Governance */}
      <section id="governance" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-[#2D5BFF] uppercase tracking-wider">Governance</span>
          <h2 className="text-2xl md:text-3xl font-900 font-bold text-navy mt-3">SLA-backed performance. Weekly visibility. No surprises.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Every SDC engagement operates against a defined SLA framework — covering response times, quality thresholds and escalation paths. You get weekly reporting, monthly governance reviews, and a named Intellispark lead who owns the relationship.
        </p>
        <div className="bg-[#2D5BFF]/5 border border-[#2D5BFF]/10 rounded-xl p-5 md:p-6 flex flex-col md:flex-row gap-4 md:gap-5 items-start">
          <div className="p-3 bg-[#2D5BFF]/10 rounded-lg flex-shrink-0">
            <ChartBar size={24} weight="fill" className="text-[#2D5BFF]" />
          </div>
          <div>
            <h3 className="font-700 text-[#2D5BFF] mb-2 text-sm md:text-base">Full-visibility governance as standard</h3>
            <p className="text-[#2D5BFF]/80 text-sm md:text-sm leading-relaxed">
              Weekly performance dashboards, monthly steering reviews, and a direct escalation path to Intellispark leadership. You&apos;ll never be left wondering what&apos;s happening on the ground.
            </p>
          </div>
        </div>
      </section>
    </ConsolePage>
  )
}
