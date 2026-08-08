'use client'

import { Code } from '@phosphor-icons/react'
import ConsolePage from '@/components/templates/ConsolePage'

export default function ProductEngineering() {
  return (
    <ConsolePage
      eyebrow="Service · Product Engineering"
      icon={<Code weight="bold" size={16} />}
      h1="Custom software built for scale, by a team that stays."
      h1ClassName="text-3xl md:text-[44px] font-900 leading-[1.1] mb-6 font-bold"
      intro="Dedicated squads who design, build and evolve software products as a fully embedded delivery partner — not a project vendor. You own the code, the IP and the roadmap."
      accent="#7C3AED"
      badges={['Kochi, India', 'Dedicated squads']}
      navSections={[
        { id: 'how-we-engage', label: 'How we engage' },
        { id: 'what-we-build', label: 'What we build' },
        { id: 'quality', label: 'Quality standards' },
        { id: 'handoff', label: 'IP & handoff' },
      ]}
      related={[
        { label: 'AiPODS', href: '/aipods' },
        { label: 'Staff Augmentation', href: '/staff-augmentation' },
        { label: 'For Enterprise', href: '/for/enterprise' },
      ]}
    >
      {/* How we engage */}
      <section id="how-we-engage" data-section className="mb-16 aos">
        <span className="text-sm font-600 text-purple-600 uppercase tracking-wider">How we engage</span>
        <h2 className="text-2xl md:text-3xl font-900 text-navy mt-3 mb-6 font-bold">Long-term delivery partner. Not a build-and-exit vendor.</h2>
        <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
          We don&apos;t take on projects where we hand over a build and disappear. Product engineering works best when we understand your domain, your users and your constraints deeply — and that understanding takes time to build and should compound, not reset.
        </p>
        <div className="space-y-3">
          {[
            'Dedicated squads — not a shared resource pool reassigned between clients',
            'Embedded in your sprint cycles, standups and planning rituals',
            'Your tech stack, your architecture decisions — we advise, you decide',
            'Named tech lead on every engagement — not a rotating cast',
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <span className="text-purple-600 font-700 flex-shrink-0">✓</span>
              <span className="text-gray-900 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What we build */}
      <section id="what-we-build" data-section className="mb-16 aos">
        <span className="text-sm font-600 text-purple-600 uppercase tracking-wider">What we build</span>
        <h2 className="text-2xl md:text-3xl font-900 text-navy mt-3 mb-6 font-bold">Full-stack capability across modern product domains.</h2>
        <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
          Our teams have delivered across a wide range of product types and technology stacks. If your stack isn&apos;t listed, ask — the chances are we&apos;ve worked with it.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {['Web applications', 'Mobile (iOS & Android)', 'APIs & microservices', 'Data platforms', 'ML & AI integration', 'Cloud infrastructure'].map((item) => (
            <div key={item} className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 font-500">
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {['Fintech', 'Healthtech', 'SaaS platforms', 'Marketplaces', 'EdTech', 'PropTech', 'Internal tooling'].map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Quality standards */}
      <section id="quality" data-section className="mb-16 aos">
        <span className="text-sm font-600 text-purple-600 uppercase tracking-wider">Quality standards</span>
        <h2 className="text-2xl md:text-3xl font-900 text-navy mt-3 mb-6 font-bold">Engineering quality is not optional. It&apos;s how we work.</h2>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl">
          Our teams operate with explicit standards on code review, test coverage, documentation and deployment practices — and we&apos;re transparent about where we stand against those standards at all times. You&apos;ll never find out there&apos;s a problem in production before we do.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['Mandatory code review', 'Test coverage requirements', 'Living documentation', 'CI/CD as standard', 'Sprint-level reporting'].map((item) => (
            <div key={item} className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 font-500">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* IP & handoff */}
      <section id="handoff" data-section className="mb-16 aos">
        <span className="text-sm font-600 text-purple-600 uppercase tracking-wider">IP & handoff</span>
        <h2 className="text-2xl md:text-3xl font-900 text-navy mt-3 mb-6 font-bold">You own everything. Always.</h2>
        <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
          IP ownership, codebase, documentation, credentials — all yours from day one. If you ever want to move the team in-house or switch to a different partner, we actively support that transition rather than making it difficult.
        </p>
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              🔐
            </div>
            <div>
              <h3 className="font-700 text-purple-900 mb-2">Full IP ownership, always</h3>
              <p className="text-sm text-purple-800">Code, documentation, architecture decisions, third-party integrations — all transferred to your organisation. We never retain ownership of any work product.</p>
            </div>
          </div>
        </div>
      </section>
    </ConsolePage>
  )
}
