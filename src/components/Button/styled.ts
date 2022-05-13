import styled from 'styled-components'
import variants from './variants'
import { StyledButtonProps } from './types'

export const Button = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 ${({ theme }) => theme.spacing.s2};
  font-size: ${({ theme }) => theme.font.size.s3};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  border-radius: ${({ theme }) => theme.border.radius.large};
  cursor: pointer;

  ${({ $variant }) => variants[$variant]}
`
