
import Index from './atomics/pages/Index';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';



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


