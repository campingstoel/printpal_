import { View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import searchBar from "../../styles/searchbar";
import Icon from "../atoms/Icon";
import button from "../../styles/button";
import Button from "../atoms/Button";
import index from "../../styles";

export default function SearchBar() {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  return (
    <View style={[index.row, searchBar.wrapper, { gap: 10}]}>
    <View style={searchBar.searchBar}>
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
        iconColor={"black"}
      />
    </View>
    <Button style={[button.white, button.thumb, button.shadow]} icon={'map-outline'} iconColor={'black'} onPress={() => {
        navigation.navigate('Map');
    }} />
    </View>


  );
}
