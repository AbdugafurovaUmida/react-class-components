import { Component } from 'react'
import ResponseApi from '../../types/api'
import People from '../../types/people'
import DescriptionField from '../description-field/DescriptionField'
import Loading from '../loader/Loading'
import * as React from 'react'

type Props = {
  data: ResponseApi<People> | undefined
  isLoading: boolean
}

class Results extends Component<Props> {
  render() {
    const { data, isLoading } = this.props

    return (
      <section className='results'>
        <div className='results__list'>
          {isLoading && <Loading />}
          {!data?.results.length && !isLoading ? (
            <div>Sorry, I didn't find anything</div>
          ) : (
            data?.results.map(
              (people: {
                name: string
                url: string
                gender: string
                eye_color: string
                hair_color: string
              }) => (
                <div className='' key={people.name + people.url}>
                  <DescriptionField label='name'>{people.name}</DescriptionField>
                  <DescriptionField label='gender'>{people.gender}</DescriptionField>
                  <DescriptionField label='eye color'>{people.eye_color}</DescriptionField>
                  <DescriptionField label='hair color'>{people.hair_color}</DescriptionField>
                </div>
              ),
            )
          )}
        </div>
      </section>
    )
  }
}

export default Results
