'use client'

import { Building } from '@phosphor-icons/react'
import ConsolePage from '@/components/templates/ConsolePage'

export default function Enterprise() {
  return (
    <ConsolePage
      eyebrow="Audience · Enterprise"
      icon={<Building weight="bold" size={16} />}
      h1="Scaling, optimising, or restructuring your India operations — with senior advisory and hands-on delivery."
      intro="You already have India operations. You want to scale them smarter, fix what&apos;s broken, or restructure for efficiency. We help Fortune 500 teams do exactly that."
      accent="#2D5BFF"
      badges={['Enterprise-grade', 'Operational advisory']}
      navSections={[
        { id: 'scaling', label: 'Scaling operations' },
        { id: 'fixing', label: 'Fixing what&apos;s broken' },
        { id: 'working-with-teams', label: 'Working with your team' },
        { id: 'governance', label: 'Governance' },
      ]}
      related={[
        { label: 'GCC Setup', href: '/gcc-setup' },
        { label: 'Service Delivery Centres', href: '/service-delivery' },
        { label: 'For Mid-Market', href: '/for/mid-market' },
      ]}
    >
      {/* Section: Scaling operations */}
      <section id="scaling" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-blue-600 uppercase tracking-wider">Scaling operations</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Your India operations need to grow. Do it without the growing pains.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          You have a XX-person centre. Now you need XX0. How do you maintain quality, culture, and cost efficiency? We help you scale without losing control.
        </p>
        <div className="space-y-3">
          {[
            'Leadership structure that works at scale',
            'Recruiting and onboarding XX+ people without burning out',
            'Keeping quality and culture as you grow',
            'Managing cost and headcount efficiency',
            'Tier-based management (individual contributors → team leads → directors)',
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <span className="text-blue-600 font-700 flex-shrink-0">→</span>
              <span className="text-gray-900 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Fixing what's broken */}
      <section id="fixing" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-blue-600 uppercase tracking-wider">Fixing what&apos;s broken</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Your centre isn&apos;t delivering. Let&apos;s fix it.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          High attrition. Bad deliverables. Political dysfunction. Communication gaps with HQ. We&apos;ve seen it all. We diagnose the root cause and fix it — not with consultancy fluff, but with hands-on execution.
        </p>
        <div className="space-y-4">
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Week 1: Diagnosis</h3>
            <p className="text-sm text-gray-600">
              We spend time with your team, your leadership, your processes. We identify what&apos;s actually broken.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Week 2–4: Remediation plan</h3>
            <p className="text-sm text-gray-600">
              We propose changes — hiring, process, structure, communication — and timeline for implementation.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Month 2+: Execution</h3>
            <p className="text-sm text-gray-600">
              We stay embedded. You implement. We coach, support, and keep you honest on timelines and results.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Working with your team */}
      <section id="working-with-teams" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-blue-600 uppercase tracking-wider">Working with your team</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">We work alongside your existing leadership. Not instead of them.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          You have people in place. They may be the problem, or they may be part of the solution. Either way, we work with (or around) them.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-blue-600 font-700 flex-shrink-0">✓</span>
              <span className="text-gray-700 text-sm">We report to your VP of Engineering or Head of Operations, not independently.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-700 flex-shrink-0">✓</span>
              <span className="text-gray-700 text-sm">You remain the decision-maker. We advise and execute. You approve.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-700 flex-shrink-0">✓</span>
              <span className="text-gray-700 text-sm">If your existing team is strong, we make them stronger. If they&apos;re weak, we help you fix that too.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section: Governance */}
      <section id="governance" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-blue-600 uppercase tracking-wider">Governance</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Transparency. Accountability. Results.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          You want to know exactly where you stand. We give you that.
        </p>
        <div className="space-y-4">
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Weekly standups</h3>
            <p className="text-sm text-gray-600">
              Your leadership team plus our team. What&apos;s moving? What&apos;s stuck? What&apos;s changed this week?
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Monthly metrics review</h3>
            <p className="text-sm text-gray-600">
              Headcount, attrition, quality metrics, delivery timelines, cost per hire, etc. No surprises.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Quarterly business review</h3>
            <p className="text-sm text-gray-600">
              Are we hitting the goals we set? What&apos;s changed in the business? What needs to adjust?
            </p>
          </div>
        </div>
      </section>
    </ConsolePage>
  )
}
