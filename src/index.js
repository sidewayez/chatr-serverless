import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Root from './App'

// import Dashboard from './pages/Dashboard'
import { UserProvider } from './context/UserContext'
// import Login from './pages/login'

// {
//   path: '/',
//   element: <Root />,
//   errorElement: <ErrorPage />,
// },
// {
//   path: 'dashboard',
//   element: <Dashboard />,
//   errorElement: <ErrorPage />,
// },
// {
//   path: 'login',
//   element: <Login />,
//   errorElement: <ErrorPage />,
// },

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <Root />
    </UserProvider>
  </React.StrictMode>
)
