import theme from '@laboriosi/evalu8-tokens/theme.json'
import GlobalStyle from '~components/GlobalStyle'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import '@laboriosi/evalu8-fonts/fonts.css'

function render(ui: React.ReactElement, renderOptions?: RenderOptions) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Router>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }
