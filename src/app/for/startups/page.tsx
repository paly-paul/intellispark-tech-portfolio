'use client'

import { Rocket, CheckCircle, Brain, GitBranch, Lock, ArrowRight, Cpu, PhoneCall } from '@phosphor-icons/react'
import ConsolePage from '@/components/templates/ConsolePage'

export default function Startups() {
  return (
    <ConsolePage
      eyebrow="For · Startups"
      icon={<Rocket weight="bold" size={16} />}
      h1="Move fast. Don't compromise on quality."
      h1ClassName="text-3xl md:text-5xl font-900 font-bold leading-tight mb-4"
      intro="Startups have different constraints from enterprises — tighter budgets, faster timelines and less tolerance for overhead. We offer models that work at your stage, starting lean and building from there."
      accent="#8b5cf6"
      badges={['Kochi, India', 'Lean start, scalable']}
      navSections={[
        { id: 'starting-lean', label: 'Starting lean' },
        { id: 'aipods-for-startups', label: 'AiPODS for startups' },
        { id: 'founder-direct', label: 'Founder-direct' },
        { id: 'path-to-gcc', label: 'Path to GCC' },
      ]}
      related={[
        { label: 'Staff Augmentation', href: '/staff-augmentation' },
        { label: 'AiPODS', href: '/aipods' },
        { label: 'For Mid-Market', href: '/for/mid-market' },
      ]}
    >
      {/* Section: Starting lean */}
      <section id="starting-lean" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-[#8b5cf6] uppercase tracking-wider">Starting lean</span>
          <h2 className="text-2xl md:text-3xl font-900 font-bold text-navy mt-3">You don&apos;t need a GCC at Series A. You need two great engineers.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-3xl">
          The GCC setup process is designed for companies ready to commit to a permanent India presence. At the seed or Series A stage, that&apos;s often the wrong model. What you need is one or two excellent people who can work alongside your existing team without slowing it down.
        </p>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-3xl">
          We can place individuals or small teams within 2–4 weeks of brief sign-off, with no minimum commitment and no lock-in.
        </p>
        
        <div className="space-y-4">
          {[
            'Single or small-team placements — from 2 weeks of brief sign-off',
            'No minimum headcount, no lock-in — we\'re not trying to manufacture a commitment',
            'Post-placement support at 30, 60 and 90 days included',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle weight="fill" className="text-[#8b5cf6] mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-600 text-base leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: AiPODS for startups */}
      <section id="aipods-for-startups" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-[#8b5cf6] uppercase tracking-wider">AiPODS for startups</span>
          <h2 className="text-2xl md:text-3xl font-900 font-bold text-navy mt-3">A full delivery squad for the cost of two senior hires.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-3xl">
          Our AiPODS model is particularly well-suited to growth-stage companies that need to ship features quickly without building a full in-house team. A small, AI-enabled squad covers what would typically take twice the headcount — and ramps up in weeks, not months.
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
            <Rocket className="text-[#8b5cf6]" size={16} />
            <span className="text-sm font-500 text-gray-800">Fast ramp — 3-4 weeks</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
            <Cpu className="text-[#8b5cf6]" size={16} />
            <span className="text-sm font-500 text-gray-800">AI-integrated workflow</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
            <GitBranch className="text-[#8b5cf6]" size={16} />
            <span className="text-sm font-500 text-gray-800">Embedded in your sprint</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
            <Lock className="text-[#8b5cf6]" size={16} />
            <span className="text-sm font-500 text-gray-800">Full IP ownership</span>
          </div>
        </div>

        <a href="/aipods" className="inline-flex items-center gap-1 text-[#8b5cf6] font-500 text-base mt-2 hover:underline">
          Read more about AiPODS <ArrowRight size={16} />
        </a>
      </section>

      {/* Section: Founder-direct */}
      <section id="founder-direct" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-[#8b5cf6] uppercase tracking-wider">Founder-direct</span>
          <h2 className="text-2xl md:text-3xl font-900 font-bold text-navy mt-3">No account manager layer. You deal with the people doing the work.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-3xl">
          Startup founders don&apos;t have time for account management theatre. Every Intellispark engagement for a startup has a named lead from our founding team — not an account manager who relays your concerns to someone else. You&apos;ll have a direct line to the person who owns your outcome.
        </p>
        
        <div className="bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-xl p-5 md:p-6 flex flex-col md:flex-row gap-4 items-start">
          <div className="bg-[#8b5cf6]/20 p-2.5 rounded-lg flex-shrink-0">
            <PhoneCall weight="fill" className="text-[#8b5cf6]" size={24} />
          </div>
          <div>
            <h3 className="text-[#6d28d9] font-700 font-bold mb-1">Direct access to founding team</h3>
            <p className="text-[#7c3aed] text-sm md:text-base leading-relaxed">
              The person you speak to in the initial discovery call is the same person who owns your engagement. We don&apos;t hand off to delivery teams and hope for the best.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Path to GCC */}
      <section id="path-to-gcc" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-[#8b5cf6] uppercase tracking-wider">Path to GCC</span>
          <h2 className="text-2xl md:text-3xl font-900 font-bold text-navy mt-3">We design early engagements with growth in mind.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-3xl">
          Many of our startup clients who start with one or two placements eventually choose to build a GCC as they scale. We design early engagements with that trajectory in mind — the foundations we lay now won&apos;t create problems later. There&apos;s no obligation to think that far ahead, but the path is there when you need it.
        </p>

        <div className="border border-gray-100 rounded-xl overflow-hidden bg-white">
          <div className="flex flex-col md:flex-row border-b border-gray-100">
            <div className="w-full md:w-28 flex-shrink-0 bg-[#8b5cf6]/5 p-2 md:p-3 border-b md:border-b-0 md:border-r border-[#8b5cf6]/10 flex items-center justify-center md:justify-start">
              <span className="text-[#8b5cf6] text-sm md:text-base font-700 font-bold">Now</span>
            </div>
            <div className="flex-1 p-3 md:p-4">
              <h3 className="font-700 font-bold text-gray-900 text-sm md:text-base mb-1">1–3 placements or an AiPOD squad</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Start lean. Validate the model. Integrate into your existing workflows without overhead.</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row border-b border-gray-100">
            <div className="w-full md:w-28 flex-shrink-0 bg-[#8b5cf6]/5 p-2 md:p-3 border-b md:border-b-0 md:border-r border-[#8b5cf6]/10 flex items-center justify-center md:justify-start">
              <span className="text-[#8b5cf6] text-sm md:text-base font-700 font-bold">Series B</span>
            </div>
            <div className="flex-1 p-3 md:p-4">
              <h3 className="font-700 font-bold text-gray-900 text-sm md:text-base mb-1">Team of 8–15 across functions</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Expand beyond engineering. Add product, QA, operations. Structure becomes more important.</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-28 flex-shrink-0 bg-[#8b5cf6]/5 p-2 md:p-3 border-b md:border-b-0 md:border-r border-[#8b5cf6]/10 flex items-center justify-center md:justify-start">
              <span className="text-[#8b5cf6] text-sm md:text-base font-700 font-bold">Scale</span>
            </div>
            <div className="flex-1 p-3 md:p-4">
              <h3 className="font-700 font-bold text-gray-900 text-sm md:text-base mb-1">GCC or dedicated delivery centre</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Your India team becomes a core part of the org. Entity, infrastructure and governance formalised.</p>
            </div>
          </div>
        </div>
      </section>
    </ConsolePage>
  )
}
