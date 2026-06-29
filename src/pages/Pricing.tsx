import { useState } from 'react'
import { PricingCompareSection } from '@/components/sections/pricing/PricingCompareSection'
import { PricingFAQSection } from '@/components/sections/pricing/PricingFAQSection'
import { PricingHeroSection } from '@/components/sections/pricing/PricingHeroSection'
import { PricingIncludedSection } from '@/components/sections/pricing/PricingIncludedSection'
import { PricingPlanCardsSection } from '@/components/sections/pricing/PricingPlanCardsSection'
import { PricingPlansHeader } from '@/components/sections/pricing/PricingPlansHeader'
import { PricingProductBanner } from '@/components/sections/pricing/PricingProductBanner'
import { PricingProductNav } from '@/components/sections/pricing/PricingProductNav'
import { FinalCTASection } from '@/components/sections/FinalCTASection'
import type { BillingPeriod } from '@/types/content'

export function Pricing() {
  const [billing, setBilling] = useState<BillingPeriod>('monthly')

  return (
    <>
      <div className="pricing-top-gradient">
        <PricingHeroSection />
      </div>
      <div className="pricing-product-block">
        <PricingProductNav />
        <PricingProductBanner />
      </div>
      <PricingPlansHeader billing={billing} onBillingChange={setBilling} />
      <PricingPlanCardsSection billing={billing} />
      <PricingIncludedSection />
      <PricingCompareSection />
      <PricingFAQSection />
      <FinalCTASection />
    </>
  )
}
