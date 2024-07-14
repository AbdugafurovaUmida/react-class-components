import ResponseApi from '../../types/api'
import People from '../../types/people'
import DescriptionField from '../description-field/DescriptionField'
import * as React from 'react'
import './Results.css'
import { useNavigate } from 'react-router-dom'

type Props = {
  data: ResponseApi<People> | undefined
  // isLoading: boolean
}

export default function Results(props: Props) {
  const { data } = props
  const navigate = useNavigate()

  const handleClick = (name: string) => {
    const slugName = name.replace(' ', '-')
    navigate(`/detail/${slugName}`)
  }

  return (
    <section style={{ position: 'relative' }}>
      {data?.results.length && (
        <div className='container'>
          <div className='results'>
            {data.results.map((people) => (
              <div
                className='item'
                key={people.name + people.url}
                onClick={() => handleClick(people.name)}
              >
                <DescriptionField label='name'>{people.name}</DescriptionField>
                <DescriptionField label='gender'>{people.gender}</DescriptionField>
              </div>
            ))}
          </div>
        </div>

        // <div>Sorry, I didn't find anything</div>
      )}
    </section>
  )
}
