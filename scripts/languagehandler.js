import React, { createContext, useState, useEffect, useContext} from 'react';
import en  from '../translations/en';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [languageState, setLanguageState] = useState('idle');
    const [languageError, setLanguageError] = useState(null);
    const [translations, setTranslations] = useState(en);
    const [languages, setLanguages] = useState(['en', 'nl', 'de']);

    useEffect(() => {
        const getLanguage = async () => {
            try {
                const storedLanguage = await AsyncStorage.getItem('language');
                if (storedLanguage) {
                  console.log(storedLanguage);
                    setLanguage(storedLanguage);
                    switch(storedLanguage) {
                      case 'en':
                        const enData = await import('../translations/en');
                        setTranslations(enData.default);
                        break;
                      case 'nl':
                        const nlData = await import('../translations/nl');
                        setTranslations(nlData.default);
                        break;
                      case 'de':
                        const deData = await import('../translations/de');
                        setTranslations(deData.default);
                        break;
                      default: 
                        console.error('Unsupported language');
                    }
                }
            } catch (e) {
                setLanguageError(e);
            }
            setLanguageState('done');
        };
        getLanguage();
    }
    , []);

    
  const changeLanguage = async (language) => {
    setLanguage(language);

    try {
      switch(language) {
        case 'en':
          const enData = await import('../translations/en');
          setTranslations(enData.default);
          break;
        case 'nl':
          const nlData = await import('../translations/nl');
          setTranslations(nlData.default);
          break;
        case 'de':
          const deData = await import('../translations/de');
          setTranslations(deData.default);
          break;
        default: 
          console.error('Unsupported language');
      }
      await AsyncStorage.setItem('language', language);
      setLanguageState('done'); 
    } catch (err) {
      setLanguageError(err);
    } 

    return language;
  };

    return (
        <LanguageContext.Provider value={{ language, languageError, changeLanguage, languageState, translations}}>
            {children}
        </LanguageContext.Provider>
    );
}
export const useLanguageState = () => useContext(LanguageContext);


