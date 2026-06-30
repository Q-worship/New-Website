import { faqItems, pricingFaqTeaserItems } from './faqPool'
import type { FaqItem } from '../types/content'

const MATCH_CONFIG = {
  minSubstringLength: 12,
  minMatchedTokens: 2,
  minQueryCoverage: 0.5,
  minTotalScore: 6,
  ambiguityRatio: 0.85,
  tokenScoreWeight: 3,
  bigramBoost: 4,
} as const

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
  'should', 'may', 'might', 'can', 'i', 'me', 'my', 'we', 'our', 'you',
  'your', 'it', 'its', 'they', 'them', 'their', 'this', 'that', 'these',
  'those', 'am', 'to', 'of', 'in', 'for', 'on', 'with', 'at', 'by',
  'from', 'as', 'into', 'about', 'what', 'how', 'when', 'where', 'why',
  'who', 'which', 'and', 'or', 'but', 'if', 'not', 'no', 'yes',
])

function normalizeForMatch(text: string): string {
  return text
    .toLowerCase()
    .replace(/q[\s-]?worship/g, 'qworship')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function tokenize(text: string): string[] {
  return normalizeForMatch(text)
    .split(/\s+/)
    .filter((word) => word.length > 1 && !STOP_WORDS.has(word))
}

function getQuestionBigrams(question: string): string[] {
  const tokens = tokenize(question)
  const bigrams: string[] = []

  for (let i = 0; i < tokens.length - 1; i += 1) {
    bigrams.push(`${tokens[i]} ${tokens[i + 1]}`)
  }

  return bigrams
}

function findExactOrSubstringMatch(query: string, pool: FaqItem[]): FaqItem | null {
  const normalizedQuery = normalizeForMatch(query)
  if (!normalizedQuery) return null

  for (const faq of pool) {
    const normalizedQuestion = normalizeForMatch(faq.question)

    if (normalizedQuery === normalizedQuestion) {
      return faq
    }

    const shorter =
      normalizedQuery.length <= normalizedQuestion.length
        ? normalizedQuery
        : normalizedQuestion
    const longer =
      normalizedQuery.length > normalizedQuestion.length
        ? normalizedQuery
        : normalizedQuestion

    if (shorter.length >= MATCH_CONFIG.minSubstringLength && longer.includes(shorter)) {
      return faq
    }
  }

  return null
}

function scoreFaqQuestion(
  query: string,
  queryTokens: string[],
  faq: FaqItem,
): number | null {
  const questionTokenSet = new Set(tokenize(faq.question))

  let matchedQueryTokens = 0
  for (const token of queryTokens) {
    if (questionTokenSet.has(token)) {
      matchedQueryTokens += 1
    }
  }

  if (matchedQueryTokens < MATCH_CONFIG.minMatchedTokens) {
    return null
  }

  const queryCoverage = matchedQueryTokens / queryTokens.length
  if (queryCoverage < MATCH_CONFIG.minQueryCoverage) {
    return null
  }

  let score = matchedQueryTokens * MATCH_CONFIG.tokenScoreWeight

  const normalizedQuery = normalizeForMatch(query)
  for (const bigram of getQuestionBigrams(faq.question)) {
    if (normalizedQuery.includes(bigram)) {
      score += MATCH_CONFIG.bigramBoost
    }
  }

  if (score < MATCH_CONFIG.minTotalScore) {
    return null
  }

  return score
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
  const trimmed = query.trim()
  if (!trimmed) return null

  const pool = getChatbotFaqPool()

  const exactMatch = findExactOrSubstringMatch(trimmed, pool)
  if (exactMatch) return exactMatch

  const queryTokens = tokenize(trimmed)
  if (queryTokens.length === 0) return null

  if (queryTokens.length === 1) return null

  const scored: { faq: FaqItem; score: number }[] = []

  for (const faq of pool) {
    const score = scoreFaqQuestion(trimmed, queryTokens, faq)
    if (score !== null) {
      scored.push({ faq, score })
    }
  }

  if (scored.length === 0) return null

  scored.sort((a, b) => b.score - a.score)

  const best = scored[0]
  const second = scored[1]

  if (second && second.score >= best.score * MATCH_CONFIG.ambiguityRatio) {
    return null
  }

  return best.faq
}
