import { View, TextInput, Image, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { questions } from "../../data/questions";
import Header from "../atoms/Header";
import header from "../../styles/header";
import Answers from "../molecules/Answers";
import { useAnswerState } from "../../scripts/answers";
import { useQuestionHandlerState } from "../../scripts/questionhandler";
import index from "../../styles";
import Button from "../atoms/Button";
import {useWindowDimensions} from 'react-native';
import Mapbox from "../atoms/Mapbox";
import button from "../../styles/button";
import colors from "../../styles/colors";

export default function QuestionPopUp({}) {
  const questionProps = questions;
  const { questionNumber, allAnswers} =
    useAnswerState();
  const { height } = useWindowDimensions();
  const {changeQuestionShown} = useQuestionHandlerState();
  const navigation = useNavigation();


  return (
<View
    style={[index.fullWidth, index.column, {height: height}]}
    >
    <View style={[index.column, colors.bgBlack, index.fullWidth, {paddingHorizontal:20, height:50}]}>
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          style={[button.thumb, button.circle]}
          icon={"close-outline"}
          iconColor={"white"}
          customSize={35}
        />
      </View>

      {questionProps.map((question) =>
        questionNumber == question.id ? (
          <View key={question.id} style={[index.fullWidth, index.fullFlex, index.column, index.justifyCenter]}>
            {questionProps[questionNumber -1].questionType === "Map" ? (
                        <Mapbox
                        location={allAnswers["locationcoords"]}
                      />
            ) : (
            <Image
              source={question.image}
              style={[index.fullWidth, index.mb20, {height:250}]}/>
            )}
            <Header style={[header.tiny, header.bold, {paddingHorizontal:20}]} text={question.title} />
            <Header style={[header.paragraph, colors.grey, {paddingHorizontal:20}]} text={question.question} />
            <Answers
              props={{
                questionType: question.questionType,
                placeholder: question.placeholder,
                objectSubType: question.objectSubType,
                maxLength: question.maxLength,
                falseAction: question.falseAction,
                answers : question.answers
              }}
            />
          </View>
        ) : null
      )}
    </View>
  );
}
