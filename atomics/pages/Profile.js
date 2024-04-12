import { View,   RefreshControl, FlatList, ScrollView, StatusBar 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect, useCallback } from "react";
import Navbar from "../molecules/Navbar";
import index from "../../styles/index";
import {Dimensions} from 'react-native'; 
import ProfileHeader from "../organisms/ProfileHeader";
import ProfileSettings from "../organisms/ProfileSettings";
import ProfileStatistics from "../organisms/ProfileStatistics";
import { usePopupState } from "../../scripts/popuphandler";
import Popup from "../organisms/Popup";
import darkmodeColors from "../../styles/darkmodecolors";
import { useThemeState } from "../../scripts/themehandler";
import colors from "../../styles/colors";
import { useAccountState } from "../../scripts/accounthandler";
import { AuthStore } from "../../auth/store";
import { useLanguageState } from "../../scripts/languagehandler";

const { height } = Dimensions.get('window');

export default function Profile() {

  const [refreshing, setRefreshing] = useState(false);
  const {showPopup, changePopupVisibility, popupSubject} = usePopupState();
  const {theme, changeTheme} = useThemeState();
  const themeColors = theme === 'Light mode' ? colors : darkmodeColors;
  const {fullName} = AuthStore.useState();
  const {translations} = useLanguageState();


  return (
    <View style={[index.wrapper, index.alignCenter, themeColors.bgWhite, {height:height}]}>
            <StatusBar backgroundColor={`${themeColors.bgWhite.backgroundColor}`} />
        <ProfileHeader name={fullName} rating={'5.0'} profileType={'Customer'} themeColors={themeColors}/>
        <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileStatistics  themeColors={themeColors} translations={translations} />
        <ProfileSettings themeColors={themeColors} translations={translations} />
        </ScrollView>
      <Navbar page="Profile" themeColors={themeColors} />
      {showPopup && <Popup subject={popupSubject} themeColors={themeColors} translations={translations} />}
    </View>
  );

}
