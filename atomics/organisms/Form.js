import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  ImageBackground,
} from "react-native";
import React from "react";
import header from "../../styles/header";
import Header from "../atoms/Header";
import index from "../../styles";
import textinput from "../../styles/text";
import registrationQuestions from "../../data/registration";
import { useRegistrationState } from "../../scripts/registrationhandler";
import { useAccountState } from "../../scripts/accounthandler";
import Button from "../atoms/Button";
import button from "../../styles/button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";
import Icon from "../atoms/Icon";
import { useNavigation } from "@react-navigation/native";
import { appSignIn } from "../../firebase/store";


export default function Form({ themeColors, page, translations}) {
    const registerQuestions = registrationQuestions();
    const { registrationStep, emailInput, setEmailInput, handleNextStep, error } = useRegistrationState();
    const [textInput , setTextInput] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');




  return (
  <View style={[index.fullWidth, index.padHor20, themeColors.bgWhite, {flex:1} ]}>
    <Header text= {page === 'Register' ? translations.register : translations.logIn} style={[header.bold, header.large, index.mt20, themeColors.black]} />
    {page === 'Register' ?
    registerQuestions.map((question) => (
        registrationStep === question.id ?

        <KeyboardAwareScrollView
        style={[
          index.wrapper,
          themeColors.bgWhite,
          index.padHor20,
        ]}
        contentContainerStyle={[{ flexGrow: 1 }]}
        key={question.id}
      >
            <Header text={question.question} style={[header.bold, header.tiny, index.mt20, themeColors.black]} />
            <View style={[index.fullWidth, index.row]}>
            <TextInput
            style={[textinput.textinput, index.mt20, index.br10, index.fullWidth, themeColors.borderBlack, index.padHor20, index.padVer10, error !== ""  ? themeColors.borderRed : themeColors.borderBlack, {height:50}]}
            placeholder={question.placeholder}
            placeholderTextColor={themeColors.grey.color}
            onChangeText={text => setTextInput(text)}
            secureTextEntry={question.dataName === 'password' && !showPassword ? true : false}
            />
            {question.dataName === 'password' || 'confirmPassword' ?
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={[index.absolute, {zIndex:10, right:20, top:35}]}>
              <Icon icon={showPassword ? 'eye-outline' : 'eye-off-outline'} iconColor={themeColors.black.color} customSize={20} />
            </TouchableOpacity>
            :
            null
            }
            </View>
            <Text style={[textinput.error, themeColors.red]}>{error}</Text>
            {question.dataName !== 'confirmPassword' ?

                  <View style={[index.spaceBetween, index.fullWidth, index.row, index.alignSelfCenter, index.absolute, {bottom:20}]}>
                    <Button icon={'arrow-back-outline'} iconColor={'black'} style={[button.grey, button.circle]} 
                    onPress={() => handleNextStep(question.dataName, 'decrement', question.id)}
                     />
                    <Button icon={'arrow-forward-outline'} iconColor={themeColors.bgWhite.backgroundColor} text={'Next'} style={[button.circle, index.gap10]}
                    onPress={() => handleNextStep(question.dataName, 'increment', question.id, textInput)}
                     />
</View>
: 
<Button text={'Register'} style={[button.large]} onPress={() => handleNextStep(question.dataName, 'increment', question.id, textInput) ? navigation.navigate('Home') : null} />
}

        </KeyboardAwareScrollView>
        :
        null
        ))
        :
        <KeyboardAwareScrollView
        style={[
          index.wrapper,
          themeColors.bgWhite,
          index.padHor20,
        ]}
        contentContainerStyle={[{ flexGrow: 1 }]}
        >
        <TextInput
        style={[textinput.textinput, index.mt20, index.br10, index.fullWidth, themeColors.borderBlack, index.padHor20, index.padVer10, error !== ""  ? themeColors.borderRed : themeColors.borderBlack, {height:50}]}
        placeholder='E-mail'
        placeholderTextColor={themeColors.grey.color}
        onChangeText={text => setLoginEmail(text)}
        />
        <TextInput
        style={[textinput.textinput, index.mt20, index.br10, index.fullWidth, themeColors.borderBlack, index.padHor20, index.padVer10, error !== ""  ? themeColors.borderRed : themeColors.borderBlack, {height:50}]}
        placeholder={translations.password}
        placeholderTextColor={themeColors.grey.color}
        secureTextEntry={true}
        onChangeText={text => setLoginPassword(text)}
        />
        <Text style={[textinput.error, themeColors.red]}>{error}</Text>
        <Button text={'Log in'} style={[button.large]} onPress={() => appSignIn(loginEmail, loginPassword) ? navigation.navigate('Home') : null } />
        </KeyboardAwareScrollView>

    }

  </View>
  );
}
