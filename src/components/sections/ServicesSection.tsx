'use client'

import Link from 'next/link'
import { Star, ArrowsClockwise, UsersThree, CodeBlock, Robot, Sparkle, Check } from '@phosphor-icons/react'

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
    <section className="py-20 md:py-32 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-end mb-16 aos">
          <div>
            <span className="text-sm font-600 text-blue uppercase tracking-wider">What we do</span>
            <h2 className="text-3xl md:text-4xl font-700 text-navy mt-3">Everything you need to build in India.</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            From setting up your first offshore team to running a fully governed Global Capability Centre — we offer the right model for where you are today, with room to grow.
          </p>
        </div>

        <div className="border border-gray-200 rounded-3xl overflow-hidden bg-white grid md:grid-cols-2">
          {/* Featured: GCC Setup — full width */}
          <Link
            href="/gcc-setup"
            className="aos group md:col-span-2 flex flex-col md:flex-row items-center gap-8 md:gap-14 p-8 md:p-10 border-b border-gray-200 bg-gradient-to-r from-white to-blue-pale/40 hover:bg-gray-50 transition-colors"
          >
            <div className="w-full md:w-[38%] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-pale to-teal-light" />
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 bg-blue-pale text-blue text-xs font-700 uppercase tracking-wide px-2.5 py-1 rounded-full mb-3">
                <Star weight="fill" size={12} /> Most popular
              </div>
              <div className="text-xs font-700 text-blue uppercase tracking-wider mb-2">GCC Setup</div>
              <h3 className="text-xl md:text-2xl font-700 text-navy mb-3 leading-snug">
                Global Capability Centre — done right, from day one.
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                We handle the end-to-end complexity of establishing your GCC in Kochi — legal entity formation, talent acquisition, infrastructure, governance — so you can focus on your business, not the setup.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Entity formation, compliance & statutory registrations',
                  'End-to-end hiring: sourcing, screening, onboarding',
                  'Office setup, IT infrastructure & security frameworks',
                  'Ongoing HR, payroll & governance support post-launch',
                ].map((cap, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Check weight="bold" size={16} className="flex-shrink-0 mt-0.5 text-blue" />
                    {cap}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1.5 text-sm font-600 text-blue group-hover:gap-2.5 transition-all">
                Learn more →
              </span>
            </div>
          </Link>

          {/* Regular cards */}
          {regularServices.map((svc, idx) => {
            const Icon = svc.icon
            return (
              <Link
                key={svc.href}
                href={svc.href}
                className={`aos group p-8 md:p-9 hover:bg-gray-50 transition-colors border-gray-200 ${
                  idx < regularServices.length - 1 ? 'md:border-r' : ''
                } border-b`}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: svc.iconBg, color: svc.iconColor }}
                >
                  <Icon weight="duotone" size={28} />
                </div>
                <div className={`text-xs font-700 uppercase tracking-wider mb-2 ${svc.tagColor}`}>{svc.tag}</div>
                <h3 className="text-lg font-700 text-navy mb-2.5 leading-snug">{svc.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{svc.desc}</p>
                <ul className="space-y-2 mb-6">
                  {svc.caps.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-700">
                      <Check weight="bold" size={15} className={`flex-shrink-0 mt-0.5 ${svc.tagColor}`} />
                      {cap}
                    </li>
                  ))}
                </ul>
                <span className={`inline-flex items-center gap-1.5 text-sm font-600 ${svc.linkColor} group-hover:gap-2.5 transition-all`}>
                  Learn more →
                </span>
              </Link>
            )
          })}

          {/* Featured: AiPODS — full width bottom */}
          <Link
            href="/aipods"
            className="aos group md:col-span-2 p-8 md:p-10 hover:bg-gray-50 transition-colors"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{ backgroundColor: '#ECFDF5', color: '#059669' }}
            >
              <Robot weight="duotone" size={28} />
            </div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 text-xs font-700 uppercase tracking-wide px-2.5 py-1 rounded-full mb-3">
              <Sparkle weight="fill" size={12} /> New offering
            </div>
            <div className="text-xs font-700 text-emerald-600 uppercase tracking-wider mb-2">AiPODS</div>
            <h3 className="text-lg md:text-xl font-700 text-navy mb-3 leading-snug max-w-2xl">
              AI-powered delivery squads for the teams building tomorrow.
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-2xl">
              Purpose-built offshore pods that combine senior engineers with embedded AI tooling — designed for companies who want to move faster without cutting corners on quality.
            </p>
            <ul className="space-y-2 mb-6 max-w-2xl">
              {[
                'Pre-configured AI toolchains: code review, test generation, documentation',
                'Senior-led squads with built-in AI fluency',
                'Outcome-focused delivery, not hours logged',
              ].map((cap, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check weight="bold" size={16} className="flex-shrink-0 mt-0.5 text-emerald-600" />
                  {cap}
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-1.5 text-sm font-600 text-emerald-600 group-hover:gap-2.5 transition-all">
              Learn more about AiPODS →
            </span>
          </Link>
        </div>

        {/* CTA strip */}
        <div className="aos mt-12 bg-white border border-gray-200 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-700 text-navy mb-1">Not sure which model fits your situation?</h3>
            <p className="text-sm text-gray-600">We&apos;ll ask a few questions and help you figure out the right approach — no pressure, no pitch.</p>
          </div>
          <Link
            href="/book-a-call"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-blue text-white font-600 rounded-lg hover:bg-blue-light transition-colors whitespace-nowrap"
          >
            Book a Call →
          </Link>
        </div>
      </div>
    </section>
  )
}
