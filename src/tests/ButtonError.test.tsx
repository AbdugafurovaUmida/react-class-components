import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, test } from 'vitest'
import ButtonError from '../components/ButtonError'

describe('ButtonError', () => {
  test('renders the ButtonError component', () => {
    render(<ButtonError />)
    expect(screen.getByText('Break Me Completely')).toBeDefined()
  })
})
