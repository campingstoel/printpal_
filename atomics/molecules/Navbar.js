import React from "react";
import { View } from "react-native";
import NavIcon from "../atoms/NavIcon";
import navbar from "../../styles/navbar";
import { navbarNames } from "../../data/navbarNames";
import { useNavigation } from "@react-navigation/native";
import index from "../../styles";


export default function Navbar({ page, themeColors }) {
  const navbarProps = navbarNames
  const navigation = useNavigation();

  return (
    <View style={[navbar.wrapper, index.row, index.spaceAround, index.fullWidth, index.padVer10, index.padHor20, themeColors.bgWhite]}>
      {navbarProps.map((item) => (
        <NavIcon
          key={item.id}
          icon={item.icon}
          text={item.text}
          active={item.text === page ? true : false}
          onPress={() => navigation.navigate(item.text)}
          themeColors={themeColors}
        />
      ))}
    </View>
  );
}
