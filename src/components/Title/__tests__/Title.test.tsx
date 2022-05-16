import Title from '..'
import theme from '@laboriosi/evalu8-tokens/theme.json'
import { render, screen } from '~utils/tests'

describe('Title', () => {
  it('should render the component with the right style', () => {
    render(<Title>Lorem Ipsum</Title>)

    expect(screen.getByRole('heading', { level: 2 })).toHaveStyle(`
      font-size: ${theme.font.size.s7};
      font-weight: ${theme.font.weight.semibold};
      color: ${theme.neutral.text.strong};
    `)
  })
})
