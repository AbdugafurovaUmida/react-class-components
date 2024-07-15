import React from 'react'
import { render } from '@testing-library/react'
import Detail from '../pages/detail/Detail'
import { describe, it } from 'vitest'

describe('Details component', () => {
  it('renders the correct Hero information', () => {
    render(<Detail />)
  })
})
