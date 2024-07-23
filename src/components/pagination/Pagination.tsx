import React, { useEffect, useState } from 'react'
import { MouseEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import ResponseApi from '../../types/api'
import { Products } from '../../types/products'

type Props = {
  data: ResponseApi<Products> | undefined
}

const Pagination = (props: Props) => {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams()
  const [data, setData] = useState<ResponseApi<Products> | undefined>(props.data)
  const [totalItems, setTotalItems] = useState<number | undefined | null>(0)
  const page = parseInt(urlSearchParams.get('page') || '1', 10)
  const limit = 10
  const skip = (page - 1) * limit

  useEffect(() => {
    setData(data)
    setTotalItems(data?.total)
  }, [data, page, limit, skip])

  const totalPages = Math.ceil(totalItems ? totalItems / limit : 0)

  const handleChangePage = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    if (target.dataset.direction === 'prev' && page > 1) {
      setUrlSearchParams(`page=${page - 1}`)
    }
    if (target.dataset.direction === 'next' && page < totalPages) {
      setUrlSearchParams(`page=${page + 1}`)
    }
  }

  return (
    <div onClick={handleChangePage}>
      <button disabled={page <= 1} data-direction='prev'>
        Prev
      </button>
      <button disabled={page >= totalPages} data-direction='next'>
        Next
      </button>
    </div>
  )
}

export default Pagination
