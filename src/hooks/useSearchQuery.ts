import { useState, useEffect } from 'react'
import { SEARCH } from '../consts/index'
import { getPeoples } from '../api/people/index'
import ResponseApi from '../types/api'
import People from '../types/people'
import { useSearchParams } from 'react-router-dom'

const useSearchQuery = () => {
  const [defaultValue, setDefaultValue] = useState<string | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState<ResponseApi<People> | undefined>(undefined)
  const [urlSearchParams] = useSearchParams()

  const page = urlSearchParams.get('page') || '1'
  const search = urlSearchParams.get(SEARCH) || ''

  useEffect(() => {
    const defaultValue = localStorage.getItem(SEARCH) || ''
    setDefaultValue(defaultValue)
    setIsLoading(true)
    getPeoples(defaultValue, page).then((response) => {
      setResponse(response)
      setIsLoading(false)
    })
  }, [page])
  useEffect(() => {
    if (defaultValue !== undefined) {
      setIsLoading(true)
      getPeoples(search, page).then((response) => {
        setResponse(response)
        setIsLoading(false)
      })
    }
  }, [search, page, defaultValue])

  const handleChange = async (value: string) => {
    localStorage.setItem(SEARCH, value)
    setIsLoading(true)
    const response = await getPeoples(value)
    setResponse(response)
    setIsLoading(false)
  }

  return { defaultValue, isLoading, response, search, page, handleChange }
}

export default useSearchQuery
