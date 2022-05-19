import ReactInputMask from 'react-input-mask'
import { InputHTMLAttributes } from 'react'
import { State } from './types'
import { Props } from './types'
import * as Styled from '~components/Input/styled'

export function InputMask({ error, value: inputValue, mask, ...rest }: Props) {
  function applyMaskOnlyIfHasValue(newState: State, oldState: State, userInput: string) {
    const indexOfFirstGroupChar = mask.search(/(9|a|\*)/)
    const nonGroupCharsAtStart = mask.slice(0, indexOfFirstGroupChar)
    let { value, selection } = newState

    if (nonGroupCharsAtStart.length && typeof inputValue === 'string') {
      let cursorPosition = selection.start

      if (
        value.endsWith(nonGroupCharsAtStart) &&
        userInput !== nonGroupCharsAtStart &&
        !inputValue.endsWith(nonGroupCharsAtStart)
      ) {
        if (cursorPosition === value.length) {
          cursorPosition -= 1
          selection = { start: cursorPosition, end: cursorPosition }
        }
        value = value.slice(0, -1)
      }
    }

    return { value, selection }
  }

  return (
    <ReactInputMask
      beforeMaskedValueChange={applyMaskOnlyIfHasValue}
      maskChar={null}
      value={inputValue}
      mask={mask}
      {...rest}
    >
      {(inputProps: InputHTMLAttributes<HTMLInputElement>) => (
        <Styled.Input $error={error} {...inputProps} />
      )}
    </ReactInputMask>
  )
}

export default InputMask
