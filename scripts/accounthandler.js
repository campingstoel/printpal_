import React, { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged, fetchSignInMethodsForEmail } from "firebase/auth";
import db from "../firebase/firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [fullname, setFullname] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [emailInput, setEmailInput] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);





  


  const checkEmail = async () => {
    if (emailInput !== "") {
      const emailAuth = await fetchSignInMethodsForEmail(auth, emailInput);
      if (emailAuth.length > 0) {
        setError("");
        return 'yes';
      } else {
        setError("");
        return 'no';
      }
    } else {
      setError("Please enter an email address");
    }
  };




  const addLocation = async (location) => {
    try {
      const locationRef = db.collection("locations").doc(user.uid);
      await locationRef.set(location);
      await geoFirestore.set(user.uid, location);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <AccountContext.Provider
      value={{
        user,
        error,
        loading,
        setLoading,
        addLocation,
        checkEmail,
        emailInput,
        setEmailInput,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccountState = () => useContext(AccountContext);
