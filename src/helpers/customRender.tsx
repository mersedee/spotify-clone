import { type FC, type ReactNode, type ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { render, type RenderOptions } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import theme from 'styles/theme'

interface Props {
  children: ReactNode
}

const ProvidersWrapper: FC<Props> = ({ children }) => {
  return (
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </MemoryRouter>
  )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): any =>
  render(ui, { wrapper: ProvidersWrapper, ...options })

export { customRender as render }
