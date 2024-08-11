import { render, screen } from '@testing-library/react'
import { ThemeContext } from '../contexts/ThemeContext'
import { ThemeToggle } from '../contexts/ThemeToggle'
import { describe, it, expect } from 'vitest'

describe('ThemeToggle', () => {
  it('should render light theme icon', () => {
    render(
      <ThemeContext.Provider
        value={{
          theme: 'light',
          setTheme: () => {
            return 'light'
          },
        }}
      >
        <ThemeToggle />
      </ThemeContext.Provider>,
    )
    expect(screen.getByTestId('theme-toggle-label').firstChild).toEqual(
      screen.getByTestId('light-toggle-icon'),
    )
  })

  it('should render dark theme icon', () => {
    render(
      <ThemeContext.Provider
        value={{
          theme: 'dark',
          setTheme: () => {
            return 'light'
          },
        }}
      >
        <ThemeToggle />
      </ThemeContext.Provider>,
    )
    expect(screen.getByTestId('theme-toggle-label').firstChild).toEqual(
      screen.getByTestId('dark-toggle-icon'),
    )
  })
})
