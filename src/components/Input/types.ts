import { InputHTMLAttributes, RefObject } from 'react'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  mask?: string
  innerRef?: RefObject<HTMLInputElement>
}

export interface StyledProps {
  $error?: boolean
}
