import React, { createContext, useState, useEffect, useContext } from 'react';
import { Appearance } from 'react-native';


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('Light mode');
    const [themeState, setThemeState] = useState('idle');
    const [themeError, setThemeError] = useState(null);
    const changeTheme = async (theme) => {
        setTheme(theme);
        //if the theme is system default, we need to check the system theme
        if (theme === 'System default') {
            const colorScheme = Appearance.getColorScheme();
            const systemTheme = colorScheme === 'dark' ? 'Dark mode' : 'Light mode';
            setTheme(systemTheme);
        }
        setThemeState('done');
        return theme;
    };

    return (
        <ThemeContext.Provider value={{ theme, themeError, changeTheme, themeState }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeState = () => useContext(ThemeContext);
