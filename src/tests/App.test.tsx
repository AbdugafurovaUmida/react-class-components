import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import { describe, test } from 'vitest'
import App from '../App'

describe('App', () => {
  test('renders the App component', () => {
    render(<App />)
  })
})
