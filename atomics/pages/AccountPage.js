import {
  ScrollView,
  View,
  StatusBar,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import index from "../../styles/index";
import { Dimensions } from "react-native";
import { useLanguageState } from "../../scripts/languagehandler";
import darkmodeColors from "../../styles/darkmodecolors";
import { useThemeState } from "../../scripts/themehandler";
import colors from "../../styles/colors";
import { useAccountState } from "../../scripts/accounthandler";
import Button from "../atoms/Button";
import textinput from "../../styles/text";
import { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Header from "../atoms/Header";
import header from "../../styles/header";
import {Picker} from '@react-native-picker/picker';
import SplashScreen from "../organisms/SplashScreen";


const { height } = Dimensions.get("window");

export default function AccountPage() {
  const navigation = useNavigation();
  const { theme, changeTheme } = useThemeState();
  const {language , changeLanguage, translations} = useLanguageState();
  const themeColors = theme === "Light mode" ? colors : darkmodeColors;
  const { setEmailInput, emailInput, checkEmail, error, attemptSignIn, loading } = useAccountState();

  useEffect(() => {
    const signIn = async () => {
    if(await attemptSignIn()){
      navigation.navigate('Home');

    }
    }
    signIn();
  }, []);

  

  const pickerOptions = [
    {id: 1, label: '🇬🇧', abbreviation: 'en'},
    {id: 2, label: '🇳🇱', abbreviation: 'nl'},
  ];

  const handleInputChange = (email) => {
    setEmailInput(email);
  };

  return (
    loading ? 
    <SplashScreen/>
    : <View
    style={[
      index.wrapper,
      themeColors.bgWhite,
      index.padHor20,
      { height: height },
    ]}
  >
    <StatusBar backgroundColor={`${themeColors.bgWhite.backgroundColor}`} />
    <KeyboardAwareScrollView
      style={[
        index.wrapper,
        themeColors.bgWhite,
        index.padHor20,
        { height: height },
      ]}
      contentContainerStyle={[index.centered, { flexGrow: 1 }]}
    >
      <Image
        source={require("../../assets/icon.png")}
        style={{ resizeMode: "contain", width: 100, height: 100 }}
      />
      <Header
        text="PrintPal"
        style={[
          header.semiBold,
          header.medium,
          index.mt20,
          themeColors.black,
        ]}
      />

      <View
        style={[
          index.wrapper,
          index.alignCenter,
          index.row,
          index.alignCenter,
          index.justifyCenter,
          index.gap5,
          index.mt30,
          { height: 50 },
        ]}
      >
        <View
          style={[
            index.br10,
            themeColors.borderBlack,
            themeColors.bgGrey,
            index.justifyCenter,
            { width: "23%", height: "100%", overflow: "hidden" },
          ]}
        >
          <Picker
            selectedValue={language}
            onValueChange={(itemValue, itemIndex) => changeLanguage(itemValue)}
            style={{ height: 50, width: "150%"}}
            mode="dropdown"
            dropdownIconColor='white'
          >
            {pickerOptions.map((option) => (
              <Picker.Item key={option.id} label={option.label} value={option.abbreviation} />
            ))}
          </Picker>
        </View>

        <TextInput
          placeholder="E-mail"
          style={[
            textinput.textinput,
            index.br10,
            index.padHor20,
            themeColors.borderBlack,
            error !== "" ? colors.borderRed : null,
            { width: "75%" },
          ]}
          onChangeText={handleInputChange}
        />
      </View>
      <Button
        text={translations.logIn}
        themeColors={themeColors}
        onPress={ async () => {
          await checkEmail(emailInput) == 'yes' ? navigation.navigate('Login', { email: emailInput }): await checkEmail(emailInput) == 'no' ?  navigation.navigate('Register', { email: emailInput }) : null;
        }}
        style={[themeColors.bgBlack, index.fullWidth, index.mt15]}
      />
    </KeyboardAwareScrollView>
  </View>
  );
}
