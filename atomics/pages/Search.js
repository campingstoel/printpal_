import { View, ScrollView, RefreshControl, StatusBar} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useCallback, useState } from "react";
import Navbar from "../molecules/Navbar";
import index from "../../styles/index";
import HomeHeader from "../organisms/HomeHeader";
import {Dimensions} from 'react-native'; 
import SearchBar from '../molecules/SearchBar';
import   ListView from '../organisms/ListView';
import Header from "../atoms/Header";
import Filters from '../organisms/Filters';
import header from "../../styles/header";
import { useLanguageState } from "../../scripts/languagehandler";
import darkmodeColors from "../../styles/darkmodecolors";
import { useThemeState } from "../../scripts/themehandler";
import colors from "../../styles/colors";

const { height } = Dimensions.get('window');

export default function Search() {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const {translations} = useLanguageState();
  const {theme, changeTheme} = useThemeState();
  const themeColors = theme === 'Light mode' ? colors : darkmodeColors;





  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setRefreshing(false)
  }, []);


  return (
    <View style={[index.wrapper, themeColors.bgWhite, {height:height}]}>
      <StatusBar backgroundColor={`${themeColors.bgWhite.backgroundColor}`} />
      <ScrollView
      showsVerticalScrollIndicator={false}
    
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={[index.fullWidth, index.padHor20]}>
      <Header text={translations.navigation.search} style={[header.bold, header.large, index.mt20, themeColors.black]} />
      <Filters page='Search' styles={{paddingHorizontal:0}} themeColors={themeColors} translations={translations} />
            <SearchBar styles={{marginTop: 20, padding:0}} translations={translations} themeColors={themeColors}/>
            <Header text='Printshops' style={[header.bold, header.tiny, index.mt20, themeColors.black]} />
      <ListView themeColors={themeColors} />
      </ScrollView>
            

      <Navbar page="Search" themeColors={themeColors} />
    </View>
  );
}
