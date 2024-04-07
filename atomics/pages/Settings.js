import { View, TextInput, Image, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import index from "../../styles";
import Header from "../atoms/Header";
import header from "../../styles/header";
import {useWindowDimensions} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useLanguageState } from "../../scripts/languagehandler";
import { useThemeState } from "../../scripts/themehandler";
import Icon from "../atoms/Icon";


export default function Settings({params}) {
  const route = useRoute();
  const settingName = route.params.settingName;
  const {language, changeLanguage} = useLanguageState();
  const {theme, changeTheme} = useThemeState();

    const { height } = useWindowDimensions();
    const navigation = useNavigation();
  
  const languageOptions = [
    {id: 1, language: 'English', abbreviation: 'EN'},
    {id: 2, language: 'Dutch', abbreviation: 'NL'},
    {id: 3, language: 'German', abbreviation: 'DE'},
  ];

  const themeOptions = [
    {id: 1, theme: 'Light mode'},
    {id: 2, theme: 'Dark mode'},
    {id: 3, theme: 'System default'},
  ];




  const setTheme = (theme) => {
    changeTheme(theme);
  }

  const setLanguage = (language) => {
    changeLanguage(language);
  }

  const optionsField = (subject) => {
    return (
      <View style={[index.fullWidth, index.column, index.alignCenter, index.justifyCenter, index.pad20]}>
        {subject === 'Language' ? (
          <View style={[index.fullWidth, index.column, index.alignCenter, index.justifyCenter]}>
            {languageOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                onPress={() => setLanguage(option.language)}
                style={[index.fullWidth, index.row, index.justifyCenter, {height: 50}]}
              >
                <Text>{option.language}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : subject === 'Theme' ? (
          <View style={[index.fullWidth, index.column, index.alignCenter, index.justifyCenter]}>
            {themeOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                onPress={() => setTheme(option.theme)}
                style={[index.fullWidth, index.row, index.spaceBetween, {height: 50, borderBottomWidth: 0.3, borderBottomColor: 'lightgrey', padding: 10}]}
              >
                <Header style={[header.paragraph, header.semiBold]} text={option.theme} />
                {theme === option.theme ? <Icon icon="checkmark" iconColor="black" customSize={20} /> : null}

              </TouchableOpacity>
            ))}
          </View>
        ) : null}
      </View>


    );
  }



  return (
<View
    style={[index.fullWidth, index.column, {height: height}]}
    >
      {settingName === 'Appearance' ? (
        <View style={[index.fullWidth, index.column, index.alignCenter, index.justifyCenter]}>
          <Header style={[header.medium, header.bold]} text={'Appearance'} />
          {optionsField('Theme')}

        </View>
      ) : settingName === 'Language' ? (
        <View style={[index.fullWidth, index.column, index.alignCenter, index.justifyCenter]}>
          <Text>Language</Text>
          {optionsField('Language')}
        </View>
      ) : settingName === 'Notifications' ? (
        <View style={[index.fullWidth, index.column, index.alignCenter, index.justifyCenter]}>
          <Text>Notifications</Text>
        </View>
      ) :
      null 

        }

    
    </View>
  );
}
