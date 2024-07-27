import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import DarkMode from '../assets/dark-mode.png'
import LightMode from '../assets/light-mode.png'

export function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div data-testid='theme-switcher' className='theme-toggle'>
      <input
        data-testid='theme-switch-input'
        className='theme-toggle__input'
        type='checkbox'
        id='themeSwitch'
        name='theme'
        checked={theme === 'light'}
        onChange={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        }}
      />
      <label className='theme-toggle__label' data-testid='theme-switch-label' htmlFor='themeSwitch'>
        <img src={theme === 'light' ? LightMode : DarkMode} alt='' />
      </label>
    </div>
  )
}
