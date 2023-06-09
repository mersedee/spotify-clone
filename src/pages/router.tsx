import { createBrowserRouter } from 'react-router-dom'
import { PrivateRoute } from 'components/ui'
import Home from 'pages/Home'
import Login from 'pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute><Home /></PrivateRoute>
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router
