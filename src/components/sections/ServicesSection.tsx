'use client'

import Link from 'next/link'
import { Buildings, ArrowsClockwise, UsersThree, Code, Robot, MapPin } from '@phosphor-icons/react'

const services = [
  {
    href: '/gcc-setup',
    title: 'GCC Setup',
    desc: 'End-to-end Global Capability Centre establishment in Kochi, India',
    icon: Buildings,
    bgColor: '#EEF2FF',
    textColor: '#2D5BFF',
  },
  {
    href: '/bot-copo',
    title: 'BOT / COPO',
    desc: 'Build-Operate-Transfer with flexible exit options',
    icon: ArrowsClockwise,
    bgColor: '#E6FBF9',
    textColor: '#00B8A9',
  },
  {
    href: '/staff-augmentation',
    title: 'Staff Augmentation',
    desc: 'Vetted talent, embedded in your team',
    icon: UsersThree,
    bgColor: '#FFFBEB',
    textColor: '#D97706',
  },
  {
    href: '/product-engineering',
    title: 'Product Engineering',
    desc: 'Custom software built for scale',
    icon: Code,
    bgColor: '#F3EEFF',
    textColor: '#7C3AED',
  },
  {
    href: '/aipods',
    title: 'AiPODS',
    desc: 'AI-powered offshore delivery squads',
    icon: Robot,
    bgColor: '#ECFDF5',
    textColor: '#059669',
  },
  {
    href: '/service-delivery',
    title: 'Service Delivery Centres',
    desc: 'Dedicated centres for ongoing operations',
    icon: MapPin,
    bgColor: '#EEF2FF',
    textColor: '#2D5BFF',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 aos">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-600 text-blue uppercase tracking-wider">What We Do</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-700 text-navy">Services across every stage of your India journey.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Link
                key={service.href}
                href={service.href}
                className="aos aos-delay-1 group p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all bg-white"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: service.bgColor, color: service.textColor }}
                >
                  <Icon weight="fill" size={24} />
                </div>
                <h3 className="text-lg font-600 text-navy group-hover:text-blue transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
