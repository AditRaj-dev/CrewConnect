import { features } from '../features'

describe('features data', () => {
  test('should have exactly 6 features', () => {
    expect(features).toHaveLength(6)
  })

  test('each feature should have required fields', () => {
    features.forEach((feature) => {
      expect(feature).toHaveProperty('id')
      expect(feature).toHaveProperty('title')
      expect(feature).toHaveProperty('description')
      expect(feature).toHaveProperty('icon')
      expect(typeof feature.id).toBe('string')
      expect(typeof feature.title).toBe('string')
      expect(typeof feature.description).toBe('string')
      expect(typeof feature.icon).toBe('string')
    })
  })

  test('all feature ids should be unique', () => {
    const ids = features.map((f) => f.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(features.length)
  })

  test('feature titles should not be empty', () => {
    features.forEach((feature) => {
      expect(feature.title.length).toBeGreaterThan(0)
    })
  })
})
