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
import index from "../../styles";
import profileheader from "../../styles/profileheader";
import { profileButtons } from "../../data/profileButtons";
import Icon from "../atoms/Icon";
import { useQuestionHandlerState } from "../../scripts/questionhandler";

export default function ProfileHeader({ name, rating, profileType }) {
    const {changeQuestionShown } = useQuestionHandlerState();
  return (
    <View style={[index.column, index.fullWidth, index.pad20, {height:325}]}>
      <View
        style={[
          index.row,
          index.fullWidth,
          index.alignCenter,
          index.spaceBetween,
          index.mt20, {height:70}
        ]}
      >
        <Header style={[header.medium, header.semiBold]} text={name} />
        <Image
          source={require("../../images/profile.png")}
          style={[index.br50, index.xxlImg]}
        />
      </View>
      <View style={[index.row, index.spaceBetween, { gap: 5, width:65, padding:5, backgroundColor:'#f6f6f6', borderRadius:5, paddingHorizontal:10}]}>
            <Icon icon="star" customSize={18} iconColor={"black"} />
        <Header style={[header.smallest, header.bold]} text={rating} />
        </View>

      <View
        style={[
          index.row,
          index.fullWidth,
          index.alignCenter,
          index.spaceBetween,
          { gap: 10, marginTop: 20 },
        ]}
      >
        {profileButtons.map((button) => (
          <TouchableOpacity
            key={button.id}
            style={[
              index.column,
              index.spaceBetween,
              index.alignCenter,
              {
                backgroundColor: "#f6f6f6",
                width: "30%",
                height: 90,
                borderRadius: 10,
                padding: 10,
              },
            ]}
          >
              <Icon
                icon={button.icon}
                customSize={30}
                iconColor={"black"}
                style={{ marginTop: 5 }}
              />
            <Header
              style={[header.paragraph, header.semiBold]}
              text={button.text}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={[index.column, index.fullWidth, { gap: 10, marginTop: 20 }]}>
        {profileType == "Customer" ? (
        <TouchableOpacity
          style={[
            index.row,
            index.alignCenter,
            index.spaceBetween,
            {
              backgroundColor: "#f6f6f6",
              width: "100%",
              height: 80,
              borderRadius: 20,
              padding: 20,
            },
          ]}
          onPress={() => {
            changeQuestionShown()
          }
          }
        >
          <Icon icon="briefcase" customSize={35} iconColor={"black"} />
          <Header style={[header.tiny, header.semiBold]} text={"Set up a business profile"} />
        </TouchableOpacity>
        ) : 
        <TouchableOpacity
        style={[
          index.row,
          index.alignCenter,
          index.spaceBetween,
          {
            backgroundColor: "#f6f6f6",
            width: "100%",
            height: 80,
            borderRadius: 20,
            padding: 20,
          },
        ]}
      >
        <Header
          style={[header.tiny, header.semiBold]}
          text={"PrintPal Credits"}
        />
        <Header style={[header.small, header.semiBold]} text={"$100"} />
      </TouchableOpacity>
        }
      </View>
    </View>
  );
}
