import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import filterblock from "../../styles/filterblock";
import Header from "../atoms/Header";
import header from "../../styles/header";

export default function FilterBlock({ style, text, onPress, image, important }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={[filterblock.wrapper, important ? filterblock.important   : null]}  onPress={onPress}>
      <View style={[filterblock.container, important ? filterblock.big : null]}>
        {important ? 
        <Header text={text} style={[header.bold, header.paragraph]}/>
              :
              null
        }
        {filterblock.image?
    <Image source={image
        } style={[filterblock.image, important ? filterblock.imageBig : null]}/>
        : null }
    </View>
    {!important ? 
        <Header text={text} style={[header.bold, header.paragraph, header.centered]}/>
        :
              null
        }
    </TouchableOpacity>
  );
}

