import { ReactNode } from 'react'

export interface NavSection {
  id: string
  label: string
}

export interface RelatedLink {
  label: string
  href: string
}

export interface ConsolePageProps {
  eyebrow: string
  icon: ReactNode
  h1: string
  intro: string
  accent: string
  badges: string[]
  navSections: NavSection[]
  related: RelatedLink[]
  children: ReactNode
}

export interface ServicePageContent {
  slug: string
  title: string
  meta: string
  eyebrow: string
  icon: string
  iconWeight: 'bold' | 'fill' | 'duotone'
  h1: string
  intro: string
  accent: string
  badges: string[]
  navSections: NavSection[]
  related: RelatedLink[]
  sections: SectionContent[]
}

export interface SectionContent {
  id: string
  eyebrow: string
  title: string
  body?: string
  items?: ContentItem[]
}

export interface ContentItem {
  icon?: string
  label: string
  description?: string
}
