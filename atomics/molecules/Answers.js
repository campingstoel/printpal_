import React from "react";
import { View, TextInput, Text, KeyboardAvoidingView } from "react-native";
import questionsForm from "../../styles/questions";
import Button from "../atoms/Button";
import button from "../../styles/button";
import textinput from "../../styles/text";
import index from "../../styles";
import { useAnswerState } from "../../scripts/answers";
import Mapbox from "../atoms/Mapbox";
import { useQuestionHandlerState } from "../../scripts/questionhandler";
import { Platform } from "react-native";
import Header from "../atoms/Header";
import header from "../../styles/header";

export default function Answers({ props }) {
  const { questionNumber, decrementQuestionNumber, allAnswers, updateAnswer } =
    useAnswerState();

  const { error, nextQuestionHandler } = useQuestionHandlerState();

  const handleInputChange = (fieldName, text) => {
    updateAnswer(fieldName, text);
  };

  const handleNextQuestion = async () => {
    nextQuestionHandler(props);
  };

  const trueFalseView = () => {
    return (
      <View style={[index.row, index.centered, {gap:15}]}>
        <Button
          onPress={() => handleInputChange(props.objectSubType, true)}
          style={[
            button.rounded,
            button.small,
            button.white,
            allAnswers[props.objectSubType] ? button.selected : null,
          ]}
          textStyle={allAnswers[props.objectSubType] ? null : button.blackText}
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
          textStyle={!allAnswers[props.objectSubType] ? null : button.blackText}
          text={"No"}
        />
      </View>
    );
  };

  const MultipleChoiceView = () => {
    return props.answers.map((answer) => (
      <Button
        key={answer}
        onPress={() => {
          if (allAnswers[props.objectSubType]) {
            if (allAnswers[props.objectSubType].includes(answer)) {
              let newAnswers = allAnswers[props.objectSubType].filter(
                (item) => item !== answer
              );
              updateAnswer(props.objectSubType, newAnswers);
            } else {
              let newAnswers = [...allAnswers[props.objectSubType], answer];
              updateAnswer(props.objectSubType, newAnswers);
            }
          } else {
            updateAnswer(props.objectSubType, [answer]);
          }
        }}
        style={[
          button.rounded,
          button.medium2,
          button.white,
          allAnswers[props.objectSubType] &&
          allAnswers[props.objectSubType].includes(answer)
            ? button.selected
            : null,
        ]}
        textStyle={
          allAnswers[props.objectSubType] &&
          allAnswers[props.objectSubType].includes(answer)
            ? null
            : button.blackText
        }
        text={answer}
      />
    ));
  };

  return (
    <View style={[questionsForm.answer]}>
      {props.questionType == "Open" ? (
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 :20}
        enabled={Platform.OS === "ios" ? true : false}
        
        >
        <Header style={[header.paragraph, header.semiBold]} text={props.placeholder} />
        <TextInput
          style={[
            textinput.textinput,
            error !== "" ? textinput.errorBorder : null,
          ]}
          onChangeText={(text) => handleInputChange(props.objectSubType, text)}
          maxLength={props.maxLength}
        />
        </KeyboardAvoidingView>
      ) : null}
      {props.questionType == "true/false" ? trueFalseView() : null}
      {props.questionType == "Map" ? (
          trueFalseView()
      ) : null}

      {props.questionType == "Multiple" ? (
        <View
          style={[
            index.spaceBetween,
            index.flexWrap,
            index.row,
            { rowGap: 10 },
          ]}
        >
          {MultipleChoiceView()}
        </View>
      ) : null}
      <Text style={textinput.errorText}>{error}</Text>
      {questionNumber !== 1 ? (
      <View style={[index.row, index.spaceBetween, questionsForm.buttons]}>
          <Button
            onPress={decrementQuestionNumber}
            style={[
              button.circle,
              button.thumb,
              index.row,
              index.centered,
              button.grey,
            ]}
            icon={"arrow-back-outline"}
            iconColor={"black"}
          />
        <Button
          onPress={handleNextQuestion}
          style={[button.circle, button.thumb]}
          icon={"arrow-forward-outline"}
        />
      </View>
      ) : (
        <Button
          onPress={handleNextQuestion}
          style={[button.large, index.alignSelfCenter, {position:'absolute', bottom:20}]}
          text={"Get Started"}
        />
      )}
    </View>
  );
}
