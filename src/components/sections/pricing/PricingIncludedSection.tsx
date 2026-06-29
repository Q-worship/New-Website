import { pricingIncludedFeatures, pricingPageCopy } from '@/lib/theme'
import { SiteContainer } from '@/components/layout/SiteContainer'
import { MaterialIcon } from '@/components/ui/MaterialIcon'

export function PricingIncludedSection() {
  return (
    <section className="pricing-included-section section-gap reveal">
      <SiteContainer>
        <h2 className="pricing-included-heading font-headline">{pricingPageCopy.includedHeading}</h2>
        <div className="pricing-included-grid">
          {pricingIncludedFeatures.map((feature) => (
            <article key={feature.title} className="pricing-included-card">
              <div className="pricing-included-card-header">
                <div className="pricing-included-icon-wrap">
                  <MaterialIcon name={feature.icon} className="pricing-included-icon" aria-hidden />
                </div>
                <h3 className="pricing-included-card-title">{feature.title}</h3>
              </div>
              <p className="pricing-included-card-description">{feature.description}</p>
            </article>
          ))}
        </div>
      </SiteContainer>
    </section>
  )
}
