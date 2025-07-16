import   React,  {createContext, useState} from 'react'


export const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const value = { isDarkMode, setIsDarkMode}

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}