import Subtitle from '..'
import theme from '@laboriosi/evalu8-tokens/theme.json'
import { render, screen } from '~utils/tests'

describe('Subtitle', () => {
  it('should render the component with the right style', () => {
    render(<Subtitle>Lorem Ipsum</Subtitle>)

    expect(screen.getByRole('heading', { level: 3 })).toHaveStyle(`
      font-size: ${theme.font.size.s4};
      font-weight: ${theme.font.weight.regular};
      color: ${theme.neutral.text.default};
    `)
  })
})
