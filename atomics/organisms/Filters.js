import React from "react";
import { View } from "react-native";
import NavIcon from "../atoms/NavIcon";
import filters from "../../styles/filters";
import navbar from "../../styles/navbar";
import { filterNames } from "../../data/filterNames";


export default function Filters() {
    const filterProps = filterNames


  return (
    <View style={filters.wrapper}>
      {filterProps.map((item) => (
        <NavIcon
          key={item.id}
          icon={item.icon}
          text={item.text}
          styles={[navbar.borderbottom, navbar.grey ]}
                  />
      ))}
    </View>
  );
}
