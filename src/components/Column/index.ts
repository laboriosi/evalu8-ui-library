import styled from 'styled-components'
import withTheme from '~hocs/withTheme'

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export default withTheme(Column)
