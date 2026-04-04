import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero Component', () => {
  test('should render headline', () => {
    render(<Hero />)
    // Headline is split across two elements, check both parts
    expect(screen.getByText('Stay Connected')).toBeInTheDocument()
    expect(screen.getByText('in Real Time')).toBeInTheDocument()
  })

  test('should render subheadline', () => {
    render(<Hero />)
    expect(
      screen.getByText('Know where your friends are. Coordinate campus life in seconds.')
    ).toBeInTheDocument()
  })

  test('should render primary CTA button', () => {
    render(<Hero />)
    const button = screen.getByRole('button', { name: /Download Now/i })
    expect(button).toBeInTheDocument()
  })

  test('should render secondary CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /See What's Inside/i })).toBeInTheDocument()
  })

  test('should have proper styling classes', () => {
    const { container } = render(<Hero />)
    const heroSection = container.querySelector('section')
    expect(heroSection).toHaveClass('min-h-screen')
  })
})
