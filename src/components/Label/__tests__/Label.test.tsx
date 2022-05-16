import Label from '..'
import theme from '@laboriosi/evalu8-tokens/theme.json'
import { render, screen } from '~utils/tests'

describe('Label', () => {
  it('should render the component with the right style', () => {
    render(<Label>Lorem Ipsum</Label>)

    expect(screen.getByText('Lorem Ipsum')).toHaveStyle(`
      font-size: ${theme.font.size.s4};
      font-weight: ${theme.font.weight.semibold};
      color: ${theme.neutral.text.strong};
    `)
  })

  it('should render the component in a red color', () => {
    render(<Label error>Lorem Ipsum</Label>)

    expect(screen.getByText('Lorem Ipsum')).toHaveStyle(`
      color: ${theme.danger.text.default};
    `)
  })
})
