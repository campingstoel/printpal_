import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ContextHandlerProvider } from "../../scripts/contexthandler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./Home";
import Services from "./Services";

const Stack = createStackNavigator();

export default function Index() {
  return (
      <SafeAreaProvider>
        <ContextHandlerProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
                        <Stack.Screen
              name="Services"
              component={Services}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        </ContextHandlerProvider>
      </SafeAreaProvider>
  );
}
