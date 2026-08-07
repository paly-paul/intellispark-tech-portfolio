'use client'

import { UsersThree } from '@phosphor-icons/react'
import ConsolePage from '@/components/templates/ConsolePage'

const roles = [
  'Software Engineers', 'Backend / Frontend', 'Full Stack', 'Data Engineers', 'ML Engineers',
  'DevOps / SRE', 'Mobile (iOS & Android)', 'Product Managers', 'QA Engineers',
  'Technical Architects', 'Business Analysts', 'Operations Leads', 'Finance & Accounting', 'Technical Writers',
]

export default function StaffAugmentation() {
  return (
    <ConsolePage
      eyebrow="Service · Staff Augmentation"
      icon={<UsersThree weight="bold" size={16} />}
      h1="The right people, in your team, fast."
      intro="Vetted professionals who work as a genuine extension of your team — not contractors who disappear after a sprint. We handle sourcing and screening so you only see candidates worth your time."
      accent="#D97706"
      badges={['Kochi, India', '2–4 week placement']}
      navSections={[
        { id: 'the-difference', label: "What's different" },
        { id: 'roles', label: 'Roles we place' },
        { id: 'how-it-works', label: 'How it works' },
        { id: 'post-placement', label: 'Post-placement' },
      ]}
      related={[
        { label: 'GCC Setup', href: '/gcc-setup' },
        { label: 'AiPODS', href: '/aipods' },
        { label: 'For Startups', href: '/for/startups' },
      ]}
    >
      {/* Section: What's different */}
      <section id="the-difference" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-amber-600 uppercase tracking-wider">What&apos;s different</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Most augmentation fails for one of three reasons. We fix all three.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Wrong candidate fit. No cultural alignment. A vendor who disappears after placement. These are the three failure modes we&apos;ve seen repeat across the industry — and they&apos;re all avoidable with the right process.
        </p>
        <div className="space-y-3">
          {[
            { label: 'On fit:', text: 'multi-stage screening — technical, communication, and a structured culture evaluation before any shortlist' },
            { label: 'On alignment:', text: 'we spend time with your team to understand how you work before we brief candidates' },
            { label: 'On support:', text: 'we stay involved post-placement — check-ins at 30, 60 and 90 days, and whenever you need us' },
            { label: 'On control:', text: 'you make the final call on every hire — we present shortlists, we never place without your approval' },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 p-4 bg-amber-50 rounded-lg">
              <span className="text-amber-600 font-700 flex-shrink-0">✓</span>
              <span className="text-gray-900 text-sm"><strong>{item.label}</strong> {item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Roles we place */}
      <section id="roles" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-amber-600 uppercase tracking-wider">Roles we place</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Across engineering, product, data and operations.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Most placements happen within 2–4 weeks of brief sign-off. Senior and specialist roles take longer — we&apos;d rather find the right person than meet an arbitrary deadline.
        </p>
        <div className="flex flex-wrap gap-3">
          {roles.map((role, idx) => (
            <span key={idx} className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700 font-500">
              {role}
            </span>
          ))}
        </div>
      </section>

      {/* Section: How it works */}
      <section id="how-it-works" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-amber-600 uppercase tracking-wider">How it works</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Simple process. No unnecessary steps.</h2>
        </div>
        <div className="space-y-6">
          <div className="border-l-4 border-amber-600 pl-6 py-2">
            <h3 className="font-600 text-gray-900 mb-2">Brief — Day 1</h3>
            <p className="text-gray-600 text-sm">
              Role requirements, team context, working style, must-haves and nice-to-haves. We go deep here — because clarity at this stage is what makes the shortlist accurate.
            </p>
          </div>
          <div className="border-l-4 border-amber-600 pl-6 py-2">
            <h3 className="font-600 text-gray-900 mb-2">Screen — Week 1–2</h3>
            <p className="text-gray-600 text-sm">
              Technical assessment, communication evaluation, structured culture interview. We typically present 2–3 candidates who have passed all three stages.
            </p>
          </div>
          <div className="border-l-4 border-amber-600 pl-6 py-2">
            <h3 className="font-600 text-gray-900 mb-2">Place — Week 2–4</h3>
            <p className="text-gray-600 text-sm">
              You interview, you decide. Offer, onboarding support, and a structured first-week integration plan included — not optional extras.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Post-placement */}
      <section id="post-placement" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-amber-600 uppercase tracking-wider">Post-placement</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">We don&apos;t disappear after the contract is signed.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Our reputation depends on your team&apos;s performance — not the handshake. We stay involved at 30, 60 and 90 days post-placement, and are available whenever you need us. If something isn&apos;t working, we&apos;d rather fix it than lose you as a client.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-700 text-amber-600 mb-2">XX%</div>
            <p className="text-sm text-gray-600">12-month retention rate across all placements</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-700 text-amber-600 mb-2">2–4w</div>
            <p className="text-sm text-gray-600">Typical time from brief to placed candidate</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-700 text-amber-600 mb-2">XX</div>
            <p className="text-sm text-gray-600">Active placements across client teams</p>
          </div>
        </div>
      </section>
    </ConsolePage>
  )
}
