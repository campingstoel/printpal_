import {
    View,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import header from "../../styles/header";
  import Header from "../atoms/Header";
  import index from "../../styles";
  import ProfileButtons from "../../data/profileButtons";
  import Icon from "../atoms/Icon";
  import colors from "../../styles/colors";
  import * as Progress from "react-native-progress";
  
  export default function ProfileStatistics({themeColors, translations}) {
    const profileButtons = ProfileButtons();

    return (
      <View style={[index.column, index.fullWidth, index.padHor20]}>
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
                  themeColors.bgGrey, 
                  {
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
                  iconColor={`${themeColors.bgBlack.backgroundColor}`}
                  style={{ marginTop: 5 }}
                />
                <Header
                  style={[header.paragraph, header.semiBold, themeColors.black]}
                  text={button.text}
                />
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={[index.column, index.fullWidth, { gap: 10, marginTop: 20 }]}
          >
            <TouchableOpacity
              style={[
                index.row,
                index.alignCenter,
                index.spaceBetween,
                index.fullWidth,
                index.br20,
                index.padHor20,
                index.overflowHidden,
                themeColors.bgGrey, 
                {
                  height: 100,
                },
              ]}
            >
              <Progress.Circle
                size={70}
                progress={0.7}
                showsText={true}
                thickness={7}
                color={`${themeColors.bgBlack.backgroundColor}`}
                borderWidth={0}
              />
              <View style={[index.column]}>
                <Header
                  style={[header.tiny, header.semiBold, themeColors.black]}
                  text={translations.profileCompletion}
                />
                <Header
                  style={[header.smallest, themeColors.grey]}
                  text={translations.profileCompletionDescription}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                index.row,
                index.alignCenter,
                index.spaceBetween,
                index.fullWidth,
                index.br20,
                index.padHor20,
                index.overflowHidden,
                themeColors.bgGrey,
                {
                  height: 100,
                },
              ]}
            >
              <Header
                style={[header.tiny, header.semiBold, themeColors.black]}
                text={"PrintPal Credits"}
              />
              <Header style={[header.small, header.semiBold, themeColors.black]} text={"$100"} />
            </TouchableOpacity>
          </View>
        </View>
    );
  }
  