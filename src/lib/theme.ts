import type {
  AccordionSpotlightContent,
  BuildTabItem,
  ChecklistSpotlightContent,
  CompatibleSystem,
  CoreBelief,
  FeatureCard,
  FeaturesSubNavItem,
  GuideCard,
  GuideArticleContent,
  GuideCategoryItem,
  FaqCategoryItem,
  FaqItem,
  DownloadsPageCopy,
  HandsFreeFeature,
  InsightCard,
  JobOpening,
  MoreFeature,
  NavDropdownItem,
  NavLink,
  PricingCompareCategory,
  PricingCompareRow,
  PricingIncludedFeature,
  PricingPageCopy,
  PricingPlan,
  PricingProductContent,
  PricingProductId,
  TabItem,
  TeamCard,
  WorkBenefit,
} from '@/types/content'

export const navLinks: NavLink[] = [
  { label: 'Features', href: '/features' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
]

export const resourceDropdownItems: NavDropdownItem[] = [
  { label: 'Downloads', href: '/downloads' },
  { label: 'Guides', href: '/guides' },
  { label: 'FAQs', href: '/faqs' },
]

export const tabItems: TabItem[] = [
  {
    id: 'service',
    label: 'Service Order',
    title: 'Infinite Canvas Engine',
    description:
      'Layer lyrics, 4K motion backgrounds, and alpha-channel videos with a non-destructive workflow that feels like a professional studio.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAM-hg5zobIWbBtFaGR8biAsD4LgXjPRf-n5S5MmQCi9XoIkYVJ57UDRwNUTg0W9AkDgEDwcP0ZokxHqn4eaaeTTVgNJWNJJPCXFmPX_h69InbColdbg1pzCofEKsoZsbPNbChbZdpQgo4Q5qv6qZ_KyAt4dthcYMPa_bafis1ggMcQB8nB2dvVieGMGiEaWX6hK3pYZ6GBcJtNX8to-JpD9IP2mueRsVd_yvTzMVDp15Ax-1v4AUqatLC30HjQj9Rgy7gNDd_B0I7c',
  },
  {
    id: 'songs',
    label: 'Songs',
    title: 'Cinematic Song Management',
    description:
      'Import and manage thousands of songs with ease. Dynamic formatting ensures every lyric slide looks perfect on every screen.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBCOOWixaFiQhuMVN-Dgp9sjkSWQX1U2bAuIDINRBv4MeImrrUKFauIwPKuZee-0sf9E_o9CNpdx_NClSmo3mUDXSvXflzd3DMrdOBceYKv7sXXaY2AmlZ_xDN2tYX41CSylWnEN4AAiWjOmaw_158069SN1EDVblml3kItbWsZa0qP2Smw8-vLLFh9_qQOWwANw_e2Qg0qjA8hmuPed5N1KAg_fa6q3twwpqkhXVgOgQE-nREuMpEJkg4CgC4QtqcrDMSpAwU1f-Q2',
  },
  {
    id: 'onscreen',
    label: 'On-screen Bible',
    title: 'Live On-screen Bible',
    description:
      'Instant access to over 100 Bible translations. Drag and drop verses directly into your live production timeline.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBoZq0pU7bsoY4WOn1blm0SJru5aFOjpvunzZNfduOhxL6hR-YGaIKMY4kVTC9gbS34QIFfLWQkDXAo_evd5K2Oo9X_PFt1Bs8IByMAi_Qi7mxkE049kcSsc_AENcURiUOIiz_Tb1766qTZ4tZrwTY79tFWGlhesD7ixgqK8d4JQR-KaqMTxUMTppUWaRBUDiI5OHSG18MPoi9TEin1LmHhWVD2glxVxfpCpn4N8yINZGhggy8nRzmvytD7r6AjM_9nEGWHKuWjjfab',
  },
  {
    id: 'handsfree',
    label: 'Hands-Free Bible®',
    title: 'Speech-to-Text Integration',
    description:
      'Our proprietary AI tracks spoken words and automatically cues the correct scripture references in real-time.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAywanEgW5IqAtQHIiOEdxjc72AMFB3CqkczeXRn7QfkFV1SIw-plJpFPaUcUOdNX5qV8nuZMOnjTjZkrLKvnybnQVEBMD8FsG96c9J2bk0hd4aPeDcttgAAobgDgertbtNe5oRKD1puetUDXQuQFtJA-NkB5VmPfSJKH4u6gt_7LpZvalD1RsRR2KkWqrH_7KeDmGJb1XXn9i_L_zp4Fse6hzo-i5Wz0y9Tbl6gLCtKiC3cl6l6CY5mh2-2zABqLTIuOMcpRb42uSR',
  },
  {
    id: 'announcements',
    label: 'Announcements',
    title: 'Automated Loop Engine',
    description:
      'Keep your congregation informed with smart announcement loops that update dynamically from your calendar.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAM-hg5zobIWbBtFaGR8biAsD4LgXjPRf-n5S5MmQCi9XoIkYVJ57UDRwNUTg0W9AkDgEDwcP0ZokxHqn4eaaeTTVgNJWNJJPCXFmPX_h69InbColdbg1pzCofEKsoZsbPNbChbZdpQgo4Q5qv6qZ_KyAt4dthcYMPa_bafis1ggMcQB8nB2dvVieGMGiEaWX6hK3pYZ6GBcJtNX8to-JpD9IP2mueRsVd_yvTzMVDp15Ax-1v4AUqatLC30HjQj9Rgy7gNDd_B0I7c',
  },
]

export const buildSectionCopy = {
  subtitle:
    'Our Hands-free Bible is just the start. From the opening song to the closing prayer, Q-worship holds your entire service together. Arrange every item, jump between sections, and never lose your place — even if the service takes an unexpected turn.',
}

export const buildTabItems: BuildTabItem[] = [
  {
    id: 'service',
    label: 'Service Order',
    title: { line1: 'Your Service.', line2: 'Fully in Your Hands.' },
    description:
      'Your songs, scriptures, announcements and media — all in one place, all in the right order, all ready to go live the moment you need them. Qworship holds your entire service together so you never lose your place, no matter what the service demands.',
    features: [
      'Everything in one place — songs, Bible, announcements',
      'Reorder items on the fly without losing your work',
      'Your service saves automatically, every step of the way',
      'Pick up exactly where you left off, every time',
      'Navigate your whole service with simple keyboard shortcuts',
    ],
    image: '/Photos/Service%20order.png',
  },
  {
    id: 'songs',
    label: 'Songs',
    title: { line1: 'Every Lyric.', line2: 'Right on Time.' },
    description:
      'Lead worship with complete confidence. Move through each section of your songs — Verse, Chorus, Bridge and beyond. Let your congregation see every word, perfectly in sync, exactly and sing along when you need it.',
    features: [
      'Navigate Verse, Chorus, Bridge, Tag and more with one click',
      'What you see is what your congregation sees — always',
      'Edit songs directly inside Qworship, no extra tools needed',
      'Bring in songs from Word documents, PDFs or text files',
      'Keep your CCLI number, song key and tempo all in one place',
    ],
    image: '/Photos/Songs.png',
  },
  {
    id: 'onscreen',
    label: 'On-screen Bible',
    title: { line1: 'Search Any Scripture.', line2: 'In Any Version. In Seconds.' },
    description:
      'Stop fumbling with tabs and search bars mid-sermon. Find any verse across all 66 books, switch between translations on the spot, and put it on screen for your whole congregation — instantly.',
    features: [
      'Search any verse across all 66 books of the Bible with easy type',
      'Switch between bible versions easily mid-service',
      'Project a single verse or a whole passage with one click',
      'See a preview of every slide before it goes live',
      'Move through chapters and verses without losing your flow',
    ],
    image: '/Photos/On-screen%20bible.png',
  },
  {
    id: 'handsfree',
    label: 'Hands-Free Bible™',
    title: { line1: 'No need to Type.', line2: 'Just Speak' },
    description:
      'Stay in the moment. Just say the reference out loud — Qworship hears you, finds the verse, and puts it on screen. No pausing, no searching, no breaking your stride at the pulpit.',
    features: [
      'Just say the verse — Qworship finds it instantly',
      'Works with all Bible translations',
      'Understands natural speech — say it however feels natural',
      'Remembers where you are so you can say “next verse” and keep going',
      'Say “thank you” or “amen” and the screen clears itself',
    ],
    image: '/Photos/Hands%20free%20Bible.png',
  },
  {
    id: 'announcements',
    label: 'Announcements',
    title: { line1: 'Keep Your Church', line2: 'In the Loop' },
    description:
      'Slide your announcements, countdowns and notices straight into your service — no switching apps, no second screen, no interruptions. Your whole service flows as one, from welcome to benediction.',
    features: [
      'Announcements sit right inside your service order',
      'Add a countdown so your congregation knows when things start',
      'Customise the look to match your church’s style',
      'Move seamlessly from announcements into worship',
      'Everything on one screen, always under your control',
    ],
    image: '/Photos/Announcements.png',
  },
]

export const heroShowcaseTabs: TabItem[] = [
  ...tabItems,
  {
    id: 'slides',
    label: 'Slides',
    title: 'Dynamic Slide Builder',
    description:
      'Design and present beautiful slides with motion backgrounds, lyrics, and scripture — all from one unified canvas.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBCOOWixaFiQhuMVN-Dgp9sjkSWQX1U2bAuIDINRBv4MeImrrUKFauIwPKuZee-0sf9E_o9CNpdx_NClSmo3mUDXSvXflzd3DMrdOBceYKv7sXXaY2AmlZ_xDN2tYX41CSylWnEN4AAiWjOmaw_158069SN1EDVblml3kItbWsZa0qP2Smw8-vLLFh9_qQOWwANw_e2Qg0qjA8hmuPed5N1KAg_fa6q3twwpqkhXVgOgQE-nREuMpEJkg4CgC4QtqcrDMSpAwU1f-Q2',
  },
]

export const handsFreeFeatures: HandsFreeFeature[] = [
  {
    title: 'Hands-free Bible',
    description:
      "Intelligent voice recognition tracks your pastor's sermon and automatically prepares scriptures.",
    active: true,
  },
  {
    title: 'Dynamic Theming',
    description: 'Adapt your scripture styling on the fly with cinematic presets.',
  },
  {
    title: 'Multi-Version Sync',
    description: 'Display multiple translations side-by-side automatically.',
  },
]

export const handsFreeSectionCopy = {
  title: 'Meet the Q-worship Hands-Free Bible',
  tagline: {
    line1: 'Your Scripture. Found by Speech. Projected',
    line2: 'in Seconds.',
  },
  body: 'For ages, pastors have paused mid-sermon to wait for a verse. Q-worship ends that. Powered by our advanced speech-to-text engine, the Q-worship Hands-Free Bible listens as you lead, understanding natural language, retaining context, and instantly surfacing the exact scripture you need across major Bible translations.',
}

export const finalCtaCopy = {
  heading: {
    line1: 'Ready to step into the',
    line2: 'Future of church presentation?',
  },
  body: 'Join thousands of churches delivering high-impact church experiences with the power of Qworship.',
  primaryCta: 'Get started for free',
  downloadCta: 'Download',
}

export const handsFreeShowcaseTabs: TabItem[] = [
  {
    id: 'handsfree',
    label: 'Hands-free Bible',
    title: 'Hands-free Bible',
    description:
      "Intelligent voice recognition tracks your pastor's sermon and automatically prepares scriptures.",
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAywanEgW5IqAtQHIiOEdxjc72AMFB3CqkczeXRn7QfkFV1SIw-plJpFPaUcUOdNX5qV8nuZMOnjTjZkrLKvnybnQVEBMD8FsG96c9J2bk0hd4aPeDcttgAAobgDgertbtNe5oRKD1puetUDXQuQFtJA-NkB5VmPfSJKH4u6gt_7LpZvalD1RsRR2KkWqrH_7KeDmGJb1XXn9i_L_zp4Fse6hzo-i5Wz0y9Tbl6gLCtKiC3cl6l6CY5mh2-2zABqLTIuOMcpRb42uSR',
  },
  {
    id: 'theming',
    label: 'Dynamic Theming',
    title: 'Dynamic Theming',
    description: 'Adapt your scripture styling on the fly with cinematic presets.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAywanEgW5IqAtQHIiOEdxjc72AMFB3CqkczeXRn7QfkFV1SIw-plJpFPaUcUOdNX5qV8nuZMOnjTjZkrLKvnybnQVEBMD8FsG96c9J2bk0hd4aPeDcttgAAobgDgertbtNe5oRKD1puetUDXQuQFtJA-NkB5VmPfSJKH4u6gt_7LpZvalD1RsRR2KkWqrH_7KeDmGJb1XXn9i_L_zp4Fse6hzo-i5Wz0y9Tbl6gLCtKiC3cl6l6CY5mh2-2zABqLTIuOMcpRb42uSR',
  },
  {
    id: 'sync',
    label: 'Multi-Version Sync',
    title: 'Multi-Version Sync',
    description: 'Display multiple translations side-by-side automatically.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBoZq0pU7bsoY4WOn1blm0SJru5aFOjpvunzZNfduOhxL6hR-YGaIKMY4kVTC9gbS34QIFfLWQkDXAo_evd5K2Oo9X_PFt1Bs8IByMAi_Qi7mxkE049kcSsc_AENcURiUOIiz_Tb1766qTZ4tZrwTY79tFWGlhesD7ixgqK8d4JQR-KaqMTxUMTppUWaRBUDiI5OHSG18MPoi9TEin1LmHhWVD2glxVxfpCpn4N8yINZGhggy8nRzmvytD7r6AjM_9nEGWHKuWjjfab',
  },
  {
    id: 'voice',
    label: 'Voice Tracking',
    title: 'Voice Tracking',
    description:
      'Our proprietary AI tracks spoken words and automatically cues the correct scripture references in real-time.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAywanEgW5IqAtQHIiOEdxjc72AMFB3CqkczeXRn7QfkFV1SIw-plJpFPaUcUOdNX5qV8nuZMOnjTjZkrLKvnybnQVEBMD8FsG96c9J2bk0hd4aPeDcttgAAobgDgertbtNe5oRKD1puetUDXQuQFtJA-NkB5VmPfSJKH4u6gt_7LpZvalD1RsRR2KkWqrH_7KeDmGJb1XXn9i_L_zp4Fse6hzo-i5Wz0y9Tbl6gLCtKiC3cl6l6CY5mh2-2zABqLTIuOMcpRb42uSR',
  },
]

const rectanglePortrait = '/Photos/Rectangle%209.png'
const pastorForPastor = '/Photos/pASTORS%20(2).png'
const downloadBannerImage = '/Photos/Download%201.png'
const downloadOnlineCtaImage = '/Photos/Download%202.png'

export const featureGridCards: FeatureCard[] = [
  {
    title: 'Lightweight & Fast to Install',
    description:
      'Q-worship installs in minutes. No IT department, no server setup, no configuration headaches. Download, open, and you\'re ready for Sunday.',
    image: '/Photos/eas%20to%20use.png',
  },
  {
    title: 'Easy To Use by Everyone',
    description:
      'Qworship was designed so that anyone on your team, from the senior pastor to the newest volunteer can take the controls with confidence. Clean interface, voice commands, and a workflow that just makes sense.',
    image: '/Photos/onlin%20and....png',
  },
]

export const featureGridHighlight: FeatureCard = {
  title: 'Online & Offline Ready',
  description:
    'No Wi-Fi? No problem. Qworship works fully offline so your service never stops — whether you\'re in a rural church, a school hall, or a venue with no internet.',
  image: '/Photos/lightweight.png',
}

export const alternatingBlocks: FeatureCard[] = [
  {
    title: 'In-built Lower Third Builder',
    description:
      'Create broadcast-quality name and title graphics directly inside Q-worship. Display speaker names, sermon titles, and announcements on your live stream — no extra software needed.',
    image: '/Photos/third-builder.png',
    linkText: 'Learn more',
    imageFirst: false,
  },
  {
    title: 'NDI Support',
    description:
      "Send Qworship's output over your network as an NDI source. Route Bible verses, lyrics, and media directly into your video switcher or streaming rig — no capture cards, no extra cables.",
    image: '/Photos/NDL.png',
    linkText: 'Learn more',
    imageFirst: true,
  },
  {
    title: 'Easy to use',
    description:
      'Layer lyrics, 4K motion backgrounds, and alpha-channel videos with a non-destructive workflow that feels like a professional studio.',
    image: '/Photos/Easy%20to%20use.png',
    linkText: 'Infinite Canvas Engine',
    imageFirst: false,
  },
]

const praiseAndWorshipImage = '/Photos/Praise%20and%20Worship.png'

export const teamCards: TeamCard[] = [
  {
    title: 'Pastors',
    description:
      'Built with Bible speech to text Intelligence, Q-worship helps Pastors to fetch bible scripture across all the popular Bible versions using voice command during live service.',
    image: '/Photos/Pastors.png',
    icon: 'layers',
    showButton: true,
    buttonText: 'Start for free today',
  },
  {
    title: 'Praise & Worship',
    description:
      'Import and project lyrics and let the congregation sing along. Switch between backgrounds for an immersive and dynamic worship journey.',
    image: praiseAndWorshipImage,
    icon: 'layers',
    showButton: true,
    buttonText: 'Start for free today',
  },
  {
    title: 'Media Team',
    description:
      'Our user-friendly tools empower tech teams to craft presentations, control speech-to-text Bible features remotely, and create seamless slides all from a single, intuitive platform.',
    image: praiseAndWorshipImage,
    icon: 'layers',
    showButton: true,
    buttonText: 'Start for free today',
  },
]

export const moreFeatures: MoreFeature[] = [
  {
    title: 'Cloud Media Library',
    description:
      'Upload your own images, videos, and audio or browse platform-provided assets. Every file is tagged, categorised, and searchable so you find the right background in seconds, not minutes.',
  },
  {
    title: 'Songbook Management',
    description:
      'Build and maintain your entire church songbook in one place. Import from Word, PDF, or text files. Organise by author, topic, or tag.',
  },
  {
    title: 'Slide Canvas',
    description:
      'Layer lyrics, Bible verses, media, and graphics on a fully customisable canvas. Control backgrounds, logo positioning, and widget placement to create a presentation that looks uniquely yours.',
  },
  {
    title: 'Web Page',
    description:
      'Display any web page directly on your projection screen — live streams, church websites, event pages, or online giving portals without switching applications or losing your place in the service.',
  },
  {
    title: 'Sermon Record',
    description:
      'Keep a structured record of every sermon — title, scripture reference, speaker, date, and notes. Build a searchable archive your whole team can reference week after week.',
  },
  {
    title: 'Flexible & Modular',
    description:
      'From a single pastor running everything to a full tech crew managing multiple campuses. Qworship grows with your church. Use only the features you need today and unlock more as your team scales.',
  },
]

export const compatibleSystems: CompatibleSystem[] = [
  { name: 'OBS', icon: 'obs' },
  { name: 'Pro Presenter', icon: 'propresenter' },
  { name: 'Vmix', icon: 'vmix' },
  { name: 'Easy Worship', icon: 'easyworship' },
  { name: 'OpenLP', icon: 'openlp' },
]

export const assetLibraryVideos = [
  '/Photos/Copy%20of%20intence3.mp4',
  '/Photos/Copy%20of%20Jordan3.mp4',
  '/Photos/Copy%20of%20jordan4.mp4',
  '/Photos/Copy%20of%20liquid%20_1.mp4',
] as const

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Enterprise',
    monthlyPrice: '$15.99',
    yearlyPrice: '$12.99',
    badge: 'Recommended',
    highlighted: true,
  },
  {
    name: 'Premium',
    monthlyPrice: '$12.99',
    yearlyPrice: '$9.99',
    badge: 'Best value',
  },
  {
    name: 'Starter',
    monthlyPrice: '$8.99',
    yearlyPrice: '$6.99',
    badge: 'Cheapest',
  },
  {
    name: 'Free',
    monthlyPrice: '$0.00',
    yearlyPrice: '$0.00',
    badge: 'No credit card',
    badgeVariant: 'muted',
  },
]

export const pricingFeatures = [
  'Voice-powered Bible search',
  'Multiple Bible Translation',
  'Cloud media library with drag-and-drop upload',
  'Song projection system',
  'On-screen Bible with Multiple Versions',
]

export const pricingPageCopy: PricingPageCopy = {
  hero: {
    heading: { before: 'Simple Pricing for', accent: 'Every Church' },
    body: 'Start your 30-day free trial today — no credit card required, no watermarks, no limits. One subscription covers your entire team on Mac and Windows.',
    footnote: 'Your free trial starts automatically when you create an account.',
    platforms: [
      { id: 'windows', label: 'Windows', icon: 'windows' },
      { id: 'mac', label: 'Mac Os', icon: 'mac' },
    ],
  },
  productNav: {
    brand: 'Q-worship Products',
    items: [
      {
        id: 'live-console',
        label: 'Q-worship Live Console',
        badge: 'Desktop Application',
      },
      {
        id: 'cloud',
        label: 'Q-worship Cloud Presentation System',
        badge: 'Cloud',
      },
    ],
  },
  faqHeading: 'Frequently Asked Questions',
  faqBody:
    "Everything you need to know about Qworship pricing. Can't find what you're looking for?",
  faqCta: 'View more FAQs',
}

export const guideProductInfo: Record<'live-console' | 'cloud', { title: string; description: string }> = {
  'live-console': {
    title: 'Q-worship Live Console',
    description:
      'is a desktop application for Windows and macOS. It works offline once Bible data is downloaded, and connects to the internet for voice transcription and cloud sync. Best for churches with a dedicated operator machine connected to a projector.',
  },
  cloud: {
    title: 'Q-worship Cloud Presentation System',
    description:
      'is a browser-based presentation tool. Nothing to install — sign in from any computer and your Bible data, songs, and service orders sync automatically. Best for teams that run service from a shared or borrowed machine.',
  },
}

const liveConsolePlans: PricingPlan[] = [
  {
    name: 'Free',
    monthlyPrice: '$0.00',
    yearlyPrice: '$0.00',
    badge: '',
    description: 'Perfect for solo pastors getting started.',
    features: [
      'Online Voice Bible Search (KJV only)',
      'Complete Offline Voice Bible Search (KJV only)',
      'On-screen Bible - KJV only',
      'Live projection - Single Screen',
      'Media Assets - limited to my media',
      'Lower Third builder - Limited',
      'NDI Connectivity',
      'Community Support',
    ],
    ctaLabel: 'Get Started Free',
    ctaVariant: 'outline',
  },
  {
    name: 'Starter',
    monthlyPrice: '$8.99',
    yearlyPrice: '$6.99',
    badge: 'CHEAPEST',
    description: 'For small churches ready to level up.',
    includesLabel: 'Everything in Free, plus:',
    features: [
      'Online Voice Bible Search (3 Bibles)',
      'Complete Offline Voice Bible Search (3 Bibles)',
      'On-screen Bible - 3 Bibles',
      'Live projection - Multiple Screen',
      'Songbook with song - Limited',
      'Song Import from DOCX and PDF',
      'Cloud media library access - limited',
    ],
    ctaLabel: 'Start free trial',
    ctaVariant: 'outline',
  },
  {
    name: 'Premium',
    monthlyPrice: '$12.99',
    yearlyPrice: '$9.99',
    badge: '',
    popularLabel: 'MOST POPULAR',
    highlighted: true,
    description: 'The complete solution for growing churches',
    includesLabel: 'Everything in Starter, plus:',
    features: [
      'Online Voice Bible Search (6 Bibles)',
      'Complete Offline Voice Bible Search (6 Bibles)',
      'On-screen Bible - 6 Bibles',
      'Multi-branch access - up to 5 Branches',
      'Complete Songbook with song import from DOCX, PDF',
      'Full lower Third Builder',
      'Full Cloud media library access',
    ],
    ctaLabel: 'Start free trial',
    ctaVariant: 'gradient',
  },
  {
    name: 'Enterprise',
    monthlyPrice: '$15.99',
    yearlyPrice: '$12.99',
    badge: 'RECOMMENDED',
    description: 'The complete solution for growing churches',
    includesLabel: 'Everything in Premium, plus:',
    features: [
      'Online Voice Bible Search (+10 Bibles)',
      'Complete Offline Voice Bible Search (+10 Bibles)',
      'On-screen Bible with +10 Bibles',
      'Multi-branch discount access - up to 10 Branches',
      'Dedicated Account Manager',
      'Custom Onboarding & Training',
      'Priority phone and chat support',
    ],
    ctaLabel: 'Start free trial',
    ctaVariant: 'outline',
  },
]

const liveConsoleIncludedFeatures: PricingIncludedFeature[] = [
  {
    title: 'Hands-Free Bible',
    description:
      'Search 31,408 verses across 6 translations using only your voice. No typing, no clicking.',
    icon: 'mic',
  },
  {
    title: '100% Offline Ready',
    description:
      'Full functionality with zero internet. Your service never stops, no matter the venue.',
    icon: 'wifi_off',
  },
  {
    title: '6 Bible Translations',
    description:
      'KJV, NKJV, NIV, ESV, AMP, and MSG — switch translations mid-service with a single voice command.',
    icon: 'menu_book',
  },
  {
    title: 'Songbook & Projection',
    description:
      'Build your church song library and project lyrics section by section with real-time sync.',
    icon: 'music_note',
  },
  {
    title: 'GO LIVE Mode',
    description:
      'Full-screen presentation mode with multi-screen output, logo overlay, and widget positioning.',
    icon: 'tv',
  },
  {
    title: 'Auto-Save & Recovery',
    description:
      'Your service is saved continuously. A crash or restart restores your workspace exactly.',
    icon: 'save',
  },
]

const cloudIncludedFeatures: PricingIncludedFeature[] = [
  {
    title: 'Order of Service Builder',
    description:
      'Build your full service flow with songs, Bible, announcements, videos, and images in one timeline.',
    icon: 'event_note',
  },
  {
    title: 'Hands-Free Bible',
    description:
      'Search 31,408 verses across multiple translations using only your voice — no typing, no clicking.',
    icon: 'mic',
  },
  {
    title: 'Rich Slide Canvas',
    description:
      'Layer text, elements, images, QR codes, and templates on a flexible worship slide canvas.',
    icon: 'palette',
  },
  {
    title: 'Cloud Media Library',
    description:
      'Upload, tag, and access your church media from any device with cloud sync.',
    icon: 'cloud_queue',
  },
  {
    title: 'Live Projection',
    description:
      'Project your service to screens and outputs with single-window or multi-screen support.',
    icon: 'cast',
  },
  {
    title: 'Auto-Save & Recovery',
    description:
      'Your order of service is saved continuously. A crash or restart restores your workspace exactly.',
    icon: 'save',
  },
]

export const pricingCompareCategories: PricingCompareCategory[] = [
  { id: 'all', label: 'All' },
  { id: 'bible', label: 'Bible' },
  { id: 'songbook', label: 'Songbook' },
  { id: 'media', label: 'Media' },
  { id: 'integrations', label: 'Integrations' },
  { id: 'lower-third', label: 'Lower Third' },
  { id: 'size', label: 'Size' },
  { id: 'support', label: 'Support' },
]

const liveConsoleCompareRows: PricingCompareRow[] = [
  {
    id: 'voice-bible-search',
    label: 'Voice Bible search',
    category: 'bible',
    free: true,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'all-bible-translations',
    label: 'All 10+ Bible Translations',
    category: 'bible',
    free: false,
    starter: false,
    premium: true,
    enterprise: true,
  },
  {
    id: 'verse-database',
    label: '31,406 verse database',
    category: 'bible',
    free: true,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'session-context',
    label: 'Session Context Retention',
    category: 'bible',
    free: true,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'songbook',
    label: 'Songbook / Song Library',
    category: 'songbook',
    free: false,
    starter: 'Unlimited',
    premium: 'Unlimited',
    enterprise: 'Unlimited',
  },
  {
    id: 'song-import',
    label: 'Song import (PDF, DOCX)',
    category: 'songbook',
    free: true,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'live-projection',
    label: 'Live projection (GO-LIVE)',
    category: 'integrations',
    free: true,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'multi-screen',
    label: 'Multi-screen output',
    category: 'integrations',
    free: false,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'custom-background',
    label: 'Custom background & logo',
    category: 'media',
    free: true,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'lower-third-builder',
    label: 'Lower Third Builder',
    category: 'lower-third',
    free: false,
    starter: 'Limited',
    premium: 'Unlimited',
    enterprise: 'Unlimited',
  },
  {
    id: 'ndi-output',
    label: 'NDI output',
    category: 'integrations',
    free: false,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'my-media',
    label: 'My media (user uploads)',
    category: 'media',
    free: '150MB',
    starter: '1GB',
    premium: '5GB',
    enterprise: '5GB',
  },
  {
    id: 'cloud-media',
    label: 'Cloud media library',
    category: 'media',
    free: false,
    starter: 'Limited',
    premium: 'Unlimited',
    enterprise: 'Unlimited',
  },
  {
    id: 'tagging-collections',
    label: 'Advanced tagging and collections',
    category: 'media',
    free: false,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'on-screen-bible',
    label: 'On-screen bible',
    category: 'bible',
    free: true,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'multi-branch',
    label: 'Multi-branch discount',
    category: 'size',
    free: false,
    starter: false,
    premium: true,
    enterprise: true,
  },
  {
    id: 'email-support',
    label: 'Email Support',
    category: 'support',
    free: true,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'community-support',
    label: 'Community support',
    category: 'support',
    free: true,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'priority-support',
    label: 'Priority support',
    category: 'support',
    free: false,
    starter: false,
    premium: false,
    enterprise: true,
  },
]

const cloudPlans: PricingPlan[] = [
  {
    name: 'Free',
    monthlyPrice: '$0.00',
    yearlyPrice: '$0.00',
    badge: '',
    description: 'Try the full cloud experience at no cost.',
    features: [
      'Order of service builder',
      'Hands-Free Bible - KJV only',
      'On-screen Bible search - KJV only',
      'Song Library - Limited',
      'Media Assets - limited to My media',
      'Live projection - Single Window',
      'Basic Slide Canvas Builder',
      'Community Support & Resources',
    ],
    ctaLabel: 'Get Started Free',
    ctaVariant: 'outline',
  },
  {
    name: 'Essentials',
    monthlyPrice: '$8.99',
    yearlyPrice: '$6.99',
    badge: 'CHEAPEST',
    description: 'Everything you need to run a full church service.',
    includesLabel: 'Everything in Free, plus:',
    features: [
      'Online Voice Bible Search (3 Bibles)',
      'On-screen Bible - 3 Bibles',
      'Full Service Item Library (Song, Bible, Announcement, Video, Image slide and more)',
      'Slide Canvas with built-in templates',
      'Cloud & My media assets library - limited access',
      'Song Import from DOCX and PDF',
      'NDI connectivity via Q-worship NDI Bridge',
      'Auto-save & Crash Recovery',
      'Email Support',
    ],
    ctaLabel: 'Start free trial',
    ctaVariant: 'outline',
  },
  {
    name: 'Pro',
    monthlyPrice: '$12.99',
    yearlyPrice: '$9.99',
    badge: '',
    popularLabel: 'MOST POPULAR',
    highlighted: true,
    description: 'The complete cloud platform for growing churches.',
    includesLabel: 'Everything in Essentials, plus:',
    features: [
      'Online Voice Bible Search (6+ Bibles)',
      'On-screen Bible - 6+ Bibles',
      'Rich Slide Canvas — text, elements, images, QR codes, layers',
      'Lower Third Builder & Pre-built templates',
      'Advanced media tagging & collections',
      'Multi-Branch Discount — Up to 5 branches',
      'PowerPoint Export & Back-up',
      'Priority Email Support',
    ],
    ctaLabel: 'Start free trial',
    ctaVariant: 'gradient',
  },
  {
    name: 'Enterprise',
    monthlyPrice: '$15.99',
    yearlyPrice: '$12.99',
    badge: 'RECOMMENDED',
    description: 'The complete solution for growing churches.',
    includesLabel: 'Everything in Pro, plus:',
    features: [
      'Online Voice Bible Search (10+ Bibles)',
      'On-screen Bible - 10+ Bibles',
      'Multi-branch discount access - up to 10 Branches',
      'Dedicated Account Manager',
      'Custom Onboarding & Training',
      'Priority phone and chat support',
    ],
    ctaLabel: 'Start free trial',
    ctaVariant: 'outline',
  },
]

export const cloudCompareCategories: PricingCompareCategory[] = [
  { id: 'all', label: 'All' },
  { id: 'bible', label: 'Bible' },
  { id: 'songbook', label: 'Songbook' },
  { id: 'media', label: 'Media' },
  { id: 'integrations', label: 'Integrations' },
  { id: 'lower-third', label: 'Lower Third' },
  { id: 'size', label: 'Size' },
  { id: 'service', label: 'Service' },
  { id: 'support', label: 'Support' },
]

const cloudCompareRows: PricingCompareRow[] = [
  {
    id: 'hands-free-voice-bible-search',
    label: 'Hands-Free Voice Bible Search',
    category: 'bible',
    free: true,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'all-bible-translations',
    label: 'All 10+ Bible Translations',
    category: 'bible',
    free: false,
    starter: false,
    premium: false,
    enterprise: true,
  },
  {
    id: 'verse-database',
    label: '31,406 verse database',
    category: 'bible',
    free: true,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'verse-range-selection',
    label: 'Verse range selection',
    category: 'bible',
    free: true,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'order-of-service-builder',
    label: 'Order of service Builder',
    category: 'service',
    free: true,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'service-items',
    label: 'Songs, Bible, Announcements items',
    category: 'service',
    free: true,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'video-image-slide-items',
    label: 'Video & Image slide items',
    category: 'service',
    free: true,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'web-page-item',
    label: 'Web page item',
    category: 'service',
    free: false,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'basic-slide-canvas',
    label: 'Basic slide canvas',
    category: 'media',
    free: true,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'worship-slide-templates',
    label: 'Built-in worship slide templates',
    category: 'media',
    free: false,
    starter: 'Limited',
    premium: 'Unlimited',
    enterprise: 'Unlimited',
  },
  {
    id: 'rich-canvas',
    label: 'Rich canvas (text, elements, images, or layers)',
    category: 'media',
    free: false,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'lower-third-builder',
    label: 'Lower Third Builder',
    category: 'lower-third',
    free: false,
    starter: 'Limited',
    premium: 'Unlimited',
    enterprise: 'Unlimited',
  },
  {
    id: 'song-library',
    label: 'Song library',
    category: 'songbook',
    free: false,
    starter: 'Limited',
    premium: 'Unlimited',
    enterprise: 'Unlimited',
  },
  {
    id: 'song-import',
    label: 'Song import (PDF, DOCX)',
    category: 'songbook',
    free: false,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'cloud-media-library',
    label: 'Cloud media library',
    category: 'media',
    free: false,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'my-media',
    label: 'My Media (user uploads)',
    category: 'media',
    free: '150MB',
    starter: '1GB',
    premium: '5GB',
    enterprise: '10GB',
  },
  {
    id: 'tagging-collections',
    label: 'Advanced tagging & Collections',
    category: 'media',
    free: false,
    starter: false,
    premium: true,
    enterprise: true,
  },
  {
    id: 'ndi-output',
    label: 'NDI Output',
    category: 'integrations',
    free: true,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'multi-branch',
    label: 'Multi-branch discount',
    category: 'size',
    free: false,
    starter: false,
    premium: true,
    enterprise: true,
  },
  {
    id: 'email-support',
    label: 'Email Support',
    category: 'support',
    free: true,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'community-support',
    label: 'Community support',
    category: 'support',
    free: true,
    starter: true,
    premium: true,
    enterprise: true,
  },
  {
    id: 'priority-support',
    label: 'Priority support',
    category: 'support',
    free: false,
    starter: false,
    premium: false,
    enterprise: true,
  },
  {
    id: 'custom-onboarding',
    label: 'Custom Onboarding & Training',
    category: 'support',
    free: false,
    starter: false,
    premium: false,
    enterprise: true,
  },
]

const liveConsoleProduct: PricingProductContent = {
  productBanner: {
    title: 'Live Console Desktop Application',
    description:
      'A lightweight, offline-first desktop app for Mac & Windows. Includes Hands-Free Bible, On-Screen Bible, Songbook, GO LIVE projection, and Media Library. Runs 100% without internet — ideal for any venue.',
    icon: 'desktop_windows',
    primaryCta: 'Download for windows',
    primaryHref: '/downloads',
    secondaryCta: 'Download for mac',
    secondaryHref: '/downloads',
  },
  plansHeader: {
    badge: 'QWORSHIP LIVE CONSOLE',
    heading: { before: 'Pricing for', accent: 'Q-worship Live Console' },
    subtitle:
      'Start your 30-day free trial today — no credit card required, no watermarks, no limits. One subscription covers your entire team on Mac and Windows.',
    tagline: "Choose the plan that's right for your church.",
  },
  plans: liveConsolePlans,
  includedHeading: 'Included with Every Plan',
  includedSubtitle:
    'No matter which tier you choose, every Live Console plan includes these core capabilities.',
  includedFeatures: liveConsoleIncludedFeatures,
  compareHeading: 'Compare Plans',
  compareSubtitle: "See exactly what's included in each tier.",
  compareRows: liveConsoleCompareRows,
  compareCategories: pricingCompareCategories,
  compareColumnLabels: {
    free: 'Free',
    starter: 'Starter',
    premium: 'Premium',
    enterprise: 'Enterprise',
  },
}

const cloudProduct: PricingProductContent = {
  productBanner: {
    title: 'Q-worship Cloud Presentation System',
    description:
      'The complete cloud-based church service platform. Build your full order of service with songs, Bible, announcements, videos, images, and a rich slide canvas — all in one place. Includes everything in the Live Console, and much more.',
    icon: 'cloud',
    primaryCta: 'Get Started for free',
    primaryHref: '/login',
  },
  plansHeader: {
    badge: 'QWORSHIP CLOUD',
    heading: { before: 'Pricing for', accent: 'Q-worship Cloud Presentation System' },
    subtitle:
      'Start your 30-day free trial today — no credit card required, no watermarks, no limits. One subscription covers your entire team.',
    tagline: "Choose the plan that's right for your church.",
  },
  plans: cloudPlans,
  includedHeading: 'Included with Every Plan',
  includedSubtitle:
    'No matter which tier you choose, every Cloud plan includes these core capabilities.',
  includedFeatures: cloudIncludedFeatures,
  compareHeading: 'Compare Plans',
  compareSubtitle: "See exactly what's included in each tier.",
  compareRows: cloudCompareRows,
  compareCategories: cloudCompareCategories,
  compareColumnLabels: {
    free: 'Free',
    starter: 'Essential',
    premium: 'Pro',
    enterprise: 'Enterprise',
  },
}

export const pricingProducts: Record<PricingProductId, PricingProductContent> = {
  'live-console': liveConsoleProduct,
  cloud: cloudProduct,
}

export function getPricingProduct(id: PricingProductId): PricingProductContent {
  return pricingProducts[id]
}

export const heroCopy = {
  badge: { label: 'NEW FEATURE RELEASE', version: 'V1.0.1 Complete Offline Capability' },
  badgeMobile: { label: 'NEW RELEASE', version: 'V1.0.1' },
  heading: {
    line1: 'Your church service,',
    line2: 'Powered by voice.',
  },
  body: "Meet Q-worship, The world's most powerful and complete church presentation platform, built by pastors for churches of all sizes .",
}

export const featuresHeroCopy = {
  badge: 'QWORSHIP FEATURES',
  heading: {
    accent: 'Everything',
    rest: 'your church needs',
  },
  body: "Q-worship brings together voice-powered Bible search, live projection, song management, multi integrations, and rich features — all built by pastors who've stood where you stand.",
  primaryCta: 'Download',
  secondaryCta: 'Get Started',
  image: '/Photos/features/Rectangle%2042300.png',
}

export const featuresSubNavItems: FeaturesSubNavItem[] = [
  { id: 'overview', label: 'Overview', href: '#overview' },
  { id: 'hands-free-bible', label: 'Hands-Free Bible', href: '#overview' },
  { id: 'on-screen-bible', label: 'On-screen Bible', href: '#on-screen-bible' },
  { id: 'songbook', label: 'Songbook', href: '#songbook' },
  { id: 'service-slides', label: 'Service Slides', href: '#service-slides' },
  { id: 'media', label: 'Media', href: '#media' },
  { id: 'lower-third-builder', label: 'Lower Third Builder', href: '#lower-third-builder' },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
]

export const handsFreeFeatureSpotlight: ChecklistSpotlightContent = {
  id: 'overview',
  title: {
    line1: 'Your Bible. Voice-first.',
    line2Before: 'Always ready,',
    accent: 'Online and Offline',
  },
  body: 'For ages, pastors have paused mid-sermon to wait for a verse. Q-worship ends that. Powered by our advanced speech-to-text engine, the Q-worship Hands-Free Bible listens as you lead, understanding natural language, retaining context, and instantly surfacing the exact scripture you need across major Bible translations.',
  checklist: [
    'Natural language processing for spoken references',
    "Session context retention — 'next verse', 'change to NIV' understood in context",
    'Full offline support — 31,406 verses cached locally across several Bible translations',
    "Sleep/wake commands ('thank you', 'amen' to dismiss)",
  ],
  cards: [
    {
      title: 'Voice Command Navigation',
      description:
        "Say a reference like 'John 3:16' or 'Psalm 23' and Q-worship finds it instantly. No typing, no clicking - just speak and the verse appears on screen.",
    },
    {
      title: 'Works Online and Offline',
      description:
        'No Wi Fi? No Problem. Q-worship is available in 2 usage modes - Online and Offline. Our voice Bible search works just as fast without internet as it does with internet.',
    },
    {
      title: 'Multiple Bible Versions',
      description:
        'Switch between all the major Bible translations- KJV, NKJV, MSG, AMP, GN, and NIV with a single voice command mid service. Your congregation hears the version that speaks to them',
    },
  ],
  image: '/Photos/feature%201.png',
  imageAlt: 'Church auditorium with Bible verse on screen',
  showListeningOverlay: false,
}

export const onScreenBibleSpotlight: AccordionSpotlightContent = {
  id: 'on-screen-bible',
  header: {
    line1: 'Effortless Manual Search',
    line2Before: 'Q-worship,',
    accent: 'On-screen Bible',
  },
  subtitle: {
    line1: 'A powerful visual editor for searching, selecting, and projecting Bible content.',
    line2: 'Search all 66 books, select verse ranges, and see a live preview before you go live.',
  },
  items: [
    {
      id: 'search',
      title: 'Search Across All 66 Books',
      description:
        'Type any reference or keyword in our on-screen Bible editor and Q-worship searches all 31,406 verses across all 66 Books in seconds. Enjoy flexible search, find the right verse before the congregation notices.',
    },
    {
      id: 'range',
      title: 'Surrounding Verse Range',
      description:
        'Select a single verse or expand to surrounding context with one click. Preview the full passage range before projecting so your congregation always sees the right amount of scripture.',
    },
    {
      id: 'versions',
      title: 'Version Navigation',
      description:
        'Switch between KJV, NKJV, NIV, MSG, ESV, NASB, NLT and more without leaving the editor. Your selected passage updates instantly across every translation you need.',
    },
  ],
  image: '/Photos/features/3.png',
  imageAlt: 'On-screen Bible editor interface',
}

export const postPastorsAccordionSpotlight: AccordionSpotlightContent = {
  id: 'hands-free-accordion',
  header: {
    line1: 'Effortless Manual Search',
    line2Before: 'Q-worship,',
    accent: 'On-screen Bible',
  },
  subtitle: {
    line1: 'A powerful visual editor for searching, selecting, and projecting Bible content.',
    line2: 'Search all 66 books, select verse ranges, and see a live preview before you go live.',
  },
  items: [
    {
      id: 'search',
      title: 'Search Across All 66 Books',
      description:
        'Type any reference or keyword in our on-screen Bible editor and Q-worship searches all 31,102 verses across all 66 Books in seconds. Enjoy flexible search, find the right verse before the congregation notices.',
    },
    {
      id: 'range',
      title: 'Surrounding Verse Range',
      description:
        'Select a single verse or expand to surrounding context with one click. Preview the full passage range before projecting so your congregation always sees the right amount of scripture.',
    },
    {
      id: 'versions',
      title: 'Version Navigation',
      description:
        'Switch between KJV, NKJV, NIV, MSG, ESV, NASB, NLT and more without leaving the editor. Your selected passage updates instantly across every translation you need.',
    },
  ],
  image: '/Photos/features/ghgh.png',
  imageAlt: 'Church auditorium with Philippians 4:13 on screen',
}

export const moreFeaturesAccordionSpotlight: AccordionSpotlightContent = {
  id: 'on-screen-bible-showcase',
  header: {
    line1: 'Effortless Manual Search',
    line2Before: 'Q-worship,',
    accent: 'On-screen Bible',
  },
  subtitle: {
    line1: 'A powerful visual editor for searching, selecting, and projecting Bible content.',
    line2: 'Search all 66 books, select verse ranges, and see a live preview before you go live.',
  },
  items: [
    {
      id: 'search',
      title: 'Search Across All 66 Books',
      description:
        'Type any reference or keyword in our on-screen Bible editor and Q-worship searches all 31,406 verses across all 66 Books in seconds. Enjoy flexible search, find the right verse before the congregation notices.',
    },
    {
      id: 'range',
      title: 'Surrounding Verse Range',
      description:
        'Select a single verse or expand to surrounding context with one click. Preview the full passage range before projecting so your congregation always sees the right amount of scripture.',
    },
    {
      id: 'versions',
      title: 'Version Navigation',
      description:
        'Switch between KJV, NKJV, NIV, MSG, ESV, NASB, NLT and more without leaving the editor. Your selected passage updates instantly across every translation you need.',
    },
  ],
  image: '/Photos/features/ghgh.png',
  imageAlt: 'Church auditorium with Philippians 4:13 on screen',
}

export const songbookFeatureSpotlight: ChecklistSpotlightContent = {
  id: 'songbook',
  title: {
    line1: 'Every lyric. Every section.',
    line2Before: '',
    accent: 'Always one click ahead.',
    gradientLine: 1,
  },
  body: "Q-worship's Songbook is a complete song management and live projection system built for worship teams. Build your library once, import from any format, and navigate every verse, chorus, and bridge with a single click — while your congregation sees perfectly formatted lyrics on the big screen in real time.",
  checklist: [
    'Section-based navigation — Verse, Chorus, Bridge, Pre-Chorus, Tag, Intro, Outro',
    'Real-time sync between control and projection windows',
    'Song import from TEXT, PDF, and DOCX files',
    'Easy to use song editor with undo/redo',
  ],
  cards: [
    {
      title: 'Section-Based Navigation',
      description:
        'Move through Verse, Chorus, Bridge, Tag, Intro, and Outro with a single click. Your worship leader always knows exactly where they are in the song — and the projection screen follows instantly, with zero lag.',
    },
    {
      title: 'Import from Any Format',
      description:
        'Already have your songs in Word, PDF, or plain text? Bring them straight in. Qworship parses your existing files and structures them into sections automatically — no manual re-entry, no copy-pasting, no starting from scratch.',
    },
    {
      title: 'Sing-Along Pace Setter',
      description:
        "Keep your congregation singing in sync with the Sing-Along Pace Setter — a real-time lyric progress indicator that highlights the current line as it's being sung. No more congregation falling behind or jumping ahead.",
    },
  ],
  image: '/Photos/features/song.png',
  imageAlt: 'Amazing Grace lyrics projected over a mountain landscape',
  showListeningOverlay: false,
}

export const prePastorsHandsFreeSpotlight: ChecklistSpotlightContent = {
  id: 'hands-free-bible',
  title: {
    line1: 'Your Bible. Hands-free.',
    line2Before: 'Always ready,',
    accent: 'Online and Offline',
  },
  body: 'For ages, pastors have paused mid-sermon to wait for a verse. Q-worship ends that. Powered by our advanced speech-to-text engine, the Q-worship Hands-Free Bible listens as you lead, understanding natural language, retaining context, and instantly surfacing the exact scripture you need across major Bible translations.',
  checklist: [
    'Natural language processing for spoken references',
    "Session context retention — 'next verse', 'change to NIV' understood in context",
    'Full offline support — 31,406 verses cached locally across several Bible translations',
    "Sleep/wake commands ('thank you', 'amen' to dismiss)",
  ],
  cards: [
    {
      title: 'Voice Command Navigation',
      description:
        "Say a reference like 'John 3:16' or 'Psalm 23' and Q-worship finds it instantly. No typing, no clicking - just speak and the verse appears on screen.",
    },
    {
      title: 'Works Online and Offline',
      description:
        'No Wi Fi? No Problem. Q-worship is available in 2 usage modes - Online and Offline. Our voice Bible search works just as fast without internet as it does with internet.',
    },
    {
      title: 'Multiple Bible Versions',
      description:
        'Switch between all the major Bible translations- KJV, NKJV, MSG, AMP, GNT, and NIV with a single voice command mid service. Your congregation hears the version that speaks to them',
    },
  ],
  image: '/Photos/features/song.png',
  imageAlt: 'Amazing Grace lyrics projected over a mountain landscape',
  showListeningOverlay: true,
}

export const serviceSlidesAccordionSpotlight: AccordionSpotlightContent = {
  id: 'service-slides',
  header: {
    line1: 'Build your entire service.',
    line2Before: '',
    accent: 'Slide by slide. In minutes.',
  },
  subtitle: {
    line1:
      "Qworship's Service Slides system lets you build a complete order of service — announcements, scripture, song lyrics, videos, image slides, and custom canvas slides — all in one place. Every item is a slide. Every slide is live-ready. And when it's time to go, one click puts it all on screen.",
    line2: '',
  },
  items: [
    {
      id: 'builder',
      title: 'Drag-and-Drop Service Builder',
      description:
        'Organise your entire service into sections — Pre-Service, Warm-Up, Service Items, and Post-Service Loop — and populate each one with songs, Bible verses, announcements, videos, image slides, or custom canvas slides. Your service order is always exactly how you want it.',
    },
    {
      id: 'canvas',
      title: 'Custom Slide Canvas',
      description:
        'Design bespoke slides directly inside Qworship with the built-in Slide Canvas editor. Add headlines, subheadings, body text, images, and QR codes — then position every element exactly where you want it. No external design tool needed; your custom slides live right alongside your scripture and song content.',
    },
    {
      id: 'preview',
      title: 'Live Preview Before You Go Live',
      description:
        'Every slide in your service generates a real-time preview before it hits the big screen. See exactly what your congregation will see — background, text, layout, and all — before you click GO LIVE. No wrong slides. No awkward corrections. No surprises mid-service.',
    },
  ],
  image: '/Photos/feature%203.png',
  imageAlt: 'Service Slides canvas editor with Easter slide preview',
}

export const serviceSlidesSpotlight: ChecklistSpotlightContent = {
  id: 'service-slides',
  title: {
    line1: 'Your Service.',
    line2Before: '',
    accent: 'Fully in Your Hands.',
  },
  body: buildTabItems.find((tab) => tab.id === 'service')!.description,
  checklist: buildTabItems.find((tab) => tab.id === 'service')!.features.slice(0, 4),
  cards: [
    {
      title: 'Unified Service Order',
      description:
        'Your songs, scriptures, announcements and media — all in one place, all in the right order, all ready to go live the moment you need them.',
    },
    {
      title: 'Reorder On the Fly',
      description:
        'Reorder items on the fly without losing your work. Navigate your whole service with simple keyboard shortcuts.',
    },
    {
      title: 'Auto-Save & Resume',
      description:
        'Your service saves automatically, every step of the way. Pick up exactly where you left off, every time.',
    },
  ],
  image: '/Photos/Service%20order.png',
  imageAlt: 'Service order management interface',
}

export const mediaAccordionSpotlight: AccordionSpotlightContent = {
  id: 'media',
  header: {
    line1: 'The right background for every verse, song or',
    line2Before: 'announcement.',
    accent: 'Found in seconds, not minutes.',
  },
  subtitle: {
    line1:
      "Qworship's dual-layer Media Library gives your team instant access to a curated collection of platform-provided worship\nbackgrounds and motion videos, alongside every asset your church has ever uploaded.\nOne searchable, tag-organised library — so the right visual is always one click away,\nnever buried in a folder somewhere.",
    line2: '',
  },
  items: [
    {
      id: 'cloud-assets',
      title: 'Cloud + Your Own Assets',
      description:
        'Browse a built-in library of professionally curated worship backgrounds, motion videos, and seasonal templates — or upload your own images, videos, and audio files. Everything lives in one place, searchable and filterable, so your operator never has to leave Qworship to find what they need.',
    },
    {
      id: 'tags',
      title: 'Advanced Tag System & Collections',
      description:
        'Tag every asset by mood, colour, season, theme, or service item type. Filter by category, browse by collection, and find the right background in seconds — even with hundreds of assets in your library. The more your library grows, the faster you find things.',
    },
    {
      id: 'thumbnails',
      title: 'Video Thumbnail Generation',
      description:
        'Every video file you upload automatically generates a visual thumbnail using FFmpeg. Browse your entire motion background library visually — no playing files one by one to find the right one. What you see is exactly what you get on screen.',
    },
  ],
  image: '/Photos/feature%204.png',
  imageAlt: 'Media library background picker with Matthew 8:20 verse preview',
}

export const mediaFeatureSpotlight: ChecklistSpotlightContent = {
  id: 'media',
  title: {
    line1: 'Keep Your Church',
    line2Before: '',
    accent: 'In the Loop',
  },
  body: buildTabItems.find((tab) => tab.id === 'announcements')!.description,
  checklist: buildTabItems.find((tab) => tab.id === 'announcements')!.features.slice(0, 4),
  cards: [
    {
      title: 'In-Service Announcements',
      description:
        'Slide your announcements, countdowns and notices straight into your service — no switching apps, no second screen, no interruptions.',
    },
    {
      title: 'Countdown Timers',
      description:
        'Add a countdown so your congregation knows when things start. Customise the look to match your church\'s style.',
    },
    {
      title: 'Seamless Transitions',
      description:
        'Move seamlessly from announcements into worship. Everything on one screen, always under your control.',
    },
  ],
  image: '/Photos/Announcements.png',
  imageAlt: 'Announcements and media projection interface',
}

export const lowerThirdBuilderSpotlight: ChecklistSpotlightContent = {
  id: 'lower-third-builder',
  title: {
    line1: 'Professional broadcast Lower Third.',
    line2Before: '',
    accent: 'Built right in. No extra software.',
  },
  body: "Qworship's In-Built Lower Third Builder lets you create, style, and display broadcast-quality lower thirds — speaker names, scripture references, song titles, announcements — directly from inside the platform. No After Effects, no external graphics software, no extra operator. Your stream and your in-room display look professional from the very first service.",
  checklist: [
    'Built-in lower third editor — no external software needed',
    'Custom text, colours, fonts, and logo support',
    'Live push to projection screen and OBS simultaneously',
    'Syncs with service order for seamless live operation',
  ],
  cards: [
    {
      title: 'Design Without Leaving Qworship',
      description:
        "Build lower thirds directly inside Qworship using the built-in editor. Add speaker names, titles, scripture references, or any custom text — then style them with your church's colours, fonts, and logo. No external design tool, no file exports, no switching between apps mid-service.",
    },
    {
      title: 'Live Display on Screen and Stream',
      description:
        'Push your lower thirds to the projection screen and OBS simultaneously with one click. What your in-room congregation sees is exactly what your online audience sees — branded, consistent, and perfectly timed to the moment it\'s needed.',
    },
    {
      title: 'Instant Recall During Service',
      description:
        'Save your most-used lower thirds — speaker names, sermon series titles, recurring announcements — and recall them instantly during a live service. No rebuilding from scratch each week. Your graphics are ready before your worship team arrives.',
    },
  ],
  image: '/Photos/features/song.png',
  imageAlt: 'Amazing Grace lyrics projected over a mountain landscape',
  showListeningOverlay: false,
}

export const guideCards: GuideCard[] = [
  {
    id: 'live-console-first-sunday',
    categoryId: 'general',
    title: 'Setting up Q-worship Live Console for your first Sunday',
    titleLines: {
      line1: 'Setting up Q-worship Live Console',
      line2: 'for your first Sunday',
    },
    description:
      'Connect your displays, walk through the Live Console layout, and run a quick test so your team is ready before the congregation arrives.',
    image: '/Photos/On-screen%20bible.png',
    imageAlt: 'Q-worship Live Console Bible interface',
    article: {
      title: {
        line1: 'Your first Sunday.',
        line2Before: 'Set up the Live Console with',
        accent: 'confidence.',
      },
      body: 'The Live Console is where your operator runs the entire service — scripture, lyrics, announcements, and media from one screen. Start by connecting your main and stage displays, then open a sample service order to familiarise your team with the GO LIVE workflow. A five-minute test run on Saturday saves every awkward pause on Sunday morning.',
    },
    steps: {
      summary: 'A step-by-step walkthrough for your first live service — from install to wrap-up.',
      sections: [
        {
          id: 'before-the-service',
          label: 'Before the Service',
          description:
            "Arrive at least 30 minutes before the service starts. These steps take under 10 minutes once you've done them once — but give yourself time the first week.",
          steps: [
            {
              id: 'download-and-install',
              title: 'Download and Install Q-worship',
              body: 'Download the Q-worship Live Console installer for your operating system (Windows or macOS) from Q-worship.com/download. Run the installer and follow the on-screen prompts. The app installs in under two minutes and requires no server setup.',
              checklist: [
                'Windows 10/11 (64-bit) or macOS 11+',
                'Minimum 4GB RAM, 2GB free disk space',
                'Internet connection for first-time Bible data download',
                'Projector or secondary display connected',
              ],
            },
            {
              id: 'launch-and-login',
              title: 'Launch Q-worship and Login',
              body: 'Open the Live Console and sign in with your church account. Your Bible translations, songbook, and saved service orders sync automatically the first time you log in.',
            },
            {
              id: 'configure-microphone',
              title: 'Configure Your Microphone (Hands-free Bible)',
              body: "Open Settings > Audio and select the microphone your pastor will use at the pulpit. Run the quick calibration prompt so Q-worship recognises the stage mic clearly before the service starts.",
            },
            {
              id: 'setup-projection-display',
              title: 'Set-up Your Projection Display for Go-Live',
              body: 'Under Display, assign your projector or secondary screen as the output. Use Preview mode to confirm the audience sees exactly what’s on the output screen, separate from your operator view.',
            },
            {
              id: 'load-songs',
              title: 'Load Your Songs to Songbook',
              body: "Import or search for this week's setlist in the Songbook tab. Arrange verse and chorus order for each song so your operator can jump between sections with a single click during worship.",
            },
          ],
        },
        {
          id: 'during-the-service',
          label: 'During the Service',
          description:
            "Once you're live, the console does the heavy lifting. Follow these steps to keep scripture, songs, and slides moving without a hitch.",
          steps: [
            {
              id: 'go-live',
              title: 'Go Live',
              body: 'Toggle GO LIVE from the Live Console to start sending output to the projector. A status indicator confirms the audience display is active before you begin.',
            },
            {
              id: 'follow-hands-free-bible',
              title: 'Follow Along with the Hands-Free Bible',
              body: 'When your pastor references a verse aloud, Q-worship listens, matches the reference, and puts it on screen automatically — no typing, no searching mid-sermon.',
            },
            {
              id: 'switch-songs-scripture',
              title: 'Switch Between Songs and Scripture',
              body: 'Use the Bible, Songs, and Slides tabs to move between service elements without breaking the flow. Each tab remembers your last position so transitions stay smooth.',
            },
            {
              id: 'handle-changes',
              title: 'Handle Last-Minute Changes',
              body: 'If the order changes on the fly, drag any item to a new position in the queue or search for a new song or verse directly — the audience display updates the moment you confirm.',
            },
          ],
        },
        {
          id: 'after-the-service',
          label: 'After the Service',
          description: 'Wrapping up well makes next Sunday easier. A few minutes now saves guesswork later.',
          steps: [
            {
              id: 'exit-live',
              title: 'Exit Live and Review',
              body: 'Select EXIT LIVE to end output cleanly. Q-worship logs the songs and scriptures used so you can reference them for next week’s planning.',
            },
            {
              id: 'save-order',
              title: "Save This Week's Service Order",
              body: "Save the current order as a template if it worked well, so next Sunday's setup starts from a working baseline instead of a blank slate.",
            },
            {
              id: 'note-fixes',
              title: 'Note Any Fixes for Next Time',
              body: 'Jot down anything that needs adjusting — mic levels, display timing, song order — directly in the service notes so your team can improve before the next service.',
            },
          ],
        },
      ],
    },
    cloudSteps: {
      summary: 'A lightweight walkthrough for running your first service entirely from the browser.',
      sections: [
        {
          id: 'cloud-overview',
          label: 'Get Started in the Browser',
          description:
            "No install, no downloads — sign in and you're ready to go live from any computer.",
          steps: [
            {
              id: 'sign-in-browser',
              title: 'Sign In at cloud.q-worship.com',
              body: 'Open any modern browser, go to cloud.q-worship.com, and sign in with your church account. Your Bible translations, songbook, and saved service orders are already synced from the Live Console.',
            },
            {
              id: 'open-output-window',
              title: 'Open the Output Window',
              body: 'Click "Open Output" to launch a second browser window, drag it onto your projector or secondary display, and make it full screen.',
            },
            {
              id: 'run-service-cloud',
              title: 'Run the Service',
              body: 'Use the same Bible, Songs, and Slides controls as the desktop app, right in your browser tab, to advance through your service order.',
            },
            {
              id: 'share-service-link',
              title: 'Share a View-Only Link',
              body: "Need a volunteer to follow along remotely? Generate a share link so they can see the live output from their own device without needing an account.",
            },
          ],
        },
      ],
    },
  },
  {
    id: 'no-need-to-type-announcements',
    categoryId: 'general',
    title: 'Announcements, ready without a script',
    titleLines: {
      line1: 'Announcements, ready',
      line2: 'without a script',
    },
    description:
      'Build polished Sunday announcement slides in minutes — welcome messages, event promos, and countdowns that match your church brand.',
    image: '/Photos/Announcements.png',
    imageAlt: 'Sunday announcements slide preview',
    article: {
      title: {
        line1: 'Announcements that look professional.',
        line2Before: 'Built in minutes,',
        accent: 'not hours.',
      },
      body: "Sunday announcements set the tone before worship begins. With Q-worship's Service Slides, you can design welcome slides, event promos, and countdown timers using templates that match your church brand — then drop them straight into your service order. No switching apps, no last-minute PowerPoint edits.",
    },
  },
  {
    id: 'no-need-to-type-stage',
    categoryId: 'general',
    title: 'No need to Type. Just Speak',
    titleLines: {
      line1: 'No need to Type.',
      line2: 'Just Speak',
    },
    description:
      'Stay in the moment at the pulpit — say a reference out loud and Q-worship finds the verse and puts it on screen instantly.',
    image: '/Photos/hands-free-stage.png',
    imageAlt: 'Pastor using hands-free Bible search on stage',
    imageFit: 'cover',
    article: {
      title: {
        line1: 'Your Bible. Hands-free.',
        line2Before: 'Always ready,',
        accent: 'Online and Offline',
      },
      body: 'For ages, pastors have paused mid-sermon to wait for a verse. Q-worship ends that. Powered by our advanced speech-to-text engine, the Q-worship Hands-Free Bible listens as you lead, understanding natural language, retaining context, and instantly surfacing the exact scripture you need across major Bible translations.',
    },
  },
  {
    id: 'first-sunday-checklist',
    categoryId: 'general',
    title: 'Your first Sunday checklist',
    titleLines: {
      line1: 'Your first Sunday',
      line2: 'checklist',
    },
    description:
      'Walk through service order setup, display outputs, and a quick rehearsal so your team is confident before doors open.',
    image: '/Photos/Easy%20to%20use.png',
    imageAlt: 'Q-worship Live Console multi-panel setup view',
    article: {
      title: {
        line1: 'Ready before doors open.',
        line2Before: 'A checklist for',
        accent: 'your first Sunday.',
      },
      body: 'A smooth first Sunday starts the night before. Build your service order with every song, scripture, and announcement in sequence. Confirm display outputs on both sanctuary and stage screens. Assign roles — who runs the console, who handles lyrics, who manages media. Finish with a full run-through in presentation mode so every transition feels natural when the congregation arrives.',
    },
    steps: {
      summary: 'A practical checklist to get your team ready before doors open.',
      sections: [
        {
          id: 'plan-the-order',
          label: 'Plan the Order',
          description: 'Start planning a few days out so nothing is left to guesswork on Sunday morning.',
          steps: [
            {
              id: 'build-service-order',
              title: 'Build the Service Order',
              body: "List every item — songs, scripture readings, announcements, and media — in the sequence they'll happen. Group them into sections like Pre-Service, Worship, and Message so the flow is easy to follow at a glance.",
            },
            {
              id: 'confirm-scripture-references',
              title: 'Confirm Scripture References',
              body: 'Double check every verse reference in your service order against the translation your church uses. A quick pass now avoids a wrong reference showing up live.',
            },
            {
              id: 'time-announcements',
              title: 'Time the Announcements',
              body: "Keep welcome and announcement slides to a fixed window so they don't run long. A countdown timer keeps the pre-service segment on schedule.",
            },
          ],
        },
        {
          id: 'confirm-displays-roles',
          label: 'Confirm Displays & Roles',
          description: 'With the order set, make sure every screen and every teammate knows their part.',
          steps: [
            {
              id: 'test-outputs',
              title: 'Test Sanctuary and Stage Outputs',
              body: 'Connect both the main sanctuary screen and the stage confidence monitor, then confirm each shows the correct content — lyrics on stage, full slides for the congregation.',
            },
            {
              id: 'assign-roles',
              title: 'Assign Operator Roles',
              body: "Decide who runs the console, who manages media cues, and who's on standby for last-minute changes. Clear roles prevent two people reaching for the same control mid-service.",
            },
            {
              id: 'check-audio-routing',
              title: 'Check Audio Routing',
              body: "Confirm the stage microphone feeding the Hands-Free Bible is the correct input, and that monitor audio isn't picked up as a false trigger.",
            },
          ],
        },
        {
          id: 'run-the-rehearsal',
          label: 'Run the Rehearsal',
          description: "One full run-through catches the small things a written plan can't.",
          steps: [
            {
              id: 'walk-full-order',
              title: 'Walk the Full Order in Presentation Mode',
              body: 'Run through every item in your service order exactly as it will play Sunday, including transitions between songs, scripture, and announcements.',
            },
            {
              id: 'time-run-through',
              title: 'Time the Full Run-Through',
              body: 'Note how long the walkthrough takes versus your target service length, and trim or adjust pacing where needed.',
            },
            {
              id: 'debrief-team',
              title: 'Debrief with the Team',
              body: 'Gather the operator and any stage volunteers for a two-minute recap — what worked, what to watch for — so everyone starts Sunday morning aligned.',
            },
          ],
        },
      ],
    },
    cloudSteps: {
      summary: 'The same first-Sunday checklist, adapted for teams running entirely from the Cloud Presentation System.',
      sections: [
        {
          id: 'cloud-overview',
          label: 'Cloud Checklist Overview',
          description: 'Everything from the desktop checklist still applies — just swap install steps for a browser tab.',
          steps: [
            {
              id: 'build-order-cloud',
              title: 'Build the Order Online',
              body: 'Sign in at cloud.q-worship.com and build your service order the same way you would in the desktop app — no install required.',
            },
            {
              id: 'test-browser-output',
              title: 'Test the Browser Output',
              body: 'Open the output window on the sanctuary display and confirm it renders correctly in full-screen before doors open.',
            },
            {
              id: 'confirm-network',
              title: 'Confirm a Stable Connection',
              body: "Since the Cloud Presentation System runs live over the internet, confirm your venue's Wi-Fi or ethernet connection is stable before the rehearsal.",
            },
          ],
        },
      ],
    },
  },
  {
    id: 'songbook-live',
    categoryId: 'general',
    title: 'Project lyrics during live worship',
    titleLines: {
      line1: 'Project lyrics during',
      line2: 'live worship',
    },
    description:
      'Switch songs quickly, follow verse and chorus sections, and keep the band and congregation in sync from the Live Console.',
    image: '/Photos/Praise%20and%20Worship.png',
    imageAlt: 'Worship lyrics on screen',
    imageFit: 'cover',
    article: {
      title: {
        line1: 'Every lyric. Every section.',
        line2Before: '',
        accent: 'Always one click ahead.',
      },
      body: "During live worship, timing is everything. Q-worship's Songbook lets your operator jump between verses, choruses, and bridges with a single click while the congregation sees perfectly formatted lyrics on the big screen. Real-time sync between the control window and projection output means the band, the operator, and the congregation are always on the same bar.",
    },
  },
  {
    id: 'service-slides-order',
    categoryId: 'general',
    title: 'Plan your service flow',
    titleLines: {
      line1: 'Plan your service',
      line2: 'flow',
    },
    description:
      'Arrange songs, scripture, media, and announcements in one timeline so every moment of your service flows smoothly.',
    image: '/Photos/Service%20order.png',
    imageAlt: 'Service slide order',
    article: {
      title: {
        line1: 'Your Service.',
        line2Before: '',
        accent: 'Fully in Your Hands.',
      },
      body: 'A great service is a story told in order. Q-worship\'s Service Slides system lets you arrange every item — songs, scripture, announcements, videos, and custom slides — into sections like Pre-Service, Worship, and Message. Drag to reorder on the fly, preview each slide before going live, and navigate the entire flow with simple keyboard shortcuts.',
    },
    steps: {
      summary: 'Arrange every part of your service into one smooth, presentable flow.',
      sections: [
        {
          id: 'build-the-timeline',
          label: 'Build the Timeline',
          description: 'Lay out every part of the service before you touch a single cue.',
          steps: [
            {
              id: 'create-sections',
              title: 'Create Service Sections',
              body: 'Start with sections like Pre-Service, Worship, and Message, then drop songs, scripture, announcements, and media into each one as you plan the flow.',
            },
            {
              id: 'add-custom-slides',
              title: 'Add Custom Slides',
              body: "Use the slide editor to design one-off content — sermon titles, event promos, or scripture callouts — that don't belong to a song or Bible passage.",
            },
            {
              id: 'insert-media-cues',
              title: 'Insert Media Cues',
              body: 'Drop videos or images directly into the timeline where they belong in the service, so playback triggers automatically in sequence.',
            },
          ],
        },
        {
          id: 'preview-reorder',
          label: 'Preview & Reorder',
          description: 'Check your work and adjust before anyone sees it live.',
          steps: [
            {
              id: 'preview-each-slide',
              title: 'Preview Each Slide',
              body: 'Step through the timeline in preview mode to catch typos, mistimed cues, or slides in the wrong order before the service starts.',
            },
            {
              id: 'drag-to-reorder',
              title: 'Drag to Reorder',
              body: 'If the pastor moves a segment or drops an item, drag it to its new position in the timeline — the rest of the order shifts automatically.',
            },
            {
              id: 'save-as-template',
              title: 'Save as a Reusable Template',
              body: "Once the flow feels right, save the section layout as a template so future services start from a proven structure.",
            },
          ],
        },
        {
          id: 'go-live',
          label: 'Go Live',
          description: 'Keep both hands free and your eyes on the room while you run the service.',
          steps: [
            {
              id: 'navigate-shortcuts',
              title: 'Navigate with Keyboard Shortcuts',
              body: 'Use simple keyboard shortcuts to move forward and backward through the timeline without touching the mouse, keeping your eyes on the room.',
            },
            {
              id: 'handle-adjustments',
              title: 'Handle On-the-Fly Adjustments',
              body: 'Jump to any section directly from the timeline if the service order changes mid-service — no need to click through everything in between.',
            },
            {
              id: 'close-out',
              title: 'Close Out the Service',
              body: 'End on your closing slide or media cue, then archive the timeline so it’s available for reference next time you plan a similar service.',
            },
          ],
        },
      ],
    },
    cloudSteps: {
      summary: 'Build and run the same service flow from any browser, with nothing to install.',
      sections: [
        {
          id: 'cloud-overview',
          label: 'Cloud Overview',
          description: 'The Cloud Presentation System mirrors the desktop timeline, so your flow stays identical.',
          steps: [
            {
              id: 'open-timeline-cloud',
              title: 'Open Your Timeline in the Browser',
              body: 'Sign in at cloud.q-worship.com to access the same service timeline you built on desktop, synced automatically.',
            },
            {
              id: 'preview-cloud',
              title: 'Preview from Any Device',
              body: 'Step through the timeline from a laptop, tablet, or shared computer — no software installation needed on the machine running the display.',
            },
            {
              id: 'go-live-cloud',
              title: 'Go Live from the Browser',
              body: 'Open the output window on your display screen and control playback from a second tab or device, keeping the same keyboard shortcuts as desktop.',
            },
          ],
        },
      ],
    },
  },
]

export const guidesHeroCopy = {
  badge: 'ARTICLES & GUIDES',
  heading: {
    accent: 'Everything',
    rest: 'your church needs',
  },
  body: featuresHeroCopy.body,
  primaryCta: 'Download',
  secondaryCta: 'Get Started online',
  image: featuresHeroCopy.image,
}

export const guidesCategoryItems: GuideCategoryItem[] = [
  { id: 'general', label: 'General' },
  { id: 'my-first-sunday', label: 'My first Sunday' },
  { id: 'hands-free-bible', label: 'Hands-Free Bible' },
  { id: 'my-songbook', label: 'My Songbook' },
  { id: 'service-slides', label: 'Service Slides' },
  { id: 'media', label: 'Media' },
  { id: 'lower-third', label: 'Lower third' },
]

export function getGuideById(id: string): GuideCard | undefined {
  return guideCards.find((guide) => guide.id === id)
}

export function getRelatedGuides(currentGuideId: string, categoryId: string, limit = 3): GuideCard[] {
  const sameCategory = guideCards.filter(
    (guide) => guide.categoryId === categoryId && guide.id !== currentGuideId,
  )
  const others = guideCards.filter(
    (guide) => guide.categoryId !== categoryId && guide.id !== currentGuideId,
  )

  return [...sameCategory, ...others].slice(0, limit)
}

export function getGuideArticleContent(guideId: string): GuideArticleContent {
  const guide = getGuideById(guideId)
  if (guide) {
    return guide.article
  }

  return {
    title: { line1: 'Guide not found' },
    body: '',
  }
}

const guideCardDescription =
  'Stay in the moment. Just say the reference out loud — Qworship hears you, finds the verse, and puts it on screen. No pausing, no searching, no breaking your stride at the pulpit.'

export const faqsHeroCopy = {
  badge: 'FAQS',
  heading: {
    line1: 'Your Questions',
    accent: 'Answered',
  },
  body: featuresHeroCopy.body,
  primaryCta: 'Download',
  secondaryCta: 'Get Started online',
  image: featuresHeroCopy.image,
}

export const faqCategoryItems: FaqCategoryItem[] = [
  { id: 'general', label: 'General' },
  { id: 'hands-free-bible', label: 'Hands-Free Bible' },
  { id: 'offline-and-online', label: 'Offline and Online' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'service-slides', label: 'Service Slides' },
  { id: 'my-media', label: 'My Media' },
  { id: 'lower-third', label: 'Lower Third' },
]

import { faqItems, pricingFaqTeaserItems } from '@/lib/faqPool'

export { faqItems, pricingFaqTeaserItems }

export const downloadsPageCopy: DownloadsPageCopy = {
  banner: {
    title: 'Get Started',
    image: downloadBannerImage,
    imageAlt: 'Pastor speaking on stage',
  },
  product: {
    title: 'Download',
    subtitle: 'Q-worship Live Console',
    version: 'Version 1.1.2 (35258370)',
    highlights: 'Accuracy Improvements, Offline',
    date: 'June 25, 2026',
    image: featuresHeroCopy.image,
    imageAlt: 'Team collaborating on church presentation software',
  },
  platforms: [
    { id: 'windows', label: 'Windows', icon: 'windows' },
    { id: 'mac', label: 'Mac Os', icon: 'mac' },
  ],
  resourceLinks: [
    { id: 'feature-updates', label: 'Feature Updates', icon: 'featured_play_list' },
    { id: 'release-notes', label: 'Release Notes', icon: 'description' },
    { id: 'system-specifications', label: 'System Specifications', icon: 'layers' },
  ],
  onlineCta: {
    heading: { before: 'Prefer to use', accent: 'Q-worship online ?' },
    body: guideCardDescription,
    primaryCta: 'Download',
    secondaryCta: 'Get started online',
    image: downloadOnlineCtaImage,
    imageAlt: 'Church auditorium with scripture on screen',
  },
}

export const aboutHeroCopy = {
  badge: 'WHO WE ARE',
  heading: { before: 'About', accent: 'Q-worship' },
  body: "Q-worship brings together voice-powered Bible search, live projection, song management, multi integrations, and rich features — all built by pastors who've stood where you stand.",
  image: featuresHeroCopy.image,
  imageAlt: 'Team collaborating on church presentation software',
}

export const aboutCoreBeliefs: CoreBelief[] = [
  {
    id: 'create',
    icon: 'create',
    title: 'Create',
    description:
      'Technologies that dramatically enhance environments and champion the user.',
  },
  {
    id: 'develop',
    icon: 'develop',
    title: 'Develop',
    description: 'Practical church software that is stable, affordable, and easy to use',
  },
  {
    id: 'enable',
    icon: 'enable',
    title: 'Enable',
    description:
      'Oganizations to afford and benefit from these technologies by reducing cost and complexity.',
  },
]

const aboutInsightBody =
  "Q-worship brings together voice-powered Bible search, live projection, song management, multi integrations, and rich features — all built by pastors who've stood where you stand."

export const aboutInsights = {
  heading: 'Our collective insights are driven by experience but fueled by passion.',
  items: [
    {
      image: '/Photos/features/ghgh.png',
      imageAlt: 'Church presentation software on laptop in auditorium',
      highlighted: true,
      title: 'Focus is everything',
      description: aboutInsightBody,
    },
    {
      image: pastorForPastor,
      imageAlt: 'Pastor speaking on stage',
      title: 'Focus is everything',
      description: aboutInsightBody,
    },
  ] satisfies InsightCard[],
}

const aboutWorkBenefitDescription =
  'Take a break, recover, or get to an appointment, with paid time off. Starting with 16 paid days off and 7 paid holidays.'

export const aboutWorkBenefits: WorkBenefit[] = Array.from({ length: 6 }, () => ({
  title: 'Profit Sharing',
  description: aboutWorkBenefitDescription,
}))

export const aboutJobOpeningsCopy = {
  title: 'Current openings at Q-worship',
  intro:
    "Discover your own story while helping us empower others to tell theirs through our video software. Q-worship is growing! We need some first class individuals to help us achieve our goals. With the success of our products, the opportunities abound. We're very excited about our future and are eager to expand our team with passionate individuals looking to make a difference. Not all positions are needed immediately, but are listed here in case an exceptional candidate is discovered.",
}

export const aboutJobOpenings: JobOpening[] = [
  {
    id: 'core-rust',
    category: 'Core',
    title: 'Core Software Engineer | Rust',
    location: 'Remote',
    status: 'Active',
    intro:
      'As a Renewed Vision Core Software Engineer, you will develop the infrastructure and working technologies that power our platform.',
    philosophy:
      'We are looking for someone who enjoys working on the parts of an application that are invisible to the end user. You are language-agnostic and believe that innovation comes from discovery. You prioritize memory safety and concurrency in your work.',
    skillsHeading: 'We are looking for individuals who possess the following skills:',
    skills: [
      'Proficiency in developing applications using Rust and modern C++',
      'Experience in building libraries that can be utilized across multiple platforms',
      'Ability to pay attention to details while understanding the significance of timely updates',
      'Understanding of when to prioritize refactoring and when to defer it',
      'Consistent willingness to learn and grow both personally and professionally',
    ],
    valuesHeading: 'Additionally, we highly value individuals who:',
    values: [
      'Are skilled in another programming language such as C# or Swift',
      'Possess exceptional written and verbal communication skills',
      'Take responsibility for projects, thrive with loosely defined specifications, and drive towards achieving results',
    ],
    idealHeading: 'Our top engineers will ideally have:',
    ideal: [
      'Experience in writing and debugging high-performance multi-threaded libraries',
      'Familiarity with video and audio frameworks and low-level rendering',
      'Hands-on experience developing multithreaded, decoupled systems using actor frameworks and async/await, emphasizing message-driven design, non-blocking I/O, and memory-safe concurrency',
    ],
  },
  {
    id: 'core-macos',
    category: 'Core',
    title: 'MacOS Software Engineer',
    location: 'Remote',
    status: 'Active',
    intro:
      'Join the Q-worship engineering team to build native macOS experiences for churches around the world.',
    philosophy:
      'You will help shape desktop software that pastors and tech volunteers rely on every Sunday. More details for this role will be published soon.',
  },
  {
    id: 'sales-marketing',
    category: 'Sales',
    title: 'Sales & Marketing Representatives',
    location: 'South Africa',
    status: 'Active',
    intro:
      'Help Q-worship reach churches across South Africa through relationship-driven sales and marketing.',
    philosophy:
      'We are looking for passionate communicators who understand ministry needs and can represent Q-worship with integrity. Full role details coming soon.',
  },
  {
    id: 'core-windows',
    category: 'Core',
    title: 'Windows Software Engineer',
    location: 'Remote',
    status: 'Active',
    intro:
      'Build reliable Windows-native features for Q-worship’s church presentation platform.',
    philosophy:
      'You will work on performance-critical desktop software used in live services. Additional requirements for this role will be added soon.',
  },
]

export const jobApplicationCountries = [
  'United States',
  'Canada',
  'United Kingdom',
  'South Africa',
  'Australia',
  'Other',
]

export function getJobOpeningById(id: string): JobOpening | undefined {
  return aboutJobOpenings.find((opening) => opening.id === id)
}

export const aboutFaqTeaserItems: FaqItem[] = [
  faqItems.find((item) => item.id === 'what-is-qworship')!,
  faqItems.find((item) => item.id === 'who-is-it-for')!,
  { ...faqItems.find((item) => item.id === 'who-is-it-for')!, id: 'who-is-it-for-duplicate' },
  faqItems.find((item) => item.id === 'operating-systems')!,
]

export const authShowcaseSlides = [
  {
    id: 'hands-free-bible',
    image: '/Photos/login/Group%201171276018.png',
    alt: 'Hands-free Bible voice search with scripture on screen',
    title: 'Q-worship Hands free Bible',
    body: 'Your church service, Powered by voice.',
    badge: 'AI Features',
  },
  {
    id: 'on-screen-bible',
    image: '/Photos/login/Group%201171276012.png',
    alt: 'On-screen Bible search and verse selection',
    title: 'On-screen Bible',
    body: 'Search any scripture across all 66 books in seconds.',
  },
  {
    id: 'announcements',
    image: '/Photos/login/image%20149.png',
    alt: 'Sunday announcements slide preview',
    title: 'Announcements',
    body: 'Keep your church in the loop — right inside your service.',
  },
  {
    id: 'entire-team',
    image: '/Photos/login/Group%201171276012.png',
    alt: 'Team collaboration with live production tools',
    title: 'Built For the Entire Team',
    body: 'Built with tools to support the entire team',
  },
] as const

/** @deprecated Use authShowcaseSlides */
export const loginShowcaseSlides = authShowcaseSlides

export const images = {
  logo: '/Photos/logo.png',
  heroFrame: '/Photos/Frame%201171275872.png',
  handsFreeFrame: '/Photos/Group%201171275977.png',
  handsFreeStage: '/Photos/hands-free-stage.png',
  rectanglePortrait,
  hero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDYGRFuNG4vm0daVzCMIGtTpA6iHCAbNtv6ej8DEBg6PyDtB8seToBnjMS1VeB_k7LSZqFV-pBiavQRDS-QNCdmpng92C8uq9tJr0GyQMkgsl1tQIN4FijvSMeJbRKAkTymr094S4WLTV0LNJ8xLKcbVCX3sgMm9GVt0VvH1J3eeQy_PFOZhiAw0i-xFfu-D-TJbAccpxtjBdOoHFJx-cwSwGEBQstDkqWyQ0fD5NEw87sEJxD4tUDSCrdNIir0RTMS5BseK8oQbjQo',
  handsFree:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAywanEgW5IqAtQHIiOEdxjc72AMFB3CqkczeXRn7QfkFV1SIw-plJpFPaUcUOdNX5qV8nuZMOnjTjZkrLKvnybnQVEBMD8FsG96c9J2bk0hd4aPeDcttgAAobgDgertbtNe5oRKD1puetUDXQuQFtJA-NkB5VmPfSJKH4u6gt_7LpZvalD1RsRR2KkWqrH_7KeDmGJb1XXn9i_L_zp4Fse6hzo-i5Wz0y9Tbl6gLCtKiC3cl6l6CY5mh2-2zABqLTIuOMcpRb42uSR',
  pastor: pastorForPastor,
  partners:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBEulfurEaig4HkDRWZHLhOHiW3eycUCF3M42BaGblBzntXMdMFWZZIEXqVqqIrey50IkNrT0h-EaWS_3gaQzosqVdYnyOarGCsB7yy0KKmOcudI0Kj8dCTT7h-XvilnTmE5j9bCMvtyVYEjnWfmuQf-NpRiS0qhXtF47hym7Y1fABSA9dqj8325BsvAKmjJjIIl-gdUhFGcZC0PJe2wpQXOAzHlxqFa1EvYrrNpg4dQK1slcfLmSBup_agmDtTv-4LD8SiCbEld0TO',
  cta: '/Photos/lastlast.png',
  ctaMobile: '/Photos/Pastors.png',
  featuresHero: '/Photos/features/Rectangle%2042300.png',
}
