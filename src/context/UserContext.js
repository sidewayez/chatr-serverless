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
