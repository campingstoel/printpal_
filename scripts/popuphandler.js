import React, { createContext, useState, useEffect, useContext } from 'react';

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
    const [popupError, setPopupError] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupSubject, setPopupSubject] = useState(null);

    const changePopupVisibility = async (popupSubject) => {
        setShowPopup(!showPopup);
        setPopupSubject(popupSubject);
        return [showPopup, popupSubject];
    }




    

    return (
        <PopupContext.Provider value={{popupError, showPopup, changePopupVisibility, popupSubject}}>
            {children}
        </PopupContext.Provider>
    );
}

export const usePopupState = () => useContext(PopupContext);
