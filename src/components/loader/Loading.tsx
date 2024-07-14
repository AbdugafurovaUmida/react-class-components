import * as React from 'react'
import './Loading.css'

export default function Loading() {
  return (
    <div className='container'>
      <div data-testid='loader' className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
