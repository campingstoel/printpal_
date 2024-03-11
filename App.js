
import Index from './atomics/pages/Index';
import { useFonts } from 'expo-font';



export default function App() {

  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('./assets/Poppins-Regular.ttf'),
});

  return (
    fontsLoaded ?
      <Index />
      : null
    
 ) 
}


