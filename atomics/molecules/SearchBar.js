import { View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import button from "../../styles/button";
import Button from "../atoms/Button";
import index from "../../styles";
import colors from "../../styles/colors";

export default function SearchBar({ styles, iconStyles }) {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  return (
    <View style={[index.row, index.padHor20, { gap: 10, marginTop:-30 }, styles]}>
      <View style={[colors.bgWhite, index.br15, index.pad5, index.row, index.shadow, index.spaceBetween, index.alignCenter, index.mb10, {height:60, width:'80%'}]}>
        <TextInput
          style={{
            textAlignVertical: "center",
            height: 30,
            padding: 0,
            flex: 1,
            marginLeft: 10,
            fontFamily: "Poppins-Bold",
            color: "#575757",
            fontSize: 12,
          }}
          placeholder="Search for printshops or services"
          value={search}
          onChangeText={setSearch}
        />
        <Button
          onPress={() => {
            navigation.navigate("PrintShops", { search });
          }}
          style={[button.icon, button.transparent]}
          icon={"arrow-forward-outline"}
          iconColor={iconStyles ? iconStyles : "black"}
        />
      </View>
      <Button
        style={[button.white, button.thumb, button.shadow]}
        icon={"map-outline"}
        iconColor={iconStyles ? iconStyles : "black"}
        onPress={() => {
          navigation.navigate("Map");
        }}
      />
    </View>
  );
}
