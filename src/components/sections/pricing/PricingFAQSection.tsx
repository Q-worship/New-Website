import { Link } from 'wouter'
import { pricingFaqTeaserItems, pricingPageCopy } from '@/lib/theme'
import { SiteContainer } from '@/components/layout/SiteContainer'
import { FAQAccordionList } from '@/components/sections/FAQAccordionList'

export function PricingFAQSection() {
  return (
    <section className="pricing-faq-section section-gap reveal">
      <SiteContainer>
        <div className="pricing-faq-grid">
          <div className="pricing-faq-copy">
            <h2 className="pricing-faq-heading font-headline">{pricingPageCopy.faqHeading}</h2>
            <p className="pricing-faq-body">{pricingPageCopy.faqBody}</p>
            <Link href="/faqs" className="pricing-faq-cta">
              {pricingPageCopy.faqCta}
            </Link>
          </div>

          <FAQAccordionList
            categoryLabel=""
            items={pricingFaqTeaserItems}
            hideCategoryHeading
            compact
          />
        </div>
      </SiteContainer>
    </section>
  )
}
