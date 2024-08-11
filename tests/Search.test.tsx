import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React = require('react')
import { describe, expect, test } from 'vitest'
import Search from '../components/search/Search'

describe('Search', () => {
  test('renders the Search component', () => {
    render(
      <Search
        defaultValue={''}
        isLoading={false}
        onChange={function (): Promise<void> {
          throw new Error('Function not implemented.')
        }}
      />,
    )
    expect(screen.getByDisplayValue('')).toBeDefined()
    expect(screen.getByText('Search')).toBeDefined()
    expect(screen.getByPlaceholderText('Search')).toBeDefined()
  })
})
