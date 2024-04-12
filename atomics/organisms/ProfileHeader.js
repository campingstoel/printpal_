import {
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import header from "../../styles/header";
import Header from "../atoms/Header";
import index from "../../styles";
import Icon from "../atoms/Icon";
import colors from "../../styles/colors";
import Button from "../atoms/Button";
import button from "../../styles/button";
import { imageStore, AuthStore } from "../../auth/store";
import { useState } from "react";


export default function ProfileHeader({ name, rating, themeColors }) {
  const navigation = useNavigation();
  const {images, loadedImages} = imageStore.useState();
  const {fullName, profileImage} = AuthStore.useState();

  return (
    <View style={[index.column, index.fullWidth, index.mb20]}>
      <View
        style={[index.fullWidth, index.row, index.alignEnd, { height: 70 }]}
      >
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          style={[
            button.thumb,
            button.circle,
            button.transparent,
            index.alignEnd,
            { height: 70 },
          ]}
          icon={"close-outline"}
          iconColor={`${themeColors.bgBlack.backgroundColor}`}
          customSize={35}
        />
      </View>
      <View style={[index.padHor20]}>
        <View
          style={[
            index.row,
            index.fullWidth,
            index.alignCenter,
            index.spaceBetween,
            index.mt20,
            { height: 70 },
          ]}
        >
          <Header style={[header.medium, header.bold, themeColors.black]} text={name.length > 15 ? name.substring(0, 14) + "..." : name } />
          <Image
            source={profileImage ? {uri: profileImage} : {uri: images.find((image) => image.includes("profile"))}}
            style={[index.br50, index.xxlImg]}
          />
        </View>
        <View
          style={[
            index.row,
            index.spaceBetween,
            themeColors.bgGrey,
            {
              gap: 5,
              width: 65,
              padding: 5,
              borderRadius: 5,
              paddingHorizontal: 10,
            },
          ]}
        >
          <Icon icon="star" customSize={18} iconColor={'lightgrey'} />
          <Header
            style={[header.smallest, header.bold, themeColors.grey]}
            text={rating}
          />
          </View>
        </View>
    </View>
  );
}
