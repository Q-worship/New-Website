import { images } from '@/lib/theme'

import { SiteContainer } from '@/components/layout/SiteContainer'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { MaterialIcon } from '@/components/ui/MaterialIcon'

export function FinalCTASection() {
  return (
    <section className="section-gap relative reveal">
      <SiteContainer>
        <GlassCard className="final-cta-card">
          <div className="final-cta-media">
            <img
              src={images.cta}
              alt=""
              className="final-cta-image"
              loading="lazy"
              decoding="async"
            />
            <span className="final-cta-download-patch" aria-hidden />
          </div>
          <div className="sr-only">
            <h2>
              Ready to step into the Future of church presentation?
            </h2>
            <p>
              Join thousands of churches delivering high-impact church experiences with the power of
              Qworship.
            </p>
          </div>
          <div className="final-cta-actions">
            <PrimaryButton className="px-10 py-4 rounded-xl text-lg shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all">
              Get stared for free
            </PrimaryButton>
            <a
              href="#"
              className="flex items-center gap-3 font-bold text-lg hover:text-primary transition-colors"
            >
              Download <MaterialIcon name="download" className="text-lg" />
            </a>
          </div>
        </GlassCard>
      </SiteContainer>
    </section>
  )
}
