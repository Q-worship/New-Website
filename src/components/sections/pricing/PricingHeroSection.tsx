import { Link } from 'wouter'
import { pricingPageCopy } from '@/lib/theme'
import { SiteContainer } from '@/components/layout/SiteContainer'
import { MaterialIcon } from '@/components/ui/MaterialIcon'

export function PricingHeroSection() {
  const { hero } = pricingPageCopy

  return (
    <section className="pricing-hero-section reveal">
      <SiteContainer className="pricing-hero-inner">
        <h1 className="pricing-hero-heading font-headline">
          {hero.heading.before}{' '}
          <span className="pricing-hero-accent">{hero.heading.accent}</span>
        </h1>
        <p className="pricing-hero-body">{hero.body}</p>
        <div className="pricing-hero-platforms">
          {hero.platforms.map((platform) => (
            <Link key={platform.id} href="/downloads" className="pricing-hero-platform-btn">
              <span>{platform.label}</span>
              {platform.icon && (
                <MaterialIcon name={platform.icon} className="pricing-hero-platform-icon" aria-hidden />
              )}
            </Link>
          ))}
        </div>
        <p className="pricing-hero-footnote">{hero.footnote}</p>
      </SiteContainer>
    </section>
  )
}
