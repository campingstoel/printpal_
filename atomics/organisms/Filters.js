import React from "react";
import { TouchableOpacity, View } from "react-native";
import filters from "../../styles/filters";
import { filterNames } from "../../data/filterNames";
import filterblock from "../../styles/filterblock";
import FilterBlock from "../molecules/FilterBlock";
import Header from "../atoms/Header";
import header from "../../styles/header";
import { useNavigation } from "@react-navigation/native";

export default function Filters({headerText, page}) {
  
  const filterProps = page == 'Home' ? filterNames.slice(0,7) : filterNames.slice(0,5)
  const navigation = useNavigation();

  return (
    <View style={filters.wrapper}>
      {/* <View style={filters.header}> */}
      {/* <Header style={[header.tiny, header.bold]} text={headerText}/> */}
      {/* <TouchableOpacity onPress={() => navigation.navigate('Services')}>
        {page === 'Home' ?
      <Header style={[header.paragraph, header.bold]} text='See all'/>
      : null}
      </TouchableOpacity> */}
      {/* </View> */}
      <View style={filters.buttons}>
        {filterProps.map((item) => (
          <FilterBlock key={item.id} text={item.text} important={page == 'Services' ? item.important : null} image={item.image} />

        ))}
        {page == 'Home' ?
          <FilterBlock key="View more" text={'View more'} image={require('../../images/menu.png')} />
          : null}
      </View>
    </View>
  );
}
