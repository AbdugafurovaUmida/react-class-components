import { describe, expect, it } from 'vitest'
import People from '../types/people'
import reducer, {
  addItem,
  addToRecently,
  clearAll,
  removeItem,
  selectAll,
  peopleState,
} from '../slices/peopleSlice'

const mockPerson1: People = {
  name: 'Luke Skywalker',
  url: 'https://swapi.dev/api/people/1/',
  height: '',
  mass: '',
  hair_color: '',
  skin_color: '',
  eye_color: '',
  birth_year: '',
  gender: '',
  homeworld: '',
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: '',
  edited: '',
}

const mockPerson2: People = {
  name: 'Darth Vader',
  url: 'https://swapi.dev/api/people/4/',
  height: '',
  mass: '',
  hair_color: '',
  skin_color: '',
  eye_color: '',
  birth_year: '',
  gender: '',
  homeworld: '',
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: '',
  edited: '',
}

describe('viewedSlice', () => {
  it('should return the initial state', () => {
    const initialState: peopleState = {
      list: [],
      recently: [],
    }
    expect(reducer(initialState, { type: '' })).toEqual(initialState)
  })

  it('should handle addItem', () => {
    const initialState: peopleState = {
      list: [],
      recently: [],
    }
    const newState = reducer(initialState, addItem(mockPerson1))
    expect(newState.list).toEqual([mockPerson1])
  })

  it('should handle addItem by removing if already exists', () => {
    const initialState: peopleState = {
      list: [mockPerson1],
      recently: [],
    }
    const newState = reducer(initialState, addItem(mockPerson1))
    expect(newState.list).toEqual([])
  })

  it('should handle selectAll', () => {
    const initialState: peopleState = {
      list: [],
      recently: [],
    }
    const newState = reducer(initialState, selectAll([mockPerson1, mockPerson2]))
    expect(newState.list).toEqual([mockPerson1, mockPerson2])
  })

  it('should handle clearAll', () => {
    const initialState: peopleState = {
      list: [mockPerson1, mockPerson2],
      recently: [],
    }
    const newState = reducer(initialState, clearAll())
    expect(newState.list).toEqual([])
  })

  it('should handle removeItem', () => {
    const initialState: peopleState = {
      list: [mockPerson1, mockPerson2],
      recently: [],
    }
    const newState = reducer(initialState, removeItem(mockPerson1))
    expect(newState.list).toEqual([mockPerson2])
  })

  it('should handle addToRecently with a new person', () => {
    const initialState: peopleState = {
      list: [],
      recently: [],
    }
    const newState = reducer(initialState, addToRecently(mockPerson1))
    expect(newState.recently).toEqual([mockPerson1])
  })

  it('should not add duplicate to recently', () => {
    const initialState: peopleState = {
      list: [],
      recently: [mockPerson1],
    }
    const newState = reducer(initialState, addToRecently(mockPerson1))
    expect(newState.recently).toEqual([mockPerson1])
  })

  it('should handle addToRecently by removing the oldest if length is 5', () => {
    const initialState: peopleState = {
      list: [],
      recently: [mockPerson1, mockPerson1, mockPerson1, mockPerson1, mockPerson1],
    }
    const newState = reducer(initialState, addToRecently(mockPerson2))
    expect(newState.recently).toEqual([
      mockPerson1,
      mockPerson1,
      mockPerson1,
      mockPerson1,
      mockPerson2,
    ])
  })
})
