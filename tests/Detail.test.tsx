import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, vi, expect } from 'vitest'
import { MemoryRouter, useParams } from 'react-router-dom'
import { useGetHeroByIDQuery } from '../services/swapi'
import { useDispatch } from 'react-redux'
import Detail from '../pages/detail/Detail'

vi.mock('react-router-dom', async () => {
  const actual = await import('react-router-dom')

  return {
    ...actual,
    useParams: vi.fn(),
  } as typeof actual
})

vi.mock('../services/swapi', () => ({
  useGetHeroByIDQuery: vi.fn(),
}))

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
}))

describe('Detail component', () => {
  it('should render the detail page with the correct information', async () => {
    const mockData = {
      name: 'Luke Skywalker',
      gender: 'male',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
    }

    vi.mocked(useParams).mockReturnValue({ id: '1' })
    const mockRefetch = vi.fn()

    vi.mocked(useParams).mockReturnValue({ id: '1' })
    vi.mocked(useGetHeroByIDQuery).mockReturnValue({
      data: mockData,
      isLoading: false,
      isFetching: false,
      isError: false,
      error: undefined,
      refetch: mockRefetch,
    })
    vi.mocked(useDispatch).mockReturnValue(vi.fn())
    vi.mocked(useDispatch).mockReturnValue(vi.fn())

    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>,
    )

    await waitFor(() => {
      expect(screen.getByText('Name: Luke Skywalker')).toBeInTheDocument()
      expect(screen.getByText('Gender: male')).toBeInTheDocument()
      expect(screen.getByText('Height: 172')).toBeInTheDocument()
      expect(screen.getByText('Mass: 77')).toBeInTheDocument()
      expect(screen.getByText('Hair Color: blond')).toBeInTheDocument()
      expect(screen.getByText('Skin Color: fair')).toBeInTheDocument()
    })
  })
})
