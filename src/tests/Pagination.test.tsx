import React from 'react'
import { render } from '@testing-library/react'
import Pagination from '../components/pagination/Pagination'
import { describe, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

describe('Pagination component', () => {
  it('should do something', () => {
    render(
      <MemoryRouter initialEntries={['?page=1']}>
        <Pagination data={undefined} />
      </MemoryRouter>,
    )
  })
})
