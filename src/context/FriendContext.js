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
  getMessages: () => {},
  messages: [],
  setMessages: () => {},
  bio: '',
  setBio: () => {},
})

export function FriendProvider({ children }) {
  const [friendName, setFriendName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [unreadMessages, setUnreadMessages] = useState([])
  const [offsetLeft, setOffsetLeft] = useState(0)
  const [offsetTop, setOffsetTop] = useState(0)
  const [messages, setMessages] = useState([])
  const [friendBio, setBio] = useState('')

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

  const getMessages = (id, friends) => {
    const friend = friends.find((friend) => friend.id === id)
    setMessages(friend.messages)
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
    handleNotifCount,
    getMessages,
    messages: messages,
    setMessages,
    bio: friendBio,
    setBio,
  }
  return (
    <FriendContext.Provider value={contextValue}>
      {children}
    </FriendContext.Provider>
  )
}

export { FriendContext }
