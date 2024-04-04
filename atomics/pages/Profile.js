import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import Navbar from "../molecules/Navbar";
import index from "../../styles/index";
import { useAnswerState } from "../../scripts/answers";
import {Dimensions} from 'react-native'; 
import ProfileHeader from "../organisms/ProfileHeader";
import { useQuestionHandlerState } from "../../scripts/questionhandler";
import QuestionPopUp from "../organisms/QuestionPopup";


const { height } = Dimensions.get('window');

export default function Profile() {

  const { finished } = useAnswerState();

  const {questionsShown} = useQuestionHandlerState();

  const [completed, setCompleted] = useState(true);

  useEffect(() => {
    if (finished) {
      setCompleted(true);
    }
  }, [finished]);

  return (
    !questionsShown && completed ?
    <View style={[index.wrapper, index.alignCenter, {height:height}]}>
        <ProfileHeader name={'Camryn Terlouw'} rating={'5.0'} profileType={'Customer'} />

      <Navbar page="Profile" />
    </View>
    : <QuestionPopUp />
  );

}
