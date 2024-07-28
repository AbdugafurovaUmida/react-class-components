import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import DarkMode from '../assets/dark-mode.png'
import LightMode from '../assets/light-mode.png'

export function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div data-testid='theme-toggle' className='theme-toggle'>
      <input
        data-testid='theme-toggle-input'
        className='theme-toggle__input'
        type='checkbox'
        id='themeSwitch'
        name='theme'
        checked={theme === 'light'}
        onChange={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        }}
      />
      <label data-testid='theme-toggle-label' className='theme-toggle__label' htmlFor='themeSwitch'>
        <img
          data-testid={theme === 'light' ? 'light-toggle-icon' : 'dark-toggle-icon'}
          src={theme === 'light' ? DarkMode : LightMode}
          alt='theme-icon'
        />
      </label>
    </div>
  )
}
