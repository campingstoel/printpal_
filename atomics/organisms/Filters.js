import React from "react";
import { TouchableOpacity, View } from "react-native";
import filters from "../../styles/filters";
import { filterNames } from "../../data/filterNames";
import filterblock from "../../styles/filterblock";
import FilterBlock from "../molecules/FilterBlock";
import Header from "../atoms/Header";
import header from "../../styles/header";
import index from "../../styles";
import { useNavigation } from "@react-navigation/native";

export default function Filters({ headerText, page, styles }) {
  const filterProps =
    page == "Home" ? filterNames.slice(0, 7) : filterNames.slice(0, 3);
  const navigation = useNavigation();

  return (
    <View style={[filters.wrapper, styles]}>
      {page == "Home" ? (
        <View style={filters.buttons}>
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
        <View style={[filters.buttons]}>
          {filterProps.map((item) =>
            item.important ? (
              <FilterBlock
                key={item.id}
                text={item.text}
                important={item.important}
                image={item.image}
                onPress={item.onPress}
              />
            ) : null
          )}
          <View style={{width:'55%'}}>
            {filterProps.map((item) =>
              !item.important ? (
                <FilterBlock
                  key={item.id}
                  text={item.text}
                  styles={[filterblock.search]}
                  image={item.image}
                  onPress={item.onPress}
                />
              ) : null
            )}
          </View>
        </View>
      )}
    </View>
  );
}
