import type { GuideArticleContent } from '@/types/content'
import { SiteContainer } from '@/components/layout/SiteContainer'

interface GuideArticleSectionProps {
  content: GuideArticleContent
}

export function GuideArticleSection({ content }: GuideArticleSectionProps) {
  return (
    <section className="guide-article-section reveal">
      <SiteContainer>
        <div className="guide-article-inner">
          <h2 className="guide-article-title font-headline font-bold">
            <span
              className={`guide-article-title-line ${
                content.title.gradientLine === 1 ? 'build-section-entire-gradient' : 'text-white'
              }`}
            >
              {content.title.line1}
            </span>
            {(content.title.line2Before || content.title.accent) && (
              <span className="guide-article-title-line">
                {content.title.line2Before ? (
                  <span className="text-white">{content.title.line2Before} </span>
                ) : null}
                {content.title.accent ? (
                  <span
                    className={
                      content.title.gradientLine === 1 ? 'text-white' : 'build-section-entire-gradient'
                    }
                  >
                    {content.title.accent}
                  </span>
                ) : null}
              </span>
            )}
          </h2>

          <p className="guide-article-body">{content.body}</p>
        </div>
      </SiteContainer>
    </section>
  )
}
