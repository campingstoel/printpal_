import React, { createContext, useState, useEffect, useContext } from "react";
import { auth, db, storage } from "./firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  fetchSignInMethodsForEmail,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Store, registerInDevTools } from "pullstate";
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";
  

export const AuthStore = new Store({
  isLoggedIn: false,
  user: null,
  initialized: false,
  fullName: "",
  accountType: "Customer",
  completedBusinessProfile: false,
  rating: 0.0,
});


export const imageStore = new Store({
  images: [],
  loadedImages: false,
});


export const dataStore = new Store({  
   data: [],
   loadedData: false,

});  

const addUserToFirestore = async (user) => {
  try {
    const userRef = doc(db, "users", user.uid);

    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      return;
    }

    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      fullName: user.displayName,
      accountType: "Customer",
      createdAt: new Date(),
      rating: 5.0,
      completedBusinessProfile: false,
    });
  } catch (e) {
    console.log(e);
  }
};

const getUserFromFirestore = async (user) => {
  try {
    const userRef = doc(db, "users", user.uid);

    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      AuthStore.update((s) => {
        s.accountType = docSnap.data().accountType;
        s.completedBusinessProfile = docSnap.data().completedBusinessProfile;
        s.rating = docSnap.data().rating;
      });
    }
  } catch (e) {
    console.log(e);
  }
};

const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    addUserToFirestore(user);
    getUserFromFirestore(user);
  }
  AuthStore.update((s) => {
    s.user = user;
    s.isLoggedIn = user ? true : false;
    s.initialized = true;
    s.fullName = user ? user.displayName : "";
  });
  dataStore.update((s) => {
    s.data.push("auth");
  });
});

export const appSignIn = async (email, password) => {
  try {
    const resp = await signInWithEmailAndPassword(auth, email, password);
    AuthStore.update((s) => {
      s.isLoggedIn = resp.user ? true : false;
      s.user = resp.user;
      s.fullName = resp.user.displayName;
    });
    dataStore.update((s) => {
      s.data.push("auth");
    });
    return { user: auth.currentUser };
  } catch (e) {
    return { error: e };
  }
};

export const appSignOut = async () => {
  try {
    await auth.signOut();
    AuthStore.update((s) => {
      s.isLoggedIn = false;
      s.user = null;
      s.fullName = "";
      s.accountType = "Customer";
    });
  } catch (e) {
    return { error: e };
  }
};

export const appRegister = async (email, password) => {
  try {
    const resp = await createUserWithEmailAndPassword(auth, email, password);
    AuthStore.update((s) => {
      s.isLoggedIn = resp.user ? true : false;
      s.user = resp.user;
      s.fullName = resp.user.displayName;
      s.accountType = "Customer";
    });

    return { user: auth.currentUser };
  } catch (e) {
    return { error: e };
  }
};

const getImages = async () => {
  const images = [];
  const imagesRef = ref(storage, "images/");
  const imagesList = await listAll(imagesRef);

  await Promise.all(
    imagesList.items.map(async (itemRef) => {
      const url = await getDownloadURL(itemRef);
      images.push(url);
    })
  );

  imageStore.update((s) => {
    s.images = images;
    s.loadedImages = true;
  });
  dataStore.update((s) => {
    s.data.push("images");
  });

};

getImages();
