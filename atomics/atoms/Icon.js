import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import button from "../../styles/button";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Icon({ style, icon, iconColor, customSize }) {
  return (
    <View style={[button.icon, style]}>
      <Ionicons
        name={icon}
        size={customSize ? customSize : 25}
        color={iconColor ? iconColor : "white"}
      />
    </View>
  );
}
