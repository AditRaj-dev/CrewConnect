import { render, screen } from '@testing-library/react'
import FeatureCard from '../FeatureCard'

const mockFeature = {
  id: 'test',
  title: 'Test Feature',
  description: 'This is a test feature',
  icon: '/icons/test.svg',
}

describe('FeatureCard Component', () => {
  test('should render feature title', () => {
    render(<FeatureCard feature={mockFeature} />)
    expect(screen.getByText('Test Feature')).toBeInTheDocument()
  })

  test('should render feature description', () => {
    render(<FeatureCard feature={mockFeature} />)
    expect(screen.getByText('This is a test feature')).toBeInTheDocument()
  })

  test('should render feature icon image', () => {
    render(<FeatureCard feature={mockFeature} />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', '/icons/test.svg')
  })

  test('should have proper card styling', () => {
    const { container } = render(<FeatureCard feature={mockFeature} />)
    const card = container.querySelector('div')
    expect(card).toHaveClass('rounded-lg')
  })
})
