import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import ButtonError from '../components/ButtonError'

describe('ButtonError component', () => {
  it('should throw an error when clicked', () => {
    const consoleErrorSpy = vi.spyOn(console, 'error')

    const { getByText } = render(<ButtonError />)
    const button = getByText('Break Me')

    expect(() => {
      fireEvent.click(button)
    }).toThrowError('Opsss, something went wrong')

    expect(consoleErrorSpy).toHaveBeenCalledTimes(2)

    consoleErrorSpy.mockRestore()
  })
})
