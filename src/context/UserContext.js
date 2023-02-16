import React, { createContext, useState } from 'react'
const UserContext = createContext({
  username: '',
  createUser: () => {},
  setUsername: () => {},
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
})

export function UserProvider({ children }) {
  const [username, setUsername] = useState('Michael')
  const [friendName, setFriendName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [unreadMessages, setUnreadMessages] = useState([])
  const [offsetLeft, setOffsetLeft] = useState(0)
  const [offsetTop, setOffsetTop] = useState(0)

  const createUser = (userName) => {
    if (username === userName) {
      return username
    } else {
      return setUsername(userName)
    }
  }

  const getUnread = (id, friends) => {
    let count = 0
    const messages = []
    const friend = friends.find((friend) => friend.id === id)
    friend.messages.forEach((message) => {
      if (message.status !== 'read') {
        count += 1
        messages.push(message.message)
      }
    })
    setUnreadMessages(messages)
  }

  const contextvalue = {
    username: username,
    createUser,
    setUsername,
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
  }

  return (
    <UserContext.Provider value={contextvalue}>{children}</UserContext.Provider>
  )
}

export { UserContext }
