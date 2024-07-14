import Search from '../../components/search/Search'
import Results from '../../components/result/Results'
import * as React from 'react'
import ButtonError from '../../components/ButtonError'
import useSearchQuery from '../../hooks/useSearchQuery'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import Loading from '../../components/loader/Loading'
import './Home.css'

const Home = () => {
  const { defaultValue, isLoading, response, handleChange } = useSearchQuery()
  const navigate = useNavigate()
  const { name } = useParams()
  const handleClose = () => {
    navigate('/')
  }
  return (
    <div className='container'>
      <div className='home'>
        <section className='section-search'>
          <div>Type name hero from Star war</div>
          <Search isLoading={isLoading} defaultValue={defaultValue || ''} onChange={handleChange} />

          <ButtonError />
        </section>

        <hr />
        <div className='bottom-content'>
          {isLoading && <Loading />}
          <Results data={response} />
          <section className='detail' style={{ width: name ? '30%' : 0, overflow: 'hidden' }}>
            <button className='close' onClick={handleClose}>
              Close
            </button>
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
