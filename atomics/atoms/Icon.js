import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import button from "../../styles/button";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Icon({ style, onPress, icon, iconColor, customSize }) {

  return (
    <TouchableOpacity style={[button.icon, style]} onPress={onPress}>
      <Ionicons name={icon} size={customSize ? customSize : 25} color={iconColor ? iconColor : 'white'} />
    </TouchableOpacity>
  );
}
