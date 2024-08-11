import '@testing-library/jest-dom'
import { expect, test } from 'vitest'
import { swaApi } from '../services/swapi'
test('getHeroesByPage endpoint returns data for a given page number', async () => {
  const result = await swaApi.endpoints.getHeroesByPage.initiate(1)
  expect(result).toBeDefined()
})

test('getHeroByID endpoint returns data for a given ID', async () => {
  const result = await swaApi.endpoints.getHeroByID.initiate(1)
  expect(result).toBeDefined()
})

test('search mutation returns data for a given search term', async () => {
  const result = await swaApi.endpoints.search.initiate('Luke')
  expect(result).toBeDefined()
})
