'use client'

import { Rocket } from '@phosphor-icons/react'
import ConsolePage from '@/components/templates/ConsolePage'

export default function Startups() {
  return (
    <ConsolePage
      eyebrow="Audience · Startups"
      icon={<Rocket weight="bold" size={16} />}
      h1="Build lean, move fast. Hire great people in India — starting small, scaling as you grow."
      intro="You need to move at startup speed. That means hiring fast, but smart. We help you build a remote-first engineering team in India — starting with one or two strong placements, evolving into a full centre as you scale."
      accent="#F59E0B"
      badges={['India access', 'Startup-ready']}
      navSections={[
        { id: 'starting-lean', label: 'Start lean' },
        { id: 'aipods-for-startups', label: 'AiPODS for startups' },
        { id: 'founder-direct', label: 'Founder-direct hiring' },
        { id: 'path-to-gcc', label: 'Path to GCC' },
      ]}
      related={[
        { label: 'Staff Augmentation', href: '/staff-augmentation' },
        { label: 'AiPODS', href: '/aipods' },
        { label: 'For Mid-Market', href: '/for/mid-market' },
      ]}
    >
      {/* Section: Start lean */}
      <section id="starting-lean" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-amber-600 uppercase tracking-wider">Start lean</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">One engineer today. A team of XX tomorrow.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Startups don&apos;t need a full GCC from day one. You need one great hire. Then another. Then a team lead. Then a centre. We help you make each step count.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <p className="text-gray-900 font-600 mb-2">No minimum commitment. No lock-in.</p>
          <p className="text-gray-700 text-sm">
            Hire one person. If it works, hire two more. If it doesn&apos;t, part ways cleanly. This is how you validate the India market without betting the company.
          </p>
        </div>
      </section>

      {/* Section: AiPODS for startups */}
      <section id="aipods-for-startups" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-amber-600 uppercase tracking-wider">AiPODS for startups</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Get XX% more done with the same headcount.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Don&apos;t have headcount budget? An AiPOD gives you a squad with built-in AI tooling. They can move faster. Deliver more. Cost less than hiring XX people.
        </p>
        <div className="space-y-3">
          {[
            'Feature development on a fixed timeline — 3–6 months',
            'Platform or infrastructure work when you can&apos;t hire in-house',
            'Rapid MVP or prototype build',
            'Hiring flexibility — scale them up or down as needs change',
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <span className="text-amber-700 font-700 flex-shrink-0">✓</span>
              <span className="text-gray-900 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Founder-direct hiring */}
      <section id="founder-direct" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-amber-600 uppercase tracking-wider">Founder-direct hiring</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">You make the calls. We handle the logistics.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          As a founder, you know your culture. You know the people you want. We source them, vet them, but you pick the final team. You stay plugged in at every step.
        </p>
        <div className="space-y-4">
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">First hire</h3>
            <p className="text-sm text-gray-600">
              You tell us the role and seniority. We source 3–5 candidates. You interview. You decide. Typical timeline: 2–3 weeks.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Growing to a team</h3>
            <p className="text-sm text-gray-600">
              Once you have one great person, they help you hire the next. We source, screen, facilitate. You approve every hire.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Always onsite in your system</h3>
            <p className="text-sm text-gray-600">
              They work in your Slack, your GitHub, your codebase. They&apos;re part of your team from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Path to GCC */}
      <section id="path-to-gcc" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-amber-600 uppercase tracking-wider">Path to GCC</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">From first hire to full centre — at your pace.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          As you scale, you might move from individual hires to a GCC. No rush. When you&apos;re ready, we help you formalise it.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="font-700 text-gray-900 mb-4">Your milestone, not ours</h3>
          <ul className="space-y-2">
            <li className="flex gap-3">
              <span className="text-amber-600 font-700 flex-shrink-0">•</span>
              <span className="text-gray-700 text-sm"><strong>Month 1–6:</strong> Hire 1–3 strong people. They work for you.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-700 flex-shrink-0">•</span>
              <span className="text-gray-700 text-sm"><strong>Month 6–12:</strong> Growing to 5–10 people. Time to think about structure.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-700 flex-shrink-0">•</span>
              <span className="text-gray-700 text-sm"><strong>Month 12+:</strong> Ready for GCC? We help you formalise entity, hiring, and operations.</span>
            </li>
          </ul>
        </div>
      </section>
    </ConsolePage>
  )
}
