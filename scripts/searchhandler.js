import React, { createContext, useState, useEffect, useContext } from "react";


const SearchHandler = createContext();

export const SearchProvider = ({ children }) => {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    return (
        <SearchHandler.Provider value={{ filter, setFilter, search, setSearch }}>
            {children}
        </SearchHandler.Provider>
    );
}

export const useSearchState = () => useContext(SearchHandler);