import Column from '..'
import { render, screen } from '~utils/tests'

describe('Column', () => {
  it('should render', () => {
    render(
      <Column>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis nibh, aliquet
        sed scelerisque sodales, ultricies sit amet enim.
      </Column>,
    )

    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis nibh, aliquet sed scelerisque sodales, ultricies sit amet enim.',
      ),
    ).toBeInTheDocument()
  })
})
