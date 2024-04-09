import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import stories from "../../styles/stories";
import { storiesData } from "../../data/stories";
import Icon from "../atoms/Icon";
import Header from "../atoms/Header";
import header from "../../styles/header";
import { ScrollView } from "react-native-gesture-handler";
import index from "../../styles";
import colors from "../../styles/colors";

export default function Stories({translations, themeColors}) {
  const navigation = useNavigation();

  return (
    <View
      style={[
        index.fullWidth,
        index.spaceBetween,
        index.mt20,
        themeColors.bgWhite,
      ]}
    >
      <Header style={[header.bold, header.tiny, themeColors.black]} text={translations.storyHeaderTitle} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {storiesData.map((story) => (
          <View
            key={story.id}
            style={[
              stories.story,
              index.mt20,
              index.br20,
              index.mh5,
              index.pad10,
              themeColors.bgGrey,
              { width: 300, height: 200 },
            ]}
          >
            <Image source={story.image} style={[stories.image, index.fullWidth, index.mb10, index.br20]} />
            <TouchableOpacity
              style={[stories.button, colors.bgWhite, index.br50, index.absolute]}
              onPress={() => {
                navigation.navigate(story.onPress);
              }}
              activeOpacity={0.6}
            >
              <Icon
                icon={"arrow-forward"}
                customSize={30}
                iconColor={"black"}
              />
            </TouchableOpacity>
            <Header style={[header.bold, header.paragraph, themeColors.black]} text={story.title} />
            <Header style={[header.tiny, header.paragraph, themeColors.black]} text={story.description.length > 24
                ? story.description.substring(0, 24) + "..."
                : story.description} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
