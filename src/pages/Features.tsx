import { BuildTabsSection } from '@/components/sections/BuildTabsSection'
import { AlternatingBlocksSection } from '@/components/sections/AlternatingBlocksSection'
import { MoreFeaturesSection } from '@/components/sections/MoreFeaturesSection'

export function Features() {
  return (
    <>
      <BuildTabsSection className="pt-32" />
      <AlternatingBlocksSection />
      <MoreFeaturesSection />
    </>
  )
}
