import { type FC } from 'react'
import styled from 'styled-components'

const Loading: FC = () => {
  return (
    <Container>
      Loading...
    </Container>
  )
}

const Container = styled.div`
  font-size: 32px;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: ${props => props.theme.screens.sm.max}) {
    height: auto;
    padding: 80px 0;
  }
`

export default Loading
