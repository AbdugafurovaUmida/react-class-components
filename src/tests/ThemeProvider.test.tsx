import '@testing-library/jest-dom'
import { act, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ThemeProvider } from '../contexts/ThemeProvider'
import { useTheme } from '../contexts/ThemeContext'

// Mock component to use the useTheme hook
const MockComponent = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <span data-testid='theme'>{theme}</span>
      <button onClick={() => setTheme('dark')} data-testid='toggle-theme'>
        Toggle Theme
      </button>
    </div>
  )
}

describe('ThemeProvider and useTheme', () => {
  it('should provide the default theme', () => {
    render(
      <ThemeProvider>
        <MockComponent />
      </ThemeProvider>,
    )

    const themeElement = screen.getByTestId('theme')
    expect(themeElement).toHaveTextContent('light')
  })

  it('should toggle theme to dark', () => {
    render(
      <ThemeProvider>
        <MockComponent />
      </ThemeProvider>,
    )

    const themeElement = screen.getByTestId('theme')
    const buttonElement = screen.getByTestId('toggle-theme')

    // Initially, the theme should be 'light'
    expect(themeElement).toHaveTextContent('light')

    // Simulate a button click to change the theme
    act(() => {
      buttonElement.click()
    })

    // After clicking, the theme should change to 'dark'
    expect(themeElement).toHaveTextContent('dark')
  })
})
