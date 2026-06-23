import { AssetLibrarySection } from '@/components/sections/AssetLibrarySection'
import { PricingSection } from '@/components/sections/PricingSection'
import { SiteContainer } from '@/components/layout/SiteContainer'

export function Pricing() {
  return (
    <section className="section-gap bg-surface-container-lowest">
      <AssetLibrarySection />
      <SiteContainer className="reveal">
        <PricingSection />
      </SiteContainer>
    </section>
  )
}
