import './App.css'
import Login from './pages/login'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Dashboard from './pages/Dashboard'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Login />} errorElement={<ErrorPage />} />
      <Route
        path="/dashboard"
        element={<Dashboard />}
        errorElement={<ErrorPage />}
      />
      {/* <Route
        path="/friends"
        element={<Friends />}
        errorElement={<ErrorPage />}
      /> */}
    </Route>
  )
)

function Root() {
  return <RouterProvider router={router} />
}

export default Root
