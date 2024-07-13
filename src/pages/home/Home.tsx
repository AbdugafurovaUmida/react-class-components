import Search from '../../components/search/Search'
import Results from '../../components/result/Results'
import * as React from 'react'
import ErrorBoundary from '../../components/error-boundary/ErrorBoundary'
import ButtonError from '../../components/ButtonError'
import useSearchQuery from '../../hooks/useSearchQuery'

const Home = () => {
  const { defaultValue, isLoading, response, handleChange } = useSearchQuery()
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

export default Home
