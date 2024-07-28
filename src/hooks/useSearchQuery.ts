import { useState, useEffect } from 'react'
import { SEARCH } from '../consts/index'
import { useSearchParams } from 'react-router-dom'
import { useSearchMutation, useGetHeroesByPageQuery } from '../services/swapi'

const useSearchQuery = () => {
  const [defaultValue, setDefaultValue] = useState<string | undefined>(undefined)
  const [urlSearchParams] = useSearchParams()

  const [doSearch, { isLoading: searchIsFetching, data: searchData, error: searchError }] =
    useSearchMutation()

  const { refetch } = useGetHeroesByPageQuery(Number(urlSearchParams.get('page')) || 1)

  const page = urlSearchParams.get('page') || '1'
  const search = urlSearchParams.get(SEARCH) || ''

  useEffect(() => {
    const defaultValue = localStorage.getItem(SEARCH) || ''
    doSearch(defaultValue)
    doSearch(defaultValue)
    setDefaultValue(defaultValue)
  }, [page, doSearch, defaultValue])

  const handleChange = async (value: string) => {
    localStorage.setItem(SEARCH, value)
    doSearch(value)
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

export default useSearchQuery
