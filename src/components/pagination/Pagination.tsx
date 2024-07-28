import React from 'react'
import { MouseEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import ResponseApi from '../../types/api'
import People from '../../types/people'

type Props = {
  data: ResponseApi<People> | undefined
}

export default function Pagination(props: Props) {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams()
  const page = parseInt(urlSearchParams.get('page') || '1', 10)
  const { data } = props
  const { next, previous } = data || {}

  const handleChangePage = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    if (target.dataset.direction === 'prev' && previous) {
      setUrlSearchParams(`page=${page - 1}`)
    }
    if (target.dataset.direction === 'next' && next) {
      setUrlSearchParams(`page=${page + 1}`)
    }
  }
  return (
    <div className='pagination-bar' onClick={handleChangePage}>
      <button disabled={!previous} data-direction='prev'>
        Prev
      </button>
      <span className='current-page'> {Number(urlSearchParams.get('page') || '1')}</span>
      <button disabled={!next} data-direction='next'>
        Next
      </button>
    </div>
  )
}
