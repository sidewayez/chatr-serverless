import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './App'
import { UserProvider } from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <Root />
    </UserProvider>
  </React.StrictMode>
)
