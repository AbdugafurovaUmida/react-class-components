import { useParams } from 'react-router-dom'
import People from '../../types/people'
import { useEffect, useState } from 'react'
import { getPeoples } from '../../api/people'
import Loading from '../../components/loader/Loading'
import DescriptionField from '../../components/description-field/DescriptionField'

export default function Detail() {
  const { name } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [people, setPeople] = useState<People | undefined>(undefined)

  useEffect(() => {
    const fetchData = async () => {
      const slugName = name?.replace('-', ' ') || ''
      setIsLoading(true)
      const people = await getPeoples(slugName)
      setIsLoading(false)
      setPeople(people.results[0])
    }
    fetchData()
  }, [name])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className=''>
      {people && (
        <>
          <DescriptionField label='name'>{people.name}</DescriptionField>
          <DescriptionField label='gender'>{people.gender}</DescriptionField>
          <DescriptionField label='eye color'>{people.eye_color}</DescriptionField>
          <DescriptionField label='hair color'>{people.hair_color}</DescriptionField>
        </>
      )}
    </div>
  )
}
