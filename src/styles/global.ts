import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* Reset default styles */
  html, body, div, span,
  h1, h2, h3, h4, h5, h6,
  p, blockquote, pre, a, em, img, small, strong, sub, sup,
  ol, ul, li, table, caption, tbody, tfoot, thead, tr, th, td,
  form, label, input, select, option, textarea, button {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  /* Fix list styling */
  ul, ol {
    list-style: none;
  }

  /* Set default font size and family */
  body {
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    line-height: 1.4;
  }

  /* Set default link styles */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* Set default heading styles */
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }

  /* Set default box-sizing */
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

export default GlobalStyle
