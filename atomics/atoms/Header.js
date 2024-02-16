import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import header from "../../styles/header";

export default function Header({ style, text }) {

  return (
    <Text style={[header.header, style]}>{text}</Text>
  );
}
