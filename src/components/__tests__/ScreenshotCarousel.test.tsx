import { render, screen } from '@testing-library/react'
import ScreenshotCarousel from '../ScreenshotCarousel'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

describe('ScreenshotCarousel Component', () => {
  test('should render carousel container', () => {
    const { container } = render(<ScreenshotCarousel />)
    const carousel = container.querySelector('[data-testid="carousel"]')
    expect(carousel).toBeInTheDocument()
  })

  test('should render navigation dots', () => {
    render(<ScreenshotCarousel />)
    const dots = screen.getAllByRole('button', { name: /slide/i })
    expect(dots.length).toBeGreaterThan(0)
  })

  test('should have left and right navigation buttons', () => {
    render(<ScreenshotCarousel />)
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  test('should render first screenshot initially', () => {
    render(<ScreenshotCarousel />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(0)
  })
})
