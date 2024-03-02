import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Button from "../atoms/Button";
import Navbar from "../molecules/Navbar";
import SearchBar from "../molecules/SearchBar";
import Filters from "../organisms/Filters";
import index from "../../styles/index";
import SearchSuggestions from "../organisms/SearchSuggestions";
import HomeHeader from "../organisms/HomeHeader";
import QuestionPopUp from "../organisms/QuestionPopup";

export default function Home() {
  const navigation = useNavigation();
  const [completed, setCompleted] = useState(true)

  return (
       completed ?
        <View style={index.wrapper}>
      <HomeHeader active={'Printing'} />
      <SearchBar />
      <SearchSuggestions />
      <View style={index.body}>
        <Filters />
      </View>
      <Navbar page="Services" />
      </View>
      :
      <QuestionPopUp/>



  );
}
