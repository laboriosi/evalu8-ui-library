import styled, { css } from 'styled-components'
import { Props } from './types'
import withTheme from '~hocs/withTheme'

const FooterText = styled.p<Props>`
  font-size: ${({ theme }) => theme.font.size.s2};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.neutral.text.default};

  ${({ bold, theme }) =>
    bold &&
    css`
      font-weight: ${theme.font.weight.semibold};
      color: ${theme.neutral.text.weak};
    `}
`

export default withTheme(FooterText)
