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
import { headerNames } from "../../data/headerNames";
import Icon from "../atoms/Icon";
import colors from "../../styles/colors";

export default function HomeHeader({ headerText, headerImage, page, styles }) {
  return (
    <View style={[index.fullWidth, index.column, colors.bgNavyBlue, styles, {height:325}]}>
      <ImageBackground source={headerImage} style={homeheader.imageBackground}>
        <View style={[homeheader.header, index.fullWidth, index.column, index.justifyCenter, index.mt20, index.padHor20, {height:70}]}>
          <Header
            style={[header.small, header.bold, colors.white]}
            text={headerText}
          />
          {page == "Search" ? (
            <View style={[index.row, { gap: 10 }]}>
              <Header style={[header.small, colors.white]} text="for" />
              <Header
                style={[header.small, header.bold, colors.hlBlue]}
                text="Printshops"
              />
            </View>
          ) : null}
        </View>
        <View
          style={[index.alignCenter, index.row, index.fullWidth, index.justifyCenter, index.mt30, index.flexWrap, index.padHor10, index.gap10, page == "Search" ? {marginTop:100} : null]
             }
        >
          {page == "Search" ? (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {headerNames.map((item) => (
                <TouchableOpacity key={item.id} style={[homeheader.searchFilter, index.row, index.flexStart, index.alignCenter, index.padHor20, index.shadow, colors.bgWhite, index.br50, index.gap10, index.mh5]}>
                  <Icon icon={item.icon} customSize={30} iconColor={"black"} />
                  <Header style={[header.smallest, header.semiBold]} text={item.text} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          ) : (
            headerNames.map((item) => (
              <TouchableOpacity key={item.id} style={[homeheader.filter, index.row, index.flexStart, index.alignCenter, index.padHor20, index.shadow, colors.bgWhite, index.br50, index.gap10]}>
                <Icon icon={item.icon} customSize={30} iconColor={"black"} />
                <Header style={[header.smallest, header.semiBold]} text={item.text} />
              </TouchableOpacity>
            ))
          )}
        </View>
      </ImageBackground>
    </View>
  );
}
