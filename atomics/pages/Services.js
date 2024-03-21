import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import Navbar from "../molecules/Navbar";
import Filters from "../organisms/Filters";
import index from "../../styles/index";
import { useAnswerState } from "../../scripts/answers";
import Header from "../atoms/Header";
import header from "../../styles/header";
import {Dimensions} from 'react-native'; 
const { height } = Dimensions.get('window');

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
    <View style={[index.wrapper, {height:height}]}>
      <View style={[index.fullWidth, index.pad20, header.bgWhite, index.screenAware]}>
        <Header text="Services" style={[header.bgWhite, header.bold]} />
      </View>
        <Filters headerText="Printing options" page="Services" />
      <Navbar page="Services" />
    </View>
  );
}
