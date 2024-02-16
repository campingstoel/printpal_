import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import navbar from "../../styles/navbar";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function NavIcon({ icon, text, active, onPress, styles }) {
  return (
    <TouchableOpacity style={navbar.button} onPress={onPress}>
      <Ionicons
        name={icon}
        size={25}
        color={active ? '#c83564' : 'black'}
      />
      <Text style={[navbar.text, active ? navbar.active : null, styles]}>{text}</Text>
    </TouchableOpacity>
  );
}
