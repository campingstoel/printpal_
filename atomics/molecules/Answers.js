import React, { useState } from "react";
import { View, TextInput } from "react-native";
import questionsForm from "../../styles/questions";
import Button from "../atoms/Button";
import button from "../../styles/button";
import textinput from "../../styles/text";
import index from "../../styles";
import { useQuestionState } from "../../scripts/questions";
import { useLocationState } from "../../scripts/location";
import Mapbox from "../atoms/Mapbox";

export default function Answers({ props }) {
  const {
    questionNumber,
    incrementQuestionNumber,
    decrementQuestionNumber,
    allAnswers,
    updateAnswer,
  } = useQuestionState();

  const { location, getLocation } = useLocationState();
  const handleInputChange = (fieldName, text) => {
    if (fieldName == "email") {
      text = text.replace(/\s/g, "");
    }

    updateAnswer(fieldName, text);
  };

  const handleNextQuestion = async () => {
    if (props.questionType == "Open") {
      if (
        allAnswers[props.objectSubType] == "" ||
        allAnswers[props.objectSubType] == null
      ) {
        return;
      }
      incrementQuestionNumber();
      return;
    }
    if (props.questionType == "true/false") {
      if (!allAnswers[props.objectSubType]) {
        return;
      }
      if (props.objectSubType == "locationServices") {
        getLocation().then((location) => {
          console.log(location);
            if (location) {
                updateAnswer("locationcoords", location);
                incrementQuestionNumber();
            }
        }); 
    }
    }
  };
  
  return (
    <View style={questionsForm.answer}>
      {props.questionType == "Open" ? (
        <TextInput
          placeholder={props.placeholder}
          style={textinput.textinput}
          onChangeText={(text) => handleInputChange(props.objectSubType, text)}
          maxLength={props.maxLength}
        />
      ) : null}
      {props.questionType == "true/false" ? (
        <View style={[index.row, index.centered, questionsForm.buttons]}>
          <Button
            onPress={() => handleInputChange(props.objectSubType, true)}
            style={[
              button.rounded,
              button.small,
              button.white,
              allAnswers[props.objectSubType] ? button.selected : null,
            ]}
            textStyle={
              allAnswers[props.objectSubType] ? null : button.blackText
            }
            text={"Yes"}
          />
          <Button
            onPress={() => handleInputChange(props.objectSubType, false)}
            style={[
              button.rounded,
              button.small,
              button.white,
              !allAnswers[props.objectSubType] ? button.selected : null,
            ]}
            textStyle={
              !allAnswers[props.objectSubType] ? null : button.blackText
            }
            text={"No"}
          />
        </View>
      ) : null}
      {props.questionType == "Map" ? (
        <Mapbox
          style={questionsForm.map}
          location={allAnswers["locationcoords"]}
        />
      ) : null}

      <View style={[index.row, index.centered, questionsForm.buttons]}>
        {questionNumber !== 1 ? (
          <Button
            onPress={decrementQuestionNumber}
            style={[button.circle, button.thumb, index.row, index.centered]}
            icon={"arrow-back-outline"}
          />
        ) : null}
        <Button
          onPress={handleNextQuestion}
          style={[button.circle, button.thumb]}
          icon={"arrow-forward-outline"}
        />
      </View>
    </View>
  );
}
