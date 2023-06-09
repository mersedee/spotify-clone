import { type FC } from 'react'
import styled from 'styled-components'
import isEmpty from 'helpers/isEmpty'

interface Props {
  query: string
}

const NoData: FC<Props> = ({ query }) => {
  return (
    <NoDataContainer>
      <Content>
        <h2>No results {isEmpty(query) ? 'to show' : `for "${query}"` }</h2>
        <p>{isEmpty(query) ? 'Use the search to find the albums by the artists.' : 'Please make sure your words are spelled correctly or use less or different words.'}</p>
      </Content>
    </NoDataContainer>
  )
}

export const NoDataContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${props => props.theme.screens.sm.max}) {
    height: auto;
  }
`

export const Content = styled.div`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.colors.white};
  
  h2 {
    font-weight: 800;
    font-size: 18px;
    line-height: 22px;

    @media (max-width: ${props => props.theme.screens.sm.max}) {
      font-size: 16px;
      line-height: 19px;
    }
  }
  
  p {
    margin-top: 8px;
    font-weight: 500;
    font-size: 12px;
  }
`

export default NoData
