
import Index from './atomics/pages/Index';
import { useFonts } from 'expo-font';



export default function App() {

  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('./assets/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('./assets/Montserrat-Medium.ttf'),
    'Montserrat-SemiBold': require('./assets/Montserrat-SemiBold.ttf'),
});

  return (
    fontsLoaded ?
      <Index />
      : null
    
 ) 
}


