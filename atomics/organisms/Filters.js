import React, { useState } from "react";
import { View } from "react-native";
import NavIcon from "../atoms/NavIcon";
import filters from "../../styles/filters";
import navbar from "../../styles/navbar";
import { filterNames } from "../../data/filterNames";
import { active } from "../../scripts/Filters";


export default function Filters() {
    const filterProps = filterNames
    const [activeFilters, setActiveFilters] = useState([])

  return (
    <View style={filters.wrapper}>
      {filterProps.map((item) => (
        <NavIcon
          key={item.id}
          icon={item.icon}
          text={item.text}
          styles={[navbar.borderbottom, navbar.grey, activeFilters.includes(item.id) ? navbar.pressed : null]}
          onPress={() => active(item.id, activeFilters, setActiveFilters)} // Pass necessary data
                  />
      ))}
    </View>
  );
}
