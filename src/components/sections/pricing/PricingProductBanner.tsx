import { Link } from 'wouter'
import { pricingPageCopy } from '@/lib/theme'
import { SiteContainer } from '@/components/layout/SiteContainer'
import { MaterialIcon } from '@/components/ui/MaterialIcon'

export function PricingProductBanner() {
  const { productBanner } = pricingPageCopy

  return (
    <section className="pricing-product-banner reveal">
      <SiteContainer>
        <div className="pricing-product-banner-inner">
          <div className="pricing-product-banner-icon-wrap">
            <MaterialIcon name="desktop_windows" className="pricing-product-banner-icon" aria-hidden />
          </div>
          <div className="pricing-product-banner-copy">
            <h2 className="pricing-product-banner-title font-headline">{productBanner.title}</h2>
            <p className="pricing-product-banner-description">{productBanner.description}</p>
          </div>
          <div className="pricing-product-banner-actions">
            <Link href="/downloads" className="pricing-product-banner-btn pricing-product-banner-btn--primary">
              {productBanner.primaryCta}
            </Link>
            <Link href="/downloads" className="pricing-product-banner-btn pricing-product-banner-btn--outline">
              {productBanner.secondaryCta}
            </Link>
          </div>
        </div>
      </SiteContainer>
    </section>
  )
}
