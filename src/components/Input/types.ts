import { InputHTMLAttributes } from 'react'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  mask?: string
}

export interface StyledProps {
  $error?: boolean
}
