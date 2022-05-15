import { useRef, ChangeEvent, ClipboardEvent, KeyboardEvent } from 'react'
import withTheme from '~hocs/withTheme'
import * as Styled from './styled'
import { Props } from './types'

function CodeInput(props: Props) {
  const inputReferences = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]
  const inputCommonProps = {
    ...props,
    type: 'number',
    onKeyDown: handleKeyDown,
    onInput: handleInput,
    onPaste: handlePaste,
  }

  function pasteInEachInput(value: string) {
    inputReferences.forEach((inputReference, index) => {
      ;(inputReference.current as HTMLInputElement).value = value[index]
    })
  }

  function changeInputFocus(id: string, direction: 'previous' | 'next' | 'last') {
    const currentIndex = Number(id)
    const options = {
      previous: currentIndex - 1,
      next: currentIndex + 1,
      last: inputReferences.length - 1,
    }
    const focusedIndex = options[direction]

    inputReferences[focusedIndex]?.current?.focus()
  }

  function hasOnlyNumbers(value: string) {
    const regexpNumber = /[0-9]/

    return regexpNumber.test(value)
  }

  function limitInputSize(event: ChangeEvent<HTMLInputElement>, size: number) {
    event.target.value = event.target.value.slice(0, size)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    const hasPressedBackspace = event.key === 'Backspace'
    const isInputEmpty = event.currentTarget.value.length === 0
    const isInputFilled = !isInputEmpty

    if (hasPressedBackspace && isInputEmpty) {
      changeInputFocus(event.currentTarget.id, 'previous')
    }
    if (hasPressedBackspace && isInputFilled) {
      event.currentTarget.value = ''
      changeInputFocus(event.currentTarget.id, 'previous')
      event.preventDefault()
    }
  }

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    limitInputSize(event, 1)

    if (hasOnlyNumbers(event.target.value)) changeInputFocus(event.target.id, 'next')
  }

  function handlePaste(event: ClipboardEvent<HTMLInputElement>) {
    const value = event.clipboardData.getData('text')

    if (hasOnlyNumbers(value)) {
      pasteInEachInput(value)
      changeInputFocus(event.currentTarget.id, 'last')
    }
  }

  return (
    <div>
      <Styled.Input {...inputCommonProps} id="0" innerRef={inputReferences[0]} />
      <Styled.Input {...inputCommonProps} id="1" innerRef={inputReferences[1]} />
      <Styled.Input {...inputCommonProps} id="2" innerRef={inputReferences[2]} />
      <Styled.Input {...inputCommonProps} id="3" innerRef={inputReferences[3]} />
    </div>
  )
}

export default withTheme(CodeInput)
