import {
    View,
    TouchableOpacity,
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import React, { useEffect } from "react";
  import header from "../../styles/header";
  import Header from "../atoms/Header";
  import index from "../../styles";
  import Icon from "../atoms/Icon";
  import colors from "../../styles/colors";
  import profileSettings from "../../data/profileSettingsList";
  import { usePopupState } from "../../scripts/popuphandler";
  import { appSignOut } from "../../auth/store";
  
  export default function ProfileSettings({themeColors, translations }) {
    const navigation = useNavigation();
    const {showPopup, changePopupVisibility, popupSubject} = usePopupState();
    const profileSettingsList = profileSettings();

    

  


    return (
          <View
            style={[index.column, index.fullWidth, index.mt20, index.gap10, index.padHor20, {marginBottom: 70}]}
          >
            <Header
              style={[header.tiny, header.semiBold, themeColors.black]}
              text={translations.profile.printPalSettings}
            />
            {profileSettingsList.map((setting) => (
                <TouchableOpacity
                    style={[
                    index.row,
                    index.alignCenter,
                    index.spaceBetween,
                    index.fullWidth,
                    index.br20,
                    index.padHor10,
                    index.overflowHidden,
                    {
                        height: 50,
                    },
                    ]}
                    key={setting.id}
                    onPress={setting.dataTitle === 'Business Profile' ? () => {  navigation.navigate('Question') } : setting.onPress === 'popup' ? () => {changePopupVisibility(setting.dataTitle) } : setting.onPress === 'logout' ? () => {appSignOut() }: () => {navigation.navigate('Settings', {settingName: setting.dataTitle}) }}
                >
                    <View style={[index.row, index.gap10, index.alignCenter]}>
                    <Icon icon={setting.icon} customSize={20} iconColor={`${themeColors.bgBlack.backgroundColor}`} />
                    <View style={[index.column, index.alignStart]}>
                    <Header
                        style={[header.paragraph, header.semiBold, themeColors.black]}
                        text={setting.title}
                    />
                    <Header 
                        style={[header.smallest, themeColors.grey]}
                        text={setting.subTitle}
                    />
                    </View>
                    </View>
                    <Icon icon="chevron-forward" iconColor={`${themeColors.bgBlack.backgroundColor}`} />
                </TouchableOpacity>
                ))}
          </View>

    );
  }
  