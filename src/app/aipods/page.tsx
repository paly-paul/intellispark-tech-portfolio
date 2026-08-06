'use client'

import { Robot } from '@phosphor-icons/react'
import ConsolePage from '@/components/templates/ConsolePage'

export default function AiPODS() {
  return (
    <ConsolePage
      eyebrow="Service · AiPODS"
      icon={<Robot weight="bold" size={16} />}
      h1="A delivery squad with AI tooling woven in — not tacked on."
      intro="Small, focused teams combining domain expertise with integrated AI tooling to deliver more, faster. 3–6 person cross-functional squads built for your specific needs."
      accent="#059669"
      badges={['Kochi, India', 'AI-powered teams']}
      navSections={[
        { id: 'what-is-aipod', label: 'What is an AiPOD' },
        { id: 'how-they-work', label: 'How they work' },
        { id: 'best-fit', label: 'Best-fit work' },
        { id: 'getting-started', label: 'Getting started' },
      ]}
      related={[
        { label: 'Product Engineering', href: '/product-engineering' },
        { label: 'Staff Augmentation', href: '/staff-augmentation' },
        { label: 'For Enterprise', href: '/for/enterprise' },
      ]}
    >
      {/* Section: What is an AiPOD */}
      <section id="what-is-aipod" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-emerald-600 uppercase tracking-wider">What is an AiPOD</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">A delivery squad with AI tooling woven in — not tacked on.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          An AiPOD is a cross-functional squad of 3–6 people, purpose-built around a specific delivery need. Every member works with AI tooling as a standard part of their workflow — not as an occasional assist. The result is a team that can do what would typically require twice the headcount.
        </p>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
          <p className="text-gray-900 font-600 mb-2">Not consultants. Not vendors. Your embedded team.</p>
          <p className="text-gray-700 text-sm">
            They work inside your systems, follow your processes, and own outcomes. AI tooling is integrated into their daily workflow — from design through deployment. This isn&apos;t about replacing people. It&apos;s about amplifying them.
          </p>
        </div>
      </section>

      {/* Section: How they work */}
      <section id="how-they-work" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-emerald-600 uppercase tracking-wider">How they work</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">From briefing to delivery in XX weeks.</h2>
        </div>
        <div className="space-y-4">
          <div className="border-l-4 border-emerald-500 pl-6 py-3">
            <h3 className="font-700 text-gray-900 mb-2">Week 1: Understand your need</h3>
            <p className="text-gray-600 text-sm">We get to know your domain, your constraints, and your tech stack. We propose the squad composition.</p>
          </div>
          <div className="border-l-4 border-emerald-500 pl-6 py-3">
            <h3 className="font-700 text-gray-900 mb-2">Week 2-3: Ramp and integration</h3>
            <p className="text-gray-600 text-sm">Your AiPOD gets full access, learns your codebase, and integrates their tools into your systems. They&apos;re productive from day one.</p>
          </div>
          <div className="border-l-4 border-emerald-500 pl-6 py-3">
            <h3 className="font-700 text-gray-900 mb-2">Week 4+: Delivery at scale</h3>
            <p className="text-gray-600 text-sm">Your squad owns delivery. You see progress through your standard reporting — they&apos;re not separate from your team, they&apos;re an extension of it.</p>
          </div>
        </div>
      </section>

      {/* Section: Best-fit work */}
      <section id="best-fit" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-emerald-600 uppercase tracking-wider">Best-fit work</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">AiPODS excel at...</h2>
        </div>
        <div className="space-y-3">
          {[
            'Feature development with clear acceptance criteria',
            'Infrastructure and platform work — APIs, microservices, data pipelines',
            'Testing, refactoring, and technical debt paydown',
            'Documentation and knowledge transfer',
            'Rapid prototyping and MVP delivery',
            'Backend systems, data platforms, tooling',
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <span className="text-emerald-700 font-700 flex-shrink-0">✓</span>
              <span className="text-gray-900 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Getting started */}
      <section id="getting-started" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-emerald-600 uppercase tracking-wider">Getting started</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">How to bring in your first AiPOD.</h2>
        </div>
        <div className="space-y-4">
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Step 1: Define the need</h3>
            <p className="text-sm text-gray-600">
              You tell us what you want to build or fix. We discuss scope, timeline, and who should be on the squad. This takes one conversation.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Step 2: Squad assembly</h3>
            <p className="text-sm text-gray-600">
              We source and propose the right people for your domain and tech stack. You approve — or we find someone better.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Step 3: Ramp and deliver</h3>
            <p className="text-sm text-gray-600">
              Your AiPOD integrates into your systems and starts delivery. You manage them as you would any internal team.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Step 4: Scale or wind down</h3>
            <p className="text-sm text-gray-600">
              After the engagement, you can keep them, extend them, hire them permanently, or wind down cleanly. It&apos;s your choice.
            </p>
          </div>
        </div>
      </section>
    </ConsolePage>
  )
}
