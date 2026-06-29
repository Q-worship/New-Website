import { faqItems, images, pricingFaqTeaserItems } from '@/lib/theme'
import type { FaqItem } from '@/types/content'

export const chatbotConfig = {
  brandPurple: '#61459D',
  whatsappNumber: '44745130473',
  whatsappDisplayNumber: '0745130473',
  privacyPolicyHref: '#',
  fabLogo: images.logo,
  botAvatarLogo: images.logo,
  initialBotMessage:
    'Peace and blessings! Thanks for reaching out. To get started, please share your email address.',
  emailStorageKey: 'qworship-chat-email',
  matchScoreThreshold: 2,
} as const

export interface ChatbotReply {
  text: string
  whatsappUrl?: string
}

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
  'should', 'may', 'might', 'can', 'i', 'me', 'my', 'we', 'our', 'you',
  'your', 'it', 'its', 'they', 'them', 'their', 'this', 'that', 'these',
  'those', 'am', 'to', 'of', 'in', 'for', 'on', 'with', 'at', 'by',
  'from', 'as', 'into', 'about', 'what', 'how', 'when', 'where', 'why',
  'who', 'which', 'and', 'or', 'but', 'if', 'not', 'no', 'yes',
])

const GREETING_PATTERNS = [
  /\b(hi|hello|hey|hiya|howdy)\b/i,
  /\bgood\s+(morning|afternoon|evening|day)\b/i,
  /\b(peace|blessings?|shalom|greetings?)\b/i,
]

const THANKS_PATTERNS = [
  /\b(thank(s| you)|thx|appreciate)\b/i,
  /\b(god bless|amen|bless you)\b/i,
]

const GREETING_REPLIES = [
  'Peace and blessings! Welcome to Q-worship — how may I help you today?',
  'Hello! It is a joy to hear from you. I am here to help with anything about Q-worship.',
  'Greetings! May the Lord bless your day. What can I assist you with?',
]

const THANKS_REPLIES = [
  "You're very welcome! Blessings to you and your ministry.",
  'It is my pleasure to help. May God continue to bless the work of your hands.',
  'Amen — glad I could help! Do not hesitate to reach out again.',
]

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 1 && !STOP_WORDS.has(word))
}

function scoreFaq(queryTokens: string[], faq: FaqItem): number {
  const questionTokens = tokenize(faq.question)
  const answerTokens = tokenize(faq.answer)
  let score = 0

  for (const token of queryTokens) {
    if (questionTokens.includes(token)) score += 2
    if (answerTokens.includes(token)) score += 1
  }

  return score
}

function pickVariant(replies: string[]): string {
  return replies[Math.floor(Math.random() * replies.length)]
}

function isGreeting(query: string): boolean {
  const normalized = query.trim()
  if (normalized.length > 60) return false
  return GREETING_PATTERNS.some((pattern) => pattern.test(normalized))
}

function isThanks(query: string): boolean {
  const normalized = query.trim()
  if (normalized.length > 80) return false
  return THANKS_PATTERNS.some((pattern) => pattern.test(normalized))
}

export function getChatbotFaqPool(): FaqItem[] {
  const seen = new Set<string>()
  const pool: FaqItem[] = []

  for (const item of [...faqItems, ...pricingFaqTeaserItems]) {
    if (!seen.has(item.id)) {
      seen.add(item.id)
      pool.push(item)
    }
  }

  return pool
}

export function matchFaqAnswer(query: string): FaqItem | null {
  const queryTokens = tokenize(query)
  if (queryTokens.length === 0) return null

  const pool = getChatbotFaqPool()
  let bestMatch: FaqItem | null = null
  let bestScore = 0

  for (const faq of pool) {
    const score = scoreFaq(queryTokens, faq)
    if (score > bestScore) {
      bestScore = score
      bestMatch = faq
    }
  }

  if (bestScore >= chatbotConfig.matchScoreThreshold) {
    return bestMatch
  }

  return null
}

export function resolveChatbotReply(query: string): ChatbotReply {
  if (isGreeting(query)) {
    return { text: pickVariant(GREETING_REPLIES) }
  }

  if (isThanks(query)) {
    return { text: pickVariant(THANKS_REPLIES) }
  }

  const match = matchFaqAnswer(query)
  if (match) {
    return { text: `I'd be glad to help. ${match.answer}` }
  }

  const whatsappUrl = buildWhatsAppUrl(`Hi, I have a question about Q-worship: ${query}`)

  return {
    text: `I may not have the answer for that just yet, but our team would love to walk with you. Chat with us on WhatsApp (${chatbotConfig.whatsappDisplayNumber}).`,
    whatsappUrl,
  }
}

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${chatbotConfig.whatsappNumber}?text=${encoded}`
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function formatChatTimestamp(date: Date): string {
  return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
}
