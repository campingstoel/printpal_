import React, { createContext, useState, useEffect, useContext } from "react";
import { db, storage, geoFirestore } from "./firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Store, registerInDevTools } from "pullstate";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  setDoc,
  getDocs,
  GeoPoint,
  query,
} from "firebase/firestore";

import { ref, listAll, getDownloadURL } from "firebase/storage";

export const PrintShopStore = new Store({
  printShops: [],
  loadedPrintShops: false,
});

export const getPrintShops = async (location, filter, search) => {

  const myLocation = new GeoPoint(location.latitude, location.longitude);
  let printShops = [];

  const geoCollection = collection(db, "printshops");
  const docs = getDocs(geoCollection);
  const querySnapshot = await docs;
  PrintShopStore.update((s) => {
    s.printShops = [];
  });

  querySnapshot.forEach((doc) => {
    const distance = calculateDistance(myLocation, doc.data().location);
    if (distance < 10000) {
      if (filter && filter !== 'all' && search !== '') {
        if (
          doc.data().services.includes(filter) &&
          doc.data().name.toLowerCase().includes(search.toLowerCase())
        ) {
          printShops.push(doc.data());
          printShops[printShops.length - 1].distance = distance;
        }
      } else if (filter !== 'all') {
        if (doc.data().services.includes(filter)) {
          printShops.push(doc.data());
          printShops[printShops.length - 1].distance = distance;
        }
      } else if (search !== '') {
        if (doc.data().name.toLowerCase().includes(search.toLowerCase())) {
          printShops.push(doc.data());
          printShops[printShops.length - 1].distance = distance;
        }
      } else {
        printShops.push(doc.data());
        printShops[printShops.length - 1].distance = distance;
      }
    }
  });
  PrintShopStore.update((s) => {
    s.printShops = printShops;
    s.loadedPrintShops = true;
  });
};

const calculateDistance = (location1, location2) => {
  const R = 6371e3;
  const φ1 = (location1.latitude * Math.PI) / 180;
  const φ2 = (location2.latitude * Math.PI) / 180;
  const Δφ = ((location2.latitude - location1.latitude) * Math.PI) / 180;
  const Δλ = ((location2.longitude - location1.longitude) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  let d = R * c;
  d = Math.round(d);
  return d;
};

export const createPrintShop = async (user, printShopData) => {
  try {
    const docRef = doc(db, "printshops", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document already exists");
      return;
    }
    const docAdd = await setDoc(docRef, {
      uid: user.uid,
      name: printShopData.businessName,
      location: new GeoPoint(
        printShopData.locationcoords.latitude,
        printShopData.locationcoords.longitude
      ),
      verified: false,
      services: printShopData.services,
      inAppMessaging: printShopData.Messaging,
      availability: printShopData.availability,
      contactEmail: printShopData.email,
      locationVisible: printShopData.locationVisibility,
      rating: 0.0,
    });
    console.log("Document written with ID: ", docRef.id);

    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, { completedBusinessProfile: true }, { merge: true });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const verifyPrintShop = async (uid) => {
  const docRef = doc(db, "printshops", uid);
  await setDoc(docRef, { verified: true }, { merge: true });
  //set usser account type to business
  const userRef = doc(db, "users", uid);
  await setDoc(userRef, { accountType: "Business" }, { merge: true });
};
