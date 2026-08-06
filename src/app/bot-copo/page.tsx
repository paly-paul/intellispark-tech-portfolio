'use client'

import { ArrowsClockwise } from '@phosphor-icons/react'
import ConsolePage from '@/components/templates/ConsolePage'

export default function BotCopo() {
  return (
    <ConsolePage
      eyebrow="Service · BOT / COPO"
      icon={<ArrowsClockwise weight="bold" size={16} />}
      h1="Build, Operate, Transfer — scale without the long-term commitment."
      intro="You need India talent today, but you're not sure about the long-term structure. BOT lets you start small, prove the model, and then decide whether to own or exit."
      accent="#00B8A9"
      badges={['Kochi, India', 'Flexible model']}
      navSections={[
        { id: 'how-it-works', label: 'How it works' },
        { id: 'the-phases', label: 'The phases' },
        { id: 'exit-options', label: 'Exit options' },
        { id: 'when-to-use', label: 'When to use BOT' },
      ]}
      related={[
        { label: 'GCC Setup', href: '/gcc-setup' },
        { label: 'Staff Augmentation', href: '/staff-augmentation' },
        { label: 'For Mid-Market', href: '/for/mid-market' },
      ]}
    >
      {/* Section: How it works */}
      <section id="how-it-works" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-teal uppercase tracking-wider">How it works</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">A phased approach to building and owning your India team.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          BOT gives you the structure of a GCC with the flexibility of a temporary engagement. We build your team and operations, you run them, and then you decide: keep it and own it permanently, or exit cleanly.
        </p>
        <div className="bg-teal-light rounded-xl p-8">
          <p className="text-gray-900 leading-relaxed">
            Every BOT engagement includes a clear timeline, defined metrics for success, and a predetermined exit path. You never wonder where you stand or whether you&apos;re locked in.
          </p>
        </div>
      </section>

      {/* Section: The phases */}
      <section id="the-phases" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-teal uppercase tracking-wider">The phases</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Three phases to success — then your choice.</h2>
        </div>
        <div className="space-y-4">
          <div className="border-l-4 border-teal pl-6 py-3">
            <h3 className="font-700 text-gray-900 mb-2">Phase 1: Build (Months 1-3)</h3>
            <p className="text-gray-600 text-sm">We establish the entity, hire your leadership, and build your infrastructure. You observe and learn how we operate.</p>
          </div>
          <div className="border-l-4 border-teal pl-6 py-3">
            <h3 className="font-700 text-gray-900 mb-2">Phase 2: Operate (Months 4-XX)</h3>
            <p className="text-gray-600 text-sm">You take ownership of day-to-day operations. We remain available for guidance, troubleshooting, and strategic input. You decide if this works for you.</p>
          </div>
          <div className="border-l-4 border-teal pl-6 py-3">
            <h3 className="font-700 text-gray-900 mb-2">Phase 3: Transfer or Exit</h3>
            <p className="text-gray-600 text-sm">Ready to own it permanently? We transition full ownership. Want to wind down? We handle the exit and ensure a smooth transition for your team.</p>
          </div>
        </div>
      </section>

      {/* Section: Exit options */}
      <section id="exit-options" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-teal uppercase tracking-wider">Exit options</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Total flexibility for your long-term plans.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Option 1: Keep & Own</h3>
            <p className="text-sm text-gray-600 mb-4">
              You take full ownership of the GCC, the entity, and the team. We step back. This is now your operation permanently.
            </p>
            <p className="text-xs text-teal font-600">Most common path</p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Option 2: Exit Cleanly</h3>
            <p className="text-sm text-gray-600 mb-4">
              It didn&apos;t work out, or your priorities changed. We handle the wind-down, manage severance, and ensure your team transitions smoothly.
            </p>
            <p className="text-xs text-teal font-600">No penalties, no drama</p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Option 3: Extend BOT</h3>
            <p className="text-sm text-gray-600 mb-4">
              You want to keep testing the model or need more time to commit. We can extend the BOT phase without changing your commitment level.
            </p>
            <p className="text-xs text-teal font-600">Flexibility on your timeline</p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Option 4: Pivot</h3>
            <p className="text-sm text-gray-600 mb-4">
              Your business needs shifted. We can pivot the team to a different service model or engagement type without starting from scratch.
            </p>
            <p className="text-xs text-teal font-600">Adapt, don&apos;t restart</p>
          </div>
        </div>
      </section>

      {/* Section: When to use */}
      <section id="when-to-use" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-teal uppercase tracking-wider">When to use</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">BOT is perfect if...</h2>
        </div>
        <div className="space-y-3">
          {[
            'You want a GCC but aren&apos;t ready to commit long-term',
            'You need to prove the India model works before investing',
            'Your business is in transition and you want flexibility',
            'You want to learn how to operate a distributed team first',
            'You need rapid scaling without permanent headcount',
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 p-4 bg-blue-pale rounded-lg">
              <span className="text-teal font-700 flex-shrink-0">✓</span>
              <span className="text-gray-900 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </ConsolePage>
  )
}
