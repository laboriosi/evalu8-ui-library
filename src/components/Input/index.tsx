import * as Styled from './styled'
import { Props } from './types'
import withTheme from '~hocs/withTheme'
import InputMask from '~components/InputMask'

export function Input({ mask, error, innerRef, ...rest }: Props) {
  if (mask) return <InputMask error={error} mask={mask} {...rest} />

  return <Styled.Input $error={error} ref={innerRef} {...rest} />
}

export default withTheme(Input)
