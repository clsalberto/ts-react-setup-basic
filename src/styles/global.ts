import { darken } from 'polished'

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }

  *, input, button {
    font-family: 'Poppins', sans-serif;

  }

  html, body, #root {
    height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    font-size: 1rem;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.text};
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secundary};
    font-weight: 600;
    &:hover {
      color: ${({ theme }) => darken(0.05, theme.colors.secundary)};
    }
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`
