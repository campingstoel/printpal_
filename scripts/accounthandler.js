import React, { createContext, useState, useEffect, useContext } from "react";
import { auth, geoFirestore } from "../firebase";
import db from "../firebase";
import * as SecureStore from 'expo-secure-store';

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [fullname, setFullname] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [emailInput, setEmailInput] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);


  //attemptSignIn 
  const attemptSignIn = async () => {
    const email = await SecureStore.getItemAsync("email");
    const password = await SecureStore.getItemAsync("password");

    if (email && password) {
    try {
        await auth.signInWithEmailAndPassword(email, password);
        setLoggedIn(true);
        setFullname(auth.currentUser.displayName);
        return true;
    } catch (e) {
        setError(e);
    }
}
else {
    return false;
}
    };


  


  const checkEmail = async () => {
    //check if email auth exists
    if (emailInput !== "") {
        console.log(emailInput);
      const emailAuth = await auth.fetchSignInMethodsForEmail(emailInput);
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

  const login = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setLoggedIn(true);
      await SecureStore.setItemAsync("email", email);
      await SecureStore.setItemAsync("password", password );
      setFullname(auth.currentUser.displayName);

    } catch (e) {
      setError(e);
      return false
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (e) {
      setError(e);
    }
  };

  const register = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (e) {
      setError(e);
    }
  };

  const getProfileData = async () => {
    const user = auth.currentUser;
    if (user) {
        console.log(user.displayName);
      setFullname(user.displayName);
      return user.displayName;
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
        login,
        logout,
        register,
        error,
        loading,
        setLoading,
        addLocation,
        checkEmail,
        emailInput,
        setEmailInput,
        fullname,
        getProfileData,
        attemptSignIn,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccountState = () => useContext(AccountContext);
