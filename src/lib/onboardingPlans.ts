import { getPricingProduct } from './theme'
import type { PricingPlan } from '@/types/content'

export type PlanId = 'free' | 'essentials' | 'pro' | 'enterprise'
export type BillingPeriod = 'monthly' | 'yearly'

export interface PlanDefinition {
  id: PlanId
  name: string
  monthlyPrice: string
  yearlyPrice: string
  description: string
  includesLabel?: string
  features: string[]
  popular?: boolean
  popularLabel?: string
  ctaLabel: string
}

const PLAN_ID_BY_NAME: Record<string, PlanId> = {
  Free: 'free',
  Essentials: 'essentials',
  Pro: 'pro',
  Enterprise: 'enterprise',
}

function displayPlanName(name: string): string {
  if (name === 'Free') return 'Free'
  return name.toUpperCase()
}

function mapCloudPlan(plan: PricingPlan): PlanDefinition {
  const id = PLAN_ID_BY_NAME[plan.name] ?? 'free'

  return {
    id,
    name: displayPlanName(plan.name),
    monthlyPrice: plan.monthlyPrice,
    yearlyPrice: plan.yearlyPrice,
    description: plan.description ?? '',
    includesLabel: plan.includesLabel,
    features: plan.features ?? [],
    popular: plan.highlighted,
    popularLabel: plan.popularLabel,
    ctaLabel: plan.ctaLabel ?? 'Select Plan',
  }
}

export const onboardingPlans: PlanDefinition[] = getPricingProduct('cloud').plans.map(
  mapCloudPlan,
)

export function formatPlanPrice(plan: PlanDefinition, billing: BillingPeriod): string {
  const price = billing === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice
  return `${price}/mo`
}
