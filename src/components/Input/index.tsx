import withTheme from '~hocs/withTheme'
import * as Styled from './styled'
import { Props } from './types'
import InputMask from 'react-input-mask'
import { InputHTMLAttributes } from 'react'

function Input({ mask, error, ...rest }: Props) {
  if (mask)
    return (
      <InputMask mask={mask} maskChar={null} {...rest}>
        {(inputProps: InputHTMLAttributes<HTMLInputElement>) => (
          <Styled.Input {...inputProps} $error={error} />
        )}
      </InputMask>
    )

  return <Styled.Input $error={error} {...rest} />
}

export default withTheme(Input)
