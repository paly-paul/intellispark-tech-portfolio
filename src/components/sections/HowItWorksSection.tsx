import ArrowRight from '@/components/icons/ArrowRight'

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
    <section className="px-6 py-20 md:px-8 md:py-[100px]" aria-labelledby="hiw-title">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 grid items-end gap-8 md:grid-cols-2 aos">
          <div>
            <div className="hiw__eyebrow">How it works</div>
            <h2 id="hiw-title" className="text-3xl font-900 font-bold leading-tight text-navy md:text-4xl">
              From first conversation to a team that&apos;s yours.
            </h2>
          </div>
          <p className="hiw__sub">
            No black boxes, no surprises. Here&apos;s exactly what the journey looks like — and what you can expect from us at every stage.
          </p>
        </div>

        <div className="hiw__timeline aos" role="list">
          <div className="hiw__spine" aria-hidden="true" />

          {phases.map((phase, idx) => (
            <div key={idx} className={`phase phase--${idx + 1}`} role="listitem">
              <div className="phase__left">
                <div className="phase__step-num">{phase.num}</div>
                <div className="phase__step-name">{phase.name}</div>
                <div className="phase__duration">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {phase.duration}
                </div>
                <div className="phase__node" aria-hidden="true">
                  <div className="phase__node-inner" />
                </div>
              </div>

              <div className="phase__right">
                <div className="phase__card">
                  <h3 className="phase__card-title">{phase.title}</h3>
                  <p className="phase__card-sub">{phase.sub}</p>

                  <div className="phase__columns">
                    <div>
                      <div className="phase__col-label">What we do</div>
                      <ul className="phase__col-items">
                        {phase.weDo.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <span className="item-dot" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="phase__col-label">What you do</div>
                      <ul className="phase__col-items">
                        {phase.youDo.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <span className="item-dot" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="phase__outcome">
                    <span className="outcome-icon">✓</span>
                    {phase.outcome}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hiw__cta aos">
          <p>
            <strong>Ready to take the first step?</strong> The discovery call is free, and there&apos;s no obligation.
          </p>
          <a href="/book-a-call" className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-blue px-6 py-3 font-600 text-white transition-colors hover:bg-blue-light">
            Book a Call <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
