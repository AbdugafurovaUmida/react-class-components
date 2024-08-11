import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { SEARCH } from '../consts/index'
import { useSearchMutation, useGetHeroesByPageQuery } from '../services/swapi'

export const useSearchQuery = () => {
  const [defaultValue, setDefaultValue] = useState<string | 'hello'>('hello')
  const router = useRouter()

  const [doSearch, { isLoading: searchIsFetching, data: searchData, error: searchError }] =
    useSearchMutation()

  const { refetch } = useGetHeroesByPageQuery(Number(router.query.page) || 1)

  const page = router.query.page || '1'
  const search = router.query[SEARCH] || ''

  useEffect(() => {
    const storedValue = localStorage.getItem(SEARCH) || ''
    doSearch(storedValue)
    setDefaultValue(storedValue)
  }, [page, doSearch])

  const handleChange = async (value: string) => {
    localStorage.setItem(SEARCH, value)

    // Update the query parameters without reloading the page
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, [SEARCH]: value },
      },
      undefined,
      { shallow: true }, // This prevents a full page reload
    )

    doSearch(value)
    refetch()
  }

  return {
    defaultValue,
    isLoading: searchIsFetching,
    searchData,
    error: searchError,
    search,
    page,
    handleChange,
  }
}
