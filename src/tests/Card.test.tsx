import '@testing-library/jest-dom'
import React from 'react'
import { render } from '@testing-library/react'
import Card from '../components/card/Card'
import People from '../types/products'
import { describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import DescriptionField from '../components/description-field/DescriptionField'

const mockData: People = {
  name: 'Luka',
  birth_year: '19BBY',
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  eye_color: 'blue',
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
  ],
  gender: 'male',
  hair_color: 'blond',
  height: '172',
  homeworld: 'https://swapi.dev/api/planets/1/',
  mass: '77',
  skin_color: 'fair',
  species: [],
  url: 'https://swapi.dev/api/people/1/',
  starships: ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
  vehicles: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
}

describe('Card component', () => {
  it('renders the correct Hero information', () => {
    render(
      <MemoryRouter>
        <Card people={mockData} />
      </MemoryRouter>,
    )
    const label = 'Test Label'
    const children = 'Test Children'

    const { getByText } = render(<DescriptionField label={label} children={children} />)

    expect(getByText(`${label}:`)).to.exist
    expect(getByText(children)).to.exist
  })

  it('displays the correct data', () => {
    render(
      <MemoryRouter>
        <Card people={mockData} />
      </MemoryRouter>,
    )
  })
})
