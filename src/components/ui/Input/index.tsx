import { type FC, type ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import search from 'assets/images/search.svg'

const Input: FC<ComponentPropsWithoutRef<'input'>> = ({ ...props }) => {
  return (
    <StyledInput {...props} />
  )
}

const StyledInput = styled.input`
  padding: 12px 16px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid  ${props => props.theme.colors.gray.dark};;
  background-color: transparent;
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  background-position: right 10px top 8px;
  background-repeat: no-repeat;
  background-image: url(${search})
}
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.gray.dark};
  }
`

export default Input
