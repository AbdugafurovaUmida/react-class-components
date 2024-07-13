import ResponseApi from '../../types/api'
import People from '../../types/people'
import DescriptionField from '../description-field/DescriptionField'
import Loading from '../loader/Loading'
import * as React from 'react'
import './Results.css'

type Props = {
  data: ResponseApi<People> | undefined
  isLoading: boolean
}

export default function Results(props: Props) {
  const { data, isLoading } = props

  return (
    <section className='results' style={{ position: 'relative' }}>
      {isLoading && <Loading />}
      {data?.results.length ? (
        <div className='results__list'>
          {data.results.map((people) => (
            <div className='item' key={people.name + people.url}>
              <DescriptionField label='name'>{people.name}</DescriptionField>
              <DescriptionField label='gender'>{people.gender}</DescriptionField>
            </div>
          ))}
        </div>
      ) : (
        <div>Sorry, I didn't find anything</div>
      )}
    </section>
  )
}
