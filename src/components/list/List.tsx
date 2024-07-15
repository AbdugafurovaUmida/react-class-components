import Card from '../../components/card/Card'
import React from 'react'
import ResponseApi from '../../types/api'
import People from '../../types/people'

type Props = {
  data: ResponseApi<People> | undefined
}

const List: React.FC<Props> = (props: Props) => {
  const { data } = props

  if (!data || data.results?.length === 0) {
    return <div>Sorry, I didn't find anything</div>
  }

  return (
    <ul className='results'>
      {data.results?.map((people) => <Card people={people} key={people?.name} />)}
    </ul>
  )
}

export default List
