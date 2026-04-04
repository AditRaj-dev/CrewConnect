import { render, screen } from '@testing-library/react'
import StickyDownloadBar from '../StickyDownloadBar'

describe('StickyDownloadBar Component', () => {
  test('should render sticky bar', () => {
    const { container } = render(<StickyDownloadBar />)
    const bar = container.querySelector('[data-testid="sticky-bar"]')
    expect(bar).toBeInTheDocument()
  })

  test('should render download button', () => {
    render(<StickyDownloadBar />)
    expect(screen.getByRole('button', { name: /Download APK/i })).toBeInTheDocument()
  })

  test('should render app name', () => {
    render(<StickyDownloadBar />)
    expect(screen.getByText(/CrewConnect/i)).toBeInTheDocument()
  })

  test('should have sticky positioning', () => {
    const { container } = render(<StickyDownloadBar />)
    const bar = container.querySelector('[data-testid="sticky-bar"]')
    expect(bar).toHaveClass('sticky')
    expect(bar).toHaveClass('bottom-0')
  })
})
