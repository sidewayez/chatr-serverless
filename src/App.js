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
    <Route>
      <Route path="/" element={<Login />}errorElement={<ErrorPage />} />
        <Route
          index
          path="/dashboard"
          element={<Dashboard />}
          errorElement={<ErrorPage />}
        />
      {/* </Route> */}
    </Route>
  )
)
function Root() {
  return (
    // <div className="App">
      <RouterProvider router={router} />
    // </div>
  )
}

export default Root
