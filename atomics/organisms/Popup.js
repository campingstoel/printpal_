import { View, TextInput, Image, TouchableOpacity, Text, KeyboardAvoidingView, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import index from "../../styles";
import Header from "../atoms/Header";
import header from "../../styles/header";
import {useWindowDimensions} from 'react-native';
import { useLanguageState } from "../../scripts/languagehandler";
import { useThemeState } from "../../scripts/themehandler";
import { usePopupState } from "../../scripts/popuphandler";
import Icon from "../atoms/Icon";
import Button from "../atoms/Button";


export default function Popup({subject, themeColors, translations}) {
  const {language, changeLanguage} = useLanguageState();
  const {theme, changeTheme} = useThemeState();
  const {showPopup, changePopupVisibility, popupSubject} = usePopupState();
  const [chatSettings, setChatSettings] = useState('Everyone');
  const [locationSettings, setLocationSettings] = useState('Everyone');
  const [profileSettings, setProfileSettings] = useState('Everyone');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();
  
  const languageOptions = [
    {id: 1, language: translations.languageOptions.english, abbreviation: 'en'},
    {id: 2, language: translations.languageOptions.dutch, abbreviation: 'nl'},
    {id: 3, language: translations.languageOptions.german, abbreviation: 'de'},
  ];

  const themeOptions = [
    {id: 1, theme: translations.themeOptions.light},
    {id: 2, theme: translations.themeOptions.dark},
    {id: 3, theme: translations.themeOptions.systemDefault},
  ];

  const chattingOptions = [
    {
      id: 1,
      title: 'Everyone',
    },
    {
      id: 2,
      title: 'Only I can start a chat',
    },
    {
      id: 3,
      title: 'No chat allowed',
    }
  ];

  const locationOptions = [
    {
      id: 1,
      title: 'Everyone',
    },
    {
      id: 3,
      title: 'Nobody',
    }
  ];

  const profileOptions = [
    {
      id: 1,
      title: 'Everyone',
    },
    {
      id: 2,
      title: 'Only people I chat with',
    },
    {
      id: 3,
      title: 'Nobody',
    }

  ];






  const setTheme = (theme) => {
    changeTheme(theme);
  }

  const setLanguage = (language) => {
    changeLanguage(language);
  }

  const optionsField = (subject) => {
    return (
      <View style={[index.fullWidth, index.column, index.alignCenter, index.justifyCenter, index.pad20, index.br20, themeColors.bgWhite]}>
        {subject === 'Language' ? 
        (
            <View style={[index.fullWidth, index.column, index.alignCenter, index.justifyCenter]}>
                {languageOptions.map((option) => (
                    <TouchableOpacity
                        key={option.id}
                        onPress={() => setLanguage(option.abbreviation)}
                        style={[index.fullWidth, index.row, index.spaceBetween, index.alignCenter, {height: 60, borderBottomWidth: 0.3, borderBottomColor: 'lightgrey', padding: 10}]}
                        >
                        <Header style={[header.paragraph, header.semiBold, themeColors.black]} text={option.language} />
                        {language === option.abbreviation ? <Icon icon="checkmark" iconColor={`${themeColors.bgBlack.backgroundColor}`} customSize={20} /> : null}
                    </TouchableOpacity>
                ))}

            </View>

        ) : subject === 'Appearance' ? (
          <View style={[index.fullWidth, index.column, index.alignCenter, index.justifyCenter, themeColors.bgWhite]}>
            {themeOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                onPress={() => setTheme(option.theme)}
                style={[index.fullWidth, index.row, index.spaceBetween, index.alignCenter, {height: 60, borderBottomWidth: 0.3, borderBottomColor: 'lightgrey', padding: 10}]}
              >
                <Header style={[header.paragraph, header.semiBold, themeColors.black]} text={option.theme} />
                {theme === option.theme ? <Icon icon="checkmark" iconColor={`${themeColors.bgBlack.backgroundColor}`} customSize={20} /> : null}

              </TouchableOpacity>
            )
            
            )}
          </View>
        ) : 
        
        subject === 'Chatting' ? (
          <View style={[index.fullWidth, index.column, index.alignCenter, index.justifyCenter, themeColors.bgWhite]}>
            {chattingOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[index.fullWidth, index.row, index.spaceBetween, index.alignCenter, {height: 60, borderBottomWidth: 0.3, borderBottomColor: 'lightgrey', padding: 10}]}
                onPress={() => {setChatSettings(option.title)}}
              >
                <Header style={[header.interMedium, header.semiBold, themeColors.black]} text={option.title} />
                {chatSettings === option.title ? <Icon icon="checkmark" iconColor={`${themeColors.bgBlack.backgroundColor}`} customSize={20} /> : null}

              </TouchableOpacity>
            ))}
          </View>
        ) : 
        subject === 'Location' ? (
          <View style={[index.fullWidth, index.column, index.alignCenter, index.justifyCenter, themeColors.bgWhite]}>
            {locationOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[index.fullWidth, index.row, index.spaceBetween, index.alignCenter, {height: 60, borderBottomWidth: 0.3, borderBottomColor: 'lightgrey', padding: 10}]}
                onPress={() => {setLocationSettings(option.title)}}
              >
                <Header style={[header.interMedium, header.semiBold, themeColors.black]} text={option.title} />
                {locationSettings === option.title ? <Icon icon="checkmark" iconColor={`${themeColors.bgBlack.backgroundColor}`} customSize={20} /> : null}

              </TouchableOpacity>
            ))}
          </View>
        ) : 
        subject === 'Profile' ? (
          <View style={[index.fullWidth, index.column, index.alignCenter, index.justifyCenter, themeColors.bgWhite]}>
            {profileOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[index.fullWidth, index.row, index.spaceBetween, index.alignCenter, {height: 60, borderBottomWidth: 0.3, borderBottomColor: 'lightgrey', padding: 10}]}
                onPress={() => {setProfileSettings(option.title)}}
              >
                <Header style={[header.interMedium, header.semiBold, themeColors.black]} text={option.title} />
                {profileSettings === option.title ? <Icon icon="checkmark" iconColor={`${themeColors.bgBlack.backgroundColor}`} customSize={20} /> : null}

              </TouchableOpacity>
            ))}
          </View>
        ) : null
        



          }
        <Button text={"Close"} onPress={() => changePopupVisibility()} style={[index.fullWidth, index.alignCenter, index.justifyCenter, index.mt20, themeColors.bgBlack, {height: 50, borderRadius: 10}]} textStyle={themeColors.white} />
      </View>


    );
  }



  return (
    //dark black overlay
    <View style={[index.fullWidth, index.alignEnd, index.column, {backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', zIndex: 100, top: 0, left: 0, right: 0, bottom: 0,}]}>
<Modal
        animationType="slide"
        transparent={true}
        visible={true}
        gestureEnabled={true}
        onRequestClose={() => {
          changePopupVisibility();
        }}
        //align the modal to the bottom
        style={[index.fullWidth, index.alignEnd, index.column, themeColors.bgWhite, {justifyContent: 'flex-end'}]}
        
      >
        <View style={[index.fullWidth, index.column, index.alignCenter, index.flexEnd, {height: height}]}>
          <View style={[index.fullWidth, index.column, index.alignCenter, index.justifyCenter, index.padVer20, index.br20, themeColors.bgWhite]}>
            <Header style={[header.tiny, header.bold, index.fullWidth, index.textCenter, index.pad10, themeColors.black, {borderBottomWidth:0.2, borderBottomColor:'lightgrey' }]} text={subject} />
            {optionsField(subject)}
          </View>
        </View>
      </Modal>
    </View>
  );
}
