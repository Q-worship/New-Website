import { FeaturesHeroSection } from '@/components/sections/FeaturesHeroSection'
import { FeaturesSubNav } from '@/components/sections/FeaturesSubNav'
import { HandsFreeFeatureSection } from '@/components/sections/HandsFreeFeatureSection'
import { OnScreenBibleFeatureSection } from '@/components/sections/OnScreenBibleFeatureSection'
import { SongbookFeatureSection } from '@/components/sections/SongbookFeatureSection'
import { ServiceSlidesFeatureSection } from '@/components/sections/ServiceSlidesFeatureSection'
import { MediaFeatureSection } from '@/components/sections/MediaFeatureSection'
import { BuiltByPastorsSection } from '@/components/sections/BuiltByPastorsSection'
import { MoreFeaturesSection } from '@/components/sections/MoreFeaturesSection'
import { AssetLibrarySection } from '@/components/sections/AssetLibrarySection'
import { CompatibleSystemsSection } from '@/components/sections/CompatibleSystemsSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'
import { FAQSection } from '@/components/sections/FAQSection'
import { SiteContainer } from '@/components/layout/SiteContainer'

export function Features() {
  return (
    <>
      <FeaturesHeroSection id="overview" />
      <FeaturesSubNav />
      <HandsFreeFeatureSection />
      <OnScreenBibleFeatureSection />
      <SongbookFeatureSection />
      <ServiceSlidesFeatureSection />
      <MediaFeatureSection />
      <BuiltByPastorsSection />
      <MoreFeaturesSection showViewAllLink={false} />
      <section className="section-gap reveal">
        <AssetLibrarySection />
      </section>
      <CompatibleSystemsSection />
      <section className="section-gap reveal">
        <SiteContainer>
          <PricingSection />
        </SiteContainer>
      </section>
      <FinalCTASection />
      <FAQSection />
    </>
  )
}
