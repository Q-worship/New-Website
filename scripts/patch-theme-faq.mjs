import fs from 'fs'

const path = 'src/lib/theme.ts'
let t = fs.readFileSync(path, 'utf8')
const start = t.indexOf('export const faqItems')
const end = t.indexOf('export const downloadsPageCopy')
if (start === -1 || end === -1) {
  throw new Error('markers not found')
}
t =
  t.slice(0, start) +
  "export { faqItems, pricingFaqTeaserItems } from '@/lib/faqPool'\n\n" +
  t.slice(end)
fs.writeFileSync(path, t)
console.log('theme.ts updated')
