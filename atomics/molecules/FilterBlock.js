import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import filterblock from "../../styles/filterblock";
import Header from "../atoms/Header";
import header from "../../styles/header";
import index from "../../styles";
import colors from "../../styles/colors";

export default function FilterBlock({
  styles,
  text,
  onPress,
  image,
  important,
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[filterblock.wrapper, index.column, important ? filterblock.important : null, styles]}
      onPress={onPress}
    >
      <View style={[filterblock.container, index.alignCenter, index.column, index.pad10, important ? [filterblock.big, index.row, index.spaceBetween] : null]}>
        {important ? (
          <Header text={text} style={[header.semiBold, header.paragraph]} />
        ) : null}
        {filterblock.image ? (
          <Image
            source={image}
            style={[filterblock.image, index.mb10, index.mdImg, important ? filterblock.imageBig : null]}
          />
        
          
        ) : null}
        {
          !important ? (
            <Header text={text} style={[header.semiBold, header.smallest, colors.grey]} />
          ) : null
        
        }
      </View>
    </TouchableOpacity>
  );
}
