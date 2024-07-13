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
    onChange(value)
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input disabled={isLoading} name={SEARCH} defaultValue={defaultValue} />
      <button disabled={isLoading} type='submit'>
        Search
      </button>
    </form>
  )
}
