import { ReactNode, useState } from 'react'
import { ThemeContext, themeType } from './ThemeContext'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<themeType>('light')

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
