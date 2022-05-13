import React from 'react'

type Variant = 'primary' | 'secondary' | 'tertiary' 

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

export interface StyledButtonProps {
  $variant: Variant
}
