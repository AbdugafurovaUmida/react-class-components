import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { store } from '../store/store'
import People from '../types/people'
import List from '../components/list/List'

describe('List', () => {
  const mockData: People[] = [
    {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
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
    },
    {
      name: 'Han Solo',
      height: '180',
      mass: '80',
      hair_color: 'brown',
      skin_color: 'fair',
      eye_color: 'brown',
      birth_year: '29BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: [
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/6/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/1/',
      ],
      species: ['https://swapi.dev/api/species/1/'],
      vehicles: ['https://swapi.dev/api/vehicles/14/'],
      starships: [
        'https://swapi.dev/api/starships/12/',
        'https://swapi.dev/api/starships/22/',
        'https://swapi.dev/api/starships/18/',
      ],
      url: 'https://swapi.dev/api/people/2/',
      created: '',
      edited: '',
    },
  ]
  const isLoad: boolean = true

  it('should render search results', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <List data={mockData} isLoading={isLoad} />
        </MemoryRouter>
      </Provider>,
    )

    expect(screen.getAllByTestId('list').length).toBe(1)
  })
})
