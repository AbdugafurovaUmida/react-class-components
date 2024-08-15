import React from 'react'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

export type PaginationProps = {
  pages: number[]
}

export default function Pagination({ pages }: PaginationProps) {
  console.log(pages)
  const router = useRouter()
  const currentPage = Number(router.query.page)
  const { theme } = useContext(ThemeContext)

  return (
    <ul className='pagination-bar'>
      {pages?.map((page) => (
        <li
          key={page}
          className={currentPage === page ? 'pagination-bar__item-active' : 'pagination-bar__item'}
          onClick={() => {
            router.push(`/?search=&page=${page}`)
          }}
        >
          <span className={`current-page ${theme === 'light' ? 'light-mode' : 'dark-mode'}`}>
            {page}
          </span>
        </li>
      ))}
    </ul>
  )
}
