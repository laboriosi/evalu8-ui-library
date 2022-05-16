import Field from '..'
import Form from '~components/Form'
import { render, screen } from '~utils/tests'
import userEvent from '@testing-library/user-event'
import { object, string } from 'yup'

describe('Field', () => {
  it('should render', () => {
    render(
      <Form initialValues={{ lorem: 'ipsum' }} onSubmit={jest.fn()} aria-label="form">
        <Field name="lorem" label="Lorem" />
      </Form>,
    )

    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('should be able to pass his own handleChange', async () => {
    const handleChange = jest.fn()
    const user = userEvent.setup()

    render(
      <Form initialValues={{ lorem: '' }} onSubmit={jest.fn()} aria-label="form">
        <Field name="lorem" label="Lorem" onChange={handleChange} />
      </Form>,
    )

    await user.type(screen.getByRole('textbox'), 'lorem ipsum')

    expect(handleChange).toBeCalled()
  })

  it('should be able to render a error', async () => {
    const user = userEvent.setup()

    render(
      <Form
        initialValues={{ lorem: '', ipsum: '' }}
        validationSchema={object().shape({
          lorem: string().required(),
        })}
        onSubmit={jest.fn()}
        aria-label="form"
      >
        <Field name="lorem" label="Lorem" />
        <Field name="ipsum" label="Lorem" />
      </Form>,
    )

    const [firstField, secondField] = screen.getAllByRole('textbox')

    await user.click(firstField)
    await user.click(secondField)

    expect(screen.queryByText('lorem is a required field')).toBeInTheDocument()
  })
})
