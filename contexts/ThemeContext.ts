import { createContext, useContext } from 'react'

export type themeType = 'light' | 'dark'
export interface IThemeContext {
  theme: themeType
  setTheme: (theme: themeType) => void
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  setTheme: (value: themeType) => {
    return value
  },
})

export const useTheme = () => useContext(ThemeContext)
