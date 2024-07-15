import * as React from 'react'
import './DescriptionField.css'

type Props = {
  label: string
  children: string
}

export default function DescriptionField(props: Props) {
  const { label, children } = props

  return (
    <div className='description-container'>
      <div className='label'>{label + ':'}</div>
      <div>{children}</div>
    </div>
  )
}
