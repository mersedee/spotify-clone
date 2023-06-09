import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.theme.colors.black.light};
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 318px;
  text-align: center;
`

export const Text = styled.div`
  margin-top: 24px;
  margin-bottom: 32px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  color: ${props => props.theme.colors.white};

  @media (max-width: ${props => props.theme.screens.sm.max}) {
    font-size: 20px;
    margin-bottom: 42px;
  }
`
