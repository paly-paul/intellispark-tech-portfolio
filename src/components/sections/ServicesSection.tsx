'use client'

import Link from 'next/link'
import { Star, ArrowsClockwise, UsersThree, CodeBlock, Robot, Sparkle, Check } from '@phosphor-icons/react'
import ArrowRight from '@/components/icons/ArrowRight'

const regularServices = [
  {
    href: '/bot-copo',
    icon: ArrowsClockwise,
    iconBg: '#E6FBF9',
    iconColor: '#00B8A9',
    tag: 'BOT / COPO',
    tagColor: 'text-teal',
    title: 'Build, Operate, Transfer — at your pace.',
    desc: "Start with us managing everything. Take full ownership when you're ready. No irreversible decisions on day one.",
    caps: [
      'Structured transition with defined handover milestones',
      'Operate phase: full accountability on our side',
      'Flexible COPO model with co-ownership options',
    ],
    linkColor: 'text-teal',
  },
  {
    href: '/staff-augmentation',
    icon: UsersThree,
    iconBg: '#EEEDFF',
    iconColor: '#6366F1',
    tag: 'Staff Augmentation',
    tagColor: 'text-indigo-500',
    title: 'The right people, in your team, fast.',
    desc: 'Vetted professionals who work as a genuine extension of your team — not contractors who disappear after a sprint.',
    caps: [
      'Roles across engineering, product, data & operations',
      '2–4 week placement timeline for most roles',
      'Retention support & culture alignment included',
    ],
    linkColor: 'text-indigo-500',
  },
  {
    href: '/product-engineering',
    icon: CodeBlock,
    iconBg: '#F3EEFF',
    iconColor: '#7C3AED',
    tag: 'Product Engineering',
    tagColor: 'text-purple-600',
    title: 'Software built to last, not just to ship.',
    desc: 'Dedicated engineering teams who own your roadmap outcomes — not feature factories working ticket by ticket.',
    caps: [
      'Full-stack, mobile, data & cloud engineering',
      'Agile squads with embedded QA & DevOps',
      'IP stays with you — always',
    ],
    linkColor: 'text-purple-600',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-8 md:py-[100px]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid items-end gap-8 md:grid-cols-2 aos">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-600 uppercase tracking-[0.8px] text-blue">
              <span className="h-0.5 w-5 rounded-full bg-blue" />
              What we do
            </div>
            <h2 className="text-3xl font-900 font-bold leading-tight text-navy md:text-4xl">Everything you need to build in India.</h2>
          </div>
          <p className="max-w-[420px] text-base leading-relaxed text-gray-600">
            From setting up your first offshore team to running a fully governed Global Capability Centre — we offer the right model for where you are today, with room to grow.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[24px] border border-gray-200 bg-white md:grid-cols-2">
          <Link
            href="/gcc-setup"
            className="aos group flex flex-col items-center gap-8 border-b border-gray-200 bg-gradient-to-r from-white to-blue-pale/40 p-8 transition-colors hover:bg-gray-50 md:col-span-2 md:flex-row md:gap-14 md:p-10"
          >
            <div className="w-full flex-shrink-0 overflow-hidden rounded-2xl shadow-xl md:w-[38%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
                alt="Modern collaborative office space"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex-1">
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-blue-pale px-2.5 py-1 text-xs font-700 uppercase tracking-wide text-blue">
                <Star weight="fill" size={12} /> Most popular
              </div>
              <div className="mb-2 text-xs font-700 uppercase tracking-wider text-blue">GCC Setup</div>
              <h3 className="mb-3 text-xl font-700 leading-snug text-navy md:text-2xl">
                Global Capability Centre — done right, from day one.
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-gray-600">
                We handle the end-to-end complexity of establishing your GCC in Kochi — legal entity formation, talent acquisition, infrastructure, governance — so you can focus on your business, not the setup.
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  'Entity formation, compliance & statutory registrations',
                  'End-to-end hiring: sourcing, screening, onboarding',
                  'Office setup, IT infrastructure & security frameworks',
                  'Ongoing HR, payroll & governance support post-launch',
                ].map((cap, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Check weight="bold" size={16} className="mt-0.5 flex-shrink-0 text-blue" />
                    {cap}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1.5 text-sm font-600 text-blue transition-all group-hover:gap-2.5">
                Learn more <ArrowRight size={13} />
              </span>
            </div>
          </Link>

          {regularServices.map((svc, idx) => {
            const Icon = svc.icon
            return (
              <Link
                key={svc.href}
                href={svc.href}
                className={`aos group border-b border-gray-200 p-8 transition-colors hover:bg-gray-50 md:p-9 ${idx < regularServices.length - 1 ? 'md:border-r' : ''}`}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl" style={{ backgroundColor: svc.iconBg, color: svc.iconColor }}>
                  <Icon weight="duotone" size={28} />
                </div>
                <div className={`mb-2 text-xs font-700 uppercase tracking-wider ${svc.tagColor}`}>{svc.tag}</div>
                <h3 className="mb-2.5 text-lg font-700 leading-snug text-navy">{svc.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-600">{svc.desc}</p>
                <ul className="mb-6 space-y-2">
                  {svc.caps.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-700">
                      <Check weight="bold" size={15} className={`mt-0.5 flex-shrink-0 ${svc.tagColor}`} />
                      {cap}
                    </li>
                  ))}
                </ul>
                <span className={`inline-flex items-center gap-1.5 text-sm font-600 ${svc.linkColor} transition-all group-hover:gap-2.5`}>
                  Learn more <ArrowRight size={13} />
                </span>
              </Link>
            )
          })}

          <Link href="/aipods" className="aos group p-8 transition-colors hover:bg-gray-50 md:col-span-2 md:p-10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl" style={{ backgroundColor: '#ECFDF5', color: '#059669' }}>
              <Robot weight="duotone" size={28} />
            </div>
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-700 uppercase tracking-wide text-emerald-600">
              <Sparkle weight="fill" size={12} /> New offering
            </div>
            <div className="mb-2 text-xs font-700 uppercase tracking-wider text-emerald-600">AiPODS</div>
            <h3 className="mb-3 max-w-2xl text-lg font-700 leading-snug text-navy md:text-xl">
              AI-powered delivery squads for the teams building tomorrow.
            </h3>
            <p className="mb-5 max-w-2xl text-sm leading-relaxed text-gray-600">
              Purpose-built offshore pods that combine senior engineers with embedded AI tooling — designed for companies who want to move faster without cutting corners on quality.
            </p>
            <ul className="mb-6 max-w-2xl space-y-2">
              {[
                'Pre-configured AI toolchains: code review, test generation, documentation',
                'Senior-led squads with built-in AI fluency',
                'Outcome-focused delivery, not hours logged',
              ].map((cap, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check weight="bold" size={16} className="mt-0.5 flex-shrink-0 text-emerald-600" />
                  {cap}
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-1.5 text-sm font-600 text-emerald-600 transition-all group-hover:gap-2.5">
              Learn more about AiPODS <ArrowRight size={13} />
            </span>
          </Link>
        </div>

        <div className="aos mt-12 flex flex-col items-center justify-between gap-6 rounded-[20px] border border-gray-200 bg-white p-8 sm:flex-row">
          <div>
            <h3 className="mb-1 text-lg font-700 text-navy">Not sure which model fits your situation?</h3>
            <p className="text-sm text-gray-600">We&apos;ll ask a few questions and help you figure out the right approach — no pressure, no pitch.</p>
          </div>
          <Link href="/book-a-call" className="inline-flex flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-lg bg-blue px-6 py-3 font-600 text-white transition-colors hover:bg-blue-light">
            Book a Call <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
