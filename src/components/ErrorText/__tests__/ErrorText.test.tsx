import ErrorText from '..'
import theme from '@laboriosi/evalu8-tokens/theme.json'
import { screen } from '@testing-library/react'
import { render } from '~utils/tests'

describe('ErrorText', () => {
  it('should render the component with the right style', () => {
    render(<ErrorText>Lorem Ipsum</ErrorText>)

    expect(screen.getByText('Lorem Ipsum')).toHaveStyle(`
      font-size: ${theme.font.size.s2};
      font-weight: ${theme.font.weight.medium};
      color: ${theme.danger.text.default};
    `)
  })
})
