import { View, TextInput, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { questions } from "../../data/questions";
import questionsForm from "../../styles/questions";
import Header from "../atoms/Header";
import header from "../../styles/header";
import Answers from "../molecules/Answers";
import { useAnswerState } from "../../scripts/answers";
import * as Progress from "react-native-progress";
import index from "../../styles";

export default function QuestionPopUp({}) {
  const questionProps = questions;
  const { questionNumber, progressText } = useAnswerState();
  const progress = questionNumber / questionProps.length;
  return (
    <View style={questionsForm.wrapper}>
      <View style={[index.column]}>
        <Progress.Bar progress={progress} width={null} color="black" />
        <Header text={progressText} style={[header.header, header.paragraph]} />
      </View>

      {questionProps.map((question) =>
        questionNumber == question.id ? (
          <View key={question.id} style={questionsForm.question}>
            <Header style={[header.small]} text={question.question} />
            <Answers
              props={{
                questionType: question.questionType,
                placeholder: question.placeholder,
                objectSubType: question.objectSubType,
                maxLength: question.maxLength,
                falseAction: question.falseAction,
              }}
            />
          </View>
        ) : null
      )}
    </View>
  );
}
