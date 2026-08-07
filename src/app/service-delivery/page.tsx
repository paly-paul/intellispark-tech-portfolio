'use client'

import { MapPin } from '@phosphor-icons/react'
import ConsolePage from '@/components/templates/ConsolePage'

export default function ServiceDelivery() {
  return (
    <ConsolePage
      eyebrow="Service · Service Delivery Centres"
      icon={<MapPin weight="bold" size={16} />}
      h1="Dedicated service delivery centres for ongoing operations, managed services, and back-office functions."
      intro="Scalable from 10 to 200+ seats. Full control over hiring, culture, and operations — with our support. Own the team. Own the results."
      accent="#2D5BFF"
      badges={['Kochi, India', 'Scalable ops']}
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
          <span className="text-sm font-600 text-blue uppercase tracking-wider">What you get</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">A purpose-built operations centre. Under your command.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          A dedicated service delivery centre (SDC) is your operations hub in India. Your hire, your rules, our expertise. We handle entity formation, compliance, and hiring. You make the decisions.
        </p>
        <div className="space-y-3">
          {[
            'Dedicated team. No shared resources.',
            'Your choice of roles — operations, finance, HR, customer support, data entry, anything.',
            'Your leadership structure — we advise, you decide.',
            'Transparent headcount and cost tracking.',
            'Full flexibility to grow, adjust, or wind down.',
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 p-3 bg-blue-pale rounded-lg border border-blue/20">
              <span className="text-blue font-700 flex-shrink-0">✓</span>
              <span className="text-gray-900 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Functions we support */}
      <section id="functions" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-blue uppercase tracking-wider">Functions we support</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">SDCs work best for...</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Any role that doesn&apos;t require on-site presence or timezone presence in your headquarters. We&apos;ve built centres for:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['Accounting & Finance', 'Customer support', 'Data entry & processing', 'HR operations', 'Content moderation', 'Research & analysis', 'Back-office operations', 'Document processing', 'Quality assurance'].map((tag) => (
            <div key={tag} className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 font-500">
              {tag}
            </div>
          ))}
        </div>
      </section>

      {/* Section: Scaling */}
      <section id="scale" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-blue uppercase tracking-wider">Scaling</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Grow from 10 to 200+ seats without the operational headache.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Whether you need to ramp from 10 to 50 people or manage a centre with 200+, we handle recruitment, training, and operations. You approve hires. You set standards. We execute.
        </p>
        <div className="space-y-4">
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Months 1–3: Foundation</h3>
            <p className="text-sm text-gray-600">
              Entity setup, initial hiring, training infrastructure, systems integration.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Months 4+: Scale on demand</h3>
            <p className="text-sm text-gray-600">
              We ramp headcount as your needs grow. Hiring, onboarding, quality management — all handled.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Governance */}
      <section id="governance" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-blue uppercase tracking-wider">Governance</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">You stay in control. We handle the complexity.</h2>
        </div>
        <div className="bg-blue-pale border border-blue/20 rounded-xl p-6">
          <h3 className="font-700 text-gray-900 mb-4">Your SDC, your rules</h3>
          <ul className="space-y-2">
            <li className="flex gap-3">
              <span className="text-blue font-700 flex-shrink-0">→</span>
              <span className="text-gray-700 text-sm">You approve and manage the director/manager of the centre.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue font-700 flex-shrink-0">→</span>
              <span className="text-gray-700 text-sm">You set performance KPIs and quality standards.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue font-700 flex-shrink-0">→</span>
              <span className="text-gray-700 text-sm">Weekly or monthly reporting on headcount, costs, and metrics.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue font-700 flex-shrink-0">→</span>
              <span className="text-gray-700 text-sm">We handle HR, compliance, and operations. You focus on strategy.</span>
            </li>
          </ul>
        </div>
      </section>
    </ConsolePage>
  )
}
