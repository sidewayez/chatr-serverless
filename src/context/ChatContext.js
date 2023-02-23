import { createContext, useState } from 'react'
const ChatContext = createContext({
  openChat: false,
  setOpenChat: () => {},
  handleChatStateChange: () => {},
  openMiniModal: false,
  setOpenMini: () => {},
  nav: '',
  setNav: () => {},
  inboxView: false,
  setInboxView: () => {},
  quickChatView: false,
  setQuickChatView: () => {},
  friendView: false,
  setFriendView: () => {},
})

export function ChatProvider({ children }) {
  const [nav, setNav] = useState('')
  const [openChat, setOpenChat] = useState(false)
  const [openMiniModal, setOpenMini] = useState(false)
  const [inboxView, setInboxView] = useState(false)
  const [quickChatView, setQuickChatView] = useState(false);
  const [friendView, setFriendView] = useState(true)

  function handleChatStateChange() {
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
    inboxView: inboxView,
    setInboxView,
    quickChatView: quickChatView, 
    setQuickChatView,
    friendView: friendView,
    setFriendView,
  }

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  )
}

export { ChatContext }
