import withTheme from '~hocs/withTheme'
import * as Styled from './styled'
import { Props } from './types'
import InputMask from 'react-input-mask'
import { InputHTMLAttributes } from 'react'

export function Input({ mask, error, innerRef, ...rest }: Props) {
  if (mask)
    return (
      <InputMask mask={mask} maskChar={null} {...rest}>
        {(inputProps: InputHTMLAttributes<HTMLInputElement>) => (
          <Styled.Input $error={error} {...inputProps} />
        )}
      </InputMask>
    )

  return <Styled.Input $error={error} ref={innerRef} {...rest} />
}

export default withTheme(Input)
