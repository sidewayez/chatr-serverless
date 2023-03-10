import React, { createContext, useState, useRef } from 'react'
import useLocalStorageState from 'use-local-storage-state'
const UserContext = createContext({
  username: '',
  createUser: () => {},
  setUsername: () => {},
})

export function UserProvider({ children }) {
  const [username, setUsername] = useLocalStorageState('userName', {
    defaultValue: '',
  })

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
