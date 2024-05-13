"use client"

import { createContext, useState } from "react"

interface ThemeContextType {
    toggle: () => void;
    mode: string;
  }
  
  const initialTheme: ThemeContextType = {
    toggle: () => {},
    mode: 'dark'
  };
  

export const ThemeContext = createContext(initialTheme);

export const ThemeProvider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  const [mode, setMode] = useState('dark')

  const toggle = () => {
    setMode(prev => (prev==='dark'? 'light': 'dark'))
  }
  return (
    <ThemeContext.Provider value={{toggle, mode}}>
      <div className={`theme ${mode}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

