import { images } from '@/lib/theme'

import { SiteContainer } from '@/components/layout/SiteContainer'

import { MaterialIcon } from '@/components/ui/MaterialIcon'



const checklistItems = [
  'Every feature solves a real Sunday-morning problem',
  'Direct integration with Unsplash & Pexels',
]



export function BuiltByPastorsSection() {

  return (

    <section className="built-by-pastors-section section-gap reveal">

      <SiteContainer>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 lg:items-stretch">

          <div className="space-y-6 lg:space-y-8">

            <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight whitespace-nowrap">
              Built By <span className="text-primary">Pastors for Pastors</span>
            </h2>

            <p className="text-on-surface-variant text-lg">
              Q-worship wasn't built in a lab, it was built in a church
            </p>

            <p className="text-on-surface-variant text-lg leading-relaxed">
              Q-worship was born in a real church, by pastors who got tired of fumbling through apps
              mid-sermon while 300 people waited. Every one of its features exists because a pastor,
              worship leader, or tech volunteer asked for it.
            </p>

            <div className="space-y-4 pt-2">

              {checklistItems.map((item) => (

                <div key={item} className="flex items-start gap-3">

                  <MaterialIcon name="check_circle" filled className="text-primary shrink-0 mt-0.5" />

                  <span className="font-medium">{item}</span>

                </div>

              ))}

            </div>

            <button type="button" className="built-by-pastors-btn mt-4">
              Learn more
            </button>

          </div>



          <div className="built-by-pastors-section__media">
            <img
              alt="Pastor speaking at a podium"
              className="built-by-pastors-section__image"
              src={images.pastor}
            />
          </div>

        </div>

      </SiteContainer>

    </section>

  )

}


