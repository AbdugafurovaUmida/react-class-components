import { render } from '@testing-library/react'
import React from 'react'
import { describe, it } from 'vitest'
import Results from '../components/result/Results'
import { MemoryRouter } from 'react-router-dom'

describe('Results', () => {
  it('should do something', () => {
    render(
      <MemoryRouter initialEntries={['?page=1']}>
        <Results data={undefined} />
      </MemoryRouter>,
    )
  })
})
