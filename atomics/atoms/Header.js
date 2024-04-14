import React from "react";
import { Text } from "react-native";
import header from "../../styles/header";

export default function Header({ style, text }) {

  return (
    <Text allowFontScaling={false} maxFontSizeMultiplier={1}  style={[header.header, style]}>{text}</Text>
  );
}
