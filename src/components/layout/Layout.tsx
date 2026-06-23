import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  useRevealOnScroll()

  return (
    <div className="antialiased min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
