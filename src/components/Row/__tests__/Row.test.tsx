import Row from '..'
import { render, screen } from '~utils/tests'

describe('Row', () => {
  it('should render', () => {
    render(
      <Row>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis nibh, aliquet
        sed scelerisque sodales, ultricies sit amet enim.
      </Row>,
    )

    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis nibh, aliquet sed scelerisque sodales, ultricies sit amet enim.',
      ),
    ).toBeInTheDocument()
  })
})
