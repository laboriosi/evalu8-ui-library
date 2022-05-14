import styled from 'styled-components'
import withTheme from '~hocs/withTheme'

const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.s4};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.neutral.text.default};
`

export default withTheme(Subtitle)
