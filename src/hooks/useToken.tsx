import { type Dispatch, type SetStateAction, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export interface UseTokenReturn {
  token: string
  setToken: Dispatch<SetStateAction<string>>
  logout: () => void
}

const useToken = (): UseTokenReturn => {
  const navigate = useNavigate()
  const [token, setToken] = useState<string>('')
  const logout = (): void => {
    window.localStorage.removeItem('token')
    setToken('')
    navigate('/login')
  }

  useEffect(() => {
    const storedToken = window.localStorage.getItem('token')
    setToken(storedToken ?? '')
  }, [])

  return { token, setToken, logout }
}

export default useToken
