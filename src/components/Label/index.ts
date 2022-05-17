import styled, { css } from 'styled-components'
import { Props } from './types'
import withTheme from '~hocs/withTheme'

const Label = styled.label<Props>`
  font-size: ${({ theme }) => theme.font.size.s4};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  color: ${({ theme }) => theme.neutral.text.strong};
  margin-bottom: ${({ theme }) => theme.spacing.s2};

  ${({ error, theme }) =>
    error &&
    css`
      color: ${theme.danger.text.default};
    `};
`

export default withTheme(Label)
