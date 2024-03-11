import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import button from "../../styles/button";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Button({ style, text, onPress, icon, iconColor, textStyle }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={[button.button, style]} onPress={onPress}>
      <Text style={[button.text 
      , textStyle
      ]}>{text}</Text>
      {icon && <Ionicons name={icon} size={25} color={iconColor ? iconColor : 'white'} />}
    </TouchableOpacity>
  );
}
