import { View, TextInput, Image, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { questions } from "../../data/questions";
import questionsForm from "../../styles/questions";
import Header from "../atoms/Header";
import header from "../../styles/header";
import Answers from "../molecules/Answers";
import { useAnswerState } from "../../scripts/answers";
import index from "../../styles";
import Icon from "../atoms/Icon";
import {useWindowDimensions} from 'react-native';
import Mapbox from "../atoms/Mapbox";

export default function QuestionPopUp({}) {
  const questionProps = questions;
  const { questionNumber, allAnswers} =
    useAnswerState();
  const { height } = useWindowDimensions();

  return (
<View
    style={[questionsForm.wrapper, {height: height}]}
    >
    <View style={[index.column, index.bgBlack, index.fullWidth, {paddingHorizontal:20, height:50}]}>
        <Icon
          onPress={() => {
            console.log("Back button pressed");
          }}
          textStyle={[header.small, {color: "white"}]}
          icon={"close-outline"}
          iconColor={"white"}
          customSize={35}
        />
      </View>

      {questionProps.map((question) =>
        questionNumber == question.id ? (
          <View key={question.id} style={[questionsForm.question]}>
            {questionProps[questionNumber -1].questionType === "Map" ? (
              console.log("Map question"),
                        <Mapbox
                        style={questionsForm.map}
                        location={allAnswers["locationcoords"]}
                      />
            ) : (
            <Image
              source={question.image}
              style={questionsForm.image}/>
            )}
            <Header style={[header.tiny, header.bold, {paddingHorizontal:20}]} text={question.title} />
            <Header style={[header.paragraph, header.grey, {paddingHorizontal:20}]} text={question.question} />
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
