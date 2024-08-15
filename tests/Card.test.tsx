import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { makeStore } from '../store/store'
import { expect, describe, it, vi, beforeEach } from 'vitest'
import React from 'react'
import Card from '../components/card/Card'

import People from '../types/people'
import { useRouter } from 'next/router'
const store = makeStore()

const fakeData: People = {
  name: '',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: '',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/6/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/7/',
  ],
  species: ['https://swapi.dev/api/species/1/'],
  vehicles: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
  starships: ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
  url: 'https://swapi.dev/api/people/1/',
  created: '',
  edited: '',
}

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}))
const renderCard = (data: People) => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Card people={data} />
      </MemoryRouter>
    </Provider>,
  )
}

describe('Card', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue({
      asPath: '/mock-path',
    })
  })
  it('should render name', () => {
    renderCard(fakeData)
    expect(screen.getByTestId('search-item-name').textContent).toBe(fakeData.name)
  })

  it('should render gender', () => {
    renderCard(fakeData)
    expect(screen.getByTestId('search-item-gender').textContent).toBe(fakeData.gender)
  })

  it('should render checkbox', () => {
    renderCard(fakeData)
    expect(screen.getByTestId('search-item-checkbox')).toBeInTheDocument()
  })
})
