import React from 'react'
import DescriptionField from '../description-field/DescriptionField'
import { useNavigate } from 'react-router-dom'
import './Card.css'
import { Products } from '../../types/products'

type Props = {
  product: Products | undefined
}
const Card: React.FC<Props> = (props: Props) => {
  const { product } = props

  const navigate = useNavigate()

  const handleClick = (id: number) => {
    navigate(`/detail/${id}`)
  }
  if (!product || product?.length === 0) {
    return <div>Sorry, I didn't find anything</div>
  }

  return (
    <li className='item' onClick={() => handleClick(product?.id)}>
      <div className='product-image'>
        <img src={product?.thumbnail} alt={product.title} />
      </div>
      <div className='product-info'>
        <DescriptionField label='Title'>{product?.title}</DescriptionField>
        <DescriptionField label='Category'>{product?.category}</DescriptionField>
        <DescriptionField label='Description'>{product?.description}</DescriptionField>
        <DescriptionField label='Price'>{product?.price}</DescriptionField>
      </div>
    </li>
  )
}

export default Card
