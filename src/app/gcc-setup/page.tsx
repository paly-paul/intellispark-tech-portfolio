'use client'

import { Buildings } from '@phosphor-icons/react'
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
          <span className="text-sm font-600 text-blue uppercase tracking-wider">What we build</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Every dimension of your India operation — designed and delivered.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Setting up a GCC isn&apos;t a single project — it&apos;s five parallel workstreams that each require local expertise. We run all of them, with a named lead who owns the outcome.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 font-500">
            📋 Legal entity formation
          </div>
          <div className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 font-500">
            ⚖️ Regulatory compliance
          </div>
          <div className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 font-500">
            🏢 Office infrastructure
          </div>
          <div className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 font-500">
            👥 Team hiring and onboarding
          </div>
          <div className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 font-500">
            🔧 Technology infrastructure
          </div>
          <div className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 font-500">
            📊 Governance frameworks
          </div>
        </div>
      </section>

      {/* Section: The process */}
      <section id="the-process" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-blue uppercase tracking-wider">The process</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">How we get your GCC to operational status in record time.</h2>
        </div>
        <div className="space-y-6">
          <div className="border-l-4 border-blue pl-6 py-2">
            <h3 className="font-600 text-gray-900 mb-2">Kickoff & Planning (Weeks 1-2)</h3>
            <p className="text-gray-600 text-sm">
              We understand your business, team structure, and operational needs. Parallel work begins on entity formation and compliance requirements.
            </p>
          </div>
          <div className="border-l-4 border-blue pl-6 py-2">
            <h3 className="font-600 text-gray-900 mb-2">Build & Hiring (Weeks 3-8)</h3>
            <p className="text-gray-600 text-sm">
              Entity is incorporated. Compliance applications filed. Office sourcing underway. We begin sourcing and interviewing for your leadership roles.
            </p>
          </div>
          <div className="border-l-4 border-blue pl-6 py-2">
            <h3 className="font-600 text-gray-900 mb-2">Go-Live (Weeks 9-12)</h3>
            <p className="text-gray-600 text-sm">
              First team members join. Full compliance set up. Governance frameworks in place. You own a fully operational GCC in Kochi.
            </p>
          </div>
        </div>
      </section>

      {/* Section: What you own */}
      <section id="what-you-own" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-blue uppercase tracking-wider">What you own</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Your GCC is your company — not ours.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Unlike many India staffing providers, we don&apos;t retain ownership or operational control of your GCC. You own the entity, the team, and the decisions. We&apos;re here to build it and then step back.
        </p>
        <div className="bg-blue-pale rounded-xl p-6 md:p-8">
          <ul className="space-y-3 text-sm text-gray-900">
            <li className="flex gap-3">
              <span className="text-blue font-700">✓</span>
              <span>You own the legal entity and all IP created</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue font-700">✓</span>
              <span>Your employees report to your leadership</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue font-700">✓</span>
              <span>You set strategy, culture, and direction</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue font-700">✓</span>
              <span>We stay available for ongoing support, but step back operationally</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section: Why Kochi */}
      <section id="why-kochi" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-blue uppercase tracking-wider">Why Kochi</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">The India location that makes the biggest difference.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Kochi isn&apos;t our only office, but it&apos;s the location where we see the highest retention, lowest regulatory friction, and most aligned cost-per-productivity ratio.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-700 text-blue mb-2">XX%</div>
            <p className="text-sm text-gray-600">Average attrition in Year 1</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-700 text-blue mb-2">XX days</div>
            <p className="text-sm text-gray-600">Average time to hire</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-700 text-blue mb-2">XX%</div>
            <p className="text-sm text-gray-600">Cost savings vs. onshore</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-700 text-blue mb-2">XX+</div>
            <p className="text-sm text-gray-600">Active GCC operations</p>
          </div>
        </div>
        <div className="mt-8">
          <a href="/kochi-advantage" className="text-blue font-600 hover:text-blue-light transition-colors">
            Learn more about Kochi →
          </a>
        </div>
      </section>
    </ConsolePage>
  )
}
