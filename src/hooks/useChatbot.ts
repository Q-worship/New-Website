import { useCallback, useEffect, useRef, useState } from 'react'
import {
  buildAgentHandoffMessage,
  buildWhatsAppUrl,
  chatbotConfig,
  formatChatTimestamp,
  isValidEmail,
  resolveInstantChatbotReply,
} from '@/lib/chatbot'
import {
  initWhatsAppChatHandoff,
  isWhatsAppChatConfigured,
  loadStoredSessionId,
  resolveFaqWithAi,
  sendVisitorMessage,
  subscribeToSession,
} from '@/lib/whatsappChat'

export type ChatMessageRole = 'bot' | 'user' | 'agent' | 'system'
export type ChatMessageKind = 'text' | 'agentSearch'
export type ChatMode = 'bot' | 'agent'
export type ChatPhase = 'email' | 'chat'

export interface ChatMessage {
  id: string
  role: ChatMessageRole
  kind?: ChatMessageKind
  text: string
  timestamp: string
  whatsappUrl?: string
  handoffQuery?: string
}

let messageIdCounter = 0

function createMessage(
  role: ChatMessageRole,
  text: string,
  options?: { whatsappUrl?: string },
): ChatMessage {
  messageIdCounter += 1
  return {
    id: `msg-${messageIdCounter}`,
    role,
    kind: 'text',
    text,
    timestamp: formatChatTimestamp(new Date()),
    whatsappUrl: options?.whatsappUrl,
  }
}

function createAgentSearchMessage(query: string): ChatMessage {
  messageIdCounter += 1
  return {
    id: `msg-${messageIdCounter}`,
    role: 'system',
    kind: 'agentSearch',
    text: '',
    timestamp: formatChatTimestamp(new Date()),
    handoffQuery: query,
  }
}

function loadStoredEmail(): string | null {
  try {
    return sessionStorage.getItem(chatbotConfig.emailStorageKey)
  } catch {
    return null
  }
}

function storeEmail(email: string) {
  try {
    sessionStorage.setItem(chatbotConfig.emailStorageKey, email)
  } catch {
    // ignore storage errors
  }
}

export function useChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isFaqOpen, setIsFaqOpen] = useState(false)
  const [phase, setPhase] = useState<ChatPhase>('email')
  const [chatMode, setChatMode] = useState<ChatMode>('bot')
  const [isAgentSearching, setIsAgentSearching] = useState(false)
  const [isResolving, setIsResolving] = useState(false)
  const [email, setEmail] = useState<string | null>(loadStoredEmail)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const initializedRef = useRef(false)
  const handoffInProgressRef = useRef(false)
  const sessionIdRef = useRef<string | null>(loadStoredSessionId())
  const unsubscribeRef = useRef<(() => void) | null>(null)

  const appendMessages = useCallback((...newMessages: ChatMessage[]) => {
    setMessages((prev) => [...prev, ...newMessages])
  }, [])

  const appendAgentMessage = useCallback(
    (text: string) => {
      appendMessages(createMessage('agent', text))
    },
    [appendMessages],
  )

  const initializeChat = useCallback(() => {
    const storedEmail = loadStoredEmail()
    if (storedEmail) {
      setEmail(storedEmail)
      setPhase('chat')
      if (!initializedRef.current) {
        initializedRef.current = true
        appendMessages(
          createMessage('bot', 'Welcome back — blessings! How can I help you today?'),
        )
      }
      return
    }

    setPhase('email')
    if (!initializedRef.current) {
      initializedRef.current = true
      appendMessages(createMessage('bot', chatbotConfig.initialBotMessage))
    }
  }, [appendMessages])

  const open = useCallback(() => {
    setIsOpen(true)
    setIsMinimized(false)
    initializeChat()
  }, [initializeChat])

  const close = useCallback(() => {
    setIsOpen(false)
    setIsMinimized(false)
    setIsFaqOpen(false)
  }, [])

  const minimize = useCallback(() => {
    setIsMinimized(true)
    setIsFaqOpen(false)
  }, [])

  const restore = useCallback(() => {
    setIsMinimized(false)
  }, [])

  const toggleFaq = useCallback(() => {
    setIsFaqOpen((prev) => !prev)
  }, [])

  const closeFaq = useCallback(() => {
    setIsFaqOpen(false)
  }, [])

  const completeAgentHandoff = useCallback(
    async (query: string) => {
      if (handoffInProgressRef.current) return
      handoffInProgressRef.current = true

      setIsAgentSearching(false)
      setMessages((prev) => prev.filter((message) => message.kind !== 'agentSearch'))

      const { connected, sessionId } = await initWhatsAppChatHandoff({ email, query })

      if (connected && sessionId) {
        sessionIdRef.current = sessionId
        unsubscribeRef.current?.()
        unsubscribeRef.current = subscribeToSession(sessionId, (message) => {
          appendAgentMessage(message.text)
        })
        setChatMode('agent')
        appendMessages(
          createMessage(
            'bot',
            "You're now connected with our customer care team. Continue chatting here.",
          ),
        )
      } else {
        const whatsappUrl = buildWhatsAppUrl(buildAgentHandoffMessage(email, query))
        appendMessages(
          createMessage(
            'bot',
            `Our team would love to help. Continue on WhatsApp (${chatbotConfig.whatsappDisplayNumber}).`,
            { whatsappUrl },
          ),
        )
      }

      handoffInProgressRef.current = false
    },
    [appendAgentMessage, appendMessages, email],
  )

  const replyWithResolved = useCallback(
    async (userText: string) => {
      const instant = resolveInstantChatbotReply(userText)

      if (instant?.type === 'text') {
        appendMessages(createMessage('bot', instant.text))
        return
      }

      if (isWhatsAppChatConfigured()) {
        setIsResolving(true)
        const aiResult = await resolveFaqWithAi(userText)
        setIsResolving(false)

        if (aiResult?.type === 'faq') {
          appendMessages(createMessage('bot', aiResult.answer))
          return
        }
      }

      setIsAgentSearching(true)
      appendMessages(createAgentSearchMessage(userText))
    },
    [appendMessages],
  )

  const sendAgentMessage = useCallback(
    async (text: string) => {
      const sessionId = sessionIdRef.current
      if (!sessionId) return

      appendMessages(createMessage('user', text))
      await sendVisitorMessage(sessionId, text)
    },
    [appendMessages],
  )

  const sendMessage = useCallback(
    (rawText: string) => {
      const text = rawText.trim()
      if (!text) return

      if (isAgentSearching || isResolving) return

      if (chatMode === 'agent') {
        void sendAgentMessage(text)
        return
      }

      appendMessages(createMessage('user', text))

      if (phase === 'email') {
        if (!isValidEmail(text)) {
          appendMessages(
            createMessage(
              'bot',
              'Thank you for your patience — please enter a valid email address so we may follow up if needed.',
            ),
          )
          return
        }

        storeEmail(text)
        setEmail(text)
        setPhase('chat')
        appendMessages(
          createMessage(
            'bot',
            'Thank you! How can I serve you today? Ask a question or browse FAQs from the menu.',
          ),
        )
        return
      }

      void replyWithResolved(text)
    },
    [appendMessages, chatMode, isAgentSearching, isResolving, phase, replyWithResolved, sendAgentMessage],
  )

  const selectFaq = useCallback(
    (question: string, answer: string) => {
      setIsFaqOpen(false)

      if (chatMode === 'agent' || isAgentSearching || isResolving) {
        return
      }

      if (phase === 'email' || !email) {
        appendMessages(
          createMessage(
            'bot',
            'Peace and blessings — please share your email address first so we can assist you.',
          ),
        )
        return
      }

      appendMessages(
        createMessage('user', question),
        createMessage('bot', answer),
      )
    },
    [appendMessages, chatMode, email, isAgentSearching, isResolving, phase],
  )

  useEffect(() => {
    const stored = loadStoredEmail()
    if (stored) {
      setEmail(stored)
      setPhase('chat')
    }
  }, [])

  useEffect(() => {
    const sessionId = sessionIdRef.current
    if (!sessionId || !isWhatsAppChatConfigured()) return

    setChatMode('agent')
    unsubscribeRef.current = subscribeToSession(sessionId, (message) => {
      appendAgentMessage(message.text)
    })

    return () => {
      unsubscribeRef.current?.()
      unsubscribeRef.current = null
    }
  }, [appendAgentMessage])

  return {
    isOpen,
    isMinimized,
    isFaqOpen,
    phase,
    chatMode,
    isAgentSearching,
    isResolving,
    email,
    messages,
    open,
    close,
    minimize,
    restore,
    toggleFaq,
    closeFaq,
    sendMessage,
    selectFaq,
    completeAgentHandoff,
  }
}
