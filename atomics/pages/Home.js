import { ScrollView, View, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import Navbar from "../molecules/Navbar";
import SearchBar from "../molecules/SearchBar";
import Filters from "../organisms/Filters";
import index from "../../styles/index";
import SearchSuggestions from "../organisms/SearchSuggestions";
import HomeHeader from "../organisms/HomeHeader";
import QuestionPopUp from "./QuestionPopup";
import { useAnswerState } from "../../scripts/answers";
import {Dimensions} from 'react-native'; 
import Stories from "../organisms/Stories";
import { useLanguageState } from "../../scripts/languagehandler";
import darkmodeColors from "../../styles/darkmodecolors";
import { useThemeState } from "../../scripts/themehandler";
import colors from "../../styles/colors";

const { height } = Dimensions.get('window');

export default function Home() {
  const navigation = useNavigation();
  const {theme, changeTheme} = useThemeState();
  const themeColors = theme === 'Light mode' ? colors : darkmodeColors;
  const {translations} = useLanguageState();









  return (
    <View style={[index.wrapper, index.alignCenter, themeColors.bgWhite, {height:height}]}>
            <StatusBar backgroundColor={`${themeColors.bgWhite.backgroundColor}`}/>
            
      <HomeHeader headerText={translations.homeHeaderTitle} headerImage={require("../../images/header.jpg")} page={'Home'} translations={translations} themeColors={themeColors} />

      <View style={[index.body, index.padHor20, themeColors.bgWhite]}>
      <SearchBar styles={[index.padHor20]}  translations={translations} themeColors={themeColors} />

        <ScrollView showsVerticalScrollIndicator={false}>
        <Filters headerText="Services" page="Home" styles={{paddingHorizontal:0}} themeColors={themeColors}/>
        <Stories  translations={translations} themeColors={themeColors}/>
        </ScrollView>
      </View>
      <Navbar page="Home" themeColors={themeColors} />
    </View>
  ) 
  
}
