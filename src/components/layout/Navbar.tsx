import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { images, navLinks, resourceDropdownItems } from '@/lib/theme'
import { SiteContainer } from '@/components/layout/SiteContainer'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { GlassButton } from '@/components/ui/GlassButton'
import { MaterialIcon } from '@/components/ui/MaterialIcon'
import { useNavbarSolid } from '@/hooks/useNavbarSolid'

export function Navbar() {
  const [location] = useLocation()
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const isSolid = useNavbarSolid(location === '/')

  const isActive = (href: string) => {
    if (href === '/') return location === '/'
    return location.startsWith(href)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isSolid
          ? 'bg-background/80 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <SiteContainer className="relative h-20 flex items-center justify-between">
        <Link href="/" className="relative z-10 flex items-center" aria-label="Q-Worship home">
          <img src={images.logo} alt="" className="h-10 w-10" />
        </Link>

        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-14 lg:gap-16 text-base font-medium">
          {navLinks.map((link) =>
            link.label === 'Resources' ? (
              <div
                key={link.href}
                className="navbar-dropdown relative"
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
                onFocus={() => setResourcesOpen(true)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setResourcesOpen(false)
                  }
                }}
              >
                <button
                  type="button"
                  className={`navbar-dropdown__trigger transition-colors ${
                    isActive(link.href) ? 'text-white' : 'text-on-surface-variant hover:text-white'
                  } ${resourcesOpen ? 'is-open' : ''}`}
                  aria-haspopup="menu"
                  aria-expanded={resourcesOpen}
                  onClick={() => setResourcesOpen((open) => !open)}
                >
                  Resources
                  <MaterialIcon name="expand_more" className="navbar-dropdown__chevron text-lg" />
                </button>

                {resourcesOpen && (
                  <div className="navbar-dropdown__panel" role="menu">
                    {resourceDropdownItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        role="menuitem"
                        className="navbar-dropdown__item"
                        onClick={() => setResourcesOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive(link.href)
                    ? 'text-white'
                    : 'text-on-surface-variant hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        <div className="flex items-center gap-4 relative z-10">
          <PrimaryButton className="px-6 py-2.5 rounded-lg text-sm">Sign in</PrimaryButton>
          <GlassButton className="px-6 py-2.5 rounded-lg text-sm border border-white/30">
            Get started
          </GlassButton>
        </div>
      </SiteContainer>
    </nav>
  )
}
