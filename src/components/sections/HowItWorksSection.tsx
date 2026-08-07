const phases = [
  {
    num: 'Phase 01',
    name: 'Understand & Plan',
    duration: 'Weeks 1–2',
    title: 'We start by listening, not selling.',
    sub: 'Before we recommend anything, we take time to understand your business, your team structure, your goals — and your concerns. This shapes everything that follows.',
    weDo: [
      'Deep-dive discovery call with your stakeholders',
      'Assess the right engagement model for your situation',
      'Map out roles, timelines and success metrics',
      'Deliver a clear, costed proposal — no ambiguity',
    ],
    youDo: [
      'Share your goals and current team structure',
      "Tell us what's worked and what hasn't before",
      'Review and approve the proposed plan',
    ],
    outcome: 'You leave Phase 1 with a clear plan, a realistic timeline, and full confidence in the next step.',
  },
  {
    num: 'Phase 02',
    name: 'Build & Launch',
    duration: 'Weeks 3–12',
    title: 'We handle the complexity. You stay focused.',
    sub: "From legal entity setup to your first hire's first day — we manage the operational details so you don't have to. You're involved at the decisions that matter, without being buried in the ones that don't.",
    weDo: [
      'Legal entity formation and compliance setup',
      'Source, screen and interview candidates',
      'Negotiate offers and manage onboarding',
      'Set up office infrastructure and IT environment',
      'Establish payroll, HR policies and governance',
    ],
    youDo: [
      'Make final hiring decisions on shortlisted candidates',
      'Approve tooling and infrastructure choices',
      'Weekly check-ins with your Intellispark lead',
      'Begin integrating your new team into workflows',
    ],
    outcome: 'You leave Phase 2 with a fully operational team, embedded in your processes and ready to deliver.',
  },
  {
    num: 'Phase 03',
    name: 'Grow & Scale',
    duration: 'Month 3 onwards',
    title: 'We stay with you — as much or as little as you need.',
    sub: 'Once your team is running, we shift into a support and growth role. Whether you want to scale headcount, improve governance, or eventually take full ownership — we flex to where you are.',
    weDo: [
      'Ongoing HR, payroll and compliance management',
      'Retention programmes and team engagement support',
      'Scale hiring as your team grows',
      'Governance reviews and performance reporting',
    ],
    youDo: [
      'Lead the team day-to-day on your products',
      'Define growth plans and headcount needs',
      'Choose your level of Intellispark involvement',
    ],
    outcome: 'Your India team operates like any other part of your organisation — productive, stable and growing.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8" aria-labelledby="hiw-title">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-end mb-16 aos">
          <div>
            <span className="text-sm font-600 text-blue uppercase tracking-wider">How it works</span>
            <h2 id="hiw-title" className="text-3xl md:text-4xl font-700 text-navy mt-3 leading-tight">
              From first conversation to a team that&apos;s yours.
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            No black boxes, no surprises. Here&apos;s exactly what the journey looks like — and what you can expect from us at every stage.
          </p>
        </div>

        <div className="relative space-y-12">
          {phases.map((phase, idx) => (
            <div key={idx} className="aos grid md:grid-cols-[220px_1fr] gap-6 md:gap-10">
              <div className="flex md:flex-col md:items-start items-center gap-3 md:gap-2">
                <div className="w-3 h-3 rounded-full bg-blue flex-shrink-0" />
                <div>
                  <div className="text-sm font-600 text-blue">{phase.num}</div>
                  <div className="font-700 text-navy">{phase.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{phase.duration}</div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-700 text-navy mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{phase.sub}</p>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-xs font-600 text-gray-500 uppercase tracking-wider mb-3">What we do</div>
                    <ul className="space-y-2">
                      {phase.weDo.map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-600 text-gray-500 uppercase tracking-wider mb-3">What you do</div>
                    <ul className="space-y-2">
                      {phase.youDo.map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-2 items-start text-sm font-500 text-navy bg-blue-pale rounded-lg px-4 py-3">
                  <span className="text-blue font-700">✓</span>
                  {phase.outcome}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 aos flex flex-col sm:flex-row items-center justify-between gap-6 bg-navy rounded-2xl px-8 py-8">
          <p className="text-white text-lg">
            <strong>Ready to take the first step?</strong> The discovery call is free, and there&apos;s no obligation.
          </p>
          <a
            href="/book-a-call"
            className="px-6 py-3 bg-blue text-white font-600 rounded-lg hover:bg-blue-light transition-colors inline-flex items-center gap-2 whitespace-nowrap"
          >
            Book a Call →
          </a>
        </div>
      </div>
    </section>
  )
}
