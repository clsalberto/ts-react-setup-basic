import React from 'react'

import { ThemeProvider } from 'styled-components'

import Routes from './Routes'
import GlobalStyles from './styles/global'
// import dark from './styles/themes/dark'
import light from './styles/themes/light'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}

export default App
