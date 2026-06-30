import { images } from '@/lib/theme'
import { matchFaqAnswer, getChatbotFaqPool } from '@/lib/chatbotMatcher'

export { matchFaqAnswer, getChatbotFaqPool }

export const chatbotConfig = {
  brandPurple: '#61459D',
  whatsappNumber: '44745130473',
  whatsappDisplayNumber: '0745130473',
  privacyPolicyHref: '#',
  fabLogo: images.logo,
  botAvatarLogo: images.logo,
  initialBotMessage:
    'Thank you for reaching out. Please share your email address.',
  emailStorageKey: 'qworship-chat-email',
} as const

export type ChatbotReply =
  | { type: 'text'; text: string }
  | { type: 'handoff'; query: string }

export const agentSearchDurationMs = 3500

const GREETING_PATTERNS = [
  /\b(hi|hello|hey|hiya|howdy)\b/i,
  /\bgood\s+(morning|afternoon|evening|day)\b/i,
  /\bgreetings?\b/i,
  /\bhow\s+are\s+you\b/i,
  /\bhow'?s\s+it\s+going\b/i,
  /\bhow\s+is\s+it\s+going\b/i,
  /\bhow\s+have\s+you\s+been\b/i,
  /\b(nice|pleased)\s+to\s+meet\s+you\b/i,
]

const THANKS_PATTERNS = [
  /\b(thank(s| you)|thx|appreciate)\b/i,
  /\b(god bless|amen|bless you)\b/i,
]

const GREETING_REPLIES = [
  'Hello! How can I help you with Q-worship today?',
  'Hi there! What can I help you with?',
  'Hello! Ask a question or browse FAQs from the menu.',
  "I'm here to help with Q-worship. What would you like to know?",
]

const THANKS_REPLIES = [
  "You're welcome! Let me know if you need anything else.",
  'Happy to help. Feel free to ask another question anytime.',
  'Glad I could help! Reach out again if you need more assistance.',
]

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

export function resolveInstantChatbotReply(query: string): ChatbotReply | null {
  if (isGreeting(query)) {
    return { type: 'text', text: pickVariant(GREETING_REPLIES) }
  }

  if (isThanks(query)) {
    return { type: 'text', text: pickVariant(THANKS_REPLIES) }
  }

  const match = matchFaqAnswer(query)
  if (match) {
    return { type: 'text', text: match.answer }
  }

  return null
}

export function resolveChatbotReply(query: string): ChatbotReply {
  const instant = resolveInstantChatbotReply(query)
  if (instant) {
    return instant
  }

  return { type: 'handoff', query }
}

export function buildAgentHandoffMessage(email: string | null, query: string): string {
  const lines = [`Hi, I have a question about Q-worship: ${query}`]
  if (email) {
    lines.push(`My email: ${email}`)
  }
  return lines.join('\n')
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
