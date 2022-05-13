import Button from '..'
import { render, screen } from '~utils/tests'
import theme from '@laboriosi/evalu8-tokens/theme.json'

describe('Button', () => {
  it('should render', () => {
    render(<Button>Lorem Ipsum</Button>)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  describe('variant=primary', () => {
    it('should render with the right style', () => {
      render(<Button>Lorem Ipsum</Button>)

      expect(screen.getByRole('button')).toHaveStyle(`
        color: ${theme.neutral.text.inverted}; 
        background: ${theme.brand.background.default}; 
        border: none;
      `)
    })

    it('should render with the right style when disabled', () => {
      render(<Button disabled>Lorem Ipsum</Button>)

      expect(screen.getByRole('button')).toHaveStyle(`
        color: ${theme.neutral.text.weak}; 
        border-width: ${theme.border.width.thinner}; 
        border-style:${theme.border.style.solid};
        border-color: ${theme.neutral.border.default};
        background: ${theme.neutral.background.weak};
        cursor: not-allowed;
      `)
    })
  })

  describe('variant=secondary', () => {
    it('should render with the right style', () => {
      render(<Button variant="secondary">Lorem Ipsum</Button>)

      expect(screen.getByRole('button')).toHaveStyle(`
        color: ${theme.neutral.text.strong};
        border-width: ${theme.border.width.thinner};
        border-style: ${theme.border.style.solid};
        border-color: ${theme.neutral.border.strong};
        background: transparent;
      `)
    })

    it('should render with the right style when disabled', () => {
      render(
        <Button variant="secondary" disabled>
          Lorem Ipsum
        </Button>,
      )

      expect(screen.getByRole('button')).toHaveStyle(`
        color: ${theme.neutral.text.weak}; 
        border-width: ${theme.border.width.thinner};
        border-style: ${theme.border.style.solid};
        border-color: ${theme.neutral.border.default};
        background-color: transparent;
        cursor: not-allowed;
      `)
    })
  })

  describe('variant=tertiary', () => {
    it('should render with the right style', () => {
      render(<Button variant="tertiary">Lorem Ipsum</Button>)

      expect(screen.getByRole('button')).toHaveStyle(`
        color: ${theme.brand.background.default};
        background: transparent;
        border: none;
      `)
    })

    it('should render with the right style when disabled', () => {
      render(
        <Button variant="tertiary" disabled>
          Lorem Ipsum
        </Button>,
      )

      expect(screen.getByRole('button')).toHaveStyle(`
        color: ${theme.neutral.text.weak}; 
      `)
    })
  })
})
