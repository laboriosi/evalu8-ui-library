import styled from 'styled-components'
import withTheme from '~hocs/withTheme'

const ErrorText = styled.p`
  font-size: ${({ theme }) => theme.font.size.s2};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.danger.text.default};
`

export default withTheme(ErrorText)
