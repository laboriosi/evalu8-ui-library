interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  mask: string | Array<string | RegExp>
  maskPlaceholder?: string | null | undefined
  alwaysShowMask?: boolean | undefined
  inputRef?: React.Ref<HTMLInputElement> | undefined
  beforeMaskedStateChange?(states: BeforeMaskedStateChangeStates): InputState
}

declare module 'react-input-mask' {
  const ReactInputMask: ComponentType<Props>
  export default ReactInputMask
}
