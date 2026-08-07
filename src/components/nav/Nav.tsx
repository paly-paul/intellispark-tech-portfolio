'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Lightning, CaretDown, Buildings, ArrowsClockwise, UsersThree, Code, Robot, MapPin } from '@phosphor-icons/react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const [prevPathname, setPrevPathname] = useState(pathname)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdowns on route change (adjusting state during render instead
  // of in an effect, per https://react.dev/learn/you-might-not-need-an-effect)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setServicesOpen(false)
    setMobileOpen(false)
  }

  // Close dropdowns when clicking overlay
  const handleOverlayClick = () => {
    setServicesOpen(false)
    setMobileOpen(false)
  }

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false)
        setMobileOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const services = [
    {
      href: '/gcc-setup',
      title: 'GCC Setup',
      desc: 'End-to-end Global Capability Centre establishment',
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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 h-[72px] z-[1000] transition-all duration-250 ${
          scrolled
            ? 'border-b border-gray-200 shadow-lg bg-white'
            : 'border-b border-transparent bg-white'
        }`}
      >
        <div className="h-full flex items-center justify-between px-6 md:px-8 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Intellispark home">
            <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-teal to-blue rounded">
              <Lightning weight="bold" size={18} className="text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">Intellispark</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/gcc-setup" className="text-sm font-500 text-gray-900 hover:text-blue transition-colors">
              GCC Solutions
            </a>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-2 text-sm font-500 text-gray-900 hover:text-blue transition-colors"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Services
                <CaretDown size={14} weight="bold" />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-[52px] left-1/2 -translate-x-1/2 w-[600px] bg-white border border-gray-200 rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-x-8 gap-y-4 animate-in fade-in slide-in-from-top-2"
                  ref={servicesDropdownRef}
                >
                  {services.map((service) => {
                    const Icon = service.icon
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: service.bgColor, color: service.textColor }}
                        >
                          <Icon weight="fill" size={20} />
                        </div>
                        <div className="text-left flex-1">
                          <div className="text-[14.5px] font-600 text-gray-900 group-hover:text-blue mb-1">{service.title}</div>
                          <div className="text-[13px] text-gray-500 leading-snug">{service.desc}</div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>

            <a href="/kochi-advantage" className="text-sm font-500 text-gray-900 hover:text-blue transition-colors">
              Kochi Advantage
            </a>
            <a href="/case-studies" className="text-sm font-500 text-gray-900 hover:text-blue transition-colors">
              Case Studies
            </a>
            <a href="/about" className="text-sm font-500 text-gray-900 hover:text-blue transition-colors">
              About
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/book-a-call"
              className="px-6 py-2 bg-blue text-white text-sm font-600 rounded-lg hover:bg-blue-light transition-colors"
            >
              Book a Call →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              href="/book-a-call"
              className="px-4 py-2 bg-blue text-white text-xs font-600 rounded-lg hover:bg-blue-light transition-colors"
            >
              Book a Call
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-6 h-6 flex flex-col justify-center gap-1.5 hover:opacity-70"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span className={`w-6 h-0.5 bg-gray-900 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-gray-900 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-gray-900 transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-[72px] bg-white z-[999] md:hidden overflow-y-auto"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <div className="p-6 space-y-6">
            <a href="/gcc-setup" className="block text-sm font-500 text-gray-900 hover:text-blue">
              GCC Solutions
            </a>

            {/* Mobile Services */}
            <div className="space-y-3">
              <div className="text-xs font-600 text-gray-600 uppercase tracking-wider">Services</div>
              <div className="space-y-2 pl-0">
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center gap-3 py-2 text-sm text-gray-900 hover:text-blue"
                    >
                      <div
                        className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: service.bgColor, color: service.textColor }}
                      >
                        <Icon weight="fill" size={14} />
                      </div>
                      {service.title}
                    </Link>
                  )
                })}
              </div>
            </div>

            <a href="/kochi-advantage" className="block text-sm font-500 text-gray-900 hover:text-blue">
              Kochi Advantage
            </a>
            <a href="/case-studies" className="block text-sm font-500 text-gray-900 hover:text-blue">
              Case Studies
            </a>
            <a href="/about" className="block text-sm font-500 text-gray-900 hover:text-blue">
              About
            </a>
          </div>
        </div>
      )}

      {/* Overlay */}
      {(servicesOpen || mobileOpen) && (
        <div
          className="fixed inset-0 z-[998] bg-black/20"
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}
    </>
  )
}
