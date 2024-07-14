import { render } from '@testing-library/react'
import React from 'react'
import { describe, expect, test, it } from 'vitest'
import Results from '../components/result/Results'
import DescriptionField from '../components/description-field/DescriptionField'

describe('Results', () => {
  test('renders the Results component', () => {
    render(<Results data={undefined} isLoading={false} />)
  })
  it('renders label and children correctly', () => {
    const label = 'Test Label'
    const children = 'Test Children'

    const { getByText } = render(<DescriptionField label={label} children={children} />)

    expect(getByText(`${label}:`)).to.exist
    expect(getByText(children)).to.exist
  })
})
