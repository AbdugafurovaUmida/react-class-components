import React from 'react'
import DescriptionField from '../description-field/DescriptionField'
import { useNavigate } from 'react-router-dom'
import './Card.css'
import People from '../../types/people'

interface CardProps {
  people: People | undefined
}
const Card: React.FC<CardProps> = (props: CardProps) => {
  const { people } = props

  const navigate = useNavigate()
  const handleClick = (id: string) => {
    const slugName = id.replace(' ', '-')
    navigate(`/detail/${slugName}`)
  }

  if (!people || people?.length === 0) {
    return <div>Sorry, I didn't find anything</div>
  }

  return (
    <li className='item' onClick={() => handleClick(people.name)}>
      <DescriptionField label='name'>{people?.name}</DescriptionField>
      <DescriptionField label='gender'>{people?.gender}</DescriptionField>
    </li>
  )
}

export default Card
