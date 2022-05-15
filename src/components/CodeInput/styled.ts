import styled from 'styled-components'
import DefaultInput from '~components/Input'

export const Input = styled(DefaultInput)`
  width: 76px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  [type='number'] {
    -moz-appearance: textfield;
  }

  :not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing.s4};
  }
`
