import React, { useState, useContext } from "react";
import { View, TextInput, Text } from "react-native";
import questionsForm from "../../styles/questions";
import Button from "../atoms/Button";
import button from "../../styles/button";
import textinput from "../../styles/text";
import index from "../../styles";
import { useAnswerState } from "../../scripts/answers";
import { useLocationState } from "../../scripts/location";
import Mapbox from "../atoms/Mapbox";
import { useQuestionHandlerState } from "../../scripts/questionhandler";

export default function Answers({ props }) {
  const {
    questionNumber,
    incrementQuestionNumber,
    decrementQuestionNumber,
    allAnswers,
    updateAnswer,
  } = useAnswerState();

  const { error, nextQuestionHandler } = useQuestionHandlerState();

  const { location, getLocation } = useLocationState();
  const handleInputChange = (fieldName, text) => {
    if (fieldName == "email") {
      text = text.replace(/\s/g, "");
    }

    updateAnswer(fieldName, text);
  };

  const handleNextQuestion = async () => {
   nextQuestionHandler(props);
}
  
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
        <View>
        <Mapbox
          style={questionsForm.map}
          location={allAnswers["locationcoords"]}
        />
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
      </View>
      ) : null}
      <Text style={textinput.error}>{error}</Text>

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
