import React, { createContext, useState, useEffect, useContext } from 'react';
import en  from '../translations/en';
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [languageState, setLanguageState] = useState('idle');
    const [languageError, setLanguageError] = useState(null);
    const [translations, setTranslations] = useState(en);
    const [languages, setLanguages] = useState(['en', 'nl']);

    
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
        default: 
          console.error('Unsupported language');
      }

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


