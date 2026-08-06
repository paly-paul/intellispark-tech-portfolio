'use client'

import { Gauge } from '@phosphor-icons/react'
import ConsolePage from '@/components/templates/ConsolePage'

export default function GCCOptimise() {
  return (
    <ConsolePage
      eyebrow="Audience · GCC Optimise"
      icon={<Gauge weight="bold" size={16} />}
      h1="Your GCC is built. Now make it better."
      intro="You have a Global Capability Centre. Maybe it's working well. Maybe it's not. Either way, there's untapped potential — cost efficiency, quality, team retention, output velocity. We help you unlock it."
      accent="#8B5CF6"
      badges={['Operational excellence', 'Continuous improvement']}
      navSections={[
        { id: 'common-gaps', label: 'Common gaps' },
        { id: 'diagnostic', label: 'Diagnostic' },
        { id: 'remediation', label: 'Remediation' },
        { id: 'outcomes', label: 'Outcomes' },
      ]}
      related={[
        { label: 'GCC Setup', href: '/gcc-setup' },
        { label: 'Service Delivery Centres', href: '/service-delivery' },
        { label: 'For Enterprise', href: '/for/enterprise' },
      ]}
    >
      {/* Section: Common gaps */}
      <section id="common-gaps" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-purple-600 uppercase tracking-wider">Common gaps</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">What we usually find in an existing GCC.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Your GCC might be running. But it might not be running well. We see patterns:
        </p>
        <div className="space-y-3">
          {[
            'Attrition is XX% — higher than acceptable. People are leaving for better pay or culture.',
            'Leadership layer is weak. You have individual contributors, but no strong director/managers.',
            'Quality is inconsistent. Some teams deliver well. Others are stuck in delivery mediocrity.',
            'Cost creep. Headcount and budgets are XX% higher than planned.',
            'Communication with HQ is broken. Time zones, distance, and process gaps create misalignment.',
            'Hiring is stuck. You can&apos;t find people fast enough, or you&apos;re hiring the wrong people.',
            'Technology integration is messy. Your India team works on different stacks, uses different tools.',
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <span className="text-purple-600 font-700 flex-shrink-0">•</span>
              <span className="text-gray-900 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Diagnostic */}
      <section id="diagnostic" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-purple-600 uppercase tracking-wider">Diagnostic</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">We audit your centre — deeply.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          We don&apos;t just interview leadership. We talk to your individual contributors. We look at your processes, systems, metrics, and culture.
        </p>
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
          <h3 className="font-700 text-gray-900 mb-4">We audit:</h3>
          <ul className="space-y-2">
            <li className="flex gap-3">
              <span className="text-purple-600 font-700 flex-shrink-0">→</span>
              <span className="text-gray-700 text-sm">Headcount, hiring, and attrition patterns</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-700 flex-shrink-0">→</span>
              <span className="text-gray-700 text-sm">Team structure and leadership strength</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-700 flex-shrink-0">→</span>
              <span className="text-gray-700 text-sm">Quality metrics, delivery velocity, and outputs</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-700 flex-shrink-0">→</span>
              <span className="text-gray-700 text-sm">Cost structure and headcount efficiency</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-700 flex-shrink-0">→</span>
              <span className="text-gray-700 text-sm">Communication and alignment with HQ</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-700 flex-shrink-0">→</span>
              <span className="text-gray-700 text-sm">Technology stack and tool integration</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section: Remediation */}
      <section id="remediation" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-purple-600 uppercase tracking-wider">Remediation</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">We give you a roadmap. Then we help you execute it.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Based on our audit, we propose XX–XX specific changes. Some quick wins (30 days). Some structural (90+ days).
        </p>
        <div className="space-y-4">
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Quick wins (Month 1)</h3>
            <p className="text-sm text-gray-600">
              Process improvements, communication changes, tool integration. Often XX% attrition improvement immediately.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Medium-term (Month 2–3)</h3>
            <p className="text-sm text-gray-600">
              Leadership development, hiring optimization, quality standards. Culture and capability building.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Long-term (Month 4+)</h3>
            <p className="text-sm text-gray-600">
              Strategic restructuring if needed. Scaling or consolidating teams. Evolving the centre as your business evolves.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Outcomes */}
      <section id="outcomes" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-purple-600 uppercase tracking-wider">Outcomes</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">What we typically deliver.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Depends on where you&apos;re starting, but typical improvements include:
        </p>
        <div className="space-y-3">
          {[
            'Attrition reduction from XX% to ~XX% (closer to US/EU norms)',
            'Quality improvement: Defect rates down XX%, code review quality up',
            'Cost per delivery down XX–XX% through efficiency gains',
            'Hiring time cut from XX days to XX days',
            'Delivery velocity up XX% through better processes and tooling',
            'Team morale improvement: Better culture, clearer career paths',
            'Reduced HQ overhead through better communication and autonomy',
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <span className="text-purple-600 font-700 flex-shrink-0">→</span>
              <span className="text-gray-900 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </ConsolePage>
  )
}
