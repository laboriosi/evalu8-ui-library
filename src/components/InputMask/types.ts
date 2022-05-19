import { InputHTMLAttributes } from 'react'

export interface State {
  value: string
  selection: { start: number; end: number }
}

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  mask: string
}
