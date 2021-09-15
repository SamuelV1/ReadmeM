import App from './App'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from 'resources/theme'

export function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>

  )
}
const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;

    }
    html{
        font-size: 62.5%;
    }
    Body{
        font-family: 'DM Sans';
        margin: 0;
    }
`
