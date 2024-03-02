import { View, TextInput, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { questions } from "../../data/questions";
import questionsForm from "../../styles/questions";

export default function QuestionPopUp({}) {
    const questionProps = questions
    const [questionNumber, setQuestionNumber] = useState(0)
    return (
        <View style={questionsForm.wrapper}>
      {questionProps.map((question) => (
        <View key={question.id} style={questionsForm.question}>

        </View>
      ))};

        </View>
    )
}
