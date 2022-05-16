import Column from '~components/Column'
import styled from 'styled-components'
import withTheme from '~hocs/withTheme'

const RelativeColumn = styled(Column)`
  position: relative;
`

export default withTheme(RelativeColumn)
