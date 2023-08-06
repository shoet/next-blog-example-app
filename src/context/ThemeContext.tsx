import React, { PropsWithChildren, useContext, useState } from 'react'

type ThemeState = {
  isEnableDark: boolean
  setIsEnableDark: (mode: boolean) => void
}

const ThemeContext = React.createContext<ThemeState>({
  isEnableDark: false,
  setIsEnableDark: () => {},
})

export const useThemeContext = () => useContext<ThemeState>(ThemeContext)

// TODO: save in cookie
export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [isEnableDark, setIsEnableDark] = useState<boolean>(false)
  const initial: ThemeState = {
    isEnableDark: isEnableDark,
    setIsEnableDark: setIsEnableDark,
  }
  return (
    <ThemeContext.Provider value={initial}>{children}</ThemeContext.Provider>
  )
}
