import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'
import People from '../../types/people'

interface CardProps {
  people: People
}
const Card: React.FC<CardProps> = (props: CardProps) => {
  const { people } = props
  const imgId = people.url.split('/')[5]
  const image = 'https://starwars-visualguide.com/assets/img/characters/' + imgId + '.jpg'
  const navigate = useNavigate()
  const handleClick = (data: { url: string }) => {
    const slugUrl = data.url.split('/')[5]
    navigate(`/detail/${slugUrl}`)
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
    </li>
  )
}

export default Card
