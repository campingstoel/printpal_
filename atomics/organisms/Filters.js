import React from "react";
import { TouchableOpacity, View } from "react-native";
import { filterNames } from "../../data/filterNames";
import filterblock from "../../styles/filterblock";
import FilterBlock from "../molecules/FilterBlock";
import index from "../../styles";
import { useNavigation } from "@react-navigation/native";

export default function Filters({ page, styles }) {
  const filterProps =
    page == "Home" ? filterNames.slice(0, 7) : filterNames.slice(0, 3);
  const navigation = useNavigation();

  return (
    <View style={[index.padHor10, styles]}>
      {page == "Home" ? (
        <View style={[index.spaceBetween, index.row, index.flexWrap, index.fullWidth]}>
          {filterProps.map((item) => (
            <FilterBlock
              key={item.id}
              text={item.text}
              important={page == "Search" ? item.important : null}
              image={item.image}
              onPress={item.onPress}
            />
          ))}

          <FilterBlock
            key="View more"
            text={"View more"}
            image={require("../../images/menu.png")}
            onPress={() => navigation.navigate("Search")}
          />
        </View>
      ) : (
        null
      )}
    </View>
  );
}
