export const fetchData = async (query: string) => {
  const response = await fetch(`https://swapi.dev/api/people/?search=${query}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  return data.results
}
