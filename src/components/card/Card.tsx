import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'
import People from '../../types/people'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { addToList, removeFromList } from '../../slices/selectedItems'

interface CardProps {
  people: People
}
const Card: React.FC<CardProps> = (props: CardProps) => {
  const { people } = props
  const navigate = useNavigate()
  const selectedItems = useSelector((state: RootState) => state.selectedItems.list)
  const dispatch = useDispatch()
  const [selected, setSelected] = useState<boolean>(
    selectedItems.find((item) => item.url === people.url) ? true : false,
  )

  const imgId = people.url.split('/')[5]
  const image = 'https://starwars-visualguide.com/assets/img/characters/' + imgId + '.jpg'

  const handleClick = (data: { url: string }) => {
    const slugUrl = data.url.split('/')[5]
    navigate(`/detail/${slugUrl}`)
  }

  function selectedHandler() {
    if (!selected) {
      setSelected(true)
      dispatch(addToList({ ...people, selected: true }))
    } else {
      setSelected(false)
      dispatch(removeFromList({ ...people, selected: false }))
    }
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
        type='checkbox'
        checked={selected}
        onChange={selectedHandler}
        onClick={(e) => e.stopPropagation()}
      />
    </li>
  )
}

export default Card
