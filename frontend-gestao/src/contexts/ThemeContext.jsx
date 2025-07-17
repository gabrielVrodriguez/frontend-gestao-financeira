import   React,  {createContext, useEffect, useState} from 'react'


export const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme")
        return savedTheme === 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;

        const newMode = isDarkMode ? 'dark' : 'light';
        const oldMode = isDarkMode ? 'light' : 'dark';

        root.classList.remove(oldMode);
        root.classList.add(newMode)

        localStorage.setItem('theme', newMode)
    }, [isDarkMode])

    const value = { isDarkMode, setIsDarkMode}

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}