import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import listItem from "../../styles/listItem";
import Icon from "../atoms/Icon";
import Header from "../atoms/Header";
import header from "../../styles/header";
import index from "../../styles";
import colors from "../../styles/colors";

export default function ListItem({
  style,
  title,
  onPress,
  rating,
  distance,
  services,
  themeColors,
}) {
  return (
    <View style={[index.alignCenter, index.row, index.fullWidth, index.spaceBetween, index.mt10]}>
      <TouchableOpacity style={[listItem.listItem, index.pad10, index.m5, index.column, index.spaceAround, style]} onPress={onPress}>
        <Header text={title} style={[header.interMedium, header.bold, themeColors.black]} />
        <View style={[index.row, index.alignCenter, { gap: 5 }]}>
          <Icon icon="star" customSize={18} iconColor={"#f1c40f"} />
          <Header
            text={rating}
            style={[header.text, header.paragraph, themeColors.grey]}
          />
          <Header text="*" style={[header.text, header.paragraph, themeColors.grey]} />
          <Header
            text={`${distance}m`}
            style={[header.text, header.paragraph, themeColors.grey]}
          />
        </View>
        <Header text={services} style={[header.text, header.paragraph, themeColors.grey]}/>
  
      </TouchableOpacity>
      <TouchableOpacity
        style={[listItem.contactButton, index.pad10, index.m5, index.centered, style]}
        onPress={onPress}
      >
        <Icon
          icon="arrow-forward-outline"
          customSize={30}
          iconColor={`${themeColors.bgBlack.backgroundColor}`}
        />
      </TouchableOpacity>
    </View>
  );
}
