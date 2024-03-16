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
import Header from "../atoms/Header";
import header from "../../styles/header";
import homeheader from "../../styles/homeheader";

export default function Services() {
  const navigation = useNavigation();

  const { finished } = useAnswerState();

  const [completed, setCompleted] = useState(true);

  useEffect(() => {
    if (finished) {
      setCompleted(true);
    }
  }, [finished]);

  return (
    <View style={index.wrapper}>
      <View style={[index.fullWidth, index.pad20, header.bgWhite, index.screenAware]}>
        <Header text="Services" style={[header.bgWhite, header.bold]} />
      </View>
        <Filters headerText="Printing options" page="Services" />
      <Navbar page="Services" />
    </View>
  );
}
