import router from 'next/router'
import * as React from 'react'
import { FormEvent } from 'react'
import { SEARCH } from '../../consts/index'

type Props = {
  defaultValue: string
  isLoading: boolean
  onChange: (value: string) => Promise<void>
}

export default function Search(props: Props) {
  const { isLoading, defaultValue, onChange } = props
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const value = (e.currentTarget[SEARCH].value as string).trim()
    if (value) {
      router.push(`/?search=${value.trim()}`)
    } else {
      router.push('/?search=&page=1')
    }
    onChange(value)
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input disabled={isLoading} name={SEARCH} defaultValue={defaultValue} placeholder='Search' />
      <button disabled={isLoading} type='submit'>
        Search
      </button>
    </form>
  )
}
