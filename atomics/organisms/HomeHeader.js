import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import header from "../../styles/header";
import Header from "../atoms/Header";
import homeheader from "../../styles/homeheader";
import index from "../../styles";
import { headerNames } from "../../data/headerNames";
import Icon from "../atoms/Icon";

export default function HomeHeader({ headerText }) {
    
  return (
    <View style={[homeheader.wrapper, index.column]}>
        <ImageBackground
          source={require("../../images/header.jpg")}
          style={homeheader.imageBackground}>

  
        <View style={[homeheader.header]}>
          <Header
            style={[header.small, header.bold, header.white]}
            text={headerText}
          />
        </View>
        <View
          style={[homeheader.filterWrapper]}
        >
          {headerNames.map((item) => (
            <TouchableOpacity key={item.id} style={homeheader.filter}>
            <Icon icon={item.icon} customSize={30} iconColor={'black'} />
              <Text style={[homeheader.text]}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
        </ImageBackground>
    </View>
  );
}
