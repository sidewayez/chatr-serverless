import React, { createContext, useState } from 'react'
import { Friends } from '../worker/FakeData'

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
  quickChatFriend: {},
  setChatFriend: () => {},
  findFriend: () => {},
  // friends: [],
  // setFriends: () => {},
})

export function FriendProvider({ children }) {
  const [friendName, setFriendName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [unreadMessages, setUnreadMessages] = useState([])
  const [offsetLeft, setOffsetLeft] = useState(0)
  const [offsetTop, setOffsetTop] = useState(0)
  const [messages, setMessages] = useState([])
  const [friendBio, setBio] = useState('')
  const [quickChatFriend, setChatFriend] = useState({})
  // const [friends, setFriends] = useState(Friends)

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

  const findFriend = (id, friends) => {
    const found = friends.find((friend) => friend.id === id)
    setChatFriend(found)
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
    quickChatFriend: quickChatFriend,
    setChatFriend,
    findFriend,
    // friends: friends,
    // setFriends,
  }
  return (
    <FriendContext.Provider value={contextValue}>
      {children}
    </FriendContext.Provider>
  )
}

export { FriendContext }
