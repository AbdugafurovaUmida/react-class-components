import ResponseApi from '../../types/api'
import People from '../../types/people'

export async function getPeoples(
  search: string = '',
  page: string = '1',
): Promise<ResponseApi<People>> {
  try {
    const url = search
      ? `${import.meta.env.VITE_API_URL}people/?search=${search}&page=${page}`
      : `${import.meta.env.VITE_API_URL}people/`
    const result = await fetch(url)
    if (!result.ok) {
      throw new Error()
    }
    return result.json()
  } catch {
    throw new Error("Oops, something's gone wrong")
  }
}
