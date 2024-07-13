import Search from './components/search/Search'
import Results from './components/result/Results'
import * as React from 'react'
import { SEARCH } from './consts/index'
import { getPeoples } from './api/people/index'
import ResponseApi from './types/api'
import People from 'types/people'
import ErrorBoundary from './components/error-boundary/ErrorBoundary'
import './App.css'
import ButtonError from './components/ButtonError'
import { useState, useEffect } from 'react'

export default function App() {
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
  return (
    <ErrorBoundary fallback={<div>Opsss, something went wrong</div>}>
      <div className='container'>
        <div className='home'>
          <section className='section-search'>
            <div>Type name hero from Star war</div>
            <Search
              isLoading={isLoading}
              defaultValue={defaultValue || ''}
              onChange={handleChange}
            />

            <ButtonError />
          </section>

          <hr />

          <Results isLoading={isLoading} data={response} />
        </div>
      </div>
    </ErrorBoundary>
  )
}
