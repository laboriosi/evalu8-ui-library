import { Props } from './types'
import * as Styled from './styled'
import withTheme from '~hocs/withTheme'

function Button({ children, variant = 'primary', ...rest }: Props) {
  return (
    <Styled.Button $variant={variant} {...rest}>
      {children}
    </Styled.Button>
  )
}

export default withTheme<Props>(Button)
