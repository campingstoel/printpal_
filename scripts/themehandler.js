import React, { createContext, useState, useEffect, useContext } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('Light mode');
    const [themeState, setThemeState] = useState('idle');
    const [themeError, setThemeError] = useState(null);

    useEffect(() => {
        const getTheme = async () => {
            try {
                const storedTheme = await AsyncStorage.getItem('theme');
                if (storedTheme) {
                    setTheme(storedTheme);
                }
            } catch (e) {
                setThemeError(e);
            }
            setThemeState('done');
        };
        getTheme();
    }
    , []);

    const changeTheme = async (theme) => {
        setTheme(theme);
        //if the theme is system default, we need to check the system theme
        try {
            await AsyncStorage.setItem('theme', theme);
        } catch (e) {
            setThemeError(e);
        }

        if (theme === 'System default') {
            const colorScheme = Appearance.getColorScheme();
            const systemTheme = colorScheme === 'dark' ? 'Dark mode' : 'Light mode';
            setTheme(systemTheme);
            //save the theme to async storage
          
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
