import { createGlobalStyle } from 'styled-components'
import theme from '@laboriosi/evalu8-tokens/theme.json'
import { ThemeProvider } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.font.family.body};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.size.base};
    box-sizing: border-box;
   }

   body, html, #root  {
    height: 100%;
  }
`

export default function ExternalGobalStyle() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}
