import { ScrollView, View, StatusBar, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../molecules/Navbar";
import index from "../../styles/index";
import {Dimensions} from 'react-native'; 
import { useLanguageState } from "../../scripts/languagehandler";
import darkmodeColors from "../../styles/darkmodecolors";
import { useThemeState } from "../../scripts/themehandler";
import colors from "../../styles/colors";
import { useEffect, useState } from "react";
import { AuthStore } from "../../auth/store";
import Header from "../atoms/Header";
import header from "../../styles/header";

const { height } = Dimensions.get('window');

export default function ChatsPage() {
  const navigation = useNavigation();
  const {theme, changeTheme} = useThemeState();
  const themeColors = theme === 'Light mode' ? colors : darkmodeColors;
  const {translations} = useLanguageState();
  const {initialized, isLoggedIn, accountType} = AuthStore.useState();
  console.log(accountType);


 
  




  return (
    <View style={[index.wrapper, themeColors.bgWhite, {height:height}]}>
            <StatusBar backgroundColor={`${themeColors.bgWhite.backgroundColor}`}/>
            
      <View style={[index.padHor20, themeColors.bgWhite]}>
      <Header text={accountType == 'Customer' ? translations.chats.titleCustomer : translations.chats.titleBusiness} style={[header.bold, header.medium, index.mt20, themeColors.black]} />

        <ScrollView showsVerticalScrollIndicator={false}>
        </ScrollView>
      </View>
      <Navbar page="Chats" themeColors={themeColors} />
    </View>
  ) 
  
}
