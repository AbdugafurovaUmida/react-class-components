import { SEARCH } from '../consts/index'
import { beforeAll, describe, expect, test } from 'vitest'
import { getPeoples } from '../api/people/index'

describe('Request search', () => {
  let response: Response
  const json = getPeoples(SEARCH)
  beforeAll(async () => {
    response = await fetch('https://swapi.dev/api/people/?search=&page=')
  }, 3000)

  test('Should have response status 200', () => {
    expect(response.status).toBe(200)
  })
  test('Should exist', () => {
    expect(json).toBeTruthy()
  })
})
