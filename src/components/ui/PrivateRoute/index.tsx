import { type FC, type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import isEmpty from 'helpers/isEmpty'

interface Props {
  children: ReactNode
}

const PrivateRoute: FC<Props> = ({ children }) => {
  const token = window.localStorage.getItem('token')
  return isEmpty(token) ? <Navigate to="/login" /> : <>{children}</>
}

export default PrivateRoute
