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
import { AuthStore, imageStore, dataStore } from "../../firebase/store";
import { PrintShopStore } from "../../firebase/printshops";
import SplashScreen from "../organisms/SplashScreen";
import { getPrintShops } from "../../firebase/printshops";
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { useLocationState } from "../../scripts/location";
import { getImages } from "../../firebase/store";

const { height } = Dimensions.get('window');

export default function Home() {
  const navigation = useNavigation();
  const {theme, changeTheme} = useThemeState();
  const themeColors = theme === 'Light mode' ? colors : darkmodeColors;
  const {translations} = useLanguageState();
  const {initialized, isLoggedIn, user} = AuthStore.useState();
  const {images, loadedImages} = imageStore.useState();
  const {data, loadedData} = dataStore.useState();
  const {printShops, loadedPrintShops} = PrintShopStore.useState();
  const {location, getLocation} = useLocationState();


  useEffect(() => {
    if(isLoggedIn && loadedImages && loadedPrintShops) {
      dataStore.update(s => {s.loadedData = true});
    }
    getLocation().then(() => {
      if(location) getPrintShops(location);
    });
  }
  , [isLoggedIn, loadedImages, loadedPrintShops]);
 
  
  useEffect(() => {
    if(!initialized) return;
    if(isLoggedIn) {
      getImages(user);
    }
    else {
      navigation.navigate("AccountPage");
    }
  }, [initialized, isLoggedIn]);




  return (
    initialized ?
    <View style={[index.wrapper, index.alignCenter, themeColors.bgWhite, {height:height}]}>
            <StatusBar backgroundColor={`${themeColors.bgWhite.backgroundColor}`}/>
            
      <HomeHeader headerText={translations.home.title} page={'Home'} translations={translations} themeColors={themeColors} loaded={loadedData} />

      <View style={[index.body, index.padHor20, themeColors.bgWhite]}>

      <SearchBar styles={[index.padHor20]}  translations={translations} themeColors={themeColors} />

        <ScrollView showsVerticalScrollIndicator={false}>
        <Filters headerText="Services" page="Home" styles={{paddingHorizontal:0}} themeColors={themeColors} loaded={loadedData}/>
        <Stories  translations={translations} themeColors={themeColors} loaded={loadedData}/>
        </ScrollView>
      </View>
      <Navbar page="Home" themeColors={themeColors} />
    </View>
    : <SplashScreen />
  ) 
  
}
