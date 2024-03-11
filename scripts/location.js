import React, { createContext, useState, useEffect, useContext } from 'react';
import * as Location from 'expo-location';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState();
    const [locationState, setLocationState] = useState('idle');
    const [locationError, setLocationError] = useState(null);

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setLocationError('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
        setLocationState('done');
        return location.coords;
    };



    return (
        <LocationContext.Provider value={{ location, locationError, getLocation, locationState }}>
            {children}
        </LocationContext.Provider>
    );
}

export const useLocationState = () => useContext(LocationContext);