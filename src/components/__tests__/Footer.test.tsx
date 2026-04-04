import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer Component', () => {
  test('should render copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/CrewConnect © 2026/)).toBeInTheDocument()
  })

  test('should render footer links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Privacy Policy/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Terms of Service/i })).toBeInTheDocument()
  })

  test('should have footer styling', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toHaveClass('bg-slate-950')
  })
})
