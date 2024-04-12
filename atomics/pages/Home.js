import { ScrollView, View, StatusBar, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../molecules/Navbar";
import SearchBar from "../molecules/SearchBar";
import Filters from "../organisms/Filters";
import index from "../../styles/index";
import HomeHeader from "../organisms/HomeHeader";
import {Dimensions} from 'react-native'; 
import Stories from "../organisms/Stories";
import { useLanguageState } from "../../scripts/languagehandler";
import darkmodeColors from "../../styles/darkmodecolors";
import { useThemeState } from "../../scripts/themehandler";
import colors from "../../styles/colors";
import { useEffect, useState } from "react";
import { AuthStore, imageStore } from "../../auth/store";
import SplashScreen from "../organisms/SplashScreen";
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const { height } = Dimensions.get('window');

export default function Home() {
  const navigation = useNavigation();
  const {theme, changeTheme} = useThemeState();
  const themeColors = theme === 'Light mode' ? colors : darkmodeColors;
  const {translations} = useLanguageState();
  const {initialized, isLoggedIn} = AuthStore.useState();
  const {images, loadedImages} = imageStore.useState();
 
  
  useEffect(() => {
    if(!initialized) return;
    if(isLoggedIn) {
      navigation.navigate("Home");
    }
    else {
      navigation.navigate("AccountPage");
    }
  }, [initialized, isLoggedIn]);




  return (
    initialized ?
    <View style={[index.wrapper, index.alignCenter, themeColors.bgWhite, {height:height}]}>
            <StatusBar backgroundColor={`${themeColors.bgWhite.backgroundColor}`}/>
            
      <HomeHeader headerText={translations.home.title} page={'Home'} translations={translations} themeColors={themeColors} />

      <View style={[index.body, index.padHor20, themeColors.bgWhite]}>

      <SearchBar styles={[index.padHor20]}  translations={translations} themeColors={themeColors} />

        <ScrollView showsVerticalScrollIndicator={false}>
        <Filters headerText="Services" page="Home" styles={{paddingHorizontal:0}} themeColors={themeColors}/>
        <Stories  translations={translations} themeColors={themeColors}/>
        </ScrollView>
      </View>
      <Navbar page="Home" themeColors={themeColors} />
    </View>
    : <SplashScreen />
  ) 
  
}
