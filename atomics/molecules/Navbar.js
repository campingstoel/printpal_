import React from "react";
import { View } from "react-native";
import NavIcon from "../atoms/NavIcon";
import navbar from "../../styles/navbar";
import { navbarNames } from "../../data/navbarNames";
import { useNavigation } from "@react-navigation/native";


export default function Navbar({ page }) {
  const navbarProps = navbarNames
  const navigation = useNavigation();

  return (
    <View style={navbar.wrapper}>
      {navbarProps.map((item) => (
        <NavIcon
          key={item.id}
          icon={item.icon}
          text={item.text}
          active={item.text === page ? true : false}
          onPress={() => navigation.navigate(item.text)}
        />
      ))}
    </View>
  );
}
