import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, test } from 'vitest'
import Home from '../pages/home/Home'

describe('Home', () => {
  test('renders the Home component', () => {
    render(<Home />)
    expect(screen.getByText('Search')).toBeDefined()
    expect(screen.getByText('Type name hero from Star war')).toBeDefined()
    expect(screen.getByPlaceholderText('Search')).toBeDefined()
  })
})
