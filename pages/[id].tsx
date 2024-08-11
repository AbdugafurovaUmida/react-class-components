// import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useGetHeroByIDQuery } from '../services/swapi'
import People from '../types/people'
import DetailCardLoader from '../components/loader/DetailCardLoader'
// import '../components/detail/Detail.css'
import { useRouter } from 'next/router'

export default function Detail() {
  const [people, setPeople] = useState<People | undefined>(undefined)
  const router = useRouter()
  const { id } = router.query
  const dispatch = useDispatch()
  const { data, isLoading, isFetching, error } = useGetHeroByIDQuery(Number(id) || 1)

  useEffect(() => {
    if (data) {
      dispatch({ type: 'peopleSlice/addToRecently', payload: data })
      setPeople(data)
    }
  }, [data, dispatch])

  return (
    <div data-testid='detail-page' className='detail-card'>
      {isLoading || isFetching ? <DetailCardLoader /> : ''}
      {people && (
        <>
          <div className='detail-card__image'>
            <img
              src={'https://starwars-visualguide.com/assets/img/characters/' + id + '.jpg'}
              alt={people.name}
            />
          </div>
          <div>
            <h2 className='detail-card__name'>Name: {people.name}</h2>
            <ul className='depth'>
              <li className='depth__gender'>Gender: {people.gender}</li>
              <li className='depth__height'>Height: {people.height}</li>
              <li className='depth__mass'>Mass: {people.mass}</li>
              <li className='depth__hair'>Hair Color: {people.hair_color}</li>
              <li className='depth__skin'>Skin Color: {people.skin_color}</li>
            </ul>
          </div>
        </>
      )}
      {error && 'Something went wrong!'}
    </div>
  )
}
