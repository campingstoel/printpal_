import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ContextHandlerProvider } from "../../scripts/contexthandler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./Home";
import Map from "./Map";
import Search from "./Search";
import Profile from "./Profile";
import SettingsPopUp from "./Settings";
import QuestionPopUp from "./QuestionPopup";
import AccountPage from "./AccountPage";
import Login from "./Login";
import Register from "./Register";
import ChatsPage from "./ChatsPage";
import { auth } from "../../auth/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { AuthStore } from "../../auth/store";


const Stack = createStackNavigator();

export default function Index() {
  const {initialized, isLoggedIn } = AuthStore.useState();



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
              name="AccountPage"
              component={AccountPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Map"
              component={Map}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chats"
              component={ChatsPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsPopUp}
              options={{
                headerShown: false,
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="Question"
              component={QuestionPopUp}
              options={{
                headerShown: false,
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ContextHandlerProvider>
    </SafeAreaProvider>
  );
}
