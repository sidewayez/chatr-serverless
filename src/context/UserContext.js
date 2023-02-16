import React, { createContext, useState } from 'react'
const UserContext = createContext({
  username: '',
  createUser: () => {},
  setUsername: () => {},
})

export function UserProvider({ children }) {
  const [username, setUsername] = useState('Michael')

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
  }

  return (
    <UserContext.Provider value={contextvalue}>{children}</UserContext.Provider>
  )
}

export { UserContext }
