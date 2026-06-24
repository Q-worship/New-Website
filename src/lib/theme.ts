import type {
  BuildTabItem,
  CompatibleSystem,
  FeatureCard,
  HandsFreeFeature,
  MoreFeature,
  NavDropdownItem,
  NavLink,
  PricingPlan,
  TabItem,
  TeamCard,
} from '@/types/content'

export const navLinks: NavLink[] = [
  { label: 'Features', href: '/features' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
]

export const resourceDropdownItems: NavDropdownItem[] = [
  { label: 'Downloads', href: '/resources' },
  { label: 'Guides', href: '/resources' },
  { label: 'FAQs', href: '/resources' },
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
    line1: 'Your Scripture. Found by Speech.',
    line2: 'Projected in Seconds.',
  },
  body: 'For ages, pastors have paused mid-sermon to wait for a verse. Q-worship ends that. Powered by our advanced speech-to-text engine, the Q-worship Hands-Free Bible listens as you lead, understanding natural language, retaining context, and instantly surfacing the exact scripture you need across major Bible translations.',
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
const pastorForPastor = '/Photos/pastor%20for%20pastor.png'

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

export const assetLibraryImages = [
  '/Photos/rectangles/Rectangle%2037.png',
  '/Photos/rectangles/Rectangle%2038.png',
  '/Photos/rectangles/Rectangle%2042.png',
  '/Photos/rectangles/Rectangle%2044.png',
] as const

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Enterprise',
    monthlyPrice: '$15.00',
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

export const heroCopy = {
  badge: { label: 'NEW FEATURE RELEASE', version: 'V1.0.1 Complete Offline Capability' },
  heading: {
    line1: 'Your church service,',
    line2: 'Powered by voice.',
  },
  body: "Meet Q-worship, The world's most powerful and complete church presentation platform, built by pastors for churches of all sizes .",
}

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
}
