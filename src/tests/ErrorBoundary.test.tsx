import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ErrorBoundary from '../components/error-boundary/ErrorBoundary'

const ProblemChild = () => {
  throw new Error('Test error')
}

describe('ErrorBoundary', () => {
  it('should render children without error', () => {
    render(
      <ErrorBoundary>
        <div>Child component</div>
      </ErrorBoundary>,
    )

    expect(screen.getByText('Child component')).toBeInTheDocument()
  })

  it('should display fallback UI when a child component throws an error', () => {
    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>,
    )

    expect(screen.getByText('Sorry.. there was an error')).toBeInTheDocument()
  })
})
