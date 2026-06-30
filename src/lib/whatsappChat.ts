import { buildAgentHandoffMessage } from '@/lib/chatbot'

export interface ChatMessageRecord {
  id: string
  role: 'visitor' | 'agent'
  text: string
  createdAt: string
}

const SESSION_STORAGE_KEY = 'qworship-chat-session-id'

export function getChatApiUrl(): string {
  const url = import.meta.env.VITE_CHAT_API_URL
  return url?.replace(/\/$/, '') ?? ''
}

export function isWhatsAppChatConfigured(): boolean {
  return Boolean(getChatApiUrl())
}

export function loadStoredSessionId(): string | null {
  try {
    return sessionStorage.getItem(SESSION_STORAGE_KEY)
  } catch {
    return null
  }
}

export function storeSessionId(sessionId: string) {
  try {
    sessionStorage.setItem(SESSION_STORAGE_KEY, sessionId)
  } catch {
    // ignore storage errors
  }
}

export type FaqResolveResponse =
  | { type: 'faq'; faqId: string; answer: string }
  | { type: 'handoff' }

export async function resolveFaqWithAi(query: string): Promise<FaqResolveResponse | null> {
  const base = getChatApiUrl()
  if (!base) return null

  try {
    const response = await fetch(`${base}/api/chat/faq-resolve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) return null

    return (await response.json()) as FaqResolveResponse
  } catch {
    return null
  }
}

export async function createChatSession(
  email: string | null,
  query: string,
): Promise<string | null> {
  const base = getChatApiUrl()
  if (!base) return null

  const response = await fetch(`${base}/api/chat/sessions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, query }),
  })

  if (!response.ok) return null

  const data = (await response.json()) as { sessionId: string }
  storeSessionId(data.sessionId)
  return data.sessionId
}

export async function sendVisitorMessage(sessionId: string, text: string): Promise<boolean> {
  const base = getChatApiUrl()
  if (!base) return false

  const response = await fetch(`${base}/api/chat/sessions/${sessionId}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  })

  return response.ok
}

export function subscribeToSession(
  sessionId: string,
  onAgentMessage: (message: ChatMessageRecord) => void,
): () => void {
  const base = getChatApiUrl()
  if (!base) return () => undefined

  const source = new EventSource(`${base}/api/chat/sessions/${sessionId}/events`)

  source.onmessage = (event) => {
    try {
      const message = JSON.parse(event.data) as ChatMessageRecord
      if (message.role === 'agent') {
        onAgentMessage(message)
      }
    } catch {
      // ignore malformed events
    }
  }

  return () => {
    source.close()
  }
}

export async function initWhatsAppChatHandoff({
  email,
  query,
}: {
  email: string | null
  query: string
}): Promise<{ connected: boolean; sessionId: string | null }> {
  if (!isWhatsAppChatConfigured()) {
    return { connected: false, sessionId: null }
  }

  const sessionId = await createChatSession(email, query)
  if (!sessionId) {
    return { connected: false, sessionId: null }
  }

  return { connected: true, sessionId }
}

export { buildAgentHandoffMessage }
