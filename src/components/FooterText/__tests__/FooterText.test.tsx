import FooterText from '..'
import theme from '@laboriosi/evalu8-tokens/theme.json'
import { screen } from '@testing-library/react'
import { render } from '~utils/tests'

describe('FooterText', () => {
  it('should render the component with the default style', () => {
    render(<FooterText>Lorem Ipsum</FooterText>)

    expect(screen.getByText('Lorem Ipsum')).toHaveStyle(`
      font-size: ${theme.font.size.s2};
      font-weight: ${theme.font.weight.medium};
      color: ${theme.neutral.text.default};
    `)
  })

  it('should render the component with the bold style', () => {
    render(<FooterText bold>Lorem Ipsum</FooterText>)

    expect(screen.getByText('Lorem Ipsum')).toHaveStyle(`
      font-weight: ${theme.font.weight.semibold};
      color: ${theme.neutral.text.weak};
    `)
  })
})
