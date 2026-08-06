'use client'

import { UsersThree } from '@phosphor-icons/react'
import ConsolePage from '@/components/templates/ConsolePage'

export default function StaffAugmentation() {
  return (
    <ConsolePage
      eyebrow="Service · Staff Augmentation"
      icon={<UsersThree weight="bold" size={16} />}
      h1="Embed vetted talent into your team — fast."
      intro="You need engineers now. We find, vet, and hire them for you. They join your payroll and report to your leadership. No middlemen, no third-party contractors — they&apos;re your team members."
      accent="#D97706"
      badges={['Kochi, India', 'Direct hires']}
      navSections={[
        { id: 'how-it-works', label: 'How it works' },
        { id: 'the-process', label: 'The process' },
        { id: 'your-commitment', label: 'Your commitment' },
        { id: 'when-to-use', label: 'When to use' },
      ]}
      related={[
        { label: 'Product Engineering', href: '/product-engineering' },
        { label: 'AiPODS', href: '/aipods' },
        { label: 'For Startups', href: '/for/startups' },
      ]}
    >
      {/* Section: How it works */}
      <section id="how-it-works" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-yellow-600 uppercase tracking-wider">How it works</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Direct hiring with recruitment support.</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          You tell us what you need. We source, screen, and present only candidates who meet your bar. They&apos;re hired directly into your payroll and become part of your permanent team. We handle the recruitment process; you own the relationship.
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <p className="text-gray-900 font-600 mb-2">Key difference from contractors:</p>
          <p className="text-gray-700 text-sm">
            These are permanent employees on your payroll. They&apos;re embedded in your culture, attend your meetings, and grow with your company. They&apos;re not external resources — they&apos;re your team members.
          </p>
        </div>
      </section>

      {/* Section: The process */}
      <section id="the-process" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-yellow-600 uppercase tracking-wider">The process</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">From requirement to first day — typically XX days.</h2>
        </div>
        <div className="space-y-4">
          <div className="border-l-4 border-yellow-500 pl-6 py-3">
            <h3 className="font-700 text-gray-900 mb-2">Step 1: Requirement Clarity (Days 1-3)</h3>
            <p className="text-gray-600 text-sm">You share what you need. We ask the hard questions to understand skills, experience level, team fit, and compensation expectations.</p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-6 py-3">
            <h3 className="font-700 text-gray-900 mb-2">Step 2: Sourcing (Days 4-14)</h3>
            <p className="text-gray-600 text-sm">We source candidates from our network and active market. Initial phone screens happen on our end to save you time.</p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-6 py-3">
            <h3 className="font-700 text-gray-900 mb-2">Step 3: Your Interviews (Days 15-25)</h3>
            <p className="text-gray-600 text-sm">You interview your top choices. We facilitate scheduling, provide feedback, and answer candidate questions.</p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-6 py-3">
            <h3 className="font-700 text-gray-900 mb-2">Step 4: Offer & Onboarding (Days 26-30)</h3>
            <p className="text-gray-600 text-sm">You extend the offer. We handle paperwork, visa support if needed, and onboarding logistics so your hire starts focused.</p>
          </div>
        </div>
      </section>

      {/* Section: Your commitment */}
      <section id="your-commitment" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-yellow-600 uppercase tracking-wider">Your commitment</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">What you own when you hire through Intellispark.</h2>
        </div>
        <div className="space-y-4">
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Straightforward costs</h3>
            <p className="text-sm text-gray-600">
              No markups, no hidden fees. You pay the candidate&apos;s salary plus routine payroll/HR costs. That&apos;s it. No placement fees, no retention bonuses, no surprises.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">Notice periods</h3>
            <p className="text-sm text-gray-600">
              Standard India employment law applies. XX days notice for parting ways. No penalties on your side, straightforward separation if needed.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-700 text-gray-900 mb-3">You own the relationship</h3>
            <p className="text-sm text-gray-600">
              Once hired, they&apos;re your employees. We stay available for HR or compliance questions, but day-to-day management is entirely yours.
            </p>
          </div>
        </div>
      </section>

      {/* Section: When to use */}
      <section id="when-to-use" data-section className="mb-16 aos">
        <div className="mb-6">
          <span className="text-sm font-600 text-yellow-600 uppercase tracking-wider">When to use</span>
          <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3">Staff Augmentation is perfect if...</h2>
        </div>
        <div className="space-y-3">
          {[
            'You need individual engineers or small teams quickly',
            'You want permanent hires, not contractors',
            'You don&apos;t need a full GCC structure yet',
            'You&apos;re testing the India market before building a full operation',
            'You need specific skills for a project or product',
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <span className="text-yellow-700 font-700 flex-shrink-0">✓</span>
              <span className="text-gray-900 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </ConsolePage>
  )
}
