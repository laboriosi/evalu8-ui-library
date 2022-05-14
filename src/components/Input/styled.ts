import styled, { css } from 'styled-components'
import { StyledProps } from './types'

export const Input = styled.input<StyledProps>`
  height: 48px;
  outline: none;
  background: ${({ theme }) => theme.neutral.background.default};
  border-width: ${({ theme }) => theme.border.width.thinner};
  border-style: ${({ theme }) => theme.border.style.solid};
  border-color: ${({ theme }) => theme.neutral.border.default};
  border-radius: ${({ theme }) => theme.border.radius.medium};
  font-size: ${({ theme }) => theme.font.size.s3};
  padding: ${({ theme }) => theme.spacing.s3};

  :focus {
    background: ${({ theme }) => theme.neutral.background.weak};
    border-color: ${({ theme }) => theme.neutral.border.strong};
  }

  ${({ $error, theme }) =>
    $error &&
    css`
      border-color: ${theme.danger.border.default};
    `}
`
