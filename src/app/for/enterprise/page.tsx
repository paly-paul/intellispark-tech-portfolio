'use client'

import { Building, UsersThree, TrendUp, ChartBar, Brain, CheckCircle, TreeStructure, ChartLineUp, CalendarCheck, ShieldCheck } from '@phosphor-icons/react'
import ConsolePage from '@/components/templates/ConsolePage'

export default function Enterprise() {
  return (
    <ConsolePage
      eyebrow="For · Enterprise"
      icon={<Building weight="bold" size={16} />}
      h1="Scaling your India presence — or fixing what isn't working."
      h1ClassName="text-3xl md:text-5xl font-900 font-bold leading-tight mb-4"
      intro="Enterprise companies come to us in two situations: they're scaling an existing India team and need operational support, or something has gone wrong and they need an honest external perspective. We're experienced with both."
      accent="#00bfa5"
      badges={['Kochi, India', 'Scale & optimisation']}
      navSections={[
        { id: 'scaling', label: 'Scaling what works' },
        { id: 'fixing', label: 'Fixing what doesn\'t' },
        { id: 'working-with-teams', label: 'Working with your team' },
        { id: 'governance', label: 'Governance' },
      ]}
      related={[
        { label: 'GCC Setup', href: '/gcc-setup' },
        { label: 'Service Delivery Centres', href: '/service-delivery' },
        { label: 'For Mid-Market', href: '/for/mid-market' },
      ]}
    >
      {/* Section: Scaling operations */}
      {/* Section: Scaling operations */}
      <section id="scaling" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-[#00bfa5] uppercase tracking-wider">Scaling what works</span>
          <h2 className="text-2xl md:text-3xl font-900 font-bold text-navy mt-3">Accelerate hiring without compromising on quality.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-3xl">
          If your India team is performing well and you need to grow it, we can accelerate the hiring pipeline — including senior and specialist roles — without the quality drop that typically comes with volume-focused recruitment agencies.
        </p>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-3xl">
          We&apos;ve built deep relationships with senior talent across Kochi and Kerala that most agencies don&apos;t have access to. And because we understand the work, we can evaluate candidates in ways a generalist recruiter can&apos;t.
        </p>
        
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
            <UsersThree className="text-[#00bfa5]" size={16} />
            <span className="text-sm font-500 text-gray-800">Senior & specialist hiring</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
            <TrendUp className="text-[#00bfa5]" size={16} />
            <span className="text-sm font-500 text-gray-800">Infrastructure scaling</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
            <ChartBar className="text-[#00bfa5]" size={16} />
            <span className="text-sm font-500 text-gray-800">Governance at scale</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
            <Brain className="text-[#00bfa5]" size={16} />
            <span className="text-sm font-500 text-gray-800">Retention programmes</span>
          </div>
        </div>
      </section>

      {/* Section: Fixing what doesn't */}
      <section id="fixing" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-[#00bfa5] uppercase tracking-wider">Fixing what doesn&apos;t</span>
          <h2 className="text-2xl md:text-3xl font-900 font-bold text-navy mt-3">Honest diagnostic. Prioritised remediation.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-3xl">
          We take on a small number of GCC diagnostic and remediation engagements each year. If your India team isn&apos;t performing as expected, we&apos;ll give you an honest view of why — including if the root cause is on the parent organisation&apos;s side, not the India team&apos;s.
        </p>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-3xl">
          The diagnostic covers people, process, governance and market positioning. Output is a clear picture of what&apos;s working, what isn&apos;t, and a remediation roadmap with defined ownership and timelines.
        </p>
        
        <div className="space-y-4">
          {[
            { text: 'High attrition', desc: 'root cause analysis and retention strategy' },
            { text: 'Compensation below market', desc: 'benchmarking and correction plan' },
            { text: 'Delivery gaps', desc: 'process review and management structure assessment' },
            { text: 'Parent org integration issues', desc: 'facilitated alignment workshops' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle weight="fill" className="text-[#00bfa5] mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-600 text-base leading-relaxed">
                <span className="text-gray-800">{item.text}</span> — {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Working with your team */}
      <section id="working-with-teams" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-[#00bfa5] uppercase tracking-wider">Working with your team</span>
          <h2 className="text-2xl md:text-3xl font-900 font-bold text-navy mt-3">Additive, not disruptive.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-3xl">
          Enterprise clients typically have India HR, legal and operations teams already in place. We work alongside them — not around them. Our role is to bring external perspective, specialist market knowledge and execution capacity where it&apos;s needed — without creating a turf conflict with your internal function.
        </p>

        <div className="bg-[#00bfa5]/10 border border-[#00bfa5]/20 rounded-xl p-5 md:p-6 flex flex-col md:flex-row gap-4 items-start">
          <div className="bg-[#00bfa5]/20 p-2.5 rounded-lg flex-shrink-0">
            <UsersThree weight="fill" className="text-[#00bfa5]" size={24} />
          </div>
          <div>
            <h3 className="text-[#009e89] font-700 font-bold mb-1">We work with your internal teams, not instead of them</h3>
            <p className="text-[#008a76] text-sm md:text-base leading-relaxed">
              Every enterprise engagement starts with a conversation with your existing India operations team. We map what exists, what&apos;s working, and where additional capacity or expertise is genuinely needed.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Governance */}
      <section id="governance" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-[#00bfa5] uppercase tracking-wider">Governance</span>
          <h2 className="text-2xl md:text-3xl font-900 font-bold text-navy mt-3">Reporting and accountability structures that scale.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-3xl">
          As India teams grow from 20 to 200 people, the governance model needs to grow with them. Structures that worked at small scale become bottlenecks. We&apos;ve seen this pattern enough times to know what to put in place before it becomes a problem.
        </p>

        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
            <TreeStructure className="text-[#00bfa5]" size={16} />
            <span className="text-sm font-500 text-gray-800">Organisation design review</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
            <ChartLineUp className="text-[#00bfa5]" size={16} />
            <span className="text-sm font-500 text-gray-800">Performance framework</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
            <CalendarCheck className="text-[#00bfa5]" size={16} />
            <span className="text-sm font-500 text-gray-800">Steering cadence setup</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
            <ShieldCheck className="text-[#00bfa5]" size={16} />
            <span className="text-sm font-500 text-gray-800">Compliance review</span>
          </div>
        </div>
      </section>
    </ConsolePage>
  )
}
