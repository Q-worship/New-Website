import { useEffect, useRef } from 'react'
import type { ChatMessage } from '@/hooks/useChatbot'
import { chatbotConfig } from '@/lib/chatbot'

interface ChatbotMessageListProps {
  messages: ChatMessage[]
}

export function ChatbotMessageList({ messages }: ChatbotMessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sessionTimestamp = messages[0]?.timestamp ?? ''

  return (
    <div className="chatbot-messages">
      {sessionTimestamp && (
        <p className="chatbot-messages-timestamp">{sessionTimestamp}</p>
      )}

      {messages.map((message) => (
        <div
          key={message.id}
          className={`chatbot-message chatbot-message--${message.role}`}
        >
          {message.role === 'bot' && (
            <span className="chatbot-message-avatar-wrap">
              <img
                src={chatbotConfig.botAvatarLogo}
                alt=""
                className="chatbot-message-avatar"
              />
            </span>
          )}

          <div className="chatbot-message-content">
            <p className="chatbot-message-text">{message.text}</p>
            {message.whatsappUrl && (
              <a
                href={message.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="chatbot-whatsapp-link"
              >
                Chat on WhatsApp ({chatbotConfig.whatsappDisplayNumber})
              </a>
            )}
          </div>
        </div>
      ))}

      <div ref={bottomRef} />
    </div>
  )
}
