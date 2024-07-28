import { describe, it, expect, vi, afterAll, beforeAll } from 'vitest'
import DownloadData from '../dowload/dowload-data'
import People from '../types/people'

const mockData: People[] = [
  {
    name: 'Luke Skywalker',
    gender: 'male',
    height: '172',
    mass: '77',
    homeworld: 'Tatooine',
    films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    species: [],
    vehicles: [],
    starships: [],
    created: '',
    edited: '',
    url: '',
  },
  {
    name: 'Darth Vader',
    gender: 'male',
    height: '202',
    mass: '136',
    homeworld: 'Tatooine',
    films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    species: [],
    vehicles: [],
    starships: [],
    created: '',
    edited: '',
    url: '',
  },
]

describe('exportData', () => {
  let originalCreateObjectURL: typeof URL.createObjectURL
  let originalRevokeObjectURL: typeof URL.revokeObjectURL

  beforeAll(() => {
    originalCreateObjectURL = URL.createObjectURL
    originalRevokeObjectURL = URL.revokeObjectURL
    URL.createObjectURL = vi.fn(() => 'blob:url')
    URL.revokeObjectURL = vi.fn()
  })

  afterAll(() => {
    URL.createObjectURL = originalCreateObjectURL
    URL.revokeObjectURL = originalRevokeObjectURL
  })

  it('should export data to CSV format', () => {
    const spyCreateElement = vi.spyOn(document, 'createElement')
    const spyCreateObjectURL = vi.spyOn(URL, 'createObjectURL')
    const spyRevokeObjectURL = vi.spyOn(URL, 'revokeObjectURL')
    const spyAppendChild = vi.spyOn(document.body, 'appendChild')
    const spyRemoveChild = vi.spyOn(document.body, 'removeChild')
    const spyClick = vi.spyOn(HTMLElement.prototype, 'click')

    DownloadData(mockData)
    expect(spyCreateElement).toHaveBeenCalled()
    expect(spyCreateElement.mock.calls[0][0]).toBe('a')
    expect(spyCreateObjectURL).toHaveBeenCalled()
    expect(spyAppendChild).toHaveBeenCalled()
    expect(spyRemoveChild).toHaveBeenCalled()
    expect(spyClick).toHaveBeenCalled()
    expect(spyRevokeObjectURL).toHaveBeenCalledWith('blob:url')

    spyCreateElement.mockRestore()
    spyCreateObjectURL.mockRestore()
    spyAppendChild.mockRestore()
    spyRemoveChild.mockRestore()
    spyClick.mockRestore()
    spyRevokeObjectURL.mockRestore()
  })
})
