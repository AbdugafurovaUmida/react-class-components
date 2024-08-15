import Card from '../../components/card/Card'
import React from 'react'
import ResponseApi from '../../types/api'
import People from '../../types/people'

type Props = {
  data: ResponseApi<People> | undefined
}

const List: React.FC<Props> = (props: Props) => {
  const { data } = props

  return (
    <section data-testid='list' className='results-container' style={{ position: 'relative' }}>
      {data?.results?.length && (
        <div className='results-container'>
          <ul className='results'>
            {data?.results?.map((people) => <Card people={people} key={people?.name} />)}
          </ul>
        </div>
      )}
    </section>
  )
}

export default List
