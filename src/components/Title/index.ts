import styled from 'styled-components'
import withTheme from '~hocs/withTheme'

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size.s7};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  color: ${({ theme }) => theme.neutral.text.strong};
`

export default withTheme(Title)
