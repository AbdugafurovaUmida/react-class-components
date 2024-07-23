import Card from '../../components/card/Card'
import React from 'react'
import ResponseApi from '../../types/api'
import { Products } from '../../types/products'

type Props = {
  data: ResponseApi<Products> | undefined
}

const List: React.FC<Props> = (props: Props) => {
  const { data } = props

  if (!data || data.products?.length === 0) {
    return <div>Sorry, I didn't find anything</div>
  }

  return (
    <ul className='results'>
      {data?.products.map((product) => <Card product={product} key={product?.id} />)}
    </ul>
  )
}

export default List
