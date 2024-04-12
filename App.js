
import Index from './atomics/pages/Index';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { signInWithEmailAndPassword, onAuthStateChanged, fetchSignInMethodsForEmail } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from './auth/firebase';
import { useEffect } from 'react';


SplashScreen.hideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('./assets/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/Poppins-Medium.ttf')
});


  return (
    fontsLoaded ?
    <SafeAreaView style={{flex:1}}>
      <StatusBar backgroundColor='black'/>

      <Index />
    </SafeAreaView>
      : null
    
 ) 
}


