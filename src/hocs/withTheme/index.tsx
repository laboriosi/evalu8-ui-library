import theme from '@laboriosi/evalu8-tokens/theme.json'
import { ComponentType } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '~components/GlobalStyle'
import '@laboriosi/evalu8-fonts/fonts.css'

function withTheme<P>(Component: ComponentType<P>) {
  const NewComponent = (props: P) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...props} />
    </ThemeProvider>
  )

  return NewComponent
}

export default withTheme
