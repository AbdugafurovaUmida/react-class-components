'use client'
import React, { ReactNode } from 'react'
import { useState, useEffect } from 'react'
import Search from '../search/Search'
import ButtonError from '../ButtonError'
import List from '../list/List'
import Pagination from '../pagination/Pagination'
import { Flyout } from '../flyout/Flyout'
import { useRouter } from 'next/router'
import { wrapper } from '../../store/store'
import { getHeroesByPage, useGetHeroesByPageQuery } from '../../services/swapi'
import { ThemeToggle } from '../../contexts/ThemeToggle'
import { ThemeContext } from '../../contexts/ThemeContext'
import { useContext } from 'react'
import { SEARCH } from '../../consts/index'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [defaultValue, setDefaultValue] = useState<string | ''>('')
  const router = useRouter()
  const search = router.query.search || ''
  const page = router.query.page || '1'
  const { theme } = useContext(ThemeContext)
  const storedValue = localStorage.getItem(SEARCH) || ''

  const responseData = useGetHeroesByPageQuery({ search: search as string, page: page as string })

  if (!responseData) {
    return
  }

  const charactersData = responseData?.data

  useEffect(() => {
    setDefaultValue(storedValue)
  }, [defaultValue])

  const handleChange = async (value: string) => {
    localStorage.setItem('search', value)
    // const { page, ...rest } = router.query
    // router.push(
    //   {
    //     pathname: router.pathname,
    //     query: rest,
    //   },
    //   undefined,
    //   { shallow: true },
    // )
  }

  const charactersCount = responseData ? responseData.data?.count : []
  const pagesCount = typeof charactersCount === 'number' ? charactersCount / 10 : 0
  const pages = pagesCount > 1 ? Array.from({ length: pagesCount }, (_, i) => i + 1) : []
  return (
    <>
      <main data-testid='home-page' className={theme === 'light' ? ' light-mode ' : ' dark-mode '}>
        <div className={`container ${theme === 'light' ? 'light-mode' : 'dark-mode'}`}>
          <div className='home'>
            <h1>War Heroes</h1>
            <section className={`section-search ${theme === 'light' ? 'light-mode' : 'dark-mode'}`}>
              <ThemeToggle />
              <Search isLoading={false} defaultValue={defaultValue || ''} onChange={handleChange} />
              <ButtonError />
            </section>
            <section className='bottom-content'>
              {responseData && <List data={charactersData} />}
              {children}
            </section>
            <Pagination pages={pages} />
          </div>
        </div>
      </main>
      <Flyout />
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const search = context.query.search || ''
  const page = context.query.page || '1'

  if (page) {
    await store.dispatch(
      getHeroesByPage.initiate({ search: search as string, page: page as string }),
    )
  } else {
    await store.dispatch(getHeroesByPage.initiate({ search: search as string }))
  }

  return {
    props: {},
  }
})
