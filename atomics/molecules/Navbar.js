import React from "react";
import { View } from "react-native";
import NavIcon from "../atoms/NavIcon";
import navbar from "../../styles/navbar";
import { navbarNames } from "../../data/navbarNames";


export default function Navbar({ page }) {
  const navbarProps = navbarNames


  return (
    <View style={navbar.wrapper}>
      {navbarProps.map((item) => (
        <NavIcon
          key={item.id}
          icon={item.icon}
          text={item.text}
          active={item.text === page ? true : false}
          onPress={() => navigation.navigate(item.id)}
        />
      ))}
    </View>
  );
}
