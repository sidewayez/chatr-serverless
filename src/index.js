import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './App'
import { UserProvider } from './context/UserContext'
import { FriendProvider } from './context/FriendContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <FriendProvider>
        <Root />
      </FriendProvider>
    </UserProvider>
  </React.StrictMode>
)
