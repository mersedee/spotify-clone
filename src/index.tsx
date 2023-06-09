import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import Global from 'styles/global'
import GlobalFont from 'styles/font'
import router from 'pages/router'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalFont />
      <Global theme={theme} />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
