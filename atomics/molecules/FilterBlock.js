import React, { useState } from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import filterblock from "../../styles/filterblock";
import Header from "../atoms/Header";
import header from "../../styles/header";
import index from "../../styles";
import colors from "../../styles/colors";
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

export default function FilterBlock({
  styles,
  text,
  onPress,
  image,
  important,
  themeColors,
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[filterblock.wrapper, index.column, themeColors.bgGrey, index.br10, index.pad5, important ? filterblock.important : null, styles]}
      onPress={onPress}
    >
      <View style={[index.column, index.alignCenter, index.fullFlex, index.flexEnd, important ? [filterblock.big, index.row, index.spaceBetween] : null]}>
        {important ? (
          <Header text={text} style={[header.semiBold, header.paragraph, themeColors.black]} />
        ) : null}
        {filterblock.image ? (
          <Image
            source={image}
            style={[filterblock.image, index.lgImg, index.mb10, important ? filterblock.imageBig : null]}
          />
        
          
        ) : null}
        {
          !important ? (
            <Header text={text} style={[header.bold, header.smallest, themeColors.black]} />
          ) : null
        
        }
      </View>
    </TouchableOpacity>
  );
}
