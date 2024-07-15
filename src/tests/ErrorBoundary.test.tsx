import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../App'
import ErrorBoundary from '../components/error-boundary/ErrorBoundary'
import Search from '../components/search/Search'
import React from 'react'

const renderProviders = (ui: React.ReactElement) => render(ui, {})

describe('Error Boundary', () => {
  it(`should render error boundary component when there is no error`, () => {
    const { getByText } = renderProviders(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>,
    )

    expect(getByText('Search')).toBeDefined()
  })

  it(`should render error boundary component when there is no error`, () => {
    const { getByPlaceholderText } = renderProviders(
      <ErrorBoundary>
        <Search
          defaultValue={''}
          isLoading={false}
          onChange={function (): Promise<void> {
            throw new Error('Function not implemented.')
          }}
        />
        ,
      </ErrorBoundary>,
    )

    expect(getByPlaceholderText('Search')).toBeDefined()
  })
})
