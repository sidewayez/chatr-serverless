import React, { createContext, useState } from 'react'

const FriendContext = createContext({
  friendName: '',
  setFriendName: () => {},
  avatar: '',
  setAvatar: () => {},
  unreadMessages: [],
  setUnreadMessages: () => {},
  offsetLeft: 0,
  setOffsetLeft: () => {},
  offsetTop: 0,
  setOffsetTop: () => {},
  getUnread: () => {},
  handleNotifCount: () => {},
})

export function FriendProvider({ children }) {
  const [friendName, setFriendName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [unreadMessages, setUnreadMessages] = useState([])
  const [offsetLeft, setOffsetLeft] = useState(0)
  const [offsetTop, setOffsetTop] = useState(0)

  const getUnread = (id, friends) => {
    const friend = friends.find((friend) => friend.id === id)
    setUnreadMessages(
      friend.messages.reduce((acc, message) => {
        if (message.status !== 'read') {
          acc.push(message.message)
        }
        return acc
      }, [])
    )
  }

  const handleNotifCount = (unread) => {
    return unread < 10 ? unread : '+'
  }

  const contextValue = {
    friendName: friendName,
    setFriendName,
    avatar: avatar,
    setAvatar,
    unreadMessages: unreadMessages,
    setUnreadMessages,
    offsetLeft: offsetLeft,
    setOffsetLeft,
    offsetTop: offsetTop,
    setOffsetTop,
    getUnread,
    handleNotifCount
  }
  return (
    <FriendContext.Provider value={contextValue}>
      {children}
    </FriendContext.Provider>
  )
}

export { FriendContext }
