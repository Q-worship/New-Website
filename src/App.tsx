import { Route, Switch } from 'wouter'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { Features } from '@/pages/Features'
import { About } from '@/pages/About'
import { Pricing } from '@/pages/Pricing'
import { Resources } from '@/pages/Resources'

export function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/features" component={Features} />
        <Route path="/about" component={About} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/resources" component={Resources} />
      </Switch>
    </Layout>
  )
}
