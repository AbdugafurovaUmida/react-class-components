import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import DetailCardLoader from '../components/loader/DetailCardLoader'
import { describe, it } from 'vitest'

describe('DetailCardLoader', () => {
  it('should render the DetailCardLoader component', () => {
    render(<DetailCardLoader />)
  })
})
