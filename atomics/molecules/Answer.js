import React from "react";
import { View, TextInput } from "react-native";
import questionsForm from "../../styles/questions";
import Button from "../atoms/Button";
import button from "../../styles/button";
import textinput from "../../styles/text";
import index from "../../styles";
import { useQuestionState } from "../../scripts/questions";


export default function Answer({ questionType, placeholder}) {
  const { questionNumber, incrementQuestionNumber, decrementQuestionNumber} = useQuestionState();

  return (
    <View style={questionsForm.answer}>
      {questionType == "Open" ? (
        <TextInput placeholder={placeholder} style={textinput.textinput} />
      ) : null}
      <View style={[index.row, index.centered, questionsForm.buttons]}>
        {questionNumber !== 1?
        <Button onPress={decrementQuestionNumber} style={[button.circle, button.thumb, index.row, index.centered]} icon={'arrow-back-outline'} /> : null
}
<Button onPress={incrementQuestionNumber} style={[button.circle, button.thumb]} icon={'arrow-forward-outline'} />
      </View>
    </View>
  );
}
