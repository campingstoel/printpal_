import React, { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../auth/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged, fetchSignInMethodsForEmail } from "firebase/auth";
import db from "../auth/firebase";
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
    //check if email auth exists
    if (emailInput !== "") {
        console.log(emailInput);
      const emailAuth = await fetchSignInMethodsForEmail(auth, emailInput);
      console.log(emailAuth);
      if (emailAuth.length > 0) {
        setError("");
        console.log("yes");
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
