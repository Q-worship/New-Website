import { ChatbotLauncher } from './ChatbotLauncher'
import { ChatbotPanel } from './ChatbotPanel'
import { useChatbot } from '@/hooks/useChatbot'

export function ChatbotWidget() {
  const chatbot = useChatbot()

  return (
    <>
      {!chatbot.isOpen && (
        <ChatbotLauncher onClick={chatbot.open} />
      )}

      {chatbot.isOpen && (
        <ChatbotPanel
          isMinimized={chatbot.isMinimized}
          isFaqOpen={chatbot.isFaqOpen}
          messages={chatbot.messages}
          onClose={chatbot.close}
          onMinimize={chatbot.minimize}
          onRestore={chatbot.restore}
          onToggleFaq={chatbot.toggleFaq}
          onCloseFaq={chatbot.closeFaq}
          onSendMessage={chatbot.sendMessage}
          onSelectFaq={chatbot.selectFaq}
        />
      )}
    </>
  )
}
