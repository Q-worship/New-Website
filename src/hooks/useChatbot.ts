import { useCallback, useEffect, useRef, useState } from 'react'
import {
  chatbotConfig,
  formatChatTimestamp,
  isValidEmail,
  resolveChatbotReply,
} from '@/lib/chatbot'

export type ChatMessageRole = 'bot' | 'user'

export interface ChatMessage {
  id: string
  role: ChatMessageRole
  text: string
  timestamp: string
  whatsappUrl?: string
}

export type ChatPhase = 'email' | 'chat'

let messageIdCounter = 0

function createMessage(role: ChatMessageRole, text: string, whatsappUrl?: string): ChatMessage {
  messageIdCounter += 1
  return {
    id: `msg-${messageIdCounter}`,
    role,
    text,
    timestamp: formatChatTimestamp(new Date()),
    whatsappUrl,
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
  const [email, setEmail] = useState<string | null>(loadStoredEmail)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const initializedRef = useRef(false)

  const appendMessages = useCallback((...newMessages: ChatMessage[]) => {
    setMessages((prev) => [...prev, ...newMessages])
  }, [])

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

  const replyWithResolved = useCallback(
    (userText: string) => {
      const reply = resolveChatbotReply(userText)
      appendMessages(createMessage('bot', reply.text, reply.whatsappUrl))
    },
    [appendMessages],
  )

  const sendMessage = useCallback(
    (rawText: string) => {
      const text = rawText.trim()
      if (!text) return

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

      replyWithResolved(text)
    },
    [appendMessages, phase, replyWithResolved],
  )

  const selectFaq = useCallback(
    (question: string, answer: string) => {
      setIsFaqOpen(false)

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
    [appendMessages, email, phase],
  )

  useEffect(() => {
    const stored = loadStoredEmail()
    if (stored) {
      setEmail(stored)
      setPhase('chat')
    }
  }, [])

  return {
    isOpen,
    isMinimized,
    isFaqOpen,
    phase,
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
  }
}
