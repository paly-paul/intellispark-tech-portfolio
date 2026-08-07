'use client'

import { ArrowsClockwise } from '@phosphor-icons/react'
import ConsolePage from '@/components/templates/ConsolePage'

export default function BotCopo() {
  return (
    <ConsolePage
      eyebrow="Service · BOT / COPO"
      icon={<ArrowsClockwise weight="bold" size={16} />}
      h1="Start with us running everything. Take over when you're ready."
      intro="The BOT model lets you build a world-class India team without making irreversible commitments on day one. We operate on your behalf during the build phase — you take control at a milestone that makes sense for your business."
      accent="#00B8A9"
      badges={['Kochi, India', 'Flexible ownership']}
      navSections={[
        { id: 'the-model', label: 'The model' },
        { id: 'copo-variant', label: 'COPO variant' },
        { id: 'who-its-for', label: "Who it's for" },
        { id: 'transition', label: 'Transition' },
      ]}
      related={[
        { label: 'GCC Setup', href: '/gcc-setup' },
        { label: 'Staff Augmentation', href: '/staff-augmentation' },
        { label: 'For Mid-Market', href: '/for/mid-market' },
      ]}
    >
      {/* Section: The model */}
      <section id="the-model" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-teal uppercase tracking-wider">The model</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Build. Operate. Transfer — at a pace that suits you.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          BOT is a structured path to ownership, not a permanent outsourcing arrangement. We carry the operational weight while the team matures and integrates — then ownership transfers cleanly when you&apos;re ready to run it yourself.
        </p>
        <div className="space-y-4">
          <div className="flex gap-4 p-5 bg-white border border-gray-200 rounded-lg">
            <div className="text-lg font-900 text-teal flex-shrink-0 w-6">B</div>
            <div>
              <h3 className="font-700 text-gray-900 mb-1">Build — Months 1–3</h3>
              <p className="text-sm text-gray-600">We design the team structure, source talent to your specification, establish legal entity and infrastructure. You approve hires, we run the process.</p>
            </div>
          </div>
          <div className="flex gap-4 p-5 bg-white border border-gray-200 rounded-lg">
            <div className="text-lg font-900 text-teal flex-shrink-0 w-6">O</div>
            <div>
              <h3 className="font-700 text-gray-900 mb-1">Operate — Months 3–18</h3>
              <p className="text-sm text-gray-600">We run HR, payroll, compliance and day-to-day operations. You direct the work. The team reports into your org chart, not ours. Full accountability on our side.</p>
            </div>
          </div>
          <div className="flex gap-4 p-5 bg-white border border-gray-200 rounded-lg">
            <div className="text-lg font-900 text-teal flex-shrink-0 w-6">T</div>
            <div>
              <h3 className="font-700 text-gray-900 mb-1">Transfer — At a pre-agreed milestone</h3>
              <p className="text-sm text-gray-600">Ownership moves to you — entity, contracts, relationships, documentation. The handover is designed from day one, so there are no surprises at the transfer point.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: COPO variant */}
      <section id="copo-variant" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-teal uppercase tracking-wider">COPO variant</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Co-ownership for companies that want a long-term advisory partner.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          In the COPO model, Intellispark retains a minority stake through the operate phase. This aligns our incentives directly with your team&apos;s performance — not just the placement. It suits companies that want ongoing advisory involvement after transfer, rather than a clean exit.
        </p>
        <div className="space-y-3">
          {[
            'Shared accountability during the operate phase — we have skin in the game',
            'Governance and reporting aligned from the first day',
            'Clean full-transfer or ongoing co-management — you choose at the milestone',
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 p-4 bg-teal-light rounded-lg">
              <span className="text-teal font-700 flex-shrink-0">✓</span>
              <span className="text-gray-900 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Who it's for */}
      <section id="who-its-for" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-teal uppercase tracking-wider">Who it&apos;s for</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Right for companies that are serious, but cautious.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          BOT and COPO are not for everyone. They work best when you want the long-term upside of a GCC without taking on the full operational burden before you&apos;re confident the model works for your business.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 font-500">🌱 First India entity</div>
          <div className="px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 font-500">🧪 GCC pilot before full commitment</div>
          <div className="px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 font-500">⚠️ Prior offshore experience went badly</div>
          <div className="px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 font-500">⏳ Limited internal ops bandwidth</div>
        </div>
      </section>

      {/* Section: Transition */}
      <section id="transition" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-teal uppercase tracking-wider">Transition</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">The handover is designed in from day one — not figured out at the end.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Most BOT arrangements fail at the transfer point because it wasn&apos;t properly planned at the start. We document every process, contract and relationship in a way that makes transition clean — whether that&apos;s month 18 or month 36.
        </p>
        <div className="flex gap-4 bg-teal-light rounded-xl p-6 md:p-8">
          <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center text-teal flex-shrink-0">🔄</div>
          <div>
            <div className="font-700 text-gray-900 mb-1">No irreversible decisions on day one</div>
            <p className="text-sm text-gray-700">You commit to the build. The transfer timeline, terms and structure are defined upfront — and reviewed as the team matures. Nothing is locked in that can&apos;t be adjusted.</p>
          </div>
        </div>
      </section>
    </ConsolePage>
  )
}
