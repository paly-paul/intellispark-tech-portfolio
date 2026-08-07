'use client'

import {
  Robot,
  UserCircleGear,
  Code,
  TestTube,
  MagnifyingGlassPlus,
  CheckCircle
} from '@phosphor-icons/react'
import ConsolePage from '@/components/templates/ConsolePage'

export default function AiPODS() {
  return (
    <ConsolePage
      eyebrow="Service · AiPODS"
      icon={<Robot weight="bold" size={24} />}
      h1="Small squads. AI-enabled. Built to move fast."
      h1ClassName="text-[clamp(26px,3.5vw,44px)] font-800 leading-[1.12] tracking-[-0.8px] mb-[18px] max-w-[620px] font-bold"
      intro="AiPODS are focused delivery teams — 3 to 6 people — with AI tooling integrated into every stage of the pipeline. Not bolted on. Designed in. They move faster, maintain higher quality, and take on work that traditional offshore teams can't handle."
      accent="#059669"
      badges={['Kochi, India', 'AI-integrated squads']}
      navSections={[
        { id: 'what-is-an-aipod', label: 'What is an AiPOD' },
        { id: 'how-they-work', label: 'How they work' },
        { id: 'best-fit', label: 'Best-fit work' },
        { id: 'getting-started', label: 'Getting started' },
      ]}
      related={[
        { label: 'Product Engineering', href: '/product-engineering' },
        { label: 'Staff Augmentation', href: '/staff-augmentation' },
        { label: 'For Startups', href: '/for/startups' },
      ]}
    >
      {/* Section: What is an AiPOD */}
      <section id="what-is-an-aipod" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-emerald-600 uppercase tracking-wider">What is an AiPOD</span>
          <h2 className="text-[clamp(20px,2vw,27px)] font-800 text-navy mt-3 leading-snug tracking-tight font-bold">A delivery squad with AI tooling woven in — not tacked on.</h2>
        </div>
        <div className="text-gray-600 text-[15.5px] leading-relaxed mb-8 max-w-[640px]">
          <p>An AiPOD is a cross-functional squad of 3–6 people, purpose-built around a specific delivery need. Every member works with AI tooling as a standard part of their workflow — not as an occasional assist. The result is a team that can do what would typically require twice the headcount.</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] font-500 bg-gray-100 text-gray-800 border border-gray-200">
            <UserCircleGear weight="bold" className="text-emerald-600 text-sm" /> Tech Lead
          </span>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] font-500 bg-gray-100 text-gray-800 border border-gray-200">
            <Code weight="bold" className="text-emerald-600 text-sm" /> 2–3 Engineers
          </span>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] font-500 bg-gray-100 text-gray-800 border border-gray-200">
            <TestTube weight="bold" className="text-emerald-600 text-sm" /> QA Engineer
          </span>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] font-500 bg-gray-100 text-gray-800 border border-gray-200">
            <MagnifyingGlassPlus weight="bold" className="text-emerald-600 text-sm" /> Domain Analyst
          </span>
        </div>
      </section>

      {/* Section: How they work */}
      <section id="how-they-work" data-section className="mb-16 aos pt-14 border-t border-gray-100">
        <div className="mb-6">
          <span className="text-sm font-600 text-emerald-600 uppercase tracking-wider">How they work</span>
          <h2 className="text-[clamp(20px,2vw,27px)] font-800 text-navy mt-3 leading-snug tracking-tight font-bold">AI in every stage of delivery — not just in the IDE.</h2>
        </div>
        <div className="text-gray-600 text-[15.5px] leading-relaxed mb-6 max-w-[640px]">
          <p>AiPODS don't just use AI for code generation. The tooling spans requirement analysis, test generation, documentation, code review assistance and deployment validation. The squad is trained to use these tools as a workflow — not as shortcuts.</p>
        </div>

        <ul className="flex flex-col gap-2.5 mt-6">
          <li className="flex items-start gap-3 text-[15px] text-gray-700 leading-relaxed">
            <CheckCircle weight="fill" className="text-emerald-600 text-[17px] flex-shrink-0 mt-[1px]" />
            <span>Requirement analysis and breakdown — AI-assisted, human-validated</span>
          </li>
          <li className="flex items-start gap-3 text-[15px] text-gray-700 leading-relaxed">
            <CheckCircle weight="fill" className="text-emerald-600 text-[17px] flex-shrink-0 mt-[1px]" />
            <span>Code generation with mandatory human review gates</span>
          </li>
          <li className="flex items-start gap-3 text-[15px] text-gray-700 leading-relaxed">
            <CheckCircle weight="fill" className="text-emerald-600 text-[17px] flex-shrink-0 mt-[1px]" />
            <span>Automated test generation and coverage validation</span>
          </li>
          <li className="flex items-start gap-3 text-[15px] text-gray-700 leading-relaxed">
            <CheckCircle weight="fill" className="text-emerald-600 text-[17px] flex-shrink-0 mt-[1px]" />
            <span>Documentation kept current as part of the delivery cycle</span>
          </li>
        </ul>
      </section>

      {/* Section: Best-fit work */}
      <section id="best-fit" data-section className="mb-16 aos pt-14 border-t border-gray-100">
        <div className="mb-6">
          <span className="text-sm font-600 text-emerald-600 uppercase tracking-wider">Best-fit work</span>
          <h2 className="text-[clamp(20px,2vw,27px)] font-800 text-navy mt-3 leading-snug tracking-tight font-bold">Not every problem needs an AiPOD. Here's where they excel.</h2>
        </div>
        <div className="text-gray-600 text-[15.5px] leading-relaxed mb-6 max-w-[640px]">
          <p>AiPODS work best on clearly-scoped, iterative work where speed of delivery directly drives business value. If the work requires deep creative or strategic judgment at every step, a traditional squad may be more appropriate — and we'll tell you that.</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {[
            'Feature development sprints',
            'API integration work',
            'Data pipeline builds',
            'Content & document processing',
            'QA automation',
            'Rapid prototyping',
            'Internal tooling',
            'Backlog acceleration',
            'Legacy migration support'
          ].map((tag, idx) => (
            <span key={idx} className="px-3.5 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[13px] font-500 text-gray-700">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Section: Getting started */}
      <section id="getting-started" data-section className="mb-16 aos pt-14 border-t border-gray-100">
        <div className="mb-6">
          <span className="text-sm font-600 text-emerald-600 uppercase tracking-wider">Getting started</span>
          <h2 className="text-[clamp(20px,2vw,27px)] font-800 text-navy mt-3 leading-snug tracking-tight font-bold">The first step is a conversation, not a commitment.</h2>
        </div>
        <div className="text-gray-600 text-[15.5px] leading-relaxed mb-8 max-w-[640px] space-y-3.5">
          <p>We spend time with you to understand the delivery problem before recommending an AiPOD structure. If the model isn't the right fit for what you need, we'll say so — and suggest a better alternative.</p>
          <p>Most AiPOD squads can be up and running within 3–4 weeks of brief sign-off. The ramp-up is faster than a traditional hire cycle precisely because the tooling infrastructure is already in place.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
          <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
            <div className="text-3xl font-800 text-emerald-600 mb-1 tracking-tight">3–4w</div>
            <div className="text-[12.5px] text-gray-500 leading-snug">Squad operational from brief sign-off</div>
          </div>
          <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
            <div className="text-3xl font-800 text-emerald-600 mb-1 tracking-tight">3–6</div>
            <div className="text-[12.5px] text-gray-500 leading-snug">Typical squad size</div>
          </div>
          <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
            <div className="text-3xl font-800 text-emerald-600 mb-1 tracking-tight">XX%</div>
            <div className="text-[12.5px] text-gray-500 leading-snug">Throughput improvement vs traditional model</div>
          </div>
        </div>
      </section>
    </ConsolePage>
  )
}
