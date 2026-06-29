import { useEffect, useRef, useState, type FormEvent } from 'react'
import type { ChatMessage } from '@/hooks/useChatbot'
import { ChatbotFaqDrawer } from './ChatbotFaqDrawer'
import { ChatbotMessageList } from './ChatbotMessageList'
import { MaterialIcon } from '@/components/ui/MaterialIcon'
import { chatbotConfig } from '@/lib/chatbot'

interface ChatbotPanelProps {
  isMinimized: boolean
  isFaqOpen: boolean
  messages: ChatMessage[]
  onClose: () => void
  onMinimize: () => void
  onRestore: () => void
  onToggleFaq: () => void
  onCloseFaq: () => void
  onSendMessage: (text: string) => void
  onSelectFaq: (question: string, answer: string) => void
}

export function ChatbotPanel({
  isMinimized,
  isFaqOpen,
  messages,
  onClose,
  onMinimize,
  onRestore,
  onToggleFaq,
  onCloseFaq,
  onSendMessage,
  onSelectFaq,
}: ChatbotPanelProps) {
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const hasUserMessage = messages.some((message) => message.role === 'user')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!input.trim()) return
    onSendMessage(input)
    setInput('')
  }

  useEffect(() => {
    if (!isMinimized && !isFaqOpen) {
      inputRef.current?.focus()
    }
  }, [isMinimized, isFaqOpen, messages.length])

  return (
    <div className={`chatbot-panel${isMinimized ? ' chatbot-panel--minimized' : ''}`}>
      <header className="chatbot-panel-header">
        <button
          type="button"
          className="chatbot-panel-header-btn"
          onClick={onToggleFaq}
          aria-label="Browse frequently asked questions"
        >
          <MaterialIcon name="menu" className="chatbot-panel-header-icon" />
        </button>

        <h2 className="chatbot-panel-title">Chat with Qworship</h2>

        <div className="chatbot-panel-header-actions">
          <button
            type="button"
            className="chatbot-panel-header-btn"
            onClick={isMinimized ? onRestore : onMinimize}
            aria-label={isMinimized ? 'Restore chat' : 'Minimize chat'}
          >
            <MaterialIcon name="remove" className="chatbot-panel-header-icon" />
          </button>
          <button
            type="button"
            className="chatbot-panel-header-btn"
            onClick={onClose}
            aria-label="Close chat"
          >
            <MaterialIcon name="close" className="chatbot-panel-header-icon" />
          </button>
        </div>
      </header>

      {!isMinimized && (
        <>
          <div className="chatbot-panel-body">
            <ChatbotMessageList messages={messages} />

            {isFaqOpen && (
              <ChatbotFaqDrawer onClose={onCloseFaq} onSelectFaq={onSelectFaq} />
            )}
          </div>

          <footer className="chatbot-panel-footer">
            {!hasUserMessage && (
              <p className="chatbot-privacy">
                By using this chatbot, you agree to your data being processed by third parties as
                described in our{' '}
                <a href={chatbotConfig.privacyPolicyHref} className="chatbot-privacy-link">
                  Privacy Policy
                </a>
              </p>
            )}

            <form className="chatbot-input-form" onSubmit={handleSubmit}>
              <div className="chatbot-input-wrap">
                <MaterialIcon name="attach_file" className="chatbot-input-attach" aria-hidden />
                <input
                  ref={inputRef}
                  type="text"
                  className="chatbot-input"
                  placeholder="Ask a detailed question"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  aria-label="Chat message"
                />
              </div>
            </form>
          </footer>
        </>
      )}
    </div>
  )
}
