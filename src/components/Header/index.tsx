import styled from 'styled-components'
import withTheme from '~hocs/withTheme'

const Header = styled.header`
  margin-left: ${({ theme }) => theme.spacing.s8};
  margin-top: ${({ theme }) => theme.spacing.s4};
`

export default withTheme(Header)
