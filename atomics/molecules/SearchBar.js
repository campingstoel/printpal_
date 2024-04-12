import { View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import button from "../../styles/button";
import Button from "../atoms/Button";
import index from "../../styles";
import colors from "../../styles/colors";

export default function SearchBar({ styles, iconStyles, translations, themeColors }) {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  return (
    <View style={[index.row, index.fullWidth, index.centered, index.padHor20, { gap: 10}, styles]}>
      <View style={[themeColors.bgButtonWhite, index.br10, index.pad5, index.row, index.shadow, index.spaceBetween, index.alignCenter, {height:60, width:'90%'}]}>
        <TextInput
          style={{
            textAlignVertical: "center",
            height: 30,
            padding: 0,
            flex: 1,
            marginLeft: 10,
            fontFamily: "Poppins-Bold",
            color: `${themeColors.bgBlack.backgroundColor}`,
            fontSize: 12,
          }}
          placeholder= {translations.search.placeholder}
          placeholderTextColor={`${themeColors.bgBlack.backgroundColor}`}
          value={search}
          onChangeText={setSearch}
        />
        <Button
          onPress={() => {
            navigation.navigate("PrintShops", { search });
          }}
          style={[button.icon, button.transparent]}
          icon={"arrow-forward-outline"}
          iconColor={`${themeColors.bgBlack.backgroundColor}`}
        />
      </View>
      <Button
        style={[themeColors.bgButtonWhite, button.thumb, button.shadow]}
        icon={"map-outline"}
        iconColor={`${themeColors.bgBlack.backgroundColor}`}
        onPress={() => {
          navigation.navigate("Map");
        }}
      />
    </View>
  );
}
