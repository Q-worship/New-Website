export interface NavLink {
  label: string
  href: string
}

export interface NavDropdownItem {
  label: string
  href: string
}

export interface TabItem {
  id: string
  label: string
  title: string
  description: string
  image: string
}

export interface BuildTabItem {
  id: string
  label: string
  title: { line1: string; line2: string }
  description: string
  features: string[]
  image: string
}

export interface FeatureCard {
  title: string
  description: string
  image?: string
  linkText?: string
  imageFirst?: boolean
}

export interface TeamCard {
  title: string
  description?: string
  image: string
  icon?: string
  showButton?: boolean
  buttonText?: string
}

export interface PricingPlan {
  name: string
  monthlyPrice: string
  yearlyPrice: string
  badge: string
  badgeVariant?: 'primary' | 'muted'
  highlighted?: boolean
}

export interface MoreFeature {
  title: string
  description: string
}

export interface CompatibleSystem {
  name: string
  icon: 'obs' | 'propresenter' | 'vmix' | 'easyworship' | 'openlp'
}

export interface HandsFreeFeature {
  title: string
  description: string
  active?: boolean
}

export type BillingPeriod = 'monthly' | 'yearly'

export interface FeaturesSubNavItem {
  id: string
  label: string
  href: string
}

export interface GuideCategoryItem {
  id: string
  label: string
}

export interface GuideCard {
  id: string
  categoryId: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface FaqCategoryItem {
  id: string
  label: string
}

export interface FaqItem {
  id: string
  categoryId: string
  question: string
  answer: string
}

export interface DownloadPlatform {
  id: string
  label: string
  icon?: string
}

export interface DownloadResourceLink {
  id: string
  label: string
  icon: string
}

export interface DownloadsPageCopy {
  banner: {
    title: string
    image: string
    imageAlt: string
  }
  product: {
    title: string
    subtitle: string
    version: string
    highlights: string
    date: string
    image: string
    imageAlt: string
  }
  platforms: DownloadPlatform[]
  resourceLinks: DownloadResourceLink[]
  onlineCta: {
    heading: { before: string; accent: string }
    body: string
    primaryCta: string
    secondaryCta: string
    image: string
    imageAlt: string
  }
}

export interface FeatureSpotlightCard {
  title: string
  description: string
}

export interface ChecklistSpotlightContent {
  id: string
  title: { before: string; accent: string; after?: string }
  body: string
  checklist: string[]
  cards: FeatureSpotlightCard[]
  image: string
  imageAlt: string
  showListeningOverlay?: boolean
}

export interface AccordionSpotlightItem {
  id: string
  title: string
  description: string
}

export interface AccordionSpotlightContent {
  id: string
  header: { line1: string; line2Before: string; accent: string }
  subtitle: string
  items: AccordionSpotlightItem[]
  image: string
  imageAlt: string
}
