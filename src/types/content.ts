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
