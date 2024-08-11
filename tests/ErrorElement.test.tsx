import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import ErrorElement from '../components/error-elements/ErrorElement'

describe('ErrorElement', () => {
  it('should render the error message and image', () => {
    render(
      <MemoryRouter>
        <ErrorElement />
      </MemoryRouter>,
    )

    expect(screen.getByText('Wow, something went wrong...')).toBeInTheDocument()

    const link = screen.getByText('Back to home page')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })

  it('should navigate to the home page when the link is clicked', () => {
    render(
      <MemoryRouter>
        <ErrorElement />
      </MemoryRouter>,
    )

    const link = screen.getByText('Back to home page')
    expect(link).toBeInTheDocument()
    expect(link.closest('a')).toHaveAttribute('href', '/')
  })
})
