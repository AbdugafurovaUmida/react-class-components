import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import Image from 'next/image'
import React from 'react'

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
        <Image
          width={100}
          height={100}
          data-testid={theme === 'light' ? 'light-toggle-icon' : 'dark-toggle-icon'}
          src={theme === 'light' ? '/images/dark-mode.png' : '/images/light-mode.png'}
          alt='theme-icon'
        />
      </label>
    </div>
  )
}
