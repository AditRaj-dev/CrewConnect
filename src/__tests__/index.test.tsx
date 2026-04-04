import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

describe('Home Page', () => {
  test('should render hero section', () => {
    render(<Home />)
    expect(screen.getByText('Stay Connected in Real Time')).toBeInTheDocument()
  })

  test('should render carousel section', () => {
    render(<Home />)
    expect(screen.getAllByText("See What's Inside").length).toBeGreaterThan(0)
  })

  test('should render features section', () => {
    render(<Home />)
    expect(screen.getByText('Why CrewConnect?')).toBeInTheDocument()
  })

  test('should render sticky download bar', () => {
    render(<Home />)
    expect(screen.getByRole('button', { name: /Download APK/i })).toBeInTheDocument()
  })
})
