import { css } from 'styled-components'

export default {
  primary: css`
    color: ${({ theme }) => theme.neutral.text.inverted};
    background: ${({ theme }) => theme.brand.background.default};
    border: none;

    :hover {
      background-color: ${({ theme }) => theme.brand.background.strong};
    }

    :disabled {
      color: ${({ theme }) => theme.neutral.text.weak};
      border-width: ${({ theme }) => theme.border.width.thinner};
      border-style: ${({ theme }) => theme.border.style.solid};
      border-color: ${({ theme }) => theme.neutral.border.default};
      background: ${({ theme }) => theme.neutral.background.weak};
      cursor: not-allowed;
    }
  `,
  secondary: css`
    color: ${({ theme }) => theme.neutral.text.strong};
    border-width: ${({ theme }) => theme.border.width.thinner};
    border-style: ${({ theme }) => theme.border.style.solid};
    border-color: ${({ theme }) => theme.neutral.border.strong};
    background: transparent;

    :hover {
      background-color: ${({ theme }) => theme.neutral.background.weak};
    }

    :disabled {
      border-width: ${({ theme }) => theme.border.width.thinner};
      border-style: ${({ theme }) => theme.border.style.solid};
      border-color: ${({ theme }) => theme.neutral.border.default};
      color: ${({ theme }) => theme.neutral.text.weak};
      background-color: transparent;
      cursor: not-allowed;
    }
  `,
  tertiary: css`
    color: ${({ theme }) => theme.brand.background.default};
    background: transparent;
    border: none;

    :hover {
      background-color: ${({ theme }) => theme.brand.background.weakest};
    }

    :disabled {
      color: ${({ theme }) => theme.neutral.text.weak};
    }
  `,
}
