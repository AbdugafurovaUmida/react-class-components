import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useGetHeroByIDQuery } from '../../services/swapi'
import People from '../../types/people'
import { useRouter } from 'next/router'
import { wrapper } from '../../store/store'
import { getHeroesByPage } from '../../services/swapi'

function Detail() {
  const router = useRouter()
  const { search, page, id } = router.query
  const detailData = useGetHeroByIDQuery(Number(id))
  const data = detailData.currentData
  console.log(data)

  const [people, setPeople] = useState<People | undefined>(undefined)

  const dispatch = useDispatch()

  useEffect(() => {
    if (data) {
      dispatch({ type: 'peopleSlice/addToRecently', payload: data })
      setPeople(data)
    }
  }, [data, dispatch])

  const handleClick = () => {
    router.push(`/?search=${search}&page=${page}`)
  }

  return (
    <div data-testid='detail-page' className='detail-card'>
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
          <button onClick={handleClick}>Close</button>
        </>
      )}
    </div>
  )
}

export default Detail

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const search = context.query.search || ''
  const page = context.query.page || '1'

  if (page) {
    await store.dispatch(
      getHeroesByPage.initiate({ search: search as string, page: page as string }),
    )
  } else {
    await store.dispatch(getHeroesByPage.initiate({ search: search as string }))
  }

  return {
    props: {},
  }
})
