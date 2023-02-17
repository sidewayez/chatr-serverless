import { createContext, useState } from 'react'
const ChatContext = createContext({
  openChat: false,
  setOpenChat: () => {},
  handleChatStateChange: () => {},
  openMiniModal: false,
  setOpenMini: () => {},
  nav: '',
  setNav: () => {},
})

export function ChatProvider({ children }) {
  const [nav, setNav] = useState('')
  const [openChat, setOpenChat] = useState(false)
  const [openMiniModal, setOpenMini] = useState(false)

  function handleChatStateChange(id, friends) {
    setOpenChat(!openChat)
  }

  const contextValue = {
    openChat: openChat,
    setOpenChat,
    handleChatStateChange,
    openMiniModal: openMiniModal,
    setOpenMini,
    nav: nav,
    setNav,
  }

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  )
}

export { ChatContext }
