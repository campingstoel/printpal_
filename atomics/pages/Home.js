import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import Navbar from "../molecules/Navbar";
import SearchBar from "../molecules/SearchBar";
import Filters from "../organisms/Filters";
import index from "../../styles/index";
import SearchSuggestions from "../organisms/SearchSuggestions";
import HomeHeader from "../organisms/HomeHeader";
import QuestionPopUp from "../organisms/QuestionPopup";
import { useAnswerState } from "../../scripts/answers";
import {Dimensions} from 'react-native'; 
import { Platform } from "react-native";
const { height } = Dimensions.get('window');

export default function Home() {
  const navigation = useNavigation();

  const { finished } = useAnswerState();

  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (finished) {
      setCompleted(true);
    }
  }, [finished]);

  return completed ? (
    <View style={[index.wrapper, index.alignCenter, {height:height}]}>
      <HomeHeader active={"Printing"} />
      <SearchBar />
      <SearchSuggestions />
      <View style={index.body}>
        <Filters headerText="Suggestions" page="Home" />
      </View>
      <Navbar page="Home" />
    </View>
  ) : (
    <QuestionPopUp />
  );
}
