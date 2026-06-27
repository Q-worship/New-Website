import { Route, Switch } from 'wouter'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { Features } from '@/pages/Features'
import { About } from '@/pages/About'
import { Pricing } from '@/pages/Pricing'
import { Resources } from '@/pages/Resources'
import { Guides } from '@/pages/Guides'
import { FAQs } from '@/pages/FAQs'
import { Downloads } from '@/pages/Downloads'
import { JobDetailPage } from '@/pages/JobDetailPage'

export function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/features" component={Features} />
        <Route path="/about/careers/:jobId" component={JobDetailPage} />
        <Route path="/about" component={About} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/resources" component={Resources} />
        <Route path="/guides" component={Guides} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/downloads" component={Downloads} />
      </Switch>
    </Layout>
  )
}
