'use client'

import { Gauge, Warning, HandCoins, ShareNetwork, UsersThree, Plug, MagnifyingGlass } from '@phosphor-icons/react'
import ConsolePage from '@/components/templates/ConsolePage'

export default function GCCOptimise() {
  return (
    <ConsolePage
      eyebrow="For · GCC Optimisation"
      icon={<Gauge weight="bold" size={16} />}
      h1="Your India team exists. Is it performing?"
      h1ClassName="text-3xl md:text-4xl font-900 font-bold leading-tight mb-4"
      intro="Many companies have India teams that are technically operational but not delivering at the level they were designed for. If that's where you are, you're not alone — and the problems are usually fixable with an honest diagnosis."
      accent="#0D9488"
      badges={['Kochi, India', 'Diagnostic & remediation']}
      navSections={[
        { id: 'common-gaps', label: 'Common gaps' },
        { id: 'diagnostic', label: 'The diagnostic' },
        { id: 'remediation', label: 'Remediation' },
        { id: 'outcomes', label: 'Typical outcomes' },
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
          <span className="text-sm font-600 text-[#00bfa5] uppercase tracking-wider">Common gaps</span>
          <h2 className="text-2xl md:text-3xl font-900 font-bold text-navy mt-3">The patterns we see — in almost every underperforming GCC.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-3xl">
          Most GCC performance problems are not unique. They follow recognisable patterns — and that means they have recognisable solutions. The five below account for the majority of cases we&apos;ve diagnosed.
        </p>
        <div className="space-y-4">
          <div className="flex gap-3">
            <Warning weight="fill" className="text-amber-500 mt-1 flex-shrink-0" size={20} />
            <p className="text-gray-600 text-base leading-relaxed">
              <span className="font-700 text-gray-900">High attrition</span> eroding institutional knowledge — often driven by compensation drift or poor management integration
            </p>
          </div>
          <div className="flex gap-3">
            <Warning weight="fill" className="text-amber-500 mt-1 flex-shrink-0" size={20} />
            <p className="text-gray-600 text-base leading-relaxed">
              <span className="font-700 text-gray-900">Weak parent org integration</span> — the India team operates in isolation, not as part of the global organisation
            </p>
          </div>
          <div className="flex gap-3">
            <Warning weight="fill" className="text-amber-500 mt-1 flex-shrink-0" size={20} />
            <p className="text-gray-600 text-base leading-relaxed">
              <span className="font-700 text-gray-900">Compensation below market</span> — benchmarks set at launch and never revisited, now 15–25% below current rates
            </p>
          </div>
          <div className="flex gap-3">
            <Warning weight="fill" className="text-amber-500 mt-1 flex-shrink-0" size={20} />
            <p className="text-gray-600 text-base leading-relaxed">
              <span className="font-700 text-gray-900">Management structures that haven&apos;t scaled</span> — what worked at 10 people creates bottlenecks at 50
            </p>
          </div>
          <div className="flex gap-3">
            <Warning weight="fill" className="text-amber-500 mt-1 flex-shrink-0" size={20} />
            <p className="text-gray-600 text-base leading-relaxed">
              <span className="font-700 text-gray-900">Talent sourcing on autopilot</span> — same channels, same profiles, declining quality over time
            </p>
          </div>
        </div>
      </section>

      {/* Section: Diagnostic */}
      <section id="diagnostic" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-[#00bfa5] uppercase tracking-wider">The diagnostic</span>
          <h2 className="text-2xl md:text-3xl font-900 font-bold text-navy mt-3">A structured 4-week review. Honest output.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-3xl">
          We run a structured diagnostic across four dimensions: people, process, governance and market positioning. The output is a clear picture of what&apos;s working, what isn&apos;t, and a prioritised remediation roadmap.
        </p>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-3xl">
          We&apos;re direct about what we find — including when the issues are on the parent organisation&apos;s side rather than the India team&apos;s. That&apos;s not always what people want to hear. It&apos;s usually what they need to.
        </p>
        
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
          <div className="flex flex-col md:flex-row border-b border-gray-200 last:border-0">
            <div className="w-full md:w-24 flex-shrink-0 bg-gray-50 p-2 md:p-3 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-center md:justify-start">
              <span className="text-[#00bfa5] font-700">W1</span>
            </div>
            <div className="p-2 md:p-3 flex-1">
              <h3 className="text-base font-700 text-gray-900 mb-1">People review</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Attrition data, compensation benchmarking, management structure, team sentiment interviews.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row border-b border-gray-200 last:border-0">
            <div className="w-full md:w-24 flex-shrink-0 bg-gray-50 p-2 md:p-3 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-center md:justify-start">
              <span className="text-[#00bfa5] font-700">W2</span>
            </div>
            <div className="p-2 md:p-3 flex-1">
              <h3 className="text-base font-700 text-gray-900 mb-1">Process review</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Delivery workflows, integration with parent org, documentation quality, tooling assessment.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row border-b border-gray-200 last:border-0">
            <div className="w-full md:w-24 flex-shrink-0 bg-gray-50 p-2 md:p-3 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-center md:justify-start">
              <span className="text-[#00bfa5] font-700">W3</span>
            </div>
            <div className="p-2 md:p-3 flex-1">
              <h3 className="text-base font-700 text-gray-900 mb-1">Governance & market review</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reporting structures, compliance status, competitive compensation benchmarks, talent pipeline health.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row border-b border-gray-200 last:border-0">
            <div className="w-full md:w-24 flex-shrink-0 bg-gray-50 p-2 md:p-3 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-center md:justify-start">
              <span className="text-[#00bfa5] font-700">W4</span>
            </div>
            <div className="p-2 md:p-3 flex-1">
              <h3 className="text-base font-700 text-gray-900 mb-1">Output & roadmap</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Full findings presentation with prioritised remediation plan — clear ownership, timelines and measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Remediation */}
      <section id="remediation" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-[#00bfa5] uppercase tracking-wider">Remediation</span>
          <h2 className="text-2xl md:text-3xl font-900 font-bold text-navy mt-3">We can run the fix — or advise your team through it.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-3xl">
          The diagnostic is only useful if it leads to action. We offer two models for remediation: we take direct ownership of specific workstreams and run them ourselves, or we act in an advisory capacity alongside your existing India team. The right model depends on your internal capacity and preference.
        </p>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
            <HandCoins className="text-[#00bfa5]" size={16} />
            <span className="text-sm font-500 text-gray-800">Compensation restructuring</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
            <ShareNetwork className="text-[#00bfa5]" size={16} />
            <span className="text-sm font-500 text-gray-800">Management redesign</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
            <UsersThree className="text-[#00bfa5]" size={16} />
            <span className="text-sm font-500 text-gray-800">Retention programmes</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
            <Plug className="text-[#00bfa5]" size={16} />
            <span className="text-sm font-500 text-gray-800">Parent org integration</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
            <MagnifyingGlass className="text-[#00bfa5]" size={16} />
            <span className="text-sm font-500 text-gray-800">Sourcing channel refresh</span>
          </div>
        </div>
      </section>

      {/* Section: Outcomes */}
      <section id="outcomes" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-[#00bfa5] uppercase tracking-wider">Typical outcomes</span>
          <h2 className="text-xl md:text-2xl font-900 font-bold text-navy mt-2">What a successful remediation looks like at 12 months.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-2xl md:text-3xl font-900 font-bold text-[#00bfa5] mb-1">18%</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Average attrition reduction at 12 months
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-2xl md:text-3xl font-900 font-bold text-[#00bfa5] mb-1">30%</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Delivery throughput improvement post-process changes
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-2xl md:text-3xl font-900 font-bold text-[#00bfa5] mb-1">4 wks</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Full diagnostic to remediation roadmap
            </p>
          </div>
        </div>
      </section>
    </ConsolePage>
  )
}
