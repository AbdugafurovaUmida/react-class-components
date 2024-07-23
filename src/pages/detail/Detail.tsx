import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Products } from '../../types/products'

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Products | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}products/${id}`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data: Products = await response.json()
        setProduct(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])
  return (
    <div>
      {!loading && error ? 'Something went wrong' : ''}
      {product && (
        <>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </>
      )}
    </div>
  )
}

export default ProductDetail
