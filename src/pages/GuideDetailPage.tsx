import { useEffect } from 'react'
import { useLocation, useRoute } from 'wouter'
import { getGuideArticleContent, getGuideById, getRelatedGuides } from '@/lib/theme'
import { GuideArticleSection } from '@/components/sections/GuideArticleSection'
import { GuideDetailHeroSection } from '@/components/sections/GuideDetailHeroSection'
import { GuideRelatedSection } from '@/components/sections/GuideRelatedSection'
import { GuideStepsSection } from '@/components/sections/GuideStepsSection'

export function GuideDetailPage() {
  const [, params] = useRoute('/guides/:guideId')
  const [, setLocation] = useLocation()

  const guide = params?.guideId ? getGuideById(params.guideId) : undefined

  useEffect(() => {
    if (!guide) {
      setLocation('/guides')
    }
  }, [guide, setLocation])

  if (!guide) {
    return null
  }

  const articleContent = getGuideArticleContent(guide.id)
  const relatedGuides = getRelatedGuides(guide.id, guide.categoryId)

  return (
    <>
      <GuideDetailHeroSection guide={guide} />
      <GuideArticleSection content={articleContent} />
      <GuideStepsSection guide={guide} />
      <GuideRelatedSection cards={relatedGuides} />
    </>
  )
}
