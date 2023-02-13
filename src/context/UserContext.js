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
})

export function UserProvider({ children }) {
  const [username, setUsername] = useState('')
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
  }

  return (
    <UserContext.Provider value={contextvalue}>{children}</UserContext.Provider>
  )
}

export { UserContext }
