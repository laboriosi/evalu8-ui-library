import styled from 'styled-components'
import withTheme from '~hocs/withTheme'

const ErrorText = styled.p`
  font-size: ${({ theme }) => theme.font.size.s2};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.danger.text.default};
  top: ${({ theme }) => theme.spacing.s13};
  position: absolute;
`

export default withTheme(ErrorText)
