import { ScrollView, View } from "react-native";
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
import Stories from "../organisms/Stories";


const { height } = Dimensions.get('window');

export default function Home() {
  const navigation = useNavigation();

  const { finished } = useAnswerState();

  const [completed, setCompleted] = useState(true);

  useEffect(() => {
    if (finished) {
      setCompleted(true);
    }
  }, [finished]);

  return completed ? (
    <View style={[index.wrapper, index.alignCenter, {height:height}]}>
      <HomeHeader headerText={'Find printshops and \nservices near you'} headerImage={require("../../images/header.jpg")} page={'Home'} />
      <SearchBar />
      <View style={index.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Filters headerText="Services" page="Home" />
        <Stories />
        </ScrollView>
      </View>
      <Navbar page="Home" />
    </View>
  ) : (
    <QuestionPopUp />
  );
}
