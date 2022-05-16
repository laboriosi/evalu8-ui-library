import RelativeWrapper from '..'
import { render, screen } from '~utils/tests'

describe('RelativeWrapper', () => {
  it('should render', () => {
    render(
      <RelativeWrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis nibh, aliquet
        sed scelerisque sodales, ultricies sit amet enim.
      </RelativeWrapper>,
    )

    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis nibh, aliquet sed scelerisque sodales, ultricies sit amet enim.',
      ),
    ).toBeInTheDocument()
  })
})
