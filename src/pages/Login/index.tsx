import { type FC, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { Logo } from 'components/svg'
import { Button } from 'components/ui'
import isEmpty from 'helpers/isEmpty'
import useToken from 'hooks/useToken'
import * as S from './styles'

const clientId = process.env.REACT_APP_CLIENT_ID as string
const redirectUri = process.env.REACT_APP_REDIRECT_URI as string
const authEndpoint = 'https://accounts.spotify.com/authorize'
const responseType = 'token'

const Login: FC = () => {
  const { token, setToken } = useToken()

  useEffect(() => {
    const hash = window.location.hash

    if (isEmpty(token) && !isEmpty(hash)) {
      const hashString = hash.substring(1)
      const hashParams = hashString.split('&')
      const accessTokenParam = hashParams.find(param => param.startsWith('access_token'))
      const storedToken = (accessTokenParam != null) ? accessTokenParam.split('=')[1] : ''

      window.location.hash = ''
      window.localStorage.setItem('token', storedToken)

      setToken(storedToken)
    }
  }, [])

  if (!isEmpty(token)) {
    return <Navigate to="/" />
  }

  return (
    <S.Container>
      <S.Box>
        <Logo />
        <S.Text>Connect to the application and start enjoying.</S.Text>

        <Button
            color="primary"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`}>
          Connect
        </Button>
      </S.Box>
    </S.Container>
  )
}

export default Login
