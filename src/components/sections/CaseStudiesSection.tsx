'use client'

import Link from 'next/link'
import { Users, ChartPolar, Timer, Bank, Cloud, Buildings } from '@phosphor-icons/react'
import ArrowRight from '@/components/icons/ArrowRight'

const outcomes = [
  { icon: Users, val: '50', unit: '+', label: 'Engineers placed in 18 months' },
  { icon: ChartPolar, val: '90', unit: '%', label: 'Year-1 retention rate' },
  { icon: Timer, val: '3', unit: 'wks', label: 'From brief to first hire' },
]

const cases = [
  {
    href: '/case-studies/mid-market-fintech-gcc',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    imgAlt: 'Fintech office',
    icon: Bank,
    industry: 'Fintech',
    company: 'Mid-market · 200–500 employees · Australia',
    title: 'Setting up a first GCC in under 90 days — without a dedicated India team.',
    desc: 'A growing Australian fintech needed to scale their engineering capacity quickly but had no experience operating in India. They came to us with a tight timeline and significant concerns about compliance and quality control.',
    metrics: [
      { val: '14', label: 'Days to first hire' },
      { val: '25+', label: 'Engineers onboarded in 6 months' },
      { val: '30%', label: 'Cost saving vs. onshore' },
    ],
  },
  {
    href: '/case-studies/saas-startup-staff-aug',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
    imgAlt: 'Engineering team collaborating',
    icon: Cloud,
    industry: 'SaaS',
    company: 'Startup · 50–100 employees · United Kingdom',
    title: 'Doubling engineering velocity without doubling the UK payroll.',
    desc: 'A London-based SaaS startup was burning through their Series A runway on expensive onshore hires. They needed senior engineers fast, with no tolerance for the ramp-up time typical of offshore arrangements.',
    metrics: [
      { val: '3', label: 'Weeks to first deployment' },
      { val: '25%', label: 'Reduction in cost per engineer' },
      { val: '12+', label: 'Features shipped in quarter 1' },
    ],
  },
  {
    href: '/case-studies/enterprise-bot-transition',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    imgAlt: 'Enterprise office',
    icon: Buildings,
    industry: 'Enterprise Tech',
    company: 'Enterprise · 1,000+ employees · United States',
    title: 'Transitioning from a managed vendor to full GCC ownership — without disruption.',
    desc: 'A US enterprise had an underperforming offshore arrangement and wanted to take direct ownership of their India team. The challenge: transition cleanly without losing institutional knowledge or productivity.',
    metrics: [
      { val: '3', label: 'Month BOT transition period' },
      { val: '90%', label: 'Staff retained through transition' },
      { val: '20%', label: 'Productivity improvement post-transfer' },
    ],
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="proof aos" aria-labelledby="proof-title">
      <div className="proof__inner">
        <div className="proof__header">
          <div>
            <span className="proof__eyebrow">Client stories</span>
            <h2 id="proof-title" className="proof__title font-bold font-900">
              Real teams.<br />Real outcomes.
            </h2>
          </div>
          <p className="proof__sub">
            We&apos;re proud of what our clients have built. Here are a few of their stories — told in their own words and numbers.
          </p>
        </div>

        <blockquote
          className="proof__quote aos"
          aria-label="Client testimonial"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80')",
          }}
        >
          <div className="quote__body">
            <p className="quote__text">
              &ldquo;We&apos;d spoken to three other vendors before Intellispark. The difference was that they actually listened to what we were trying to build — not just how many seats they could fill. Eighteen months later, our Kochi team is the most stable and productive we have globally.&rdquo;
            </p>
            <div className="quote__attribution">
              <div className="quote__avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
                  alt="VP of Engineering"
                />
              </div>
              <div>
                <div className="quote__name">VP of Engineering</div>
                <div className="quote__role">Series B SaaS company · United Kingdom</div>
              </div>
            </div>
          </div>

          <div className="quote__outcomes" aria-label="Key outcomes">
            {outcomes.map((o, idx) => {
              const Icon = o.icon
              return (
                <div key={idx} className="outcome-pill">
                  <Icon weight="duotone" size={28} className="outcome-pill__icon" />
                  <div>
                    <div className="outcome-pill__num">
                      {o.val}
                      {o.unit ? <span className="outcome-pill__unit">{o.unit}</span> : null}
                    </div>
                    <div className="outcome-pill__label">{o.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </blockquote>

        <div className="proof__cases">
          {cases.map((c, idx) => {
            const Icon = c.icon
            return (
              <Link
                key={c.href}
                href={c.href}
                className={`aos case-card case-card--${idx + 1} group`}
                aria-label={`Case study: ${c.title}`}
              >
                <div
                  className="case-card__img"
                  style={{ backgroundImage: `url('${c.img}')` }}
                  role="img"
                  aria-label={c.imgAlt}
                />
                <div className="case-card__body">
                  <div className="case-card__industry">
                    <Icon weight="fill" size={14} /> {c.industry}
                  </div>
                  <div className="case-card__company">{c.company}</div>
                  <h3 className="case-card__title">{c.title}</h3>
                  <p className="case-card__desc">{c.desc}</p>
                  <div className="case-card__metrics">
                    {c.metrics.map((m, i) => (
                      <div key={i} className="metric">
                        <div className="metric__num">{m.val}</div>
                        <div className="metric__label">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <span className="case-card__link">
                    Read the story <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="proof__footer aos">
          <p className="proof__footer-text">
            <strong>Want to see if we&apos;ve worked with companies like yours?</strong> We&apos;re happy to share relevant experience on a call.
          </p>
          <div className="proof__footer-actions">
            <Link href="/case-studies" className="btn-ghost">
              View all case studies <ArrowRight size={13} />
            </Link>
            <Link href="/book-a-call" className="btn-primary">
              Book a Call <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
