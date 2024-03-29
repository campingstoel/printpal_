import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import Navbar from "../molecules/Navbar";
import index from "../../styles/index";
import HomeHeader from "../organisms/HomeHeader";
import { useAnswerState } from "../../scripts/answers";
import {Dimensions} from 'react-native'; 
import SearchBar from '../molecules/SearchBar';
import   ListView from '../organisms/ListView';
import Filters from "../organisms/Filters";
import Header from "../atoms/Header";
import header from "../../styles/header";
const { height } = Dimensions.get('window');

export default function Search() {
  const navigation = useNavigation();

  const { finished } = useAnswerState();


  useEffect(() => {
    if (finished) {
      setCompleted(true);
    }
  }, [finished]);

  return (
    <View style={[index.wrapper, {height:height}]}>
            <HomeHeader headerText={'Search'}  page={'Search'} styles={{borderBottomRightRadius:25, borderBottomLeftRadius:25}} />
            <SearchBar styles={{position: 'absolute', top:140}} iconStyles={'#7049b7'}/>
            <Filters page={'Search'} styles={{position: 'absolute', top:190, alignSelf:'center', paddingHorizontal:20}} />
            <Header text='Printshops' style={[header.bold, header.small, {marginLeft:20, marginTop: 10}]} />
      <ListView />
            

      <Navbar page="Search" />
    </View>
  );
}
