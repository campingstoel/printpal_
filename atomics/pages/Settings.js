import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import index from "../../styles";
import Header from "../atoms/Header";
import header from "../../styles/header";
import { useWindowDimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useLanguageState } from "../../scripts/languagehandler";
import { useThemeState } from "../../scripts/themehandler";
import Icon from "../atoms/Icon";
import colors from "../../styles/colors";
import darkmodeColors from "../../styles/darkmodecolors";
import { usePopupState } from "../../scripts/popuphandler";
import Popup from "../organisms/Popup";

export default function Settings({ params }) {
  const route = useRoute();
  const settingName = route.params.settingName;
  const { language, changeLanguage } = useLanguageState();
  const { theme, changeTheme } = useThemeState();
  const themeColors = theme === "Light mode" ? colors : darkmodeColors;
  const { showPopup, changePopupVisibility, popupSubject } = usePopupState();

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const privacyOptions = [
    {
      id: 1,
      title: "Chatting",
      description: "Who can chat with me?",
    },
    {
      id: 2,
      title: "Location",
      description: "Who can see my location?",
    },
    {
      id: 3,
      title: "Profile",
      description: "Who can see my profile?",
    },
  ];

  const optionsField = (subject) => {
    return (
      <View
        style={[
          index.fullWidth,
          index.column,
          index.alignCenter,
          index.justifyCenter,
          index.pad20,
        ]}
      >
        {subject === "Privacy" ? (
          <View
            style={[
              index.fullWidth,
              index.column,
              index.alignCenter,
              index.justifyCenter,
            ]}
          >
            {privacyOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  index.fullWidth,
                  index.row,
                  index.justifyCenter,
                  { height: 80 },
                ]}
                onPress={() => {
                  changePopupVisibility(option.title);
                }}
              >
                <View
                  style={[index.fullWidth, index.column, index.justifyCenter]}
                >
                  <Header
                    style={[header.interMedium, header.bold, themeColors.black]}
                    text={option.title}
                  />
                  <Header
                    style={[header.paragraph, themeColors.grey]}
                    text={option.description}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <View
      style={[
        index.fullWidth,
        index.column,
        themeColors.bgWhite,
        { height: height },
      ]}
    >
      <StatusBar backgroundColor={`${themeColors.bgWhite.backgroundColor}`} />

      <View
        style={[
          index.column,
          index.fullWidth,
          { paddingHorizontal: 20, height: 50 },
        ]}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            icon="close-outline"
            customSize={30}
            iconColor={`${themeColors.bgBlack.backgroundColor}`}
          />
        </TouchableOpacity>
      </View>

      {settingName === "Privacy" ? (
        <View>
          <Header
            style={[
              header.tiny,
              header.bold,
              index.padHor20,
              themeColors.black,
            ]}
            text="Privacy"
          />
          {optionsField("Privacy")}
        </View>
      ) : null}
      {showPopup && <Popup subject={popupSubject} themeColors={themeColors} />}
    </View>
  );
}
