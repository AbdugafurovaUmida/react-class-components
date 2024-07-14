import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Loading from '../components/loader/Loading'

describe('Loader', () => {
  it('should render the Loader component', () => {
    render(<Loading />)

    const loader = screen.getByTestId('loader')
    expect(loader).toBeInTheDocument()
  })
})
