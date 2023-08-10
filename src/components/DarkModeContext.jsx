import { createContext, useEffect, useState } from 'react'

export const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const isSystemDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    const isLocalStorageDarkMode = window.localStorage.isDarkMode === 'true'
    setIsDarkMode(isLocalStorageDarkMode || isSystemDarkMode)
  }, [])

  const toggleDarkMode = () => {
    let isSystemDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    let newDarkMode = !isDarkMode

    if (newDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = newDarkMode
    }

    setIsDarkMode(newDarkMode)
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}
