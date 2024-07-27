import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import DarkMode from '../assets/dark-mode.png'
import LightMode from '../assets/light-mode.png'

export function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className='theme-toggle'>
      <input
        className='theme-toggle__input'
        type='checkbox'
        id='themeSwitch'
        name='theme'
        checked={theme === 'light'}
        onChange={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        }}
      />
      <label className='theme-toggle__label' htmlFor='themeSwitch'>
        <img src={theme === 'light' ? DarkMode : LightMode} alt='' />
      </label>
    </div>
  )
}
