import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  ImageBackground,
} from "react-native";
import React from "react";
import header from "../../styles/header";
import Header from "../atoms/Header";
import homeheader from "../../styles/homeheader";
import index from "../../styles";
import HeaderNames from "../../data/headerNames";
import Icon from "../atoms/Icon";
import colors from "../../styles/colors";
import ShimmerPlaceHolder from "../atoms/Shimmer";

export default function HomeHeader({ headerText, headerImage, page, styles, translations, themeColors, loaded }) {
  const headerNames = HeaderNames()
  return (
    <View style={[index.fullWidth, index.column, index.mb20, themeColors.bgWhite, styles]}>
        <View style={[homeheader.header, index.fullWidth, index.column, index.justifyCenter, index.mt20, index.padHor20, {height:70}]}>
          <Header
            style={[header.small, header.bold, themeColors.black]}
            text={headerText}
          /> 
        </View>
        <View
          style={[index.alignCenter, index.row, index.fullWidth, index.justifyCenter, index.mt30, index.flexWrap, index.padHor10, index.gap10, page == "Search" ? {marginTop:100} : null]
             }
        >
          {
            headerNames.map((item) => (
              loaded ?
              <TouchableOpacity key={item.id} style={[homeheader.filter, index.row, index.flexStart, index.alignCenter, index.padHor20, index.shadow, themeColors.bgButtonWhite, index.br50, index.gap10]}>
                <Icon icon={item.icon} customSize={30} iconColor={`${themeColors.bgBlack.backgroundColor}`} />
                <Header style={[header.smallest, header.semiBold, themeColors.black]} text={item.text} />
              </TouchableOpacity>
              : <ShimmerPlaceHolder key={item.id} style={[homeheader.filter, index.row, index.flexStart, index.alignCenter, index.padHor20, index.shadow, themeColors.bgButtonWhite, index.br50, index.gap10]} />
            ))
        }
        </View>
    </View>
  );
}
