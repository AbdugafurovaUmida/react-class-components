import Search from '../../components/search/Search'
import * as React from 'react'
import ButtonError from '../../components/ButtonError'
import useSearchQuery from '../../hooks/useSearchQuery'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import Loading from '../../components/loader/Loading'
import './Home.css'
import List from '../../components/list/List'
import { useGetHeroesByPageQuery } from '../../services/swapi'
import { useSearchParams } from 'react-router-dom'
import Pagination from '../../components/pagination/Pagination'

const Home = () => {
  const { defaultValue, isLoading, searchData, error, handleChange } = useSearchQuery()
  const navigate = useNavigate()
  console.log(!error)
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const handleClose = () => {
    navigate('/')
  }

  const { data } = useGetHeroesByPageQuery(Number(searchParams.get('page')) || 1)

  // if ((!data && !isLoading) || data?.results?.length === 0) {
  //   return <div className='not-found-items'>Sorry, I didn't find anything</div>
  // }

  return (
    <div className='container'>
      <div className='home'>
        <h1>War Heroes</h1>
        <section className='section-search'>
          <Search isLoading={isLoading} defaultValue={defaultValue || ''} onChange={handleChange} />
          <ButtonError />
        </section>
        <div className='bottom-content'>
          {isLoading && <Loading />}
          {!isLoading && error ? `Sorry, I didn't find anything` : ''}
          {!defaultValue ? (
            <List data={data} isLoading={isLoading} />
          ) : (
            <List data={searchData} isLoading={isLoading} />
          )}
          <section className='detail' style={{ width: id ? '30%' : 0, overflow: 'hidden' }}>
            <button className='close' onClick={handleClose}>
              Close
            </button>
            <Outlet />
          </section>
        </div>
        <Pagination data={data} />
      </div>
    </div>
  )
}

export default Home
