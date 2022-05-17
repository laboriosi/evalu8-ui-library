import { withTheme } from '@storybook/theming'
import { createGlobalStyle } from 'styled-components'

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

export default withTheme(GlobalStyle)
