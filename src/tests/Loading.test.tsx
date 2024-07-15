import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import Loading from '../components/loader/Loading'

describe('Loader', () => {
  it('should render the Loader component', () => {
    render(<Loading />)
  })
})
