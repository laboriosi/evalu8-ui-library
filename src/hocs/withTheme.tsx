import theme from '@laboriosi/evalu8-tokens/theme.json'
import { ComponentType } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '~components/GlobalStyle'
import '@laboriosi/evalu8-fonts/fonts.css'

export default function withTheme<T>(Component: ComponentType<T>) {
  const NewComponent = (props: T) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...props} />
    </ThemeProvider>
  )

  return NewComponent
}
