import styled from 'styled-components'

export const FirstColumn = styled.div`
  background-color: ${props => props.theme.colors.black.light};
  padding: 0 53px;
  max-width: 510px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: ${props => props.theme.screens.sm.max}) {
    padding: 72px 38px 32px;
    max-width: 100%;
  }
`

export const FirstColumnContent = styled.div`
  @media (max-width: ${props => props.theme.screens.sm.max}) {
    svg {
      width: 54px;
      height: 54px;
    }
  }
`

export const SecondColumn = styled.div`
  padding: 32px 34px;
  width: calc(100% - 510px);
  background: linear-gradient(to bottom,
  ${props => props.theme.colors.blue},
  ${props => props.theme.colors.black.light});
  border-left: 1px solid ${props => props.theme.colors.gray.dark};
  height: 100vh;
  overflow-y: auto;
`

export const SearchTitle = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: 24px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 32px;
  line-height: 29px;

  @media (max-width: ${props => props.theme.screens.sm.max}) {
    margin-top: 16px;
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 22px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;

  @media (max-width: ${props => props.theme.screens.sm.max}) {
    background: linear-gradient(to bottom,
    ${props => props.theme.colors.blue},
    ${props => props.theme.colors.black.light});
    height: 100%;
    
   ${FirstColumn}, ${SecondColumn} {
     width: 100%;
     background-color: transparent;
   }
    
    ${SecondColumn} {
      border-left: 0;
      background: transparent;
      padding-top: 0;
    }
  }
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-weight: 800;
  font-size: 36px;
  line-height: 44px;

  @media (max-width: ${props => props.theme.screens.sm.max}) {
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
  }
`

export const Subtitle = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.colors.gray.light};
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  @media (max-width: ${props => props.theme.screens.sm.max}) {
    margin-top: 4px;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
  }
`

export const LogoutLink = styled.a`
  color: ${props => props.theme.colors.white};
  position: absolute;
  left: 32px;
  top: 23px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  svg {
    margin-right: 8px;
  }

  @media (max-width: ${props => props.theme.screens.sm.max}) {
    span {
     display: none;
    }
  }
`
