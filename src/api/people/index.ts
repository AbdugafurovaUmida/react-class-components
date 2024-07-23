import ResponseApi from '../../types/api'
import { Products } from '../../types/products'

export async function getPeoples(
  search: string = '',
  page: number = 1,
  limit: number = 10,
): Promise<ResponseApi<Products>> {
  try {
    const url = search
      ? `${import.meta.env.VITE_API_URL}products/search?q=${search}`
      : `${import.meta.env.VITE_API_URL}products?limit=${limit}&skip=${(page - 1) * limit}`
    const result = await fetch(url)
    if (!result.ok) {
      throw new Error()
    }
    return result.json()
  } catch {
    throw new Error("Oops, something's gone wrong")
  }
}
