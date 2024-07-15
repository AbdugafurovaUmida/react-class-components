import React from 'react'
import DescriptionField from '../description-field/DescriptionField'
import { useNavigate } from 'react-router-dom'

interface CardProps {
  people: {
    name: string
    height: string
    mass: string
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: string
    gender: string
    homeworld: string
    films: string[]
    species: string[]
    vehicles: string[]
    starships: string[]
    created: string
    edited: string
    url: string
  }
}
const Card: React.FC<CardProps> = ({ people }) => {
  const navigate = useNavigate()

  const handleClick = (id: string) => {
    const slugName = id.replace(' ', '-')
    navigate(`/detail/${slugName}`)
  }

  return (
    <li className='item' onClick={() => handleClick(people.name)}>
      <DescriptionField label='name'>{people?.name}</DescriptionField>
      <DescriptionField label='gender'>{people?.gender}</DescriptionField>
    </li>
  )
}

export default Card
