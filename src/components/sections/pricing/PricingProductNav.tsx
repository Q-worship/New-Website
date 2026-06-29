import { useState } from 'react'
import { pricingPageCopy, images } from '@/lib/theme'
import { SiteContainer } from '@/components/layout/SiteContainer'

export function PricingProductNav() {
  const { productNav } = pricingPageCopy
  const [activeId, setActiveId] = useState(
    productNav.items.find((item) => item.active)?.id ?? productNav.items[0].id,
  )

  return (
    <nav className="pricing-product-nav" aria-label="Q-worship products">
      <SiteContainer>
        <div className="pricing-product-nav-inner">
          <div className="pricing-product-nav-brand">
            <img src={images.logo} alt="" className="pricing-product-nav-logo" />
            <span className="pricing-product-nav-brand-text">{productNav.brand}</span>
          </div>

          <div className="pricing-product-nav-links hide-scrollbar">
            {productNav.items.map((item) => {
              const isActive = activeId === item.id

              return (
                <button
                  key={item.id}
                  type="button"
                  disabled={item.disabled}
                  className={`pricing-product-nav-link${isActive ? ' pricing-product-nav-link--active' : ''}${item.disabled ? ' pricing-product-nav-link--disabled' : ''}`}
                  onClick={() => !item.disabled && setActiveId(item.id)}
                >
                  <span>{item.label}</span>
                  <span className="pricing-product-nav-badge">{item.badge}</span>
                </button>
              )
            })}
          </div>
        </div>
      </SiteContainer>
    </nav>
  )
}
