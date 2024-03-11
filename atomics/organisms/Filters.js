import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import NavIcon from "../atoms/NavIcon";
import filters from "../../styles/filters";
import { filterNames } from "../../data/filterNames";
import filterblock from "../../styles/filterblock";
import FilterBlock from "../molecules/FilterBlock";
import Header from "../atoms/Header";
import header from "../../styles/header";

export default function Filters() {
  const filterProps = filterNames.slice(0,4);

  return (
    <View style={filters.wrapper}>
      <View style={filters.header}>
      <Header style={[header.tiny, header.bold]} text='Services'/>
      <TouchableOpacity>
      <Header style={[header.paragraph, header.bold]} text='See all'/>
      </TouchableOpacity>
      </View>
      <View style={filters.buttons}>
        {filterProps.map((item) => (
          <FilterBlock key={item.id} text={item.text} important={item.important} image={item.image} />
        ))}
      </View>
    </View>
  );
}
