import React, { createContext, useState } from 'react'
const UserContext = createContext({
  username: '',
  createUser: () => {},
  setUsername: () => {},
  friendName: '',
  setFriendName: () => {},
  avatar: '',
  setAvatar: () => {},
})

export function UserProvider({ children }) {
  const [username, setUsername] = useState('')
  const [friendName, setFriendName] = useState('')
  const [avatar, setAvatar] = useState('');

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
  }

  return (
    <UserContext.Provider value={contextvalue}>{children}</UserContext.Provider>
  )
}

export { UserContext }
