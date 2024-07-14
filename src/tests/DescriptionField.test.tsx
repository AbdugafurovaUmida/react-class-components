import { render } from '@testing-library/react'
import React = require('react')
import { describe, it } from 'vitest'
import DescriptionField from '../components/description-field/DescriptionField'
import { expect } from 'chai'

describe('DescriptionField Component', () => {
  it('renders label and children correctly', () => {
    const label = 'Test Label'
    const children = 'Test Children'

    const { getByText } = render(<DescriptionField label={label} children={children} />)

    expect(getByText(`${label}:`)).to.exist
    expect(getByText(children)).to.exist
  })
})
