import { useState, useEffect } from 'react'
import { SEARCH } from '../consts/index'
import { getPeoples } from '../api/people/index'
import ResponseApi from '../types/api'
import People from 'types/people'

const useSearchQuery = () => {
  const [defaultValue, setDefaultValue] = useState<string | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState<ResponseApi<People> | undefined>(undefined)

  useEffect(() => {
    const defaultValue = localStorage.getItem(SEARCH) || ''
    setDefaultValue(defaultValue)
    setIsLoading(true)
    getPeoples(defaultValue).then((response) => {
      setResponse(response)
      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    if (defaultValue !== undefined) {
      setIsLoading(true)
      getPeoples(SEARCH).then((response) => {
        setResponse(response)
        setIsLoading(false)
      })
    }
  }, [SEARCH])

  const handleChange = async (value: string) => {
    localStorage.setItem(SEARCH, value)
    setIsLoading(true)
    const response = await getPeoples(value)
    setResponse(response)
    setIsLoading(false)
  }

  return { defaultValue, isLoading, response, handleChange }
}

export default useSearchQuery
