import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import button from "../../styles/button";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Button({ style, text, onPress, icon }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={[button.button, style]} onPress={onPress}>
      <Ionicons name={icon} size={30} color="white" />
    </TouchableOpacity>
  );
}
