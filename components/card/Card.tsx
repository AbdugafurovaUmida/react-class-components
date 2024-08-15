import React from 'react'
import People from '../../types/people'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../store/store'
import { useRouter } from 'next/router'

interface CardProps {
  people: People
}
const Card: React.FC<CardProps> = (props: CardProps) => {
  const { people } = props
  const router = useRouter()
  const { asPath } = useRouter()
  const dispatch = useDispatch<AppDispatch>()

  const peopleList = useSelector((state: RootState) => state.peopleState.list)

  const imgId = people?.url.split('/')[5]
  const image = 'https://starwars-visualguide.com/assets/img/characters/' + imgId + '.jpg'

  const handleClick = (data: { url: string }) => {
    const slugUrl = data?.url.split('/')[5]
    router.push(`/${slugUrl}${asPath}`)
  }

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      dispatch({ type: 'peopleSlice/addItem', payload: people })
    } else {
      dispatch({ type: 'peopleSlice/removeItem', payload: people })
    }
  }

  function checkHandler() {
    if (peopleList.find((item: { name: string }) => item?.name === people?.name)) {
      return true
    }
    return false
  }

  return (
    <li className='item' onClick={() => people && handleClick(people)}>
      <div className='item__image'>
        <img src={image} alt={people?.name} />
      </div>
      <div className='item__info'>
        <h3 data-testid='search-item-name'>{people?.name}</h3>
        <p data-testid='search-item-gender'>{people?.gender}</p>
      </div>
      <input
        data-testid='search-item-checkbox'
        onChange={changeHandler}
        onClick={(e) => e.stopPropagation()}
        type='checkbox'
        name={people?.name}
        checked={checkHandler()}
      />
    </li>
  )
}

export default Card
