import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import index from "../../styles";
import colors from "../../styles/colors";
import Header from "./Header";
import header from "../../styles/header";

export default function NavIcon({ icon, text, active, onPress, styles }) {
  return (
    <TouchableOpacity style={[index.pad10, index.centered, index.column]} onPress={onPress}>
      <Ionicons
        name={icon}
        size={25}
        color={active ? 'black' : '#a1a1a1'}
      />
      <Header style={[header.smallest, colors.grey, active ? colors.black : null, styles]} text={text} />
    </TouchableOpacity>
  );
}
