import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import { describe, vi, it } from 'vitest'
import NotfoundComponent from '../components/notfound/Notfound'

vi.mock('../components/notfound/Notfound', () => ({
  __esModule: true,
  default: () => <div>Not Found Component</div>,
}))

describe('NotFound Component', () => {
  it('renders NotFoundComponent', () => {
    render(<NotfoundComponent />)
  })
})
