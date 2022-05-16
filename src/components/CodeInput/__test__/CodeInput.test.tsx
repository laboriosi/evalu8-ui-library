import CodeInput from '..'
import userEvent from '@testing-library/user-event'
import { render, screen } from '~utils/tests'

describe('CodeInput', () => {
  it('should be able to type', async () => {
    const user = userEvent.setup()

    render(<CodeInput />)

    const [firstInput, secondInput, thirdInput, fourthInput] =
      screen.getAllByRole('spinbutton')

    await user.type(firstInput, '1234')

    expect(firstInput).toHaveValue(1)
    expect(secondInput).toHaveValue(2)
    expect(thirdInput).toHaveValue(3)
    expect(fourthInput).toHaveValue(4)
  })

  it('should be able to paste', async () => {
    const user = userEvent.setup()

    render(<CodeInput />)

    const [firstInput, secondInput, thirdInput, fourthInput] =
      screen.getAllByRole('spinbutton')

    await user.click(firstInput)
    await user.paste('1234')

    expect(firstInput).toHaveValue(1)
    expect(secondInput).toHaveValue(2)
    expect(thirdInput).toHaveValue(3)
    expect(fourthInput).toHaveValue(4)
  })

  it('should be able to basckpace when input is filled', async () => {
    const user = userEvent.setup()

    render(<CodeInput />)

    const [firstInput, , , fourthInput] = screen.getAllByRole('spinbutton')

    await user.type(firstInput, '1234{backspace}')

    expect(fourthInput).toHaveValue(null)
  })

  it('should be able to basckpace when input is empty', async () => {
    const user = userEvent.setup()

    render(<CodeInput />)

    const [firstInput, , thirdInput, fourthInput] = screen.getAllByRole('spinbutton')

    await user.type(firstInput, '123')
    await user.type(fourthInput, '{backspace}')

    expect(thirdInput).toHaveValue(3)
  })
})
