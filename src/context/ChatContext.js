import { createContext, useState } from 'react'
const ChatContext = createContext({
  openChat: false,
  setOpenChat: () => {},
  handleChatStateChange: () => {},
})

export function ChatProvider({ children }) {
  const [openChat, setOpenChat] = useState(false)

  function handleChatStateChange(id, friends) {
    setOpenChat(!openChat)
  }

  const contextValue = {
    openChat: openChat,
    setOpenChat: setOpenChat,
    handleChatStateChange: handleChatStateChange,
  }

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  )
}

export { ChatContext }
