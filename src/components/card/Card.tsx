import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'
import People from '../../types/people'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'

interface CardProps {
  people: People
}
const Card: React.FC<CardProps> = (props: CardProps) => {
  const { people } = props
  const navigate = useNavigate()

  const peopleList = useSelector((state: RootState) => state.peopleState.list)
  const dispatch = useDispatch()

  const imgId = people.url.split('/')[5]
  const image = 'https://starwars-visualguide.com/assets/img/characters/' + imgId + '.jpg'

  const handleClick = (data: { url: string }) => {
    const slugUrl = data.url.split('/')[5]
    navigate(`/detail/${slugUrl}`)
  }

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      dispatch({ type: 'peopleSlice/addItem', payload: people })
    } else {
      dispatch({ type: 'peopleSlice/removeItem', payload: people })
    }
  }

  function checkHandler() {
    if (peopleList.find((item: { name: string }) => item.name === people.name)) {
      return true
    }
    return false
  }

  return (
    <li className='item' onClick={() => people && handleClick(people)}>
      <div className='item__image'>
        <img src={image} alt={people.name} />
      </div>
      <div className='item__info'>
        <h3>{people.name}</h3>
        <p>{people.gender}</p>
      </div>
      <input
        onChange={changeHandler}
        onClick={(e) => e.stopPropagation()}
        type='checkbox'
        name={people.name}
        checked={checkHandler()}
      />
    </li>
  )
}

export default Card
