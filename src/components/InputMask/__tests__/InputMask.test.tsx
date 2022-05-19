import userEvent from '@testing-library/user-event'
import Field from '~components/Field'
import Form from '~components/Form'
import { render, screen } from '~utils/tests'

describe('InputMask', () => {
  it('should be a empty input when has a non group chat at the beginning of the mask', async () => {
    const user = userEvent.setup()

    render(
      <Form initialValues={{ lorem: '' }} onSubmit={jest.fn()} aria-label="form">
        <Field name="lorem" label="Lorem" mask="+99 9999-9999" />
      </Form>,
    )

    await user.click(screen.getByRole('textbox'))

    expect(screen.getByRole('textbox')).toHaveValue('')
  })

  it('should only put the mask when type the first char', async () => {
    const user = userEvent.setup()

    render(
      <Form initialValues={{ lorem: '' }} onSubmit={jest.fn()} aria-label="form">
        <Field name="lorem" label="Lorem" mask="+99 9999-9999" />
      </Form>,
    )

    await user.click(screen.getByRole('textbox'))
    await user.type(screen.getByRole('textbox'), '1')

    expect(screen.getByRole('textbox')).toHaveValue('+1')
  })
})
