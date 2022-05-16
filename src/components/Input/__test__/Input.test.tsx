import Input from '..'
import theme from '@laboriosi/evalu8-tokens/theme.json'
import userEvent from '@testing-library/user-event'
import { render, screen } from '~utils/tests'

describe('Input', () => {
  it('should render the component with a border', () => {
    render(<Input />)

    expect(screen.getByRole('textbox')).toHaveStyle(`
      border-color: ${theme.neutral.border.default};
    `)
  })

  it('should render the component with a red border', () => {
    render(<Input error />)

    expect(screen.getByRole('textbox')).toHaveStyle(`
      border-color: ${theme.danger.border.default};
    `)
  })

  it('should be able to use a mask', async () => {
    const user = userEvent.setup()

    render(<Input mask="99/99/9999" />)

    await user.type(screen.getByRole('textbox'), '30123000')

    expect(screen.getByRole('textbox')).toHaveValue('30/12/3000')
  })
})
