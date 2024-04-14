import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GeoFirestore } from 'geofirestore';



const firebaseConfig = {
  apiKey: "AIzaSyCnv2sMbU4UE-4kvG7crQuycAuOEBRDqeA",
  authDomain: "printpal-14a96.firebaseapp.com",
  projectId: "printpal-14a96",
  storageBucket: "printpal-14a96.appspot.com",
  messagingSenderId: "770989666399",
  appId: "1:770989666399:web:209adbaedef365d997ebea",
  measurementId: "G-834HK6N945"
};

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
    });

export const db = getFirestore(app); 
export const storage = getStorage(app);
export const geoFirestore = new GeoFirestore(db);
