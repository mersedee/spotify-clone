import { type FC, type ComponentPropsWithoutRef } from 'react'
import styled, { css } from 'styled-components'

type ButtonOrLinkProps = ComponentPropsWithoutRef<'button'> & ComponentPropsWithoutRef<'a'>
interface Props extends ButtonOrLinkProps {
  color?: 'primary' | 'secondary'
}

const Button: FC<Props> = ({
  color,
  children,
  href,
  ...props
}) => {
  const isLink = Boolean(href)
  return (
    <StyledButton as={isLink ? 'a' : 'button'} href={href} color={color} {...props}>
      {children}
    </StyledButton>
  )
}

const COLOR = {
  primary: css`
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.green}
  `,
  secondary: css`
    color: ${props => props.theme.colors.green};
    background-color: ${props => props.theme.colors.white};
  `
}

const StyledButton = styled.div<Props>`
  font-size: 16px;
  font-weight: 600;
  padding: 15px 62px;
  cursor: pointer;
  border-radius: 10px;
  
  &:focus {
    outline: none;
  }

  ${(props) => COLOR[props.color ?? 'primary']}
`

export default Button
