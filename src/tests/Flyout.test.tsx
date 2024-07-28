import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Flyout } from '../components/flyout/Flyout'
import React from 'react'
import { describe, test } from 'vitest'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { store } from '../store/store'

describe('Flyout', () => {
  test('renders the Flyout component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Flyout />
        </MemoryRouter>
      </Provider>,
    )
  })
})
