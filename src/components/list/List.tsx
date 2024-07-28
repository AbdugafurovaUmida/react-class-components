import Card from '../../components/card/Card'
import React from 'react'
import ResponseApi from '../../types/api'
import People from '../../types/people'
import './List.css'

type Props = {
  data: ResponseApi<People> | undefined
  isLoading: boolean
}

const List: React.FC<Props> = (props: Props) => {
  const { data, isLoading } = props

  return (
    <section data-testid='list' className='results-container' style={{ position: 'relative' }}>
      {data?.results?.length && (
        <div className='results-container'>
          <ul className='results'>
            {data?.results?.map((people) => <Card people={people} key={people?.name} />)}
          </ul>
        </div>
      )}
      {!data && !isLoading ? `Sorry, I didn't find anything` : ''}
    </section>
  )
}

export default List
