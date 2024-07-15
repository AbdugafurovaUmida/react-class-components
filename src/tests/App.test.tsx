import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, test } from 'vitest'
import App from '../App'

describe('App', () => {
  test('renders the App component', () => {
    render(<App />)
    expect(screen.getByText('Search')).toBeDefined()
    expect(screen.getByText('Type name hero from Star war')).toBeDefined()
    expect(screen.getByPlaceholderText('Search')).toBeDefined()
  })
})
