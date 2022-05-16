import Form from '..'
import Field from '~components/Field'
import { render, screen } from '~utils/tests'

describe('Form', () => {
  it('should render', () => {
    render(
      <Form initialValues={{ lorem: 'ipsum' }} onSubmit={jest.fn()} aria-label="form">
        <Field name="lorem" label="Lorem" />
      </Form>,
    )

    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('should render with render props', () => {
    render(
      <Form initialValues={{ lorem: 'ipsum' }} onSubmit={jest.fn()} aria-label="form">
        {() => <Field name="lorem" label="Lorem" />}
      </Form>,
    )

    expect(screen.getByRole('form')).toBeInTheDocument()
  })
})
