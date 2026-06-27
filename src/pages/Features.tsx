import { FeaturesHeroSection } from '@/components/sections/FeaturesHeroSection'

import { FeaturesSubNav } from '@/components/sections/FeaturesSubNav'

import { HandsFreeFeatureSection } from '@/components/sections/HandsFreeFeatureSection'

import { PrePastorsHandsFreeSection } from '@/components/sections/PrePastorsHandsFreeSection'

import { OnScreenBibleFeatureSection } from '@/components/sections/OnScreenBibleFeatureSection'

import { SongbookFeatureSection } from '@/components/sections/SongbookFeatureSection'

import { ServiceSlidesFeatureSection } from '@/components/sections/ServiceSlidesFeatureSection'

import { MediaFeatureSection } from '@/components/sections/MediaFeatureSection'

import { LowerThirdBuilderFeatureSection } from '@/components/sections/LowerThirdBuilderFeatureSection'

import { BuiltByPastorsSection } from '@/components/sections/BuiltByPastorsSection'

import { PostPastorsAccordionFeatureSection } from '@/components/sections/PostPastorsAccordionFeatureSection'

import { MoreFeaturesSection } from '@/components/sections/MoreFeaturesSection'

import { MoreFeaturesAccordionFeatureSection } from '@/components/sections/MoreFeaturesAccordionFeatureSection'

import { AssetLibrarySection } from '@/components/sections/AssetLibrarySection'

import { CompatibleSystemsSection } from '@/components/sections/CompatibleSystemsSection'

import { PricingSection } from '@/components/sections/PricingSection'

import { FinalCTASection } from '@/components/sections/FinalCTASection'

import { FAQSection } from '@/components/sections/FAQSection'

import { SiteContainer } from '@/components/layout/SiteContainer'



export function Features() {

  return (

    <>

      <FeaturesHeroSection />

      <FeaturesSubNav />

      <HandsFreeFeatureSection />

      <PrePastorsHandsFreeSection />

      <OnScreenBibleFeatureSection />

      <SongbookFeatureSection />

      <ServiceSlidesFeatureSection />

      <MediaFeatureSection />

      <LowerThirdBuilderFeatureSection />

      <section id="pricing" className="section-gap reveal scroll-mt-28">

        <SiteContainer>

          <PricingSection />

        </SiteContainer>

      </section>

      <BuiltByPastorsSection />

      <PostPastorsAccordionFeatureSection />

      <MoreFeaturesSection showViewAllLink={false} />

      <MoreFeaturesAccordionFeatureSection />

      <section className="section-gap asset-library-pricing-section reveal">

        <AssetLibrarySection />

      </section>

      <CompatibleSystemsSection />

      <FinalCTASection />

      <FAQSection />

    </>

  )

}

